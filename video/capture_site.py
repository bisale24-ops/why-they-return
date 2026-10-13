"""Screenshots of the demo page for the video, from a local server over docs/.

    python3 -m http.server 8811 --bind 127.0.0.1 --directory docs &
    ~/.venvs/video/bin/python video/capture_site.py
"""
import asyncio
import pathlib

SHOTS = pathlib.Path(__file__).resolve().parent / "shots"
URL = "http://127.0.0.1:8811/"


async def main():
    from playwright.async_api import async_playwright
    SHOTS.mkdir(exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch()
        page = await b.new_page(viewport={"width": 1280, "height": 720}, device_scale_factor=2)
        await page.goto(URL, wait_until="networkidle")
        await page.screenshot(path=str(SHOTS / "site-hero.png"))

        async def at(selector, name, offset=-72):
            await page.evaluate(f"window.scrollTo(0, document.querySelector('{selector}').getBoundingClientRect().top + scrollY + {offset})")
            await page.wait_for_timeout(500)
            await page.screenshot(path=str(SHOTS / f"{name}.png"))

        await at(".report", "site-report")
        await at(".money", "site-money", -200)
        await at(".quotes", "site-quotes", -140)
        await page.click("#items li:nth-child(2) button")
        await at(".report", "site-report-2")
        await at("#proofstats", "site-proof", -260)
        await b.close()
    print("shots in", SHOTS)


asyncio.run(main())
