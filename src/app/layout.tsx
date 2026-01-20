import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const COOKIEBOT_ID = process.env.NEXT_PUBLIC_COOKIEBOT_ID || "";

export const metadata: Metadata = {
  title: "Robuust Marketing | High-End Web Development & Hosting",
  description:
    "Premium web development en hosting voor MKB bedrijven. Waterdichte SLA's, 70+ websites beheerd, maatwerk oplossingen met React en WordPress.",
  keywords: [
    "web development",
    "hosting",
    "MKB",
    "WordPress",
    "React",
    "SLA",
    "Cloudflare",
    "NGINX",
  ],
  authors: [{ name: "Robuust Marketing" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    title: "Robuust Marketing | High-End Web Development & Hosting",
    description:
      "Premium web development en hosting voor MKB bedrijven met waterdichte SLA's.",
    siteName: "Robuust Marketing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        {/* Cookiebot - GDPR Cookie Consent */}
        {COOKIEBOT_ID && (
          <Script
            id="cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={COOKIEBOT_ID}
            data-blockingmode="auto"
            strategy="beforeInteractive"
          />
        )}

        {/* Google Tag Manager */}
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

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
