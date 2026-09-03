# PLYRA — Price-estimate tool ("OUTLINE"-style), inspired by Reform

New idea from this session: build PLYRA's own version of Reform's **OUTLINE** flow — a short, guided tool that gives a visitor a real price estimate based on their space and the collection/finish/hardware they pick, instead of (or before) they talk to a person.

This is a **different tool from the 10-step pre-screen wizard** already spec'd in `PLYRA_prescreen_wizard_brief.md` — see "How this relates to the pre-screen wizard" below for why, and what needs deciding.

## What Reform's OUTLINE does (reference, screens reviewed this session)

1. **Entry screen** — "Get an estimate on your kitchen." One line explaining what the tool does ("using simple information on your space and preferences, we'll draw up a sketch of your project and let you compare the price to other designs and materials"), a single CTA ("Start your OUTLINE"), and a short explainer video below it. Calm, not salesy.
2. **Step 1 — space + layout.** Which space (kitchen, wardrobe, mudroom, bathroom, living room, other storage) as image tiles, then which layout shape (linear, L-shaped, U-shaped, island, parallel, high, bench) as simple pictograms — you can multi-select layout shapes that match.
3. **Step 2 — collection.** A searchable grid of every collection/variant grouped by product line (their line names: BASIS, PLAIN, FRAME, PROFILE, etc.), each shown as a real photo of that finish. This is the moment the tool becomes about *their specific product system*, not a generic form.
4. **Step 3 — dimensions + extras.** Enter the actual measurements of the space (with a live simple diagram showing which measurement is which, switchable cm/inches), an optional upload for a photo/floor plan/sketch, an open text box ("anything else we should know / pay attention to"), then budget range and installation timeframe as two dropdowns.
5. **Step 4 — contact.** Name, email, phone, country/state/zip, type of inquiry, one consent checkbox, submit.

Whole thing is 4 steps, white background, the same architectural line-drawing kitchen illustration from the rest of their site sitting quietly behind the modal — so it never feels like a separate, bureaucratic form bolted onto the site.

## PLYRA's version — mapped to what makes PLYRA PLYRA

The reason this fits PLYRA well: like Reform, PLYRA's collections aren't just "styles," they're a real design system — and PLYRA's is (or will be) built from three axes: **vínculos/uniones** (the joints/connections — how pieces meet each other, PLYRA's own signature detail), **acabados** (finishes — materials, colors, textures), and **herrajes** (the custom-designed hardware/pulls, see `PLYRA_notes_hardware_process.md`). That's genuinely more specific and ownable than Reform's line-based collections — PLYRA can let someone build their kitchen from these three ingredients directly, which doubles as a way of teaching visitors what actually makes PLYRA different while they get their price.

Proposed PLYRA flow (4 steps, same spirit, PLYRA's own logic):

**Entry screen**
- Headline: something like "Get an estimate for your kitchen" or a PLYRA-voiced variant — keep it low-key, one sentence explaining the tool, one CTA to start. Could open with the tagline "Every kitchen starts with a conversation" as a lead-in line, since this tool is explicitly framed as the useful first step before that real conversation (same logic already established for the pre-screen wizard).

**Step 1 — the space**
- What kind of space (kitchen / bar or restaurant / other space — keep this generalized per the fix already noted in `PLYRA_wizard_copy_carousel_fix.md`) and its rough layout shape, same pictogram-tile pattern as Reform. This step can be identical in spirit to Reform's — it's generic intake, nothing PLYRA-specific needed here yet.

**Step 2 — build it from PLYRA's own system (the part that should feel different from Reform)**
Three sub-choices, shown as real photos/swatches, not dropdowns:
- **Vínculo / unión** — the joint/connection style. This is PLYRA's most distinctive detail and deserves to be first and most visually prominent (macro photography once it exists, per the "detail + context" idea in `PLYRA_reform_structure_brief.md` §4a — the estimate tool is actually a great second home for that photography once it's shot).
- **Acabado** — finish/material/color, shown as swatches or small cabinet-front photos, grouped the way Reform groups by product line (PLYRA can group by finish family once that taxonomy exists).
- **Herraje** — hardware/pull style, once PLYRA's own designs exist; until then this step can be marked "coming soon" or skipped, per the same "build the mechanism now, backfill the content" approach already used for the wizard carousel.

**Step 3 — dimensions + context**
- Same pattern as Reform: measurement inputs with a small live diagram, optional photo/floor-plan/sketch upload, an open "anything we should know" box, budget range and timeframe dropdowns. This step can reuse content already defined in the pre-screen wizard's "información del proyecto" section almost as-is (medidas, referencias, qué es más importante) — no new copy needed, just a different container.

**Step 4 — contact**
- Name, email, phone/Instagram, consent checkbox, submit. Same fields already spec'd in the pre-screen wizard's "contacto" section.

**Result / closing screen**
- Reform's version compares price across designs/materials live — PLYRA doesn't need real-time pricing logic to start; an honest v1 can show a *reference range* (same "price shown as reference" language already used on the hero) plus the closing framing already established: this sets up the real conversation, it isn't a binding quote and it isn't the interview.

## How this relates to the pre-screen wizard — needs a decision, not solved here

`PLYRA_prescreen_wizard_brief.md` already spec'd a 10-step qualification wizard with almost the same underlying content (space type, size, style, budget, timeframe, contact). This OUTLINE-style tool covers a lot of the same ground but frames it explicitly as **getting a price estimate**, built around PLYRA's own vínculo/acabado/herraje system, rather than as a general pre-screen before the interview. Two real options, worth deciding in Antigravity rather than assuming here:

1. **Merge them** — one flow, positioned as "get an estimate," which naturally produces everything the pre-screen wizard needed anyway (arguably cleaner: visitors get something tangible — a price range — for filling out the form, instead of just "we'll be in touch").
2. **Keep them separate** — the pre-screen wizard stays the lightweight, form-first "before we meet" flow (as already spec'd), and this becomes a distinct, more visual "configure your kitchen" tool reachable from its own CTA (e.g. the Projects section or a dedicated line-drawing CTA section per `PLYRA_reform_structure_brief.md`'s §4b device) — closer to a product-configurator moment than a contact form.

Recommendation if a default is needed: start with option 1 (merge) for v1, since PLYRA doesn't have the volume of collections/finishes yet to justify two separate flows, and a visitor who finishes step 2 (having picked their vínculo/acabado) has effectively already done the "tell us about your project" work the pre-screen wizard wanted — just do it with real photos instead of plain form fields. Revisit option 2 later once vínculo/acabado/herraje libraries are big enough to be worth their own dedicated moment.

## What's blocked

- Vínculo (joint/detail) photography — same macro photography already flagged as blocking `PLYRA_reform_structure_brief.md` §4a.
- Herraje (hardware) designs don't exist yet — step 2's third sub-choice should ship as "coming soon" or be hidden until they do.
- Acabado photography currently only covers the existing kitchen collections (orange/graphite/petrol/wood) — enough to launch v1, but should grow as new finishes are added.
- No pricing logic/backend yet — v1 can ship with a static reference-range display rather than real per-selection pricing; a real pricing model is a separate, later project.

## Cross-reference

Read together with `PLYRA_prescreen_wizard_brief.md` (the content this may absorb), `PLYRA_reform_structure_brief.md` (the detail+context photography and line-drawing CTA device this tool can reuse), and `PLYRA_notes_hardware_process.md` (the herraje/hardware initiative this tool showcases once it's ready).
