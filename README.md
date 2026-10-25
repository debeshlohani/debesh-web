# Debesh Prasad Lohani — Portfolio

A React portfolio built with Vite. It preserves the original page's content, responsive layout, light/dark themes, career filters, publication search, and animations.

## Development

Use Node.js 20.19+ or 22.12+ (Node.js 24 recommended).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static hosting service. The app is served from the domain root. Set Vite's `base` and adjust the portrait URL if deploying under a subdirectory.

## Editing

- `src/components/Sections.jsx`: page sections and profile content.
- `src/components/Interactive.jsx`: theme toggle, role animation, counters, career filters, and publication search.
- `src/data.js`: career history and publications.
- `src/styles.css`: original styles and responsive layouts.
- `public/portrait.jpg`: portrait extracted from the original embedded image.
- `index.html`: document title, metadata, font link, and React entry point.

The page uses Google Fonts with system-font fallbacks. There is no backend or environment configuration required.
