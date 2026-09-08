# PLYRA — Multi-page draft (from single-scroll to real pages)

Draft restructuring the site from one long single-page scroll into 4 separate pages, so the header nav links actually go somewhere instead of jumping around inside the same scroll. Built and screenshot-verified locally (desktop + no console errors on all 4 pages).

## What changed

- **`index.html` (Home):** now just Hero + Proposal + a new "Explore" section — three cards linking out to Projects, Shop and Process. Short and light, not a full tour anymore.
- **`projects.html`:** the full Projects grid, its own page.
- **`shop.html`:** the Shop section built last session (3 placeholder product cards), its own page.
- **`process.html`:** Process (the 4 steps) + Contact form together on one page — kept together since the contact form is framed as "step zero" of that same process (see `PLYRA_prescreen_wizard_brief.md`).
- **`plyra.css` and `plyra.js`:** pulled out of the single `index.html` into shared files all four pages link to, instead of each page carrying its own copy of the same CSS/JS.
- **Header nav:** now real links (`projects.html`, `shop.html`, `process.html`) instead of `#anchor` jumps, with the current page underlined/highlighted (`.is-active`).
- **Header behavior on pages without a hero:** the header used to go "solid" only after scrolling past the hero photo. Pages with no hero (Projects, Shop, Process) now start solid immediately — small JS tweak in `plyra.js` so the header doesn't render see-through on a plain white page.
- **Images:** the Projects section's three photos, previously inline base64, are now real files (`images/project-orange.webp`, etc.) like the hero photos already were — keeps each page's file size sane instead of every page carrying a ~1MB inline block.

## Important — this is built on the older reference copy, not the live Antigravity site

Same caveat as the Shop section last time: this multi-page version was built starting from the local reference `index.html`, which is behind what's actually live (the live site already has 4 Projects collections, the working wizard, the header ribbon, etc. — none of that is reflected here). **Don't just overwrite the live site with these files.** The right move in Antigravity is: apply this same restructuring (splitting into index/projects/shop/process pages, shared CSS/JS, real nav links) to the current live code, carrying over everything that's been added there since — not replace it with this draft. Use these files as the reference for the pattern (how the split is organized, the shared CSS/JS approach, the nav behavior), not as a literal drop-in replacement.

## Open questions / things to decide

1. Is combining Process + Contact on one page right, or should Contact (and eventually the pre-screen wizard) be its own page/route? The current draft keeps them together.
2. The Home "Explore" section currently shows one real photo (Projects) and two text-only placeholder tiles (Shop, Process) — worth a real photo or icon for those two once there's something to show, so all three tiles feel equally finished.
3. URLs are currently flat (`shop.html` etc.) — fine for now, but if this becomes a real multi-page site long-term, cleaner URLs (`/shop`, `/projects`) are a hosting/routing decision for whoever sets up the final deploy.
