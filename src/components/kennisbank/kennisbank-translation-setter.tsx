"use client";

import { useEffect } from "react";
import { useKennisbankTranslation } from "@/contexts/kennisbank-translation-context";

interface KennisbankTranslationSetterProps {
  translations?: { nl?: string; en?: string };
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
  const { setTranslationData } = useKennisbankTranslation();

  useEffect(() => {
    const fullTranslations = {
      ...translations,
      [currentLocale]: currentSlug,
    };

    setTranslationData(fullTranslations, category);

    return () => {
      setTranslationData(null, null);
    };
  }, [translations, currentSlug, currentLocale, category, setTranslationData]);

  return null;
}
