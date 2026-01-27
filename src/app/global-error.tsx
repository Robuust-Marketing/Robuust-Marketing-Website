"use client";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-accent mb-4">500</h1>
          <h2 className="text-2xl font-semibold mb-4">Er ging iets mis</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Er is een onverwachte fout opgetreden. Probeer het opnieuw of neem
            contact met ons op als het probleem aanhoudt.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              Probeer opnieuw
            </button>
{/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Link component may not work in global error boundary */}
            <a
              href="/nl"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background text-foreground font-medium hover:bg-surface transition-colors"
            >
              Terug naar home
            </a>
          </div>
          {process.env.NODE_ENV === "development" && error.digest && (
            <p className="mt-8 text-sm text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
