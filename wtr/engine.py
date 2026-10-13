"""Live engine: load Gemma once on the AMD GPU, then read any reviews a seller pastes in.

The per-review prompt is the one measured in the benchmark (wtr.prompt); the product summary is the one
summarize_amd.py ran. Shares are counted in code, the model only reads and words.
"""
import collections
import json
import time

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

from wtr.prompt import SYSTEM, parse, to_label, user_message

SUMMARY_SYSTEM = """You help an online fashion seller cut returns. You get counts and real customer quotes for one product.
Write only JSON with these keys:
"size_note": one line for the size selector, e.g. "Runs small: most customers size up one", or "" if fit is fine.
"listing_fix": one or two sentences to add to the product description that answer the top return reason.
"photo_to_add": the one photo or measurement that would have prevented most of these returns, or "".
"headline": six words or fewer naming the main reason this product comes back.
Use only what the quotes and counts support. Plain words, no marketing tone."""


class Engine:
    def __init__(self, model="unsloth/gemma-3-12b-it"):
        self.tok = AutoTokenizer.from_pretrained(model, padding_side="left")
        self.model = AutoModelForCausalLM.from_pretrained(model, dtype=torch.bfloat16, device_map="cuda").eval()
        self.gpu = torch.cuda.get_device_name(0)

    def _generate(self, system, users, max_new_tokens):
        prompts = [self.tok.apply_chat_template([{"role": "system", "content": system}, {"role": "user", "content": u}],
                                                tokenize=False, add_generation_prompt=True) for u in users]
        enc = self.tok(prompts, return_tensors="pt", padding=True).to("cuda")
        with torch.no_grad():
            gen = self.model.generate(**enc, max_new_tokens=max_new_tokens, do_sample=False)
        return [self.tok.decode(ids, skip_special_tokens=True) for ids in gen[:, enc["input_ids"].shape[1]:]]

    def read(self, texts, batch=32):
        out = []
        for i in range(0, len(texts), batch):
            chunk = texts[i : i + batch]
            for text, raw in zip(chunk, self._generate(SYSTEM, [user_message(t) for t in chunk], 160)):
                out.append({"text": text} | parse(raw))
        return out

    def report(self, texts, name="Your product"):
        t0 = time.time()
        rows = self.read(texts)
        n = len(rows)
        fit = collections.Counter(to_label(r["fit"]) for r in rows)
        causes = collections.Counter(c for r in rows for c in r["causes"])
        brief = {
            "item": name, "n": n, "runs_small": fit["small"] / n, "runs_large": fit["large"] / n,
            "causes": {c: k / n for c, k in causes.most_common()},
            "quotes_small": [r["quote"] for r in rows if r["fit"] == "small" and r["quote"]][:6],
            "quotes_large": [r["quote"] for r in rows if r["fit"] == "large" and r["quote"]][:6],
        }
        raw = self._generate(SUMMARY_SYSTEM, [json.dumps(brief, indent=1)], 220)[0]
        try:
            summary = json.loads(raw[raw.find("{"): raw.rfind("}") + 1])
        except ValueError:
            summary = {}
        return brief | {"report": summary, "rows": rows, "seconds": time.time() - t0, "gpu": self.gpu}
