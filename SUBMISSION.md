# lablab submission — AMD Developer Hackathon: ACT III

**Title:** Why They Return

**Track:** Reinvent Commerce (Track 3). Partner prize: Google (Gemma 3).

**Short description (≤ 255):**
An open Google model on an AMD GPU reads every review of a product, finds why it comes back (runs small, runs
large, length, fabric, colour) and writes the size note and listing fix. Measured against renters' own labels.

**Technology tags:** AMD ROCm, AMD Developer Cloud, Gemma 3, PyTorch, Hugging Face Transformers, Python

**Category tags:** E-commerce, Retail, Returns, NLP, Customer reviews

**Long description:**

Problem. Roughly one in four online clothing orders comes back, and size and fit is the most cited reason
(Coresight Research, 2023). The reasons are already written down in the reviews, but nobody reads 300 reviews per
product, so listings keep saying "true to size" while customers keep sending the item back.

User. Fashion sellers and rental shops with hundreds of reviews per item who want to know which items to fix first
and what exactly to change on the listing.

What it does. Gemma 3 12B (Google's open model) runs on an AMD Radeon PRO W7900D with ROCm and PyTorch. Pass one
reads every review and returns JSON: fit direction (runs small, runs large, true to size, no signal), other causes
(length, fabric, colour vs photo, comfort, zipper, style vs photo), the exact customer quote and a one-line fix.
Code, not the model, counts the shares per product. Pass two sees only those counts and real quotes and writes the
size note, the sentence for the description and the photo to add. A check replaces any headline that contradicts
the counts. The seller gets a ranked list of items by fit-return risk, a report per item, the copy-ready fix and a
money estimate from their own order volume, price and return cost. A live notebook runs the whole thing on the AMD
GPU: 30 reviews of a new item in 27.8 seconds.

Proof. Rent the Runway asks every renter whether the item fit, ran small or ran large. We hid that label and
compared, against the keyword rules a seller would write first. 900 reviews (300 per class): macro-F1 0.737 vs
0.606; Gemma finds 64% of "runs large" reviews, rules 40%. 40 products drawn after the prompt was fixed and run
once: Gemma ranks the items that run large with Spearman 0.87 vs 0.72; on items that run small the rules are level
(0.84 vs 0.88). The README shows the whole history, including the v2 prompt that over-counted "runs small" and how
v3 fixed it. Every number is recomputable from the run files in the repo.

Why AMD and open weights. One 48 GB Radeon card holds the 12B model in bf16 and reads a catalogue overnight; the
customer text never leaves the seller's own GPU. Next: vLLM serving on AMD Instinct for throughput, Shopify and
marketplace review imports, and an A/B test of the size note against the return rate.

**Links**
- GitHub: https://github.com/bisale24-ops/why-they-return
- Demo (recorded AMD output, every number recomputable): https://bisale24-ops.github.io/why-they-return/
- Live mode on AMD: `live_demo.ipynb` in the repo (shown running in the video)
- Video: https://youtu.be/vhAo2jtH1wk
- Slides: deck/why-they-return-deck.pdf
