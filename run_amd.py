"""Runs Gemma 3 on the AMD GPU (ROCm PyTorch) over the evaluation sets. Run inside AMD AI Notebooks.

    pip install -q "transformers>=4.50" accelerate
    python run_amd.py --model unsloth/gemma-3-12b-it --set reviews --out out/reviews_12b.jsonl
    python run_amd.py --model unsloth/gemma-3-12b-it --set products --out out/products_12b.jsonl

Writes one JSON line per review (raw output kept) plus a timing line, so every number in the
README can be recomputed from these files.
"""
import argparse
import json
import pathlib
import platform
import time

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

from wtr.prompt import SYSTEM, parse, user_message

ap = argparse.ArgumentParser()
ap.add_argument("--model", default="unsloth/gemma-3-12b-it")
ap.add_argument("--set", choices=["dev", "reviews", "products", "products_dev", "products_b"], required=True)
ap.add_argument("--out", required=True)
ap.add_argument("--batch", type=int, default=16)
ap.add_argument("--limit", type=int, default=0)
args = ap.parse_args()

here = pathlib.Path(__file__).resolve().parent
if args.set in ("dev", "reviews"):
    items = [json.loads(line) for line in open(here / "data" / f"{args.set}.jsonl")]
else:
    items = [r | {"product": p["item"]} for p in map(json.loads, open(here / "data" / f"{args.set}.jsonl")) for r in p["reviews"]]
if args.limit:
    items = items[: args.limit]

out = pathlib.Path(args.out)
out.parent.mkdir(parents=True, exist_ok=True)
done = {json.loads(line)["id"] for line in open(out)} if out.exists() else set()
todo = [r for r in items if r["id"] not in done]

device = "cuda" if torch.cuda.is_available() else "cpu"
gpu = torch.cuda.get_device_name(0) if device == "cuda" else "cpu"
print("device:", gpu, "| torch", torch.__version__, "| hip", getattr(torch.version, "hip", None))

tok = AutoTokenizer.from_pretrained(args.model, padding_side="left")
model = AutoModelForCausalLM.from_pretrained(args.model, dtype=torch.bfloat16, device_map=device)
model.eval()

t0 = time.time()
n_tok = 0
with open(out, "a") as f:
    for i in range(0, len(todo), args.batch):
        batch = todo[i : i + args.batch]
        prompts = [
            tok.apply_chat_template(
                [{"role": "system", "content": SYSTEM}, {"role": "user", "content": user_message(r["text"])}],
                tokenize=False, add_generation_prompt=True,
            )
            for r in batch
        ]
        enc = tok(prompts, return_tensors="pt", padding=True).to(device)
        with torch.no_grad():
            gen = model.generate(**enc, max_new_tokens=160, do_sample=False)
        new = gen[:, enc["input_ids"].shape[1]:]
        n_tok += int((new != tok.pad_token_id).sum())
        for r, ids in zip(batch, new):
            raw = tok.decode(ids, skip_special_tokens=True)
            f.write(json.dumps({"id": r["id"], "product": r.get("product"), "gold": r["fit"], "raw": raw} | parse(raw)) + "\n")
        f.flush()
        el = time.time() - t0
        print(f"{i + len(batch)}/{len(todo)}  {(i + len(batch)) / el:.2f} reviews/s", flush=True)

el = time.time() - t0
with open(out.with_suffix(".timing.json"), "w") as f:
    json.dump({"model": args.model, "gpu": gpu, "hip": getattr(torch.version, "hip", None), "torch": torch.__version__,
               "host": platform.node(), "reviews": len(todo), "seconds": el, "new_tokens": n_tok,
               "reviews_per_s": len(todo) / el if el else None, "batch": args.batch}, f, indent=2)
print("done", len(todo), "in", round(el, 1), "s")
