# Marketing site UI kit

The public site at weareriftworks.com. Four surfaces, one page: header, hero,
services, approach, contact, footer.

**No production website source was provided**, so this is a recreation of the
hero and section layouts as designed in `Color Palettes v2.dc.html` (the
extended Aperture hero, light and dark) and `Documents 06.dc.html` (the
one-pager service sheet). Copy is lifted verbatim from the brand messaging
framework in `rift-works/documentation`, `brand/03-messaging-framework.md`.

Screens:
- `Header.jsx` — static header with the ES/EN switch and one accent CTA.
- `Hero.jsx` — the display headline, bilingual sub, delivery-model panel.
- `Services.jsx` — the four pillars as a four-up rule-divided row.
- `Approach.jsx` — the four phases with the standing engagement minimum.
- `Contact.jsx` — the form, using the real form primitives.
- `Footer.jsx` — reversed lockup, descriptor, legal line.

The language switch is real: it flips the whole page between Spanish and
English, which is how the brand handles bilingual — two clean versions, never a
mixed body.
