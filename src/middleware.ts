import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // NL without prefix, EN with /en/
  pathnames: {
    '/': '/',
    '/diensten': {
      nl: '/diensten',
      en: '/services',
    },
    '/diensten/[slug]': {
      nl: '/diensten/[slug]',
      en: '/services/[slug]',
    },
    '/tarieven': {
      nl: '/tarieven',
      en: '/pricing',
    },
    '/offerte': {
      nl: '/offerte',
      en: '/quote',
    },
    '/start-project': '/start-project',
    '/kennisbank': {
      nl: '/kennisbank',
      en: '/resources',
    },
    '/kennisbank/[category]': {
      nl: '/kennisbank/[category]',
      en: '/resources/[category]',
    },
    '/kennisbank/[category]/[slug]': {
      nl: '/kennisbank/[category]/[slug]',
      en: '/resources/[category]/[slug]',
    },
    '/werkwijze': {
      nl: '/werkwijze',
      en: '/approach',
    },
    '/tooling': '/tooling',
    '/over': {
      nl: '/over',
      en: '/about',
    },
    '/voorwaarden': {
      nl: '/voorwaarden',
      en: '/terms',
    },
    '/avg': {
      nl: '/avg',
      en: '/gdpr',
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/portfolio': '/portfolio',
    '/portfolio/[slug]': '/portfolio/[slug]',
    '/contact': '/contact',
    '/faq': '/faq',
    '/privacy': '/privacy',
    '/referenties': {
      nl: '/referenties',
      en: '/testimonials',
    },
    '/partners': '/partners',
    '/vacatures': {
      nl: '/vacatures',
      en: '/careers',
    },
    '/support': '/support',
  },
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
