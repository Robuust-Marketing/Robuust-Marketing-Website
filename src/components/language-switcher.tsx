"use client";

import { useLocale } from "next-intl";
import { Link, type Locale, type Pathnames } from "@/i18n/routing";
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

  const blogHref = getBlogTranslatedHref();
  const basePath = getBasePathname();
  const blogSlugMatch = nextPathname.match(/^(\/en)?\/blog\/([^/]+)$/);
  const currentSlug = blogSlugMatch?.[2];

  // Determine the href for the other locale
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
