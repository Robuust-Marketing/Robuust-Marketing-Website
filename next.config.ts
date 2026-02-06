import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import { nextHeadersConfig } from "./src/config/cache";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Blog posts with different slugs per locale: [NL slug, EN slug, NL category slug, EN category slug]
const blogSlugMappings: [string, string, string, string][] = [
  ["5-stappen-voor-een-goede-website-analyse", "5-steps-for-website-analysis", "website", "website"],
  ["5-stappen-voor-online-vindbaarheid", "5-steps-to-online-visibility", "seo", "seo"],
  ["5-succes-stappen-voor-social-media", "5-success-steps-for-social-media", "social-media", "social-media"],
  ["ahrefs-site-audit-cloudflare-404-fixen", "fix-ahrefs-site-audit-cloudflare-404-errors", "cloudflare", "cloudflare"],
  ["cloudflare-beveiligen-ddos-firewall", "cloudflare-security-ddos-firewall", "cloudflare", "cloudflare"],
  ["cloudflare-cdn-website-sneller", "cloudflare-cdn-faster-website", "cloudflare", "cloudflare"],
  ["cloudflare-dns-beheer-meerdere-klanten", "cloudflare-dns-management-multiple-clients", "cloudflare", "cloudflare"],
  ["cloudflare-page-rules-redirect", "cloudflare-page-rules-redirects", "cloudflare", "cloudflare"],
  ["content-marketing-strategie-mkb", "content-marketing-strategy-smb", "marketing-en-seo", "marketing-and-seo"],
  ["core-web-vitals-uitgelegd", "core-web-vitals-explained", "marketing-en-seo", "marketing-and-seo"],
  ["email-authenticatie-spf-dkim-dmarc", "email-authentication-spf-dkim-dmarc", "e-mail", "email"],
  ["goed-van-start-met-seo", "getting-started-with-seo", "seo", "seo"],
  ["lokale-seo-mkb-vindbaar", "local-seo-smb-visibility", "marketing-en-seo", "marketing-and-seo"],
  ["ux-fouten-mkb-websites", "ux-mistakes-smb-websites", "mkb-tips", "smb-tips"],
  ["waarom-is-social-media-zo-belangrijk-voor-je-bedrijf", "why-social-media-important-for-business", "social-media", "social-media"],
  ["wat-kost-een-professionele-website", "professional-website-cost", "mkb-tips", "smb-tips"],
  ["website-conversie-verhogen-mkb", "increase-website-conversion-smb", "mkb-tips", "smb-tips"],
  ["website-onderhoud-waarom-belangrijk", "website-maintenance-why-important", "mkb-tips", "smb-tips"],
  ["wordpress-media-beheren", "wordpress-media-management", "wordpress", "wordpress"],
  ["wordpress-menu-aanpassen", "wordpress-menu-customization", "wordpress", "wordpress"],
  ["wordpress-pagina-dupliceren", "wordpress-duplicate-page", "wordpress", "wordpress"],
  ["tiktok-hooks-video-aandacht", "tiktok-hooks-video-attention", "social-media", "social-media"],
  // Migrated from kennisbank (development → webontwikkeling/web-development)
  ["react-fundamenten", "react-fundamentals", "webontwikkeling", "web-development"],
  ["git-versiebeheer-basics", "git-version-control-basics", "webontwikkeling", "web-development"],
  ["next-js-vs-traditionele-websites", "next-js-vs-traditional-websites", "webontwikkeling", "web-development"],
  ["website-performance-optimalisatie", "website-performance-optimization", "webontwikkeling", "web-development"],
  // Migrated from kennisbank (seo → zoekmachine-optimalisatie/search-engine-optimization)
  ["technische-seo-checklist", "technical-seo-checklist", "zoekmachine-optimalisatie", "search-engine-optimization"],
  ["lokale-seo-strategie", "local-seo-strategy", "zoekmachine-optimalisatie", "search-engine-optimization"],
  ["on-page-seo-optimalisatie", "on-page-seo-optimization", "zoekmachine-optimalisatie", "search-engine-optimization"],
  ["keyword-research-strategie", "keyword-research-strategy", "zoekmachine-optimalisatie", "search-engine-optimization"],
  ["website-autoriteit-linkbuilding", "website-authority-link-building", "zoekmachine-optimalisatie", "search-engine-optimization"],
  // Migrated from kennisbank (hosting → hosting-en-servers/hosting-and-servers)
  ["cloudflare-instellen-beginners", "cloudflare-setup-beginners", "hosting-en-servers", "hosting-and-servers"],
  ["webhosting-kiezen-beginners", "web-hosting-for-beginners", "hosting-en-servers", "hosting-and-servers"],
  ["website-beveiliging-basics", "website-security-basics", "hosting-en-servers", "hosting-and-servers"],
  ["website-monitoring-beschikbaarheid", "website-monitoring-uptime", "hosting-en-servers", "hosting-and-servers"],
  // Migrated from kennisbank (social-media → social-media-marketing)
  ["instagram-voor-bedrijven", "instagram-for-business", "social-media-marketing", "social-media-marketing"],
  ["linkedin-strategie-b2b", "linkedin-b2b-strategy", "social-media-marketing", "social-media-marketing"],
  ["waarom-social-media-belangrijk", "why-social-media-matters", "social-media-marketing", "social-media-marketing"],
  ["social-media-contentplanning", "content-planning", "social-media-marketing", "social-media-marketing"],
];

