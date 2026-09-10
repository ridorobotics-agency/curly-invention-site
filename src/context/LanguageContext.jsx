import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      digitalCards: 'Digital Cards',
      eventManager: 'Event Manager',
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      blog: 'Blog',
      contact: 'Contact',
      login: 'Login',
      createEvent: 'Create Your Event',
      langLabel: 'EN',
      langFull: 'English',
    },

    // Hero
    hero: {
      headline: 'Digital Wedding Invitations',
      headline2: '& Event Management in Tanzania.',
      subtext: 'Create elegant digital invitation cards, manage guests, track RSVPs, send invitations, and simplify your wedding or event from one powerful platform.',
      cta1: 'Create Your Event',
      cta2: 'Explore Digital Cards',
      scroll: 'Scroll to discover',
      badge: 'Tanzania\'s Digital Events Platform',
    },

    // Value Proposition
    value: {
      heading: 'Everything You Need for a Perfect Event',
      subtext: 'From beautiful digital invitations to seamless guest check-in — all in one elegant platform.',
      ctaTitle: 'Ready to get started?',
      ctaText: 'Create your first event in just a few minutes.',
      ctaButton: 'Start Creating Your Event',
      features: [
        {
          icon: 'card',
          title: 'Digital Invitations',
          desc: 'Create beautiful, personalized digital invitation cards for weddings, birthdays, celebrations and more.',
        },
        {
          icon: 'users',
          title: 'Guest Management',
          desc: 'Organize guests, groups, tables, headcounts and invitation details in one place.',
        },
        {
          icon: 'check',
          title: 'RSVP Tracking',
          desc: 'Know who has accepted, declined or not responded with real-time updates.',
        },
        {
          icon: 'qr',
          title: 'QR Check-In',
          desc: 'Check guests in quickly on the day using a unique QR code for every invitation.',
        },
        {
          icon: 'send',
          title: 'Send Invitations',
          desc: 'Share invitations through WhatsApp, SMS or a digital link without printing every card.',
        },
        {
          icon: 'chart',
          title: 'Reports & Insights',
          desc: 'See guest totals, RSVP progress, attendance and important event updates in real time.',
        },
        {
          icon: 'languages',
          title: 'Swahili & English',
          desc: 'Use RIDO in the language you know best and switch between Swahili and English with ease.',
        },
        {
          icon: 'sparkles',
          title: 'Simple to Use',
          desc: 'Create an event, add guests, send invitations and manage everything in a few simple steps.',
        },
      ],
    },

    // Philosophy
    philosophy: {
      title: 'Celebrations,',
      title2: 'Simplified.',
      body1: 'At RIDO EVENTS, we believe every celebration deserves to be remembered. Whether it\'s an intimate traditional ceremony or a grand wedding reception, your event should feel effortless — from the first invitation to the final guest check-in.',
      body2: 'We built this platform for Tanzanian couples, families, professional planners, and organizations who want to manage weddings, traditional ceremonies, birthdays, graduations, corporate events, conferences, parties, and religious gatherings with ease and elegance.',
      body3: 'No complicated systems. No expensive printing. Just beautiful, simple, digital celebrations.',
      label: 'Our Philosophy',
      stat1: 'Events Created',
      stat2: 'Cities Reached',
      stat3: 'Happy Clients',
    },

    // Digital Cards
    cards: {
      heading: 'Beautiful Digital Cards',
      subtext: 'Professionally designed templates for every occasion. Fully customizable to match your vision.',
      categories: ['All', 'Wedding', 'Traditional', 'Birthday', 'Graduation', 'Baby Shower', 'Corporate', 'Religious', 'Party'],
      customize: 'Customize',
      preview: 'Preview',
      templates: [
        { name: 'Classic Romance', categoryKey: 'Wedding', style: 'Wedding · Elegant', tag: 'Popular', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/wed_ecard_01.jpg' },
        { name: 'Modern Minimal', categoryKey: 'Wedding', style: 'Wedding · Contemporary', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/LILY_WED.png' },
        { name: 'African Elegance', categoryKey: 'Traditional', style: 'Traditional · Cultural', tag: 'Featured', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/01.webp' },
        { name: 'Birthday Bloom', categoryKey: 'Birthday', style: 'Birthday · Joyful', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/WEDDING%20%202.jpg' },
        { name: 'Next Chapter', categoryKey: 'Graduation', style: 'Graduation · Modern', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/WEDDING%20%202.jpg' },
        { name: 'Little Wonder', categoryKey: 'Baby Shower', style: 'Baby Shower · Sweet', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/baby_shower.webp' },
        { name: 'Company Gathering', categoryKey: 'Corporate', style: 'Corporate · Refined', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/SMS.jpg' },
      ],
    },

    // Event Manager
    manager: {
      heading: 'Your Entire Event,',
      heading2: 'Managed Simply.',
      subtext: 'A powerful yet intuitive platform that handles every detail of your event from start to finish.',
      features: [
        'Create & configure your event',
        'Add guests manually or import Excel/CSV',
        'Organize guests into groups & tables',
        'Track invitation & RSVP status',
        'Generate unique QR codes per guest',
        'QR-based guest check-in on the day',
        'Send SMS, Email & WhatsApp invitations',
        'View real-time event analytics',
        'Manage table seating assignments',
        'Send automated event reminders',
      ],
      dashboardTitle: 'Event Dashboard',
      statsLabels: {
        guests: 'Total Guests',
        invited: 'Invited',
        confirmed: 'Confirmed',
        checkedIn: 'Checked In',
      },
    },

    // Guest Management
    guests: {
      heading: 'Complete Guest Management',
      subtext: 'From adding your first guest to checking them in at the door — full control at every step.',
      stats: [
        { label: 'Total Guests', value: '250' },
        { label: 'Invited', value: '220' },
        { label: 'Confirmed', value: '185' },
        { label: 'Pending', value: '35' },
        { label: 'Checked In', value: '164' },
      ],
      features: [
        { title: 'Add Guests Manually', desc: 'Add individual guests with name, phone, email and group.' },
        { title: 'Import from Excel/CSV', desc: 'Upload your existing guest list in seconds.' },
        { title: 'Guest Groups & Tables', desc: 'Organize guests into groups and assign seating tables.' },
        { title: 'Unique Invitation Codes', desc: 'Every guest gets a unique code and QR for secure check-in.' },
        { title: 'Track Attendance', desc: 'Real-time view of who has confirmed, declined, or not responded.' },
        { title: 'Send Personalized Messages', desc: 'Send tailored invitations and reminders to each guest.' },
      ],
    },

    // QR Check-In
    qr: {
      heading: 'Fast, Secure Guest Check-In',
      subtext: 'Every guest receives a unique digital QR code. Scanning takes seconds — no printed lists, no confusion.',
      steps: [
        { step: '01', label: 'Invitation Sent', desc: 'Guest receives personalized digital invitation via WhatsApp, SMS or Email.' },
        { step: '02', label: 'QR Code Generated', desc: 'A unique QR code is automatically generated for every guest.' },
        { step: '03', label: 'Guest Arrives', desc: 'Guest shows their QR code at the event entrance.' },
        { step: '04', label: 'Scan & Verify', desc: 'Event operator scans the code with any smartphone camera.' },
        { step: '05', label: 'Checked In ✓', desc: 'Guest is instantly verified and checked in. Real-time updates on dashboard.' },
      ],
    },

    // Communications
    comms: {
      heading: 'Reach Every Guest',
      subtext: 'Send personalized invitations, reminders and updates through the channels your guests actually use.',
      channels: [
        { name: 'WhatsApp', desc: 'Share beautiful invitation cards directly to WhatsApp — the way Tanzanians communicate.' },
        { name: 'SMS', desc: 'Reach guests without smartphones or internet with direct SMS delivery.' },
        { name: 'Email', desc: 'Send professional email invitations with embedded digital cards.' },
      ],
      personalizeHeading: 'Personalize Every Message',
      tokens: [
        { token: '{{name}}', desc: 'Guest full name' },
        { token: '{{event_name}}', desc: 'Your event name' },
        { token: '{{date}}', desc: 'Event date & time' },
        { token: '{{venue}}', desc: 'Venue name & address' },
        { token: '{{unique_code}}', desc: 'Guest unique code' },
        { token: '{{qr_code}}', desc: 'Guest QR code link' },
      ],
    },

    // How It Works
    howItWorks: {
      heading: 'How It Works',
      subtext: 'From setup to celebration — four simple steps.',
      steps: [
        { num: '01', title: 'Create Your Event', desc: 'Set up your event with date, venue, and details in minutes.' },
        { num: '02', title: 'Customize Your Digital Card', desc: 'Choose a template and personalize it with your names, photos and colors.' },
        { num: '03', title: 'Invite & Manage Guests', desc: 'Add guests, send invitations and track RSVPs all in one place.' },
        { num: '04', title: 'Check In & Celebrate', desc: 'Use QR codes for seamless check-in on your special day.' },
      ],
    },

    // Event Types
    eventTypes: {
      heading: 'Events for Every Occasion',
      subtext: 'From grand weddings to intimate ceremonies — RIDO EVENTS handles every celebration beautifully.',
      types: [
        { name: 'Weddings', sw: 'Harusi' },
        { name: 'Send-off', sw: 'Send-off' },
        { name: 'Kitchen Party', sw: 'Kitchen Party' },
        { name: 'Birthdays', sw: 'Siku za Kuzaliwa' },
        { name: 'Graduations', sw: 'Graduation' },
        { name: 'Baby Showers', sw: 'Baby Shower' },
        { name: 'Corporate Events', sw: 'Matukio ya Biashara' },
        { name: 'Conferences', sw: 'Mikutano' },
        { name: 'Religious Events', sw: 'Matukio ya Dini' },
        { name: 'Traditional Ceremonies', sw: 'Sherehe za Kimila' },
        { name: 'Parties', sw: 'Parties' },
      ],
    },

    // Tanzania Focus
    tanzania: {
      heading: 'Built for Events in Tanzania',
      subtext: 'From Mwanza and Geita to Morogoro, Dar es Salaam, Arusha and beyond — RIDO EVENTS makes it easier to create, manage and celebrate unforgettable events across Tanzania.',
      cities: ['Mwanza', 'Geita', 'Dar es Salaam', 'Arusha', 'Morogoro', 'Dodoma', 'Mbeya', 'Zanzibar', 'Bukoba', 'Shinyanga', 'Kagera'],
      features: [
        'Digital wedding invitations in Swahili & English',
        'Event management built for Tanzanian celebrations',
        'WhatsApp sharing — how Tanzania communicates',
        'Mobile-first, optimized for Android & feature phones',
        'Affordable TZS pricing for every budget',
      ],
    },

    // Pricing
    pricing: {
      heading: 'Simple, Transparent Pricing',
      subtext: 'Choose the plan that fits your event. No hidden fees, no surprises.',
      monthly: 'per event',
      plans: [
        {
          name: 'Free',
          price: 'TZS 0',
          period: 'Forever free',
          desc: 'Perfect for small personal events',
          features: [
            '1 active event',
            'Basic digital card template',
            'Up to 50 guests',
            'RSVP tracking',
            'QR check-in',
          ],
          cta: 'Get Started Free',
          highlighted: false,
        },
        {
          name: 'Standard',
          price: 'TZS 25,000',
          period: 'per event',
          desc: 'For memorable celebrations',
          features: [
            '1 event (any size)',
            'Premium card templates',
            'Unlimited guests',
            'Guest groups & tables',
            'RSVP tracking',
            'QR check-in',
            'Email notifications',
            'Event analytics',
          ],
          cta: 'Choose Standard',
          highlighted: true,
          badge: 'Most Popular',
        },
        {
          name: 'Premium',
          price: 'TZS 60,000',
          period: 'per event',
          desc: 'For large events & professionals',
          features: [
            'Everything in Standard',
            'SMS notifications',
            'WhatsApp sharing',
            'Advanced customization',
            'Custom branding',
            'Priority support',
            'Multi-event management',
            'Advanced analytics',
          ],
          cta: 'Choose Premium',
          highlighted: false,
        },
      ],
    },

    // Trust
    trust: {
      heading: 'Designed for Modern Celebrations',
      subtext: 'Trusted by couples, families and event planners across Tanzania.',
      stats: [
        { label: 'Events Created', value: '—' },
        { label: 'Digital Invitations', value: '—' },
        { label: 'Guests Managed', value: '—' },
        { label: 'Cities Reached', value: '11+' },
      ],
      testimonials: [
        {
          name: 'Thobias Mabele',
          event: 'Wedding · Geita',
          text: 'Planning our wedding used to feel overwhelming. With RIDO EVENTS, we managed 300 guests, digital invitations and QR check-in all from our phones.',
        },
        {
          name: 'Richard Clavery (RIDO)',
          event: 'Corporate Conference · Geita',
          text: 'The QR check-in system made our event registration completely seamless. Our guests were impressed.',
        },
      ],
    },

    // Journal
    journal: {
      heading: 'From the Journal',
      subtext: 'Wedding planning tips, event ideas and inspiration for every occasion.',
      readMore: 'Read Article',
      viewAll: 'View All Articles',
      articles: [
        {
          title: 'How to Create a Digital Wedding Invitation in Tanzania',
          excerpt: 'A step-by-step guide to creating beautiful digital wedding invitations that your guests will love.',
          category: 'Wedding Tips',
          readTime: '5 min read',
        },
        {
          title: 'How QR Codes Can Simplify Wedding Check-In',
          excerpt: 'Say goodbye to guest lists and paper at the door. Here\'s how QR check-in works at Tanzanian weddings.',
          category: 'Event Management',
          readTime: '4 min read',
        },
        {
          title: 'Traditional Tanzanian Wedding Invitation Ideas',
          excerpt: 'Explore elegant digital invitation designs inspired by Tanzania\'s rich cultural wedding traditions.',
          category: 'Inspiration',
          readTime: '6 min read',
        },
        {
          title: 'Wedding Planning Checklist for Tanzania',
          excerpt: 'Everything you need to plan a beautiful wedding in Tanzania — from invitations to the last dance.',
          category: 'Planning',
          readTime: '8 min read',
        },
      ],
    },

    // Newsletter
    newsletter: {
      heading: 'Stay Inspired',
      subtext: 'Wedding tips, event ideas and platform updates delivered to your inbox.',
      placeholder: 'Your email address',
      cta: 'Subscribe',
      privacy: 'No spam, ever. Unsubscribe anytime.',
    },

    // Footer
    footer: {
      tagline: 'Tanzania\'s premier digital events platform.',
      columns: {
        product: {
          heading: 'Product',
          links: ['Digital Cards', 'Event Manager', 'Guest Management', 'QR Check-In', 'RSVP'],
        },
        company: {
          heading: 'Company',
          links: ['About', 'Contact', 'Blog', 'Pricing'],
        },
        resources: {
          heading: 'Resources',
          links: ['Help Center', 'Wedding Planning Guide', 'Invitation Guide', 'FAQ'],
        },
        legal: {
          heading: 'Legal',
          links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
        },
      },
      copyright: '© 2025 RIDO EVENTS. All rights reserved.',
      madeIn: 'Made with love by Rido',
    },
  },

  sw: {
    // Navigation
    nav: {
      home: 'Nyumbani',
      digitalCards: 'Kadi za Kidijitali',
      eventManager: 'Msimamizi wa Tukio',
      features: 'Vipengele',
      howItWorks: 'Jinsi Inavyofanya Kazi',
      pricing: 'Bei',
      blog: 'Blogu',
      contact: 'Wasiliana',
      login: 'Ingia',
      createEvent: 'Unda Tukio Lako',
      langLabel: 'SW',
      langFull: 'Kiswahili',
    },

    // Hero
    hero: {
      headline: 'Mialiko ya Harusi ya Kidijitali',
      headline2: 'na Usimamizi wa Sherehe Tanzania.',
      subtext: 'Unda kadi za mwaliko za kidijitali, simamia wageni, fuatilia RSVP, tuma mialiko na simamia harusi au tukio lako kwa urahisi kupitia mfumo mmoja wenye nguvu.',
      cta1: 'Unda Tukio Lako',
      cta2: 'Angalia Kadi za Mwaliko',
      scroll: 'Sogeza kuona zaidi',
      badge: 'Jukwaa la Kidijitali la Matukio Tanzania',
    },

    // Value Proposition
    value: {
      heading: 'Kila Kitu Unachohitaji kwa Tukio Bora',
      subtext: 'Kuanzia kutengeneza mwaliko wa kidijitali hadi kusimamia wageni siku ya tukio — RIDO EVENTS inakupa kila kitu katika jukwaa moja rahisi, zuri na lenye nguvu.',
      ctaTitle: 'Tayari kuanza?',
      ctaText: 'Tengeneza tukio lako la kwanza kwa dakika chache.',
      ctaButton: 'Anza Kutengeneza Tukio',
      features: [
        {
          icon: 'card',
          title: 'Kadi za Mwaliko',
          desc: 'Unda kadi za mwaliko za kidijitali zenye muonekano wa kisasa kwa harusi, birthday, sherehe na matukio mbalimbali.',
        },
        {
          icon: 'users',
          title: 'Simamia Wageni',
          desc: 'Ongeza na panga wageni wako kwa urahisi. Simamia makundi, idadi, meza na taarifa za mwaliko sehemu moja.',
        },
        {
          icon: 'check',
          title: 'Fuatilia RSVP',
          desc: 'Jua nani amekubali mwaliko, nani hajajibu na nani hawezi kuhudhuria kwa taarifa za wakati halisi.',
        },
        {
          icon: 'qr',
          title: 'QR Check-In',
          desc: 'Fanya ukaguzi wa wageni kwa haraka siku ya tukio kwa kutumia QR Code ya kipekee kwa kila mwaliko.',
        },
        {
          icon: 'send',
          title: 'Tuma Mialiko',
          desc: 'Tuma mialiko kupitia WhatsApp, SMS au link ya kidijitali bila kulazimika kuchapisha kila kadi.',
        },
        {
          icon: 'chart',
          title: 'Ripoti na Takwimu',
          desc: 'Pata muhtasari wa wageni, RSVP, waliohudhuria na taarifa muhimu za tukio lako kwa wakati halisi.',
        },
        {
          icon: 'languages',
          title: 'Kiswahili na English',
          desc: 'Tumia RIDO kwa lugha unayoifahamu zaidi na badilisha kati ya Kiswahili na English kwa urahisi.',
        },
        {
          icon: 'sparkles',
          title: 'Rahisi Kutumia',
          desc: 'Tengeneza tukio, ongeza wageni, tuma mialiko na simamia kila kitu kwa hatua rahisi.',
        },
      ],
    },

    // Philosophy
    philosophy: {
      title: 'Sherehe Rahisi,',
      title2: 'Kumbukumbu za Kudumu.',
      body1: 'Katika RIDO EVENTS, tunaamini kila sherehe inastahili kukumbukwa. Iwe ni sherehe ndogo ya kimila au harusi kubwa, tukio lako linapaswa kuwa rahisi — kuanzia mwaliko wa kwanza hadi mgeni wa mwisho kufika.',
      body2: 'Tuliunda jukwaa hili kwa ajili ya wachumba, familia, wapangaji wa harusi na mashirika ya Tanzania wanaotaka kusimamia harusi, sherehe za kimila, siku za kuzaliwa, graduation, matukio ya biashara, mikutano, parties na sherehe za kidini kwa urahisi na uzuri.',
      body3: 'Hakuna mifumo ngumu. Hakuna uchapishaji wa gharama. Ni sherehe za kidijitali tu — nzuri, rahisi na za kwako.',
      label: 'Falsafa Yetu',
      stat1: 'Matukio Yaliyoundwa',
      stat2: 'Miji Iliyofikiwa',
      stat3: 'Wateja Waliofurahi',
    },

    // Digital Cards
    cards: {
      heading: 'Kadi za Mwaliko za Kidijitali',
      subtext: 'Templeti zilizoundwa kwa ufundi kwa kila tukio. Zinabadilishwa kikamilifu kulingana na maono yako.',
      categories: ['Zote', 'Harusi', 'Kimila', 'Siku ya Kuzaliwa', 'Graduation', 'Baby Shower', 'Biashara', 'Dini', 'Party'],
      customize: 'Badilisha',
      preview: 'Angalia',
      templates: [
        { name: 'Classic Romance', categoryKey: 'Wedding', style: 'Harusi · Maridadi', tag: 'Maarufu', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/wed_ecard_01.jpg' },
        { name: 'Modern Minimal', categoryKey: 'Wedding', style: 'Harusi · Kisasa', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/LILY_WED.png' },
        { name: 'African Elegance', categoryKey: 'Traditional', style: 'Kimila · Kitamaduni', tag: 'Pendwa', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/01.webp' },
        { name: 'Birthday Bloom', categoryKey: 'Birthday', style: 'Siku ya Kuzaliwa · Furaha', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/WEDDING%20%202.jpg' },
        { name: 'Next Chapter', categoryKey: 'Graduation', style: 'Graduation · Kisasa', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/WEDDING%20%202.jpg' },
        { name: 'Little Wonder', categoryKey: 'Baby Shower', style: 'Baby Shower · Tamu', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/baby_shower.webp' },
        { name: 'Company Gathering', categoryKey: 'Corporate', style: 'Biashara · Rasmi', tag: '', image: 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/SMS.jpg' },
      ],
    },

    // Event Manager
    manager: {
      heading: 'Tukio Lako Zima,',
      heading2: 'Linasimamiwa Kwa Urahisi.',
      subtext: 'Jukwaa lenye nguvu lakini rahisi linaloshughulikia kila undani wa tukio lako kuanzia mwanzo hadi mwisho.',
      features: [
        'Unda na upange tukio lako',
        'Ongeza wageni moja moja au ingiza Excel/CSV',
        'Panga wageni katika makundi na meza',
        'Fuatilia hali ya mwaliko na RSVP',
        'Tengeneza nambari za QR za kipekee kwa kila mgeni',
        'Check-in ya QR ya wageni siku ya tukio',
        'Tuma SMS, Barua pepe na mialiko ya WhatsApp',
        'Angalia uchambuzi wa wakati halisi wa tukio',
        'Simamia mpangilio wa meza',
        'Tuma vikumbusho vya kiotomatiki vya tukio',
      ],
      dashboardTitle: 'Dashibodi ya Tukio',
      statsLabels: {
        guests: 'Wageni Wote',
        invited: 'Waliomwaliwa',
        confirmed: 'Waliothibitisha',
        checkedIn: 'Waliofika',
      },
    },

    // Guest Management
    guests: {
      heading: 'Usimamizi Kamili wa Wageni',
      subtext: 'Kuanzia kuongeza mgeni wako wa kwanza hadi kumupokea mlangoni — udhibiti kamili kila hatua.',
      stats: [
        { label: 'Wageni Wote', value: '250' },
        { label: 'Waliomwaliwa', value: '220' },
        { label: 'Waliothibitisha', value: '185' },
        { label: 'Wanaongoja', value: '35' },
        { label: 'Waliofika', value: '164' },
      ],
      features: [
        { title: 'Ongeza Wageni', desc: 'Ongeza wageni mmoja mmoja na jina, simu, barua pepe na kundi.' },
        { title: 'Ingiza kutoka Excel/CSV', desc: 'Pakia orodha yako ya wageni iliyopo kwa sekunde chache.' },
        { title: 'Makundi na Meza', desc: 'Panga wageni katika makundi na wape meza za kuketi.' },
        { title: 'Nambari za Mwaliko', desc: 'Kila mgeni anapata nambari ya kipekee na QR kwa check-in salama.' },
        { title: 'Fuatilia Mahudhurio', desc: 'Angalia kwa wakati halisi nani amethibitisha, amekataa, au hajajibu.' },
        { title: 'Tuma Ujumbe wa Kibinafsi', desc: 'Tuma mialiko na vikumbusho vilivyoundwa kwa kila mgeni.' },
      ],
    },

    // QR Check-In
    qr: {
      heading: 'Check-In ya Wageni kwa Haraka na Usalama',
      subtext: 'Kila mgeni anapata nambari ya kipekee ya kidijitali ya QR. Kuscan kunachukua sekunde — hakuna orodha za karatasi, hakuna mkanganyiko.',
      steps: [
        { step: '01', label: 'Mwaliko Umetumwa', desc: 'Mgeni anapokea mwaliko wa kibinafsi wa kidijitali kupitia WhatsApp, SMS au Barua pepe.' },
        { step: '02', label: 'QR Code Imeundwa', desc: 'Nambari ya kipekee ya QR inaundwa kiotomatiki kwa kila mgeni.' },
        { step: '03', label: 'Mgeni Anafika', desc: 'Mgeni anaonyesha nambari yake ya QR mlangoni mwa tukio.' },
        { step: '04', label: 'Scan na Thibitisha', desc: 'Msimamizi wa tukio anascan nambari kwa kamera yoyote ya simu.' },
        { step: '05', label: 'Amefika ✓', desc: 'Mgeni anathibitishwa mara moja na kuingizwa. Masasisho ya wakati halisi kwenye dashibodi.' },
      ],
    },

    // Communications
    comms: {
      heading: 'Wafikie Wageni Wako Wote',
      subtext: 'Tuma mialiko ya kibinafsi, vikumbusho na masasisho kupitia njia ambazo wageni wako hutumia kweli kweli.',
      channels: [
        { name: 'WhatsApp', desc: 'Shiriki kadi nzuri za mwaliko moja kwa moja WhatsApp — jinsi Watanzania wanavyowasiliana.' },
        { name: 'SMS', desc: 'Fikia wageni wasio na simu za kisasa au intaneti kupitia SMS ya moja kwa moja.' },
        { name: 'Barua Pepe', desc: 'Tuma mialiko ya kitaalamu ya barua pepe na kadi za kidijitali zilizopachikwa.' },
      ],
      personalizeHeading: 'Binafsisha Kila Ujumbe',
      tokens: [
        { token: '{{jina}}', desc: 'Jina kamili la mgeni' },
        { token: '{{jina_la_tukio}}', desc: 'Jina la tukio lako' },
        { token: '{{tarehe}}', desc: 'Tarehe na wakati wa tukio' },
        { token: '{{mahali}}', desc: 'Jina na anwani ya mahali' },
        { token: '{{nambari_ya_kipekee}}', desc: 'Nambari ya kipekee ya mgeni' },
        { token: '{{qr_code}}', desc: 'Kiungo cha QR code ya mgeni' },
      ],
    },

    // How It Works
    howItWorks: {
      heading: 'Jinsi Inavyofanya Kazi',
      subtext: 'Kuanzia kuanza hadi kusherehekea — hatua nne rahisi.',
      steps: [
        { num: '01', title: 'Unda Tukio', desc: 'Weka tukio lako na tarehe, mahali na maelezo kwa dakika chache.' },
        { num: '02', title: 'Boresha Kadi Yako', desc: 'Chagua templeti na uibinafsishe na majina yako, picha na rangi.' },
        { num: '03', title: 'Alika na Simamia Wageni', desc: 'Ongeza wageni, tuma mialiko na fuatilia RSVP mahali pamoja.' },
        { num: '04', title: 'Check-In na Sherehekea', desc: 'Tumia nambari za QR kwa check-in laini siku yako maalum.' },
      ],
    },

    // Event Types
    eventTypes: {
      heading: 'Matukio kwa Kila Fursa',
      subtext: 'Kuanzia harusi kubwa hadi sherehe za karibu — RIDO EVENTS inashughulikia kila sherehe kwa uzuri.',
      types: [
        { name: 'Harusi', sw: 'Weddings' },
        { name: 'Send-off', sw: 'Send-off' },
        { name: 'Kitchen Party', sw: 'Kitchen Party' },
        { name: 'Siku za Kuzaliwa', sw: 'Birthdays' },
        { name: 'Graduation', sw: 'Graduations' },
        { name: 'Baby Shower', sw: 'Baby Showers' },
        { name: 'Matukio ya Biashara', sw: 'Corporate Events' },
        { name: 'Mikutano', sw: 'Conferences' },
        { name: 'Matukio ya Dini', sw: 'Religious Events' },
        { name: 'Sherehe za Kimila', sw: 'Traditional Ceremonies' },
        { name: 'Parties', sw: 'Parties' },
      ],
    },

    // Tanzania Focus
    tanzania: {
      heading: 'Imeundwa kwa Matukio Tanzania',
      subtext: 'Kutoka Mwanza na Geita hadi Morogoro, Dar es Salaam, Arusha na maeneo mengine Tanzania — RIDO EVENTS inarahisisha kuunda, kusimamia na kusherehekea matukio ya kukumbukwa.',
      cities: ['Mwanza', 'Geita', 'Dar es Salaam', 'Arusha', 'Morogoro', 'Dodoma', 'Mbeya', 'Zanzibar', 'Bukoba', 'Shinyanga', 'Kagera'],
      features: [
        'Mialiko ya harusi ya kidijitali kwa Kiswahili na Kiingereza',
        'Usimamizi wa matukio ulioundwa kwa sherehe za Tanzania',
        'Kushiriki WhatsApp — jinsi Tanzania inavyowasiliana',
        'Mobile-kwanza, imeboreshwa kwa simu za Android',
        'Bei za TZS zinazofaa kwa kila bajeti',
      ],
    },

    // Pricing
    pricing: {
      heading: 'Bei Rahisi na Wazi',
      subtext: 'Chagua mpango unaofaa tukio lako. Hakuna ada zilizofichwa, hakuna mshangao.',
      monthly: 'kwa tukio',
      plans: [
        {
          name: 'Bure',
          price: 'TZS 0',
          period: 'Bure milele',
          desc: 'Inafaa kwa matukio madogo ya kibinafsi',
          features: [
            'Tukio 1 linaloendelea',
            'Templeti ya msingi ya kadi ya kidijitali',
            'Hadi wageni 50',
            'Kufuatilia RSVP',
            'QR check-in',
          ],
          cta: 'Anza Bure',
          highlighted: false,
        },
        {
          name: 'Wastani',
          price: 'TZS 25,000',
          period: 'kwa tukio',
          desc: 'Kwa sherehe za kukumbukwa',
          features: [
            'Tukio 1 (ukubwa wowote)',
            'Templeti za kadi za hali ya juu',
            'Wageni wasio na kikomo',
            'Makundi na meza za wageni',
            'Kufuatilia RSVP',
            'QR check-in',
            'Arifa za barua pepe',
            'Uchambuzi wa tukio',
          ],
          cta: 'Chagua Wastani',
          highlighted: true,
          badge: 'Maarufu Zaidi',
        },
        {
          name: 'Premium',
          price: 'TZS 60,000',
          period: 'kwa tukio',
          desc: 'Kwa matukio makubwa na wataalamu',
          features: [
            'Kila kitu cha Wastani',
            'Arifa za SMS',
            'Kushiriki WhatsApp',
            'Ubinafsishaji wa hali ya juu',
            'Nembo ya kibinafsi',
            'Msaada wa kipaumbele',
            'Usimamizi wa matukio mengi',
            'Uchambuzi wa hali ya juu',
          ],
          cta: 'Chagua Premium',
          highlighted: false,
        },
      ],
    },

    // Trust
    trust: {
      heading: 'Imeundwa kwa Sherehe za Kisasa',
      subtext: 'Inayotumiwa na wachumba, familia na wapangaji wa matukio kote Tanzania.',
      stats: [
        { label: 'Matukio Yaliyoundwa', value: '—' },
        { label: 'Mialiko ya Kidijitali', value: '—' },
        { label: 'Wageni Waliosimamiwa', value: '—' },
        { label: 'Miji Iliyofikiwa', value: '11+' },
      ],
      testimonials: [
        {
          name: 'Thobias Mabele',
          event: 'Harusi · Geita',
          text: 'Kupanga harusi yetu kulionekana ngumu. Na RIDO EVENTS, tulisimamia wageni 300, mialiko ya kidijitali na QR check-in yote kutoka simu zetu.',
        },
        {
          name: 'Richard Clavery (RIDO)',
          event: 'Mkutano wa Biashara · Geita',
          text: 'Mfumo wa QR check-in ulifanya usajili wa tukio letu kuwa laini kabisa. Wageni wetu walivutiwa.',
        },
      ],
    },

    // Journal
    journal: {
      heading: 'Kutoka Jolikali',
      subtext: 'Vidokezo vya kupanga harusi, mawazo ya matukio na msukumo kwa kila fursa.',
      readMore: 'Soma Makala',
      viewAll: 'Angalia Makala Zote',
      articles: [
        {
          title: 'Jinsi ya Kuunda Mwaliko wa Harusi wa Kidijitali Tanzania',
          excerpt: 'Mwongozo wa hatua kwa hatua wa kuunda mialiko mizuri ya harusi ya kidijitali ambayo wageni wako watapenda.',
          category: 'Vidokezo vya Harusi',
          readTime: 'Dakika 5 za kusoma',
        },
        {
          title: 'Jinsi QR Codes Zinavyoweza Kurahisisha Check-In ya Harusi',
          excerpt: 'Sema kwaheri kwa orodha na karatasi mlangoni. Hivi ndivyo QR check-in inavyofanya kazi harusi za Tanzania.',
          category: 'Usimamizi wa Matukio',
          readTime: 'Dakika 4 za kusoma',
        },
        {
          title: 'Mawazo ya Mwaliko wa Harusi ya Kimila ya Tanzania',
          excerpt: 'Chunguza miundo mizuri ya mwaliko wa kidijitali iliyoathiriwa na mila tajiri za harusi za Tanzania.',
          category: 'Msukumo',
          readTime: 'Dakika 6 za kusoma',
        },
        {
          title: 'Orodha ya Kupanga Harusi Tanzania',
          excerpt: 'Kila kitu unachohitaji kupanga harusi nzuri Tanzania — kuanzia mialiko hadi ngoma ya mwisho.',
          category: 'Kupanga',
          readTime: 'Dakika 8 za kusoma',
        },
      ],
    },

    // Newsletter
    newsletter: {
      heading: 'Kaa Ukiwa na Msukumo',
      subtext: 'Vidokezo vya harusi, mawazo ya matukio na masasisho ya jukwaa yanayotumwa kwenye sanduku lako la barua pepe.',
      placeholder: 'Anwani yako ya barua pepe',
      cta: 'Jiandikishe',
      privacy: 'Hakuna taka, kamwe. Jisajili nje wakati wowote.',
    },

    // Footer
    footer: {
      tagline: 'Jukwaa bora la kidijitali la matukio Tanzania.',
      columns: {
        product: {
          heading: 'Bidhaa',
          links: ['Kadi za Kidijitali', 'Msimamizi wa Tukio', 'Usimamizi wa Wageni', 'QR Check-In', 'RSVP'],
        },
        company: {
          heading: 'Kampuni',
          links: ['Kuhusu', 'Wasiliana', 'Blogu', 'Bei'],
        },
        resources: {
          heading: 'Rasilimali',
          links: ['Kituo cha Usaidizi', 'Mwongozo wa Kupanga Harusi', 'Mwongozo wa Mwaliko', 'Maswali ya Kawaida'],
        },
        legal: {
          heading: 'Kisheria',
          links: ['Sera ya Faragha', 'Masharti ya Huduma', 'Sera ya Cookie'],
        },
      },
      copyright: '© 2025 RIDO EVENTS. Haki zote zimehifadhiwa.',
      madeIn: 'Imetengenezwa kwa upendo na Rido',
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const savedLanguage = window.localStorage.getItem('rido-language');
    return savedLanguage === 'sw' ? 'sw' : 'en';
  });

  const toggleLanguage = () => {
    setLang(prev => {
      const nextLanguage = prev === 'en' ? 'sw' : 'en';
      window.localStorage.setItem('rido-language', nextLanguage);
      return nextLanguage;
    });
  };

  const setLanguage = (code) => {
    if (code === 'en' || code === 'sw') {
      setLang(code);
      window.localStorage.setItem('rido-language', code);
    }
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
