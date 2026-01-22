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

This is a **Next.js 16 marketing website** for Robuust Marketing, a Dutch web development and hosting agency based in Zwijndrecht. The site is in Dutch.

### Tech Stack
- **Framework**: Next.js 16 with React 19 and App Router
- **React Compiler**: Enabled (`reactCompiler: true` in next.config.ts)
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui (new-york style) in `src/components/ui/`
- **Content**: MDX for blog articles and kennisbank (knowledge base)
- **Forms**: react-hook-form + zod validation
- **Animation**: Framer Motion + tw-animate-css
- **Email**: Resend for transactional emails
- **CRM**: HubSpot integration for lead capture
- **Analytics**: GTM + Cookiebot (GDPR compliance)
- **Icons**: lucide-react

### Project Structure
```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with GTM, Cookiebot, headers/footer
│   ├── page.tsx                # Homepage
│   ├── api/                    # API routes
│   │   ├── blog/route.ts       # Blog data API
│   │   ├── hubspot/submit-lead/route.ts  # HubSpot lead submission
│   │   └── kennisbank/route.ts # Knowledge base API
│   ├── blog/                   # Blog listing and [slug] pages
│   ├── diensten/               # Services pages (10 service pages)
│   ├── kennisbank/             # Knowledge base with categories
│   ├── offerte/                # Quote request page
│   ├── portfolio/              # Portfolio listing and [slug] pages
│   ├── start-project/          # Onboarding wizard
│   └── ...                     # Other pages (contact, over, tarieven, etc.)
├── components/
│   ├── ui/                     # shadcn/ui components (button, form, card, etc.)
│   ├── layout/                 # Header, footer, conversion-header
│   ├── onboarding/             # Multi-step wizard components
│   │   ├── wizard-container.tsx
│   │   ├── wizard-navigation.tsx
│   │   ├── wizard-progress.tsx
│   │   ├── price-calculator.tsx
│   │   ├── hubspot-calendar.tsx
│   │   └── step-*.tsx          # Individual wizard steps
│   └── *.tsx                   # Homepage sections (hero, bento-grid, etc.)
├── data/                       # Static data and configurations
│   ├── pricing.ts              # Central pricing configuration
│   ├── services.ts             # Service definitions with icons
│   ├── packages.ts             # Website package definitions
│   ├── portfolio.ts            # Portfolio case studies
│   ├── partners.ts             # Partner logos/info
│   └── faqs.ts                 # FAQ content
├── lib/                        # Utility functions
│   ├── utils.ts                # cn() helper for className merging
│   ├── gtm.ts                  # Google Tag Manager & event tracking
│   ├── email.ts                # Resend email utilities
│   ├── hubspot.ts              # HubSpot form submission
│   ├── pricing.ts              # Price calculation logic
│   ├── blog.ts                 # Blog MDX processing
│   └── kennisbank.ts           # Knowledge base MDX processing
└── types/                      # TypeScript type definitions
    ├── service.ts              # Service types
    ├── package.ts              # Package types
    ├── case-study.ts           # Portfolio case study types
    └── onboarding.ts           # Wizard data types & Zod schemas

content/                        # MDX content files
├── blog/                       # Blog articles (*.mdx)
└── kennisbank/                 # Knowledge base articles by category
    ├── development/
    ├── hosting/
    └── seo/
```

### Theme Colors (Dark SaaS Theme in globals.css)

The site uses a dark theme with these CSS variables:

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | #18242e | Deep blue/grey main background |
| `--foreground` | #ffffff | White text |
| `--surface` | #25313b | Card/surface backgrounds |
| `--surface-hover` | #2d3d49 | Hover state for surfaces |
| `--accent` | #c53c0b | Burnt orange/red accent (CTA buttons) |
| `--accent-hover` | #d94a18 | Accent hover state |
| `--muted-foreground` | #94a3b8 | Muted/secondary text (slate-400) |

Use Tailwind utilities: `bg-background`, `bg-surface`, `bg-accent`, `text-accent`, `glow-accent`, etc.

Custom utility classes in `globals.css`:
- `.glass` / `.glass-darker` - Glassmorphism effects
- `.glow-accent` / `.glow-accent-sm` - Orange glow effects
- `.text-gradient` / `.text-gradient-accent` - Gradient text effects

### Path Aliases
- `@/*` maps to `./src/*` (e.g., `import { Button } from "@/components/ui/button"`)

## Key Patterns

### Centralized Pricing (`src/data/pricing.ts`)
All pricing is defined in one place for consistency:
- `pricing.packages` - Website packages (Solid Start, Firm Foundation)
- `pricing.hosting` - Hosting tiers (Basis €49, Professional €99, Enterprise custom)
- `pricing.hourlyRates` - Hourly rates for development/design/consultancy
- `pricing.serviceAddOns` - Add-on services with one-time or monthly pricing
- `pricing.budgetRanges` / `pricing.timelines` - Form options

Use `formatPrice()` and `formatPriceRange()` helpers for consistent price formatting.

### Services (`src/data/services.ts`)
10 services defined with id, name, icon, description, features, and href:
- design, development, hosting, maintenance
- tracking, email-marketing, online-marketing
- branding, seo, crm

### Onboarding Wizard (`src/components/onboarding/`)
Multi-step project intake wizard with:
- Zod schemas for each step (defined in `src/types/onboarding.ts`)
- Price calculator based on selections
- HubSpot form submission
- HubSpot calendar embed for booking meetings

### MDX Content
Blog and kennisbank articles use MDX with gray-matter frontmatter:
- Processing in `src/lib/blog.ts` and `src/lib/kennisbank.ts`
- Content stored in `/content/blog/` and `/content/kennisbank/`

### Form Validation
Always use Zod schemas with react-hook-form:
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { someSchema, type SomeData } from "@/types/...";

const form = useForm<SomeData>({
  resolver: zodResolver(someSchema),
});
```

### Event Tracking (`src/lib/gtm.ts`)
- `trackEvent()` - Custom analytics events
- `trackConversion()` - Contact form, package inquiry, phone clicks
- `trackFormSubmission()` - Form submissions

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID |
| `NEXT_PUBLIC_COOKIEBOT_ID` | Cookiebot ID for GDPR consent |
| `RESEND_API_KEY` | Resend API key for emails |
| `CONTACT_EMAIL` | Destination for contact forms (default: info@robuustmarketing.nl) |
| `HUBSPOT_PORTAL_ID` | HubSpot portal ID for CRM integration |
| `HUBSPOT_FORM_GUID` | HubSpot form GUID for lead submissions |

## Deployment

- **Output**: Standalone mode (`output: "standalone"` in next.config.ts)
- **Server**: Custom NGINX deployment
- **CDN**: Cloudflare
- **Images**: Optimized with AVIF/WebP formats

## Code Style Guidelines

- Use TypeScript strict mode
- Prefer named exports
- Components use functional style with hooks
- Dutch language for user-facing content
- Follow shadcn/ui patterns for UI components
- Use `cn()` from `@/lib/utils` for conditional classNames
