# Robuust Marketing Website

Marketing website voor Robuust Marketing - een Nederlands webdevelopment en hosting bureau gespecialiseerd in high-end web development, hosting met waterdichte SLA's, en full-service digitale marketing.

## Tech Stack

- **Framework**: Next.js 16 met React 19 en App Router
- **React Compiler**: Ingeschakeld (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 met CSS variabelen
- **UI Components**: shadcn/ui (new-york style)
- **Content**: MDX voor blog en kennisbank artikelen
- **Formulieren**: react-hook-form + zod validatie
- **Animaties**: Framer Motion + tw-animate-css
- **Email**: Resend voor transactionele emails
- **CRM**: HubSpot integratie voor leads
- **Analytics**: GTM + Cookiebot (AVG compliance)

## Getting Started

```bash
npm install          # Dependencies installeren
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
```

---

## Data Architectuur

### Overzicht Datastromen

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           DATA OPSLAG                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  content/                          src/data/                                 │
│  ├── blog/*.mdx          ←→       ├── services.ts      (10 diensten)        │
│  │   (22 artikelen)               ├── portfolio.ts     (7 case studies)     │
│  │                                ├── pricing.ts       (tarieven)           │
│  ├── kennisbank/                  ├── packages.ts      (Solid/Firm)         │
│  │   ├── development/*.mdx        ├── partners.ts      (partners)           │
│  │   ├── seo/*.mdx                └── faqs.ts          (FAQ content)        │
│  │   └── hosting/*.mdx                                                       │
│  │   (15 guides)                                                             │
│  │                                                                           │
│  ├── case-studies/     (leeg - toekomstig)                                  │
│  ├── packages/         (leeg - toekomstig)                                  │
│  └── services/         (leeg - toekomstig)                                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         VERWERKING (lib/)                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  lib/blog.ts           → Leest content/blog/*.mdx                           │
│  lib/kennisbank.ts     → Leest content/kennisbank/**/*.mdx                  │
│  lib/pricing.ts        → Prijsberekeningen voor wizard                      │
│  lib/hubspot.ts        → Lead submission naar HubSpot CRM                   │
│  lib/email.ts          → Email verzending via Resend                        │
│  lib/gtm.ts            → Event tracking naar Google Tag Manager             │
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
│  /api/kennisbank           → Kennisbank metadata endpoint                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PAGINA'S (app/)                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  /blog                     → Toont alle blog artikelen                      │
│  /blog/[slug]              → Individueel blog artikel (MDX)                 │
│  /kennisbank               → Kennisbank overzicht                           │
│  /kennisbank/[category]    → Categorie overzicht                            │
│  /kennisbank/[cat]/[slug]  → Individuele guide (MDX)                        │
│  /portfolio                → Portfolio overzicht (uit data/portfolio.ts)   │
│  /portfolio/[slug]         → Case study detail                              │
│  /diensten                 → Diensten overzicht (uit data/services.ts)     │
│  /offerte                  → Offerte wizard                                 │
│  /start-project            → Project start wizard                           │
│  /tarieven                 → Prijzenpagina (uit data/pricing.ts)           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Waar Wordt Wat Opgeslagen?

| Content Type | Locatie | Formaat | Beheer |
|-------------|---------|---------|--------|
| **Blog artikelen** | `content/blog/` | MDX + frontmatter | Bestanden toevoegen/bewerken |
| **Kennisbank guides** | `content/kennisbank/{category}/` | MDX + frontmatter | Bestanden in juiste categorie |
| **Portfolio items** | `src/data/portfolio.ts` | TypeScript array | Array items bewerken |
| **Diensten** | `src/data/services.ts` | TypeScript array | Array items bewerken |
| **Prijzen/tarieven** | `src/data/pricing.ts` | TypeScript object | Object properties bewerken |
| **FAQ content** | `src/data/faqs.ts` | TypeScript array | Array items bewerken |
| **Partners** | `src/data/partners.ts` | TypeScript array | Array items bewerken |
| **Leads/aanvragen** | HubSpot CRM | Extern | Via HubSpot dashboard |

### MDX Content Structuur

**Blog artikel** (`content/blog/artikel-naam.mdx`):
```mdx
---
title: "Titel van het artikel"
excerpt: "Korte beschrijving"
category: "SEO"
date: "2024-01-15"
author: "Robin van der Heide"
featured: true
image: "/blog/artikel-image.jpg"
---

Artikel content in MDX...
```

**Kennisbank guide** (`content/kennisbank/development/guide-naam.mdx`):
```mdx
---
title: "Guide titel"
description: "Korte beschrijving"
order: 1
icon: "code"
---

Guide content in MDX...
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
│  Page Views / Events                                                         │
│       │                                                                      │
│       └──────────────────────►  Google Tag Manager                          │
│                                 - GA4 tracking                               │
│                                 - Conversie tracking                         │
│                                 - Cookiebot consent                          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Project Structuur

```
robuust-marketing-website/
├── content/                        # DYNAMISCHE CONTENT (MDX bestanden)
│   ├── blog/                       # Blog artikelen (*.mdx)
│   ├── kennisbank/                 # Kennisbank guides
│   │   ├── development/            # Development guides
│   │   ├── seo/                    # SEO guides
│   │   └── hosting/                # Hosting guides
│   ├── case-studies/               # (toekomstig)
│   ├── packages/                   # (toekomstig)
│   └── services/                   # (toekomstig)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── api/                    # API endpoints
│   │   ├── blog/                   # Blog pagina's
│   │   ├── diensten/               # 10 diensten pagina's
│   │   ├── kennisbank/             # Kennisbank pagina's
│   │   ├── portfolio/              # Portfolio pagina's
│   │   ├── offerte/                # Offerte wizard
│   │   └── start-project/          # Project wizard
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui componenten
│   │   ├── layout/                 # Header, footer
│   │   └── onboarding/             # Wizard componenten
│   │
│   ├── data/                       # STATISCHE DATA (TypeScript)
│   │   ├── services.ts             # Diensten definities
│   │   ├── portfolio.ts            # Portfolio items
│   │   ├── pricing.ts              # Alle prijzen/tarieven
│   │   ├── packages.ts             # Pakketten
│   │   ├── partners.ts             # Partners
│   │   └── faqs.ts                 # FAQ's
│   │
│   ├── lib/                        # Utilities
│   │   ├── blog.ts                 # Blog content laden
│   │   ├── kennisbank.ts           # Kennisbank content laden
│   │   ├── pricing.ts              # Prijsberekeningen
│   │   ├── hubspot.ts              # HubSpot API
│   │   ├── email.ts                # Resend emails
│   │   ├── gtm.ts                  # Analytics tracking
│   │   └── utils.ts                # Helpers (cn, etc.)
│   │
│   └── types/                      # TypeScript types
│       ├── service.ts
│       ├── package.ts
│       ├── case-study.ts
│       └── onboarding.ts
│
└── public/                         # Statische assets
    ├── portfolio/                  # Portfolio afbeeldingen
    └── blog/                       # Blog afbeeldingen
```

---

## Environment Variables

```env
# Analytics & Consent
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_COOKIEBOT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@robuustmarketing.nl

# CRM (HubSpot)
HUBSPOT_PORTAL_ID=xxxxxxxx
HUBSPOT_FORM_GUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## Deployment

Build output is `standalone` mode voor deployment op eigen NGINX servers met Cloudflare.

## License

Private - Robuust Marketing
