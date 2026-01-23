import { pricing } from "./pricing";
import { type Locale, defaultLocale } from "@/i18n/config";

export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const packagesNL: Package[] = [
  {
    id: "solid-start",
    name: pricing.packages["solid-start"].name,
    tagline: pricing.packages["solid-start"].tagline,
    description:
      "Een professionele website met alles wat je nodig hebt om online zichtbaar te zijn.",
    price: pricing.packages["solid-start"].displayPrice,
    features: [
      "Custom design",
      "Responsive website",
      "Basis SEO",
      "Contact formulier",
      "1 jaar hosting inclusief",
    ],
    popular: pricing.packages["solid-start"].popular,
  },
  {
    id: "firm-foundation",
    name: pricing.packages["firm-foundation"].name,
    tagline: pricing.packages["firm-foundation"].tagline,
    description:
      "Een complete digitale infrastructuur met geavanceerde functionaliteiten en marketing tools.",
    price: pricing.packages["firm-foundation"].displayPrice,
    features: [
      "Alles van Solid Start",
      "Geavanceerde functionaliteiten",
      "Marketing integraties",
      "Analytics dashboard",
      "Premium support",
    ],
    popular: pricing.packages["firm-foundation"].popular,
  },
];

const packagesEN: Package[] = [
  {
    id: "solid-start",
    name: pricing.packages["solid-start"].name,
    tagline: "Perfect for starters",
    description:
      "A professional website with everything you need to be visible online.",
    price: pricing.packages["solid-start"].displayPrice,
    features: [
      "Custom design",
      "Responsive website",
      "Basic SEO",
      "Contact form",
      "1 year hosting included",
    ],
    popular: pricing.packages["solid-start"].popular,
  },
  {
    id: "firm-foundation",
    name: pricing.packages["firm-foundation"].name,
    tagline: "For growing businesses",
    description:
      "A complete digital infrastructure with advanced features and marketing tools.",
    price: pricing.packages["firm-foundation"].displayPrice,
    features: [
      "Everything from Solid Start",
      "Advanced features",
      "Marketing integrations",
      "Analytics dashboard",
      "Premium support",
    ],
    popular: pricing.packages["firm-foundation"].popular,
  },
];

export const packagesByLocale: Record<Locale, Package[]> = {
  nl: packagesNL,
  en: packagesEN,
};

// Helper function to get packages by locale
export function getPackages(locale: Locale = defaultLocale): Package[] {
  return packagesByLocale[locale] || packagesByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const packages = packagesNL;
