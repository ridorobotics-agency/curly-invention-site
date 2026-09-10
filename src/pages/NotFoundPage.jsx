const LOGO_URL = 'https://zzmiywhecaotyhkrowqm.supabase.co/storage/v1/object/public/website_images/LOGO%20(2).png';

export default function NotFoundPage({ isRedirecting = false, isError = false }) {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-mark" aria-hidden="true" />
      <div className="not-found-content">
        <a href="/" className="not-found-logo" aria-label="RIDO EVENTS - Home">
          <img src={LOGO_URL} alt="RIDO EVENTS" />
        </a>
        <p className="not-found-code">404</p>
        <h1 id="not-found-title">{isError ? 'Something went wrong' : 'Page not found'}</h1>
        <p className="not-found-message">
          {isError
            ? 'We could not load this page correctly. Please return home and try again.'
            : isRedirecting
            ? 'That destination is no longer available. Let us take you somewhere useful.'
            : 'The page you are looking for may have moved, or the address may be incorrect.'}
        </p>
        <div className="not-found-actions">
          <a href="/" className="l-btn l-btn-primary l-btn-lg">Go Home</a>
          <button type="button" className="l-btn l-btn-outline l-btn-lg" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}