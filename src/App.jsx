import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import InternalPage from './pages/InternalPage';
import SeoLandingPage from './pages/SeoLandingPage';
import { LanguageProvider } from './context/LanguageContext';

const APP_URL = 'https://app.ridoevents.co.tz';

function AppRedirect() {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/digital-wedding-invitations" element={<InternalPage page="digitalCards" />} />
          <Route path="/digital-cards" element={<InternalPage page="digitalCards" />} />
          <Route path="/wedding-cards" element={<SeoLandingPage type="service" slug="wedding-cards" />} />
          <Route path="/wedding-websites" element={<SeoLandingPage type="service" slug="wedding-websites" />} />
          <Route path="/event-management" element={<SeoLandingPage type="service" slug="event-management" />} />
          <Route path="/guest-management" element={<SeoLandingPage type="service" slug="guest-management" />} />
          <Route path="/qr-check-in" element={<SeoLandingPage type="service" slug="qr-check-in" />} />
          <Route path="/rsvp" element={<SeoLandingPage type="service" slug="rsvp" />} />
          <Route path="/wedding-events-mwanza" element={<SeoLandingPage type="location" slug="mwanza" />} />
          <Route path="/wedding-events-geita" element={<SeoLandingPage type="location" slug="geita" />} />
          <Route path="/wedding-events-morogoro" element={<SeoLandingPage type="location" slug="morogoro" />} />
          <Route path="/wedding-events-dar-es-salaam" element={<SeoLandingPage type="location" slug="dar-es-salaam" />} />
          <Route path="/wedding-events-arusha" element={<SeoLandingPage type="location" slug="arusha" />} />
          <Route path="/wedding-events-dodoma" element={<SeoLandingPage type="location" slug="dodoma" />} />
          <Route path="/sw/kadi-ya-harusi" element={<SeoLandingPage type="swahili" slug="kadi-ya-harusi" />} />
          <Route path="/sw/kadi-ya-mwaliko" element={<SeoLandingPage type="swahili" slug="kadi-ya-mwaliko" />} />
          <Route path="/sw/usimamizi-wa-sherehe" element={<SeoLandingPage type="swahili" slug="usimamizi-wa-sherehe" />} />
          <Route path="/sw/mwaliko-wa-harusi-kidigitali" element={<SeoLandingPage type="swahili" slug="mwaliko-wa-harusi-kidigitali" />} />
          <Route path="/event-manager" element={<InternalPage page="eventManager" />} />
          <Route path="/register" element={<AppRedirect />} />
          <Route path="/about" element={<InternalPage page="about" />} />
          <Route path="/contact" element={<InternalPage page="contact" />} />
          <Route path="/blog" element={<InternalPage page="blog" />} />
          <Route path="/blog/wedding-planning-guide" element={<InternalPage page="weddingGuide" />} />
          <Route path="/blog/invitation-guide" element={<InternalPage page="invitationGuide" />} />
          <Route path="/help" element={<InternalPage page="help" />} />
          <Route path="/faq" element={<InternalPage page="faq" />} />
          <Route path="/privacy" element={<InternalPage page="privacy" />} />
          <Route path="/terms" element={<InternalPage page="terms" />} />
          <Route path="/cookies" element={<InternalPage page="cookies" />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
