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
# Final prompt (v3), run once on product set B, which no prompt was tuned on; v2 numbers stay in the README.
REVIEWS_RUN, PRODUCTS_RUN, REPORTS, PRODUCT_SET = ("reviews_v3.jsonl" if (OUT / "reviews_v3.jsonl").exists() else "reviews_12b.jsonl"), "pb_v3.jsonl", "pb_reports.jsonl", "products_b.jsonl"


def load(name):
    return [json.loads(line) for line in open(OUT / name)]


reviews_text = {r["id"]: r["text"] for r in map(json.loads, open(HERE / "data" / "reviews.jsonl"))}
products = {p["item"]: p for p in map(json.loads, open(HERE / "data" / PRODUCT_SET))}
product_text = {r["id"]: r["text"] for p in products.values() for r in p["reviews"]}


def metrics(run, texts):
    gold = [r["gold"] for r in run]
    return {"gemma": per_class(gold, [to_label(r["fit"]) for r in run]),
            "keyword": per_class(gold, [classify(texts[r["id"]]) for r in run]),
            "n": len(run), "unparsed": sum(not r["parsed"] for r in run)}


rev = load(REVIEWS_RUN)
prod = load(PRODUCTS_RUN)
reports = {r["item"]: r for r in load(REPORTS)}
timing = [json.load(open(OUT / n.replace(".jsonl", ".timing.json"))) for n in (REVIEWS_RUN, PRODUCTS_RUN)]

by = collections.defaultdict(list)
for r in prod:
    by[r["product"]].append(r)

SAYS_SMALL = ("size up", "runs small", "too small", "tight")
SAYS_LARGE = ("size down", "runs large", "runs big", "too big", "too large", "loose")


def consistent(rep, small, large):
    """The headline is model wording; the direction is a count. When they disagree the count wins."""
    head = (rep.get("headline") or "").lower()
    if small > large and any(w in head for w in SAYS_LARGE) or large > small and any(w in head for w in SAYS_SMALL):
        rep = rep | {"headline": "Runs small" if small > large else "Runs large", "headline_replaced": True}
    return rep


items = []
for item, rs in sorted(by.items()):
    p, n = products[item], len(rs)
    rep = reports.get(item, {})
    small_n = sum(r["fit"] == "small" for r in rs)
    large_n = sum(r["fit"] == "large" for r in rs)
    main = "small" if small_n >= large_n else "large"
    # quotes for the item's main fit problem, shortest first, so the page shows the pattern rather than outliers
    examples = sorted((r for r in rs if r["fit"] == main and r["quote"]), key=lambda r: len(product_text[r["id"]]))[:4]
    items.append({
        "item": item, "category": p["category"], "n_reviews": p["n_reviews"], "sampled": n,
        "true_small": p["true_small"], "true_large": p["true_large"],
        "pred_small": sum(to_label(r["fit"]) == "small" for r in rs) / n,
        "pred_large": sum(to_label(r["fit"]) == "large" for r in rs) / n,
        "kw_small": sum(classify(product_text[r["id"]]) == "small" for r in rs) / n,
        "kw_large": sum(classify(product_text[r["id"]]) == "large" for r in rs) / n,
        "causes": rep.get("causes", {}),
        "report": consistent(rep.get("report", {}), rep.get("runs_small", 0), rep.get("runs_large", 0)),
        "examples": [{"text": product_text[r["id"]][:420], "fit": r["fit"], "quote": r["quote"],
                      "causes": r["causes"], "fix": r["fix"]} for r in examples],
    })

rank = {}
for side in ("small", "large"):
    true = [i[f"true_{side}"] for i in items]
    rank[side] = {"gemma": spearman([i[f"pred_{side}"] for i in items], true),
                  "keyword": spearman([i[f"kw_{side}"] for i in items], true),
                  "mae_gemma": sum(abs(i[f"pred_{side}"] - t) for i, t in zip(items, true)) / len(items),
                  "mae_keyword": sum(abs(i[f"kw_{side}"] - t) for i, t in zip(items, true)) / len(items),
                  "mean_truth": sum(true) / len(true)}

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
