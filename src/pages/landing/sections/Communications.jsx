import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SMSIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="8" y1="10" x2="8" y2="10"/>
    <line x1="12" y1="10" x2="12" y2="10"/>
    <line x1="16" y1="10" x2="16" y2="10"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const channelIcons = { whatsapp: WhatsAppIcon, sms: SMSIcon, email: EmailIcon };
const channelClasses = { whatsapp: 'whatsapp', sms: 'sms', email: 'email' };
const channelKeys = ['whatsapp', 'sms', 'email'];

export default function Communications() {
  const { t } = useLanguage();
  const c = t.comms;

  return (
    <section className="l-comms l-section" id="communications" aria-label={c.heading}>
      <div className="l-container">
        <div className="l-comms-inner">
          {/* Left: Channels */}
          <div>
            <div className="l-reveal">
              <span className="l-label">Communications</span>
              <h2 className="l-heading-sm" style={{ marginTop: '1rem', marginBottom: '1rem' }}>{c.heading}</h2>
              <div className="l-divider" />
              <p className="l-body-lg" style={{ marginBottom: '2.5rem' }}>{c.subtext}</p>
            </div>

            <div className="l-comms-channels">
              {c.channels.map((ch, i) => {
                const key = channelKeys[i];
                const Icon = channelIcons[key];
                return (
                  <div key={ch.name} className={`l-comms-channel l-reveal l-delay-${i + 1}`}>
                    <div className={`l-comms-channel-icon ${channelClasses[key]}`} aria-hidden="true">
                      <Icon />
                    </div>
                    <div className="l-comms-channel-content">
                      <h3>{ch.name}</h3>
                      <p>{ch.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Personalization Panel */}
          <div className="l-reveal-right">
            <div className="l-tokens-panel" role="region" aria-label="Message personalization tokens">
              <div className="l-tokens-header">
                <h3>{c.personalizeHeading}</h3>
              </div>

              {/* Preview Message */}
              <div className="l-tokens-preview" aria-label="Message preview example">
                Karibu{' '}
                <span className="l-token-highlight">{'{{name}}'}</span>
                , unaalikwa kushiriki{' '}
                <span className="l-token-highlight">{'{{jina_la_tukio}}'}</span>
                {' '}tarehe{' '}
                <span className="l-token-highlight">{'{{tarehe}}'}</span>
                {' '}mahali{' '}
                <span className="l-token-highlight">{'{{mahali}}'}</span>
                . Nambari yako ya mwaliko:{' '}
                <span className="l-token-highlight">{'{{nambari_ya_kipekee}}'}</span>
              </div>

              {/* Token List */}
              <div className="l-tokens-list">
                {c.tokens.map(tk => (
                  <div key={tk.token} className="l-token-row">
                    <code className="l-token-code">{tk.token}</code>
                    <span className="l-token-desc">{tk.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sending Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '1.5rem',
            }}>
              {[
                { label: 'Delivery Rate', value: '98%', color: '#22c55e' },
                { label: 'Open Rate', value: '91%', color: 'var(--gold)' },
                { label: 'RSVP Rate', value: '76%', color: '#3b82f6' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'var(--ivory)',
                  border: '1px solid var(--ivory-dark)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem',
                  textAlign: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: stat.color,
                    display: 'block',
                    lineHeight: 1,
                  }}>{stat.value}</span>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--warm-gray)',
                    marginTop: '0.25rem',
                    display: 'block',
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
