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
      minPrice: 2500,
      maxPrice: 5000,
      displayPrice: "Vanaf € 2.500",
      popular: false,
    },
    "firm-foundation": {
      name: "Firm Foundation",
      tagline: "Voor groeiende bedrijven",
      minPrice: 7500,
      maxPrice: 15000,
      displayPrice: "Vanaf € 7.500",
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

  // Uurtarieven
  hourlyRates: {
    development: {
      rate: 95,
      label: "Ontwikkeling",
      description: "Custom development",
    },
    design: {
      rate: 85,
      label: "Design",
      description: "UI/UX design werk",
    },
    consultancy: {
      rate: 125,
      label: "Consultancy",
      description: "Strategisch advies",
    },
  } as Record<string, HourlyRate>,

  // Service add-ons voor de calculator
  serviceAddOns: {
    tracking: {
      price: 500,
      type: "one-time" as const,
      label: "Tracking & Analytics setup",
    },
    "email-marketing": {
      price: 750,
      type: "one-time" as const,
      label: "Email marketing setup",
    },
    "online-marketing": {
      price: 1500,
      type: "monthly" as const,
      label: "Online marketing (maandelijks)",
    },
    branding: {
      price: 1500,
      type: "one-time" as const,
      label: "Branding & Huisstijl",
    },
    seo: {
      price: 750,
      type: "one-time" as const,
      label: "SEO optimalisatie",
    },
    crm: {
      price: 1000,
      type: "one-time" as const,
      label: "CRM integratie",
    },
    maintenance: {
      price: 250,
      type: "monthly" as const,
      label: "Onderhoud (maandelijks)",
    },
  } as Record<string, ServiceAddOn>,

  // SEO audit apart (geen service add-on)
  seoAudit: {
    price: 500,
    label: "SEO audit",
    description: "Complete analyse",
  },

  // Budgetranges voor formulieren
  budgetRanges: [
    { id: "1000-2500", label: "€1.000 - €2.500", min: 1000, max: 2500 },
    { id: "2500-5000", label: "€2.500 - €5.000", min: 2500, max: 5000 },
    { id: "5000-10000", label: "€5.000 - €10.000", min: 5000, max: 10000 },
    { id: "10000-25000", label: "€10.000 - €25.000", min: 10000, max: 25000 },
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
