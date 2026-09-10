import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './landing/sections/Header';
import Footer from './landing/sections/Footer';

const siteUrl = 'https://www.ridoevents.co.tz';

const englishPages = {
  'digital-wedding-invitations': {
    title: 'Digital Wedding Invitations Tanzania | RIDO EVENTS',
    description: 'Create beautiful digital wedding invitations in Tanzania with RSVP, guest management and easy WhatsApp sharing.',
    h1: 'Digital Wedding Invitations in Tanzania',
    intro: 'Create a wedding invitation that feels personal, looks beautiful and gives every guest the details they need in one simple link.',
    benefits: ['Share instantly through WhatsApp, SMS or email.', 'Collect RSVP responses without chasing spreadsheets.', 'Keep your event details easy to update when plans change.'],
    features: ['Personalized invitation designs', 'RSVP and guest tracking', 'WhatsApp-friendly sharing', 'Unique guest links and QR codes'],
    steps: ['Choose a design that suits your celebration.', 'Add your couple, venue, date and event details.', 'Share the invitation and follow responses in RIDO.'],
    faqs: [['Can I create a wedding invitation in Swahili?', 'Yes. RIDO supports Swahili and English event experiences.'], ['Can I share the invitation on WhatsApp?', 'Yes. Your invitation can be shared as a digital link through WhatsApp.']],
    related: [['Wedding Cards', '/wedding-cards'], ['RSVP Management', '/rsvp'], ['Guest Management', '/guest-management']],
    swPath: '/sw/mwaliko-wa-harusi-kidigitali',
  },
  'wedding-cards': {
    title: 'Digital Wedding Cards Tanzania | RIDO EVENTS',
    description: 'Design and share elegant digital wedding cards in Tanzania with RSVP, guest management and modern templates.',
    h1: 'Digital Wedding Cards for Tanzanian Weddings',
    intro: 'Give your guests a beautiful first impression with a digital wedding card made for your story and easy to share.',
    benefits: ['Choose a design for traditional, modern or elegant celebrations.', 'Personalize names, colors, photos and event information.', 'Reduce printing while keeping the invitation memorable.'],
    features: ['Wedding card templates', 'Custom event details', 'Mobile-friendly previews', 'Digital sharing links'],
    steps: ['Browse the invitation collection.', 'Customize the card with your celebration details.', 'Preview, publish and send it to your guests.'],
    faqs: [['Can I customize a wedding card?', 'Yes. You can personalize the event details and choose a design that fits your celebration.'], ['Can guests open the card on a phone?', 'Yes. RIDO invitations are designed for mobile sharing and viewing.']],
    related: [['Digital Wedding Invitations', '/digital-wedding-invitations'], ['Wedding Websites', '/wedding-websites'], ['Event Management', '/event-management']],
    swPath: '/sw/kadi-ya-harusi',
  },
  'wedding-websites': {
    title: 'Wedding Websites Tanzania | RIDO EVENTS',
    description: 'Create a simple wedding website in Tanzania with event details, digital invitations, RSVP and guest information.',
    h1: 'Wedding Websites for Celebrations in Tanzania',
    intro: 'Bring your invitation, schedule, venue details and RSVP action together in one useful wedding website for every guest.',
    benefits: ['Give guests one reliable place for event information.', 'Share updates without reprinting invitations.', 'Connect the website experience to RSVPs and guest planning.'],
    features: ['Event information pages', 'Venue and schedule details', 'Invitation and RSVP links', 'Mobile-first guest experience'],
    steps: ['Set up your wedding details.', 'Add your story, schedule and venue information.', 'Share the website alongside your digital invitation.'],
    faqs: [['What should a wedding website include?', 'Useful details include the date, venue, schedule, directions, dress code and RSVP action.'], ['Can I share the website through WhatsApp?', 'Yes. Send the website link through WhatsApp, SMS or email.']],
    related: [['Digital Wedding Invitations', '/digital-wedding-invitations'], ['RSVP Management', '/rsvp'], ['Guest Management', '/guest-management']],
  },
  'event-management': {
    title: 'Event Management Tanzania | RIDO EVENTS',
    description: 'Manage weddings and events in Tanzania with digital invitations, guest lists, RSVPs, tables and QR check-in.',
    h1: 'Event Management for Weddings and Events in Tanzania',
    intro: 'Keep the work behind your celebration organized from the first invitation to the final guest check-in.',
    benefits: ['Coordinate invitations, guests and attendance in one workspace.', 'See RSVP progress while planning is still underway.', 'Give event teams a clearer view on the day.'],
    features: ['Event setup and details', 'Guest groups and tables', 'RSVP reporting', 'QR guest check-in'],
    steps: ['Create the event and add its key details.', 'Invite guests and organize the guest list.', 'Track responses and check guests in at the entrance.'],
    faqs: [['What events can RIDO help manage?', 'RIDO is designed for weddings, traditional ceremonies, birthdays, graduations, corporate events and other celebrations.'], ['Can multiple people help manage an event?', 'RIDO is built around an organized event workspace for hosts and event teams.']],
    related: [['Guest Management', '/guest-management'], ['QR Check-In', '/qr-check-in'], ['Digital Invitations', '/digital-wedding-invitations']],
  },
  'guest-management': {
    title: 'Wedding Guest Management Tanzania | RIDO EVENTS',
    description: 'Organize wedding guests in Tanzania, track RSVPs, manage groups and prepare for smooth event check-in with RIDO EVENTS.',
    h1: 'Wedding Guest Management Made Simple',
    intro: 'Turn a changing guest list into a clear plan with names, groups, responses and attendance in one place.',
    benefits: ['Know who has confirmed, declined or not responded.', 'Organize guests into groups and seating plans.', 'Reduce confusion at the entrance on event day.'],
    features: ['Guest list management', 'Group and table organization', 'RSVP status tracking', 'Attendance and check-in records'],
    steps: ['Add guests manually or prepare your guest list.', 'Send invitations and monitor responses.', 'Use the live list to welcome and check in guests.'],
    faqs: [['Can I import an existing guest list?', 'RIDO is designed to support organized guest information so event teams can work from one current list.'], ['Can I track attendance?', 'Yes. QR check-in and event updates help you understand who has arrived.']],
    related: [['RSVP Management', '/rsvp'], ['QR Check-In', '/qr-check-in'], ['Event Management', '/event-management']],
  },
  'qr-check-in': {
    title: 'QR Wedding Check-In Tanzania | RIDO EVENTS',
    description: 'Make wedding check-in easier in Tanzania with unique guest QR codes, faster entry and real-time attendance tracking.',
    h1: 'QR Check-In for Weddings and Events',
    intro: 'Welcome guests faster with a simple QR check-in flow that replaces printed lists and reduces entrance confusion.',
    benefits: ['Give each guest a clear digital check-in code.', 'Verify attendance quickly with a phone camera.', 'Keep event attendance visible in real time.'],
    features: ['Unique guest QR codes', 'Mobile scanning', 'Instant verification', 'Live attendance updates'],
    steps: ['Send each guest their invitation and code.', 'Scan the code when the guest arrives.', 'Confirm the guest and keep the attendance record current.'],
    faqs: [['Do guests need a printed ticket?', 'No. Guests can show their digital QR code on a phone.'], ['Can QR check-in work for weddings?', 'Yes. It is designed for wedding and event guest entry.']],
    related: [['Guest Management', '/guest-management'], ['Event Management', '/event-management'], ['Digital Invitations', '/digital-wedding-invitations']],
  },
  rsvp: {
    title: 'Online Wedding RSVP Tanzania | RIDO EVENTS',
    description: 'Collect online wedding RSVPs in Tanzania, track guest responses and connect replies to your digital invitation.',
    h1: 'Online RSVP for Weddings in Tanzania',
    intro: 'Make it easy for guests to reply and easy for hosts to see what those replies mean for the event plan.',
    benefits: ['Replace scattered replies with one current response list.', 'Follow up with guests who have not responded.', 'Plan seating, food and attendance with better information.'],
    features: ['Simple RSVP action', 'Confirmed and pending statuses', 'Guest response reporting', 'Invitation-linked replies'],
    steps: ['Publish the invitation with an RSVP action.', 'Let guests respond from the link.', 'Use response updates to plan the celebration.'],
    faqs: [['Can guests RSVP from a phone?', 'Yes. The RSVP experience is designed for guests using mobile devices.'], ['Can RSVPs connect to guest management?', 'Yes. RSVP responses are part of the wider guest and event workflow.']],
    related: [['Digital Wedding Invitations', '/digital-wedding-invitations'], ['Guest Management', '/guest-management'], ['Wedding Websites', '/wedding-websites']],
  },
};

