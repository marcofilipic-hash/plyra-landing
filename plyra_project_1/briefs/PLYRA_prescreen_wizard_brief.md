# PLYRA — Pre-screen wizard (web) vs. the real Interview (in person)

Clarifying the relationship between the web form and the "Interview" step in Process, so this doesn't get built as if the website itself replaces the interview.

## The distinction

- **On the website:** a short, general step-by-step wizard — size of the space, style they're drawn to, budget/timeline range, the basics. This is NOT the interview. Its only job is to give PLYRA a snapshot before the real meeting happens, so the first call/meeting isn't starting from zero.
- **In person (Process step 1, "Interview"):** the real conversation — understanding how the client actually lives, cooks, stores things, moves through the space. This is where the deep listening happens, and it can only happen properly face to face (or on a call), not through form fields.

**Do not brand the web wizard as "the interview."** Keep that word for the in-person step. The web version is a pre-screen / snapshot — call it something like "Tell us about your project," "A quick starting point," or "Before we meet" rather than "the interview" or "start the conversation," to avoid overpromising a depth of exchange that a web form can't deliver.

## What this means for the build

1. **Format:** step-by-step wizard (one question or small group per screen, with a progress indicator), not a long single-page form. This resolves the open question left in `PLYRA_contact_form_brief.md` (single-page vs. wizard) — go with the wizard.
2. **Content:** this is the same 10-step structure already spec'd in `PLYRA_contact_form_brief.md` (filtro y calificación → información del proyecto → contacto). Nothing new needed there — the content doesn't change, only the framing/tone and the fact that it's explicitly positioned as "before we meet," not as the meeting itself.
3. **Tone:** conversational and light — short, direct questions, not bureaucratic field labels. But without implying this alone is "the conversation" PLYRA promises elsewhere (e.g., the tagline "Every kitchen starts with a conversation" — that conversation is the real one, in person; the web wizard is what makes that first real conversation more useful).
4. **Where it leads:** completing the wizard should clearly set the expectation that a real conversation/meeting comes next — e.g. a closing screen along the lines of "Thanks — we'll be in touch to set up a time to talk properly," not a dead-end "Thank you for your submission."
5. **Visual language:** could reuse the same step-indicator style already used for the 4-step Process (Interview → Design → Fabrication → Delivery), so visually the wizard feels like "step zero" of that same process rather than a disconnected contact form.

## Copy to avoid vs. copy that works

- Avoid: "Start the interview," "Let's talk" (as a wizard title) — implies this IS the deep conversation.
- Works better: "Tell us about your kitchen," "A quick starting point," "Before we meet" — sets it as preparation, not the main event.

## Cross-reference

See `PLYRA_contact_form_brief.md` (the 10-step content) and `PLYRA_notes_hardware_process.md` (the original note about what "Interview" in Process actually means) — this file resolves how those two connect and should be read together with both when the wizard gets built.
