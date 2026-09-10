import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const guestRows = [
  { name: 'Amina Hassan', table: 'Table 3', status: 'confirmed' },
  { name: 'James Mwenda', table: 'Table 1', status: 'confirmed' },
  { name: 'Fatma Ali', table: 'Table 5', status: 'pending' },
  { name: 'David Kimaro', table: 'Table 2', status: 'confirmed' },
  { name: 'Grace Mbwana', table: 'Table 4', status: 'declined' },
];

export default function EventManager() {
  const { t } = useLanguage();
  const m = t.manager;
  const statsLabels = m.statsLabels;

  return (
    <section className="l-manager l-section" id="event-manager" aria-label={`${m.heading} ${m.heading2}`}>
      <div className="l-container">
        <div className="l-manager-inner">
          {/* Left: Copy + Features */}
          <div className="l-manager-left l-reveal-left">
            <span className="l-label">Event Manager</span>
            <h2 className="l-heading-md" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              {m.heading}<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{m.heading2}</em>
            </h2>
            <div className="l-divider" aria-hidden="true" />
            <p className="l-body-lg">{m.subtext}</p>

            <ul className="l-manager-features" aria-label="Event manager features">
              {m.features.map((f, i) => (
                <li key={i} className="l-manager-feature">
                  <span className="l-manager-feature-dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary">
              {t.nav.createEvent}
            </a>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="l-reveal-right">
            <div className="l-dashboard-mockup" role="img" aria-label="Event dashboard preview">
              {/* Window chrome */}
              <div className="l-dash-header">
                <div className="l-dash-header-dots" aria-hidden="true">
                  <span className="l-dash-header-dot" />
                  <span className="l-dash-header-dot" />
                  <span className="l-dash-header-dot" />
                </div>
                <span className="l-dash-header-title">{m.dashboardTitle}</span>
                <span style={{ width: '60px' }} />
              </div>

              {/* Body */}
              <div className="l-dash-body">
                <div className="l-dash-event-name">Harusi ya Amina & James</div>
                <div className="l-dash-event-meta">
                  <span>📅 December 12, 2025</span>
                  <span>📍 Dar es Salaam</span>
                </div>

                {/* Stats */}
                <div className="l-dash-stats">
                  {[
                    { label: statsLabels.guests, value: '250' },
                    { label: statsLabels.invited, value: '220' },
                    { label: statsLabels.confirmed, value: '185' },
                    { label: statsLabels.checkedIn, value: '164' },
                  ].map(s => (
                    <div key={s.label} className="l-dash-stat">
                      <span className="l-dash-stat-num">{s.value}</span>
                      <span className="l-dash-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Guest Table */}
                <div className="l-dash-table">
                  <div className="l-dash-table-head">
                    <span>Name</span>
                    <span>Table</span>
                    <span>RSVP</span>
                    <span>QR</span>
                  </div>
                  {guestRows.map(g => (
                    <div key={g.name} className="l-dash-table-row">
                      <span>{g.name}</span>
                      <span style={{ color: 'var(--warm-gray)', fontSize: '0.7rem' }}>{g.table}</span>
                      <span className={`l-dash-badge ${g.status}`}>{g.status}</span>
                      <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>⊞</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="l-dash-progress">
                  <div className="l-dash-progress-label">
                    <span>RSVP Progress</span>
                    <span>74%</span>
                  </div>
                  <div className="l-dash-progress-bar">
                    <div className="l-dash-progress-fill" style={{ width: '74%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
