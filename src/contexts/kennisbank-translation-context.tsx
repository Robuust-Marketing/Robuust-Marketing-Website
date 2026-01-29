"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface KennisbankTranslations {
  nl?: string;
  en?: string;
}

interface KennisbankTranslationContextValue {
  translations: KennisbankTranslations | null;
  category: string | null;
  setTranslations: (translations: KennisbankTranslations | null, category: string | null) => void;
}

const KennisbankTranslationContext = createContext<KennisbankTranslationContextValue | null>(null);

export function KennisbankTranslationProvider({ children }: { children: ReactNode }) {
  const [translations, setTranslationsState] = useState<KennisbankTranslations | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const setTranslations = (translations: KennisbankTranslations | null, category: string | null) => {
    setTranslationsState(translations);
    setCategory(category);
  };

  return (
    <KennisbankTranslationContext.Provider value={{ translations, category, setTranslations }}>
      {children}
    </KennisbankTranslationContext.Provider>
  );
}

export function useKennisbankTranslation() {
  const context = useContext(KennisbankTranslationContext);
  if (!context) {
    throw new Error("useKennisbankTranslation must be used within a KennisbankTranslationProvider");
  }
  return context;
}

export function useKennisbankTranslationOptional() {
  return useContext(KennisbankTranslationContext);
}
