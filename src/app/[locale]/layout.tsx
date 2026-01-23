import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { locales, type Locale } from "@/i18n/config";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-N97Z9CF";
const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID || "";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Robuust Marketing | High-End Web Development & Hosting",
    en: "Robuust Marketing | High-End Web Development & Hosting",
  };

  const descriptions = {
    nl: "Premium web development en hosting voor MKB bedrijven. Waterdichte SLA's, 70+ websites beheerd, maatwerk oplossingen met React en WordPress.",
    en: "Premium web development and hosting for SMBs. Bulletproof SLAs, 70+ websites managed, custom solutions with React and WordPress.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      "web development",
      "hosting",
      locale === "nl" ? "MKB" : "SMB",
      "WordPress",
      "React",
      "SLA",
      "Cloudflare",
      "NGINX",
    ],
    authors: [{ name: "Robuust Marketing" }],
    openGraph: {
      type: "website",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      title: titles[locale],
      description: descriptions[locale],
      siteName: "Robuust Marketing",
    },
    alternates: {
      languages: {
        nl: "/",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/*
          Google Consent Mode v2 - MOET EERST laden
          Dit zet de default consent state op "denied" voor alle categorieën
          Cookiebot zal dit updaten naar "granted" wanneer gebruiker toestemming geeft
        */}
        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              // Consent Mode v2 - default denied (AVG-compliant)
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });

              // URL passthrough voor betere attributie zonder cookies
              gtag('set', 'url_passthrough', true);

              // Ads data redaction wanneer consent denied is
              gtag('set', 'ads_data_redaction', true);
            `,
          }}
        />

        {/* Cookiebot - GDPR Cookie Consent (laadt na consent defaults) */}
        {COOKIEBOT_ID && (
          <Script
            id="cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={COOKIEBOT_ID}
            data-blockingmode="auto"
            data-consentmode="enabled"
            strategy="beforeInteractive"
          />
        )}

        {/* Google Tag Manager (laadt na Cookiebot) */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="nl" href="https://robuustmarketing.nl/" />
        <link rel="alternate" hrefLang="en" href="https://robuustmarketing.nl/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://robuustmarketing.nl/" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <NextIntlClientProvider messages={messages}>
          {/* Navigation */}
          <Header />

          {/* Main Content */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
