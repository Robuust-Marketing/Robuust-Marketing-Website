"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const glossaryTerms = [
  {
    term: "API",
    full: "Application Programming Interface",
    description:
      "Een set regels en protocollen waarmee verschillende softwaretoepassingen met elkaar kunnen communiceren. APIs maken het mogelijk om data uit te wisselen tussen systemen.",
    category: "Development",
  },
  {
    term: "CMS",
    full: "Content Management System",
    description:
      "Software waarmee je website-inhoud kunt beheren zonder technische kennis. Voorbeelden zijn WordPress, Sanity en Contentful.",
    category: "Development",
  },
  {
    term: "CDN",
    full: "Content Delivery Network",
    description:
      "Een netwerk van servers verspreid over de wereld die content leveren aan gebruikers vanaf de dichtstbijzijnde locatie, wat zorgt voor snellere laadtijden.",
    category: "Hosting",
  },
  {
    term: "DNS",
    full: "Domain Name System",
    description:
      "Het systeem dat domeinnamen (zoals robuust.marketing) vertaalt naar IP-adressen zodat browsers de juiste server kunnen vinden.",
    category: "Hosting",
  },
  {
    term: "Headless CMS",
    full: "Headless Content Management System",
    description:
      "Een CMS dat alleen de backend (content beheer) verzorgt en de content via een API beschikbaar stelt, zonder gekoppelde frontend.",
    category: "Development",
  },
  {
    term: "LCP",
    full: "Largest Contentful Paint",
    description:
      "Een Core Web Vital die meet hoe lang het duurt voordat het grootste content-element (meestal een afbeelding of tekstblok) zichtbaar is.",
    category: "Performance",
  },
  {
    term: "Meta Pixel",
    full: "Meta Tracking Pixel",
    description:
      "Een stukje code van Meta (Facebook/Instagram) dat geplaatst wordt op je website om conversies te meten en remarketing mogelijk te maken.",
    category: "Analytics",
  },
  {
    term: "Next.js",
    full: "Next.js Framework",
    description:
      "Een React framework voor het bouwen van moderne webapplicaties met features zoals server-side rendering, static site generation en API routes.",
    category: "Development",
  },
  {
    term: "React",
    full: "React JavaScript Library",
    description:
      "Een JavaScript library ontwikkeld door Meta voor het bouwen van gebruikersinterfaces met herbruikbare componenten.",
    category: "Development",
  },
  {
    term: "SEO",
    full: "Search Engine Optimization",
    description:
      "Het proces van het optimaliseren van een website om hoger te scoren in zoekmachines zoals Google.",
    category: "SEO",
  },
  {
    term: "SSL",
    full: "Secure Sockets Layer",
    description:
      "Een beveiligingsprotocol dat een versleutelde verbinding creëert tussen een webserver en een browser (het groene slotje).",
    category: "Security",
  },
  {
    term: "SSR",
    full: "Server-Side Rendering",
    description:
      "Een techniek waarbij webpagina's op de server worden gegenereerd voordat ze naar de browser worden gestuurd, wat goed is voor SEO en performance.",
    category: "Development",
  },
  {
    term: "TypeScript",
    full: "TypeScript Programming Language",
    description:
      "Een uitbreiding op JavaScript die type-checking toevoegt, waardoor code betrouwbaarder en beter onderhoudbaar wordt.",
    category: "Development",
  },
  {
    term: "UI",
    full: "User Interface",
    description:
      "De visuele elementen waarmee gebruikers interacteren: knoppen, formulieren, menu's, etc.",
    category: "Design",
  },
  {
    term: "UX",
    full: "User Experience",
    description:
      "De totale ervaring die een gebruiker heeft bij het gebruik van een product of dienst, inclusief usability, toegankelijkheid en plezier.",
    category: "Design",
  },
  {
    term: "Webhook",
    full: "Webhook",
    description:
      "Een manier voor apps om real-time informatie naar andere apps te sturen wanneer een bepaalde gebeurtenis plaatsvindt.",
    category: "Development",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPageClient() {
  const t = useTranslations("glossaryPage");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredTerms = glossaryTerms
    .filter((item) => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter
        ? item.term.toUpperCase().startsWith(selectedLetter)
        : true;
      return matchesSearch && matchesLetter;
    })
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative pb-12">
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

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/kennisbank"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToKennisbank")}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg mb-8"
          >
            {t("subtitle")}
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-surface border-white/10"
            />
          </motion.div>

          {/* Alphabet filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-1"
          >
            <button
              onClick={() => setSelectedLetter(null)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                selectedLetter === null
                  ? "bg-accent text-white"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {t("all")}
            </button>
            {alphabet.map((letter) => {
              const hasTerms = glossaryTerms.some((t) =>
                t.term.toUpperCase().startsWith(letter)
              );
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && setSelectedLetter(letter)}
                  disabled={!hasTerms}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    selectedLetter === letter
                      ? "bg-accent text-white"
                      : hasTerms
                      ? "text-muted-foreground hover:text-white"
                      : "text-muted-foreground/30 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Terms List */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {t("noResults")}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTerms.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl bg-surface border border-white/5 p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.term}
                      </h3>
                      {item.full !== item.term && (
                        <p className="text-sm text-accent">{item.full}</p>
                      )}
                    </div>
                    <span className="px-2 py-1 text-xs bg-white/5 text-muted-foreground rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
