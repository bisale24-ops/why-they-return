# Why They Return — AMD Developer Hackathon: ACT III (lablab)

Deadline: **18 Oct 2026, 16:00 Bishkek** (submission). Track 3 "Reinvent Commerce". Solo, team-4160.
Prizes we aim at: AMD $5k pool (AMD compute mandatory) + Google $5k pool (Gemma = Google technology).
Judging: Application of Technology, Presentation, Business Value, Originality.

## Product
A seller pastes the reviews / return notes for a product. An open Google model (Gemma 3) running on an
AMD GPU reads every review and returns, per review: fit verdict (runs small / runs large / true to size /
no signal), other return causes (length, quality, colour vs photo, comfort, ...), the exact quote, and per
product: share of each cause, the money at risk, and the concrete listing fix (size note, size chart line,
photo to add, description sentence).

## Proof (measured, not claimed)
Dataset: RentTheRunway (UCSD McAuley lab, public), 192,544 reviews; each renter labelled fit herself:
fit 142,058 / small 25,779 / large 24,707. The label is ground truth the model never sees.
1. Review-level: balanced held-out sample, Gemma vs a keyword baseline; macro-F1 and per-class recall.
2. Product-level (the business signal): for products with many reviews, predicted "runs small" share vs the
   true share — rank correlation, and "would we have flagged the right products".
3. Throughput on AMD: reviews/second, cost per 1,000 reviews.

## Compute
AMD AI Notebooks (notebooks.amd.com/hackathon), Radeon + ROCm PyTorch, 3 h/day. Prepare everything
locally; spend GPU time only on runs. Model: Gemma 3 instruct (ungated mirror if the official repo is gated).

## Deliverables
Public GitHub repo (MIT), static demo page (precomputed results + live mode when the AMD endpoint is up),
cover image, slides, demo video (screen + captions + TTS, no face/voice), lablab submission (he clicks Submit).
