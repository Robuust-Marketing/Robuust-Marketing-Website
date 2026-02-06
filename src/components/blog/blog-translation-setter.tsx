"use client";

import { useEffect } from "react";
import { useBlogTranslation } from "@/contexts/blog-translation-context";

interface BlogTranslations {
  nl?: string;
  en?: string;
}

interface BlogTranslationSetterProps {
  translations?: BlogTranslations;
  currentSlug: string;
  currentLocale: "nl" | "en";
  categorySlug?: string;
}

export function BlogTranslationSetter({
  translations,
  currentSlug,
  currentLocale,
  categorySlug,
}: BlogTranslationSetterProps) {
  const { setTranslations } = useBlogTranslation();

  useEffect(() => {
    // Build the full translations object including the current locale
    const fullTranslations: BlogTranslations = {
      ...translations,
      [currentLocale]: currentSlug,
    };

    setTranslations(fullTranslations, categorySlug);

    // Clean up when unmounting
    return () => {
      setTranslations(null);
    };
  }, [translations, currentSlug, currentLocale, categorySlug, setTranslations]);

  // This component doesn't render anything
  return null;
}
