# PLYRA — Structural Reference: Reform (reformcph.com)

Marko wants to rework the PLYRA landing page structure taking reformcph.com as the main reference. Two separate things to resolve — keep them distinct when picking this up.

## 1. The "detail + context" pairing — confirmed direction, ready to build

Reform's strongest recurring device: a tight close-up of a material or joint detail, paired immediately with the same detail seen in the full room. No long explanatory text — the two images do the talking.

**Applied to PLYRA:** the natural fit is the cabinet edge ("el canto") and the handmade finishes/joints PLYRA offers. Concept:

- Tight close-up shot of the edge/canto — showing the joint, the border color, the texture (thermolaminate / veneer / painted, whatever the actual finish is).
- Paired with a wide shot of the same kitchen where that same edge treatment runs across the fronts.
- Since PLYRA offers multiple edge/finish variants ("diferentes encuentros y acabados"), this pairing could repeat 2–3 times, once per finish variant — effectively a small "detail catalog," each with its close-up + context pair.
- Needs real macro photography of the actual joints/edges to work (Marko mentioned earlier he'd prepare macro/detail shots — this is the section that needs them most).

This part is ready to design/build whenever the macro photography exists.

## 2. Whole-site structure — open question, NOT yet decided

Reform's full page flow, top to bottom:

1. Brand hero (message-led, no product photo, e.g. "Let's bring your vision to life")
2. Collections, each credited to a named designer/architect
3. Detail + context pairing (see above)
4. Conversion tool (OUTLINE — sketch + price estimate, with its own CTA section: line-drawing isometric kitchen illustration behind a short centered message + button)
5. Showroom / physical experience section
6. Planning / consultation tools
7. Footer with certifications (FSC, B Corp, etc.)

This is considerably more "apparatus" than PLYRA needs at its current stage (no showroom network, no sketch tool, no wholesale/B2B arm). Before adopting this structure wholesale, decide: are we taking the full order and logic of these sections (brand → collections → detail/context → conversion tool → physical/consultation → footer), or just borrowing individual devices (like #3) while keeping PLYRA's current section order (Hero → Proposal → Projects → Process → Contact)?

**Not decided yet — resolve this before restructuring anything.**

## Other loose idea mentioned in passing (not scoped)

Reform's line-drawing isometric kitchen illustration (used as the background for their OUTLINE conversion section) is a nice device — plain white background, thin technical/architectural line drawing of a kitchen, short centered text + single CTA button on top. Could work as PLYRA's own transition/CTA section (e.g., before Contact), but the actual call-to-action content needs to be decided since PLYRA doesn't have an "OUTLINE"-equivalent tool — could be "request a consultation," "see the process," or similar. Not scoped, just noted as a visual device worth reusing.

## Current PLYRA landing status (for context when picking this up)

Single-file `index.html` (HTML/CSS/JS inline, base64 images), Vercel-deployable. Current section order: Hero (full-screen, 3-collection rotating photo, price + CTA bottom-left) → Proposal (compact text strip, placeholder copy pending Maru) → Projects (3-card grid, same kitchen in 3 collections, real case studies pending) → Process (4 steps: Interview → Design → Fabrication → Delivery) → Contact (currently a simple mailto form — separately, a 10-step qualification form has been spec'd to replace it, see `PLYRA_contact_form_brief.md`). See also `PLYRA_competitor_websites.md` for the wider comparison this reference came out of.
