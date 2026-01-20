import {
  Palette,
  Code2,
  Server,
  Wrench,
  BarChart3,
  Mail,
  Megaphone,
  Fingerprint,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "design",
    name: "Design",
    icon: Palette,
    description:
      "Op maat gemaakte UI/UX design die jouw merkidentiteit vastlegt en bezoekers omzet in klanten.",
    features: ["Custom webdesign", "UI/UX optimalisatie", "Brand identity", "Responsive design"],
    href: "/diensten#design",
  },
  {
    id: "development",
    name: "Development",
    icon: Code2,
    description:
      "Moderne websites gebouwd met React, Next.js en TypeScript voor razendsnelle performance.",
    features: ["Next.js & React", "TypeScript", "Headless CMS", "API integraties"],
    href: "/diensten#development",
  },
  {
    id: "hosting",
    name: "Hosting",
    icon: Server,
    description:
      "Enterprise-grade infrastructuur met NGINX en Cloudflare op dedicated servers in Europa.",
    features: ["Dedicated servers", "99.9% uptime", "SSL certificaten", "CDN & caching"],
    href: "/diensten#hosting",
  },
  {
    id: "maintenance",
    name: "Onderhoud",
    icon: Wrench,
    description:
      "Proactief website onderhoud met waterdichte SLA's. Van updates tot security monitoring.",
    features: ["Plugin updates", "Security monitoring", "Backups", "Performance checks"],
    href: "/diensten/onderhoud",
  },
  {
    id: "tracking",
    name: "Tracking & Analytics",
    icon: BarChart3,
    description:
      "Geavanceerde analytics met GA4, Meta Pixel en first-party tracking via Taggrs.",
    features: ["GA4 setup", "Meta Pixel", "First-party tracking", "Conversie tracking"],
    href: "/diensten#tracking",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    icon: Mail,
    description:
      "Effectieve email campagnes die converteren. Van nieuwsbrieven tot geautomatiseerde flows.",
    features: ["Email campagnes", "Automatisering", "A/B testing", "Segmentatie"],
    href: "/diensten#email-marketing",
  },
  {
    id: "online-marketing",
    name: "Online Marketing",
    icon: Megaphone,
    description:
      "Full-stack digital marketing inclusief Meta, TikTok en Google Ads via Hello Its Me.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "Remarketing"],
    href: "/diensten#online-marketing",
  },
  {
    id: "branding",
    name: "Branding",
    icon: Fingerprint,
    description:
      "Sterke merkidentiteit die blijft hangen. Van logo tot complete brand guidelines.",
    features: ["Logo design", "Brand guidelines", "Huisstijl", "Visual identity"],
    href: "/diensten#branding",
  },
  {
    id: "seo",
    name: "SEO",
    icon: Search,
    description:
      "Organisch beter gevonden worden in Google met technische SEO en content optimalisatie.",
    features: ["Technische SEO", "Content optimalisatie", "Linkbuilding", "Local SEO"],
    href: "/diensten#seo",
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users,
    description:
      "Klantrelaties optimaliseren met slimme CRM integraties en automatiseringen.",
    features: ["CRM setup", "Integraties", "Automatisering", "Lead management"],
    href: "/diensten#crm",
  },
];
