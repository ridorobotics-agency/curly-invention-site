import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const cardColors = [
  'l-card-design-1', 'l-card-design-2', 'l-card-design-3', 'l-card-design-4',
  'l-card-design-5', 'l-card-design-6', 'l-card-design-7',
];

const cardEmojis = ['✿ ◆ ✿', '✦ ✧ ✦', '❋ ✵ ❋', '❀ ✾ ❀', '✸ ★ ✸', '✺ ✦ ✺', '◆ ✧ ◆'];
const categoryKeys = ['All', 'Wedding', 'Traditional', 'Birthday', 'Graduation', 'Baby Shower', 'Corporate', 'Religious', 'Party'];

export default function DigitalCards({ headingLevel = 'h2', heading }) {
  const { t } = useLanguage();
  useReveal();
  const c = t.cards;
  const Heading = headingLevel;
  const [activeCategory, setActiveCategory] = useState(0);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const visibleTemplates = activeCategory === 0
    ? c.templates
    : c.templates.filter(tpl => tpl.categoryKey === categoryKeys[activeCategory]);

  return (
    <section className="l-cards-section l-section" id="digital-cards" aria-label={c.heading}>
      <div className="l-container">
        {/* Header */}
        <div className="l-section-header l-reveal">
          <span className="l-label">Digital Cards</span>
          <Heading className="l-heading-md">{heading || c.heading}</Heading>
          <div className="l-divider l-divider-center" aria-hidden="true" />
          <p>{c.subtext}</p>
        </div>

        <div className="l-cards-cats l-reveal" role="tablist" aria-label="Card categories">
          {c.categories.map((cat, i) => (
            <button
              key={cat}
              className={`l-cat-btn ${activeCategory === i ? 'active' : ''}`}
              onClick={() => setActiveCategory(i)}
              role="tab"
              aria-selected={activeCategory === i}
              aria-label={`Filter: ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="l-cards-grid" role="list" aria-label="Digital card templates">
          {visibleTemplates.map((tpl, i) => (
            <article
              key={tpl.name}
              className={`l-card-item l-delay-${(i % 4) + 1}`}
              role="button"
              tabIndex="0"
              aria-label={`${c.preview}: ${tpl.name}`}
              onClick={() => setPreviewTemplate(tpl)}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setPreviewTemplate(tpl);
                }
              }}
            >
              <div className="l-card-preview">
                {tpl.image ? (
                  <img className="l-card-preview-img" src={tpl.image} alt={`${tpl.name} invitation template`} />
                ) : (
                  <div className={`l-card-design ${cardColors[i]}`} aria-hidden="true">
                  <div className="l-card-design-floral">{cardEmojis[i]}</div>
                  <div className="l-card-design-name">
                    {tpl.categoryKey === 'Wedding' && i < 2 ? (
                      <>
                        <span style={{ display: 'block', fontSize: '0.8em', letterSpacing: '0.2em', opacity: 0.7, fontStyle: 'normal' }}>
                          {i === 0 ? 'AMINA & JAMES' : 'SOFIA & DAVID'}
                        </span>
                        <span style={{ fontStyle: 'italic' }}>
                          {tpl.name}
                        </span>
                      </>
                    ) : (
                      tpl.name
                    )}
                  </div>
                  <div className="l-card-design-divider" />
                  <div className="l-card-design-sub">{tpl.style.split('·')[0].trim()}</div>
                  {tpl.categoryKey === 'Wedding' && i < 2 && (
                    <div style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      opacity: 0.6,
                      marginTop: '4px',
                    }}>
                      December 12, 2025 · Dar es Salaam
                    </div>
                  )}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="l-card-preview-overlay">
                  <span className="l-card-preview-btn">
                    {c.preview}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {previewTemplate && (
          <div className="l-card-modal" role="dialog" aria-modal="true" aria-label={`${c.preview}: ${previewTemplate.name}`} onClick={() => setPreviewTemplate(null)}>
            <div className="l-card-modal-content" onClick={event => event.stopPropagation()}>
              <button className="l-card-modal-close" type="button" onClick={() => setPreviewTemplate(null)} aria-label="Close preview">×</button>
              {previewTemplate.image ? (
                <img className="l-card-modal-img" src={previewTemplate.image} alt={`${previewTemplate.name} invitation preview`} />
              ) : (
                <div className={`l-card-design ${cardColors[c.templates.indexOf(previewTemplate) % cardColors.length]}`}>
                  <div className="l-card-design-floral">✿ ◆ ✿</div>
                  <div className="l-card-design-name">{previewTemplate.name}</div>
                  <div className="l-card-design-divider" />
                  <div className="l-card-design-sub">{previewTemplate.categoryKey}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Row */}
        <div className="l-cards-cta-row l-reveal">
          <Link to="/digital-wedding-invitations" className="l-btn l-btn-outline-gold l-btn-lg">
            {t.lang === 'sw' ? 'Angalia Templeti Zote' : 'Browse All Templates'}
          </Link>
        </div>
      </div>
    </section>
  );
}
