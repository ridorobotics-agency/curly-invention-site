import React, { useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import '../../styles/landing.css';

import Header          from './sections/Header';
import Hero            from './sections/Hero';
import ValueProposition from './sections/ValueProposition';
import Philosophy      from './sections/Philosophy';
import DigitalCards    from './sections/DigitalCards';
import EventManager    from './sections/EventManager';
import GuestManagement from './sections/GuestManagement';
import QRCheckIn       from './sections/QRCheckIn';
import Communications  from './sections/Communications';
import HowItWorks      from './sections/HowItWorks';
import EventTypes      from './sections/EventTypes';
import TanzaniaFocus   from './sections/TanzaniaFocus';
import Pricing         from './sections/Pricing';
import Trust           from './sections/Trust';
import Journal         from './sections/Journal';
import Newsletter      from './sections/Newsletter';
import Footer          from './sections/Footer';

function LandingContent() {
  useReveal();

  return (
    <div className="landing-root">
      {/* Skip to main content (Accessibility) */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '0',
          zIndex: 9999,
          padding: '1rem 2rem',
          background: 'var(--gold)',
          color: 'white',
          fontFamily: 'var(--sans)',
          fontWeight: 600,
          borderRadius: '0 0 4px 4px',
        }}
        onFocus={e => { e.target.style.left = '50%'; e.target.style.transform = 'translateX(-50%)'; }}
        onBlur={e => { e.target.style.left = '-9999px'; e.target.style.transform = ''; }}
      >
        Skip to main content
      </a>

      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Value Proposition — 4 Features */}
        <ValueProposition />

        {/* 3. Brand Philosophy / Story */}
        <Philosophy />

        {/* 4. Digital Cards Showcase */}
        <DigitalCards />

        {/* 5. Event Manager Product Section */}
        <EventManager />

        {/* 6. Guest Management */}
        <GuestManagement />

        {/* 7. QR Check-In */}
        <QRCheckIn />

        {/* 8. Communications — SMS/WhatsApp/Email */}
        <Communications />

        {/* 9. How It Works */}
        <HowItWorks />

        {/* 10. Event Types Grid */}
        <EventTypes />

        {/* 11. Tanzania Focus / Local SEO */}
        <TanzaniaFocus />

        {/* 12. Pricing */}
        <Pricing />

        {/* 13. Trust + Testimonials */}
        <Trust />

        {/* 14. Journal / Blog */}
        <Journal />

        {/* 15. Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function LandingPage() {
  // Set page-level SEO document title
  useEffect(() => {
    const canonicalUrl = 'https://ridoevents.co.tz/';
    document.title = 'RIDO EVENTS | Digital Wedding Invitations & Event Management Tanzania';
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute('href', canonicalUrl);
    const openGraphUrl = document.querySelector('meta[property="og:url"]');
    if (openGraphUrl) openGraphUrl.setAttribute('content', canonicalUrl);
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);
  }, []);

  return <LandingContent />;
}
