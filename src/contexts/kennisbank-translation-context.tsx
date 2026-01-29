"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface KennisbankTranslations {
  nl?: string;
  en?: string;
}

interface KennisbankTranslationContextValue {
  translations: KennisbankTranslations | null;
  category: string | null;
  setTranslationData: (translations: KennisbankTranslations | null, category: string | null) => void;
}

const KennisbankTranslationContext = createContext<KennisbankTranslationContextValue | null>(null);

export function KennisbankTranslationProvider({ children }: { children: ReactNode }) {
  const [translations, setTranslations] = useState<KennisbankTranslations | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const setTranslationData = (t: KennisbankTranslations | null, c: string | null) => {
    setTranslations(t);
    setCategory(c);
  };

  return (
    <KennisbankTranslationContext.Provider value={{ translations, category, setTranslationData }}>
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
