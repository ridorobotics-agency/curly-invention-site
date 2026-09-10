import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();
  const p = t.philosophy;

  const eventTypes = [
    'Weddings', 'Traditional Ceremonies', 'Send-off', 'Kitchen Party',
    'Birthdays', 'Graduations', 'Baby Showers', 'Corporate Events',
    'Conferences', 'Religious Events', 'Parties',
  ];

  return (
    <section className="l-philosophy l-section" id="about" aria-label="Our Philosophy">
      <div className="l-philosophy-inner">
        {/* Left */}
        <div className="l-philosophy-left">
          <span className="l-philosophy-label-vert" aria-hidden="true">{p.label}</span>

          <div className="l-reveal-left l-philosophy-copy-block">
            <span className="l-philosophy-kicker">{p.label}</span>
            <h2 className="l-philosophy-title">
              {p.title}
              <em>{p.title2}</em>
            </h2>

            <div className="l-philosophy-stats">
              <div>
                <span className="l-philosophy-stat-num">—</span>
                <span className="l-philosophy-stat-label">{p.stat1}</span>
              </div>
              <div>
                <span className="l-philosophy-stat-num">11+</span>
                <span className="l-philosophy-stat-label">{p.stat2}</span>
              </div>
              <div>
                <span className="l-philosophy-stat-num">—</span>
                <span className="l-philosophy-stat-label">{p.stat3}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story and image */}
        <div className="l-philosophy-right">
          <div className="l-reveal-right">
            <p>{p.body1}</p>
            <p>{p.body2}</p>
            <p>{p.body3}</p>

            <div className="l-philosophy-event-types" role="list" aria-label="Supported event types">
              {eventTypes.map(type => (
                <span key={type} className="l-event-pill" role="listitem">{type}</span>
              ))}
            </div>
          </div>
          <div className="l-philosophy-photo" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85&auto=format"
              alt=""
              loading="lazy"
            />
            <span>{p.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
