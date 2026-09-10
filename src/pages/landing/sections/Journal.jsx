import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const journalImages = [
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
];

const jiColors = ['l-ji-1','l-ji-2','l-ji-3','l-ji-4'];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Journal() {
  const { t } = useLanguage();
  const j = t.journal;

  return (
    <section className="l-journal l-section" id="blog" aria-label={j.heading}>
      <div className="l-container">
        {/* Header */}
        <div className="l-section-header l-reveal">
          <span className="l-label">Journal</span>
          <h2 className="l-heading-md">{j.heading}</h2>
          <div className="l-divider l-divider-center" />
          <p>{j.subtext}</p>
        </div>

        {/* Articles Grid */}
        <div className="l-journal-grid" role="list">
          {j.articles.map((article, i) => (
            <article
              key={article.title}
              className={`l-journal-card l-reveal l-delay-${i + 1}`}
              role="listitem"
            >
              {/* Image */}
              <div className="l-journal-img">
                <div className={`l-journal-img-bg ${jiColors[i]}`} aria-hidden="true" />
                <img
                  src={journalImages[i]}
                  alt={article.title}
                  className="l-journal-img-bg"
                  style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="l-journal-img-overlay" style={{ zIndex: 2 }}>
                  <span className="l-journal-category">{article.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="l-journal-content">
                <h3>{article.title}</h3>
                <p className="l-journal-excerpt">{article.excerpt}</p>

                <div className="l-journal-footer">
                  <span className="l-journal-read-time">{article.readTime}</span>
                  <a href="/blog" className="l-journal-link" aria-label={`Read: ${article.title}`}>
                    {j.readMore} <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="l-journal-cta-row l-reveal">
          <a href="/blog" className="l-btn l-btn-outline">
            {j.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
