import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { contentPath, readContent } from './scripts/content.mjs';

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'editable-content',
      buildStart() {
        readContent();
        this.addWatchFile(contentPath);
      },
      transformIndexHtml(html) {
        const { site } = readContent();
        return html
          .replace('__CONTENT_TITLE__', () => escapeHtml(site.title))
          .replace('__CONTENT_DESCRIPTION__', () => escapeHtml(site.description))
          .replace('__CONTENT_LANGUAGE__', () => escapeHtml(site.language));
      },
      handleHotUpdate({ file, server }) {
        if (file === contentPath) {
          readContent();
          server.ws.send({ type: 'full-reload' });
        }
      },
    },
  ],
});
