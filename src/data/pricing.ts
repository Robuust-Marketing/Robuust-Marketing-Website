// Centrale prijsconfiguratie voor Robuust Marketing
// Wijzig prijzen op deze ene plek en ze worden overal automatisch bijgewerkt

export interface PackagePricing {
  name: string;
  tagline: string;
  minPrice: number;
  maxPrice: number;
  displayPrice: string;
  popular?: boolean;
}

export interface HostingPricing {
  price: number | null;
  label: string;
  description: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
}

export interface ServiceAddOn {
  price: number;
  type: "one-time" | "monthly";
  label: string;
}

export interface HourlyRate {
  rate: number;
  label: string;
  description: string;
}

export const pricing = {
  // Website pakketten
  packages: {
    "solid-start": {
      name: "Solid Start",
      tagline: "Perfect voor starters",
      minPrice: 4000,
      maxPrice: 7500,
      displayPrice: "Vanaf € 4.000",
      popular: false,
    },
    "firm-foundation": {
      name: "Firm Foundation",
      tagline: "Voor groeiende bedrijven",
      minPrice: 9000,
      maxPrice: 17500,
      displayPrice: "Vanaf € 9.000",
      popular: true,
    },
  } as Record<string, PackagePricing>,

  // Hosting tiers
  hosting: {
    basis: {
      price: 49,
      label: "Basis",
      description: "Voor kleine websites met beperkt verkeer",
      features: [
        "1 website",
        "10 GB opslag",
        "Onbeperkt bandbreedte",
        "SSL certificaat",
        "Dagelijkse backups",
        "Email support",
      ],
      popular: false,
    },
    professional: {
      price: 99,
      label: "Professional",
      description: "Voor bedrijven met meerdere websites",
      features: [
        "5 websites",
        "50 GB opslag",
        "Onbeperkt bandbreedte",
        "SSL certificaten",
        "Dagelijkse backups",
        "Prioriteit support",
        "Staging omgeving",
        "Performance monitoring",
      ],
      popular: true,
    },
    enterprise: {
      price: null,
      label: "Enterprise",
      description: "Voor high-traffic en complexe omgevingen",
      features: [
        "Onbeperkt websites",
        "Onbeperkt opslag",
        "Dedicated resources",
        "99.99% uptime SLA",
        "24/7 support",
        "Custom infrastructuur",
        "Load balancing",
        "DDoS protection",
      ],
      custom: true,
    },
  } as Record<string, HostingPricing>,

  // Uurtarief (€120 ex BTW voor alle werkzaamheden)
  hourlyRate: 120,

  // Uurtarieven per type (allen €120)
  hourlyRates: {
    development: {
      rate: 120,
      label: "Ontwikkeling",
      description: "Custom development",
    },
    design: {
      rate: 120,
      label: "Design",
      description: "UI/UX design werk",
    },
    consultancy: {
      rate: 120,
      label: "Consultancy",
      description: "Strategisch advies",
    },
  } as Record<string, HourlyRate>,

  // Service add-ons voor de calculator
  serviceAddOns: {
    tracking: {
      price: 600,
      type: "one-time" as const,
      label: "Tracking & Analytics setup",
    },
    "email-marketing": {
      price: 900,
      type: "one-time" as const,
      label: "Email marketing setup",
    },
    "online-marketing": {
      price: 1500,
      type: "monthly" as const,
      label: "Online marketing (maandelijks)",
    },
    branding: {
      price: 1800,
      type: "one-time" as const,
      label: "Branding & Huisstijl",
    },
    seo: {
      price: 900,
      type: "one-time" as const,
      label: "SEO optimalisatie",
    },
    crm: {
      price: 1200,
      type: "one-time" as const,
      label: "CRM integratie",
    },
    maintenance: {
      price: 300,
      type: "monthly" as const,
      label: "Onderhoud (maandelijks)",
    },
  } as Record<string, ServiceAddOn>,

  // SEO audit apart (geen service add-on)
  seoAudit: {
    price: 600,
    label: "SEO audit",
    description: "Complete analyse",
  },

  // Budgetranges voor formulieren (minimum €4.000)
  budgetRanges: [
    { id: "4000-7500", label: "€4.000 - €7.500", min: 4000, max: 7500 },
    { id: "7500-15000", label: "€7.500 - €15.000", min: 7500, max: 15000 },
    { id: "15000-25000", label: "€15.000 - €25.000", min: 15000, max: 25000 },
    { id: "25000+", label: "€25.000+", min: 25000, max: null },
    { id: "unknown", label: "Weet ik nog niet", min: null, max: null },
  ],

  // Timelines voor formulieren
  timelines: [
    { id: "asap", label: "Zo snel mogelijk" },
    { id: "1-month", label: "Binnen 1 maand" },
    { id: "1-3-months", label: "Binnen 1-3 maanden" },
    { id: "3-months+", label: "Meer dan 3 maanden" },
    { id: "unknown", label: "Geen deadline" },
  ],
} as const;

// Helper functies voor prijsweergave
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} - ${formatPrice(max)}`;
}

// Export type voor packages compatibiliteit
export type PackageId = keyof typeof pricing.packages;
export type HostingTier = keyof typeof pricing.hosting;
export type ServiceAddOnId = keyof typeof pricing.serviceAddOns;
