import { useEffect, useRef, useState } from 'react';
import { useContent } from '../content';

export function ThemeToggle() {
  const content = useContent();
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.dataset.theme = current === 'dark' ? 'light' : 'dark';
  }
  return <button type="button" onClick={toggleTheme} aria-label={content.navigation.themeAccessibleLabel}>{content.navigation.themeLabel}</button>;
}

export function TypedRole() {
  const roles = useContent().hero.roles;
  const [text, setText] = useState(roles[0]);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    function start() {
      clearTimeout(timer);
      setText(roles[0]);
      if (motion.matches) return;
      let role = 0;
      let character = roles[0].length;
      let deleting = true;
      function tick() {
        const word = roles[role];
        character += deleting ? -1 : 1;
        setText(word.slice(0, character));
        let delay = deleting ? 30 : 60;
        if (!deleting && character === word.length) {
          deleting = true;
          delay = 1600;
        } else if (deleting && character === 0) {
          deleting = false;
          role = (role + 1) % roles.length;
        }
        timer = setTimeout(tick, delay);
      }
      timer = setTimeout(tick, 1600);
    }
    start();
    motion.addEventListener('change', start);
    return () => { clearTimeout(timer); motion.removeEventListener('change', start); };
  }, [roles]);
  return <><b aria-hidden="true">{text}</b><span className="sr-only">{roles.join(', ')}</span></>;
}

export function AnimatedStat({ value, suffix = '' }) {
  const element = useRef(null);
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    let frame;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      function animate(now) {
        const progress = Math.min((now - start) / 1200, 1);
        setCount(Math.round(value * progress));
        if (progress < 1) frame = requestAnimationFrame(animate);
      }
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.5 });
    observer.observe(element.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <div className="n" ref={element}><span aria-hidden="true">{count}{suffix}</span><span className="sr-only">{value}{suffix}</span></div>;
}

export function CareerTimeline() {
  const content = useContent();
  const { jobs, tracks } = content.career;
  const [track, setTrack] = useState('all');
  const visibleJobs = jobs.filter((job) => track === 'all' || job.track === track);
  return <>
    <div className="tabs" role="group" aria-label={content.career.filterLabel}>
      {tracks.map(({ id: value, label }) => <button key={value} type="button" className={`tab${track === value ? ' on' : ''}`} aria-pressed={track === value} aria-controls="career-timeline" onClick={() => setTrack(value)}>{label}</button>)}
    </div>
    <div className="tl" id="career-timeline" aria-live="polite">
      {visibleJobs.map((job) => <article className="job" key={`${job.organization}-${job.title}`}>
        <h3>{job.title}</h3><div className="org">{job.organization}</div><div className="dt">{job.dates}</div><p>{job.description}</p>
      </article>)}
    </div>
  </>;
}

export function Publications() {
  const content = useContent();
  const { publications } = content.writing;
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const visiblePublications = publications.filter((publication) => `${publication.year} ${publication.title} ${publication.publisher}`.toLowerCase().includes(normalizedQuery));
  return <>
    <input type="search" className="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={content.writing.searchPlaceholder} aria-label={content.writing.searchLabel} aria-controls="publications" />
    <div id="publications" aria-live="polite">
      {visiblePublications.length ? visiblePublications.map((publication) => <div className="pub" key={`${publication.year}-${publication.title}`}>
        <span className="y">{publication.year}</span><div>{publication.title}<br /><i>{publication.publisher}</i></div>
      </div>) : <p className="sub">{content.writing.noMatches}</p>}
    </div>
  </>;
}
