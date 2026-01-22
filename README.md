# Robuust Marketing Website

De officiële marketing website van **Robuust Marketing** - een full-service webdevelopment en hosting bureau gevestigd in Zwijndrecht, Nederland.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) met React 19 en App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) met CSS variabelen
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (new-york style)
- **Content**: MDX voor blog en kennisbank artikelen
- **Forms**: react-hook-form + Zod validatie
- **Animaties**: Framer Motion + tw-animate-css
- **CRM**: HubSpot integratie
- **Email**: Resend
- **Analytics**: Google Tag Manager + Cookiebot (AVG compliant)

## Diensten

De website presenteert 10 diensten:

1. **Design** - UI/UX design en webdesign
2. **Development** - Next.js, React, WordPress development
3. **Hosting** - Dedicated servers met NGINX en Cloudflare
4. **Onderhoud** - Website onderhoud met SLA garanties
5. **Tracking** - GA4, Meta Pixel, first-party tracking (Taggrs)
6. **Email Marketing** - Mailchimp, Funnelkit, transactionele emails
7. **Online Marketing** - Meta, TikTok, Google Ads
8. **Branding** - Logo, huisstijl, visual identity
9. **SEO** - Technische SEO en content optimalisatie
10. **CRM** - HubSpot implementaties

## Pakketten

- **Solid Start** - Starterspakket voor startende ondernemers
- **Firm Foundation** - Voor bestaande bedrijven die willen groeien

## Quick Start

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Scripts

| Script | Beschrijving |
|--------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Maak productie build |
| `npm run start` | Start productie server |
| `npm run lint` | Run ESLint |

## Project Structuur

```
src/
├── app/            # Next.js App Router pagina's
├── components/     # React componenten
│   ├── ui/         # shadcn/ui componenten
│   ├── layout/     # Header, footer, navigatie
│   └── onboarding/ # Project intake wizard
├── data/           # Statische data (prijzen, diensten, etc.)
├── lib/            # Utility functies
└── types/          # TypeScript type definities

content/
├── blog/           # Blog artikelen (MDX)
└── kennisbank/     # Kennisbank artikelen (MDX)
```

## Environment Variables

Maak een `.env.local` bestand aan met:

```env
# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_COOKIEBOT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Email
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_EMAIL=info@robuustmarketing.nl

# CRM
HUBSPOT_PORTAL_ID=xxxxxxxx
HUBSPOT_FORM_GUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## Deployment

De website wordt gedeployed via:
- **Build**: Standalone output mode voor NGINX
- **Server**: Dedicated servers in Europa
- **CDN**: Cloudflare voor caching en DDoS protection

## AI Assistants

Zie [CLAUDE.md](./CLAUDE.md) voor uitgebreide documentatie voor AI code assistants.

## Licentie

Proprietary - Robuust Marketing
