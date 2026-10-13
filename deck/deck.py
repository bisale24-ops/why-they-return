"""Pitch deck (PDF) and cover image (PNG) from the same data the demo page reads.

    ~/.venvs/video/bin/python deck/deck.py
"""
import asyncio
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
D = json.loads((ROOT / "docs" / "data.js").read_text().split("=", 1)[1].rstrip().rstrip(";"))
m, rk, run = D["reviews"], D["products_rank"], D["run"]
top = sorted(D["products"], key=lambda p: -(p["pred_small"] + p["pred_large"]))[0]
rep = top.get("report", {})

CSS = """
@page { size: 1920px 1080px; margin: 0; }
* { box-sizing: border-box; margin: 0; }
body { font-family: Inter, system-ui, sans-serif; font-feature-settings: "ss01","tnum"; color: #0c0a08; }
.s { width: 1920px; height: 1080px; background: #f4f2f0; padding: 120px 140px; position: relative; page-break-after: always; overflow: hidden; }
.s.dark { background: #1a1919; color: #fff; }
.k { font-size: 20px; letter-spacing: .1em; text-transform: uppercase; color: #6d6c6b; }
.dark .k { color: #8c8b8a; }
h1 { font-weight: 400; font-size: 120px; line-height: .98; letter-spacing: -.03em; margin-top: 36px; max-width: 15ch; }
h2 { font-weight: 400; font-size: 76px; line-height: 1.02; letter-spacing: -.02em; margin-top: 28px; max-width: 22ch; }
p.l { font-size: 34px; line-height: 1.35; color: #6d6c6b; margin-top: 36px; max-width: 46ch; }
.dark p.l { color: #b5b4b3; }
mark { background: linear-gradient(transparent 58%, #e4f222 58%, #e4f222 92%, transparent 92%); color: inherit; }
.hi { color: #e4f222; }
.grid { display: grid; gap: 28px; margin-top: 64px; }
.c3 { grid-template-columns: repeat(3, 1fr); } .c2 { grid-template-columns: 1fr 1fr; }
.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 22px; padding: 40px; }
.dark .card { background: #232221; border-color: #33322f; }
.big { font-size: 104px; line-height: 1; letter-spacing: -.03em; margin-top: 18px; }
.sm { font-size: 26px; color: #6d6c6b; margin-top: 16px; line-height: 1.35; }
.dark .sm { color: #a3a2a1; }
.foot { position: absolute; left: 140px; right: 140px; bottom: 64px; display: flex; justify-content: space-between; font-size: 20px; color: #6d6c6b; }
.note { display: inline-block; background: #e4f222; color: #0c0a08; border-radius: 10px; padding: 14px 22px; font-size: 30px; margin-top: 28px; }
.q { font-size: 32px; line-height: 1.4; margin-top: 18px; }
table { width: 100%; border-collapse: collapse; margin-top: 40px; font-size: 30px; }
td, th { text-align: left; padding: 20px 10px; border-bottom: 1px solid #e5e7eb; }
th { font-weight: 400; font-size: 20px; letter-spacing: .08em; text-transform: uppercase; color: #6d6c6b; }
td.n, th.n { text-align: right; }
tr.w td { background: linear-gradient(90deg, rgba(228,242,34,.45), rgba(228,242,34,0)); }
.mark { width: 64px; height: 64px; border-radius: 14px; background: #0c0a08; position: relative; }
.mark::after { content: ""; position: absolute; inset: 18px 18px 18px 32px; background: #e4f222; border-radius: 3px; }
"""

f = lambda x: f"{x:.2f}"
pc = lambda x: f"{100 * x:.0f}%"
FOOT = '<div class="foot"><span>Why They Return</span><span>Gemma 3 12B · AMD Radeon PRO · ROCm</span></div>'