// Kennisbank migration redirects - redirect old kennisbank URLs to new blog URLs
const kennisbankMigrationMappings = [
  // development → webontwikkeling/web-development
  { oldCategory: "development", nlSlug: "react-fundamenten", enSlug: "react-fundamentals", nlCatSlug: "webontwikkeling", enCatSlug: "web-development" },
  { oldCategory: "development", nlSlug: "git-versiebeheer-basics", enSlug: "git-version-control-basics", nlCatSlug: "webontwikkeling", enCatSlug: "web-development" },
  { oldCategory: "development", nlSlug: "next-js-vs-traditionele-websites", enSlug: "next-js-vs-traditional-websites", nlCatSlug: "webontwikkeling", enCatSlug: "web-development" },
  { oldCategory: "development", nlSlug: "website-performance-optimalisatie", enSlug: "website-performance-optimization", nlCatSlug: "webontwikkeling", enCatSlug: "web-development" },
  // seo → zoekmachine-optimalisatie/search-engine-optimization
  { oldCategory: "seo", nlSlug: "technische-seo-checklist", enSlug: "technical-seo-checklist", nlCatSlug: "zoekmachine-optimalisatie", enCatSlug: "search-engine-optimization" },
  { oldCategory: "seo", nlSlug: "lokale-seo-strategie", enSlug: "local-seo-strategy", nlCatSlug: "zoekmachine-optimalisatie", enCatSlug: "search-engine-optimization" },
  { oldCategory: "seo", nlSlug: "on-page-seo-optimalisatie", enSlug: "on-page-seo-optimization", nlCatSlug: "zoekmachine-optimalisatie", enCatSlug: "search-engine-optimization" },
  { oldCategory: "seo", nlSlug: "keyword-research-strategie", enSlug: "keyword-research-strategy", nlCatSlug: "zoekmachine-optimalisatie", enCatSlug: "search-engine-optimization" },
  { oldCategory: "seo", nlSlug: "website-autoriteit-linkbuilding", enSlug: "website-authority-link-building", nlCatSlug: "zoekmachine-optimalisatie", enCatSlug: "search-engine-optimization" },
  // hosting → hosting-en-servers/hosting-and-servers
  { oldCategory: "hosting", nlSlug: "cloudflare-instellen-beginners", enSlug: "cloudflare-setup-beginners", nlCatSlug: "hosting-en-servers", enCatSlug: "hosting-and-servers" },
  { oldCategory: "hosting", nlSlug: "webhosting-kiezen-beginners", enSlug: "web-hosting-for-beginners", nlCatSlug: "hosting-en-servers", enCatSlug: "hosting-and-servers" },
  { oldCategory: "hosting", nlSlug: "website-beveiliging-basics", enSlug: "website-security-basics", nlCatSlug: "hosting-en-servers", enCatSlug: "hosting-and-servers" },
  { oldCategory: "hosting", nlSlug: "website-monitoring-beschikbaarheid", enSlug: "website-monitoring-uptime", nlCatSlug: "hosting-en-servers", enCatSlug: "hosting-and-servers" },
  // social-media → social-media-marketing
  { oldCategory: "social-media", nlSlug: "instagram-voor-bedrijven", enSlug: "instagram-for-business", nlCatSlug: "social-media-marketing", enCatSlug: "social-media-marketing" },
  { oldCategory: "social-media", nlSlug: "linkedin-strategie-b2b", enSlug: "linkedin-b2b-strategy", nlCatSlug: "social-media-marketing", enCatSlug: "social-media-marketing" },
  { oldCategory: "social-media", nlSlug: "waarom-social-media-belangrijk", enSlug: "why-social-media-matters", nlCatSlug: "social-media-marketing", enCatSlug: "social-media-marketing" },
  { oldCategory: "social-media", nlSlug: "social-media-contentplanning", enSlug: "content-planning", nlCatSlug: "social-media-marketing", enCatSlug: "social-media-marketing" },
];

