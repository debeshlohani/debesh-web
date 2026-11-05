import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { readContent } from './content.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const content = readContent();
const portrait = `data:image/jpeg;base64,${readFileSync(new URL('../public/portrait.jpg', import.meta.url)).toString('base64')}`;
const result = await build({
  root,
  configFile: false,
  plugins: [react()],
  define: { __PREVIEW_PORTRAIT__: JSON.stringify(portrait) },
  build: {
    write: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: fileURLToPath(new URL('../src/standalone.jsx', import.meta.url)),
      output: { codeSplitting: false },
    },
  },
});
const output = result.output;
const javascript = output.filter((item) => item.type === 'chunk').map((item) => item.code).join('\n');
const css = output.filter((item) => item.type === 'asset' && item.fileName.endsWith('.css')).map((item) => item.source).join('\n');
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const html = `<!doctype html>
<html lang="${escapeHtml(content.site.language)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${escapeHtml(content.site.title)} — Preview</title>
<meta name="description" content="${escapeHtml(content.site.description)}">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${css.replace(/<\/style/gi, '<\\/style')}</style>
</head>
<body>
<div id="root"></div>
<script type="module">${javascript.replace(/<\/script/gi, '<\\/script')}</script>
</body>
</html>
`;
writeFileSync(new URL('../collaborator-preview.html', import.meta.url), html);
console.log('Created collaborator-preview.html — opens directly in a browser, with no Node.js required.');
