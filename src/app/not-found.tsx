"use client";

import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = encodeURIComponent(`site:robuustmarketing.nl ${searchQuery}`);
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-lg">
          <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Pagina niet gevonden</h2>
          <p className="text-muted-foreground mb-8">
            De pagina die je zoekt bestaat niet of is verplaatst.
          </p>

          {/* Search form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
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
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek op de website..."
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>
          </form>

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
