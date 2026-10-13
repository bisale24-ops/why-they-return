# Why They Return

**An open Google model on an AMD GPU reads every review of a product, finds why it comes back, and writes the fix for the listing.**

Roughly one in four online apparel orders comes back, and size and fit is the most cited reason, ahead of colour and
damage (Coresight Research survey, 2023: 24.4% online apparel return rate, 53% of returns for size or fit). The reasons are
already written down: customers say "runs small, size up" or "the zipper broke" in the reviews. Nobody reads 300 reviews
per product. Why They Return does, with Gemma 3 12B running on an AMD Radeon PRO GPU, and hands the seller three things
per product: how the item really fits, what else goes wrong, and the exact sentence and photo to add to the listing.

Live demo: **{DEMO_URL}** · Video: **{VIDEO_URL}**

## Measured, not claimed

[Rent the Runway](https://cseweb.ucsd.edu/~jmcauley/datasets.html#clothing_fit) asks every renter whether the item fit,
ran small or ran large. That self-reported label is our ground truth; Gemma only ever sees the review text.
The prompt was tuned on a separate 150-review dev set; every number below comes from a single run on held-out data.

| | Gemma 3 12B on AMD | Keyword rules |
|---|---:|---:|
| Review-level macro-F1 (900 reviews, 300 per class) | **{F1_G}** | {F1_K} |
| Accuracy | **{ACC_G}** | {ACC_K} |
| Ranks products by "runs small" share (Spearman, 40 products) | **{RS_G}** | {RS_K} |
| Ranks products by "runs large" share (Spearman, 40 products) | **{RL_G}** | {RL_K} |

Product-level is the number that matters to a seller: from 60 sampled reviews, does the tool put the products that
really run small at the top of the list? The truth here is the renters' own share over *all* reviews of the item
(300 to 1,000+ per product).

Throughput: {RPS} reviews/s on one {GPU} (bf16, ROCm {HIP}, PyTorch {TORCH}, batched HF `generate`), {N} reviews in
{MIN} minutes.

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
python3 prep.py                      # deterministic eval sets (seed 7)
# on an AMD GPU with ROCm PyTorch:
pip install "transformers>=4.50" accelerate
python run_amd.py --set reviews  --out out/reviews_12b.jsonl
python run_amd.py --set products --out out/products_12b.jsonl
python summarize_amd.py --runs out/products_12b.jsonl --out out/product_reports.jsonl
python3 evaluate.py out/reviews_12b.jsonl
python3 evaluate.py out/products_12b.jsonl
python3 build_site.py
```

## Honest limits

- The renter's label covers fit only, so the other causes (length, fabric, colour) are not scored against a
  ground truth; they are shown with the quote that supports them so a person can check.
- "No signal" and "true to size" both count as *fit* when scoring, because the renter label has no "didn't say".
- The money estimate on the demo page is arithmetic on the seller's own inputs and assumes a review that reports a
  size problem stands for a return; it is not a forecast.

## Data and credits

Rent the Runway reviews: Rishabh Misra, Mengting Wan, Julian McAuley, *Decomposing fit semantics for product size
recommendation in metric spaces*, RecSys 2018. Model: Gemma 3 12B instruct (Gemma Terms of Use), weights from the
`unsloth/gemma-3-12b-it` mirror. Compute: AMD AI Notebooks. Design tokens: Ramp style reference via Refero
(`DESIGN.md`).

MIT licence for the code.
