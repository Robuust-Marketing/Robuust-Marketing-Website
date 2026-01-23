"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";

interface BlogTranslations {
  nl?: string;
  en?: string;
}

interface BlogTranslationContextValue {
  translations: BlogTranslations | null;
  setTranslations: (translations: BlogTranslations | null) => void;
  getTranslatedPath: (currentLocale: Locale, targetLocale: Locale, currentPath: string) => string;
}

const BlogTranslationContext = createContext<BlogTranslationContextValue | null>(null);

export function BlogTranslationProvider({ children }: { children: ReactNode }) {
  const [translations, setTranslations] = useState<BlogTranslations | null>(null);

  const getTranslatedPath = useCallback(
    (currentLocale: Locale, targetLocale: Locale, currentPath: string): string => {
      // Only handle blog paths
      const blogMatch = currentPath.match(/^(\/en)?\/blog\/([^/]+)$/);
      if (!blogMatch || !translations) {
        // Not a blog path or no translations, use default behavior
        return null as unknown as string;
      }

      const currentSlug = blogMatch[2];
      const targetSlug = translations[targetLocale];

      if (targetSlug) {
        // We have a translated slug
        const basePath = targetLocale === "nl" ? "" : "/en";
        return `${basePath}/blog/${targetSlug}`;
      }

      // No translation available, return null to indicate fallback to default behavior
      return null as unknown as string;
    },
    [translations]
  );

  return (
    <BlogTranslationContext.Provider value={{ translations, setTranslations, getTranslatedPath }}>
      {children}
    </BlogTranslationContext.Provider>
  );
}

export function useBlogTranslation() {
  const context = useContext(BlogTranslationContext);
  if (!context) {
    throw new Error("useBlogTranslation must be used within a BlogTranslationProvider");
  }
  return context;
}

export function useBlogTranslationOptional() {
  return useContext(BlogTranslationContext);
}
