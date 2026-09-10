import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './landing/sections/Header';
import Footer from './landing/sections/Footer';
import DigitalCards from './landing/sections/DigitalCards';

const pageContent = {
  digitalCards: {
    eyebrow: 'RIDO INVITATIONS',
    title: 'Digital Wedding Invitations in Tanzania',
    lead: 'Create beautiful digital wedding invitations in Tanzania with RSVP, guest management and easy WhatsApp sharing.',
    cards: [
      ['Designed for your story', 'Choose a refined starting point and make the colours, wording and details yours.'],
      ['Easy to share', 'Send one invitation link through WhatsApp, SMS or any channel your guests already use.'],
      ['Built for replies', 'Keep RSVP responses connected to the invitation so your guest list stays current.'],
    ],
    cta: 'Create an invitation',
  },
  eventManager: {
    eyebrow: 'EVENT MANAGER',
    title: 'The calm centre of your event planning.',
    lead: 'Coordinate guests, tables, invitations and attendance from one workspace designed for real event teams.',
    cards: [
      ['Guest management', 'Group guests, track headcounts and keep the right information close at hand.'],
      ['RSVP visibility', 'See responses as they arrive and follow up with the people who have not replied.'],
      ['Day-of check-in', 'Use QR check-in to welcome guests quickly and keep attendance accurate.'],
    ],
    cta: 'Start planning',
  },
  about: {
    eyebrow: 'ABOUT RIDO EVENTS',
    title: 'A more thoughtful way to gather.',
    lead: 'RIDO EVENTS helps Tanzanian couples, families and teams move from first invitation to final guest with less friction.',
    cards: [
      ['Local by design', 'Our language, event traditions and ways of gathering belong in the product from the beginning.'],
      ['Beautifully practical', 'Every detail is made to look considered while keeping the work simple for organisers.'],
      ['Made for togetherness', 'We help hosts spend more time present with their people and less time chasing spreadsheets.'],
    ],
  },
  blog: {
    eyebrow: 'THE RIDO JOURNAL',
    title: 'Ideas for gathering well.',
    lead: 'Planning notes, invitation inspiration and practical guidance for celebrations across Tanzania.',
    cards: [
      ['Wedding Planning Guide', 'A grounded way to turn a beautiful idea into a day that runs smoothly.', '/blog/wedding-planning-guide'],
      ['Invitation Guide', 'What to include, when to send it and how to make the details easy to find.', '/blog/invitation-guide'],
      ['A better guest list', 'Simple decisions that make RSVP tracking and seating much easier.', '/event-manager'],
    ],
  },
};

const pageSeo = {
  digitalCards: ['Digital Wedding Invitations Tanzania | RIDO EVENTS', 'Create beautiful digital wedding invitations in Tanzania with RSVP, guest management and easy WhatsApp sharing.'],
  eventManager: ['Event Management Tanzania | RIDO EVENTS', 'Manage guests, invitations, RSVPs, tables and QR check-in for weddings and events across Tanzania with RIDO EVENTS.'],
  register: ['Create Your Event | RIDO EVENTS', 'Start creating your digital invitation and manage your guests with RIDO EVENTS.'],
  about: ['About RIDO EVENTS | Digital Events Platform Tanzania', 'RIDO EVENTS helps Tanzanian couples, families and teams create digital invitations and manage memorable events.'],
  contact: ['Contact RIDO EVENTS | Tanzania Event Support', 'Contact RIDO EVENTS for help with digital wedding invitations, guest management and event planning in Tanzania.'],
  blog: ['Wedding Planning Ideas and Invitation Guides | RIDO EVENTS', 'Practical wedding planning ideas, digital invitation inspiration and event guidance for celebrations in Tanzania.'],
  weddingGuide: ['Wedding Planning Guide Tanzania | RIDO EVENTS', 'A practical guide to planning a clear, personal and well-organized wedding event in Tanzania.'],
  invitationGuide: ['Digital Wedding Invitation Guide | RIDO EVENTS', 'Learn what to include, when to send it and how to make a digital wedding invitation easy for guests to use.'],
  help: ['RIDO EVENTS Help Centre | Invitations and Events', 'Find answers about digital invitations, guests, RSVPs, QR check-in and event management with RIDO EVENTS.'],
  faq: ['Frequently Asked Questions | RIDO EVENTS', 'Answers to common questions about digital wedding invitations, RSVPs, guest management and event check-in.'],
  privacy: ['Privacy Policy | RIDO EVENTS', 'Read the RIDO EVENTS privacy policy and how information is handled across the platform.'],
  terms: ['Terms of Service | RIDO EVENTS', 'Read the terms that apply when using the RIDO EVENTS digital events platform.'],
  cookies: ['Cookie Policy | RIDO EVENTS', 'Learn how RIDO EVENTS uses cookies and similar technologies across the website.'],
};

