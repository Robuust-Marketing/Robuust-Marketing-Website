import { pricing } from "./pricing";

export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const packages: Package[] = [
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
