"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("error");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Google site search
      const query = encodeURIComponent(`site:robuustmarketing.nl ${searchQuery}`);
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">{t("notFound.title")}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t("notFound.description")}
          </p>

          {/* Search form */}
          <form onSubmit={handleSearch} className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("notFound.searchPlaceholder")}
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>
          </form>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              {t("notFound.backHome")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background text-foreground font-medium hover:bg-surface transition-colors"
            >
              {t("notFound.contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
