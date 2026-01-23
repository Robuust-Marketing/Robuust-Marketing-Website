import { pricing, formatPrice } from "./pricing";
import { type Locale, defaultLocale } from "@/i18n/config";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  categories: string[];
}

// Dynamische prijzen uit pricing.ts
const solidStartPrice = formatPrice(pricing.packages["solid-start"].minPrice);
const firmFoundationPrice = formatPrice(
  pricing.packages["firm-foundation"].minPrice
);
const hostingSharedPrice = formatPrice(pricing.hosting.shared.price!);

const faqsNL: FAQ[] = [
  // Tarieven & Prijzen
  {
    id: "verborgen-kosten",
    question: "Zijn er verborgen kosten?",
    answer:
      "Nee, alle prijzen zijn transparant en inclusief BTW. Je betaalt precies wat je ziet, zonder verrassingen achteraf.",
    categories: ["tarieven", "algemeen"],
  },
  {
    id: "upgraden-downgraden",
    question: "Kan ik tussentijds upgraden of downgraden?",
    answer:
      "Ja, je kunt op elk moment upgraden naar een hoger pakket. Downgraden kan aan het einde van je contractperiode.",
    categories: ["tarieven", "hosting"],
  },
  {
    id: "maatwerk-offerte",
    question: "Wat als mijn project niet in een standaard pakket past?",
    answer:
      "We maken graag een offerte op maat. Neem contact op voor een vrijblijvend gesprek over je specifieke wensen.",
    categories: ["tarieven", "algemeen"],
  },
  {
    id: "betalingsregelingen",
    question: "Bieden jullie betalingsregelingen aan?",
    answer:
      "Ja, voor grotere projecten kunnen we een betalingsregeling afspreken. Meestal werken we met 50% aanbetaling en 50% bij oplevering.",
    categories: ["tarieven", "betalingen"],
  },
  {
    id: "betaalmethodes",
    question: "Welke betaalmethodes accepteren jullie?",
    answer:
      "We accepteren iDEAL, bankoverschrijving en creditcard (via Stripe).",
    categories: ["betalingen"],
  },
  {
    id: "factuur-bekijken",
    question: "Hoe kan ik mijn factuur bekijken?",
    answer:
      "Facturen worden per email verstuurd. Je kunt ook contact opnemen voor een kopie.",
    categories: ["betalingen"],
  },

  // Website & Kosten
  {
    id: "wat-kost-website",
    question: "Wat kost een website bij Robuust?",
    answer: `Onze website pakketten beginnen vanaf ${solidStartPrice} voor een Solid Start pakket. Voor grotere projecten met meer functionaliteiten start het Firm Foundation pakket vanaf ${firmFoundationPrice}. Neem contact op voor een offerte op maat.`,
    categories: ["tarieven", "algemeen"],
  },
  {
    id: "hoe-lang-duurt-project",
    question: "Hoe lang duurt een project?",
    answer:
      "Een standaard website is binnen 4-6 weken live. Complexere projecten met maatwerk functionaliteiten kunnen 8-12 weken duren. We maken altijd een realistische planning die we met je doorspreken.",
    categories: ["algemeen", "proces"],
  },
  {
    id: "onderhoud-aanbod",
    question: "Bieden jullie ook onderhoud?",
    answer: `Ja, we bieden verschillende hosting & onderhoud pakketten aan. Vanaf ${hostingSharedPrice}/maand verzorgen we hosting, backups, updates en monitoring zodat jij je kunt focussen op je business.`,
    categories: ["hosting", "algemeen"],
  },

  // Hosting & Technisch
  {
    id: "website-bewerken",
    question: "Hoe kan ik mijn website bewerken?",
    answer:
      "Je kunt inloggen op je CMS dashboard via yourdomain.nl/admin. Als je hulp nodig hebt, neem dan contact met ons op.",
    categories: ["hosting", "technisch"],
  },
  {
    id: "storing-wat-doen",
    question: "Wat moet ik doen bij een storing?",
    answer:
      "Neem direct contact met ons op via support@robuustmarketing.nl of bel ons. Bij kritieke storingen reageren we binnen 1 uur.",
    categories: ["hosting", "support"],
  },
  {
    id: "backup-frequentie",
    question: "Hoe vaak worden er backups gemaakt?",
    answer:
      "We maken dagelijks automatische backups van je website. Deze worden 30 dagen bewaard.",
    categories: ["hosting", "technisch"],
  },
  {
    id: "website-langzaam",
    question: "Mijn website laadt langzaam, wat kan ik doen?",
    answer:
      "Probeer eerst je cache te legen. Blijft het probleem bestaan? Neem dan contact met ons op voor een performance check.",
    categories: ["technisch", "support"],
  },
  {
    id: "eigen-domein",
    question: "Kan ik mijn eigen domeinnaam gebruiken?",
    answer:
      "Ja, je kunt je eigen domeinnaam gebruiken of een nieuwe registreren via ons.",
    categories: ["hosting", "technisch"],
  },

  // SEO & Marketing
  {
    id: "seo-inbegrepen",
    question: "Is SEO inbegrepen bij een website?",
    answer:
      "Basis SEO is inbegrepen in al onze pakketten: technische optimalisatie, meta tags, en snelle laadtijden. Voor uitgebreide SEO campagnes met content creatie en linkbuilding bieden we aanvullende diensten aan.",
    categories: ["seo", "algemeen"],
  },
  {
    id: "google-adverteren",
    question: "Kunnen jullie ook helpen met Google Ads?",
    answer:
      "Ja, via ons partnerbureau Hello Its Me verzorgen we complete online marketing campagnes inclusief Google Ads, Meta Ads en meer.",
    categories: ["marketing"],
  },

  // Proces & Samenwerking
  {
    id: "wat-nodig-voor-start",
    question: "Wat hebben jullie nodig om te starten?",
    answer:
      "We beginnen met een intake gesprek om je wensen en doelen te bespreken. Daarna hebben we je logo, huisstijl en content (teksten en beelden) nodig. Geen content? We kunnen ook daarbij helpen.",
    categories: ["proces", "algemeen"],
  },
  {
    id: "revisies",
    question: "Hoeveel revisies zijn inbegrepen?",
    answer:
      "In onze pakketten zijn 2 revisierondes inbegrepen. We werken net zo lang door tot je tevreden bent - extra revisies zijn tegen uurtarief.",
    categories: ["proces", "tarieven"],
  },
  {
    id: "eigenaarschap-website",
    question: "Van wie is de website na oplevering?",
    answer:
      "De website is volledig van jou na oplevering. Je krijgt alle bronbestanden en toegang tot het CMS. Wil je later overstappen? Geen probleem.",
    categories: ["algemeen", "proces"],
  },
];

