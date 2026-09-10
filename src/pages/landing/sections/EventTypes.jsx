import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

// Beautiful Unsplash wedding/event images for each event type
const eventImages = [
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80',  // Wedding
  'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80',  // Send-off
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',  // Kitchen Party
  'https://images.unsplash.com/photo-1464347744102-11db6282a4a5?w=600&q=80',  // Birthday
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',  // Graduation
  'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',     // Baby Shower
  'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80',     // Corporate
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',  // Conference
  'https://images.unsplash.com/photo-1502920514313-52581002a659?w=600&q=80',  // Religious
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',  // Traditional
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',  // Parties
];

const etColors = [
  'l-et-1','l-et-2','l-et-3','l-et-4','l-et-5','l-et-6',
  'l-et-7','l-et-8','l-et-9','l-et-10','l-et-11',
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

export default function EventTypes() {
  const { t, lang } = useLanguage();
  const ev = t.eventTypes;

  return (
    <section className="l-event-types l-section" id="event-types" aria-label={ev.heading}>
      <div className="l-container">
        {/* Header */}
        <div className="l-section-header l-reveal">
          <span className="l-label">All Occasions</span>
          <h2 className="l-heading-md">{ev.heading}</h2>
          <div className="l-divider l-divider-center" aria-hidden="true" />
          <p>{ev.subtext}</p>
        </div>

        {/* Grid */}
        <div className="l-event-types-grid" role="list">
          {ev.types.map((type, i) => (
            <a
              key={type.name}
              href="https://app.ridoevents.co.tz"
              className={`l-event-type-card l-reveal l-delay-${(i % 5) + 1}`}
              role="listitem"
              aria-label={`${type.name} events`}
            >
              {/* Gradient background */}
              <div className={`l-event-type-bg ${etColors[i]}`} aria-hidden="true" />

              {/* Image overlay */}
              <img
                src={eventImages[i]}
                alt={`${type.name} event`}
                className="l-event-type-bg"
                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                loading="lazy"
                decoding="async"
              />

              {/* Hover Arrow */}
              <div className="l-event-type-icon" style={{ zIndex: 3 }}>
                <ArrowIcon />
              </div>

              {/* Text Overlay */}
              <div className="l-event-type-overlay" style={{ zIndex: 2 }}>
                <div className="l-event-type-name">
                  {lang === 'sw' ? type.name : type.name}
                </div>
                <div className="l-event-type-name-sw">
                  {lang === 'sw' ? type.sw : type.sw}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