// Generate redirects for blog slug corrections and kennisbank migration
function generateSlugRedirects() {
  const redirects: Array<{ source: string; destination: string; permanent: boolean }> = [];

  // Old /blog/category/[slug] → /blog/[slug] (permanent redirect from old category page URL pattern)
  redirects.push({
    source: "/:locale(nl|en)/blog/category/:slug",
    destination: "/:locale/blog/:slug",
    permanent: true,
  });

  // Blog redirects - correct wrong locale slugs (now with category in URL)
  for (const [nlSlug, enSlug, nlCatSlug, enCatSlug] of blogSlugMappings) {
    // Skip when slugs are identical (would cause infinite redirect loop)
    if (nlSlug === enSlug) continue;

    // EN path with NL slug → EN path with EN slug (with category)
    redirects.push({
      source: `/en/blog/${enCatSlug}/${nlSlug}`,
      destination: `/en/blog/${enCatSlug}/${enSlug}`,
      permanent: true,
    });
    // NL path with EN slug → NL path with NL slug (with category)
    redirects.push({
      source: `/nl/blog/${nlCatSlug}/${enSlug}`,
      destination: `/nl/blog/${nlCatSlug}/${nlSlug}`,
      permanent: true,
    });

    // Fully wrong locale: EN category + EN slug on NL path → NL category + NL slug
    if (nlCatSlug !== enCatSlug) {
      redirects.push({
        source: `/nl/blog/${enCatSlug}/${enSlug}`,
        destination: `/nl/blog/${nlCatSlug}/${nlSlug}`,
        permanent: true,
      });
      // Fully wrong locale: NL category + NL slug on EN path → EN category + EN slug
      redirects.push({
        source: `/en/blog/${nlCatSlug}/${nlSlug}`,
        destination: `/en/blog/${enCatSlug}/${enSlug}`,
        permanent: true,
      });
    }

    // Also catch old flat URLs with wrong locale slug
    // EN flat with NL slug → new categorized EN
    redirects.push({
      source: `/en/blog/${nlSlug}`,
      destination: `/en/blog/${enCatSlug}/${enSlug}`,
      permanent: true,
    });
    // NL flat with EN slug → new categorized NL
    redirects.push({
      source: `/nl/blog/${enSlug}`,
      destination: `/nl/blog/${nlCatSlug}/${nlSlug}`,
      permanent: true,
    });
  }

  // Kennisbank migration redirects - old kennisbank URLs → new categorized blog URLs
  for (const { oldCategory, nlSlug, enSlug, nlCatSlug, enCatSlug } of kennisbankMigrationMappings) {
    // NL: /kennisbank/{oldCategory}/{slug} → /blog/{nlCatSlug}/{slug}
    redirects.push({
      source: `/nl/kennisbank/${oldCategory}/${nlSlug}`,
      destination: `/nl/blog/${nlCatSlug}/${nlSlug}`,
      permanent: true,
    });
    // EN: /resources/{oldCategory}/{slug} → /blog/{enCatSlug}/{slug}
    redirects.push({
      source: `/en/resources/${oldCategory}/${enSlug}`,
      destination: `/en/blog/${enCatSlug}/${enSlug}`,
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
  const oldCategories = ["development", "seo", "hosting", "social-media"];
  for (const category of oldCategories) {
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
