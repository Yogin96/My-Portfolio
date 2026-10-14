# Yogin portfolio design system

The homepage's approved design decisions live here. `tokens.css` is the shared source of values; `design-system.html` provides a visual reference. Updated 12 October 2026.

## Text colors

Use exactly three text levels. Do not introduce additional grays for text.

| Token | Value | Use |
| --- | --- | --- |
| `--text-primary` | `#202020` | Intro heading and project titles |
| `--text-secondary` | `#5E5E5E` | Bio, contact links, project descriptions and tags |
| `--text-tertiary` | `#999999` | Section labels, footer, copy icon and status |

Links may use primary on hover. Project titles retain primary on hover. Border and surface colors are independent of these text levels.

## Typography

Inter only, hosted locally through `fonts.css`. The generic sans-serif fallback is used only while the font loads. Regular weight 400; titles weight 600.

| Role | Desktop size / line height | Mobile size / line height | Tracking |
| --- | --- | --- | --- |
| Intro title | 20 / 26px | 18 / 23.4px | −0.5px |
| Project title | 18 / 25px | 15 / 22px | −0.45px desktop; −0.25px mobile |
| Body | 16 / 26px | 14 / 24px | Normal |
| Contact links | 16 / 22px | 12 / 22px | Normal |
| Project tags | 15 / 21px | 12 / 19px | Normal |
| Section label | 14 / 24px | 14 / 24px | 1px; uppercase |
| Footer | 13 / 22px | 11 / 22px | Normal |

## Layout and spacing

- Centered 770px content column; white background.
- Desktop top padding: 120px. Tablet: 70px. Mobile: 40px.
- Label-to-content gap: **16px** at every breakpoint.
- Visual grid: 461:297 column ratio; 14px gap, 10px on mobile. The last two pieces span both columns.
- Intro portrait: 66px desktop; 52px mobile.
- Case-study media: 770 × 430px desktop; approximately 1.79:1 on smaller screens.
- Responsive thresholds: 900px and 540px. Mobile horizontal inset: 20px.

## Components

### Intro and contact row
Portrait next to the greeting, four paragraphs, then LinkedIn, Resume, email and copy action. Photography is included in the final paragraph. Copy feedback is exposed through a live status region.

### Case-study card
Image, primary title, secondary tags. Entire card links to its local case study. 5px image radius. No added card outline or shadow.

### Section label
CASE-STUDIES and VISUALS: 14px regular uppercase, 1px tracking, tertiary text, 24px line height, 16px below.

### Visual card
8px corner radius. A single edge overlay uses a 1px inset stroke of **black at 10% opacity**. It covers the artwork edge without adding an outer border or changing dimensions. Avoid a second outline layer. Current images are cropped from the supplied reference, including their original framing.

### Footer
Tertiary text. Live Bangalore time using `Asia/Kolkata`; right-hand credit: **Built with Codex**. Stacks vertically on mobile.

## Interaction

- Visible keyboard focus: 2px outline, 5px offset.
- Native links and buttons; descriptive image alternatives.
- Respect reduced-motion preference for page scrolling.

## Scope

These foundations govern the homepage. The Sabhalog and Karm case-study pages intentionally retain their original Framer typography and layout, as requested. Text inside visual artwork is part of those images and does not inherit site tokens.
