"use client";

import { motion } from "framer-motion";
import { Shield, Server, Lock, Eye, FileCheck, Users } from "lucide-react";

const avgFeatures = [
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Alle websites die wij bouwen zijn vanaf de basis ontworpen met privacy in gedachten. Wij verzamelen alleen gegevens die strikt noodzakelijk zijn.",
  },
  {
    icon: Server,
    title: "EU Hosting",
    description:
      "Al onze servers staan in Europa (Duitsland en Finland). Uw data verlaat nooit de Europese Unie, wat volledige AVG-compliance garandeert.",
  },
  {
    icon: Lock,
    title: "Versleuteling",
    description:
      "Alle gegevensoverdracht is beveiligd met SSL/TLS encryptie. Data at rest wordt versleuteld opgeslagen op onze servers.",
  },
  {
    icon: Eye,
    title: "Transparantie",
    description:
      "Wij zijn volledig transparant over welke gegevens we verzamelen en waarom. Geen verborgen tracking of onverwachte dataverzameling.",
  },
  {
    icon: FileCheck,
    title: "Verwerkersovereenkomst",
    description:
      "Voor al onze klanten stellen wij een verwerkersovereenkomst op die voldoet aan alle AVG-vereisten.",
  },
  {
    icon: Users,
    title: "Rechten van betrokkenen",
    description:
      "Wij faciliteren alle rechten van betrokkenen: inzage, correctie, verwijdering, bezwaar en dataportabiliteit.",
  },
];

export default function AVGPage() {
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
            AVG Compliance
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Volledig
            <br />
            <span className="text-gradient-accent">AVG-compliant</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Privacy en gegevensbescherming zijn geen optie, maar een vereiste.
            Wij zorgen ervoor dat jouw website en data volledig voldoen aan de
            Algemene Verordening Gegevensbescherming.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avgFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-background p-8 md:p-12 border border-white/5 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Wat is de AVG?
              </h2>
              <p className="text-muted-foreground">
                De Algemene Verordening Gegevensbescherming (AVG), ook bekend als
                GDPR, is de Europese privacywetgeving die sinds 25 mei 2018 van
                kracht is. Deze wet regelt hoe organisaties persoonsgegevens
                mogen verzamelen, verwerken en opslaan. Voor websites betekent
                dit onder andere verplichtingen rondom cookies, contactformulieren
                en analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Onze aanpak
              </h2>
              <p className="text-muted-foreground mb-4">
                Bij elk project zorgen wij voor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-white">Cookie consent banner:</strong>{" "}
                  Cookiebot integratie voor correcte toestemmingsverzameling
                </li>
                <li>
                  <strong className="text-white">Privacy-vriendelijke analytics:</strong>{" "}
                  GA4 met geanonimiseerde IP-adressen of alternatieven zoals Plausible
                </li>
                <li>
                  <strong className="text-white">Beveiligde formulieren:</strong>{" "}
                  Contactformulieren met minimale dataverzameling en versleuteling
                </li>
                <li>
                  <strong className="text-white">SSL certificaten:</strong>{" "}
                  HTTPS op alle paginas voor veilige dataoverdracht
                </li>
                <li>
                  <strong className="text-white">Privacyverklaring:</strong>{" "}
                  Op maat gemaakte privacy policy voor jouw website
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Server-side tracking
              </h2>
              <p className="text-muted-foreground">
                Als partner van Taggrs bieden wij server-side tracking
                oplossingen. Dit betekent dat tracking data via jouw eigen server
                loopt in plaats van direct naar Google of Meta. Dit geeft betere
                data-kwaliteit, werkt zonder third-party cookies, en is
                privacy-vriendelijker doordat je volledige controle hebt over
                welke data wordt gedeeld.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Verwerkersovereenkomst
              </h2>
              <p className="text-muted-foreground">
                Wanneer wij als verwerker optreden voor jouw persoonsgegevens
                (bijvoorbeeld bij hosting of onderhoud), stellen wij een
                verwerkersovereenkomst op. Dit document regelt de
                verantwoordelijkheden, beveiligingsmaatregelen en rechten
                conform de AVG. Vraag ons gerust naar een voorbeeld.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Vragen?
              </h2>
              <p className="text-muted-foreground">
                Heb je vragen over AVG-compliance of wil je weten hoe wij jouw
                website compliant kunnen maken? Neem contact met ons op via{" "}
                <a
                  href="mailto:info@robuustmarketing.nl"
                  className="text-accent hover:underline"
                >
                  info@robuustmarketing.nl
                </a>
                .
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