// English FAQs
const faqsEN: FAQ[] = [
  // Pricing & Rates
  {
    id: "verborgen-kosten",
    question: "Are there any hidden costs?",
    answer:
      "No, all prices are transparent and include VAT. You pay exactly what you see, no surprises afterward.",
    categories: ["tarieven", "algemeen"],
  },
  {
    id: "upgraden-downgraden",
    question: "Can I upgrade or downgrade during my contract?",
    answer:
      "Yes, you can upgrade to a higher package at any time. Downgrading is possible at the end of your contract period.",
    categories: ["tarieven", "hosting"],
  },
  {
    id: "maatwerk-offerte",
    question: "What if my project doesn't fit a standard package?",
    answer:
      "We're happy to create a custom quote. Contact us for a no-obligation conversation about your specific needs.",
    categories: ["tarieven", "algemeen"],
  },
  {
    id: "betalingsregelingen",
    question: "Do you offer payment plans?",
    answer:
      "Yes, for larger projects we can arrange a payment plan. We typically work with 50% upfront and 50% upon delivery.",
    categories: ["tarieven", "betalingen"],
  },
  {
    id: "betaalmethodes",
    question: "What payment methods do you accept?",
    answer:
      "We accept iDEAL, bank transfer and credit card (via Stripe).",
    categories: ["betalingen"],
  },
  {
    id: "factuur-bekijken",
    question: "How can I view my invoice?",
    answer:
      "Invoices are sent by email. You can also contact us for a copy.",
    categories: ["betalingen"],
  },

  // Website & Costs
  {
    id: "wat-kost-website",
    question: "What does a website at Robuust cost?",
    answer: `Our website packages start from ${formatPrice(pricing.packages["solid-start"].minPrice)} for a Solid Start package. For larger projects with more features, the Firm Foundation package starts from ${formatPrice(pricing.packages["firm-foundation"].minPrice)}. Contact us for a custom quote.`,
    categories: ["tarieven", "algemeen"],
  },
  {
    id: "hoe-lang-duurt-project",
    question: "How long does a project take?",
    answer:
      "A standard website is live within 4-6 weeks. More complex projects with custom features can take 8-12 weeks. We always create a realistic timeline that we discuss with you.",
    categories: ["algemeen", "proces"],
  },
  {
    id: "onderhoud-aanbod",
    question: "Do you also offer maintenance?",
    answer: `Yes, we offer various hosting & maintenance packages. From ${formatPrice(pricing.hosting.shared.price!)}/month we take care of hosting, backups, updates and monitoring so you can focus on your business.`,
    categories: ["hosting", "algemeen"],
  },

  // Hosting & Technical
  {
    id: "website-bewerken",
    question: "How can I edit my website?",
    answer:
      "You can log in to your CMS dashboard via yourdomain.com/admin. If you need help, please contact us.",
    categories: ["hosting", "technisch"],
  },
  {
    id: "storing-wat-doen",
    question: "What should I do in case of an outage?",
    answer:
      "Contact us immediately via support@robuustmarketing.nl or call us. For critical outages, we respond within 1 hour.",
    categories: ["hosting", "support"],
  },
  {
    id: "backup-frequentie",
    question: "How often are backups made?",
    answer:
      "We make automatic daily backups of your website. These are kept for 30 days.",
    categories: ["hosting", "technisch"],
  },
  {
    id: "website-langzaam",
    question: "My website loads slowly, what can I do?",
    answer:
      "First try clearing your cache. If the problem persists, contact us for a performance check.",
    categories: ["technisch", "support"],
  },
  {
    id: "eigen-domein",
    question: "Can I use my own domain name?",
    answer:
      "Yes, you can use your own domain name or register a new one through us.",
    categories: ["hosting", "technisch"],
  },

  // SEO & Marketing
  {
    id: "seo-inbegrepen",
    question: "Is SEO included with a website?",
    answer:
      "Basic SEO is included in all our packages: technical optimization, meta tags, and fast load times. For extensive SEO campaigns with content creation and link building, we offer additional services.",
    categories: ["seo", "algemeen"],
  },
  {
    id: "google-adverteren",
    question: "Can you also help with Google Ads?",
    answer:
      "Yes, through our partner agency Hello Its Me we provide complete online marketing campaigns including Google Ads, Meta Ads and more.",
    categories: ["marketing"],
  },

  // Process & Collaboration
  {
    id: "wat-nodig-voor-start",
    question: "What do you need to get started?",
    answer:
      "We start with an intake meeting to discuss your wishes and goals. Then we need your logo, brand identity and content (text and images). No content? We can help with that too.",
    categories: ["proces", "algemeen"],
  },
  {
    id: "revisies",
    question: "How many revisions are included?",
    answer:
      "Our packages include 2 revision rounds. We keep working until you're satisfied - additional revisions are at hourly rate.",
    categories: ["proces", "tarieven"],
  },
  {
    id: "eigenaarschap-website",
    question: "Who owns the website after delivery?",
    answer:
      "The website is fully yours after delivery. You receive all source files and access to the CMS. Want to switch later? No problem.",
    categories: ["algemeen", "proces"],
  },
];