const faqItems = [
  ['What is a digital wedding invitation?', 'A digital wedding invitation is an online invitation that guests can open and share through WhatsApp, SMS or a direct link.'],
  ['Can guests RSVP online?', 'Yes. RIDO EVENTS connects your invitation with RSVP tracking so you can see guest responses in one place.'],
  ['Can I manage my wedding guests?', 'Yes. You can organize guests, track responses and use QR codes for faster event check-in.'],
  ['Can I share invitations through WhatsApp?', 'Yes. Digital invitations can be shared through WhatsApp and other channels your guests already use.'],
];

function ContactPage() {
  return (
    <div className="l-internal-card">
      <form className="l-internal-form" onSubmit={event => event.preventDefault()}>
        <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
        <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
        <label>How can we help?<textarea name="message" placeholder="Tell us what you are planning..." required /></label>
        <button className="l-btn l-btn-primary" type="submit">Send message</button>
      </form>
    </div>
  );
}

function ArticlePage({ invitation }) {
  const title = invitation ? 'The invitation guide' : 'A grounded wedding planning guide';
  return (
    <article className="l-internal-prose">
      <p>Planning a meaningful event is a series of small, generous decisions. The best tools make those decisions easier without taking over the experience.</p>
      <h2>{invitation ? 'Start with the guest experience' : 'Begin with the shape of the day'}</h2>
      <p>{invitation ? 'Make the date, venue, dress code, directions and RSVP action easy to see. A clear invitation gives guests confidence and gives hosts fewer questions to answer.' : 'Write down the moments that matter most, then work backwards through guests, timing, suppliers and communication. This keeps the plan useful when the day becomes busy.'}</p>
      <h2>Keep the details together</h2>
      <p>RIDO keeps invitations, guest responses and event information connected, so changes do not have to be repeated in five different places.</p>
      <div className="l-internal-actions"><Link to="/digital-wedding-invitations" className="l-btn l-btn-primary">Explore digital invitations</Link><a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary">Create your event</a><Link to="/blog" className="l-btn l-btn-outline">Back to journal</Link></div>
    </article>
  );
}

function ResourcePage({ type }) {
  const content = {
    help: ['Help centre', 'Find straightforward answers about invitations, guests, RSVPs and event management.'],
    faq: ['Frequently asked questions', 'A quick reference for the questions hosts ask most often.'],
    privacy: ['Privacy policy', 'How RIDO handles information shared through the platform.'],
    terms: ['Terms of service', 'The agreement that keeps RIDO useful, fair and dependable for every host.'],
    cookies: ['Cookie policy', 'How cookies and similar technologies support the RIDO experience.'],
  }[type];
  return (
    <div className="l-internal-prose">
      <p>{content[1]}</p>
      {type === 'faq' && faqItems.map(([question, answer]) => (
        <section key={question}>
          <h2>{question}</h2>
          <p>{answer}</p>
        </section>
      ))}
      <h2>Our commitment</h2>
      <p>We aim to communicate clearly, protect the information entrusted to us and build services that are practical for the people who use them. For questions about this page, contact the RIDO team.</p>
      <h2>Need more help?</h2>
      <p>Send us a message and include the event or account details that will help us respond quickly.</p>
      <div className="l-internal-actions"><Link to="/contact" className="l-btn l-btn-primary">Contact RIDO</Link></div>
    </div>
  );
}

