"""Render an Engine.report() result as the same report card the demo page shows, for a notebook cell."""
import html

CAUSE = {"length": "Length", "fabric_quality": "Fabric quality", "colour_vs_photo": "Colour vs photo",
         "comfort": "Comfort", "zipper_or_closure": "Zipper or closure",
         "style_vs_photo": "Looks different from photo", "other": "Other"}

CSS = """<style>
.wtr{font:15px/1.5 Inter,system-ui,sans-serif;color:#0c0a08;background:#f4f2f0;padding:20px;border-radius:16px;max-width:980px}
.wtr .card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:22px;margin-top:12px}
.wtr .label{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#6d6c6b}
.wtr h3{font-weight:400;font-size:28px;line-height:1.1;margin:6px 0 0}
.wtr .note{display:inline-block;margin-top:12px;padding:7px 12px;border-radius:6px;background:#e4f222}
.wtr .row{display:grid;grid-template-columns:110px 1fr 56px;gap:12px;align-items:center;margin-top:10px}
.wtr .track{height:10px;background:#f4f2f0;border-radius:3px;overflow:hidden}
.wtr .track i{display:block;height:100%;background:#0c0a08}
.wtr .two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.wtr .q{border:1px solid #e5e7eb;border-radius:12px;padding:10px 14px;margin-top:8px;color:#6d6c6b;font-size:14px}
.wtr .q b{font-weight:400;color:#0c0a08;background:linear-gradient(transparent 55%,#e4f222 55%)}
.wtr .run{display:flex;gap:24px;background:#1a1919;color:#fff;border-radius:12px;padding:14px 18px;margin-top:12px}
.wtr .run b{font-weight:400;color:#e4f222;font-size:20px}
</style>"""


def _e(s):
    return html.escape(str(s or ""))


def _quote(text, quote):
    t, q = _e(text), _e(quote).strip()
    i = t.lower().find(q.lower()) if q else -1
    return t if i < 0 else t[:i] + "<b>" + t[i:i + len(q)] + "</b>" + t[i + len(q):]


def to_html(r):
    rep = r.get("report", {})
    bars = "".join(
        f'<div class="row"><span>{name}</span><span class="track"><i style="width:{100 * v:.0f}%"></i></span>'
        f'<span>{100 * v:.0f}%</span></div>' for name, v in (("Runs small", r["runs_small"]), ("Runs large", r["runs_large"])))
    causes = "".join(f'<div class="row"><span>{CAUSE.get(c, c)}</span><span class="track"><i style="width:{100 * s:.0f}%">'
                     f'</i></span><span>{100 * s:.0f}%</span></div>' for c, s in list(r["causes"].items())[:4] if c != "other")
    quotes = "".join(f'<div class="q">{"runs small" if x["fit"] == "small" else "runs large"} · {_quote(x["text"][:300], x["quote"])}</div>'
                     for x in r["rows"] if x["fit"] in ("small", "large") and x["quote"])
    note = f'<span class="note">{_e(rep.get("size_note"))}</span>' if rep.get("size_note") else ""
    return CSS + f"""<div class="wtr">
<div class="run"><span>Reviews read<br><b>{r['n']}</b></span><span>Time on GPU<br><b>{r['seconds']:.1f} s</b></span>
<span>Hardware<br><b>{_e(r['gpu'])}</b></span><span>Model<br><b>Gemma 3 12B</b></span></div>
<div class="card"><div class="label">{_e(r['item'])}</div><h3>{_e(rep.get('headline') or 'Fit report')}</h3>{note}{bars}</div>
<div class="two"><div class="card"><div class="label">Add to the listing</div><p style="font-size:17px">{_e(rep.get('listing_fix'))}</p>
<div class="label">Photo to add</div><p>{_e(rep.get('photo_to_add'))}</p></div>
<div class="card"><div class="label">Other reasons</div>{causes or '<p>None stood out</p>'}</div></div>
<div class="card"><div class="label">What they wrote, with the phrase Gemma cited</div>{quotes}</div></div>"""
