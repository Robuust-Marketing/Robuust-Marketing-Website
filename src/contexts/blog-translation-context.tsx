"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";

interface BlogTranslations {
  nl?: string;
  en?: string;
}

interface BlogTranslationContextValue {
  translations: BlogTranslations | null;
  categorySlug?: string;
  setTranslations: (translations: BlogTranslations | null, categorySlug?: string) => void;
  getTranslatedPath: (currentLocale: Locale, targetLocale: Locale, currentPath: string) => string;
}

const BlogTranslationContext = createContext<BlogTranslationContextValue | null>(null);

export function BlogTranslationProvider({ children }: { children: ReactNode }) {
  const [translations, setTranslationsState] = useState<BlogTranslations | null>(null);
  const [categorySlug, setCategorySlug] = useState<string | undefined>();

  const setTranslations = useCallback((translations: BlogTranslations | null, catSlug?: string) => {
    setTranslationsState(translations);
    setCategorySlug(catSlug);
  }, []);

  const getTranslatedPath = useCallback(
    (currentLocale: Locale, targetLocale: Locale, currentPath: string): string => {
      // Match blog post paths: /blog/[category]/[slug]
      const blogMatch = currentPath.match(/^(\/en|\/nl)?\/blog\/([^/]+)\/([^/]+)$/);
      if (!blogMatch || !translations) {
        return null as unknown as string;
      }

      const targetSlug = translations[targetLocale];

      if (targetSlug) {
        const basePath = targetLocale === "nl" ? "" : "/en";
        // categorySlug is already locale-specific from context
        const catSlug = categorySlug || blogMatch[2];
        return `${basePath}/blog/${catSlug}/${targetSlug}`;
      }

      return null as unknown as string;
    },
    [translations, categorySlug]
  );

  return (
    <BlogTranslationContext.Provider value={{ translations, categorySlug, setTranslations, getTranslatedPath }}>
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
