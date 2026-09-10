import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

// Random QR-like pattern
function QRCode() {
  const pattern = [
    1,1,1,1,1,1,1,0,
    1,0,0,0,0,0,1,0,
    1,0,1,1,1,0,1,0,
    1,0,1,0,1,0,1,1,
    1,0,1,1,1,0,1,0,
    1,0,0,0,0,0,1,1,
    1,1,1,1,1,1,1,0,
    0,1,0,0,1,0,0,1,
    1,1,0,1,1,0,1,0,
    0,0,1,0,0,1,0,1,
    1,0,1,1,0,0,1,0,
    0,1,0,0,1,0,0,1,
    1,1,0,1,1,1,0,0,
    0,0,1,0,0,0,1,0,
  ];

  return (
    <div className="l-qr-code-box">
      <div className="l-qr-code-inner" aria-hidden="true">
        {pattern.map((bit, i) => (
          <div
            key={i}
            className="l-qr-pixel"
            style={{
              background: bit ? 'var(--charcoal)' : 'transparent',
              width: '100%',
              height: '100%',
            }}
          />
        ))}
      </div>
      <div className="l-qr-scan-line" aria-hidden="true" />
    </div>
  );
}

export default function QRCheckIn() {
  const { t } = useLanguage();
  const q = t.qr;

  return (
    <section className="l-qr l-section" id="qr-check-in" aria-label={q.heading}>
      <div className="l-container">
        <div className="l-qr-inner">
          {/* Left: Steps */}
          <div>
            <div className="l-reveal">
              <span className="l-label">QR Check-In</span>
              <h2 className="l-heading-sm" style={{ marginTop: '1rem', marginBottom: '1rem' }}>{q.heading}</h2>
              <div className="l-divider" />
              <p className="l-body-lg" style={{ marginBottom: '2.5rem' }}>{q.subtext}</p>
            </div>

            <div className="l-qr-steps" role="list">
              {q.steps.map((step, i) => (
                <div key={step.step} className={`l-qr-step l-reveal l-delay-${i + 1}`} role="listitem">
                  <div className="l-qr-step-num" aria-hidden="true">{step.step}</div>
                  <div className="l-qr-step-content">
                    <h3>{step.label}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Visual */}
          <div className="l-qr-visual l-reveal-right">
            <div className="l-qr-phone" role="img" aria-label="QR check-in phone demo">
              <div className="l-qr-phone-screen">
                {/* Invitation Header */}
                <div style={{
                  textAlign: 'center',
                  fontFamily: 'var(--sans)',
                  fontSize: '0.6rem',
                  fontWeight: '700',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.25rem',
                }}>
                  You're Invited
                </div>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  color: 'var(--charcoal)',
                  textAlign: 'center',
                  marginBottom: '0.5rem',
                }}>
                  Harusi ya Amina &amp; James
                </div>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.6rem',
                  color: 'var(--warm-gray)',
                  textAlign: 'center',
                  marginBottom: '1rem',
                }}>
                  Dec 12, 2025 · Dar es Salaam
                </div>

                {/* QR Code */}
                <QRCode />

                {/* Guest Name */}
                <div style={{
                  textAlign: 'center',
                  marginTop: '0.75rem',
                }}>
                  <div className="l-qr-phone-name">Amina Hassan</div>
                  <div className="l-qr-phone-event">Guest · Table 3</div>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '0.6rem',
                    color: 'var(--warm-gray)',
                    marginTop: '0.25rem',
                  }}>
                    #RE-2025-AH-0042
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="l-qr-verified" role="status" aria-live="polite">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Guest Verified &amp; Checked In
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
