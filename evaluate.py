"""Score a run file against the renters' labels and the keyword baseline.

    python3 evaluate.py out/dev_12b.jsonl          # review-level (dev or reviews set)
    python3 evaluate.py out/products_12b.jsonl     # product-level rank correlation as well
"""
import collections
import json
import pathlib
import sys

from wtr.baseline import classify
from wtr.prompt import to_label
from wtr.score import per_class, spearman

HERE = pathlib.Path(__file__).resolve().parent
run = [json.loads(line) for line in open(sys.argv[1])]
texts = {}
for name in ("dev", "reviews"):
    p = HERE / "data" / f"{name}.jsonl"
    if p.exists():
        texts |= {r["id"]: r["text"] for r in map(json.loads, open(p))}
products = {p["item"]: p for p in map(json.loads, open(HERE / "data" / "products.jsonl"))}
for p in products.values():
    texts |= {r["id"]: r["text"] for r in p["reviews"]}


def show(name, m):
    print(f"{name:8s} macro-F1 {m['macro_f1']:.3f}  acc {m['accuracy']:.3f}  " + "  ".join(
        f"{c}: P {m[c]['precision']:.2f} R {m[c]['recall']:.2f} F1 {m[c]['f1']:.2f}" for c in ("fit", "small", "large")))


gold = [r["gold"] for r in run]
show("gemma", per_class(gold, [to_label(r["fit"]) for r in run]))
show("keyword", per_class(gold, [classify(texts[r["id"]]) for r in run]))
print("unparsed:", sum(not r["parsed"] for r in run), "of", len(run))
print("fit calls:", dict(collections.Counter(r["fit"] for r in run)))

if run[0].get("product") is not None:
    by = collections.defaultdict(list)
    for r in run:
        by[r["product"]].append(r)
    items = sorted(by)
    for side in ("small", "large"):
        true = [products[i][f"true_{side}"] for i in items]
        g = [sum(to_label(r["fit"]) == side for r in by[i]) / len(by[i]) for i in items]
        k = [sum(classify(texts[r["id"]]) == side for r in by[i]) / len(by[i]) for i in items]
        print(f"product runs-{side} share, Spearman vs truth: gemma {spearman(g, true):.3f}  keyword {spearman(k, true):.3f}")