export default function InternalPage({ page }) {
  useEffect(() => {
    const [title, description] = pageSeo[page] || pageSeo.about;
    document.title = title;
    const setMetaContent = (selector, content) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute('content', content);
    };
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="twitter:title"]', title);
    setMetaContent('meta[property="twitter:description"]', description);
    const canonicalPath = page === 'digitalCards' ? '/digital-wedding-invitations' : window.location.pathname;
    const canonicalUrl = `https://www.ridoevents.co.tz${canonicalPath}`;
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute('href', canonicalUrl);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="twitter:url"]', canonicalUrl);

    const schemaGraph = [{
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ridoevents.co.tz/' },
        { '@type': 'ListItem', position: 2, name: title.split(' | ')[0], item: canonicalUrl },
      ],
    }];

    if (page === 'weddingGuide' || page === 'invitationGuide') {
      schemaGraph.push({
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: title.split(' | ')[0],
        description,
        mainEntityOfPage: canonicalUrl,
        author: { '@type': 'Organization', name: 'RIDO EVENTS', url: 'https://www.ridoevents.co.tz/' },
        publisher: { '@id': 'https://www.ridoevents.co.tz/#organization' },
      });
    }

    if (page === 'faq') {
      schemaGraph.push({
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: faqItems.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      });
    }

    let schemaTag = document.getElementById('rido-page-schema');
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.id = 'rido-page-schema';
      schemaTag.type = 'application/ld+json';
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': schemaGraph });

    return () => document.getElementById('rido-page-schema')?.remove();
  }, [page]);

  if (page === 'digitalCards') {
    return (
      <div className="landing-root l-internal-root">
        <Header />
        <main className="l-internal-main l-digital-cards-page">
          <DigitalCards />
        </main>
        <Footer />
      </div>
    );
  }

  if (page === 'register') {
    return <PageFrame eyebrow="RIDO EVENTS" title="Make your next gathering memorable." lead="Create your RIDO account and start planning in one calm workspace."><div className="l-internal-card"><form className="l-internal-form" onSubmit={event => event.preventDefault()}><label>Full name<input type="text" name="name" placeholder="Your name" required /></label><label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label><label>Password<input type="password" name="password" placeholder="Your password" required /></label><button className="l-btn l-btn-primary" type="submit">Create account</button></form></div></PageFrame>;
  }
  if (page === 'contact') {
    return <PageFrame eyebrow="CONTACT RIDO" title="Let’s make the details easier." lead="Tell us what you are planning and our team will help you find the right next step."><ContactPage /></PageFrame>;
  }
  if (page === 'weddingGuide' || page === 'invitationGuide') {
    const title = page === 'weddingGuide' ? 'A grounded wedding planning guide' : 'The invitation guide';
    return <PageFrame eyebrow="THE RIDO JOURNAL" title={title} lead="Useful ideas for creating an event that feels personal, clear and beautifully considered."><ArticlePage invitation={page === 'invitationGuide'} /></PageFrame>;
  }
  if (['help', 'faq', 'privacy', 'terms', 'cookies'].includes(page)) {
    const titles = { help: 'Help centre', faq: 'Frequently asked questions', privacy: 'Privacy policy', terms: 'Terms of service', cookies: 'Cookie policy' };
    return <PageFrame eyebrow="RIDO RESOURCES" title={titles[page]} lead="Clear information for hosts, guests and event teams."><ResourcePage type={page} /></PageFrame>;
  }
  const content = pageContent[page] || pageContent.about;
  return (
    <PageFrame eyebrow={content.eyebrow} title={content.title} lead={content.lead}>
      <div className="l-internal-grid">
        {content.cards.map(([heading, text, href]) => (
          <div className="l-internal-card" id={heading === 'Guest management' ? 'guests' : undefined} key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
            {href && <div className="l-internal-actions"><Link to={href} className="l-btn l-btn-outline">Read more</Link></div>}
          </div>
        ))}
      </div>
      {content.cta && <div className="l-internal-actions"><a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary">{content.cta}</a></div>}
    </PageFrame>
  );
}

function PageFrame({ eyebrow, title, lead, children }) {
  return (
    <div className="landing-root l-internal-root">
      <Header />
      <main className="l-internal-main">
        <div className="l-container">
          <div className="l-internal-hero">
            <span className="l-label">{eyebrow}</span>
            <h1 className="l-heading-xl">{title}</h1>
            <p className="l-internal-lead">{lead}</p>
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
