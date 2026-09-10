import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section className="l-pricing l-section" id="pricing" aria-label={p.heading}>
      <div className="l-container">
        {/* Header */}
        <div className="l-section-header l-reveal">
          <span className="l-label">Pricing</span>
          <h2 className="l-heading-md">{p.heading}</h2>
          <div className="l-divider l-divider-center" />
          <p>{p.subtext}</p>
        </div>

        {/* Pricing Grid */}
        <div className="l-pricing-grid" role="list">
          {p.plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`l-pricing-card l-reveal l-delay-${i + 1} ${plan.highlighted ? 'highlighted' : ''}`}
              role="listitem"
              aria-label={`${plan.name} plan`}
            >
              {plan.badge && (
                <div className="l-pricing-badge" aria-label={`${plan.badge} plan`}>
                  {plan.badge}
                </div>
              )}

              <span className="l-pricing-plan-name">{plan.name}</span>

              <div className="l-pricing-price" aria-label={`Price: ${plan.price}`}>
                {plan.price}
              </div>
              <span className="l-pricing-period">{plan.period}</span>

              <p className="l-pricing-desc">{plan.desc}</p>

              <ul className="l-pricing-features" aria-label="Plan features">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="l-pricing-feature">
                    <span className="l-pricing-feature-icon" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.ridoevents.co.tz"
                className={`l-btn ${plan.highlighted ? 'l-btn-primary' : 'l-btn-outline-gold'}`}
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label={plan.cta}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          fontFamily: 'var(--sans)',
          fontSize: 'var(--fs-xs)',
          color: 'var(--warm-gray)',
        }} className="l-reveal">
          {t.lang === 'sw'
            ? 'Ada zote ni kwa tukio moja. Hakuna ada za nje zilizofichwa.'
            : 'All prices are per event. No hidden fees. Cancel anytime.'}
        </p>
      </div>
    </section>
  );
}
