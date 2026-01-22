# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build (standalone output for NGINX deployment)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 16 marketing website** for Robuust Marketing, a Dutch web development and hosting agency.

### Tech Stack
- **Framework**: Next.js 16 with React 19 and App Router
- **React Compiler**: Enabled (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui (new-york style) in `src/components/ui/`
- **Content**: MDX support for blog/kennisbank pages
- **Forms**: react-hook-form + zod validation
- **Animation**: Framer Motion + tw-animate-css
- **Email**: Resend for transactional emails
- **CRM**: HubSpot integration for lead management
- **Analytics**: GTM + Cookiebot (GDPR/AVG compliance)

### Project Structure
```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with GTM, Cookiebot
│   ├── page.tsx                # Homepage
│   ├── diensten/               # Service pages (10 services)
│   │   ├── design/
│   │   ├── development/
│   │   ├── hosting/
│   │   ├── onderhoud/
│   │   ├── tracking/
│   │   ├── email-marketing/
│   │   ├── online-marketing/
│   │   ├── branding/
│   │   ├── seo/
│   │   └── crm/
│   ├── kennisbank/             # Knowledge base with categories
│   ├── blog/                   # Blog with dynamic routes
│   ├── portfolio/              # Portfolio with case studies
│   ├── offerte/                # Quote request wizard
│   ├── start-project/          # Project start wizard
│   └── api/                    # API routes
│       ├── hubspot/            # HubSpot lead submission
│       ├── blog/               # Blog API
│       └── kennisbank/         # Kennisbank API
├── components/
│   ├── ui/                     # shadcn/ui components (button, form, card, etc.)
│   ├── layout/                 # Header, footer, conversion-header
│   └── onboarding/             # Wizard components for quote/project flows
├── data/                       # Static data files
│   ├── services.ts             # 10 service definitions
│   ├── packages.ts             # Solid Start & Firm Foundation packages
│   ├── portfolio.ts            # Portfolio items
│   ├── partners.ts             # Partner information
│   ├── pricing.ts              # Price calculation data
│   └── faqs.ts                 # FAQ content
├── lib/                        # Utilities and helpers
│   ├── utils.ts                # cn() helper for className merging
│   ├── gtm.ts                  # Google Tag Manager utilities & event tracking
│   ├── email.ts                # Resend email utilities
│   ├── hubspot.ts              # HubSpot CRM integration
│   ├── pricing.ts              # Price calculation logic
│   ├── blog.ts                 # Blog utilities
│   └── kennisbank.ts           # Knowledge base utilities
└── types/                      # TypeScript type definitions
    ├── service.ts              # Service types
    ├── package.ts              # Package types
    ├── case-study.ts           # Case study types
    └── onboarding.ts           # Onboarding wizard types
```

### Theme Colors (Dark SaaS Theme - defined in globals.css)
- `background` (#18242e) - Deep Blue/Grey main background
- `foreground` (#ffffff) - White text
- `surface` (#25313b) - Lighter Blue/Grey for cards/surfaces
- `surface-hover` (#2d3d49) - Surface hover state
- `accent` (#c53c0b) - Burnt Orange/Red primary accent (CTAs)
- `accent-hover` (#d94a18) - Accent hover state
- `muted-foreground` (#94a3b8) - Slate for muted text

Use these via Tailwind utilities: `bg-background`, `text-foreground`, `bg-accent`, `text-muted-foreground`, etc.

### Path Aliases
- `@/*` maps to `./src/*` (e.g., `import { Button } from "@/components/ui/button"`)

## Key Patterns

### Environment Variables
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_COOKIEBOT_ID` - Cookiebot ID for GDPR/AVG consent
- `RESEND_API_KEY` - Resend API key for emails
- `CONTACT_EMAIL` - Destination for contact forms (default: info@robuustmarketing.nl)
- `HUBSPOT_ACCESS_TOKEN` - HubSpot API token for CRM integration

### Event Tracking
Use functions from `@/lib/gtm.ts`:
- `trackEvent()` - Custom analytics events
- `trackConversion()` - Contact form, package inquiry, phone clicks
- `trackFormSubmission()` - Form submissions

### Data Files
All static content is defined in `src/data/`:
- Services, packages, portfolio items, FAQs, pricing data
- Edit these files to update content without touching components

### Onboarding Wizards
Multi-step wizards in `src/components/onboarding/`:
- Used for quote requests (`/offerte`) and project starts (`/start-project`)
- Includes price calculator, HubSpot calendar integration
- State managed through wizard container component

### HubSpot Integration
- Lead submission via `/api/hubspot/submit-lead`
- Calendar embed for scheduling calls
- See `src/lib/hubspot.ts` for utilities

### Deployment
Build output is `standalone` mode for custom NGINX server deployment with Cloudflare.
