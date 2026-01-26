export const locales = ['nl', 'en'] as const;
export const defaultLocale = 'nl' as const;
export type Locale = (typeof locales)[number];

// Note: Route translations are defined in:
// - src/i18n/routing.ts (primary - used by next-intl for actual routing)
// - src/lib/sitemap.ts (for sitemap URL generation)
