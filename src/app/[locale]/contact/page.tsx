import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { type Locale } from "@/i18n/config";
import { generateAlternates } from "@/lib/metadata";
import ContactPageClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    nl: "Contact | Robuust Marketing",
    en: "Contact Us | Robuust Marketing",
  };

  const descriptions = {
    nl: "Neem contact op met Robuust Marketing. Bel ons, mail of vul het contactformulier in. Wij reageren binnen 24 uur op werkdagen.",
    en: "Get in touch with Robuust Marketing. Call us, email or fill in the contact form. We respond within 24 hours on business days.",
  };

  const alternates = generateAlternates("/contact", locale);

  return {
    title: titles[locale as Locale] || titles.nl,
    description: descriptions[locale as Locale] || descriptions.nl,
    alternates,
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
      url: alternates.canonical,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Robuust Marketing",
        },
      ],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <ContactPageClient />;
}
