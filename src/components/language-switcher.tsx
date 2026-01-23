"use client";

import { useLocale } from "next-intl";
import { usePathname, Link, routing, type Locale } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Globe className="h-4 w-4 text-white/50 mr-1" />
      {routing.locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && <span className="text-white/30 mx-1">/</span>}
          <Link
            href={pathname}
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
      ))}
    </div>
  );
}

// Compact version for mobile
export function LanguageSwitcherCompact({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const otherLocale: Locale = locale === "nl" ? "en" : "nl";

  return (
    <Link
      href={pathname}
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
