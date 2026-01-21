export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: "technology" | "marketing" | "hosting" | "security";
  url?: string;
}

export const partners: Partner[] = [
  {
    id: "cloudflare",
    name: "Cloudflare",
    logo: "/partners/cloudflare.svg",
    description:
      "CDN en security partner voor optimale performance en bescherming tegen DDoS aanvallen.",
    category: "security",
    url: "https://cloudflare.com",
  },
  {
    id: "hetzner",
    name: "Hetzner",
    logo: "/partners/hetzner.svg",
    description:
      "Dedicated server partner met datacenters in Duitsland en Finland voor optimale privacy.",
    category: "hosting",
    url: "https://hetzner.com",
  },
  {
    id: "resend",
    name: "Resend",
    logo: "/partners/resend.svg",
    description:
      "Email infrastructuur partner voor betrouwbare transactionele emails.",
    category: "technology",
    url: "https://resend.com",
  },
  {
    id: "hello-its-me",
    name: "Hello Its Me",
    logo: "/partners/hello-its-me.svg",
    description:
      "Marketing partner voor Google Ads, Meta Ads en TikTok campagnes.",
    category: "marketing",
    url: "https://helloitsme.nl",
  },
  {
    id: "taggrs",
    name: "Taggrs",
    logo: "/partners/taggrs.svg",
    description:
      "First-party tracking partner voor privacy-vriendelijke analytics.",
    category: "technology",
    url: "https://taggrs.io",
  },
];

export const partnerCategories = {
  technology: "Technologie",
  marketing: "Marketing",
  hosting: "Hosting",
  security: "Security",
};
