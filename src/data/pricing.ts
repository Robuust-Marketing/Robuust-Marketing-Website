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
  priceMax?: number;
  label: string;
  description: string;
  features: string[];
  popular?: boolean;
  custom?: boolean;
}

export interface WebsiteMigration {
  freeWithContract: boolean;
  contractYears: number;
  description: string;
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

export interface SLAPackage {
  name: string;
  price: number;
  popular?: boolean;
  features: {
    preventief: string;
    monitoring: string;
    backups: string;
    incidenten: string;
    reactietijd: string;
    oplostijd: string;
    meeting: string;
    rapportage: string;
    uptime: string;
  };
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
    shared: {
      price: 15,
      label: "Shared Hosting",
      description: "Voor kleine websites en starters",
      features: [
        "1 website",
        "10 GB opslag",
        "SSL certificaat",
        "Dagelijkse backups",
        "Email support",
        "Cloudflare CDN",
      ],
      popular: false,
    },
    premium: {
      price: 30,
      label: "Premium Hosting",
      description: "Voor professionele websites met meer verkeer",
      features: [
        "1 website",
        "25 GB opslag",
        "SSL certificaat",
        "Dagelijkse backups",
        "Prioriteit support",
        "Staging omgeving",
        "Performance monitoring",
        "Cloudflare CDN + WAF",
      ],
      popular: true,
    },
    vps: {
      price: 50,
      priceMax: 100,
      label: "Dedicated VPS",
      description: "Voor high-traffic en complexe omgevingen",
      features: [
        "Dedicated resources",
        "Onbeperkt opslag",
        "99.9% uptime SLA",
        "Prioriteit support",
        "Staging omgeving",
        "Performance monitoring",
        "Cloudflare CDN + WAF",
        "Custom configuratie",
      ],
      popular: false,
    },
  } as Record<string, HostingPricing>,

  // Website verhuizing (gratis bij 2-jarig contract)
  websiteMigration: {
    freeWithContract: true,
    contractYears: 2,
    description: "Gratis website verhuizing bij een 2-jarig hostingcontract",
  },

  // SLA onderhoudspakketten
  slaPackages: {
    essential: {
      name: "Essential",
      price: 60,
      popular: false,
      features: {
        preventief: "1x per maand",
        monitoring: "Elke minuut",
        backups: "Wekelijks",
        incidenten: "1 incident",
        reactietijd: "Binnen 48 uur",
        oplostijd: "Binnen 5 werkdagen",
        meeting: "1x per jaar",
        rapportage: "Maandelijks",
        uptime: "98,0%",
      },
    },
    light: {
      name: "Light",
      price: 120,
      popular: false,
      features: {
        preventief: "1x per week",
        monitoring: "Elke minuut",
        backups: "Dagelijks",
        incidenten: "2 incidenten",
        reactietijd: "Binnen 48 uur",
        oplostijd: "Binnen 3 werkdagen",
        meeting: "1x per halfjaar",
        rapportage: "Maandelijks",
        uptime: "98,5%",
      },
    },
    medium: {
      name: "Medium",
      price: 225,
      popular: true,
      features: {
        preventief: "1x per werkdag",
        monitoring: "Elke minuut",
        backups: "2x per dag",
        incidenten: "4 incidenten",
        reactietijd: "Binnen 24 uur",
        oplostijd: "Binnen 72 uur",
        meeting: "1x per kwartaal",
        rapportage: "Maandelijks",
        uptime: "99,0%",
      },
    },
    large: {
      name: "Large",
      price: 575,
      popular: false,
      features: {
        preventief: "4x per werkdag",
        monitoring: "Elke minuut",
        backups: "4x per dag",
        incidenten: "8 incidenten",
        reactietijd: "Binnen 12 uur",
        oplostijd: "Binnen 36 uur",
        meeting: "1x per maand",
        rapportage: "Wekelijks",
        uptime: "99,5%",
      },
    },
  } as Record<string, SLAPackage>,

  // Spoedtarief voor reactief onderhoud
  emergencyRate: 175,

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
