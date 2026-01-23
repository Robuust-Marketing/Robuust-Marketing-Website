"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, type Locale, getDutchPath } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Get the path for the other locale
  const getLocalizedPath = (targetLocale: Locale): string => {
    if (targetLocale === "nl") {
      // Going from /en/... to /...
      if (pathname.startsWith("/en")) {
        return getDutchPath(pathname);
      }
      return pathname;
    } else {
      // Going from /... to /en/...
      if (pathname.startsWith("/en")) {
        return pathname;
      }
      return `/en${pathname === "/" ? "" : pathname}`;
    }
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe className="h-4 w-4 text-white/50 mr-1" />
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && <span className="text-white/30 mx-1">/</span>}
          <Link
            href={getLocalizedPath(locale)}
            className={cn(
              "text-sm font-medium transition-colors px-1.5 py-0.5 rounded",
              currentLocale === locale
                ? "text-accent bg-accent/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
            aria-label={locale === "nl" ? "Nederlands" : "English"}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}

// Compact version for mobile
export function LanguageSwitcherCompact({ currentLocale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const otherLocale: Locale = currentLocale === "nl" ? "en" : "nl";

  const getLocalizedPath = (): string => {
    if (otherLocale === "nl") {
      if (pathname.startsWith("/en")) {
        return getDutchPath(pathname);
      }
      return pathname;
    } else {
      if (pathname.startsWith("/en")) {
        return pathname;
      }
      return `/en${pathname === "/" ? "" : pathname}`;
    }
  };

  return (
    <Link
      href={getLocalizedPath()}
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
