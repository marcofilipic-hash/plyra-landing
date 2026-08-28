# PLYRA — "Super header" ribbon: prompt for Antigravity

Add a thin marquee/ribbon element above the main header, running full-width.

**Text:** "Designed around you. Built by hand."

**Behavior:**
- Continuous horizontal scroll, right to left, looping seamlessly (repeat the phrase with generous spacing between repetitions so it doesn't feel cramped).
- Very slow — aim for roughly 45–60 seconds per full loop, not a typical fast-moving ticker. The motion should be barely noticeable at a glance, more like an ambient texture than an attention-grabbing element.
- No pause-on-hover needed, but don't rule it out if it turns out useful for accessibility.

**Style:**
- Small type, restrained — this is a background detail, not a headline. Should not compete with the hero's price/CTA or the wordmark in the main header below it.
- Low contrast relative to its background (muted color, not full-strength ink/white) so it recedes visually.
- Keep it consistent with the existing PLYRA design tokens (see `:root` CSS variables in `index.html` — `--ink-faint` or similar muted token is probably the right color choice rather than full `--ink` or pure white).
- Sits above the existing `.site-header` (which already handles the white-over-hero → solid-on-scroll transition) — needs testing to confirm it doesn't visually collide with that transition, and to decide whether the ribbon scrolls away with the page or stays fixed alongside the header.

**Rationale (context, not to be shown on the page):** earlier exploration considered a faster-moving ticker with the phrase "crafted from listening, built by hand," but that felt too energetic/hype for PLYRA's restrained, editorial tone. Slowing the motion down to near-imperceptible, and swapping the copy for "Designed around you. Built by hand.", keeps a bit of ambient movement without it fighting the calm tone established elsewhere on the page (full-screen static hero, compact Proposal strip, etc.).

**Accessibility note:** respect `prefers-reduced-motion: reduce` — freeze the ribbon (or hide the motion, show static text) for users who have that preference set, consistent with how the rest of the site already handles reduced motion.
