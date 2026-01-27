import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/diensten': {
      nl: '/diensten',
      en: '/services',
    },
    '/diensten/design': {
      nl: '/diensten/design',
      en: '/services/design',
    },
    '/diensten/development': {
      nl: '/diensten/development',
      en: '/services/development',
    },
    '/diensten/hosting': {
      nl: '/diensten/hosting',
      en: '/services/hosting',
    },
    '/diensten/onderhoud': {
      nl: '/diensten/onderhoud',
      en: '/services/maintenance',
    },
    '/diensten/tracking': {
      nl: '/diensten/tracking',
      en: '/services/tracking',
    },
    '/diensten/email-marketing': {
      nl: '/diensten/email-marketing',
      en: '/services/email-marketing',
    },
    '/diensten/online-marketing': {
      nl: '/diensten/online-marketing',
      en: '/services/online-marketing',
    },
    '/diensten/branding': {
      nl: '/diensten/branding',
      en: '/services/branding',
    },
    '/diensten/seo': {
      nl: '/diensten/seo',
      en: '/services/seo',
    },
    '/diensten/crm': {
      nl: '/diensten/crm',
      en: '/services/crm',
    },
    '/diensten/social-media': {
      nl: '/diensten/social-media',
      en: '/services/social-media',
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
    '/kennisbank/glossary': {
      nl: '/kennisbank/glossary',
      en: '/resources/glossary',
    },
    '/werkwijze': {
      nl: '/werkwijze',
      en: '/approach',
    },
    '/tooling': '/tooling',
    '/tooling/[slug]': '/tooling/[slug]',
    '/tooling/wordpress': '/tooling/wordpress',
    '/tooling/nextjs': '/tooling/nextjs',
    '/tooling/typescript': '/tooling/typescript',
    '/tooling/tailwind': '/tooling/tailwind',
    '/tooling/cms': '/tooling/cms',
    '/tooling/cloudflare': '/tooling/cloudflare',
    '/tooling/nginx': '/tooling/nginx',
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
    '/bedankt': {
      nl: '/bedankt',
      en: '/thank-you',
    },
    '/website-laten-maken': {
      nl: '/website-laten-maken',
      en: '/website-development',
    },
    '/video-laten-maken': {
      nl: '/video-laten-maken',
      en: '/video-production',
    },
    '/afspraak': {
      nl: '/afspraak',
      en: '/schedule-call',
    },
  },
});

// Export navigation utilities that automatically handle localized pathnames
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// Export types
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
