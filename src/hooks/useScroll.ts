import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to reveal elements on scroll using Intersection Observer
 */
export const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll(
      '.section-header, .svc-card, .home-panel-card, .service-row, .location-card, .membership-item, .dr-bio__photo, .dr-bio__text, .contact-form-wrap, .home-ref-wrap__item, .community-card'
    );

    if (!targets.length) return;

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    targets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.setAttribute('data-reveal-delay', String(index % 4));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
};

/**
 * Component-like hook to handle scroll to top or hash on route change
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (!target) return;
        const offset = 132;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
};
