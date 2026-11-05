import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ContentProvider } from './content';
import { validateContent } from './content-validation';
import initialContent from '../content.json';
import './styles.css';
import './standalone.css';

function withEmbeddedPortrait(content) {
  // The standard portrait travels inside this HTML file for offline viewing.
  if (content.hero.portrait.src !== '/portrait.jpg') return content;
  return {
    ...content,
    hero: { ...content.hero, portrait: { ...content.hero.portrait, src: __PREVIEW_PORTRAIT__ } },
  };
}

function StandalonePreview() {
  const [content, setContent] = useState(() => withEmbeddedPortrait(initialContent));
  const [revision, setRevision] = useState(0);
  const [status, setStatus] = useState('Showing the included content. Choose your edited content.json to preview it.');
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = `${content.site.title} — Preview`;
    document.documentElement.lang = content.site.language;
    document.querySelector('meta[name="description"]').content = content.site.description;
  }, [content]);

  async function loadContent(event) {
    const file = event.target.files?.[0];
    // Reset the chooser so selecting the same file after another edit works.
    event.target.value = '';
    if (!file) return;
    try {
      const next = validateContent(JSON.parse(await file.text()));
      setContent(withEmbeddedPortrait(next));
      setRevision((value) => value + 1);
      setStatus(`Loaded ${file.name}. After saving another edit, choose the file again to refresh.`);
      setError('');
    } catch (error) {
      setError(`Could not load ${file.name}. ${error.message} Your previous preview is still shown.`);
    }
  }

  return <div className="preview-layout">
    <div className="preview-toolbar" role="region" aria-label="Local content preview">
      <div>
        <strong>Content preview</strong>
        <p role="status">{status}</p>
        {error && <p className="preview-error" role="alert">{error}</p>}
      </div>
      <label className="preview-picker">
        <span>Choose content.json</span>
        <input type="file" accept=".json,application/json" aria-label="Choose content.json" onChange={loadContent} />
      </label>
    </div>
    <div className="preview-site" key={revision}>
      <ContentProvider content={content}><App /></ContentProvider>
    </div>
  </div>;
}

createRoot(document.getElementById('root')).render(<StrictMode><StandalonePreview /></StrictMode>);
