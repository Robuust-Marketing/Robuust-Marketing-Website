import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import { nextHeadersConfig } from "./src/config/cache";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Blog posts with different slugs per locale (NL slug | EN slug)
const blogSlugMappings = [
  ["5-stappen-voor-een-goede-website-analyse", "5-steps-for-website-analysis"],
  ["5-stappen-voor-online-vindbaarheid", "5-steps-to-online-visibility"],
  ["5-succes-stappen-voor-social-media", "5-success-steps-for-social-media"],
  ["ahrefs-site-audit-cloudflare-404-fixen", "fix-ahrefs-site-audit-cloudflare-404-errors"],
  ["cloudflare-beveiligen-ddos-firewall", "cloudflare-security-ddos-firewall"],
  ["cloudflare-cdn-website-sneller", "cloudflare-cdn-faster-website"],
  ["cloudflare-dns-beheer-meerdere-klanten", "cloudflare-dns-management-multiple-clients"],
  ["cloudflare-page-rules-redirect", "cloudflare-page-rules-redirects"],
  ["content-marketing-strategie-mkb", "content-marketing-strategy-smb"],
  ["core-web-vitals-uitgelegd", "core-web-vitals-explained"],
  ["email-authenticatie-spf-dkim-dmarc", "email-authentication-spf-dkim-dmarc"],
  ["goed-van-start-met-seo", "getting-started-with-seo"],
  ["lokale-seo-mkb-vindbaar", "local-seo-smb-visibility"],
  ["ux-fouten-mkb-websites", "ux-mistakes-smb-websites"],
  ["waarom-is-social-media-zo-belangrijk-voor-je-bedrijf", "why-social-media-important-for-business"],
  ["wat-kost-een-professionele-website", "professional-website-cost"],
  ["website-conversie-verhogen-mkb", "increase-website-conversion-smb"],
  ["website-onderhoud-waarom-belangrijk", "website-maintenance-why-important"],
  ["wordpress-media-beheren", "wordpress-media-management"],
  ["wordpress-menu-aanpassen", "wordpress-menu-customization"],
  ["wordpress-pagina-dupliceren", "wordpress-duplicate-page"],
  ["tiktok-hooks-video-aandacht", "tiktok-hooks-video-attention"],
  // Migrated from kennisbank (development)
  ["react-fundamenten", "react-fundamentals"],
  ["git-versiebeheer-basics", "git-version-control-basics"],
  ["next-js-vs-traditionele-websites", "next-js-vs-traditional-websites"],
  ["website-performance-optimalisatie", "website-performance-optimization"],
  // Migrated from kennisbank (seo)
  ["technische-seo-checklist", "technical-seo-checklist"],
  ["lokale-seo-strategie", "local-seo-strategy"],
  ["on-page-seo-optimalisatie", "on-page-seo-optimization"],
  ["keyword-research-strategie", "keyword-research-strategy"],
  ["website-autoriteit-linkbuilding", "website-authority-link-building"],
  // Migrated from kennisbank (hosting)
  ["cloudflare-instellen-beginners", "cloudflare-setup-beginners"],
  ["webhosting-kiezen-beginners", "web-hosting-for-beginners"],
  ["website-beveiliging-basics", "website-security-basics"],
  ["website-monitoring-beschikbaarheid", "website-monitoring-uptime"],
  // Migrated from kennisbank (social-media)
  ["instagram-voor-bedrijven", "instagram-for-business"],
  ["linkedin-strategie-b2b", "linkedin-b2b-strategy"],
  ["waarom-social-media-belangrijk", "why-social-media-matters"],
  ["social-media-contentplanning", "content-planning"],
];

