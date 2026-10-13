# Why They Return

**An open Google model on an AMD GPU reads every review of a product, finds why it comes back, and writes the fix for the listing.**

Roughly one in four online apparel orders comes back, and size and fit is the most cited reason, ahead of colour and
damage (Coresight Research survey, 2023: 24.4% online apparel return rate, 53% of returns for size or fit). The reasons are
already written down: customers say "runs small, size up" or "the zipper broke" in the reviews. Nobody reads 300 reviews
per product. Why They Return does, with Gemma 3 12B running on an AMD Radeon PRO GPU, and hands the seller three things
per product: how the item really fits, what else goes wrong, and the exact sentence and photo to add to the listing.

Demo: **https://bisale24-ops.github.io/why-they-return/** · Video: **{VIDEO_URL}** · Slides: `deck/why-they-return-deck.pdf`

## Measured, not claimed

[Rent the Runway](https://cseweb.ucsd.edu/~jmcauley/datasets.html#clothing_fit) asks every renter whether the item fit,
ran small or ran large. That self-reported label is our ground truth; Gemma only ever sees the review text.

**Final numbers (prompt v3).** Product set B (40 items, 60 sampled reviews each) was drawn after v3 was written and
run exactly once:

| | Gemma 3 12B on AMD | Keyword rules |
|---|---:|---:|
| Review-level macro-F1 (900 reviews, 300 per class) | **0.737** | 0.606 |
| Recall on "runs large" reviews (same 900) | **0.64** | 0.40 |
| Ranks products by "runs large" share (Spearman, set B) | **0.87** | 0.72 |
| Ranks products by "runs small" share (Spearman, set B) | 0.84 | **0.88** |
| Mean error of the "runs small" share, points (set B, truth averages 12.5%) | 8.1 | **7.6** |
| Mean error of the "runs large" share, points (set B, truth averages 10.8%) | 7.6 | **5.1** |
| Says why (cause), quotes the customer, writes the listing fix | yes | no |

Product-level is the number that matters to a seller: from 60 sampled reviews, does the tool put the products that
really run small at the top of the list, and how close is the share? The truth is the renters' own share over *all*
reviews of the item (150 to 1,000+ per product).

**How we got there, including what went wrong.**

| Step | Data | Gemma | Keyword |
|---|---|---:|---:|
| v1 → v2 prompt tuning | dev, 150 reviews | 0.706 → 0.753 macro-F1 | 0.579 |
| v2, first held-out run | 900 reviews | 0.725 macro-F1 | 0.606 |
| v2, first held-out run | 40 products (set A), "runs small" Spearman | 0.734 | 0.642 |
| v2, same run | set A, mean "runs small" share vs truth 0.116 | 0.260 (too high) | 0.190 |
| v3 tuning | 13 products of a product dev set, "runs small" Spearman / mean share (truth 0.225) | 0.944 / 0.303 | 0.844 / 0.278 |
| v3, dev check | dev, 150 reviews | 0.717 macro-F1 | 0.579 |
| v3, final | 900 reviews (second look at this set) | 0.737 macro-F1 | 0.606 |
| v3, final | set B, 40 new products, run once | see table above | |

v2 ranked products well but counted every "a little tight in the bust" as *runs small*, while renters who kept the
size ticked *fit*. v3 asks for the renter's verdict on the size they wore, which brought the share close to the truth.
The 900-review set was scored twice (v2, then v3); set B was seen once.

Where the model wins and where it does not: it reads direction far better than rules ("should have sized down" is
*runs large*; a keyword rule sees "size" and "down" and guesses), which shows in review-level F1 and in ranking the
items that run large. On ranking items that run small, plain rules are as good; the model's value there is the cause,
the quote and the fix it writes, which rules cannot produce.

Throughput: about 1.1–1.3 reviews/s on one AMD Radeon PRO W7900D (48 GB, bf16, ROCm 7.15, PyTorch 2.13, batched HF
`generate`, no serving engine); 8,000+ reviews read on AMD across the run files in `out/`. A vLLM server on AMD Instinct
is the obvious next step for throughput.

## How it works

1. **Read** (`run_amd.py`). For each review Gemma returns JSON: fit direction (small / large / true to size / no
   signal), other causes from a fixed list (length, fabric quality, colour vs photo, comfort, zipper, style vs photo),
   the exact supporting quote, and a one-line fix.
2. **Count** (`summarize_amd.py`, code). Shares per product are plain counts over those answers, so the model cannot
   inflate a problem.
3. **Write** (`summarize_amd.py`, Gemma). A second pass sees only the counts and real quotes and writes the size
   note, the description sentence and the photo to add.

The demo page (`docs/`, served by GitHub Pages) is static and shows the recorded output of these runs; `build_site.py` builds its data from
the run files in `out/`, so every number on the page can be recomputed.

## Reproduce

```bash
curl -O https://mcauleylab.ucsd.edu/public_datasets/data/renttherunway/renttherunway_final_data.json.gz
mv renttherunway_final_data.json.gz data/rtr.json.gz
python3 prep.py                      # review set, dev set, product set A (seed 7)
python3 prep_products.py             # product dev set and product set B (seed 13)
# on an AMD GPU with ROCm PyTorch:
pip install "transformers>=4.50" accelerate
python run_amd.py --set reviews    --out out/reviews_v3.jsonl
python run_amd.py --set products_b --out out/pb_v3.jsonl
python summarize_amd.py --runs out/pb_v3.jsonl --out out/pb_reports.jsonl
python3 evaluate.py out/reviews_v3.jsonl
python3 evaluate.py out/pb_v3.jsonl
python3 build_site.py
```

Live mode: open `live_demo.ipynb` on the AMD notebook, paste a product's reviews, get the report card in the cell
(`wtr/engine.py` loads Gemma once and runs both passes; `wtr/render.py` draws the card).

The v2 run files (`out/reviews_12b.jsonl`, `out/products_12b.jsonl`) are kept; `wtr.prompt.SYSTEM_V2` is the prompt
that produced them.

## Honest limits

- The renter's label covers fit only, so the other causes (length, fabric, colour) are not scored against a
  ground truth; they are shown with the quote that supports them so a person can check.
- Ranking is stronger than the share itself. On set B Gemma files about twice as many reviews as *runs large* as
  renters ticked, so read the bars as "which items have the most size complaints", not as a calibrated rate; a store
  with its own return data can calibrate the share per category.
- The second pass (wording) can contradict the counts: on set B, 3 of 40 headlines named the wrong direction.
  `build_site.py` checks every headline against the counted shares and replaces the contradicting ones.
- "No signal" and "true to size" both count as *fit* when scoring, because the renter label has no "didn't say".
- The money estimate on the demo page is arithmetic on the seller's own inputs and assumes a review that reports a
  size problem stands for a return; it is not a forecast.

## Data and credits

Rent the Runway reviews: Rishabh Misra, Mengting Wan, Julian McAuley, *Decomposing fit semantics for product size
recommendation in metric spaces*, RecSys 2018. Model: Gemma 3 12B instruct (Gemma Terms of Use), weights from the
`unsloth/gemma-3-12b-it` mirror. Compute: AMD AI Notebooks. Design tokens: Ramp style reference via Refero
(`DESIGN.md`).

MIT licence for the code.
