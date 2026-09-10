import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.25 8.25 0 0 0 4.83 1.55V7.07a4.85 4.85 0 0 1-1.06-.38z"/>
  </svg>
);

const footerLinks = {
  product: [
    { label: 'Digital Invitations', href: '/digital-wedding-invitations' },
    { label: 'Event Manager', href: '/event-manager' },
    { label: 'Guest Management', href: '/event-manager#guests' },
    { label: 'QR Check-In', href: '/#qr-check-in' },
    { label: 'RSVP', href: '/#guest-management' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/#pricing' },
  ],
  resources: [
    { label: 'Help Center', href: '/help' },
    { label: 'Wedding Planning Guide', href: '/blog/wedding-planning-guide' },
    { label: 'Invitation Guide', href: '/blog/invitation-guide' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const footerLinksSw = {
  product: [
    { label: 'Mialiko ya Kidijitali', href: '/sw/mwaliko-wa-harusi-kidigitali' },
    { label: 'Msimamizi wa Tukio', href: '/event-manager' },
    { label: 'Usimamizi wa Wageni', href: '/event-manager#guests' },
    { label: 'QR Check-In', href: '/#qr-check-in' },
    { label: 'RSVP', href: '/#guest-management' },
  ],
  company: [
    { label: 'Kuhusu', href: '/about' },
    { label: 'Wasiliana', href: '/contact' },
    { label: 'Blogu', href: '/blog' },
    { label: 'Bei', href: '/#pricing' },
  ],
  resources: [
    { label: 'Kituo cha Usaidizi', href: '/help' },
    { label: 'Mwongozo wa Kupanga Harusi', href: '/blog' },
    { label: 'Mwongozo wa Mwaliko', href: '/blog' },
    { label: 'Maswali ya Kawaida', href: '/faq' },
  ],
  legal: [
    { label: 'Sera ya Faragha', href: '/privacy' },
    { label: 'Masharti ya Huduma', href: '/terms' },
    { label: 'Sera ya Cookie', href: '/cookies' },
  ],
};

export default function Footer() {
  const { t, lang } = useLanguage();
  const f = t.footer;
  const links = lang === 'sw' ? footerLinksSw : footerLinks;
  const copyright = f.copyright.replace(/\b2025\b/, String(new Date().getFullYear()));

  return (
    <footer className="l-footer" id="footer" role="contentinfo" aria-label="Site footer">
      <div className="l-container">
        <div className="l-footer-top">
          {/* Brand */}
          <div>
            <div className="l-footer-brand-logo">
              <span className="l-logo-glass">
                <img
                  className="l-logo-image"
                  src="https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/LOGO%20(2).png"
                  alt="RIDO EVENTS"
                />
              </span>
            </div>
            <p className="l-footer-tagline">{f.tagline}</p>

            {/* Social Links */}
            <div className="l-footer-social" role="list" aria-label="Social media links">
              {[
                { Icon: FacebookIcon, name: 'Facebook', href: 'https://facebook.com' },
                { Icon: TwitterIcon,  name: 'Twitter/X', href: 'https://twitter.com' },
                { Icon: InstagramIcon, name: 'Instagram', href: 'https://instagram.com' },
                { Icon: TikTokIcon,  name: 'TikTok', href: 'https://tiktok.com' },
              ].map(({ Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="l-footer-social-link"
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="l-footer-col">
            <h4>{f.columns.product.heading}</h4>
            <ul className="l-footer-links">
              {links.product.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="l-footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="l-footer-col">
            <h4>{f.columns.company.heading}</h4>
            <ul className="l-footer-links">
              {links.company.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="l-footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="l-footer-col">
            <h4>{f.columns.resources.heading}</h4>
            <ul className="l-footer-links">
              {links.resources.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="l-footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="l-footer-col">
            <h4>{f.columns.legal.heading}</h4>
            <ul className="l-footer-links">
              {links.legal.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="l-footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="l-footer-bottom">
          <p className="l-footer-copyright">{copyright}</p>
          <a
            className="l-footer-made-in"
            href="https://ridotechsolutions-tz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {f.madeIn}
          </a>
        </div>
      </div>
    </footer>
  );
}
