"""The keyword rule a seller would write first. The bar Gemma has to clear."""
import re

SMALL = [
    r"runs? small", r"size up", r"sized up", r"went up a size", r"order(ed)? a size up", r"too small",
    r"too tight", r"\btight\b", r"\bsnug\b", r"couldn'?t zip", r"could not zip", r"didn'?t zip", r"small in the",
]
LARGE = [
    r"runs? (big|large)", r"size down", r"sized down", r"went down a size", r"too (big|large|loose)",
    r"\bloose\b", r"\bbaggy\b", r"\broomy\b", r"\bbig in the", r"large in the", r"swimming in",
]


def classify(text: str) -> str:
    t = text.lower()
    s = sum(bool(re.search(p, t)) for p in SMALL)
    big = sum(bool(re.search(p, t)) for p in LARGE)
    if s > big:
        return "small"
    if big > s:
        return "large"
    return "fit"
