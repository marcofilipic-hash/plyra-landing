# PLYRA — Landing Page: Next Phase Brief

Consolidated brief for the next round of work on the PLYRA landing page, to take into Antigravity. Replaces the separate scratch notes from this session (`PLYRA_competitor_websites.md`, `PLYRA_reform_structure_brief.md`, `PLYRA_ribbon_prompt.md`, `PLYRA_notes_hardware_process.md`, `PLYRA_prescreen_wizard_brief.md`, `PLYRA_contact_form_brief.md`) — this document is the one to work from; the others can stay as backup detail if needed.

---

## 1. Where the site stands today

Single-file `index.html` (HTML/CSS/JS inline, images as base64), deployed on Vercel. Current section order:

**Hero** (full-screen, 3-collection rotating kitchen photo — orange/graphite/petrol — with a "Kitchens from €8.400" price + "Book a call" CTA bottom-left) → **Proposal** (compact text strip, placeholder statement, pending final copy from Maru) → **Projects** (3-card grid, same kitchen shown in the 3 collections, real case studies pending) → **Process** (4 steps: Interview → Design → Fabrication → Delivery) → **Contact** (currently a simple mailto form).

Design system is intentionally placeholder/neutral, pending the final visual system from Maru. Everything below assumes that constraint still holds — these are content, structure, and copy decisions, not a final visual redesign.

---

## 2. Brand voice: taglines settled this session

Two lines are locked in and ready to use:

- **"Every kitchen starts with a conversation."** — built on the idea that the kitchen has always been the place people end up gathering in (regardless of the occasion, there's usually food involved, and that's what brings people together). This is a brand/hook line — candidate placements: opening of Proposal, or as the header ribbon copy (see §3), or both if it doesn't feel repetitive.
- **"Designed around you. Built by hand."** — more of a value-proposition line (the how). Candidate placement: subtitle under the Proposal statement, or paired with the tagline above as a two-line combo (hook → what it means in practice).

These replace an earlier discarded direction ("crafted from listening, built by hand") that felt too close to paraphrasing a competitor's tone rather than PLYRA's own voice.

## 3. Header ribbon ("super header")

A thin marquee-style ribbon above the main site header, carrying **"Designed around you. Built by hand."**

- Right-to-left scroll, looping, but very slow — roughly 45–60 seconds per full loop. Should read as ambient texture, not an attention-grabbing ticker. (A faster loop was tried and rejected as feeling too "hype"/e-commerce for PLYRA's restrained tone.)
- Small type, muted color (use `--ink-faint` or similarly low-contrast token, not full `--ink` or white) — it should recede, not compete with the wordmark or the hero's price/CTA.
- Generous spacing between repeats of the phrase if it loops continuously.
- Must respect `prefers-reduced-motion: reduce` (freeze/hide motion), consistent with how the rest of the site already handles reduced motion.
- Needs a look at how it interacts with the existing `.site-header` scroll behavior (white-over-hero → solid-on-scroll) — decide if the ribbon scrolls away with the page or stays pinned alongside the header.

## 4. Structural reference: Reform (reformcph.com)

Reform is the closest direct competitor/comp (Danish kitchen brand, architect-credited collections, editorial tone, real conversion funnel underneath the polish). Two separate takeaways — don't conflate them:

**a) "Detail + context" material pairing — ready to design once photography exists.**
Reform's strongest device: a tight macro shot of a material/joint detail, paired immediately with the same detail seen in the full room. For PLYRA, the natural fit is the cabinet edge ("el canto") and the handmade finish variants — a macro shot of the edge/joint next to a wide shot of the same kitchen where that edge treatment runs across the fronts. Since PLYRA offers multiple edge/finish variants, this could repeat 2–3 times (a small "detail catalog"). **Blocked on:** real macro photography of the actual joints/edges — Marko has mentioned he'll prepare these.

**b) Whole-site structure — open question, not decided.**
Reform's full flow (brand hero → credited collections → detail/context → conversion tool "OUTLINE" with a line-drawing kitchen illustration behind a short CTA → showroom → planning tools → footer with certifications) is more "apparatus" than PLYRA needs right now (no showroom network, no sketch tool). **Decide before restructuring:** are we adopting that full order and logic, or just borrowing individual devices (like §4a and the line-drawing CTA background) while keeping PLYRA's current section order?

**Visual device worth reusing regardless:** Reform's plain white background with a thin technical/architectural line drawing of a kitchen, behind a short centered message + single CTA button — a nice transition/CTA section device. Could work before Contact, with PLYRA's own message (not Reform's "OUTLINE" tool, since that doesn't exist for PLYRA) — candidate copy: an invitation to start the pre-screen wizard (see §6).

**Other comps found, not deep-dived:** Unoform, Multiform (both Danish handcrafted kitchens, worth a pricing/CTA-strategy comparison) — see `PLYRA_competitor_websites.md` for the full research if needed.

## 5. Custom-designed hardware (tiradores / pulls)

PLYRA will design their own drawer pulls/hardware in-house, not just source third-party hardware — another differentiator alongside the cabinet fronts/finishes.

