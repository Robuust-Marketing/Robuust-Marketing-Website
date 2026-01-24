import {
  Globe,
  Code2,
  FileText,
  Palette,
  Database,
  Cloud,
  Server,
  type LucideIcon,
} from "lucide-react";
import { type Locale, defaultLocale } from "@/i18n/config";

export interface Tool {
  id: string;
  slug: string;
  name: string;
  icon: LucideIcon;
  category: string;
  description: string;
  benefits: string[];
  longDescription: string;
  features: {
    title: string;
    description: string;
  }[];
  useCases: string[];
  relatedTools: string[];
}

const toolsNL: Tool[] = [
  {
    id: "wordpress",
    slug: "wordpress",
    name: "WordPress & Avada",
    icon: Globe,
    category: "CMS Platform",
    description:
      "WordPress met het Avada theme is onze go-to oplossing voor klanten die zelf content willen beheren. Avada biedt uitgebreide designmogelijkheden en een intuïtieve drag-and-drop builder voor maximale flexibiliteit.",
    benefits: [
      "Gebruiksvriendelijk contentbeheer",
      "Krachtige drag-and-drop builder",
      "Uitgebreide designopties",
      "Grote plugin ecosysteem",
    ],
    longDescription:
      "WordPress is 's werelds meest gebruikte CMS en biedt een perfecte balans tussen gebruiksvriendelijkheid en flexibiliteit. In combinatie met het Avada theme creëren we websites die niet alleen prachtig ogen, maar ook eenvoudig te beheren zijn door jou of je team. Geen technische kennis vereist om content te wijzigen.",
    features: [
      {
        title: "Drag-and-drop builder",
        description:
          "Bouw pagina's visueel met de Avada Builder. Sleep elementen naar de juiste plek en zie direct het resultaat.",
      },
      {
        title: "Plugin ecosysteem",
        description:
          "Toegang tot duizenden plugins voor elke functionaliteit: van webshops tot boekingssystemen.",
      },
      {
        title: "SEO geoptimaliseerd",
        description:
          "Ingebouwde SEO-tools en compatibiliteit met plugins zoals Yoast voor optimale vindbaarheid.",
      },
      {
        title: "Meertalige ondersteuning",
        description:
          "Eenvoudig meerdere talen toevoegen met WPML of Polylang voor internationale websites.",
      },
    ],
    useCases: [
      "Corporate websites",
      "Webshops met WooCommerce",
      "Blogs en nieuwssites",
      "Portfolio websites",
      "Membership sites",
    ],
    relatedTools: ["cms", "nginx", "cloudflare"],
  },
  {
    id: "nextjs",
    slug: "nextjs",
    name: "Next.js & React",
    icon: Code2,
    category: "Frontend Framework",
    description:
      "Next.js is ons primaire framework voor het bouwen van moderne websites. Met React als basis en features zoals Server Components, App Router en optimale SEO-ondersteuning is het de perfecte keuze voor elke website.",
    benefits: [
      "Server-side rendering voor betere SEO",
      "Automatische code splitting",
      "Ingebouwde image optimization",
      "Snelle page loads met prefetching",
    ],
    longDescription:
      "Next.js is het meest geavanceerde React framework en biedt alles wat je nodig hebt voor razendsnelle, schaalbare websites. Van automatische code splitting tot ingebouwde image optimization - Next.js doet het zware werk zodat wij ons kunnen focussen op het bouwen van geweldige gebruikerservaringen.",
    features: [
      {
        title: "Server Components",
        description:
          "Render componenten op de server voor snellere initiële laadtijden en betere SEO.",
      },
      {
        title: "App Router",
        description:
          "Moderne routing met layouts, loading states en error handling out of the box.",
      },
      {
        title: "Image Optimization",
        description:
          "Automatische image resizing, lazy loading en moderne formats voor optimale performance.",
      },
      {
        title: "API Routes",
        description:
          "Bouw backend functionaliteit direct in je Next.js project zonder aparte server.",
      },
    ],
    useCases: [
      "High-performance marketing websites",
      "SaaS applicaties",
      "E-commerce platforms",
      "Web applicaties",
      "Jamstack websites",
    ],
    relatedTools: ["typescript", "tailwind", "cms"],
  },
  {
    id: "typescript",
    slug: "typescript",
    name: "TypeScript",
    icon: FileText,
    category: "Programmeertaal",
    description:
      "TypeScript voegt type-safety toe aan JavaScript, wat resulteert in minder bugs en beter onderhoudbare code. Elke lijn code die wij schrijven is type-safe.",
    benefits: [
      "Minder runtime errors",
      "Betere developer experience",
      "Eenvoudiger refactoring",
      "Automatische documentatie",
    ],
    longDescription:
      "TypeScript is JavaScript met superkrachten. Door types toe te voegen aan je code, vangt TypeScript fouten op tijdens het ontwikkelen in plaats van in productie. Dit betekent meer stabiliteit, betere tooling en code die jaren meegaat zonder technische schuld op te bouwen.",
    features: [
      {
        title: "Static Type Checking",
        description:
          "Ontdek bugs tijdens het ontwikkelen, niet wanneer je gebruikers ze tegenkomen.",
      },
      {
        title: "IntelliSense",
        description:
          "Intelligente code completion en inline documentatie voor sneller ontwikkelen.",
      },
      {
        title: "Refactoring Support",
        description:
          "Hernoem variabelen, functies of hele modules met vertrouwen - TypeScript vindt alle referenties.",
      },
      {
        title: "Interface Definitions",
        description:
          "Definieer duidelijke contracten tussen verschillende delen van je applicatie.",
      },
    ],
    useCases: [
      "Enterprise applicaties",
      "Grote codebases met meerdere developers",
      "API integraties",
      "Complexe business logic",
      "Langlopende projecten",
    ],
    relatedTools: ["nextjs", "tailwind"],
  },
  {
    id: "tailwind",
    slug: "tailwind",
    name: "Tailwind CSS",
    icon: Palette,
    category: "Styling",
    description:
      "Tailwind CSS is ons utility-first CSS framework. Het stelt ons in staat om snel custom designs te bouwen zonder de overhead van traditionele CSS.",
    benefits: [
      "Snelle development",
      "Consistent design systeem",
      "Kleine bundle size",
      "Dark mode out of the box",
    ],
    longDescription:
      "Tailwind CSS revolutioneert de manier waarop we CSS schrijven. In plaats van custom klassen te bedenken, gebruiken we utility classes die precies doen wat ze zeggen. Het resultaat: snellere development, consistentere designs en CSS bundles die alleen bevatten wat daadwerkelijk gebruikt wordt.",
    features: [
      {
        title: "Utility-First",
        description:
          "Bouw elk design direct in je HTML met low-level utility classes.",
      },
      {
        title: "Responsive Design",
        description:
          "Ingebouwde breakpoints maken responsive design eenvoudig en voorspelbaar.",
      },
      {
        title: "Design Tokens",
        description:
          "Consistente spacing, kleuren en typografie door een centraal configuratiebestand.",
      },
      {
        title: "JIT Compiler",
        description:
          "Genereer alleen de CSS die je daadwerkelijk gebruikt voor minimale bestandsgrootte.",
      },
    ],
    useCases: [
      "Custom website designs",
      "Component libraries",
      "Design systems",
      "Rapid prototyping",
      "Marketing websites",
    ],
    relatedTools: ["nextjs", "typescript"],
  },
  {
    id: "cms",
    slug: "cms",
    name: "Headless CMS",
    icon: Database,
    category: "Content Management",
    description:
      "We werken met diverse headless CMS oplossingen afhankelijk van jouw behoeften. Van Sanity tot Contentful, we kiezen de beste tool voor jouw situatie.",
    benefits: [
      "Flexibel contentbeheer",
      "Gebruiksvriendelijke interface",
      "API-first benadering",
      "Schaalbaar en veilig",
    ],
    longDescription:
      "Een headless CMS scheidt content van presentatie, waardoor dezelfde content op meerdere platforms kan worden gebruikt. Dit biedt maximale flexibiliteit voor de toekomst: dezelfde content voor je website, app en digital signage. We werken met Sanity, Contentful, Strapi en andere oplossingen afhankelijk van jouw specifieke behoeften.",
    features: [
      {
        title: "API-First",
        description:
          "Content beschikbaar via moderne REST of GraphQL API's voor elke frontend.",
      },
      {
        title: "Real-time Preview",
        description:
          "Bekijk wijzigingen direct op je website voordat ze live gaan.",
      },
      {
        title: "Custom Content Types",
        description:
          "Definieer exact welke velden en structuren je nodig hebt voor jouw content.",
      },
      {
        title: "Collaboration",
        description:
          "Werk samen met je team met roles, permissions en revision history.",
      },
    ],
    useCases: [
      "Multi-channel content",
      "Enterprise websites",
      "Marketing teams",
      "Content-heavy websites",
      "Internationale websites",
    ],
    relatedTools: ["nextjs", "wordpress", "cloudflare"],
  },
  {
    id: "cloudflare",
    slug: "cloudflare",
    name: "Cloudflare",
    icon: Cloud,
    category: "CDN & Security",
    description:
      "Cloudflare beschermt en versnelt al onze websites. Van DDoS-bescherming tot caching, het is een essentieel onderdeel van onze infrastructuur.",
    benefits: [
      "Wereldwijd CDN netwerk",
      "DDoS bescherming",
      "SSL/TLS encryptie",
      "Web Application Firewall",
    ],
    longDescription:
      "Cloudflare is de wereldleider in web performance en security. Met datacenters in meer dan 300 steden wereldwijd worden je bezoekers altijd bediend vanaf de dichtstbijzijnde locatie. Tegelijkertijd beschermt Cloudflare je website tegen DDoS-aanvallen, bots en andere bedreigingen.",
    features: [
      {
        title: "Global CDN",
        description:
          "Content wordt gecached op 300+ locaties wereldwijd voor minimale latency.",
      },
      {
        title: "DDoS Protection",
        description:
          "Automatische bescherming tegen distributed denial-of-service aanvallen.",
      },
      {
        title: "Web Application Firewall",
        description:
          "Bescherming tegen OWASP top 10 kwetsbaarheden en zero-day exploits.",
      },
      {
        title: "SSL/TLS",
        description:
          "Gratis SSL certificaten en end-to-end encryptie voor veilige verbindingen.",
      },
    ],
    useCases: [
      "Alle websites",
      "E-commerce beveiliging",
      "API bescherming",
      "Performance optimalisatie",
      "Bot management",
    ],
    relatedTools: ["nginx", "nextjs", "wordpress"],
  },
  {
    id: "nginx",
    slug: "nginx",
    name: "NGINX",
    icon: Server,
    category: "Web Server",
    description:
      "NGINX is onze webserver van keuze. Met uitstekende performance en schaalbaarheid is het de ruggengraat van onze hosting infrastructuur.",
    benefits: [
      "High-performance",
      "Load balancing",
      "Reverse proxy",
      "Efficiënt resource gebruik",
    ],
    longDescription:
      "NGINX is de snelste en meest efficiënte webserver ter wereld. Waar traditionele webservers vastlopen onder hoge load, blijft NGINX presteren. Wij gebruiken NGINX als reverse proxy voor al onze applicaties, wat zorgt voor optimale performance, caching en load balancing.",
    features: [
      {
        title: "Reverse Proxy",
        description:
          "Efficiënte verdeling van verkeer naar backend applicaties met caching.",
      },
      {
        title: "Load Balancing",
        description:
          "Verdeel verkeer over meerdere servers voor hoge beschikbaarheid.",
      },
      {
        title: "SSL Termination",
        description:
          "Ontlast backend servers door SSL af te handelen op NGINX niveau.",
      },
      {
        title: "Gzip Compression",
        description:
          "Comprimeer responses automatisch voor snellere overdracht.",
      },
    ],
    useCases: [
      "High-traffic websites",
      "API gateways",
      "Microservices architectuur",
      "Static file serving",
      "Streaming media",
    ],
    relatedTools: ["cloudflare", "nextjs", "wordpress"],
  },
];

