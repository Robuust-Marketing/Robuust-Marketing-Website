export interface PortfolioItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  shortDescription: string;
  image: string;
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
}

export const portfolioItems: PortfolioItem[] = [
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
    image: "/portfolio/growteq.jpg",
    tags: ["WordPress", "Custom Design", "SEO"],
    url: "https://growteq.nl",
    featured: true,
    year: 2024,
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
    image: "/portfolio/den-hartog.jpg",
    tags: ["WordPress", "Corporate Design", "SEO"],
    url: "https://denhartogbv.com",
    featured: true,
    year: 2024,
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
    image: "/portfolio/villary.jpg",
    tags: ["WordPress", "Portfolio", "Custom Design"],
    url: "https://villary.nl",
    featured: true,
    year: 2024,
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
    tags: ["WordPress", "Horeca", "Reserveringen"],
    url: "https://idrw.nl",
    featured: true,
    year: 2024,
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
    image: "/portfolio/bnb-kinderdijk.jpg",
    tags: ["WordPress", "Hospitality", "Boekingen"],
    url: "https://bnbkinderdijk.nl",
    featured: false,
    year: 2024,
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
    image: "/portfolio/voltra-charging.jpg",
    tags: ["WordPress", "B2B", "Product Showcase"],
    url: "https://voltracharging.com",
    featured: true,
    year: 2024,
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
    image: "/portfolio/woonstudio-joy.jpg",
    tags: ["WordPress", "Showroom", "Lokale SEO"],
    url: "https://woonstudiojoy.nl",
    featured: false,
    year: 2024,
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
];

export const categories = [
  "Alle",
  "B2B Corporate",
  "Corporate",
  "Portfolio",
  "Horeca",
  "Hospitality",
  "B2B Tech",
  "Retail",
];
