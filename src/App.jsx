import { useEffect, useRef } from 'react';
import { Header, Hero, Stats, About, Career, Expertise, Recognition, Credentials, Writing, Contact, Footer } from './components/Sections';

export default function App() {
  const page = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    // Observe the outer reveal only, so nested headings don't animate twice.
    const elements = Array.from(page.current.querySelectorAll('.reveal'))
      .filter((element) => !element.parentElement.closest('.reveal'));
    function show(element) {
      element.classList.remove('pending');
      observer.unobserve(element);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) show(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    function syncMotion() {
      observer.disconnect();
      elements.forEach((element) => {
        if (motion.matches) {
          element.classList.remove('pending');
          return;
        }
        const parent = element.parentElement;
        const isCardGrid = parent.matches('.area, .aw, .cert, .two');
        const position = isCardGrid ? Array.from(parent.children).indexOf(element) : 0;
        element.style.setProperty('--reveal-delay', `${Math.min(position, 3) * 60}ms`);
        // Visible content stays visible; only upcoming content is staged.
        if (element.getBoundingClientRect().top >= window.innerHeight - 24) {
          element.classList.add('pending');
          observer.observe(element);
        }
      });
    }
    function revealFocusedContent(event) {
      const element = event.target.closest('.reveal.pending');
      if (element) show(element);
    }
    syncMotion();
    motion.addEventListener('change', syncMotion);
    const container = page.current;
    container.addEventListener('focusin', revealFocusedContent);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', syncMotion);
      container.removeEventListener('focusin', revealFocusedContent);
      elements.forEach((element) => {
        element.classList.remove('pending');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return (
    <div ref={page}>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Career />
        <Expertise />
        <Recognition />
        <Credentials />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
