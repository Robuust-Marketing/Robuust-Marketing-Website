"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "service" | "portfolio" | "blog" | "kennisbank";
}

const typeLabels: Record<string, string> = {
  service: "Dienst",
  portfolio: "Portfolio",
  blog: "Blog",
  kennisbank: "Kennisbank",
};

export default function NotFound() {
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
        `/api/search?q=${encodeURIComponent(query)}&locale=nl&limit=6`
      );
      const data = await response.json();
      setResults(data.results || []);
      setHasSearched(true);
    } catch {
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

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
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center px-4 w-full max-w-lg">
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Pagina niet gevonden</h2>
          <p className="text-muted-foreground mb-8">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>

          {/* Search form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              {isSearching ? (
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              )}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek op de website..."
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>
          </form>

          {/* Search results */}
          {hasSearched && (
            <div className="mb-8">
              {results.length > 0 ? (
                <div className="text-left bg-surface rounded-lg border border-border overflow-hidden">
                  <div className="px-4 py-2 border-b border-border text-sm text-muted-foreground">
                    {results.length} resultaten gevonden
                  </div>
                  <ul className="divide-y divide-border">
                    {results.map((result, index) => (
                      <li key={index}>
                        <Link
                          href={`/nl${result.href}`}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-surface-hover transition-colors"
                        >
                          <div className="min-w-0">
                            <div className="font-medium text-foreground truncate">
                              {result.title}
                            </div>
                            <div className="text-sm text-muted-foreground truncate">
                              {result.description}
                            </div>
                            <div className="text-xs text-accent mt-1">
                              {typeLabels[result.type]}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-muted-foreground">Geen resultaten gevonden</p>
              )}
            </div>
          )}

          <Link
            href="/nl"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            Terug naar home
          </Link>
        </div>
      </body>
    </html>
  );
}
