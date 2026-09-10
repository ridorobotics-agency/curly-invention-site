import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

const stepIcons = [
  // Create event
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/>
  </svg>,
  // Customize card
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>,
  // Invite guests
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // Check-in
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>,
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section className="l-hiw l-section" id="how-it-works" aria-label={h.heading}>
      <div className="l-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="l-section-header l-reveal">
          <span className="l-label">Simple Process</span>
          <h2 className="l-heading-md">{h.heading}</h2>
          <div className="l-divider l-divider-center" aria-hidden="true" />
          <p>{h.subtext}</p>
        </div>

        {/* Steps */}
        <div className="l-hiw-steps" role="list">
          {h.steps.map((step, i) => (
            <div
              key={step.num}
              className={`l-hiw-step l-reveal l-delay-${i + 1}`}
              role="listitem"
            >
              <span className="l-hiw-step-num">{step.num}</span>
              <div className="l-hiw-step-circle" aria-hidden="true">
                {stepIcons[i]}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }} className="l-reveal">
          <a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary l-btn-lg">
            {t.nav.createEvent}
          </a>
        </div>
      </div>
    </section>
  );
}
