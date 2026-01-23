"use client";

import { useLocale } from "next-intl";
import { Link, routing, type Locale, type Pathnames } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBlogTranslationOptional } from "@/contexts/blog-translation-context";
import { usePathname as useNextPathname } from "next/navigation";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const nextPathname = useNextPathname();
  const blogContext = useBlogTranslationOptional();

  // Check if we're on a blog page and have translations
  const getBlogTranslatedHref = (targetLocale: Locale): { pathname: "/blog/[slug]"; params: { slug: string } } | null => {
    if (!blogContext?.translations) return null;

    // Check if this is a blog page
    const blogMatch = nextPathname.match(/^(\/en)?\/blog\/([^/]+)$/);
    if (!blogMatch) return null;

    const targetSlug = blogContext.translations[targetLocale];
    if (!targetSlug) return null;

    return { pathname: "/blog/[slug]", params: { slug: targetSlug } };
  };

  // Get the base pathname without locale prefix for next-intl
  const getBasePathname = (): Pathnames => {
    const path = nextPathname.replace(/^\/en/, "") || "/";
    // Check if path matches a known pathname pattern
    // For dynamic routes like /blog/[slug], extract the base pattern
    const blogMatch = path.match(/^\/blog\/([^/]+)$/);
    if (blogMatch) {
      return "/blog/[slug]" as Pathnames;
    }
    return path as Pathnames;
  };

  const basePath = getBasePathname();
  const blogSlugMatch = nextPathname.match(/^(\/en)?\/blog\/([^/]+)$/);
  const currentSlug = blogSlugMatch?.[2];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe className="h-4 w-4 text-white/50 mr-1" />
      {routing.locales.map((loc, index) => {
        // Check for blog-specific translation
        const blogHref = getBlogTranslatedHref(loc);

        // Determine the href - either translated blog path or regular path
        const href = blogHref || (
          currentSlug
            ? { pathname: "/blog/[slug]" as const, params: { slug: currentSlug } }
            : basePath
        );

        return (
          <span key={loc} className="flex items-center">
            {index > 0 && <span className="text-white/30 mx-1">/</span>}
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              href={href as any}
              locale={loc}
              className={cn(
                "text-sm font-medium transition-colors px-1.5 py-0.5 rounded",
                locale === loc
                  ? "text-accent bg-accent/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
              aria-label={loc === "nl" ? "Nederlands" : "English"}
            >
              {loc.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}

// Compact version for mobile
export function LanguageSwitcherCompact({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
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

  // Get the base pathname without locale prefix
  const getBasePathname = (): Pathnames => {
    const path = nextPathname.replace(/^\/en/, "") || "/";
    const blogMatch = path.match(/^\/blog\/([^/]+)$/);
    if (blogMatch) {
      return "/blog/[slug]" as Pathnames;
    }
    return path as Pathnames;
  };

  const blogHref = getBlogTranslatedHref();
  const basePath = getBasePathname();
  const blogSlugMatch = nextPathname.match(/^(\/en)?\/blog\/([^/]+)$/);
  const currentSlug = blogSlugMatch?.[2];

  // Determine the href
  const href = blogHref || (
    currentSlug
      ? { pathname: "/blog/[slug]" as const, params: { slug: currentSlug } }
      : basePath
  );

  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      href={href as any}
      locale={otherLocale}
      className={cn(
        "flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors",
        className
      )}
      aria-label={otherLocale === "nl" ? "Switch to Nederlands" : "Switch to English"}
    >
      <Globe className="h-4 w-4" />
      <span>{otherLocale === "nl" ? "Nederlands" : "English"}</span>
    </Link>
  );
}
