/**
 * Centrale caching configuratie voor Cloudflare + Next.js
 *
 * Cache-Control header uitleg:
 * - public: mag gecached worden door CDN/browsers
 * - max-age: browser cache tijd (seconds)
 * - s-maxage: CDN/edge cache tijd (seconds)
 * - immutable: bestand verandert nooit (voor hashed assets)
 * - stale-while-revalidate: serveer stale content terwijl revalidatie loopt
 */

// Tijdsduur in seconden
const SECONDS = 1;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;
const YEARS = 365 * DAYS;

export const cacheDurations = {
  immutable: YEARS, // Voor hashed static assets
  static: 30 * DAYS, // Voor afbeeldingen, fonts
  page: 1 * HOURS, // Voor HTML pagina's (edge)
  revalidate: 24 * HOURS, // Stale-while-revalidate window
} as const;

export const cacheHeaders = {
  // Hashed static assets - kunnen voor altijd gecached worden
  immutable: `public, max-age=${cacheDurations.immutable}, immutable`,

  // Statische bestanden zoals afbeeldingen
  static: `public, max-age=${cacheDurations.static}`,

  // HTML pagina's - kort browser cache, langer edge cache met SWR
  page: `public, s-maxage=${cacheDurations.page}, stale-while-revalidate=${cacheDurations.revalidate}`,

  // Geen caching (voor API routes, dynamische content)
  none: "private, no-cache, no-store, must-revalidate",
} as const;

/**
 * Next.js headers configuratie
 * Gebruik in next.config.ts: headers: async () => nextHeadersConfig
 */
export const nextHeadersConfig = [
  {
    // Next.js static assets (JS, CSS) - hashed, immutable
    source: "/_next/static/:path*",
    headers: [{ key: "Cache-Control", value: cacheHeaders.immutable }],
  },
  {
    // Portfolio afbeeldingen
    source: "/portfolio/:path*",
    headers: [{ key: "Cache-Control", value: cacheHeaders.static }],
  },
  {
    // Blog afbeeldingen
    source: "/blog/:path*",
    headers: [{ key: "Cache-Control", value: cacheHeaders.static }],
  },
  {
    // Fonts
    source: "/fonts/:path*",
    headers: [{ key: "Cache-Control", value: cacheHeaders.immutable }],
  },
  {
    // Favicon en andere root static files
    source: "/:path(favicon.ico|robots.txt|sitemap.xml|sitemap-:index.xml)",
    headers: [{ key: "Cache-Control", value: cacheHeaders.static }],
  },
  {
    // HTML pagina's (exclude api en _next)
    source: "/:path((?!api|_next).*)",
    headers: [{ key: "Cache-Control", value: cacheHeaders.page }],
  },
];