const locationPages = {
  mwanza: {
    title: 'Wedding Events in Mwanza | RIDO EVENTS',
    description: 'Plan weddings and events in Mwanza with digital invitations, guest management, RSVP tracking and QR check-in from RIDO EVENTS.',
    h1: 'Wedding Events in Mwanza',
    intro: 'From lakeside celebrations to family ceremonies across Mwanza, RIDO EVENTS helps hosts keep invitations, guests and attendance organized.',
    local: 'Mwanza celebrations often bring together guests traveling from different neighborhoods and regions. A shareable digital invitation gives everyone one place for the venue, timing and RSVP details.',
    related: [['Digital Invitations', '/digital-wedding-invitations'], ['Guest Management', '/guest-management'], ['Event Management', '/event-management']],
  },
  geita: {
    title: 'Wedding Events in Geita | RIDO EVENTS',
    description: 'Create digital wedding invitations and manage guests for events in Geita with RSVP tracking and QR check-in by RIDO EVENTS.',
    h1: 'Wedding Events in Geita',
    intro: 'Plan a clear, welcoming celebration in Geita with digital invitations that are easy for family and guests to open and share.',
    local: 'For Geita hosts coordinating guests across towns and family networks, mobile-first invitations make event details easier to update and distribute without repeated printing.',
    related: [['Wedding Cards', '/wedding-cards'], ['Online RSVP', '/rsvp'], ['QR Check-In', '/qr-check-in']],
  },
  morogoro: {
    title: 'Wedding Events in Morogoro | RIDO EVENTS',
    description: 'Manage weddings and celebrations in Morogoro with digital cards, guest lists, RSVP tracking and event check-in from RIDO EVENTS.',
    h1: 'Wedding Events in Morogoro',
    intro: 'Bring the details of your Morogoro celebration together so guests know where to go, how to reply and what to expect.',
    local: 'A digital event page is useful when guests need clear directions, schedule updates and a simple way to confirm attendance before the celebration.',
    related: [['Wedding Websites', '/wedding-websites'], ['Guest Management', '/guest-management'], ['Event Management', '/event-management']],
  },
  'dar-es-salaam': {
    title: 'Wedding Events in Dar es Salaam | RIDO EVENTS',
    description: 'Plan wedding events in Dar es Salaam with digital invitations, RSVP, guest management and QR check-in using RIDO EVENTS.',
    h1: 'Wedding Events in Dar es Salaam',
    intro: 'Make busy-city event planning easier with a digital invitation and guest workflow that keeps everyone aligned.',
    local: 'For Dar es Salaam weddings, guests may be traveling across the city and need accurate venue, timing and contact details. RIDO keeps those details easy to share and update.',
    related: [['Digital Wedding Invitations', '/digital-wedding-invitations'], ['QR Check-In', '/qr-check-in'], ['Online RSVP', '/rsvp']],
  },
  arusha: {
    title: 'Wedding Events in Arusha | RIDO EVENTS',
    description: 'Create modern digital wedding invitations and manage guests for events in Arusha with RIDO EVENTS.',
    h1: 'Wedding Events in Arusha',
    intro: 'Create a polished invitation experience for an Arusha wedding, traditional ceremony or family celebration.',
    local: 'When guests arrive from different places, a mobile invitation can keep the venue, schedule and RSVP action available before and during the event.',
    related: [['Wedding Cards', '/wedding-cards'], ['Guest Management', '/guest-management'], ['Wedding Websites', '/wedding-websites']],
  },
  dodoma: {
    title: 'Wedding Events in Dodoma | RIDO EVENTS',
    description: 'Organize weddings and events in Dodoma with digital invitations, RSVP tracking, guest management and QR check-in.',
    h1: 'Wedding Events in Dodoma',
    intro: 'Give your Dodoma event a simple digital home for invitations, guest responses and day-of attendance.',
    local: 'A structured guest workflow helps families and event teams keep changing plans, responses and entrance lists in one current place.',
    related: [['Event Management', '/event-management'], ['Online RSVP', '/rsvp'], ['QR Check-In', '/qr-check-in']],
  },
};

