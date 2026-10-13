"""Why They Return — demo video, about two and a half minutes. TTS narration, no presenter.

    ~/.venvs/video/bin/python ~/Desktop/KHLab/hack-nation/kit/video/render.py \
        video/script.py --out video/demo.mp4 --max-seconds 180

Numbers come from docs/data.js (the same file the demo page reads). Terminal frames under shots/ are real
captured output of evaluate.py; the notebook frame is a screenshot of the live run on the AMD notebook.
"""
import json
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
D = json.loads((HERE.parent / "docs" / "data.js").read_text().split("=", 1)[1].rstrip().rstrip(";"))
m, rk, run = D["reviews"], D["products_rank"], D["run"]
g, k = m["gemma"], m["keyword"]
top = sorted(D["products"], key=lambda p: -(p["pred_small"] + p["pred_large"]))[0]
side = "large" if top["pred_large"] > top["pred_small"] else "small"
pct = lambda x: f"{100 * x:.0f} percent"
VOICE = "en-US-AndrewNeural"


def two(x):
    return f"{x:.2f}"


SCENES = [
    ("card:problem",
     "About one in four clothes ordered online comes back, and the most common reason is fit. "
     "The strange part: customers already wrote down why. It is in the reviews. Nobody reads three hundred "
     "reviews per product."),

    ("shot:hero",
     "Why They Return reads them for you. Gemma three, Google's open model, runs on an AMD Radeon GPU, reads every "
     "review of a product, and tells the seller why it comes back and what to change on the listing."),

    ("shot:report",
     f"Here is a real item from Rent the Runway, the top of the risk list. Gemma read sixty of its reviews and filed "
     f"{pct(top['pred_' + side])} as running {side}. The grey bar is what renters themselves ticked across all "
     f"{top['n_reviews']} reviews: {pct(top['true_' + side])}. The keyword rule found {pct(top['kw_' + side])}. "
     f"Then it writes the size note and the sentence to add to the listing."),

    ("shot:money",
     "The seller sets orders, price and the cost of one return, and sees what fit returns on this item cost a year. "
     "Below, every claim links back to the sentence a customer wrote, with the cited phrase highlighted."),

    ("shot:live",
     "And this is live, on the AMD notebook. Thirty reviews of a dress that is in none of the test sets go in. "
     "Gemma reads them on the GPU, counts the problems in code, and writes the listing fix, all in under half a minute."),

    ("card:proof",
     f"Does it work? Rent the Runway asks every renter whether the item fit, ran small or ran large. We hid that "
     f"label and compared. On {m['n']} reviews Gemma scores a macro F1 of {two(g['macro_f1'])}, against "
     f"{two(k['macro_f1'])} for the keyword rules a seller would write first. It reads direction: should have sized "
     f"down means it runs large, and a rule cannot tell."),

    ("card:proof2",
     f"On forty products drawn after the prompt was fixed, it ranks the items that run large far better, "
     f"{two(rk['large']['gemma'])} against {two(rk['large']['keyword'])}. On items that run small, the rules are level "
     f"with it. What rules cannot do is say why, quote the customer, and write the fix."),

    ("card:amd",
     f"Everything runs on one AMD Radeon PRO W7900D with ROCm and PyTorch: {run['reviews']:,} reviews read in "
     f"this evaluation, in bf16, with the customer text never leaving the seller's own GPU."),

    ("card:close",
     "A size note costs nothing. A return costs shipping, handling, and often the sale. Why They Return turns the reviews a "
     "store already has into the fix for its listings. The code, the data and every number are on GitHub."),
]

