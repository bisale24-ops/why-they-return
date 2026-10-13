"""One prompt for both the measured benchmark and the product, so the numbers describe what ships."""
import json
import re

CAUSES = ("length", "fabric_quality", "colour_vs_photo", "comfort", "zipper_or_closure", "style_vs_photo", "other")

SYSTEM = """You read one customer review of a rented or bought garment and report why the garment might come back.

Return only JSON with these keys:
"fit": "small" if the garment ran small or tight for the reviewer, "large" if it ran big or loose,
       "true_to_size" if the reviewer says it fit, "no_signal" if the review says nothing about size.
"causes": a list of other problems the reviewer had, chosen only from:
       length, fabric_quality, colour_vs_photo, comfort, zipper_or_closure, style_vs_photo, other.
       Empty list if none.
"quote": the shortest exact phrase from the review that supports your fit answer, or "".
"fix": one short sentence the seller could add to the listing to prevent this problem, or "".

Judge size by the reviewer's experience, not by the size number. "I usually wear a 4 and the 4 was perfect" is true_to_size.
"Had to wear spanx" or "couldn't breathe" is small. "Too long" alone is length, not large.

Direction matters most. Ask: would a BIGGER or a SMALLER size have fit this reviewer better?
- Bigger would have been better -> "small": "size up", "should have sized up", "the 8 (larger backup) fit much better",
  "wore my back-up size which was a Large", "too tight", "couldn't zip".
- Smaller would have been better -> "large": "size down", "should have sized down", "could have worn the 0",
  "a 2 would have been perfect", "ordered a size down and it fit", "not as snug as I'd like", "a little big", "gaping".
"Fits like a glove", "fitted", "form-fitting" or "snug in a good way" is true_to_size, not small.
One tight spot on an otherwise good fit (e.g. "a little tight in the bust", "tight bodice") is small only if the
reviewer says it was a problem; a remark that it suits a body type ("perfect for a C cup") is true_to_size."""


def user_message(text: str) -> str:
    return "Review:\n" + text.strip()


def parse(raw: str) -> dict:
    m = re.search(r"\{.*\}", raw, re.S)
    try:
        d = json.loads(m.group(0)) if m else {}
    except json.JSONDecodeError:
        d = {}
    fit = d.get("fit") if d.get("fit") in ("small", "large", "true_to_size", "no_signal") else "no_signal"
    causes = [c for c in d.get("causes", []) if c in CAUSES] if isinstance(d.get("causes"), list) else []
    return {"fit": fit, "causes": causes, "quote": str(d.get("quote", ""))[:200], "fix": str(d.get("fix", ""))[:240],
            "parsed": bool(d)}


def to_label(fit: str) -> str:
    """The renters' label has no 'no signal': a review without a size complaint is filed as fit."""
    return fit if fit in ("small", "large") else "fit"
