import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import { useReveal } from '../hooks/useReveal';

const icons = {
  card: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M7 14h4M7 16h2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  ),
  qr: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3M17 14v3h3M14 20h3M20 20v-3" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 3 3 5-7" />
    </svg>
  ),
  languages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8h8M9 5v3a8 8 0 0 1-4 7M7 12c1 1.5 2.5 2.5 4 3" />
      <path d="M14 19h7M17.5 5 14 14h7l-3.5-9Z" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3Z" />
      <path d="m19 14-.75 2.25L16 17l2.25.75L19 20l.75-2.25L22 17l-2.25-.75L19 14ZM5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5L5 3Z" />
    </svg>
  ),
};

export default function ValueProposition() {
  const { t } = useLanguage();
  const v = t.value;
  const { ref } = useReveal();

  return (
    <section className="l-value l-section" id="features" aria-label={v.heading} ref={ref}>
      <div className="l-container">
        {/* Section Header */}
        <div className="l-section-header l-reveal">
          <span className="l-label">Why RIDO EVENTS</span>
          <h2 className="l-heading-md">{v.heading}</h2>
          <div className="l-divider l-divider-center" aria-hidden="true" />
          <p>{v.subtext}</p>
        </div>

        {/* Feature Grid */}
        <div className="l-value-grid" role="list">
          {v.features.map((f, i) => (
            <article
              key={f.title}
              className={`l-value-card l-reveal l-delay-${i + 1}`}
              role="listitem"
            >
              <div className="l-value-icon" aria-hidden="true">
                {icons[f.icon]}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="l-value-cta l-reveal">
          <div>
            <h3>{v.ctaTitle}</h3>
            <p>{v.ctaText}</p>
          </div>
          <a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary">
            {v.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
