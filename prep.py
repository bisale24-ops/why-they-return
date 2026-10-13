"""Build the evaluation sets from the RentTheRunway dump. Deterministic (seed 7).

    python3 prep.py

reviews.jsonl  balanced review-level set: 300 fit / 300 small / 300 large
products.jsonl product-level set: 40 products with >=300 reviews, 60 random reviews each,
               plus the true share of small/large over ALL of that product's reviews
"""
import collections
import gzip
import json
import pathlib
import random

HERE = pathlib.Path(__file__).resolve().parent
SRC = HERE / "data" / "rtr.json.gz"
rng = random.Random(7)


def text(r):
    return " ".join(x for x in (r.get("review_summary", ""), r.get("review_text", "")) if x).strip()


rows = []
with gzip.open(SRC, "rt") as f:
    for i, line in enumerate(f):
        r = json.loads(line)
        t = text(r)
        if len(t) < 40:
            continue
        rows.append({"id": i, "item": r["item_id"], "category": r.get("category"), "fit": r["fit"], "text": t})

by_item = collections.defaultdict(list)
for r in rows:
    by_item[r["item"]].append(r)

big = sorted((i for i, rs in by_item.items() if len(rs) >= 300), key=lambda i: -len(by_item[i]))
rng.shuffle(big)
product_items = sorted(big[:40])
held = set(product_items)

pool = [r for r in rows if r["item"] not in held]
review_set = []
for label in ("fit", "small", "large"):
    review_set += rng.sample([r for r in pool if r["fit"] == label], 300)
rng.shuffle(review_set)

with open(HERE / "data" / "reviews.jsonl", "w") as f:
    for r in review_set:
        f.write(json.dumps(r) + "\n")

with open(HERE / "data" / "products.jsonl", "w") as f:
    for item in product_items:
        rs = by_item[item]
        c = collections.Counter(r["fit"] for r in rs)
        sample = rng.sample(rs, 60)
        f.write(json.dumps({
            "item": item, "category": rs[0]["category"], "n_reviews": len(rs),
            "true_small": c["small"] / len(rs), "true_large": c["large"] / len(rs),
            "reviews": sample,
        }) + "\n")

print(len(rows), "usable reviews;", len(review_set), "review-level;", len(product_items), "products")