- Not yet placed anywhere in the copy or layout. Natural homes once there's photography: a line in the Proposal statement, a bullet near Process/materials, or — best option — folded into the "detail + context" pairing from §4a as another close-up (a custom pull next to the cabinet edge detail), since both are "made by hand, made by us" moments.

## 6. Contact: pre-screen wizard, NOT "the interview"

This is the most important structural decision from this session — read carefully, the naming matters.

**The distinction:**
- **On the website:** a short, general step-by-step wizard (10 steps, content below) — size, style, budget/timeline range, the basics. This is explicitly **not** the interview. Its only job is giving PLYRA a snapshot before the real meeting, so the first call doesn't start from zero.
- **In person (Process step 1, "Interview"):** the real conversation — understanding how the client actually lives, cooks, stores things, moves through the space. This can only happen face to face or on a call, not through form fields, and is where the deep listening actually happens.

**Do not brand the web wizard as "the interview," "start the conversation," or similar** — that language is reserved for the in-person step, and using it on the form overpromises a depth of exchange a web form can't deliver. Better framing: "Tell us about your kitchen," "A quick starting point," "Before we meet."

**Format:** step-by-step wizard (one question or small group per screen, progress indicator) — not a single long-page form. Could reuse the same step-indicator visual language as the 4-step Process section, so it reads as "step zero" of that same process rather than a disconnected contact form.

**Closing screen:** should clearly set the expectation that a real conversation/meeting comes next (e.g. "Thanks — we'll be in touch to set up a time to talk properly"), not a dead-end "thank you for your submission."

**The 10 questions (content unchanged from original spec):**

*Filtro y calificación*
1. Tipo de proyecto (cocina nueva, reforma, bar/restaurante, otro espacio)
2. Dónde está el espacio (Barcelona, alrededores, otra ciudad)
3. Estado actual (obra nueva, reforma en marcha, planificando)
4. Plazo estimado
5. Presupuesto orientativo

*Información del proyecto*
6. Medidas aproximadas del espacio
7. Estilo que les inspira (con imágenes de referencia si pueden subir)
8. Qué es lo más importante para ellos (materiales, color, funcionalidad, precio)
9. Pregunta abierta — "contanos tu proyecto"

*Contacto*
10. Nombre, mail, teléfono o Instagram

**Also clarify in the real Process copy:** the "Interview" step's description shouldn't sound like a generic "initial consultation" — it should communicate "we're learning how you actually live, cook, store, and move through the space," and should feel continuous with the pre-screen wizard rather than disconnected from it (the wizard is the first layer of that same listening process, the in-person interview is the deep layer).

**Live sketch alongside the wizard (new idea, not yet built).** As the visitor answers each step, a simple line-drawing sketch of a kitchen — same visual register as the technical/architectural line illustration referenced in §4b — builds up or updates beside the questions. Concept: predefined sketch "states" (not literal real-time freehand drawing) that transition smoothly as each answer comes in. For example: answering the size question reveals a floor-plan rectangle proportioned to that size; answering the style question shifts the line color/texture toward that style; answering "what matters most" (materials/color/functionality/price) highlights that specific element in the drawing. The effect should reinforce the feeling that PLYRA is already sketching their kitchen while listening, not just collecting form data — ties directly into the Process → Design step and the "made by hand" register used everywhere else on the site. Needs a proper design/build pass (illustration states, transition logic) — flagged here as a confirmed direction, not yet scoped in detail.

---

## 7. Price-estimate tool ("OUTLINE"-style), new idea this session

Inspired directly by Reform's OUTLINE flow (reviewed screen-by-screen this session): a short, guided tool that gives visitors a real price estimate, built around PLYRA's own design system rather than Reform's product lines — specifically **vínculo/unión** (joint/connection style, PLYRA's signature detail), **acabado** (finish/material), and **herraje** (custom hardware, once designed). Full flow, screen-by-screen mapping to Reform's steps, and the open question of whether this merges with or stays separate from the pre-screen wizard below, is written up in full in `PLYRA_estimate_tool_brief.md` (in `/briefs`) — read that file before building this, it's too detailed to duplicate here.

## Open decisions before building

1. Do we adopt Reform's full site structure/order, or just the detail+context device + line-drawing CTA section (§4b)?
2. Where does custom hardware (§5) get its first mention — copy-only for now, or wait for photography?
3. Wizard placement: same page (scroll or modal) or separate route (e.g. `/interview` or `/start`)?
4. Question order within the wizard — likely qualification questions first (faster to answer), more reflective ones (style, "tell us your project") later once some commitment is built.
5. Does the new price-estimate tool (§7) merge with the pre-screen wizard into one flow, or stay as a separate, more visual "configure your kitchen" tool? See `PLYRA_estimate_tool_brief.md` for the tradeoffs — leaning toward merging for v1.

## Still pending from earlier (unchanged, carried forward)

- Real project case studies to replace the 3-collection placeholder in Projects.
- Macro/detail material photos (blocking §4a and part of §5).
- A sketch/drawing for the Process → Design step.
- Final Proposal statement copy, pending confirmation with Maru.
- Final visual design system, pending Maru.
