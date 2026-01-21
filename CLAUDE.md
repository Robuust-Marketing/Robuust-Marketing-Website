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
- **Framework**: Next.js 16 (canary) with React 19 and App Router
- **React Compiler**: Enabled (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui (new-york style) in `src/components/ui/`
- **Content**: MDX support for blog/content pages
- **Forms**: react-hook-form + zod validation
- **Animation**: Framer Motion + tw-animate-css
- **Email**: Resend for transactional emails
- **Analytics**: GTM + Cookiebot (GDPR compliance)

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with GTM, Cookiebot, headers/footer
│   ├── page.tsx            # Homepage
│   └── diensten/           # Services pages
├── components/
│   ├── ui/                 # shadcn/ui components (button, form, card, etc.)
│   └── layout/             # Site-wide layout (header, footer, conversion-header)
├── lib/
│   ├── utils.ts            # cn() helper for className merging
│   ├── gtm.ts              # Google Tag Manager utilities & event tracking
│   └── email.ts            # Resend email utilities
└── types/                  # TypeScript type definitions
    ├── service.ts          # 10 service types (design, development, hosting, etc.)
    ├── package.ts          # Solid Start & Firm Foundation packages
    └── case-study.ts       # Case study types
```

### Brand Colors (defined in globals.css)
- `navy` (#0A1628) - Primary brand color
- `royal-blue` (#1E3A5F) - Secondary
- `gold` (#D4AF37) - Accent/CTA
- `warm-white` (#FAFAF9) - Background
- `charcoal` (#2D3748) - Body text
- `slate` (#64748B) - Muted text

Use these via Tailwind utilities: `text-navy`, `bg-gold`, `border-gold`, etc.

### Path Aliases
- `@/*` maps to `./src/*` (e.g., `import { Button } from "@/components/ui/button"`)

## Key Patterns

### Environment Variables
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID
- `NEXT_PUBLIC_COOKIEBOT_ID` - Cookiebot ID for GDPR consent
- `RESEND_API_KEY` - Resend API key for emails
- `CONTACT_EMAIL` - Destination for contact forms (default: info@robuustmarketing.nl)

### Event Tracking
Use functions from `@/lib/gtm.ts`:
- `trackEvent()` - Custom analytics events
- `trackConversion()` - Contact form, package inquiry, phone clicks
- `trackFormSubmission()` - Form submissions

### Deployment
Build output is `standalone` mode for custom NGINX server deployment with Cloudflare.