const swahiliPages = {
  'kadi-ya-harusi': {
    title: 'Kadi ya Harusi Tanzania | RIDO EVENTS',
    description: 'Tengeneza kadi nzuri ya harusi kidijitali Tanzania, tuma kwa WhatsApp na simamia RSVP na wageni kwa RIDO EVENTS.',
    h1: 'Kadi ya Harusi ya Kidijitali Tanzania',
    intro: 'Tengeneza kadi ya harusi inayowakilisha sherehe yako na kuwapa wageni taarifa zote katika kiungo kimoja.',
    benefits: ['Tuma kadi kwa WhatsApp, SMS au kiungo cha kidijitali.', 'Fuatilia majibu ya RSVP kwa urahisi.', 'Badilisha taarifa za tukio bila kuchapisha kadi upya.'],
    features: ['Miundo ya kadi za harusi', 'Taarifa binafsi za tukio', 'Kushirikisha kwa simu', 'Kiungo cha RSVP'],
    steps: ['Chagua muundo wa kadi.', 'Weka majina, tarehe, muda na ukumbi.', 'Shiriki kadi na fuatilia majibu ya wageni.'],
    faqs: [['Kadi ya harusi kidijitali ni nini?', 'Ni mwaliko wa mtandaoni ambao wageni wanaweza kuufungua na kuushiriki kwa simu.'], ['Je, naweza kutumia WhatsApp?', 'Ndiyo. Unaweza kushiriki kadi yako kupitia WhatsApp.']],
    related: [['Mwaliko wa Harusi Kidijitali', '/sw/mwaliko-wa-harusi-kidigitali'], ['Usimamizi wa Sherehe', '/sw/usimamizi-wa-sherehe']],
    englishPath: '/wedding-cards',
  },
  'kadi-ya-mwaliko': {
    title: 'Kadi ya Mwaliko Tanzania | RIDO EVENTS',
    description: 'Tengeneza kadi ya mwaliko ya kidijitali Tanzania kwa harusi, sherehe na matukio yenye RSVP na usimamizi wa wageni.',
    h1: 'Kadi ya Mwaliko ya Kidijitali',
    intro: 'Tengeneza mwaliko wa kisasa unaoweza kutumwa kwa urahisi na kuwapa wageni taarifa sahihi za tukio lako.',
    benefits: ['Rahisisha kutuma mialiko kwa wageni wengi.', 'Weka taarifa za tukio katika sehemu moja.', 'Punguza gharama na muda wa uchapishaji.'],
    features: ['Miundo ya mialiko', 'Kushirikisha kwa WhatsApp', 'Taarifa za tukio', 'Ufuatiliaji wa RSVP'],
    steps: ['Chagua muundo unaoupenda.', 'Ongeza taarifa za tukio.', 'Tuma mwaliko na fuatilia majibu.'],
    faqs: [['Mwaliko unaweza kutumwa kwa njia gani?', 'Unaweza kutumwa kupitia WhatsApp, SMS, barua pepe au kiungo.'], ['Je, wageni wanaweza kujibu mtandaoni?', 'Ndiyo. Wageni wanaweza kutuma RSVP kupitia mwaliko.']],
    related: [['Kadi ya Harusi', '/sw/kadi-ya-harusi'], ['Usimamizi wa Sherehe', '/sw/usimamizi-wa-sherehe']],
    englishPath: '/digital-wedding-invitations',
  },
  'usimamizi-wa-sherehe': {
    title: 'Usimamizi wa Sherehe Tanzania | RIDO EVENTS',
    description: 'Simamia wageni, mialiko, RSVP na QR check-in kwa harusi na sherehe Tanzania kupitia RIDO EVENTS.',
    h1: 'Usimamizi wa Sherehe Tanzania',
    intro: 'Weka mipango ya tukio, wageni na mahudhurio katika mfumo mmoja rahisi kutumia.',
    benefits: ['Jua wageni waliothibitisha kuhudhuria.', 'Panga makundi na meza za wageni.', 'Rahisisha mapokezi siku ya tukio.'],
    features: ['Orodha ya wageni', 'Ufuatiliaji wa RSVP', 'Makundi na meza', 'QR check-in'],
    steps: ['Tengeneza tukio lako.', 'Ongeza wageni na tuma mialiko.', 'Fuatilia majibu na mahudhurio.'],
    faqs: [['RIDO inasaidia matukio gani?', 'RIDO inasaidia harusi, sherehe za kimila, birthdays, graduation na matukio mengine.'], ['QR check-in inasaidia nini?', 'Inasaidia kuthibitisha wageni wanapoingia na kuweka rekodi ya mahudhurio.']],
    related: [['Kadi ya Mwaliko', '/sw/kadi-ya-mwaliko'], ['Kadi ya Harusi', '/sw/kadi-ya-harusi']],
    englishPath: '/event-management',
  },
  'mwaliko-wa-harusi-kidigitali': {
    title: 'Mwaliko wa Harusi Kidijitali Tanzania | RIDO EVENTS',
    description: 'Tengeneza mwaliko wa harusi kidijitali Tanzania wenye RSVP, usimamizi wa wageni na kushirikisha kwa WhatsApp.',
    h1: 'Mwaliko wa Harusi Kidijitali Tanzania',
    intro: 'Waalike wageni kwa njia ya kisasa na rahisi, huku ukiweka taarifa za harusi na RSVP sehemu moja.',
    benefits: ['Waalike wageni kwa WhatsApp kwa urahisi.', 'Fuatilia waliokubali na ambao bado hawajajibu.', 'Tumia taarifa moja ya tukio kwa wageni wote.'],
    features: ['Mialiko ya kidijitali', 'RSVP ya mtandaoni', 'Usimamizi wa wageni', 'QR check-in'],
    steps: ['Weka taarifa za harusi.', 'Chagua na binafsisha mwaliko.', 'Shiriki na simamia majibu ya wageni.'],
    faqs: [['Je, mwaliko unafanya kazi kwenye simu?', 'Ndiyo. Mialiko ya RIDO imeundwa kwa wageni wanaotumia simu.'], ['Je, naweza kutumia Kiswahili?', 'Ndiyo. RIDO ina uzoefu wa Kiswahili na Kiingereza.']],
    related: [['Kadi ya Harusi', '/sw/kadi-ya-harusi'], ['Usimamizi wa Sherehe', '/sw/usimamizi-wa-sherehe']],
    englishPath: '/digital-wedding-invitations',
  },
};