const toolsEN: Tool[] = [
  {
    id: "wordpress",
    slug: "wordpress",
    name: "WordPress & Avada",
    icon: Globe,
    category: "CMS Platform",
    description:
      "WordPress with the Avada theme is our go-to solution for clients who want to manage their own content. Avada offers extensive design options and an intuitive drag-and-drop builder for maximum flexibility.",
    benefits: [
      "User-friendly content management",
      "Powerful drag-and-drop builder",
      "Extensive design options",
      "Large plugin ecosystem",
    ],
    longDescription:
      "WordPress is the world's most used CMS and offers a perfect balance between user-friendliness and flexibility. Combined with the Avada theme, we create websites that not only look beautiful but are also easy to manage by you or your team. No technical knowledge required to modify content.",
    features: [
      {
        title: "Drag-and-drop builder",
        description:
          "Build pages visually with the Avada Builder. Drag elements to the right place and see the result immediately.",
      },
      {
        title: "Plugin ecosystem",
        description:
          "Access to thousands of plugins for any functionality: from webshops to booking systems.",
      },
      {
        title: "SEO optimized",
        description:
          "Built-in SEO tools and compatibility with plugins like Yoast for optimal findability.",
      },
      {
        title: "Multilingual support",
        description:
          "Easily add multiple languages with WPML or Polylang for international websites.",
      },
    ],
    useCases: [
      "Corporate websites",
      "Webshops with WooCommerce",
      "Blogs and news sites",
      "Portfolio websites",
      "Membership sites",
    ],
    relatedTools: ["cms", "nginx", "cloudflare"],
  },
  {
    id: "nextjs",
    slug: "nextjs",
    name: "Next.js & React",
    icon: Code2,
    category: "Frontend Framework",
    description:
      "Next.js is our primary framework for building modern websites. With React as its foundation and features like Server Components, App Router and optimal SEO support, it's the perfect choice for any website.",
    benefits: [
      "Server-side rendering for better SEO",
      "Automatic code splitting",
      "Built-in image optimization",
      "Fast page loads with prefetching",
    ],
    longDescription:
      "Next.js is the most advanced React framework and offers everything you need for lightning-fast, scalable websites. From automatic code splitting to built-in image optimization - Next.js does the heavy lifting so we can focus on building great user experiences.",
    features: [
      {
        title: "Server Components",
        description:
          "Render components on the server for faster initial load times and better SEO.",
      },
      {
        title: "App Router",
        description:
          "Modern routing with layouts, loading states and error handling out of the box.",
      },
      {
        title: "Image Optimization",
        description:
          "Automatic image resizing, lazy loading and modern formats for optimal performance.",
      },
      {
        title: "API Routes",
        description:
          "Build backend functionality directly in your Next.js project without a separate server.",
      },
    ],
    useCases: [
      "High-performance marketing websites",
      "SaaS applications",
      "E-commerce platforms",
      "Web applications",
      "Jamstack websites",
    ],
    relatedTools: ["typescript", "tailwind", "cms"],
  },
  {
    id: "typescript",
    slug: "typescript",
    name: "TypeScript",
    icon: FileText,
    category: "Programming Language",
    description:
      "TypeScript adds type-safety to JavaScript, resulting in fewer bugs and more maintainable code. Every line of code we write is type-safe.",
    benefits: [
      "Fewer runtime errors",
      "Better developer experience",
      "Easier refactoring",
      "Automatic documentation",
    ],
    longDescription:
      "TypeScript is JavaScript with superpowers. By adding types to your code, TypeScript catches errors during development instead of in production. This means more stability, better tooling and code that lasts for years without building up technical debt.",
    features: [
      {
        title: "Static Type Checking",
        description:
          "Discover bugs during development, not when your users encounter them.",
      },
      {
        title: "IntelliSense",
        description:
          "Intelligent code completion and inline documentation for faster development.",
      },
      {
        title: "Refactoring Support",
        description:
          "Rename variables, functions or entire modules with confidence - TypeScript finds all references.",
      },
      {
        title: "Interface Definitions",
        description:
          "Define clear contracts between different parts of your application.",
      },
    ],
    useCases: [
      "Enterprise applications",
      "Large codebases with multiple developers",
      "API integrations",
      "Complex business logic",
      "Long-running projects",
    ],
    relatedTools: ["nextjs", "tailwind"],
  },
  {
    id: "tailwind",
    slug: "tailwind",
    name: "Tailwind CSS",
    icon: Palette,
    category: "Styling",
    description:
      "Tailwind CSS is our utility-first CSS framework. It enables us to quickly build custom designs without the overhead of traditional CSS.",
    benefits: [
      "Fast development",
      "Consistent design system",
      "Small bundle size",
      "Dark mode out of the box",
    ],
    longDescription:
      "Tailwind CSS revolutionizes the way we write CSS. Instead of inventing custom classes, we use utility classes that do exactly what they say. The result: faster development, more consistent designs and CSS bundles that only contain what's actually used.",
    features: [
      {
        title: "Utility-First",
        description:
          "Build any design directly in your HTML with low-level utility classes.",
      },
      {
        title: "Responsive Design",
        description:
          "Built-in breakpoints make responsive design simple and predictable.",
      },
      {
        title: "Design Tokens",
        description:
          "Consistent spacing, colors and typography through a central configuration file.",
      },
      {
        title: "JIT Compiler",
        description:
          "Generate only the CSS you actually use for minimal file size.",
      },
    ],
    useCases: [
      "Custom website designs",
      "Component libraries",
      "Design systems",
      "Rapid prototyping",
      "Marketing websites",
    ],
    relatedTools: ["nextjs", "typescript"],
  },
  {
    id: "cms",
    slug: "cms",
    name: "Headless CMS",
    icon: Database,
    category: "Content Management",
    description:
      "We work with various headless CMS solutions depending on your needs. From Sanity to Contentful, we choose the best tool for your situation.",
    benefits: [
      "Flexible content management",
      "User-friendly interface",
      "API-first approach",
      "Scalable and secure",
    ],
    longDescription:
      "A headless CMS separates content from presentation, allowing the same content to be used across multiple platforms. This offers maximum flexibility for the future: the same content for your website, app and digital signage. We work with Sanity, Contentful, Strapi and other solutions depending on your specific needs.",
    features: [
      {
        title: "API-First",
        description:
          "Content available via modern REST or GraphQL APIs for any frontend.",
      },
      {
        title: "Real-time Preview",
        description:
          "See changes directly on your website before they go live.",
      },
      {
        title: "Custom Content Types",
        description:
          "Define exactly which fields and structures you need for your content.",
      },
      {
        title: "Collaboration",
        description:
          "Work together with your team with roles, permissions and revision history.",
      },
    ],
    useCases: [
      "Multi-channel content",
      "Enterprise websites",
      "Marketing teams",
      "Content-heavy websites",
      "International websites",
    ],
    relatedTools: ["nextjs", "wordpress", "cloudflare"],
  },
  {
    id: "cloudflare",
    slug: "cloudflare",
    name: "Cloudflare",
    icon: Cloud,
    category: "CDN & Security",
    description:
      "Cloudflare protects and accelerates all our websites. From DDoS protection to caching, it's an essential part of our infrastructure.",
    benefits: [
      "Worldwide CDN network",
      "DDoS protection",
      "SSL/TLS encryption",
      "Web Application Firewall",
    ],
    longDescription:
      "Cloudflare is the world leader in web performance and security. With data centers in more than 300 cities worldwide, your visitors are always served from the nearest location. At the same time, Cloudflare protects your website against DDoS attacks, bots and other threats.",
    features: [
      {
        title: "Global CDN",
        description:
          "Content is cached at 300+ locations worldwide for minimal latency.",
      },
      {
        title: "DDoS Protection",
        description:
          "Automatic protection against distributed denial-of-service attacks.",
      },
      {
        title: "Web Application Firewall",
        description:
          "Protection against OWASP top 10 vulnerabilities and zero-day exploits.",
      },
      {
        title: "SSL/TLS",
        description:
          "Free SSL certificates and end-to-end encryption for secure connections.",
      },
    ],
    useCases: [
      "All websites",
      "E-commerce security",
      "API protection",
      "Performance optimization",
      "Bot management",
    ],
    relatedTools: ["nginx", "nextjs", "wordpress"],
  },
  {
    id: "nginx",
    slug: "nginx",
    name: "NGINX",
    icon: Server,
    category: "Web Server",
    description:
      "NGINX is our web server of choice. With excellent performance and scalability, it's the backbone of our hosting infrastructure.",
    benefits: [
      "High-performance",
      "Load balancing",
      "Reverse proxy",
      "Efficient resource usage",
    ],
    longDescription:
      "NGINX is the fastest and most efficient web server in the world. Where traditional web servers get stuck under high load, NGINX keeps performing. We use NGINX as a reverse proxy for all our applications, ensuring optimal performance, caching and load balancing.",
    features: [
      {
        title: "Reverse Proxy",
        description:
          "Efficient distribution of traffic to backend applications with caching.",
      },
      {
        title: "Load Balancing",
        description:
          "Distribute traffic across multiple servers for high availability.",
      },
      {
        title: "SSL Termination",
        description:
          "Offload backend servers by handling SSL at the NGINX level.",
      },
      {
        title: "Gzip Compression",
        description:
          "Automatically compress responses for faster transfer.",
      },
    ],
    useCases: [
      "High-traffic websites",
      "API gateways",
      "Microservices architecture",
      "Static file serving",
      "Streaming media",
    ],
    relatedTools: ["cloudflare", "nextjs", "wordpress"],
  },
];

export const toolsByLocale: Record<Locale, Tool[]> = {
  nl: toolsNL,
  en: toolsEN,
};

// Helper function to get tools by locale
export function getTools(locale: Locale = defaultLocale): Tool[] {
  return toolsByLocale[locale] || toolsByLocale[defaultLocale];
}

// Helper function to get a single tool by slug and locale
export function getTool(slug: string, locale: Locale = defaultLocale): Tool | undefined {
  const tools = getTools(locale);
  return tools.find((tool) => tool.slug === slug);
}

// Get all tool slugs for static generation
export function getAllToolSlugs(): string[] {
  return toolsNL.map((tool) => tool.slug);
}

// Legacy export for backward compatibility
export const tools = toolsNL;
