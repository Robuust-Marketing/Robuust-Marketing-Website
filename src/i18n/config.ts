export const locales = ['nl', 'en'] as const;
export const defaultLocale = 'nl' as const;
export type Locale = (typeof locales)[number];

// Route mapping for translated slugs
export const routeMapping: Record<string, Record<Locale, string>> = {
  diensten: { nl: 'diensten', en: 'services' },
  tarieven: { nl: 'tarieven', en: 'pricing' },
  offerte: { nl: 'offerte', en: 'quote' },
  'start-project': { nl: 'start-project', en: 'start-project' },
  kennisbank: { nl: 'kennisbank', en: 'resources' },
  werkwijze: { nl: 'werkwijze', en: 'approach' },
  over: { nl: 'over', en: 'about' },
  voorwaarden: { nl: 'voorwaarden', en: 'terms' },
  avg: { nl: 'avg', en: 'gdpr' },
  onderhoud: { nl: 'onderhoud', en: 'maintenance' },
};

// Helper function to get localized path
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'nl') return path;

  let localizedPath = path;
  Object.entries(routeMapping).forEach(([, mapping]) => {
    localizedPath = localizedPath.replace(
      new RegExp(`/${mapping.nl}(/|$)`),
      `/${mapping[locale]}$1`
    );
  });

  return `/en${localizedPath}`;
}

// Helper function to get the Dutch path from an English path
export function getDutchPath(englishPath: string): string {
  let dutchPath = englishPath.replace(/^\/en/, '');

  Object.entries(routeMapping).forEach(([, mapping]) => {
    dutchPath = dutchPath.replace(
      new RegExp(`/${mapping.en}(/|$)`),
      `/${mapping.nl}$1`
    );
  });

  return dutchPath || '/';
}
