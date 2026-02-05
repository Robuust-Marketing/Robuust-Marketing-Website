"use client";

import { useState, useEffect, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import NextLink from "next/link";
import { Search, FileText, Briefcase, Loader2 } from "lucide-react";
import type { SearchResult } from "@/app/api/search/route";

const typeIcons = {
  service: Briefcase,
  portfolio: FileText,
  blog: FileText,
};

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("error");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const search = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}&locale=${locale}&limit=6`
      );
      const data = await response.json();
      setResults(data.results || []);
      setHasSearched(true);
    } catch {
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [locale]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      search(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchQuery);
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
          <form onSubmit={handleSubmit} className="mb-6 max-w-md mx-auto">
            <div className="relative">
              {isSearching ? (
                <Loader2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />
              ) : (
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              )}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("notFound.searchPlaceholder")}
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>
          </form>

          {/* Search results */}
          {hasSearched && (
            <div className="mb-8 max-w-md mx-auto">
              {results.length > 0 ? (
                <div className="text-left bg-surface rounded-lg border border-border overflow-hidden">
                  <div className="px-4 py-2 border-b border-border text-sm text-muted-foreground">
                    {t("notFound.resultsFound", { count: results.length })}
                  </div>
                  <ul className="divide-y divide-border">
                    {results.map((result, index) => {
                      const Icon = typeIcons[result.type];
                      // Use NextLink for dynamic hrefs from search results
                      const href = `/${locale}${result.href}`;
                      return (
                        <li key={index}>
                          <NextLink
                            href={href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-surface-hover transition-colors"
                          >
                            <Icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="font-medium text-foreground truncate">
                                {result.title}
                              </div>
                              <div className="text-sm text-muted-foreground truncate">
                                {result.description}
                              </div>
                              <div className="text-xs text-accent mt-1">
                                {t(`notFound.resultTypes.${result.type}`)}
                              </div>
                            </div>
                          </NextLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <p className="text-muted-foreground">{t("notFound.noResults")}</p>
              )}
            </div>
          )}

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              {t("notFound.backHome")}
            </Link>
            <Link
              href="/contact"
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
