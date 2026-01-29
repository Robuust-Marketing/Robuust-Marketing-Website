"use client";

import { useEffect } from "react";
import { useKennisbankTranslation } from "@/contexts/kennisbank-translation-context";

interface KennisbankTranslations {
  nl?: string;
  en?: string;
}

interface KennisbankTranslationSetterProps {
  translations?: KennisbankTranslations;
  currentSlug: string;
  currentLocale: "nl" | "en";
  category: string;
}

export function KennisbankTranslationSetter({
  translations,
  currentSlug,
  currentLocale,
  category,
}: KennisbankTranslationSetterProps) {
  const { setTranslations } = useKennisbankTranslation();

  useEffect(() => {
    // Build the full translations object including the current locale
    const fullTranslations: KennisbankTranslations = {
      ...translations,
      [currentLocale]: currentSlug,
    };

    setTranslations(fullTranslations, category);

    // Clean up when unmounting
    return () => {
      setTranslations(null, null);
    };
  }, [translations, currentSlug, currentLocale, category, setTranslations]);

  // This component doesn't render anything
  return null;
}
