"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations("error");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl font-bold text-accent mb-4">500</h1>
          <h2 className="text-3xl font-semibold mb-4">{t("serverError.title")}</h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t("serverError.description")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
            >
              {t("serverError.tryAgain")}
            </button>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-border bg-background text-foreground font-medium hover:bg-surface transition-colors"
            >
              {t("serverError.backHome")}
            </Link>
          </div>
          {process.env.NODE_ENV === "development" && error.digest && (
            <p className="mt-8 text-sm text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
