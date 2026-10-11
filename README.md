# RIDO EVENTS website

The public landing page and SEO pages are built with React and Vite. Run `npm run build` to produce the Vite bundle and prerender the homepage, digital invitation page, and configured SEO landing pages into `dist/`. SEO landing page routes and their content are configured in `src/App.jsx` and `src/pages/SeoLandingPage.jsx`; keep `public/sitemap.xml` aligned with those public URLs.

`public/robots.txt` allows public pages to be crawled and points search engines to the sitemap. The Vercel rewrite continues to serve the React application for routes that are not emitted as prerendered static pages.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
