import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'digitalCards', href: '/digital-cards' },
  { key: 'eventManager', href: 'https://app.ridoevents.co.tz' },
  { key: 'features', href: '/#features' },
  { key: 'howItWorks', href: '/#how-it-works' },
  { key: 'pricing', href: '/#pricing' },
  { key: 'contact', href: '/contact' },
];

export default function Header() {
  const { lang, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const nav = t.nav;
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    } else {
      closeMenu();
    }
  };

  return (
    <>
      <header className={`l-header ${scrolled ? 'scrolled' : 'transparent'}`} role="banner">
        <div className="l-container l-header-inner">
          {/* Logo */}
          <a href="/" className="l-logo" aria-label="RIDO EVENTS – Home">
            <span className="l-logo-glass">
              <img
                className="l-logo-image"
                src="https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/LOGO%20(2).png"
                alt="RIDO EVENTS"
              />
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="l-nav" aria-label="Main navigation">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="l-nav-link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {nav[key]}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="l-header-actions">
            {/* Language Switcher */}
            <div className="l-lang-switcher" role="group" aria-label="Language selector">
              <button
                className={`l-lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-pressed={lang === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                className={`l-lang-btn ${lang === 'sw' ? 'active' : ''}`}
                onClick={() => setLanguage('sw')}
                aria-pressed={lang === 'sw'}
                aria-label="Badili kwa Kiswahili"
              >
                SW
              </button>
            </div>

            {/* Create Event CTA */}
            <a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary l-btn-sm">
              {nav.createEvent}
            </a>
            <a href="https://app.ridoevents.co.tz/login" className="l-btn l-btn-outline-gold l-btn-sm">
              {nav.login}
            </a>

            {/* Hamburger */}
            <button
              className={`l-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`l-mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`l-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <button
          className="l-mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
        >
          <CloseIcon />
        </button>

        <div className="l-mobile-nav">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="l-mobile-nav-link"
              onClick={(e) => handleNavClick(e, href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {nav[key]}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="l-mobile-lang">
          <span className="l-mobile-lang-label">Language</span>
          <div className="l-lang-switcher" role="group">
            <button
              className={`l-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              tabIndex={menuOpen ? 0 : -1}
              aria-pressed={lang === 'en'}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className={`l-lang-btn ${lang === 'sw' ? 'active' : ''}`}
              onClick={() => setLanguage('sw')}
              tabIndex={menuOpen ? 0 : -1}
              aria-pressed={lang === 'sw'}
              aria-label="Badili kwa Kiswahili"
            >
              SW
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="l-mobile-actions">
          <a
            href="https://app.ridoevents.co.tz"
            className="l-btn l-btn-primary"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            {nav.createEvent}
          </a>
          <a
            href="https://app.ridoevents.co.tz/login"
            className="l-btn l-btn-outline-gold"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            {nav.login}
          </a>
        </div>
      </nav>
    </>
  );
}
