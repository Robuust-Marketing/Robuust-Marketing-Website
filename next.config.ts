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
];

// Kennisbank guides with different slugs per locale (NL category/slug | EN slug)
const kennisbankSlugMappings = [
  ["development", "git-versiebeheer-basics", "git-version-control-basics"],
  ["development", "next-js-vs-traditionele-websites", "next-js-vs-traditional-websites"],
  ["development", "react-fundamenten", "react-fundamentals"],
  ["development", "website-performance-optimalisatie", "website-performance-optimization"],
  ["hosting", "webhosting-kiezen-beginners", "web-hosting-for-beginners"],
  ["hosting", "website-beveiliging-basics", "website-security-basics"],
  ["seo", "keyword-research-strategie", "keyword-research-strategy"],
  ["seo", "lokale-seo-strategie", "local-seo-strategy"],
  ["seo", "on-page-seo-optimalisatie", "on-page-seo-optimization"],
  ["seo", "technische-seo-checklist", "technical-seo-checklist"],
  ["social-media", "instagram-voor-bedrijven", "instagram-for-business"],
  ["social-media", "linkedin-strategie-b2b", "linkedin-b2b-strategy"],
  ["social-media", "waarom-social-media-belangrijk", "why-social-media-matters"],
];

// Generate redirects for wrong slug usage on opposite locale
function generateSlugRedirects() {
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];

  // Blog redirects
  for (const [nlSlug, enSlug] of blogSlugMappings) {
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

  // Kennisbank redirects
  for (const [category, nlSlug, enSlug] of kennisbankSlugMappings) {
    // EN path (resources) with NL slug → EN path with EN slug
    redirects.push({
      source: `/en/resources/${category}/${nlSlug}`,
      destination: `/en/resources/${category}/${enSlug}`,
      permanent: true,
    });
    // NL path (kennisbank) with EN slug → NL path with NL slug
    redirects.push({
      source: `/nl/kennisbank/${category}/${enSlug}`,
      destination: `/nl/kennisbank/${category}/${nlSlug}`,
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