export const faqsByLocale: Record<Locale, FAQ[]> = {
  nl: faqsNL,
  en: faqsEN,
};

// Helper function to get FAQs by locale
export function getFAQs(locale: Locale = defaultLocale): FAQ[] {
  return faqsByLocale[locale] || faqsByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const faqs = faqsNL;

// Helper function to get FAQs by category
export function getFAQsByCategory(category: string, locale: Locale = defaultLocale): FAQ[] {
  const localeFaqs = getFAQs(locale);
  return localeFaqs.filter((faq) => faq.categories.includes(category));
}

// Helper function to get FAQs by multiple categories
export function getFAQsByCategories(categories: string[], locale: Locale = defaultLocale): FAQ[] {
  const localeFaqs = getFAQs(locale);
  return localeFaqs.filter((faq) =>
    faq.categories.some((cat) => categories.includes(cat))
  );
}

// Get all unique categories
export function getAllCategories(locale: Locale = defaultLocale): string[] {
  const localeFaqs = getFAQs(locale);
  const categories = new Set<string>();
  localeFaqs.forEach((faq) => faq.categories.forEach((cat) => categories.add(cat)));
  return Array.from(categories).sort();
}

// Category labels for display
export const categoryLabelsNL: Record<string, string> = {
  algemeen: "Algemeen",
  tarieven: "Tarieven & Prijzen",
  betalingen: "Facturen & Betalingen",
  hosting: "Hosting & Onderhoud",
  technisch: "Technisch",
  support: "Support",
  proces: "Proces & Samenwerking",
  seo: "SEO",
  marketing: "Marketing",
};

export const categoryLabelsEN: Record<string, string> = {
  algemeen: "General",
  tarieven: "Pricing & Rates",
  betalingen: "Invoices & Payments",
  hosting: "Hosting & Maintenance",
  technisch: "Technical",
  support: "Support",
  proces: "Process & Collaboration",
  seo: "SEO",
  marketing: "Marketing",
};

export const categoryLabelsByLocale: Record<Locale, Record<string, string>> = {
  nl: categoryLabelsNL,
  en: categoryLabelsEN,
};

export function getCategoryLabels(locale: Locale = defaultLocale): Record<string, string> {
  return categoryLabelsByLocale[locale] || categoryLabelsByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const categoryLabels = categoryLabelsNL;