SLIDES = [
    f"""<div class="s"><div class="mark"></div><h1>Your reviews already say <mark>why it comes back</mark>.</h1>
    <p class="l">An open Google model on an AMD GPU reads every review of a product, finds the fit and quality
    problems behind returns, and writes the fix for the listing.</p>{FOOT}</div>""",

    f"""<div class="s"><div class="k">The problem</div><h2>One in four online clothing orders comes back. Fit is the top reason.</h2>
    <div class="grid c3">
      <div class="card"><div class="k">Online apparel return rate</div><div class="big">24%</div><div class="sm">Coresight Research, 2023</div></div>
      <div class="card"><div class="k">Returns for size or fit</div><div class="big">53%</div><div class="sm">ahead of colour (16%) and damage (10%)</div></div>
      <div class="card"><div class="k">Reviews per product</div><div class="big">300+</div><div class="sm">the reasons are written down; nobody reads them all</div></div>
    </div>{FOOT}</div>""",

    f"""<div class="s"><div class="k">The product · {top['category']} #{top['item']}</div><h2>{rep.get('headline', 'Fit report')}</h2>
    <span class="note">{rep.get('size_note', '')}</span>
    <div class="grid c2">
      <div class="card"><div class="k">Add to the listing</div><div class="q">{rep.get('listing_fix', '')}</div>
        <div class="sm">Photo to add: {rep.get('photo_to_add', '')}</div></div>
      <div class="card"><div class="k">Gemma vs the renters themselves</div>
        <div class="q">Runs small: <b style="font-weight:400">{pc(top['pred_small'])}</b> · renters said {pc(top['true_small'])}</div>
        <div class="q">Runs large: <b style="font-weight:400">{pc(top['pred_large'])}</b> · renters said {pc(top['true_large'])}</div>
        <div class="sm">from {top['sampled']} of {top['n_reviews']} reviews; the renter label covers all of them</div></div>
    </div>{FOOT}</div>""",

    f"""<div class="s"><div class="k">Proof · renter labels hidden from the model</div><h2>Checked against what renters said themselves.</h2>
    <table><tr><th>Method</th><th class="n">Macro-F1</th><th class="n">Accuracy</th><th class="n">Ranks “runs small”</th><th class="n">Ranks “runs large”</th></tr>
      <tr class="w"><td>Gemma 3 12B on AMD</td><td class="n">{f(m['gemma']['macro_f1'])}</td><td class="n">{f(m['gemma']['accuracy'])}</td><td class="n">{f(rk['small']['gemma'])}</td><td class="n">{f(rk['large']['gemma'])}</td></tr>
      <tr><td>Keyword rules</td><td class="n">{f(m['keyword']['macro_f1'])}</td><td class="n">{f(m['keyword']['accuracy'])}</td><td class="n">{f(rk['small']['keyword'])}</td><td class="n">{f(rk['large']['keyword'])}</td></tr></table>
    <p class="l" style="font-size:26px">Rent the Runway: {m['n']} reviews balanced across fit / small / large. Products: set B, 40 items drawn after the
    prompt was fixed and run once; Spearman vs each item's true share over all its reviews. Rules can rank; only the
    model says why, quotes the customer and writes the fix.</p>{FOOT}</div>""",

    f"""<div class="s dark"><div class="k">AMD</div><h2>The whole pipeline runs on <span class="hi">one AMD GPU</span>.</h2>
    <div class="grid c3">
      <div class="card"><div class="k">Hardware</div><div class="big" style="font-size:56px">{run['gpu']}</div><div class="sm">48 GB · ROCm {run['hip']} · PyTorch</div></div>
      <div class="card"><div class="k">Reviews read on AMD</div><div class="big">{run['reviews']:,}</div><div class="sm">{run['reviews_per_s']:.2f} reviews / s, batched bf16</div></div>
      <div class="card"><div class="k">Model</div><div class="big" style="font-size:56px">Gemma 3 12B</div><div class="sm">open weights; reviews never leave the seller's GPU</div></div>
    </div>{FOOT.replace('#6d6c6b', '#8c8b8a')}</div>""",

    f"""<div class="s"><div class="k">Business value</div><h2>A size note costs nothing. A return costs shipping, handling and often the sale.</h2>
    <div class="grid c3">
      <div class="card"><div class="k">Who</div><div class="q">Fashion sellers and rental shops with hundreds of reviews per item</div></div>
      <div class="card"><div class="k">What they get</div><div class="q">Which items run small or large, why else they come back, and the exact text and photo to add</div></div>
      <div class="card"><div class="k">Why open + AMD</div><div class="q">Customer text stays on the seller's own GPU; one card handles a catalogue overnight</div></div>
    </div>{FOOT}</div>""",

    f"""<div class="s"><div class="k">How it works · next</div><h2>Read, count, write. Then plug into the store.</h2>
    <div class="grid c3">
      <div class="card"><div class="k">01 read</div><div class="q">Gemma returns fit, causes, quote and fix for every review</div></div>
      <div class="card"><div class="k">02 count</div><div class="q">Shares are counted in code, so the model cannot inflate a problem</div></div>
      <div class="card"><div class="k">03 write</div><div class="q">A second pass sees only counts and real quotes and writes the fix</div></div>
    </div>
    <p class="l">Next: vLLM serving on AMD Instinct, Shopify and marketplace review imports, A/B test of the
    size note against the return rate.</p>
    <div class="foot"><span>github.com/bisale24-ops/why-they-return</span><span>MIT</span></div></div>""",
]

COVER = f"""<div style="width:1280px;height:720px;background:#f4f2f0;padding:72px 84px;position:relative;font-family:Inter,system-ui,sans-serif;font-feature-settings:'ss01'">
<div class="mark"></div>
<div style="font-size:84px;line-height:.98;letter-spacing:-.03em;margin-top:36px;max-width:14ch">Why They <mark>Return</mark></div>
<div style="font-size:30px;line-height:1.3;color:#6d6c6b;margin-top:26px;max-width:30ch">Gemma 3 on an AMD GPU reads every review and writes the listing fix.</div>
<div style="position:absolute;right:84px;bottom:72px;background:#1a1919;color:#fff;border-radius:18px;padding:26px 30px;width:360px">
<div style="font-size:15px;letter-spacing:.1em;text-transform:uppercase;color:#8c8b8a">Macro-F1 vs keyword rules</div>
<div style="font-size:64px;letter-spacing:-.02em;margin-top:8px"><span style="color:#e4f222">{f(m['gemma']['macro_f1'])}</span>
<span style="font-size:26px;color:#8c8b8a">vs {f(m['keyword']['macro_f1'])}</span></div></div></div>"""

HEAD = ('<!doctype html><meta charset=utf-8><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" '
        'rel="stylesheet"><style>%s</style>' % CSS)


async def main():
    from playwright.async_api import async_playwright
    out = ROOT / "deck"
    async with async_playwright() as p:
        b = await p.chromium.launch()
        page = await b.new_page(viewport={"width": 1920, "height": 1080})
        await page.set_content(HEAD + "".join(SLIDES), wait_until="networkidle")
        await page.pdf(path=str(out / "why-they-return-deck.pdf"), width="1920px", height="1080px", print_background=True)
        for i in range(len(SLIDES)):
            await page.set_content(HEAD + SLIDES[i], wait_until="networkidle")
            await page.screenshot(path=str(out / f"slide-{i + 1}.png"))
        page = await b.new_page(viewport={"width": 1280, "height": 720}, device_scale_factor=2)
        await page.set_content(HEAD + "<body style='margin:0'>" + COVER, wait_until="networkidle")
        await page.screenshot(path=str(out / "cover.png"))
        await b.close()
    print("deck + cover written to", out)


asyncio.run(main())
