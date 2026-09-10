import { useEffect, useRef } from 'react';

/**
 * useReveal — IntersectionObserver hook for scroll-reveal animations.
 * Adds 'is-visible' class to all .l-reveal, .l-reveal-left,
 * .l-reveal-right, and .l-reveal-scale elements within the ref container
 * when they enter the viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      // Make all reveals immediately visible
      const all = document.querySelectorAll('.l-reveal, .l-reveal-left, .l-reveal-right, .l-reveal-scale');
      all.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const targets = document.querySelectorAll(
      '.l-reveal, .l-reveal-left, .l-reveal-right, .l-reveal-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return { ref };
}
