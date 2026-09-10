import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) setImgLoaded(true);
  }, []);

  return (
    <section className="l-hero" id="hero" aria-label="Hero">
      {/* Background Image */}
      <div className="l-hero-bg" aria-hidden="true">
        <img
          ref={imgRef}
          src="https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/wed.png"
          alt="Wedding couple, shown from the waist down"
          className={`l-hero-img ${imgLoaded ? 'loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
        <div className="l-hero-overlay" />
      </div>

      {/* Content */}
      <div className="l-hero-content">
        {/* Badge */}
        <div className="l-hero-badge" aria-label={h.badge}>
          <span className="l-hero-badge-dot" aria-hidden="true" />
          <span>{h.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="l-hero-headline">
          <em>{h.headline}</em>
          <br />
          {h.headline2}
        </h1>

        {/* Supporting Text */}
        <p className="l-hero-subtext">{h.subtext}</p>

        {/* CTAs */}
        <div className="l-hero-actions">
          <a
            href="https://app.ridoevents.co.tz"
            className="l-btn l-btn-primary l-btn-lg"
            id="hero-cta-primary"
          >
            {h.cta1}
          </a>
          <a
            href="#digital-cards"
            className="l-btn l-btn-ghost l-btn-lg"
            id="hero-cta-secondary"
            onClick={e => {
              e.preventDefault();
              document.getElementById('digital-cards')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {h.cta2}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#digital-cards"
        className="l-hero-scroll"
        aria-label={h.scroll}
        onClick={e => {
          e.preventDefault();
          document.getElementById('digital-cards')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="l-hero-scroll-label">{h.scroll}</span>
        <svg className="l-hero-scroll-arrow" viewBox="0 0 24 30" fill="none" aria-hidden="true">
          <path d="M12 2v21M5 16l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
