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

Deploy the generated `dist/` directory to a static hosting service. For subdirectory hosting, set `VITE_BASE_PATH` during the build (for example, `/debesh-web/`). The app uses this path for scripts, styles and public images.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the website whenever changes are pushed to `main`. It can also be started manually from the Actions tab.

In the repository's **Settings → Pages**, use **GitHub Actions** as the publishing source. The workflow reads the Pages URL to set asset paths automatically, including the portrait. The repository's default Pages URL is:

https://munishlohani.github.io/debesh-web/

Collaborators can edit `content.json` directly on GitHub and commit their changes. The workflow validates the content before publishing; a failed build leaves the last successful deployment in place. No local Node.js installation is required to update text this way.

## Editing content

Edit **[`content.json`](content.json)** for all page text, lists, links, statistics, portrait settings and document metadata. See **[the content editing guide](EDITING-CONTENT.md)** for instructions aimed at someone unfamiliar with React.

```sh
npm run check:content
```

Content changes refresh the local development page. Rebuild and redeploy to update the published website. Invalid content stops the build with an error that identifies the field to fix.

## Standalone collaborator preview

Share `collaborator-preview.html` and `content.json` with collaborators. They can open the HTML directly, edit the JSON in a text editor, then select it using **Choose content.json**. No Node.js or server is needed for this workflow. The HTML includes the app, styles and standard portrait, with offline font fallbacks.

`npm run build` regenerates the standalone preview as well as the production site. To regenerate only the HTML after layout/style changes, run:

```sh
npm run build:preview
```

Commit the generated HTML when updating its layout so collaborators receive the latest preview. Text-only edits can be loaded directly into the existing HTML. The standalone file is a local preview; publishing the website still requires rebuilding and redeploying `dist/`.

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
