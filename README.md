# Robuust Marketing Website

Marketing website voor [Robuust Marketing](https://robuustmarketing.nl) — een Nederlands webdevelopment- en hostingbureau gevestigd in de regio Dordrecht.

## Tech Stack

- **Framework**: Next.js 16 met React 19 en App Router
- **React Compiler**: Ingeschakeld (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 met CSS variabelen
- **UI Components**: shadcn/ui (new-york style)
- **Content**: MDX voor blogartikelen
- **Formulieren**: react-hook-form + zod 4 validatie
- **Animaties**: Framer Motion + tw-animate-css
- **Email**: Resend voor transactionele emails
- **CRM**: HubSpot integratie voor leads
- **Analytics**: GTM + Cookiebot (AVG compliance, Consent Mode v2)
- **Bot Protection**: Cloudflare Turnstile

## Aan de slag

```bash
npm install              # Dependencies installeren
npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm run start            # Production server
npm run lint             # ESLint
npm run check-links      # Interne links controleren (localhost)
npm run check-links:prod # Interne links controleren (productie)
```

### Environment Variables

Maak een `.env.local` bestand aan:

```env
# Analytics & Consent
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_COOKIEBOT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@robuustmarketing.nl

# CRM (HubSpot Contacts API)
HUBSPOT_ACCESS_TOKEN=pat-eu1-xxxxxxxx

# Bot Protection (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x...
TURNSTILE_SECRET_KEY=0x...
```

---

## Data Architectuur

### Overzicht Datastromen

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DATA OPSLAG                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  content/{locale}/                 src/data/                                 │
│  └── blog/*.mdx          ←→       ├── services.ts      (11 diensten)        │
│      (40 artikelen per taal)      ├── portfolio.ts     (8 featured + 20)    │
│                                    ├── tools.ts         (7 tools)            │
│  Categorieën: SEO, Development,    ├── pricing.ts       (tarieven)           │
│  WordPress, Social Media,          ├── packages.ts      (Solid/Firm)         │
│  Hosting, E-mail, etc.            ├── partners.ts      (partners)           │
│                                    └── faqs.ts          (FAQ content)        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         VERWERKING (lib/)                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  lib/blog.ts           → Leest content/{locale}/blog/*.mdx                  │
│  lib/category-utils.ts → Categorie → slug/service mapping                  │
│  lib/pricing.ts        → Prijsberekeningen voor wizard                      │
│  lib/hubspot.ts        → Lead submission naar HubSpot (Contacts API)        │
│  lib/email.ts          → Email verzending via Resend                        │
│  lib/turnstile.ts      → Cloudflare Turnstile botbescherming               │
│  lib/gtm.ts            → GTM tracking met Consent Mode v2 (AVG-compliant)   │
│  lib/metadata.ts       → SEO metadata + hreflang generatie                  │
│  lib/sitemap.ts        → Sitemap generatie met hreflang                     │
│  hooks/use-tracking.ts → React hooks voor makkelijke tracking               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         API ROUTES (app/api/)                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  /api/hubspot/submit-lead  → Verwerkt wizard submissions                    │
│                               ├── Valideert data (zod schema)               │
│                               ├── Stuurt naar HubSpot CRM                   │
│                               └── Verstuurt email notificatie (Resend)      │
│                                                                              │
│  /api/blog                 → Blog metadata endpoint                         │
│  /api/search               → Zoek endpoint                                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PAGINA'S (app/[locale]/)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  /blog                       → Blog overzicht (40 artikelen)                │
│  /blog/[slug]                → Individueel blog artikel (MDX)               │
│  /blog/category/[slug]       → Blog categoriepagina                         │
│  /portfolio                  → Portfolio overzicht                           │
│  /portfolio/[slug]           → Case study detail                            │
│  /diensten                   → Diensten overzicht (11 diensten)             │
│  /diensten/[slug]            → Individuele dienst                           │
│  /tooling                    → Tools overzicht (7 tools)                    │
│  /tooling/[slug]             → Individuele tool                             │
│  /offerte                    → Offerte wizard (4 stappen)                   │
│  /start-project              → Project start wizard                         │
│  /tarieven                   → Prijzenpagina                                │
│  /website-laten-maken*       → Lokale SEO landing pages (10 steden)         │
│  /video-laten-maken          → Video productie landing page                 │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

> **Opmerking:** De kennisbank is volledig gemigreerd naar de blog. Alle oude `/kennisbank/` en `/resources/` URL's redirecten automatisch naar `/blog/`.

### Waar Wordt Wat Opgeslagen?

| Content Type | Locatie | Formaat | Beheer |
|-------------|---------|---------|--------|
| **Blog artikelen** | `content/{locale}/blog/` | MDX + frontmatter | Bestanden toevoegen/bewerken |
| **Portfolio items** | `src/data/portfolio.ts` | TypeScript array | Array items bewerken (NL + EN) |
| **Diensten** | `src/data/services.ts` | TypeScript array | Array items bewerken (NL + EN) |
| **Tools** | `src/data/tools.ts` | TypeScript array | Array items bewerken (NL + EN) |
| **Prijzen/tarieven** | `src/data/pricing.ts` | TypeScript object | Object properties bewerken |
| **FAQ content** | `src/data/faqs.ts` | TypeScript array | Array items bewerken |
| **Partners** | `src/data/partners.ts` | TypeScript array | Array items bewerken |
| **UI vertalingen** | `messages/{locale}.json` | JSON | Key-value pairs bewerken |
| **Leads/aanvragen** | HubSpot CRM | Extern | Via HubSpot dashboard |

### MDX Content Structuur

**Blog artikel** (`content/{locale}/blog/artikel-naam.mdx`):
```mdx
---
title: "Titel van het artikel"
excerpt: "Korte beschrijving"
category: "SEO"
date: "2025-01-15"
author: "Robin van der Heide"
featured: true
image: "/blog/artikel-image.jpg"
translations:
  en: "english-slug"
---

Artikel content in MDX...
```

### Externe Integraties

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        UITGAANDE DATA                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Website Form Submissions                                                    │
│       │                                                                      │
│       ├──────────────────────►  HubSpot CRM                                 │
│       │                         - Contact properties                         │
│       │                         - Lead scoring                               │
│       │                         - Pipeline management                        │
│       │                                                                      │
│       └──────────────────────►  Resend (Email)                              │
│                                 - Notificatie naar info@robuustmarketing.nl │
│                                 - Backup als HubSpot faalt                   │
│                                                                              │
│  Page Views / Events (met Consent Mode v2)                                   │
│       │                                                                      │
│       └──────────────────────►  Google Tag Manager                          │
│                                 - Google Consent Mode v2 (AVG-compliant)    │
│                                 - GA4 tracking                               │
│                                 - Conversie tracking                         │
│                                 - Cookiebot consent management               │
│                                                                              │
│  Bot Protection                                                              │
│       │                                                                      │
│       └──────────────────────►  Cloudflare Turnstile                        │
│                                 - Server-side token verificatie              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Internationalisatie (i18n)

Tweetalige ondersteuning (NL/EN) via **next-intl** met `localePrefix: 'always'`.

### Vertaalde Routes

| Nederlands | Engels |
|-----------|--------|
| `/nl/diensten` | `/en/services` |
| `/nl/tarieven` | `/en/pricing` |
| `/nl/offerte` | `/en/quote` |
| `/nl/werkwijze` | `/en/approach` |
| `/nl/over` | `/en/about` |
| `/nl/voorwaarden` | `/en/terms` |
| `/nl/avg` | `/en/gdpr` |
| `/nl/referenties` | `/en/testimonials` |
| `/nl/vacatures` | `/en/careers` |
| `/nl/afspraak` | `/en/schedule-call` |
| `/nl/website-laten-maken` | `/en/website-development` |
| `/nl/video-laten-maken` | `/en/video-production` |

Niet-vertaalde routes (zelfde in beide talen): `/blog`, `/portfolio`, `/contact`, `/faq`, `/privacy`, `/partners`, `/support`, `/tooling/*`, `/start-project`

Blogartikelen hebben per taal verschillende slugs met automatische redirects in `next.config.ts`.

---

## Project Structuur

```
robuust-marketing-website/
├── content/                        # MDX CONTENT (per locale)
│   ├── nl/blog/                    # Nederlandse blog artikelen (40)
│   └── en/blog/                    # Engelse blog artikelen (40)
│
├── messages/                       # I18N VERTALINGEN
│   ├── nl.json                     # Nederlandse UI strings
│   └── en.json                     # Engelse UI strings
│
├── scripts/
│   └── link-checker.ts             # Interne link checker
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── not-found.tsx           # Global 404 page
│   │   ├── global-error.tsx        # Global error boundary
│   │   ├── [locale]/               # Locale-specifieke pagina's (47 pagina's)
│   │   │   ├── layout.tsx          # Locale layout (GTM, Cookiebot, providers)
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── blog/               # Blog pagina's + categoriepagina's
│   │   │   ├── diensten/           # 11 diensten pagina's + overzicht
│   │   │   ├── tooling/            # 7 tool pagina's + overzicht
│   │   │   ├── portfolio/          # Portfolio pagina's
│   │   │   ├── offerte/            # Offerte wizard
│   │   │   ├── website-laten-maken*/ # 10 lokale SEO landing pages
│   │   │   ├── video-laten-maken/  # Video productie landing
│   │   │   └── ...                 # Overige pagina's
│   │   ├── api/                    # API endpoints
│   │   │   ├── hubspot/submit-lead/
│   │   │   ├── blog/
│   │   │   └── search/
│   │   └── sitemap/                # Sitemap XML routes
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui componenten (10)
│   │   ├── blog/                   # Blog componenten (14)
│   │   ├── layout/                 # Header, Footer, ConversionHeader
│   │   └── onboarding/             # Wizard componenten (4 stappen)
│   │
│   ├── data/                       # Statische data (TypeScript)
│   │   ├── services.ts             # Diensten (11)
│   │   ├── portfolio.ts            # Portfolio (8 featured + 20 legacy)
│   │   ├── tools.ts                # Tools (7)
│   │   ├── pricing.ts              # Tarieven
│   │   ├── packages.ts             # Pakketten
│   │   ├── partners.ts             # Partners
│   │   └── faqs.ts                 # FAQ's
│   │
│   ├── hooks/                      # React Hooks
│   │   └── use-tracking.ts         # Tracking hooks
│   │
│   ├── lib/                        # Utilities
│   │   ├── blog.ts                 # Blog content loader + categorieën
│   │   ├── category-utils.ts       # Categorie → slug/service mapping
│   │   ├── pricing.ts              # Prijsberekeningen
│   │   ├── hubspot.ts              # HubSpot Contacts API
│   │   ├── email.ts                # Resend emails
│   │   ├── turnstile.ts            # Cloudflare Turnstile verificatie
│   │   ├── gtm.ts                  # GTM + Consent Mode v2
│   │   ├── metadata.ts             # SEO metadata + hreflang
│   │   ├── sitemap.ts              # Sitemap generatie
│   │   └── utils.ts                # Helpers (cn, etc.)
│   │
│   ├── types/                      # TypeScript types
│   │   ├── service.ts
│   │   ├── package.ts
│   │   ├── case-study.ts
│   │   └── onboarding.ts
│   │
│   ├── i18n/                       # I18N configuratie
│   │   ├── config.ts
│   │   ├── routing.ts
│   │   └── request.ts
│   │
│   └── middleware.ts               # next-intl locale middleware
│
└── public/                         # Statische assets
    ├── portfolio/                  # Portfolio afbeeldingen
    ├── blog/                       # Blog afbeeldingen
    ├── sitemap.xsl                 # Sitemap stylesheet
    └── sitemap-index.xsl          # Sitemap index stylesheet
```

---

## Deployment

Build output is `standalone` mode voor deployment op eigen NGINX servers met Cloudflare.

```bash
npm run build
```

## Meer informatie

Zie [CLAUDE.md](./CLAUDE.md) voor uitgebreide technische documentatie inclusief data architectuur, SEO-patronen, tracking-implementatie en component-overzicht.

## License

Private - Robuust Marketing