STYLE = """
 body { margin:0; width:1280px; height:720px; background:#f4f2f0; color:#0c0a08; box-sizing:border-box;
   font:22px/1.45 Inter,system-ui,-apple-system,sans-serif; font-feature-settings:"ss01","tnum";
   display:flex; flex-direction:column; justify-content:center; padding:0 96px; }
 body:has(img.page) { padding:0; background:#f4f2f0; }
 h1 { font-weight:400; font-size:52px; line-height:1.04; letter-spacing:-.02em; margin:0 0 14px; max-width:20ch; }
 .sub { color:#6d6c6b; margin:0 0 34px; font-size:22px; max-width:56ch; }
 table { border-collapse:collapse; width:100%; background:#fff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden; }
 td, th { text-align:left; padding:16px 22px; border-bottom:1px solid #e5e7eb; font-size:22px; }
 tr:last-child td { border-bottom:0; }
 th { font-weight:400; font-size:13px; text-transform:uppercase; letter-spacing:.08em; color:#6d6c6b; }
 .ok { background:linear-gradient(90deg, rgba(228,242,34,.55), rgba(228,242,34,.15)); }
 .big { font-size:26px; } b { font-weight:500; }
 .foot { color:#6d6c6b; font-size:16px; margin-top:22px; }
 img.page { width:1280px; height:720px; object-fit:cover; object-position:top; display:block; }
"""
CARDS = {
    "problem": """<h1>One in four online clothing orders comes back.</h1>
    <p class=sub>Size and fit is the top reason (Coresight Research, 2023: 24.4% return rate, 53% for size or fit).</p>
    <table><tr><td class=big><b>300+</b> reviews per product</td><td class=big>the reasons are already written down</td></tr></table>""",

    "proof": f"""<h1>Checked against what renters said themselves</h1>
    <p class=sub>Rent the Runway fit labels, hidden from the model. {m['n']} reviews, 300 per class.</p>
    <table>
      <tr><th>review level</th><th>Gemma 3 12B on AMD</th><th>keyword rules</th></tr>
      <tr><td>macro-F1</td><td class=ok>{two(g['macro_f1'])}</td><td>{two(k['macro_f1'])}</td></tr>
      <tr><td>recall, runs large</td><td class=ok>{two(g['large']['recall'])}</td><td>{two(k['large']['recall'])}</td></tr>
      <tr><td>recall, runs small</td><td class=ok>{two(g['small']['recall'])}</td><td>{two(k['small']['recall'])}</td></tr>
    </table>""",

    "proof2": f"""<h1>40 products the prompt never saw</h1>
    <p class=sub>Spearman vs each item's true share over all its reviews. Run once.</p>
    <table>
      <tr><th>product level</th><th>Gemma 3 12B on AMD</th><th>keyword rules</th></tr>
      <tr><td>ranks "runs large"</td><td class=ok>{two(rk['large']['gemma'])}</td><td>{two(rk['large']['keyword'])}</td></tr>
      <tr><td>ranks "runs small"</td><td>{two(rk['small']['gemma'])}</td><td class=ok>{two(rk['small']['keyword'])}</td></tr>
      <tr><td>says why, quotes, writes the fix</td><td class=ok>yes</td><td>no</td></tr>
    </table>""",

    "amd": f"""<h1>One AMD GPU, open model</h1>
    <table>
      <tr><td>hardware</td><td class=big><b>{run['gpu']}</b> · 48 GB · ROCm {run['hip']}</td></tr>
      <tr><td>model</td><td class=big><b>Gemma 3 12B</b> instruct · bf16 · PyTorch</td></tr>
      <tr><td>reviews read</td><td class=big><b>{run['reviews']:,}</b> · {run['reviews_per_s']:.2f} / s, batched</td></tr>
    </table>
    <p class=foot>customer text stays on the seller's GPU · github.com/bisale24-ops/why-they-return</p>""",

    "close": """<h1>Why They Return</h1>
    <p class=sub>The reviews a store already has, turned into the fix for its listings.</p>
    <table>
      <tr><td>demo</td><td>bisale24-ops.github.io/why-they-return</td></tr>
      <tr><td>code + data + every number</td><td>github.com/bisale24-ops/why-they-return</td></tr>
    </table>""",
}

IMAGES = {
    "hero": "shots/site-hero.png",
    "report": "shots/site-report.png",
    "money": "shots/site-money.png",
    "live": "shots/live-notebook.jpg",
}
BACKGROUND = "0xf4f2f0"
