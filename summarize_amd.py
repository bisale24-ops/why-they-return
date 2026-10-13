"""Second pass on the AMD GPU: turn one product's per-review findings into the listing fix a seller pastes in.

    python summarize_amd.py --runs out/products_12b.jsonl --out out/product_reports.jsonl

Counts come from the per-review pass (code, not the model); Gemma only writes the wording, and is shown the
counts and real quotes so it cannot invent a problem the reviews do not contain.
"""
import argparse
import collections
import json
import time

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

from wtr.prompt import to_label

ap = argparse.ArgumentParser()
ap.add_argument("--model", default="unsloth/gemma-3-12b-it")
ap.add_argument("--runs", required=True)
ap.add_argument("--out", required=True)
ap.add_argument("--batch", type=int, default=8)
args = ap.parse_args()

SYSTEM = """You help an online fashion seller cut returns. You get counts and real customer quotes for one product.
Write only JSON with these keys:
"size_note": one line for the size selector, e.g. "Runs small: most customers size up one", or "" if fit is fine.
"listing_fix": one or two sentences to add to the product description that answer the top return reason.
"photo_to_add": the one photo or measurement that would have prevented most of these returns, or "".
"headline": six words or fewer naming the main reason this product comes back.
Use only what the quotes and counts support. Plain words, no marketing tone."""

by = collections.defaultdict(list)
for r in map(json.loads, open(args.runs)):
    by[r["product"]].append(r)


def brief(item, rs):
    n = len(rs)
    fit = collections.Counter(to_label(r["fit"]) for r in rs)
    causes = collections.Counter(c for r in rs for c in r["causes"])
    small_q = [r["quote"] for r in rs if r["fit"] == "small" and r["quote"]][:6]
    large_q = [r["quote"] for r in rs if r["fit"] == "large" and r["quote"]][:6]
    return {
        "item": item, "n": n,
        "runs_small": fit["small"] / n, "runs_large": fit["large"] / n,
        "causes": {c: k / n for c, k in causes.most_common()},
        "quotes_small": small_q, "quotes_large": large_q,
    }


briefs = [brief(i, rs) for i, rs in sorted(by.items())]
tok = AutoTokenizer.from_pretrained(args.model, padding_side="left")
model = AutoModelForCausalLM.from_pretrained(args.model, dtype=torch.bfloat16, device_map="cuda").eval()

t0 = time.time()
with open(args.out, "w") as f:
    for i in range(0, len(briefs), args.batch):
        batch = briefs[i : i + args.batch]
        prompts = [tok.apply_chat_template(
            [{"role": "system", "content": SYSTEM}, {"role": "user", "content": json.dumps(b, indent=1)}],
            tokenize=False, add_generation_prompt=True) for b in batch]
        enc = tok(prompts, return_tensors="pt", padding=True).to("cuda")
        with torch.no_grad():
            gen = model.generate(**enc, max_new_tokens=220, do_sample=False)
        for b, ids in zip(batch, gen[:, enc["input_ids"].shape[1]:]):
            raw = tok.decode(ids, skip_special_tokens=True)
            try:
                s = json.loads(raw[raw.find("{"): raw.rfind("}") + 1])
            except ValueError:
                s = {}
            f.write(json.dumps(b | {"report": s, "raw": raw}) + "\n")
        print(f"{i + len(batch)}/{len(briefs)}", flush=True)
print("done in", round(time.time() - t0, 1), "s")
