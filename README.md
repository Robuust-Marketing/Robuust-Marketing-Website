# Robuust Marketing Website

Marketing website voor Robuust Marketing - een Nederlands webdevelopment en hosting bureau gespecialiseerd in high-end web development, hosting met waterdichte SLA's, en full-service digitale marketing.

## Tech Stack

- **Framework**: Next.js 16 met React 19 en App Router
- **React Compiler**: Ingeschakeld (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 met CSS variabelen
- **UI Components**: shadcn/ui (new-york style)
- **Content**: MDX ondersteuning voor blog/kennisbank
- **Formulieren**: react-hook-form + zod validatie
- **Animaties**: Framer Motion + tw-animate-css
- **Email**: Resend voor transactionele emails
- **CRM**: HubSpot integratie
- **Analytics**: GTM + Cookiebot (AVG compliance)

## Getting Started

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Production build maken
npm run build

# Production server starten
npm run start

# Linting uitvoeren
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Project Structuur

```
src/
├── app/                        # Next.js App Router pagina's
│   ├── layout.tsx              # Root layout met GTM, Cookiebot
│   ├── page.tsx                # Homepage
│   ├── diensten/               # Dienstenpagina's (10 diensten)
│   ├── kennisbank/             # Kennisbank met categorieën
│   ├── blog/                   # Blog met dynamische routes
│   ├── portfolio/              # Portfolio met case studies
│   ├── offerte/                # Offerte aanvraag wizard
│   ├── start-project/          # Project start wizard
│   └── api/                    # API routes (HubSpot, blog, kennisbank)
├── components/
│   ├── ui/                     # shadcn/ui componenten
│   ├── layout/                 # Header, footer, conversion-header
│   └── onboarding/             # Wizard componenten (offerte flow)
├── data/                       # Statische data bestanden
│   ├── services.ts             # 10 diensten definities
│   ├── packages.ts             # Solid Start & Firm Foundation pakketten
│   ├── portfolio.ts            # Portfolio items
│   ├── partners.ts             # Partner informatie
│   ├── pricing.ts              # Prijscalculatie data
│   └── faqs.ts                 # FAQ content
├── lib/                        # Utilities en helpers
│   ├── utils.ts                # cn() helper voor classNames
│   ├── gtm.ts                  # Google Tag Manager utilities
│   ├── email.ts                # Resend email utilities
│   ├── hubspot.ts              # HubSpot CRM integratie
│   ├── pricing.ts              # Prijsberekening logica
│   ├── blog.ts                 # Blog utilities
│   └── kennisbank.ts           # Kennisbank utilities
└── types/                      # TypeScript type definities
    ├── service.ts              # Service types
    ├── package.ts              # Package types
    ├── case-study.ts           # Case study types
    └── onboarding.ts           # Onboarding wizard types
```

## Diensten

1. Design - Websites, huisstijlen, advertenties
2. Development - WordPress (Avada/Impreza/Salient) en maatwerk (Node.js/React)
3. Hosting - Dedicated servers (Duitsland/Finland), NGINX, Cloudflare
4. Onderhoud - SLA garanties en website onderhoud
5. Tracking - GA4, Snitcher, Meta Pixel, First-party tracking (Taggrs)
6. E-mailmarketing - Mailchimp, Funnelkit, Brevo, Office 365
7. Online Marketing - Meta/TikTok/Google Ads via Hello Its Me
8. Branding - Logo, huisstijl, online profielen
9. SEO - Ahrefs, AI tooling, Google Search Console
10. CRM - HubSpot implementaties

## Pakketten

- **Solid Start** - Starterspakket voor startende ondernemers
- **Firm Foundation** - Voor bestaande bedrijven die hun digitale fundament willen verstevigen

## Environment Variables

```env
NEXT_PUBLIC_GTM_ID=           # Google Tag Manager ID
NEXT_PUBLIC_COOKIEBOT_ID=     # Cookiebot ID voor AVG consent
RESEND_API_KEY=               # Resend API key voor emails
CONTACT_EMAIL=                # Contact formulier bestemming
HUBSPOT_ACCESS_TOKEN=         # HubSpot API token
```

## Deployment

Build output is `standalone` mode voor deployment op eigen NGINX servers met Cloudflare.

## License

Private - Robuust Marketing
