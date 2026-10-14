# Yogin's portfolio

Static portfolio built with HTML, CSS and JavaScript. No backend, dependencies or build step.

## Pages

- `index.html`: homepage, selected case studies and visual craft.
- `sabhalog.html` and `karm.html`: case studies preserving the original Framer visuals.
- `design-system.html`: visual design system reference.
- `DESIGN-SYSTEM.md`: design specifications.

## Preview

Serve this folder with any static HTTP server. From this folder, if Python is installed:

```sh
python -m http.server 4173
```

Open `http://localhost:4173/`.

## Hosting

Publish this folder as the site root. The homepage is `index.html`. Keep `assets/` and `framer-assets/` alongside the pages; they contain locally stored imagery, Inter font files and the project video.

## Design system

Shared tokens live in `tokens.css`; local Inter font declarations live in `fonts.css`. The homepage uses three text levels: primary `#202020`, secondary `#5E5E5E`, and tertiary `#999999`. The case-study pages retain their original exported styling.

The footer displays Bangalore time and “Built with Codex.” Visual craft images currently use crops from the supplied design reference.
