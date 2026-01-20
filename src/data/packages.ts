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
    name: "Solid Start",
    tagline: "Perfect voor starters",
    description:
      "Een professionele website met alles wat je nodig hebt om online zichtbaar te zijn.",
    price: "Vanaf € 2.500",
    features: [
      "Custom design",
      "Responsive website",
      "Basis SEO",
      "Contact formulier",
      "1 jaar hosting inclusief",
    ],
  },
  {
    id: "firm-foundation",
    name: "Firm Foundation",
    tagline: "Voor groeiende bedrijven",
    description:
      "Een complete digitale infrastructuur met geavanceerde functionaliteiten en marketing tools.",
    price: "Vanaf € 7.500",
    features: [
      "Alles van Solid Start",
      "Geavanceerde functionaliteiten",
      "Marketing integraties",
      "Analytics dashboard",
      "Premium support",
    ],
    popular: true,
  },
];