// Kennisbank migration redirects - redirect old kennisbank URLs to new blog URLs
const kennisbankMigrationMappings = [
  // development
  { category: "development", nlSlug: "react-fundamenten", enSlug: "react-fundamentals" },
  { category: "development", nlSlug: "git-versiebeheer-basics", enSlug: "git-version-control-basics" },
  { category: "development", nlSlug: "next-js-vs-traditionele-websites", enSlug: "next-js-vs-traditional-websites" },
  { category: "development", nlSlug: "website-performance-optimalisatie", enSlug: "website-performance-optimization" },
  // seo
  { category: "seo", nlSlug: "technische-seo-checklist", enSlug: "technical-seo-checklist" },
  { category: "seo", nlSlug: "lokale-seo-strategie", enSlug: "local-seo-strategy" },
  { category: "seo", nlSlug: "on-page-seo-optimalisatie", enSlug: "on-page-seo-optimization" },
  { category: "seo", nlSlug: "keyword-research-strategie", enSlug: "keyword-research-strategy" },
  { category: "seo", nlSlug: "website-autoriteit-linkbuilding", enSlug: "website-authority-link-building" },
  // hosting
  { category: "hosting", nlSlug: "cloudflare-instellen-beginners", enSlug: "cloudflare-setup-beginners" },
  { category: "hosting", nlSlug: "webhosting-kiezen-beginners", enSlug: "web-hosting-for-beginners" },
  { category: "hosting", nlSlug: "website-beveiliging-basics", enSlug: "website-security-basics" },
  { category: "hosting", nlSlug: "website-monitoring-beschikbaarheid", enSlug: "website-monitoring-uptime" },
  // social-media
  { category: "social-media", nlSlug: "instagram-voor-bedrijven", enSlug: "instagram-for-business" },
  { category: "social-media", nlSlug: "linkedin-strategie-b2b", enSlug: "linkedin-b2b-strategy" },
  { category: "social-media", nlSlug: "waarom-social-media-belangrijk", enSlug: "why-social-media-matters" },
  { category: "social-media", nlSlug: "social-media-contentplanning", enSlug: "content-planning" },
];

// Generate redirects for blog slug corrections and kennisbank migration
function generateSlugRedirects() {
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];

  // Blog redirects - correct wrong locale slugs
  for (const [nlSlug, enSlug] of blogSlugMappings) {
    // Skip when slugs are identical (would cause infinite redirect loop)
    if (nlSlug === enSlug) continue;

    // EN path with NL slug → EN path with EN slug
    redirects.push({
      source: `/en/blog/${nlSlug}`,
      destination: `/en/blog/${enSlug}`,
      permanent: true,
    });
    // NL path with EN slug → NL path with NL slug
    redirects.push({
      source: `/nl/blog/${enSlug}`,
      destination: `/nl/blog/${nlSlug}`,
      permanent: true,
    });
  }

  // Kennisbank migration redirects - old kennisbank URLs → new blog URLs
  for (const { category, nlSlug, enSlug } of kennisbankMigrationMappings) {
    // NL: /kennisbank/{category}/{slug} → /blog/{slug}
    redirects.push({
      source: `/nl/kennisbank/${category}/${nlSlug}`,
      destination: `/nl/blog/${nlSlug}`,
      permanent: true,
    });
    // EN: /resources/{category}/{slug} → /blog/{slug}
    redirects.push({
      source: `/en/resources/${category}/${enSlug}`,
      destination: `/en/blog/${enSlug}`,
      permanent: true,
    });
  }

  // Kennisbank index redirects
  redirects.push({
    source: "/nl/kennisbank",
    destination: "/nl/blog",
    permanent: true,
  });
  redirects.push({
    source: "/en/resources",
    destination: "/en/blog",
    permanent: true,
  });

  // Kennisbank category redirects
  const categories = ["development", "seo", "hosting", "social-media"];
  for (const category of categories) {
    redirects.push({
      source: `/nl/kennisbank/${category}`,
      destination: "/nl/blog",
      permanent: true,
    });
    redirects.push({
      source: `/en/resources/${category}`,
      destination: "/en/blog",
      permanent: true,
    });
  }

  return redirects;
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone", // For custom server deployment (NGINX)
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Voorkom warning bij meerdere lockfiles in deployment structuur
  turbopack: {
    root: process.cwd(),
  },

  // Caching headers voor Cloudflare - zie src/config/cache.ts
  headers: async () => nextHeadersConfig,

  // Redirects for wrong locale slugs (language switcher fallback)
  redirects: async () => generateSlugRedirects(),
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withNextIntl(withMDX(nextConfig));
