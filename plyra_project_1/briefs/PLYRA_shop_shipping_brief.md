# PLYRA — Mini online shop: platform, costs, and shipping

Brief for the small 3-product launch (shared packaging, accessible price, "so people get to know us" rather than a revenue driver — see conversation context). Covers platform choice, real current costs, and how shipping would actually get managed day to day.

## 1. Platform recommendation: Ecwid, embedded in the existing site

Given the scale (3 products, low price, awareness goal, not a full catalog), a full standalone Shopify store is more than this needs right now. **Ecwid's Starter plan** is the right fit: $5/month, up to 10 products, designed specifically to embed into an existing website rather than live on its own domain — so it sits inside `index.html` (or the Antigravity-built site) as a small "shop" section, never breaking the editorial feel of the rest of the site.

Payment processing on top of that: **Stripe**, no monthly fee, 1.5% + €0.25 per successful transaction for EU cards (no setup cost, no hidden fees). So the real fixed cost is $5/month plus a small percentage per sale — low commitment, easy to try, easy to shut down if it doesn't get traction.

**If this grows later** (more products, more volume): Shopify's current plans start at Basic, $39/month ($29/month billed annually), with Shopify's own payment processing at 2.9% + 30¢ per transaction online. That's the upgrade path if the mini-shop works and the catalog grows — not where to start.

| | Ecwid Starter (recommended for launch) | Shopify Basic (later, if it grows) |
|---|---|---|
| Monthly cost | $5 | $39 ($29 billed annually) |
| Products included | Up to 10 | Unlimited |
| Lives on own domain or embeds in existing site | Embeds in existing site | Own store, can use custom domain |
| Card processing (via Stripe) | 1.5% + €0.25 per transaction (EU cards) | 2.9% + 30¢ via Shopify Payments |

## 2. Shipping — how it actually gets managed

Shipping isn't automatic out of the box with the lightweight setup — worth knowing that going in, since it means someone (Marko/Exe) manually enters rates rather than the store calculating them live from a courier's live API on the Starter/Ecwid path.

**How Ecwid + Correos works today:** there's no live-rate integration for home delivery — you check Correos' published rates yourself and enter fixed shipping prices into Ecwid by weight range and destination zone (e.g. "up to 250g, Spain peninsula: €X"). Since all 3 launch products share the same packaging, this is actually simple in practice — one weight bracket, one flat rate, done once and left alone. Ecwid does also support pickup-point delivery (drop off at a Correos point instead of home delivery) through a Sendcloud integration, which can be cheaper and is worth considering for a low-price product where shipping cost is a bigger % of the total.

**Current Correos rates (national, small packages, per this week's research):**
- Paq Ligero, up to 250g: €6.06
- Paq Ligero, up to 1kg: €10.61
- Paq Estándar, up to 1kg: €13.65
- Paq Estándar, up to 2kg: €17.10

**Alternatives worth a quick look before deciding:** SEUR has a point-to-point service (Shop2Shop) around €6.50 with VAT, sometimes cheaper than Correos for small light packages, and MRW doesn't publish a flat national rate — it's quoted per shipment through a local office, so not practical to hardcode into the shop without checking case by case.

**Practical recommendation:** since the 3 products share packaging and are presumably light (a few hundred grams to under 1kg once boxed), Correos' Paq Ligero tier is probably the simplest to set as the single flat shipping rate — enter it once in Ecwid, absorb it into the product price or charge it separately (a clear, honest flat shipping fee usually reads better than "free shipping" hiding in the price, for a small handmade-goods brand). If international shipping is wanted from day one, that needs its own rate bracket and adds real complexity (customs, higher cost) — worth deciding whether launch is Spain-only or EU-wide before setting this up, since Spain-only is much simpler to start.

## 3. Open questions before setup

1. Spain-only shipping to start, or include the rest of the EU from launch? (Spain-only is simpler and matches "awareness, not revenue" — can expand later.)
2. Flat shipping fee shown separately at checkout, or built into the product price ("free shipping")?
3. Home delivery only, or also offer the cheaper pickup-point option via Sendcloud?
4. Who physically packs and drops off orders — this is a real operational task once orders start coming in, not just a website setting.

## Cross-reference

Builds on the earlier chat about the mini-shop concept (3 products, shared packaging, entry-level price point) and the module/matrix production idea (shared plywood+formica pieces across products) — read together, not yet written up as its own brief.
