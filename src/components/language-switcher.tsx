"use client";

import { useLocale } from "next-intl";
import { Link, usePathname, type Locale, type Pathnames } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useBlogTranslationOptional } from "@/contexts/blog-translation-context";
import { usePathname as useNextPathname } from "next/navigation";

interface LanguageSwitcherProps {
  className?: string;
}

// Type for dynamic route hrefs
type DynamicHref =
  | { pathname: "/blog/[slug]"; params: { slug: string } }
  | { pathname: "/portfolio/[slug]"; params: { slug: string } }
  | { pathname: "/kennisbank/[category]"; params: { category: string } }
  | { pathname: "/kennisbank/[category]/[slug]"; params: { category: string; slug: string } }
  | { pathname: "/tooling/[slug]"; params: { slug: string } };

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  // usePathname from next-intl returns the canonical pathname (e.g., "/werkwijze" not "/approach")
  const pathname = usePathname();
  // useNextPathname from next/navigation returns the raw URL path for extracting dynamic segments
  const nextPathname = useNextPathname();
  const blogContext = useBlogTranslationOptional();
  const otherLocale: Locale = locale === "nl" ? "en" : "nl";

  // Check if we're on a blog page and have translations
  const getBlogTranslatedHref = (): { pathname: "/blog/[slug]"; params: { slug: string } } | null => {
    if (!blogContext?.translations) return null;

    // Check if this is a blog page
    const blogMatch = nextPathname.match(/^(\/en)?\/blog\/([^/]+)$/);
    if (!blogMatch) return null;

    const targetSlug = blogContext.translations[otherLocale];
    if (!targetSlug) return null;

    return { pathname: "/blog/[slug]", params: { slug: targetSlug } };
  };

  // Get href for dynamic routes that need params
  const getDynamicHref = (): DynamicHref | null => {
    // Blog: /blog/[slug]
    const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
    if (blogMatch) {
      return { pathname: "/blog/[slug]", params: { slug: blogMatch[1] } };
    }

    // Portfolio: /portfolio/[slug]
    const portfolioMatch = pathname.match(/^\/portfolio\/([^/]+)$/);
    if (portfolioMatch) {
      return { pathname: "/portfolio/[slug]", params: { slug: portfolioMatch[1] } };
    }

    // Kennisbank guide: /kennisbank/[category]/[slug]
    const kennisbankGuideMatch = pathname.match(/^\/kennisbank\/([^/]+)\/([^/]+)$/);
    if (kennisbankGuideMatch) {
      return {
        pathname: "/kennisbank/[category]/[slug]",
        params: { category: kennisbankGuideMatch[1], slug: kennisbankGuideMatch[2] },
      };
    }

    // Kennisbank category: /kennisbank/[category]
    const kennisbankCategoryMatch = pathname.match(/^\/kennisbank\/([^/]+)$/);
    if (kennisbankCategoryMatch && !["glossary"].includes(kennisbankCategoryMatch[1])) {
      return {
        pathname: "/kennisbank/[category]",
        params: { category: kennisbankCategoryMatch[1] },
      };
    }

    // Tooling: /tooling/[slug]
    const toolingMatch = pathname.match(/^\/tooling\/([^/]+)$/);
    if (toolingMatch) {
      return { pathname: "/tooling/[slug]", params: { slug: toolingMatch[1] } };
    }

    return null;
  };

  // For blog pages with translations, use the translated slug
  const blogHref = getBlogTranslatedHref();

  // For other dynamic routes, get proper href with params
  const dynamicHref = getDynamicHref();

  // Determine the href for the other locale
  // Priority: blog translation > dynamic route with params > static pathname
  const href = blogHref || dynamicHref || (pathname as Pathnames);

  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      href={href as any}
      locale={otherLocale}
      className={cn("group relative flex items-center", className)}
      aria-label={otherLocale === "nl" ? "Wissel naar Nederlands" : "Switch to English"}
    >
      {/* Toggle track */}
      <div className="relative flex items-center h-7 w-[72px] rounded-full bg-white/10 border border-white/10 hover:border-white/20 transition-colors">
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute h-5 w-8 rounded-full bg-accent transition-all duration-200 ease-out",
            locale === "nl" ? "left-1" : "left-[calc(100%-36px)]"
          )}
        />
        {/* Labels */}
        <span
          className={cn(
            "relative z-10 flex-1 text-center text-xs font-semibold transition-colors",
            locale === "nl" ? "text-white" : "text-white/50"
          )}
        >
          NL
        </span>
        <span
          className={cn(
            "relative z-10 flex-1 text-center text-xs font-semibold transition-colors",
            locale === "en" ? "text-white" : "text-white/50"
          )}
        >
          EN
        </span>
      </div>
    </Link>
  );
}

// Compact version for mobile - uses same toggle style
export function LanguageSwitcherCompact({ className }: LanguageSwitcherProps) {
  return <LanguageSwitcher className={className} />;
}
