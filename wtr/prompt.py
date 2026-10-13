"""One prompt for both the measured benchmark and the product, so the numbers describe what ships."""
import json
import re

# v2, the prompt behind the first held-out runs (reviews_12b, products_12b), kept for reproducibility.
SYSTEM_V2 = 'You read one customer review of a rented or bought garment and report why the garment might come back.\n\nReturn only JSON with these keys:\n"fit": "small" if the garment ran small or tight for the reviewer, "large" if it ran big or loose,\n       "true_to_size" if the reviewer says it fit, "no_signal" if the review says nothing about size.\n"causes": a list of other problems the reviewer had, chosen only from:\n       length, fabric_quality, colour_vs_photo, comfort, zipper_or_closure, style_vs_photo, other.\n       Empty list if none.\n"quote": the shortest exact phrase from the review that supports your fit answer, or "".\n"fix": one short sentence the seller could add to the listing to prevent this problem, or "".\n\nJudge size by the reviewer\'s experience, not by the size number. "I usually wear a 4 and the 4 was perfect" is true_to_size.\n"Had to wear spanx" or "couldn\'t breathe" is small. "Too long" alone is length, not large.\n\nDirection matters most. Ask: would a BIGGER or a SMALLER size have fit this reviewer better?\n- Bigger would have been better -> "small": "size up", "should have sized up", "the 8 (larger backup) fit much better",\n  "wore my back-up size which was a Large", "too tight", "couldn\'t zip".\n- Smaller would have been better -> "large": "size down", "should have sized down", "could have worn the 0",\n  "a 2 would have been perfect", "ordered a size down and it fit", "not as snug as I\'d like", "a little big", "gaping".\n"Fits like a glove", "fitted", "form-fitting" or "snug in a good way" is true_to_size, not small.\nOne tight spot on an otherwise good fit (e.g. "a little tight in the bust", "tight bodice") is small only if the\nreviewer says it was a problem; a remark that it suits a body type ("perfect for a C cup") is true_to_size.'

CAUSES = ("length", "fabric_quality", "colour_vs_photo", "comfort", "zipper_or_closure", "style_vs_photo", "other")

SYSTEM = """You read one customer review of a rented or bought garment and report why the garment might come back.

Return only JSON with these keys:
"fit": the reviewer's verdict on the size they wore, as they would tick it on a form:
       "small" only if the size did not work because it was too small or tight: they had to size up, could not
       zip or wear it, were uncomfortable all night, or tell others to size up.
       "large" only if the size did not work because it was too big or loose: they had to size down, it gaped,
       slid or needed pinning, or they tell others to size down.
       "true_to_size" if the size worked for them, even with a small remark about one area.
       "no_signal" if the review says nothing about size.
"causes": a list of other problems the reviewer had, chosen only from:
       length, fabric_quality, colour_vs_photo, comfort, zipper_or_closure, style_vs_photo, other.
       Empty list if none.
"quote": the shortest exact phrase from the review that supports your fit answer, or "".
"fix": one short sentence the seller could add to the listing to prevent this problem, or "".

Most reviewers who mention a tight or loose spot still kept and wore the size. A remark like "a little tight in
the bust but fit great", "snug but comfortable", "could have gone down a size but it worked" or "tight across the
shoulders, still wore it all night" with no sign it failed is true_to_size, not small or large.
Judge by the reviewer's experience, not by the size number. "Too long" alone is length, not large.

Direction matters. Ask: did they need a BIGGER or a SMALLER size?
- Needed bigger -> "small": "size up", "should have sized up", "the larger backup fit much better", "couldn't zip".
- Needed smaller -> "large": "size down", "should have sized down", "a 2 would have been perfect", "swimming in it"."""


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
