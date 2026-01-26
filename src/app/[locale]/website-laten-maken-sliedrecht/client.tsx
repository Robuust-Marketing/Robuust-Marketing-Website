"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  MapPin,
  Shield,
  PenTool,
  Code,
  Search,
  Clock,
  Star,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const localBenefits = [
  {
    icon: MapPin,
    title: "Lokale expertise",
    description:
      "Als webbureau uit de regio kennen we de lokale markt en kunnen we persoonlijk langskomen voor overleg.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description:
      "Geen anoniem callcenter maar direct contact met je vaste projectmanager uit de buurt.",
  },
  {
    icon: Clock,
    title: "Korte lijntjes",
    description:
      "Snel schakelen door de korte afstand. Binnen een dag kunnen we bij je langs voor overleg.",
  },
  {
    icon: Building2,
    title: "Lokale referenties",
    description:
      "Bekijk het werk dat we voor andere bedrijven in Sliedrecht en omgeving hebben gemaakt.",
  },
];

const services = [
  {
    icon: PenTool,
    title: "Webdesign",
    description:
      "Een uniek ontwerp dat past bij jouw bedrijf en aanspreekt bij je doelgroep in Sliedrecht.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Technisch perfecte websites gebouwd met moderne technologieën voor optimale prestaties.",
  },
  {
    icon: Search,
    title: "Lokale SEO",
    description:
      "Gevonden worden in Sliedrecht en omgeving. We optimaliseren voor lokale zoekopdrachten.",
  },
  {
    icon: Shield,
    title: "Hosting & Onderhoud",
    description:
      "Zorgeloos online met betrouwbare hosting en proactief onderhoud.",
  },
];

const nearbyAreas = [
  "Zwijndrecht",
  "Ridderkerk",
  "Hendrik-Ido-Ambacht",
  "Dordrecht",
  "Barendrecht",
  "Papendrecht",
  "Alblasserdam",
  "Rotterdam",
];

export default function WebsiteLatenMakenSliedrechtPageClient() {
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
                "radial-gradient(ellipse, rgba(197, 60, 11, 0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Sliedrecht & omgeving
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Website laten maken in{" "}
              <span className="text-gradient-accent">Sliedrecht</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Op zoek naar een webbureau in Sliedrecht? Wij maken professionele
              websites voor ondernemers in Sliedrecht en de Drechtsteden. Lokaal,
              persoonlijk en resultaatgericht.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Gratis adviesgesprek
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <Link href="/portfolio">Bekijk ons werk</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  5.0 beoordeling
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Actief in de Drechtsteden
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Waarom kiezen voor een lokaal webbureau?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De voordelen van een website bureau uit Sliedrecht en omgeving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Onze diensten in Sliedrecht
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van ontwerp tot onderhoud, we helpen bedrijven in Sliedrecht met
              al hun online behoeften
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-8 border border-white/5 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Professionele websites voor Sliedrecht
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Als ondernemer in Sliedrecht weet je hoe belangrijk een goede
                  online aanwezigheid is. Of je nu een bakker bent in het Centrum,
                  een loodgieter in Baanhoek, een makelaar in de Uitbreiding of
                  een autobedrijf runt in Sliedrecht-Noord - een professionele
                  website is onmisbaar.
                </p>
                <p>
                  Wij helpen lokale ondernemers met het bouwen van websites die
                  niet alleen mooi zijn, maar ook gevonden worden. Met lokale
                  SEO zorgen we dat je hoog scoort wanneer iemand zoekt naar jouw
                  diensten in Sliedrecht.
                </p>
                <p>
                  Door onze lokale aanwezigheid kunnen we snel bij je langskomen
                  voor een kennismakingsgesprek of om de website te presenteren.
                  Geen lange reistijden of onpersoonlijke videocalls.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Persoonlijk advies aan huis of kantoor
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Kennis van de lokale markt
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Gevonden worden in Sliedrecht
                </li>
                <li className="flex items-center gap-2 text-white">
                  <Check className="h-4 w-4 text-accent" />
                  Snelle communicatie en korte lijnen
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Ook actief in omliggende plaatsen
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground text-sm">
                Naast Sliedrecht zijn we ook actief in de hele Drechtsteden en
                omgeving. Neem contact op voor een vrijblijvend gesprek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Website laten maken in Sliedrecht?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Plan een gratis adviesgesprek. We komen graag langs om je wensen te
            bespreken en te kijken hoe we je kunnen helpen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Plan een gesprek
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/offerte">Vraag een offerte aan</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
