import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const n = t.newsletter;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="l-newsletter l-section" id="newsletter" aria-label={n.heading}>
      <div className="l-container">
        <div className="l-newsletter-inner">
          {/* Left */}
          <div className="l-reveal-left">
            <span className="l-label" style={{ marginBottom: '1rem', display: 'block' }}>Newsletter</span>
            <h2>{n.heading}</h2>
            <p>{n.subtext}</p>
          </div>

          {/* Right: Form */}
          <div className="l-reveal-right">
            {submitted ? (
              <div style={{
                padding: '2rem',
                background: 'var(--ivory)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--gold-light)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✉️</div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--charcoal)' }}>
                  {t.lang === 'sw' ? 'Asante! Umejisajili.' : 'Thank you! You\'re subscribed.'}
                </p>
              </div>
            ) : (
              <form
                className="l-newsletter-form"
                onSubmit={handleSubmit}
                aria-label="Newsletter subscription form"
              >
                <label htmlFor="newsletter-email" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  className="l-newsletter-input"
                  placeholder={n.placeholder}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  autoComplete="email"
                />
                <button type="submit" className="l-btn l-btn-primary" aria-label={n.cta}>
                  {n.cta}
                </button>
              </form>
            )}
            <p className="l-newsletter-privacy">{n.privacy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
