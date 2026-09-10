import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const StarIcon = () => <span className="l-star" aria-hidden="true">★</span>;

export default function Trust() {
  const { t } = useLanguage();
  const tr = t.trust;

  return (
    <section className="l-trust l-section" id="testimonials" aria-label={tr.heading}>
      <div className="l-container">
        {/* Stats */}
        <div className="l-trust-stats l-reveal" role="list" aria-label="Platform statistics">
          {tr.stats.map(s => (
            <div key={s.label} className="l-trust-stat" role="listitem">
              <span className="l-trust-stat-num">{s.value}</span>
              <span className="l-trust-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="l-section-header l-reveal" style={{ marginTop: '5rem' }}>
          <span className="l-label">Testimonials</span>
          <h2 className="l-heading-md">{tr.heading}</h2>
          <div className="l-divider l-divider-center" />
          <p>{tr.subtext}</p>
        </div>

        {/* Testimonials */}
        <div className="l-testimonials-grid" role="list">
          {tr.testimonials.map((test, i) => (
            <figure
              key={test.name}
              className={`l-testimonial l-reveal l-delay-${i + 1}`}
              role="listitem"
            >
              {/* Stars */}
              <div className="l-stars" aria-label="5 star rating">
                {[...Array(5)].map((_, si) => <StarIcon key={si} />)}
              </div>

              {/* Quote */}
              <blockquote className="l-testimonial-text">
                "{test.text}"
              </blockquote>

              {/* Author */}
              <figcaption className="l-testimonial-author">
                <div
                  className="l-testimonial-avatar"
                  aria-hidden="true"
                >
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="l-testimonial-name">{test.name}</div>
                  <div className="l-testimonial-event">{test.event}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
