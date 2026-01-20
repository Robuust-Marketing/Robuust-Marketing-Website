"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  FileText,
  Palette,
  Database,
  Cloud,
  Server,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  {
    id: "nextjs",
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
    useCases: ["Alle websites", "E-commerce", "Web applicaties"],
  },
  {
    id: "typescript",
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
    useCases: ["Al onze projecten"],
  },
  {
    id: "tailwind",
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
    useCases: ["Al onze websites"],
  },
  {
    id: "cms",
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
    useCases: ["Blogs", "Marketing sites", "E-commerce"],
  },
  {
    id: "cloudflare",
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
    useCases: ["Alle hosting klanten"],
  },
  {
    id: "nginx",
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
    useCases: ["Alle hosting"],
  },
];

const additionalTools = [
  { name: "Vercel", description: "Deployment platform", icon: Globe },
  { name: "GitHub", description: "Version control", icon: Terminal },
  { name: "Figma", description: "Design tool", icon: Palette },
  { name: "Resend", description: "Email API", icon: FileText },
];

const whyThisStack = [
  {
    title: "Performance",
    description:
      "Onze stack is geoptimaliseerd voor snelheid. Gemiddeld behalen onze websites een Lighthouse score van 95+.",
  },
  {
    title: "SEO",
    description:
      "Server-side rendering en optimale meta-tags zorgen voor uitstekende vindbaarheid in Google.",
  },
  {
    title: "Onderhoud",
    description:
      "Type-safe code en moderne tooling maken onderhoud eenvoudig en voorspelbaar.",
  },
  {
    title: "Toekomst",
    description:
      "We gebruiken alleen technologie met een sterke community en actieve ontwikkeling.",
  },
];

export default function ToolingPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-20">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Tooling
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Onze
            <br />
            <span className="text-gradient-accent">tech stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We kiezen bewust voor moderne, betrouwbare technologie. Geen
            verouderde frameworks, maar een stack die schaalt en presteert.
          </motion.p>
        </div>
      </section>

      {/* Why This Stack */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyThisStack.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                id={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl bg-surface border border-white/5 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8">
                  {/* Header */}
                  <div className="lg:col-span-3 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <tech.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-accent text-xs font-medium uppercase tracking-wider">
                        {tech.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {tech.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-muted-foreground">{tech.description}</p>
                  </div>

                  {/* Benefits */}
                  <div className="lg:col-span-4">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Voordelen
                    </h4>
                    <ul className="space-y-2">
                      {tech.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Zap className="h-4 w-4 text-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              Aanvullende tools
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Naast onze core stack gebruiken we diverse tools voor specifieke
              taken.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-background p-4 border border-white/5 text-center"
              >
                <div className="mb-2 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white">
                  <tool.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-white">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Benieuwd naar onze aanpak?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            We vertellen je graag meer over hoe wij deze technologie inzetten
            voor jouw project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
