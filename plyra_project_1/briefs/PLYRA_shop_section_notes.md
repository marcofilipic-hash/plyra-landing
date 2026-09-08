# PLYRA — Shop section, what's built and what's left

Added a new "Shop" section directly to `index.html`, between Projects and Process, with its own nav link ("Shop" in the header). It's built and ready to receive real content — nothing here is wired to a real checkout yet, on purpose, since the Ecwid account/plan hasn't been set up (see `PLYRA_shop_shipping_brief.md` in `/briefs` for that decision).

## What's there now

- Three product cards (`Object 01`, `Object 02`, `Object 03` — placeholder names/prices, swap for the real ones once decided), laid out the same way as the Projects grid, so it feels like part of the same site rather than a bolted-on store.
- Each card has a clearly-marked photo placeholder (dashed pattern + "Add product photo, 1200×1200px min, square") instead of a real image — same visual convention already used for the Projects section's placeholder state.
- Each card has a disabled "Coming soon" button instead of a real buy button.
- A short note under the grid: "One small batch at a time. Ships within Spain. Sign up below to know when they're available." — placeholder copy, meant to set expectations (limited batch, not a big store) — reword freely.
- Full instructions are written directly as an HTML comment right above the section in `index.html`, so whoever (or whichever Antigravity session) picks this up next has the context without needing this file — but it's summarized here too.

## To finish once photos exist

Replace each placeholder `<div class="thumb placeholder">...</div>` with:
```html
<div class="thumb"><img src="images/shop-01.webp" alt="Object 01 — short description"></div>
```
Same pattern the Projects section already uses. Recommended: square (1:1) photos, at least 1200×1200px, consistent lighting/background across all three since they share packaging — worth shooting all three in one session for consistency.

## To finish once Ecwid is set up

Replace each `<a class="buy-btn is-disabled">Coming soon</a>` with the real Ecwid product Buy Button embed (Ecwid dashboard → Products → [product] → Buy Button → get the embed code). At that point also decide: does "Coming soon" become "Add to cart", and does the note under the grid change once there's real availability instead of "sign up to know when"?

## Not yet decided (needs Marko's input before finishing)

- Real product names, prices, and short descriptions.
- Whether the closing note should link to an actual email signup (currently just text, no working form) — if wanted, that's a small addition once decided.
- Final copy for the headline/subtext — what's there now ("Start with something small") is a reasonable placeholder in PLYRA's voice, not final.
