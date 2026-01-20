export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "den-hartog-energies",
    name: "Den Hartog Energies",
    category: "Development & Hosting",
    description:
      "Complete website ontwikkeling met custom design en managed hosting voor een duurzame energieleverancier.",
    image: "/portfolio/den-hartog-energies.jpg",
    tags: ["Next.js", "Design", "Hosting"],
    featured: true,
  },
  {
    id: "voltra-charging",
    name: "Voltra Charging",
    category: "Development & Design",
    description:
      "Moderne website voor een innovatief laadpalen bedrijf met focus op conversie en gebruikerservaring.",
    image: "/portfolio/voltra-charging.jpg",
    tags: ["React", "UI/UX", "Branding"],
    featured: true,
  },
  {
    id: "growteq",
    name: "Growteq",
    category: "Full Service",
    description:
      "Complete digitale transformatie inclusief website, branding en marketing automation.",
    image: "/portfolio/growteq.jpg",
    tags: ["Development", "Marketing", "CRM"],
    featured: true,
  },
  {
    id: "woonstudio-joy",
    name: "Woonstudio JOY",
    category: "E-commerce",
    description:
      "Stijlvolle webshop voor een interieur studio met geavanceerde productfilters en checkout.",
    image: "/portfolio/woonstudio-joy.jpg",
    tags: ["E-commerce", "Design", "SEO"],
  },
  {
    id: "bioboss",
    name: "BioBoss",
    category: "Development",
    description:
      "High-performance website voor een biologisch voedingsbedrijf met focus op snelheid en SEO.",
    image: "/portfolio/bioboss.jpg",
    tags: ["Next.js", "SEO", "Performance"],
  },
];

export const categories = [
  "Alle",
  "Development",
  "Design",
  "E-commerce",
  "Full Service",
];
