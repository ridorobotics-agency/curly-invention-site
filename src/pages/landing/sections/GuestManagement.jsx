import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

// Donut chart segments using SVG
function DonutChart() {
  const total = 250;
  const segments = [
    { value: 185, color: '#22c55e', label: 'Confirmed' },
    { value: 35,  color: '#f59e0b', label: 'Pending' },
    { value: 16,  color: '#ef4444', label: 'Declined' },
    { value: 14,  color: '#d1d5db', label: 'Not Invited' },
  ];

  const cx = 60, cy = 60, r = 48;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg className="l-donut" viewBox="0 0 120 120" aria-label="Guest RSVP breakdown chart">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--ivory-dark)" strokeWidth="16" />
      {segments.map((seg, i) => {
        const pct   = seg.value / total;
        const dash  = circumference * pct;
        const gap   = circumference - dash;
        const elem  = (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth="16"
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        );
        offset += dash;
        return elem;
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--charcoal)"
        style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 500 }}>
        250
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--warm-gray)"
        style={{ fontFamily: 'var(--sans)', fontSize: '8px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        TOTAL
      </text>
    </svg>
  );
}

const guestList = [
  { initials: 'AM', name: 'Amina Mwangi', group: 'Family · Table 1', status: 'confirmed' },
  { initials: 'JK', name: 'James Kimaro', group: 'Friends · Table 3', status: 'confirmed' },
  { initials: 'FH', name: 'Fatma Hassan', group: 'Work · Table 5', status: 'pending' },
  { initials: 'GB', name: 'Grace Banda', group: 'Family · Table 2', status: 'confirmed' },
  { initials: 'DA', name: 'David Ali', group: 'Friends · Table 4', status: 'pending' },
];

export default function GuestManagement() {
  const { t } = useLanguage();
  const g = t.guests;

  return (
    <section className="l-guests l-section" id="guest-management" aria-label={g.heading}>
      <div className="l-container">
        <div className="l-guests-inner">
          {/* Left: Copy + Features */}
          <div>
            <div className="l-reveal">
              <span className="l-label">Guest Management</span>
              <h2 className="l-heading-sm" style={{ marginTop: '1rem', marginBottom: '1rem' }}>{g.heading}</h2>
              <div className="l-divider" />
              <p className="l-body-lg" style={{ marginBottom: '2rem' }}>{g.subtext}</p>
            </div>

            {/* Stats */}
            <div className="l-guest-stats l-reveal l-delay-1">
              {g.stats.map((s, i) => (
                <div key={s.label} className="l-guest-stat">
                  <span className="l-guest-stat-num">{s.value}</span>
                  <span className="l-guest-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="l-guest-features l-reveal l-delay-2">
              {g.features.map((f, i) => (
                <div key={i} className="l-guest-feature">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="l-guests-visual l-reveal-right">
            <div className="l-guests-visual-card">
              {/* Header */}
              <div className="l-guests-visual-header">
                <span className="l-guests-visual-title">Guest List</span>
                <button className="l-guests-add-btn" aria-label="Add guest">+ Add Guest</button>
              </div>

              {/* Donut + Legend */}
              <div className="l-donut-wrap">
                <DonutChart />
                <div className="l-donut-legend">
                  {[
                    { color: '#22c55e', label: 'Confirmed', val: '185' },
                    { color: '#f59e0b', label: 'Pending',   val: '35' },
                    { color: '#ef4444', label: 'Declined',  val: '16' },
                    { color: '#d1d5db', label: 'Not Sent',  val: '14' },
                  ].map(l => (
                    <div key={l.label} className="l-donut-legend-item">
                      <span className="l-donut-legend-dot" style={{ background: l.color }} />
                      <span className="l-donut-legend-label">{l.label}</span>
                      <span className="l-donut-legend-val">{l.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest List */}
              <div className="l-guests-list">
                {guestList.map(g => (
                  <div key={g.name} className="l-guests-list-item">
                    <div
                      className="l-guest-avatar"
                      aria-hidden="true"
                      style={{
                        background: g.status === 'pending' ? '#fef3c7' : 'var(--gold-pale)',
                        color: g.status === 'pending' ? '#92400e' : 'var(--gold-deep)',
                      }}
                    >
                      {g.initials}
                    </div>
                    <span className="l-guest-name">{g.name}</span>
                    <span className="l-guest-group">{g.group}</span>
                    <span className={`l-dash-badge ${g.status}`} style={{ fontSize: '0.6rem' }}>
                      {g.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
