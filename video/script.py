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
     "Here is a real dress from Rent the Runway. Gemma flags it as running small, writes the size note for the "
     "size picker, and next to it shows what the renters themselves reported across all of the item's reviews, "
     "a number the model never saw."),

    ("shot:money",
     "The seller sets orders, price and the cost of one return, and sees what fit returns on this item cost a year. "
     "Below, every claim links back to the sentence a customer wrote, with the cited phrase highlighted."),

    ("shot:live",
     "And this is live, on the AMD notebook. Thirty reviews of a dress that is in none of the test sets go in. "
     "Gemma reads them on the GPU, counts the problems in code, and writes the listing fix in seconds."),

    ("card:proof",
     f"Does it work? Rent the Runway asks every renter whether the item fit, ran small or ran large. We hid that "
     f"label and compared. On {m['n']} held-out reviews Gemma scores a macro F1 of {two(g['macro_f1'])}, against "
     f"{two(k['macro_f1'])} for the keyword rules a seller would write. On forty products it was never tuned on, it "
     f"ranks the ones that run small with a Spearman of {two(rk['small']['gemma'])}, against "
     f"{two(rk['small']['keyword'])}."),

    ("card:amd",
     f"Everything runs on one AMD Radeon PRO W7900D with ROCm and PyTorch: {run['reviews']:,} reviews read in "
     f"this evaluation, in bf16, with the customer text never leaving the seller's own GPU."),

    ("card:close",
     "A size note costs nothing. A return costs shipping, handling, and often the sale. Why They Return turns the reviews a "
     "store already has into the fix for its listings. The code, the data and every number are on GitHub."),
]

STYLE_CARD = "font-family:Inter,system-ui,sans-serif"
CARDS = {
    "problem": """<h1>One in four online clothing orders comes back.</h1>
    <p class=sub>Size and fit is the top reason (Coresight Research, 2023: 24.4% return rate, 53% for size or fit).</p>
    <table><tr><td class=big><b>300+</b> reviews per product</td><td class=big>the reasons are already written down</td></tr></table>""",

    "proof": f"""<h1>Checked against what renters said themselves</h1>
    <p class=sub>Rent the Runway fit labels, hidden from the model. Prompt tuned on separate dev sets.</p>
    <table>
      <tr><th>held-out test</th><th>Gemma 3 12B on AMD</th><th>keyword rules</th></tr>
      <tr><td>{m['n']} reviews · macro-F1</td><td class=ok>{two(g['macro_f1'])}</td><td>{two(k['macro_f1'])}</td></tr>
      <tr><td>40 products · ranks "runs small" (Spearman)</td><td class=ok>{two(rk['small']['gemma'])}</td><td>{two(rk['small']['keyword'])}</td></tr>
      <tr><td>40 products · ranks "runs large" (Spearman)</td><td class=ok>{two(rk['large']['gemma'])}</td><td>{two(rk['large']['keyword'])}</td></tr>
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
    "live": "shots/live-notebook.png",
}
