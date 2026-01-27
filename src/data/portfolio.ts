import { type Locale, defaultLocale } from "@/i18n/config";

export interface PortfolioItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  shortDescription: string;
  image: string;
  logo?: string;
  icon?: string;
  tags: string[];
  url: string;
  featured: boolean;
  year: number;
  projectType: "new" | "redesign";
  challenge: string;
  solution: string;
  results: {
    metric: string;
    description: string;
  }[];
  services: string[];
  testimonial?: {
    quote: string;
    author?: string;
    role?: string;
  };
}

const portfolioItemsNL: PortfolioItem[] = [
  {
    id: "growteq",
    slug: "growteq",
    name: "Growteq",
    category: "B2B Corporate",
    industry: "Business Intelligence & Consultancy",
    shortDescription:
      "Corporate website voor een snelgroeiend BI & Salesforce consultancy bedrijf.",
    description:
      "Growteq is een consultancy- en ontwikkelingsbedrijf dat organisaties inzicht en overzicht geeft in hun processen en prestaties. Met 57 experts en partners als Microsoft, Salesforce en Qlik hadden ze een website nodig die hun expertise en professionaliteit uitstraalt.",
    image: "/portfolio/growteq.jpeg",
    logo: "/portfolio/growteq-logo.svg",
    tags: ["WordPress", "Custom Design", "SEO"],
    url: "https://growteq.nl",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "Growteq groeide snel en hun oude website paste niet meer bij hun positie als serieuze speler in de BI-markt. Ze hadden een professionele uitstraling nodig die past bij klanten als grote retailers en energiebedrijven.",
    solution:
      "We hebben een volledig nieuwe WordPress website ontwikkeld met een strak, zakelijk design. Focus op case studies, teamprofielen en een duidelijke positionering van hun drie kerngebieden: Business Intelligence, Salesforce en Maatwerk Development.",
    results: [
      { metric: "Professionele uitstraling", description: "Past bij ISO 27001 gecertificeerd bedrijf" },
      { metric: "Betere leadgeneratie", description: "Duidelijke call-to-actions per dienst" },
      { metric: "SEO-geoptimaliseerd", description: "Beter vindbaar op relevante zoektermen" },
    ],
    services: ["design", "development", "seo", "hosting"],
    testimonial: {
      quote: "Ik zou Robuust zeker aanraden aan anderen. Om drie redenen, namelijk Robuust is vakinhoudelijk sterk, Robuust heeft creatieve marketing mensen in huis en ze worden gekenmerkt door een resultaatgerichte aanpak.",
    },
  },
  {
    id: "den-hartog",
    slug: "den-hartog",
    name: "Den Hartog Energies",
    category: "Corporate",
    industry: "Energie & Brandstoffen",
    shortDescription:
      "Moderne website voor een gevestigde Mobil-distributeur met 75+ jaar ervaring.",
    description:
      "Den Hartog Energies is al meer dan 75 jaar een toonaangevende naam in brandstoffen en smeermiddelen als officiële Mobil-distributeur in Nederland. Hun motto 'Energy for Progress' moest tot uiting komen in een moderne, betrouwbare website.",
    image: "/portfolio/denhartogenergies.webp",
    logo: "/portfolio/denhartogenergies-logo.svg",
    tags: ["WordPress", "Corporate Design", "SEO"],
    url: "https://denhartogbv.com",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "Als traditioneel energiebedrijf had Den Hartog een verouderde website die niet meer paste bij hun positie als innovatieve partner in de energietransitie. Ze wilden een moderne uitstraling die zowel hun historie als hun toekomstvisie communiceert.",
    solution:
      "We ontwikkelden een strakke corporate website met de nadruk op betrouwbaarheid en expertise. De nieuwe site combineert het rijke verleden van het bedrijf met een moderne, vooruitstrevende uitstraling.",
    results: [
      { metric: "Moderne uitstraling", description: "Past bij 'Energy for Progress' positionering" },
      { metric: "Verbeterde vindbaarheid", description: "Technische SEO-optimalisatie" },
      { metric: "Snellere laadtijd", description: "Geoptimaliseerde performance" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
  {
    id: "villary",
    slug: "villary",
    name: "Villary Buitenleven",
    category: "Portfolio",
    industry: "Bouw & Tuinontwerp",
    shortDescription:
      "Stijlvolle portfolio website voor een premium bouwer van maatwerk buitenverblijven.",
    description:
      "Villary Buitenleven is gespecialiseerd in het ontwerpen en bouwen van maatwerk tuinhuizen, overkappingen en tuinkamers. Hun vakmanschap en aandacht voor detail moest centraal staan in de nieuwe website.",
    image: "/portfolio/villary.jpeg",
    logo: "/portfolio/villary-logo.png",
    tags: ["WordPress", "Portfolio", "Custom Design"],
    url: "https://villary.nl",
    featured: true,
    year: 2025,
    projectType: "new",
    challenge:
      "Villary wilde hun premium positionering versterken met een website die de kwaliteit van hun werk laat zien. Potentiële klanten moesten direct onder de indruk zijn van het vakmanschap.",
    solution:
      "We creëerden een visueel rijke portfolio website waar de projectfoto's centraal staan. Het design ademt rust en kwaliteit, precies zoals de buitenverblijven die Villary bouwt. Een eenvoudige navigatie leidt bezoekers door het aanbod.",
    results: [
      { metric: "Visuele impact", description: "Portfolio dat het vakmanschap toont" },
      { metric: "Meer aanvragen", description: "Duidelijke contactmogelijkheden" },
      { metric: "Premium uitstraling", description: "Past bij de doelgroep" },
    ],
    services: ["design", "development", "hosting"],
  },
  {
    id: "idrw",
    slug: "idrw",
    name: "In Den RustWat",
    category: "Horeca",
    industry: "Gastronomie",
    shortDescription:
      "Sfeervolle website voor een gastronomisch restaurant in een historisch pand uit 1597.",
    description:
      "IDRW (In Den RustWat) is een gastronomisch restaurant in Rotterdam, gehuisvest in een monumentaal pand uit 1597 met originele Delfts blauwe tegels. De website moest de unieke sfeer en culinaire excellentie uitstralen.",
    image: "/portfolio/idrw.jpg",
    logo: "/portfolio/idrw-logo.svg",
    tags: ["WordPress", "Horeca", "Reserveringen"],
    url: "https://idrw.nl",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "Het restaurant had een website nodig die de historische ambiance en gastronomische kwaliteit communiceert. Daarnaast moest het reserveringssysteem naadloos geïntegreerd worden.",
    solution:
      "We ontwikkelden een sfeervolle website die de warmte van het historische pand combineert met moderne functionaliteit. Grote beelden van het interieur en de gerechten, gecombineerd met een geïntegreerd reserveringssysteem.",
    results: [
      { metric: "Sfeervolle presentatie", description: "Historische ambiance komt tot leven" },
      { metric: "Online reserveringen", description: "Geïntegreerd boekingssysteem" },
      { metric: "Evenementen", description: "Aparte sectie voor private dining" },
    ],
    services: ["design", "development", "hosting"],
  },
  {
    id: "bnb-kinderdijk",
    slug: "bnb-kinderdijk",
    name: "BnB Kinderdijk",
    category: "Hospitality",
    industry: "Toerisme",
    shortDescription:
      "Charmante website voor een Bed & Breakfast bij de iconische molens van Kinderdijk.",
    description:
      "BnB Kinderdijk biedt gasten een unieke overnachtingservaring bij de wereldberoemde molens van Kinderdijk, UNESCO Werelderfgoed. De website moest de rust en schoonheid van deze locatie uitstralen.",
    image: "/portfolio/bnbkinderdijk.jpg",
    logo: "/portfolio/bnbkinderdijk-logo.png",
    tags: ["WordPress", "Hospitality", "Boekingen"],
    url: "https://bnbkinderdijk.nl",
    featured: false,
    year: 2025,
    projectType: "new",
    challenge:
      "Als kleinschalige B&B in een toeristische toplocatie was een professionele online aanwezigheid essentieel. De website moest de unieke locatie benadrukken en directe boekingen stimuleren naast Airbnb.",
    solution:
      "We bouwden een warme, uitnodigende website met prachtige fotografie van de locatie en de molens. De focus ligt op de unieke ervaring en het gemak van direct boeken.",
    results: [
      { metric: "Directe boekingen", description: "Minder afhankelijk van Airbnb" },
      { metric: "Lokale SEO", description: "Vindbaar voor toeristen" },
      { metric: "Authentieke uitstraling", description: "Past bij de locatie" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
  {
    id: "voltra-charging",
    slug: "voltra-charging",
    name: "Voltra Charging",
    category: "B2B Tech",
    industry: "E-mobiliteit",
    shortDescription:
      "Moderne website voor een innovatieve leverancier van ultrasnelle laadinfrastructuur.",
    description:
      "Voltra is een leverancier van ultrasnelle DC-laadstations voor elektrische voertuigen. Met laadpunten tot 240kW richten ze zich op bedrijven die zorgeloos elektrisch willen laden.",
    image: "/portfolio/voltracharging.jpg",
    logo: "/portfolio/voltracharging-logo.svg",
    tags: ["WordPress", "B2B", "Product Showcase"],
    url: "https://voltracharging.com",
    featured: true,
    year: 2025,
    projectType: "new",
    challenge:
      "Voltra wilde zich positioneren als innovatieve, betrouwbare partner in de groeiende markt voor laadinfrastructuur. De website moest hun technische expertise en klantgerichte aanpak communiceren.",
    solution:
      "We ontwikkelden een strakke, moderne website die de drie kernwaarden van Voltra benadrukt: efficiënt, eenvoudig en klaar voor de toekomst. Productinformatie wordt helder gepresenteerd voor B2B-beslissers.",
    results: [
      { metric: "Professionele positionering", description: "Betrouwbare partner uitstraling" },
      { metric: "Leadgeneratie", description: "Duidelijke product- en contactpagina's" },
      { metric: "Internationale focus", description: "NL en DE markt" },
    ],
    services: ["design", "development", "hosting"],
  },
  {
    id: "woonstudio-joy",
    slug: "woonstudio-joy",
    name: "Woonstudio Joy",
    category: "Retail",
    industry: "Keukenspecialist",
    shortDescription:
      "Stijlvolle showroom website voor een keukenspecialist met oog voor detail.",
    description:
      "Woonstudio Joy is een keukenspecialist in Ridderkerk die zich onderscheidt door maatwerk en persoonlijke aandacht. Hun slogan 'Met aandacht voor details' moest terugkomen in elk aspect van de website.",
    image: "/portfolio/woonstudiojoy.webp",
    logo: "/portfolio/woonstudiojoy-logo.svg",
    tags: ["WordPress", "Showroom", "Lokale SEO"],
    url: "https://woonstudiojoy.nl",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "Als lokale keukenspecialist concurreert Woonstudio Joy met grote ketens. Ze hadden een website nodig die hun persoonlijke aanpak en kwaliteit benadrukt.",
    solution:
      "We creëerden een visueel aantrekkelijke website met veel ruimte voor keukenfotografie. De focus ligt op de showroom-ervaring en de persoonlijke benadering die Woonstudio Joy onderscheidt.",
    results: [
      { metric: "Lokale vindbaarheid", description: "SEO voor Ridderkerk en omstreken" },
      { metric: "Showroom bezoeken", description: "Duidelijke route en contactinfo" },
      { metric: "Premium uitstraling", description: "Onderscheidend van ketens" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
  {
    id: "kapsalon-tine",
    slug: "kapsalon-tine",
    name: "Kapsalon Tine",
    category: "Retail",
    industry: "Kapsalon & Webshop",
    shortDescription:
      "Persoonlijke website met webshop voor een kapsalon met expertise in krullend haar.",
    description:
      "Kapsalon Tine in Sliedrecht combineert vakmanschap met persoonlijk advies. Naast knip- en kleurdiensten biedt Tine ook online haarconsulten, kleuranalyses en een webshop met zorgvuldig geselecteerde haarproducten.",
    image: "/portfolio/kapsalontine.jpg",
    logo: "/portfolio/kapsalontine-logo.svg",
    tags: ["WordPress", "WooCommerce", "Lokale SEO"],
    url: "https://kapsalontine.nl",
    featured: false,
    year: 2025,
    projectType: "new",
    challenge:
      "Tine wilde meer dan alleen een salon-website. Ze had een platform nodig dat haar expertise toont, online consulten mogelijk maakt én een webshop bevat voor haarproducten die ze zelf test en aanbeveelt.",
    solution:
      "We bouwden een veelzijdige website die de persoonlijke aanpak van Tine centraal stelt. De geïntegreerde WooCommerce webshop, gecombineerd met informatieve content over haarverzorging, maakt het een compleet platform.",
    results: [
      { metric: "Online verkoop", description: "Webshop met geteste haarproducten" },
      { metric: "Persoonlijke branding", description: "Expertise en vertrouwen uitstralen" },
      { metric: "Meerdere diensten", description: "Salon, consulten en e-commerce gecombineerd" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
];

const portfolioItemsEN: PortfolioItem[] = [
  {
    id: "growteq",
    slug: "growteq",
    name: "Growteq",
    category: "B2B Corporate",
    industry: "Business Intelligence & Consultancy",
    shortDescription:
      "Corporate website for a fast-growing BI & Salesforce consultancy company.",
    description:
      "Growteq is a consultancy and development company that provides organizations with insight and overview of their processes and performance. With 57 experts and partners like Microsoft, Salesforce and Qlik, they needed a website that radiates their expertise and professionalism.",
    image: "/portfolio/growteq.jpeg",
    logo: "/portfolio/growteq-logo.svg",
    tags: ["WordPress", "Custom Design", "SEO"],
    url: "https://growteq.nl",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "Growteq was growing rapidly and their old website no longer matched their position as a serious player in the BI market. They needed a professional appearance that fits clients like major retailers and energy companies.",
    solution:
      "We developed a completely new WordPress website with a sleek, business design. Focus on case studies, team profiles and a clear positioning of their three core areas: Business Intelligence, Salesforce and Custom Development.",
    results: [
      { metric: "Professional appearance", description: "Fits ISO 27001 certified company" },
      { metric: "Better lead generation", description: "Clear call-to-actions per service" },
      { metric: "SEO optimized", description: "Better findability on relevant search terms" },
    ],
    services: ["design", "development", "seo", "hosting"],
    testimonial: {
      quote: "I would definitely recommend Robuust to others. For three reasons: Robuust is professionally strong, Robuust has creative marketing people in-house, and they are characterized by a results-oriented approach.",
    },
  },
  {
    id: "den-hartog",
    slug: "den-hartog",
    name: "Den Hartog Energies",
    category: "Corporate",
    industry: "Energy & Fuels",
    shortDescription:
      "Modern website for an established Mobil distributor with 75+ years of experience.",
    description:
      "Den Hartog Energies has been a leading name in fuels and lubricants for over 75 years as an official Mobil distributor in the Netherlands. Their motto 'Energy for Progress' needed to be reflected in a modern, reliable website.",
    image: "/portfolio/denhartogenergies.webp",
    logo: "/portfolio/denhartogenergies-logo.svg",
    tags: ["WordPress", "Corporate Design", "SEO"],
    url: "https://denhartogbv.com",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "As a traditional energy company, Den Hartog had an outdated website that no longer matched their position as an innovative partner in the energy transition. They wanted a modern appearance that communicates both their history and their vision for the future.",
    solution:
      "We developed a sleek corporate website with an emphasis on reliability and expertise. The new site combines the company's rich past with a modern, forward-looking appearance.",
    results: [
      { metric: "Modern appearance", description: "Fits 'Energy for Progress' positioning" },
      { metric: "Improved findability", description: "Technical SEO optimization" },
      { metric: "Faster load time", description: "Optimized performance" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
  {
    id: "villary",
    slug: "villary",
    name: "Villary Buitenleven",
    category: "Portfolio",
    industry: "Construction & Garden Design",
    shortDescription:
      "Stylish portfolio website for a premium builder of custom outdoor living spaces.",
    description:
      "Villary Buitenleven specializes in designing and building custom garden houses, canopies and garden rooms. Their craftsmanship and attention to detail had to be central to the new website.",
    image: "/portfolio/villary.jpeg",
    logo: "/portfolio/villary-logo.png",
    tags: ["WordPress", "Portfolio", "Custom Design"],
    url: "https://villary.nl",
    featured: true,
    year: 2025,
    projectType: "new",
    challenge:
      "Villary wanted to strengthen their premium positioning with a website that showcases the quality of their work. Potential customers needed to be immediately impressed by the craftsmanship.",
    solution:
      "We created a visually rich portfolio website where project photos take center stage. The design exudes calm and quality, exactly like the outdoor spaces Villary builds. Simple navigation guides visitors through the offerings.",
    results: [
      { metric: "Visual impact", description: "Portfolio showcasing craftsmanship" },
      { metric: "More inquiries", description: "Clear contact options" },
      { metric: "Premium appearance", description: "Matches the target audience" },
    ],
    services: ["design", "development", "hosting"],
  },
  {
    id: "idrw",
    slug: "idrw",
    name: "In Den RustWat",
    category: "Hospitality",
    industry: "Gastronomy",
    shortDescription:
      "Atmospheric website for a gastronomic restaurant in a historic building from 1597.",
    description:
      "IDRW (In Den RustWat) is a gastronomic restaurant in Rotterdam, housed in a monumental building from 1597 with original Delft blue tiles. The website needed to radiate the unique atmosphere and culinary excellence.",
    image: "/portfolio/idrw.jpg",
    logo: "/portfolio/idrw-logo.svg",
    tags: ["WordPress", "Hospitality", "Reservations"],
    url: "https://idrw.nl",
    featured: true,
    year: 2025,
    projectType: "redesign",
    challenge:
      "The restaurant needed a website that communicates the historic ambiance and gastronomic quality. Additionally, the reservation system had to be seamlessly integrated.",
    solution:
      "We developed an atmospheric website that combines the warmth of the historic building with modern functionality. Large images of the interior and dishes, combined with an integrated reservation system.",
    results: [
      { metric: "Atmospheric presentation", description: "Historic ambiance comes to life" },
      { metric: "Online reservations", description: "Integrated booking system" },
      { metric: "Events", description: "Separate section for private dining" },
    ],
    services: ["design", "development", "hosting"],
  },
  {
    id: "bnb-kinderdijk",
    slug: "bnb-kinderdijk",
    name: "BnB Kinderdijk",
    category: "Hospitality",
    industry: "Tourism",
    shortDescription:
      "Charming website for a Bed & Breakfast near the iconic windmills of Kinderdijk.",
    description:
      "BnB Kinderdijk offers guests a unique overnight experience near the world-famous windmills of Kinderdijk, UNESCO World Heritage Site. The website needed to radiate the tranquility and beauty of this location.",
    image: "/portfolio/bnbkinderdijk.jpg",
    logo: "/portfolio/bnbkinderdijk-logo.png",
    tags: ["WordPress", "Hospitality", "Bookings"],
    url: "https://bnbkinderdijk.nl",
    featured: false,
    year: 2025,
    projectType: "new",
    challenge:
      "As a small-scale B&B in a top tourist location, a professional online presence was essential. The website needed to emphasize the unique location and encourage direct bookings alongside Airbnb.",
    solution:
      "We built a warm, inviting website with beautiful photography of the location and windmills. The focus is on the unique experience and the convenience of booking directly.",
    results: [
      { metric: "Direct bookings", description: "Less dependent on Airbnb" },
      { metric: "Local SEO", description: "Findable for tourists" },
      { metric: "Authentic appearance", description: "Matches the location" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
  {
    id: "voltra-charging",
    slug: "voltra-charging",
    name: "Voltra Charging",
    category: "B2B Tech",
    industry: "E-mobility",
    shortDescription:
      "Modern website for an innovative supplier of ultra-fast charging infrastructure.",
    description:
      "Voltra is a supplier of ultra-fast DC charging stations for electric vehicles. With charging points up to 240kW, they target businesses that want to charge electrically without worry.",
    image: "/portfolio/voltracharging.jpg",
    logo: "/portfolio/voltracharging-logo.svg",
    tags: ["WordPress", "B2B", "Product Showcase"],
    url: "https://voltracharging.com",
    featured: true,
    year: 2025,
    projectType: "new",
    challenge:
      "Voltra wanted to position themselves as an innovative, reliable partner in the growing market for charging infrastructure. The website needed to communicate their technical expertise and customer-focused approach.",
    solution:
      "We developed a sleek, modern website that emphasizes Voltra's three core values: efficient, simple and ready for the future. Product information is clearly presented for B2B decision-makers.",
    results: [
      { metric: "Professional positioning", description: "Reliable partner appearance" },
      { metric: "Lead generation", description: "Clear product and contact pages" },
      { metric: "International focus", description: "NL and DE market" },
    ],
    services: ["design", "development", "hosting"],
  },
  {
    id: "woonstudio-joy",
    slug: "woonstudio-joy",
    name: "Woonstudio Joy",
    category: "Retail",
    industry: "Kitchen Specialist",
    shortDescription:
      "Stylish showroom website for a kitchen specialist with an eye for detail.",
    description:
      "Woonstudio Joy is a kitchen specialist in Ridderkerk that distinguishes itself through custom work and personal attention. Their slogan 'With attention to details' needed to be reflected in every aspect of the website.",
    image: "/portfolio/woonstudiojoy.webp",
    logo: "/portfolio/woonstudiojoy-logo.svg",
    tags: ["WordPress", "Showroom", "Local SEO"],
    url: "https://woonstudiojoy.nl",
    featured: false,
    year: 2025,
    projectType: "redesign",
    challenge:
      "As a local kitchen specialist, Woonstudio Joy competes with large chains. They needed a website that emphasizes their personal approach and quality.",
    solution:
      "We created a visually attractive website with plenty of room for kitchen photography. The focus is on the showroom experience and the personal approach that sets Woonstudio Joy apart.",
    results: [
      { metric: "Local findability", description: "SEO for Ridderkerk and surroundings" },
      { metric: "Showroom visits", description: "Clear route and contact info" },
      { metric: "Premium appearance", description: "Distinctive from chains" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
  {
    id: "kapsalon-tine",
    slug: "kapsalon-tine",
    name: "Kapsalon Tine",
    category: "Retail",
    industry: "Hair Salon & Webshop",
    shortDescription:
      "Personal website with webshop for a hair salon specializing in curly hair.",
    description:
      "Kapsalon Tine in Sliedrecht combines craftsmanship with personal advice. In addition to cutting and coloring services, Tine also offers online hair consultations, color analysis, and a webshop with carefully selected hair products.",
    image: "/portfolio/kapsalontine.jpg",
    logo: "/portfolio/kapsalontine-logo.svg",
    tags: ["WordPress", "WooCommerce", "Local SEO"],
    url: "https://kapsalontine.nl",
    featured: false,
    year: 2025,
    projectType: "new",
    challenge:
      "Tine wanted more than just a salon website. She needed a platform that showcases her expertise, enables online consultations, and includes a webshop for hair products she personally tests and recommends.",
    solution:
      "We built a versatile website that puts Tine's personal approach at the center. The integrated WooCommerce webshop, combined with informative content about hair care, makes it a complete platform.",
    results: [
      { metric: "Online sales", description: "Webshop with tested hair products" },
      { metric: "Personal branding", description: "Radiating expertise and trust" },
      { metric: "Multiple services", description: "Salon, consultations and e-commerce combined" },
    ],
    services: ["design", "development", "seo", "hosting"],
  },
];

export const portfolioItemsByLocale: Record<Locale, PortfolioItem[]> = {
  nl: portfolioItemsNL,
  en: portfolioItemsEN,
};

// Helper function to get portfolio items by locale
export function getPortfolioItems(locale: Locale = defaultLocale): PortfolioItem[] {
  return portfolioItemsByLocale[locale] || portfolioItemsByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const portfolioItems = portfolioItemsNL;

// Legacy portfolio items - smaller projects shown at the bottom of the portfolio page
export interface LegacyPortfolioItem {
  id: string;
  slug: string;
  name: string;
  url: string;
  category: string;
  year?: number;
}

const legacyPortfolioItemsNL: LegacyPortfolioItem[] = [
  {
    id: "ribouw",
    slug: "ribouw",
    name: "Ribouw",
    url: "https://ribouw.nl",
    category: "Bouw",
    year: 2020,
  },
  {
    id: "woningkeur",
    slug: "woningkeur",
    name: "Woningkeur",
    url: "https://woningkeur.nl",
    category: "Vastgoed",
    year: 2019,
  },
  {
    id: "perfectkeur",
    slug: "perfectkeur",
    name: "Perfectkeur",
    url: "https://perfectkeur.nl",
    category: "Vastgoed",
    year: 2019,
  },
  {
    id: "pianoselect",
    slug: "pianoselect",
    name: "Pianoselect",
    url: "https://pianoselect.nl",
    category: "Retail",
    year: 2018,
  },
  {
    id: "finance-to-the-point",
    slug: "finance-to-the-point",
    name: "Finance to the Point",
    url: "https://financetothepoint.nl",
    category: "Financieel",
    year: 2021,
  },
  {
    id: "spotlight-advies",
    slug: "spotlight-advies",
    name: "Spotlight Advies",
    url: "https://spotlightadvies.nl",
    category: "Consultancy",
    year: 2020,
  },
  {
    id: "ross-lovell",
    slug: "ross-lovell",
    name: "Ross Lovell",
    url: "https://rosslovell.nl",
    category: "Muziek",
    year: 2019,
  },
  {
    id: "hamstermieden",
    slug: "hamstermieden",
    name: "Hamstermieden",
    url: "https://www.hamstermieden.nl",
    category: "Recreatie",
    year: 2020,
  },
  {
    id: "energielabel-com",
    slug: "energielabel-com",
    name: "Energielabel.com",
    url: "https://energielabel.com",
    category: "Energie",
    year: 2019,
  },
  {
    id: "home-keukens",
    slug: "home-keukens",
    name: "Home Keukens",
    url: "https://homekeukens.nl",
    category: "Retail",
    year: 2018,
  },
  {
    id: "tuuur",
    slug: "tuuur",
    name: "Tuuur",
    url: "https://tuuur.nl",
    category: "Dienstverlening",
    year: 2020,
  },
  {
    id: "veersedijk",
    slug: "veersedijk",
    name: "Veersedijk",
    url: "https://veersedijk.nl",
    category: "Makelaardij",
    year: 2019,
  },
  {
    id: "propendum",
    slug: "propendum",
    name: "Propendum",
    url: "https://propendum.nl",
    category: "Consultancy",
    year: 2019,
  },
  {
    id: "foto-lot",
    slug: "foto-lot",
    name: "Foto Lot",
    url: "https://foto-lot.nl",
    category: "Fotografie",
    year: 2018,
  },
  {
    id: "immanuelkerk-krimpen",
    slug: "immanuelkerk-krimpen",
    name: "Immanuelkerk Krimpen",
    url: "https://www.immanuelkerkkrimpen.nl",
    category: "Kerk",
  },
  {
    id: "de-online-academy",
    slug: "de-online-academy",
    name: "De Online Academy",
    url: "https://deonlineacademy.nl",
    category: "Onderwijs",
  },
  {
    id: "bureau-delight",
    slug: "bureau-delight",
    name: "Bureau Delight",
    url: "https://bureaudelight.nl",
    category: "Coaching",
  },
  {
    id: "bioboss",
    slug: "bioboss",
    name: "Bioboss",
    url: "https://bioboss.nl",
    category: "Bouwmaterialen",
  },
  {
    id: "restaurant-en-verre",
    slug: "restaurant-en-verre",
    name: "Restaurant En Verre",
    url: "https://restaurantenverre.nl",
    category: "Horeca",
  },
  {
    id: "vdv-logistics",
    slug: "vdv-logistics",
    name: "VDV Logistics",
    url: "https://vdvlogistics.eu",
    category: "Logistiek",
  },
];

const legacyPortfolioItemsEN: LegacyPortfolioItem[] = [
  {
    id: "ribouw",
    slug: "ribouw",
    name: "Ribouw",
    url: "https://ribouw.nl",
    category: "Construction",
    year: 2020,
  },
  {
    id: "woningkeur",
    slug: "woningkeur",
    name: "Woningkeur",
    url: "https://woningkeur.nl",
    category: "Real Estate",
    year: 2019,
  },
  {
    id: "perfectkeur",
    slug: "perfectkeur",
    name: "Perfectkeur",
    url: "https://perfectkeur.nl",
    category: "Real Estate",
    year: 2019,
  },
  {
    id: "pianoselect",
    slug: "pianoselect",
    name: "Pianoselect",
    url: "https://pianoselect.nl",
    category: "Retail",
    year: 2018,
  },
  {
    id: "finance-to-the-point",
    slug: "finance-to-the-point",
    name: "Finance to the Point",
    url: "https://financetothepoint.nl",
    category: "Financial",
    year: 2021,
  },
  {
    id: "spotlight-advies",
    slug: "spotlight-advies",
    name: "Spotlight Advies",
    url: "https://spotlightadvies.nl",
    category: "Consultancy",
    year: 2020,
  },
  {
    id: "ross-lovell",
    slug: "ross-lovell",
    name: "Ross Lovell",
    url: "https://rosslovell.nl",
    category: "Music",
    year: 2019,
  },
  {
    id: "hamstermieden",
    slug: "hamstermieden",
    name: "Hamstermieden",
    url: "https://www.hamstermieden.nl",
    category: "Recreation",
    year: 2020,
  },
  {
    id: "energielabel-com",
    slug: "energielabel-com",
    name: "Energielabel.com",
    url: "https://energielabel.com",
    category: "Energy",
    year: 2019,
  },
  {
    id: "home-keukens",
    slug: "home-keukens",
    name: "Home Keukens",
    url: "https://homekeukens.nl",
    category: "Retail",
    year: 2018,
  },
  {
    id: "tuuur",
    slug: "tuuur",
    name: "Tuuur",
    url: "https://tuuur.nl",
    category: "Services",
    year: 2020,
  },
  {
    id: "veersedijk",
    slug: "veersedijk",
    name: "Veersedijk",
    url: "https://veersedijk.nl",
    category: "Real Estate",
    year: 2019,
  },
  {
    id: "propendum",
    slug: "propendum",
    name: "Propendum",
    url: "https://propendum.nl",
    category: "Consultancy",
    year: 2019,
  },
  {
    id: "foto-lot",
    slug: "foto-lot",
    name: "Foto Lot",
    url: "https://foto-lot.nl",
    category: "Photography",
    year: 2018,
  },
  {
    id: "immanuelkerk-krimpen",
    slug: "immanuelkerk-krimpen",
    name: "Immanuelkerk Krimpen",
    url: "https://www.immanuelkerkkrimpen.nl",
    category: "Church",
  },
  {
    id: "de-online-academy",
    slug: "de-online-academy",
    name: "De Online Academy",
    url: "https://deonlineacademy.nl",
    category: "Education",
  },
  {
    id: "bureau-delight",
    slug: "bureau-delight",
    name: "Bureau Delight",
    url: "https://bureaudelight.nl",
    category: "Coaching",
  },
  {
    id: "bioboss",
    slug: "bioboss",
    name: "Bioboss",
    url: "https://bioboss.nl",
    category: "Construction Materials",
  },
  {
    id: "restaurant-en-verre",
    slug: "restaurant-en-verre",
    name: "Restaurant En Verre",
    url: "https://restaurantenverre.nl",
    category: "Hospitality",
  },
  {
    id: "vdv-logistics",
    slug: "vdv-logistics",
    name: "VDV Logistics",
    url: "https://vdvlogistics.eu",
    category: "Logistics",
  },
];

export const legacyPortfolioItemsByLocale: Record<Locale, LegacyPortfolioItem[]> = {
  nl: legacyPortfolioItemsNL,
  en: legacyPortfolioItemsEN,
};

export function getLegacyPortfolioItems(locale: Locale = defaultLocale): LegacyPortfolioItem[] {
  return legacyPortfolioItemsByLocale[locale] || legacyPortfolioItemsByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const legacyPortfolioItems = legacyPortfolioItemsNL;

const categoriesNL = [
  "Alle",
  "B2B Corporate",
  "Corporate",
  "Portfolio",
  "Horeca",
  "Hospitality",
  "B2B Tech",
  "Retail",
];

const categoriesEN = [
  "All",
  "B2B Corporate",
  "Corporate",
  "Portfolio",
  "Hospitality",
  "Hospitality",
  "B2B Tech",
  "Retail",
];

export const categoriesByLocale: Record<Locale, string[]> = {
  nl: categoriesNL,
  en: categoriesEN,
};

export function getCategories(locale: Locale = defaultLocale): string[] {
  return categoriesByLocale[locale] || categoriesByLocale[defaultLocale];
}

// Legacy export for backward compatibility
export const categories = categoriesNL;
