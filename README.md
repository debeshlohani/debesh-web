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

## Editing content

Edit **[`content.json`](content.json)** for all page text, lists, links, statistics, portrait settings and document metadata. See **[the content editing guide](EDITING-CONTENT.md)** for instructions aimed at someone unfamiliar with React.

```sh
npm run check:content
```

Content changes refresh the local development page. Rebuild and redeploy to update the published website. Invalid content stops the build with an error that identifies the field to fix.

## Project files

- `content.json`: the single source of editable website content.
- `src/components/Sections.jsx`: page layout.
- `src/components/Interactive.jsx`: theme toggle, animations, filters and search.
- `src/styles.css`: styling and responsive layouts.
- `public/portrait.jpg`: profile portrait.
- `scripts/content.mjs`: content validation.
- `vite.config.js`: React setup and metadata generated from the content file.
- `index.html`: document shell, font link and React entry point.

The page uses Google Fonts with system-font fallbacks. There is no backend or environment configuration required.
