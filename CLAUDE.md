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

---

## Data Architecture

### Content Storage Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│  MDX CONTENT (content/)              │  STATIC DATA (src/data/)       │
│  - Parsed at build/request time      │  - Imported directly           │
│  - Uses gray-matter for frontmatter  │  - Type-safe TypeScript        │
├────────────────────────────────────────────────────────────────────────┤
│                                      │                                 │
│  content/blog/*.mdx                  │  services.ts     → 10 services │
│  └─ Read by: lib/blog.ts             │  portfolio.ts    → 7 cases     │
│                                      │  pricing.ts      → all prices  │
│  content/kennisbank/{cat}/*.mdx      │  packages.ts     → 2 packages  │
│  └─ Read by: lib/kennisbank.ts       │  partners.ts     → partners    │
│                                      │  faqs.ts         → FAQ items   │
│  Categories: development, seo,       │                                 │
│              hosting                 │                                 │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Flow Patterns

**Pattern 1: MDX Content (Blog/Kennisbank)**
```
content/*.mdx → lib/{blog,kennisbank}.ts → Server Component → Page
```
- MDX files with frontmatter metadata
- Library functions read filesystem, parse with `gray-matter`
- Content rendered in server components

**Pattern 2: Static Data (Services/Portfolio/Pricing)**
```
src/data/*.ts → Direct import → Component
```
- TypeScript files with typed arrays/objects
- Imported directly where needed
- No runtime parsing needed

**Pattern 3: Form Submissions (Lead Generation)**
```
Wizard Component → /api/hubspot/submit-lead → HubSpot CRM
                                            → Resend Email (backup)
```
- Multi-step wizard in `components/onboarding/`
- Validated with zod schema
- Dual submission: HubSpot + email notification

**Pattern 4: Analytics Events (met Google Consent Mode v2)**
```
User Action → lib/gtm.ts → dataLayer → GTM → GA4/LinkedIn/etc.
```
- Consent Mode v2 defaults worden gezet in `layout.tsx` VOOR GTM laadt
- Cookiebot update consent state wanneer gebruiker keuze maakt
- Tracking functies: `trackEvent()`, `trackConversion()`, `trackFormSubmit()`, `trackFunnelStep()`, etc.
- React hook: `useTracking()` in `hooks/use-tracking.ts`

### Where to Add/Edit Content

| To add/edit... | Go to... | How |
|----------------|----------|-----|
| **Blog article** | `content/blog/` | Create `slug.mdx` with frontmatter |
| **Kennisbank guide** | `content/kennisbank/{category}/` | Create `slug.mdx` in correct category |
| **Portfolio item** | `src/data/portfolio.ts` | Add to `portfolioItems` array |
| **Service** | `src/data/services.ts` | Add to `services` array |
| **Pricing** | `src/data/pricing.ts` | Edit `pricing` object |
| **FAQ** | `src/data/faqs.ts` | Add to FAQs array |

### MDX Frontmatter Schemas

**Blog Post** (`content/blog/*.mdx`):
```typescript
{
  title: string;          // Required
  excerpt: string;        // Required - short description
  category: string;       // Required - e.g., "SEO", "Development"
  date: string;           // Required - "YYYY-MM-DD"
  author?: string;        // Optional
  featured?: boolean;     // Optional - shows on homepage
  image?: string;         // Optional - "/blog/image.jpg"
}
```

**Kennisbank Guide** (`content/kennisbank/{category}/*.mdx`):
```typescript
{
  title: string;          // Required
  description: string;    // Required
  order?: number;         // Optional - sort order (default: 999)
  icon?: string;          // Optional
}
```

### Key Library Functions

**`lib/blog.ts`**:
- `getAllBlogPosts()` - Returns all posts sorted by date
- `getBlogPost(slug)` - Returns single post with content
- `getBlogCategories()` - Returns categories with counts
- `getFeaturedBlogPost()` - Returns featured or latest post

**`lib/kennisbank.ts`**:
- `getGuidesByCategory(category)` - Returns guides for category
- `getGuide(category, slug)` - Returns single guide with content
- `getAllGuides()` - Returns all guides across categories

**`lib/pricing.ts`**:
- `calculateProjectPrice(services, hosting)` - Price calculator logic
- `formatPrice(number)` - Dutch currency formatting

**`lib/hubspot.ts`**:
- `submitToHubSpot(data, pageUri)` - Submit lead to HubSpot via Contacts API
- `isHubSpotConfigured()` - Check if access token is set
- `HUBSPOT_MEETING_LINK` - Calendar booking URL

**`lib/turnstile.ts`** (Cloudflare Turnstile Bot Protection):
- `verifyTurnstileToken(token, remoteip?)` - Server-side token verification
- `isTurnstileConfigured()` - Check if secret key is set

**`components/ui/turnstile.tsx`** (React component):
- `<Turnstile onVerify={} theme="dark" />` - Bot protection widget

**`lib/gtm.ts`** (Google Tag Manager + Consent Mode v2):
- `initConsentMode()` - Initialize consent defaults (called in layout.tsx)
- `updateConsent(consent)` - Update consent after user choice
- `trackEvent(name, params)` - Custom event tracking
- `trackConversion(data)` - Conversion tracking (lead, quote, phone, etc.)
- `trackFormSubmit(formName, options)` - Form submission tracking
- `trackFunnelStep(funnel, step, name, total)` - Wizard step tracking
- `trackFunnelComplete(funnel, options)` - Wizard completion
- `trackCTAClick(name, location, destination)` - CTA click tracking
- `trackPhoneClick(number, location)` - Phone click (+ conversion)
- `hasConsent(category)` - Check consent status

**`hooks/use-tracking.ts`** (React hooks):
- `useTracking()` - Main hook with form, funnel, cta, conversion, consent methods
- `useFunnelTracking(name, step, stepName, total)` - Auto-track funnel with abandonment
- `useFormTracking(formName)` - Auto-track form start on focus

---

## Project Structure

```
robuust-marketing-website/
│
├── content/                        # MDX CONTENT
│   ├── blog/                       # Blog articles (22 posts)
│   │   └── *.mdx
│   └── kennisbank/                 # Knowledge base guides (15 guides)
│       ├── development/
│       ├── seo/
│       └── hosting/
│
├── src/
│   ├── app/                        # PAGES (App Router)
│   │   ├── layout.tsx              # Root layout (GTM, Cookiebot)
│   │   ├── page.tsx                # Homepage
│   │   ├── api/
│   │   │   ├── hubspot/submit-lead/route.ts  # Lead submission
│   │   │   ├── blog/route.ts                 # Blog API
│   │   │   └── kennisbank/route.ts           # Kennisbank API
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing
│   │   │   └── [slug]/page.tsx     # Blog detail
│   │   ├── kennisbank/
│   │   │   ├── page.tsx            # Kennisbank home
│   │   │   ├── [category]/page.tsx # Category listing
│   │   │   └── [category]/[slug]/page.tsx  # Guide detail
│   │   ├── portfolio/
│   │   │   ├── page.tsx            # Portfolio listing
│   │   │   └── [slug]/page.tsx     # Case study detail
│   │   ├── diensten/               # 10 service pages
│   │   ├── offerte/page.tsx        # Quote wizard
│   │   ├── start-project/page.tsx  # Project wizard
│   │   └── tarieven/page.tsx       # Pricing page
│   │
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── layout/                 # Header, Footer, ConversionHeader
│   │   └── onboarding/             # Wizard components
│   │       ├── wizard-container.tsx    # State management
│   │       ├── wizard-progress.tsx     # Progress indicator
│   │       ├── wizard-navigation.tsx   # Next/prev buttons
│   │       ├── step-welcome.tsx        # Step 1
│   │       ├── step-services.tsx       # Step 2
│   │       ├── step-hosting.tsx        # Step 3
│   │       ├── step-budget.tsx         # Step 4
│   │       ├── step-contact.tsx        # Step 5
│   │       ├── step-summary.tsx        # Step 6
│   │       ├── price-calculator.tsx    # Live price estimate
│   │       └── hubspot-calendar.tsx    # Meeting scheduler
│   │
│   ├── data/                       # STATIC DATA
│   │   ├── services.ts             # Service definitions (10)
│   │   ├── portfolio.ts            # Portfolio items (7)
│   │   ├── pricing.ts              # All pricing config
│   │   ├── packages.ts             # Solid Start & Firm Foundation
│   │   ├── partners.ts             # Partner logos/info
│   │   └── faqs.ts                 # FAQ content
│   │
│   ├── hooks/                      # REACT HOOKS
│   │   └── use-tracking.ts         # Tracking hooks (useTracking, useFunnelTracking)
│   │
│   ├── lib/                        # UTILITIES
│   │   ├── blog.ts                 # Blog content loader
│   │   ├── kennisbank.ts           # Kennisbank content loader
│   │   ├── pricing.ts              # Price calculations
│   │   ├── hubspot.ts              # HubSpot Contacts API
│   │   ├── email.ts                # Resend emails
│   │   ├── gtm.ts                  # GTM + Consent Mode v2 tracking
│   │   └── utils.ts                # cn() helper
│   │
│   └── types/                      # TYPE DEFINITIONS
│       ├── service.ts
│       ├── package.ts
│       ├── case-study.ts
│       └── onboarding.ts           # Wizard form schema
│
└── public/
    ├── portfolio/                  # Portfolio images
    └── blog/                       # Blog images
```

---

## Theme Colors (Dark SaaS Theme)

Defined in `src/app/globals.css`:

| Variable | Hex | Usage |
|----------|-----|-------|
| `--background` | #18242e | Main background |
| `--foreground` | #ffffff | Primary text |
| `--surface` | #25313b | Cards, surfaces |
| `--surface-hover` | #2d3d49 | Hover states |
| `--accent` | #c53c0b | CTAs, primary accent |
| `--accent-hover` | #d94a18 | Accent hover |
| `--muted-foreground` | #94a3b8 | Muted text |

Use via Tailwind: `bg-background`, `text-foreground`, `bg-accent`, etc.

---

## Environment Variables

```env
# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_COOKIEBOT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@robuustmarketing.nl

# CRM (HubSpot Contacts API)
HUBSPOT_ACCESS_TOKEN=pat-eu1-xxxxxxxx

# Bot Protection (Cloudflare Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x...  # Public site key
TURNSTILE_SECRET_KEY=0x...            # Secret key (server-side only)
```

---

## Key Patterns

### Path Aliases
- `@/*` maps to `./src/*`

### Event Tracking (met Consent Mode v2)

```typescript
import {
  trackEvent,
  trackConversion,
  trackFormSubmit,
  trackFunnelStep,
  trackCTAClick,
  trackPhoneClick,
} from "@/lib/gtm";

// Custom event
trackEvent("button_click", { button_name: "cta" });

// Form submission (tracked als conversie)
trackFormSubmit("contact_form", { value: 500 });

// Wizard/funnel tracking
trackFunnelStep("offerte_wizard", 2, "Diensten", 4);

// CTA clicks
trackCTAClick("Offerte aanvragen", "hero_section", "/offerte");

// Phone/email clicks (automatisch conversie)
trackPhoneClick("+31612345678", "footer");
```

Of gebruik de React hook:
```typescript
import { useTracking } from "@/hooks/use-tracking";

function MyComponent() {
  const { form, funnel, cta, conversion } = useTracking();

  form.submit("contact_form", { value: 500 });
  cta.click("CTA naam", "locatie");
}
```

### Form Validation
All forms use zod schemas defined in `src/types/`. Wizard form schema in `onboarding.ts`.

### Deployment
Build output is `standalone` mode for NGINX + Cloudflare deployment.

---

## Video Generatie met Remotion

Portfolio video's kunnen worden gegenereerd met [Remotion](https://remotion.dev/) - een React-based video creation framework.

### Setup

```bash
# Maak een apart Remotion project
cd ..
npx create-video@latest robuust-portfolio-videos
cd robuust-portfolio-videos

# Of voeg Remotion toe aan dit project
npm install remotion @remotion/cli @remotion/player
```

### Portfolio Video Component

Voorbeeld component die portfolio data gebruikt:

```tsx
// src/PortfolioVideo.tsx
import { AbsoluteFill, Img, interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { PortfolioItem } from "./data/portfolio";

export const PortfolioVideo: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleY = spring({ frame, fps, from: -50, to: 0 });
  const imageScale = spring({ frame: frame - 20, fps, from: 0.8, to: 1 });
  const imageOpacity = interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#18242e" }}>
      {/* Branding */}
      <div style={{ position: "absolute", top: 40, left: 40 }}>
        <span style={{ color: "#c53c0b", fontSize: 24, fontWeight: "bold" }}>
          Robuust Marketing
        </span>
      </div>

      {/* Titel */}
      <div style={{
        position: "absolute", top: 120, left: 40,
        opacity: titleOpacity, transform: `translateY(${titleY}px)`,
      }}>
        <h1 style={{ color: "#fff", fontSize: 64, margin: 0 }}>{item.name}</h1>
        <p style={{ color: "#c53c0b", fontSize: 24 }}>{item.category}</p>
      </div>

      {/* Portfolio afbeelding */}
      <div style={{
        position: "absolute", top: 280, left: 40, right: 40,
        opacity: imageOpacity, transform: `scale(${imageScale})`,
      }}>
        <Img src={item.image} style={{ width: "100%", borderRadius: 12 }} />
      </div>
    </AbsoluteFill>
  );
};
```

### Compositions definiëren

```tsx
// src/Root.tsx
import { Composition } from "remotion";
import { PortfolioVideo } from "./PortfolioVideo";
import { portfolioItems } from "./data/portfolio";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {portfolioItems.map((item) => (
        <Composition
          key={item.id}
          id={`portfolio-${item.slug}`}
          component={PortfolioVideo}
          durationInFrames={300}  // 10 sec @ 30fps
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ item }}
        />
      ))}
    </>
  );
};
```

### Renderen

```bash
# Preview in browser
npm start

# Render individuele video
npx remotion render portfolio-growteq out/growteq.mp4

# Render alle portfolio video's
for slug in growteq den-hartog villary idrw bnb-kinderdijk voltra-charging woonstudio-joy; do
  npx remotion render portfolio-$slug out/$slug.mp4
done
```

### Aanbevolen Remotion features

| Feature | Package | Gebruik |
|---------|---------|---------|
| Scene transitions | `@remotion/transitions` | Vloeiende overgangen tussen secties |
| Audio | `<Audio>` component | Achtergrondmuziek toevoegen |
| Sequences | `<Sequence>` component | Timing van verschillende secties |
| Springs | `spring()` | Natuurlijke animaties |
| Captions | `@remotion/captions` | Ondertiteling toevoegen |

### Brand kleuren voor video's

Gebruik de theme kleuren uit `globals.css`:
- Background: `#18242e`
- Accent: `#c53c0b`
- Text: `#ffffff`
- Muted: `#94a3b8`
