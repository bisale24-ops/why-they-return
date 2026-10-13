"""Two more product-level sets, drawn after the first product run was seen (seed 13).

    python3 prep_products.py

products_dev.jsonl  20 products (>=150 reviews), 60 reviews each: tuning the product-level prompt
products_b.jsonl    40 products (>=150 reviews), 60 reviews each: one final run of the tuned prompt, never looked at before

Both exclude the first 40 products, the live example item, and every review used elsewhere.
"""
import collections
import gzip
import json
import pathlib
import random

HERE = pathlib.Path(__file__).resolve().parent
rng = random.Random(13)
taken = {json.loads(line)["item"] for line in open(HERE / "data" / "products.jsonl")}
taken.add(json.load(open(HERE / "data" / "live_example.json"))["item"])
used = {json.loads(line)["id"] for name in ("reviews", "dev") for line in open(HERE / "data" / f"{name}.jsonl")}

by_item = collections.defaultdict(list)
with gzip.open(HERE / "data" / "rtr.json.gz", "rt") as f:
    for i, line in enumerate(f):
        r = json.loads(line)
        t = " ".join(x for x in (r.get("review_summary", ""), r.get("review_text", "")) if x).strip()
        if len(t) >= 40 and r["item_id"] not in taken and i not in used:
            by_item[r["item_id"]].append({"id": i, "item": r["item_id"], "category": r.get("category"), "fit": r["fit"], "text": t})

big = sorted(i for i, rs in by_item.items() if len(rs) >= 150)
rng.shuffle(big)
for name, items in (("products_dev", big[:20]), ("products_b", big[20:60])):
    with open(HERE / "data" / f"{name}.jsonl", "w") as f:
        for item in sorted(items):
            rs = by_item[item]
            c = collections.Counter(r["fit"] for r in rs)
            f.write(json.dumps({"item": item, "category": rs[0]["category"], "n_reviews": len(rs),
                                "true_small": c["small"] / len(rs), "true_large": c["large"] / len(rs),
                                "reviews": rng.sample(rs, 60)}) + "\n")
    print(name, len(items))
