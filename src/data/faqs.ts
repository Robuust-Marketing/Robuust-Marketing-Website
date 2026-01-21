export interface FAQ {
  id: string;
  question: string;
  answer: string;
  categories: string[];
}

export const faqs: FAQ[] = [
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
    answer:
      "Onze website pakketten beginnen vanaf €2.500 voor een Solid Start pakket. Voor grotere projecten met meer functionaliteiten start het Firm Foundation pakket vanaf €7.500. Neem contact op voor een offerte op maat.",
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
    answer:
      "Ja, we bieden verschillende hosting & onderhoud pakketten aan. Vanaf €49/maand verzorgen we hosting, backups, updates en monitoring zodat jij je kunt focussen op je business.",
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

// Helper function to get FAQs by category
export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.categories.includes(category));
}

// Helper function to get FAQs by multiple categories
export function getFAQsByCategories(categories: string[]): FAQ[] {
  return faqs.filter((faq) =>
    faq.categories.some((cat) => categories.includes(cat))
  );
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  faqs.forEach((faq) => faq.categories.forEach((cat) => categories.add(cat)));
  return Array.from(categories).sort();
}

// Category labels for display
export const categoryLabels: Record<string, string> = {
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
