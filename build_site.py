"""Bundle the AMD run files into docs/data.js for the static demo page. Every number on the page comes from here.

    python3 build_site.py
"""
import collections
import json
import pathlib

from wtr.baseline import classify
from wtr.prompt import to_label
from wtr.score import per_class, spearman

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / "out"


def load(name):
    return [json.loads(line) for line in open(OUT / name)]


reviews_text = {r["id"]: r["text"] for r in map(json.loads, open(HERE / "data" / "reviews.jsonl"))}
products = {p["item"]: p for p in map(json.loads, open(HERE / "data" / "products.jsonl"))}
product_text = {r["id"]: r["text"] for p in products.values() for r in p["reviews"]}


def metrics(run, texts):
    gold = [r["gold"] for r in run]
    return {"gemma": per_class(gold, [to_label(r["fit"]) for r in run]),
            "keyword": per_class(gold, [classify(texts[r["id"]]) for r in run]),
            "n": len(run), "unparsed": sum(not r["parsed"] for r in run)}


rev = load("reviews_12b.jsonl")
prod = load("products_12b.jsonl")
reports = {r["item"]: r for r in load("product_reports.jsonl")}
timing = [json.load(open(OUT / n)) for n in ("reviews_12b.timing.json", "products_12b.timing.json")]

by = collections.defaultdict(list)
for r in prod:
    by[r["product"]].append(r)

items = []
for item, rs in sorted(by.items()):
    p, n = products[item], len(rs)
    rep = reports.get(item, {})
    examples = sorted((r for r in rs if r["fit"] in ("small", "large") and r["quote"]),
                      key=lambda r: len(product_text[r["id"]]))[:4]
    items.append({
        "item": item, "category": p["category"], "n_reviews": p["n_reviews"], "sampled": n,
        "true_small": p["true_small"], "true_large": p["true_large"],
        "pred_small": sum(to_label(r["fit"]) == "small" for r in rs) / n,
        "pred_large": sum(to_label(r["fit"]) == "large" for r in rs) / n,
        "kw_small": sum(classify(product_text[r["id"]]) == "small" for r in rs) / n,
        "kw_large": sum(classify(product_text[r["id"]]) == "large" for r in rs) / n,
        "causes": rep.get("causes", {}),
        "report": rep.get("report", {}),
        "examples": [{"text": product_text[r["id"]][:420], "fit": r["fit"], "quote": r["quote"],
                      "causes": r["causes"], "fix": r["fix"]} for r in examples],
    })

rank = {}
for side in ("small", "large"):
    true = [i[f"true_{side}"] for i in items]
    rank[side] = {"gemma": spearman([i[f"pred_{side}"] for i in items], true),
                  "keyword": spearman([i[f"kw_{side}"] for i in items], true)}

seconds = sum(t["seconds"] for t in timing)
n_reviews = sum(t["reviews"] for t in timing)
data = {
    "reviews": metrics(rev, reviews_text),
    "products_rank": rank,
    "run": {"gpu": timing[0]["gpu"], "torch": timing[0]["torch"], "hip": timing[0]["hip"], "model": timing[0]["model"],
            "reviews": n_reviews, "seconds": seconds, "reviews_per_s": n_reviews / seconds},
    "products": items,
}
(HERE / "docs").mkdir(exist_ok=True)
(HERE / "docs" / "data.js").write_text("window.WTR = " + json.dumps(data, indent=1) + ";\n")
print("reviews macro-F1 gemma %.3f keyword %.3f" % (data["reviews"]["gemma"]["macro_f1"], data["reviews"]["keyword"]["macro_f1"]))
print("rank small", rank["small"], "large", rank["large"])
print("throughput %.2f reviews/s on %s" % (data["run"]["reviews_per_s"], data["run"]["gpu"]))
