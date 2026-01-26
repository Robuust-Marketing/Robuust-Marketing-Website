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
  Share2,
  type LucideIcon,
} from "lucide-react";
import { type Locale, defaultLocale } from "@/i18n/config";

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  href: string;
}

const servicesNL: Service[] = [
  {
    id: "design",
    name: "Design",
    icon: Palette,
    description:
      "Op maat gemaakte UI/UX design die jouw merkidentiteit vastlegt en bezoekers omzet in klanten.",
    features: ["Custom webdesign", "UI/UX optimalisatie", "Brand identity", "Responsive design"],
    href: "/diensten/design",
  },
  {
    id: "development",
    name: "Development",
    icon: Code2,
    description:
      "Moderne websites gebouwd met React, Next.js en TypeScript voor razendsnelle performance.",
    features: ["Next.js & React", "TypeScript", "Headless CMS", "API integraties"],
    href: "/diensten/development",
  },
  {
    id: "hosting",
    name: "Hosting",
    icon: Server,
    description:
      "Enterprise-grade infrastructuur met NGINX en Cloudflare op dedicated servers in Europa.",
    features: ["Dedicated servers", "99.9% uptime", "SSL certificaten", "CDN & caching"],
    href: "/diensten/hosting",
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
    href: "/diensten/tracking",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    icon: Mail,
    description:
      "Effectieve email campagnes die converteren. Van nieuwsbrieven tot geautomatiseerde flows.",
    features: ["Email campagnes", "Automatisering", "A/B testing", "Segmentatie"],
    href: "/diensten/email-marketing",
  },
  {
    id: "online-marketing",
    name: "Online Marketing",
    icon: Megaphone,
    description:
      "Full-stack digital marketing inclusief Meta, TikTok en Google Ads via Hello Its Me.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "Remarketing"],
    href: "/diensten/online-marketing",
  },
  {
    id: "branding",
    name: "Branding",
    icon: Fingerprint,
    description:
      "Sterke merkidentiteit die blijft hangen. Van logo tot complete brand guidelines.",
    features: ["Logo design", "Brand guidelines", "Huisstijl", "Visual identity"],
    href: "/diensten/branding",
  },
  {
    id: "seo",
    name: "SEO",
    icon: Search,
    description:
      "Organisch beter gevonden worden in Google met technische SEO en content optimalisatie.",
    features: ["Technische SEO", "Content optimalisatie", "Linkbuilding", "Local SEO"],
    href: "/diensten/seo",
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users,
    description:
      "Klantrelaties optimaliseren met slimme CRM integraties en automatiseringen.",
    features: ["CRM setup", "Integraties", "Automatisering", "Lead management"],
    href: "/diensten/crm",
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: Share2,
    description:
      "Complete social media management inclusief content creatie, account setup en advertentie koppeling.",
    features: ["Content creatie", "Account setup", "Advertentie koppeling", "Community management"],
    href: "/diensten/social-media",
  },
];

const servicesEN: Service[] = [
  {
    id: "design",
    name: "Design",
    icon: Palette,
    description:
      "Custom UI/UX design that captures your brand identity and converts visitors into customers.",
    features: ["Custom web design", "UI/UX optimization", "Brand identity", "Responsive design"],
    href: "/services/design",
  },
  {
    id: "development",
    name: "Development",
    icon: Code2,
    description:
      "Modern websites built with React, Next.js and TypeScript for lightning-fast performance.",
    features: ["Next.js & React", "TypeScript", "Headless CMS", "API integrations"],
    href: "/services/development",
  },
  {
    id: "hosting",
    name: "Hosting",
    icon: Server,
    description:
      "Enterprise-grade infrastructure with NGINX and Cloudflare on dedicated European servers.",
    features: ["Dedicated servers", "99.9% uptime", "SSL certificates", "CDN & caching"],
    href: "/services/hosting",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: Wrench,
    description:
      "Proactive website maintenance with bulletproof SLAs. From updates to security monitoring.",
    features: ["Plugin updates", "Security monitoring", "Backups", "Performance checks"],
    href: "/services/maintenance",
  },
  {
    id: "tracking",
    name: "Tracking & Analytics",
    icon: BarChart3,
    description:
      "Advanced analytics with GA4, Meta Pixel and first-party tracking via Taggrs.",
    features: ["GA4 setup", "Meta Pixel", "First-party tracking", "Conversion tracking"],
    href: "/services/tracking",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    icon: Mail,
    description:
      "Effective email campaigns that convert. From newsletters to automated flows.",
    features: ["Email campaigns", "Automation", "A/B testing", "Segmentation"],
    href: "/services/email-marketing",
  },
  {
    id: "online-marketing",
    name: "Online Marketing",
    icon: Megaphone,
    description:
      "Full-stack digital marketing including Meta, TikTok and Google Ads via Hello Its Me.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "Remarketing"],
    href: "/services/online-marketing",
  },
  {
    id: "branding",
    name: "Branding",
    icon: Fingerprint,
    description:
      "Strong brand identity that sticks. From logo to complete brand guidelines.",
    features: ["Logo design", "Brand guidelines", "Corporate identity", "Visual identity"],
    href: "/services/branding",
  },
  {
    id: "seo",
    name: "SEO",
    icon: Search,
    description:
      "Get found organically in Google with technical SEO and content optimization.",
    features: ["Technical SEO", "Content optimization", "Link building", "Local SEO"],
    href: "/services/seo",
  },
  {
    id: "crm",
    name: "CRM",
    icon: Users,
    description:
      "Optimize customer relationships with smart CRM integrations and automations.",
    features: ["CRM setup", "Integrations", "Automation", "Lead management"],
    href: "/services/crm",
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: Share2,
    description:
      "Complete social media management including content creation, account setup and ad account linking.",
    features: ["Content creation", "Account setup", "Ad account linking", "Community management"],
    href: "/services/social-media",
  },
];

export const servicesByLocale: Record<Locale, Service[]> = {
  nl: servicesNL,
  en: servicesEN,
};

// Helper function to get services by locale
export function getServices(locale: Locale = defaultLocale): Service[] {
  return servicesByLocale[locale] || servicesByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const services = servicesNL;
