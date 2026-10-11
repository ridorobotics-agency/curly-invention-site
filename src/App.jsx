import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import InternalPage from './pages/InternalPage';
import SeoLandingPage from './pages/SeoLandingPage';
import { LanguageProvider } from './context/LanguageContext';
import NotFoundPage from './pages/NotFoundPage';
import { seoRoutes } from './seoRoutes';

const APP_URL = 'https://app.ridoevents.co.tz';

function AppRedirect() {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);

  return <NotFoundPage isRedirecting />;
}

export function AppRoutes() {
  return (
    <LanguageProvider>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/digital-wedding-invitations" element={<InternalPage page="digitalCards" />} />
          <Route path="/digital-cards" element={<InternalPage page="digitalCards" />} />
          {seoRoutes.map(({ path, type, slug }) => (
            <Route
              key={path}
              path={path}
              element={<SeoLandingPage type={type} slug={slug} path={path} />}
            />
          ))}
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
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LanguageProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