function getPageData(type, slug) {
  if (type === 'service') return englishPages[slug];
  if (type === 'location') return locationPages[slug];
  return swahiliPages[slug];
}

export default function SeoLandingPage({ type, slug }) {
  const data = getPageData(type, slug);
  const isSwahili = type === 'swahili';
  const path = isSwahili ? `/sw/${slug}` : `/${slug}`;
  const canonicalUrl = `${siteUrl}${path}`;

  useEffect(() => {
    document.title = data.title;
    const setMeta = (selector, content) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', data.description);
    setMeta('meta[property="og:title"]', data.title);
    setMeta('meta[property="og:description"]', data.description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="twitter:title"]', data.title);
    setMeta('meta[property="twitter:description"]', data.description);
    setMeta('meta[property="twitter:url"]', canonicalUrl);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    const alternatePaths = [];
    if (data.swPath) alternatePaths.push(['en-TZ', canonicalUrl], ['sw-TZ', `${siteUrl}${data.swPath}`]);
    if (data.englishPath) alternatePaths.push(['en-TZ', `${siteUrl}${data.englishPath}`], ['sw-TZ', canonicalUrl]);
    const alternateLinks = alternatePaths.map(([lang, href]) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    const schema = document.createElement('script');
    schema.id = 'rido-seo-page-schema';
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Service', name: data.h1, description: data.description, url: canonicalUrl, provider: { '@id': `${siteUrl}/#organization` }, areaServed: { '@type': 'Country', name: 'Tanzania' } },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` }, { '@type': 'ListItem', position: 2, name: data.h1, item: canonicalUrl }] },
        ...(data.faqs ? [{ '@type': 'FAQPage', mainEntity: data.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }] : []),
      ],
    });
    document.getElementById('rido-seo-page-schema')?.remove();
    document.head.appendChild(schema);

    return () => {
      alternateLinks.forEach(link => link.remove());
      schema.remove();
    };
  }, [canonicalUrl, data]);

  return (
    <div className="landing-root l-internal-root">
      <Header />
      <main className="l-internal-main">
        <div className="l-container l-seo-page">
          <div className="l-internal-hero">
            <span className="l-label">{isSwahili ? 'RIDO EVENTS' : type === 'location' ? 'RIDO IN TANZANIA' : 'RIDO SERVICES'}</span>
            <h1 className="l-heading-xl">{data.h1}</h1>
            <p className="l-internal-lead">{data.intro}</p>
            <a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary l-btn-lg">{isSwahili ? 'Anza Kutengeneza' : 'Create Your Invitation'}</a>
          </div>

          {data.local && <section className="l-internal-prose"><h2>Local event planning in {slug.replaceAll('-', ' ')}</h2><p>{data.local}</p></section>}

          <section className="l-seo-content-section">
            <h2>{isSwahili ? 'Faida' : 'Benefits'}</h2>
            <div className="l-internal-grid">{data.benefits.map(item => <article className="l-internal-card" key={item}><p>{item}</p></article>)}</div>
          </section>

          <section className="l-seo-content-section">
            <h2>{isSwahili ? 'Vipengele' : 'Features'}</h2>
            <div className="l-internal-grid">{data.features.map(item => <article className="l-internal-card" key={item}><h3>{item}</h3></article>)}</div>
          </section>

          <section className="l-seo-content-section l-internal-prose">
            <h2>{isSwahili ? 'Jinsi inavyofanya kazi' : 'How It Works'}</h2>
            <ol>{data.steps.map(step => <li key={step}>{step}</li>)}</ol>
          </section>

          <section className="l-seo-content-section l-internal-prose">
            <h2>{isSwahili ? 'Maswali ya kawaida' : 'Frequently Asked Questions'}</h2>
            {data.faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
          </section>

          <section className="l-seo-content-section l-internal-cta">
            <h2>{isSwahili ? 'Tayari kuanza?' : 'Ready to create your event?'}</h2>
            <a href="https://app.ridoevents.co.tz" className="l-btn l-btn-primary">{isSwahili ? 'Unda Tukio Lako' : 'Create Your Invitation'}</a>
          </section>

          <nav className="l-seo-related" aria-label={isSwahili ? 'Viungo vinavyohusiana' : 'Related pages'}>
            <h2>{isSwahili ? 'Gundua zaidi' : 'Explore Related Services'}</h2>
            <div className="l-internal-actions">{data.related.map(([label, href]) => <Link className="l-btn l-btn-outline" to={href} key={href}>{label}</Link>)}</div>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { englishPages, locationPages, swahiliPages };
