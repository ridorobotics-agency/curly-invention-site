import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';

const siteUrl = 'https://www.ridoevents.co.tz';
const outputDirectory = path.resolve('dist');
const templatePath = path.join(outputDirectory, 'index.html');
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function setMeta(html, attribute, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tagPattern = new RegExp(`<meta(?=[^>]*\\b${attribute}=["']${escapedKey}["'])[^>]*>`, 'i');
  const tag = `<meta ${attribute}="${escapeAttribute(key)}" content="${escapeAttribute(value)}" />`;
  return html.replace(tagPattern, tag);
}

function canonicalUrlFor(pathname) {
  const canonicalPath = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}/`;
  return `${siteUrl}${canonicalPath}`;
}

function addPageMetadata(html, data, canonicalUrl) {
  let output = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(data.title)}</title>`);
  output = setMeta(output, 'name', 'description', data.description);
  output = setMeta(output, 'name', 'title', data.title);
  output = setMeta(output, 'property', 'og:title', data.title);
  output = setMeta(output, 'property', 'og:description', data.description);
  output = setMeta(output, 'property', 'og:url', canonicalUrl);
  output = setMeta(output, 'property', 'twitter:title', data.title);
  output = setMeta(output, 'property', 'twitter:description', data.description);
  output = setMeta(output, 'property', 'twitter:url', canonicalUrl);
  output = output.replace(
    /<link(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
  );

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: data.h1,
        description: data.description,
        url: canonicalUrl,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: 'Tanzania' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: data.h1, item: canonicalUrl },
        ],
      },
      ...(data.faqs ? [{
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }] : []),
    ],
  };
  const schemaTag = `<script id="rido-seo-page-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`;
  const alternates = [
    ...(data.swPath ? [
      `<link rel="alternate" hreflang="en-TZ" href="${escapeAttribute(canonicalUrl)}" data-rido-seo-alternate />`,
      `<link rel="alternate" hreflang="sw-TZ" href="${escapeAttribute(canonicalUrlFor(data.swPath))}" data-rido-seo-alternate />`,
    ] : []),
    ...(data.englishPath ? [
      `<link rel="alternate" hreflang="en-TZ" href="${escapeAttribute(canonicalUrlFor(data.englishPath))}" data-rido-seo-alternate />`,
      `<link rel="alternate" hreflang="sw-TZ" href="${escapeAttribute(canonicalUrl)}" data-rido-seo-alternate />`,
    ] : []),
  ].join('');
  return output.replace('</head>', `${alternates}${schemaTag}</head>`);
}

try {
  const template = await readFile(templatePath, 'utf8');
  const { AppRoutes } = await vite.ssrLoadModule('/src/App.jsx');
  const { seoRoutes } = await vite.ssrLoadModule('/src/seoRoutes.js');
  const { englishPages, locationPages, swahiliPages } = await vite.ssrLoadModule('/src/pages/SeoLandingPage.jsx');
  const pages = [
    { path: '/' },
    {
      path: '/digital-wedding-invitations',
      type: 'service',
      slug: 'digital-wedding-invitations',
    },
    ...seoRoutes,
  ];

  const getPageData = (type, slug) => {
    if (type === 'location') return locationPages[slug];
    if (type === 'swahili') return swahiliPages[slug];
    return englishPages[slug];
  };

  for (const route of pages) {
    const markup = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [route.path] },
        React.createElement(AppRoutes),
      ),
    );
    const routeData = route.type ? getPageData(route.type, route.slug) : null;
    const canonicalUrl = canonicalUrlFor(route.path);
    const pageHtml = (routeData
      ? addPageMetadata(template, routeData, canonicalUrl)
      : template.replace(
        /<link(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
        `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
      )).replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
      .replace(/<html([^>]*)>/i, (_, attributes) => {
        const language = route.type === 'swahili' ? 'sw' : 'en';
        return `<html${attributes.replace(/\s+lang=["'][^"']*["']/i, '')} lang="${language}">`;
      });
    const destination = route.path === '/'
      ? templatePath
      : path.join(outputDirectory, route.path.replace(/^\/+|\/+$/g, ''), 'index.html');

    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, pageHtml);
  }

  console.log(`Prerendered homepage and ${seoRoutes.length} SEO landing pages.`);
} finally {
  await vite.close();
}
