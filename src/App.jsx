import { useEffect, useRef } from 'react';
import { Header, Hero, Stats, About, Career, Expertise, Recognition, Credentials, Writing, Contact, Footer } from './components/Sections';

export default function App() {
  const page = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    const elements = page.current.querySelectorAll('.reveal');
    elements.forEach((element) => { element.classList.add('pending'); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach((element) => element.classList.remove('pending')); };
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
