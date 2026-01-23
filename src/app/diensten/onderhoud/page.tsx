"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  XCircle,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { pricing, formatPrice } from "@/data/pricing";

// Generate packages from central pricing config
const packages = Object.entries(pricing.slaPackages).map(([id, pkg]) => ({
  id,
  name: pkg.name,
  price: formatPrice(pkg.price),
  popular: pkg.popular || false,
  highlight: pkg.popular || false,
}));

// SLA feature labels
const slaFeatureLabels = [
  { key: "preventief", label: "Preventief Onderhoud (WordPress & Plug-ins Updates)" },
  { key: "monitoring", label: "Pro-actieve Monitoring" },
  { key: "backups", label: "Back-ups via Host en Extern" },
  { key: "incidenten", label: "Incidenten per maand inbegrepen" },
  { key: "reactietijd", label: "Reactietijd voor Incidenten" },
  { key: "oplostijd", label: "Oplostijd voor incidenten" },
  { key: "meeting", label: "Inbegrepen online meeting" },
  { key: "rapportage", label: "Rapportagefrequentie" },
  { key: "uptime", label: "Uptimegarantie op jaarbasis" },
] as const;

// Generate slaFeatures from central pricing config
const slaFeatures = slaFeatureLabels.map(({ key, label }) => ({
  feature: label,
  essential: pricing.slaPackages.essential.features[key],
  light: pricing.slaPackages.light.features[key],
  medium: pricing.slaPackages.medium.features[key],
  large: pricing.slaPackages.large.features[key],
}));

const included = [
  {
    icon: Shield,
    title: "Websitebeveiliging up-to-date houden",
    description:
      "Door de meest recente beveiliging te gebruiken, is de website ook tegen de meest recente exploits beschermd.",
  },
  {
    icon: Zap,
    title: "Proactief handelen",
    description:
      "Verbeteracties zullen worden uitgevoerd voordat er problemen optreden. Mocht er toch een probleem optreden, lossen wij dit binnen de SLA op.",
  },
  {
    icon: Clock,
    title: "Snelheidsoptimalisatiecheck",
    description:
      "Een goed voorbeeld van wat effect heeft op de snelheid, is het opschonen van oude foto's, ongebruikte pagina's en bestanden.",
  },
];

const notIncluded = [
  {
    title: "Grote tekstwijzigingen",
    description:
      "Het zelf wijzigen van teksten op pagina's is intuitief en kunt u over het algemeen zelf. Hiervoor rekenen wij ons uurtarief. Uiteraard lossen we wel foutieve omleidingen of ander soort fouten op binnen de SLA.",
  },
  {
    title: "Nieuwe pagina's invoegen",
    description:
      "We zullen geen pagina's toevoegen; we zullen wel pagina's opschonen wanneer deze niet meer in gebruik zijn. Dit gebeurt in overleg.",
  },
  {
    title: "Aanpassingen in design",
    description:
      "Designaanpassingen zijn niet inbegrepen in ons onderhoud; deze zullen we dan ook niet uitvoeren.",
  },
];

export default function OnderhoudPage() {
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
            Website Onderhoud
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Proactief beschermen
            <br />
            <span className="text-gradient-accent">met waterdichte SLA's</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Kies tussen proactief beschermen of reactief genezen. Wij adviseren
            altijd preventief onderhoud - bespaar tijd, geld en zorgen.
          </motion.p>
        </div>
      </section>

      {/* Preventief vs Reactief */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Preventief */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Voorkomen door onderhoud
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Proactieve bescherming tegen hackers en performance problemen.
                In onze ervaring zien we dat als je dit niet regelmatig aanpakt,
                het een mogelijk groot probleem kan worden.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="h-4 w-4" />
                  Voorkom problemen voordat ze ontstaan
                </div>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="h-4 w-4" />
                  Bespaar tijd en geld op lange termijn
                </div>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle className="h-4 w-4" />
                  Waterdichte SLA garanties
                </div>
              </div>
            </motion.div>

            {/* Reactief */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-400">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Genezen met spoed
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Spoedgevallen:{" "}
                <span className="font-bold text-white">{formatPrice(pricing.emergencyRate)} ex BTW per uur</span>.
                Minimale tijd: 15 minuten.
              </p>
              <div className="rounded-xl bg-red-500/10 p-4 border border-red-500/20">
                <p className="text-sm font-semibold text-red-400 mb-2">
                  Reactieve oplossing tegen hackers
                </p>
                <p className="text-sm text-muted-foreground">
                  Als uw website offline raakt door een hack, kunnen we een
                  back-up herstellen. Inclusief malware-scan en reparaties kost
                  dit normaal gesproken ongeveer 2,5 uur tegen ons spoedtarief.
                  Dit kan dus aanzienlijk in de kosten lopen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLA Pakketten Tabel */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Pro-actief Onderhoud Pakketten
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Kies het pakket dat bij jouw bedrijf past
            </motion.p>
          </div>

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl bg-surface border border-white/5 pt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-white/10 p-4 text-left">
                      <span className="text-lg font-bold text-white">Pakket</span>
                    </th>
                    {packages.map((pkg) => (
                      <th
                        key={pkg.name}
                        className={`relative border-b border-white/10 p-4 text-center ${pkg.highlight ? "bg-accent/10" : ""}`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-lg">
                              Populair
                            </span>
                          </div>
                        )}
                        <div className="text-xl font-bold text-white">
                          {pkg.name}
                        </div>
                        <div className="mt-1 text-2xl font-bold text-accent">
                          {pkg.price}
                        </div>
                        <div className="text-xs text-muted-foreground">per maand</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slaFeatures.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border-b border-white/5 p-4 font-medium text-muted-foreground">
                        {row.feature}
                      </td>
                      <td className="border-b border-white/5 p-4 text-center text-sm text-muted-foreground">
                        {row.essential}
                      </td>
                      <td className="border-b border-white/5 p-4 text-center text-sm text-muted-foreground">
                        {row.light}
                      </td>
                      <td className="border-b border-white/5 bg-accent/5 p-4 text-center text-sm font-medium text-white">
                        {row.medium}
                      </td>
                      <td className="border-b border-white/5 p-4 text-center text-sm text-muted-foreground">
                        {row.large}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="space-y-6 lg:hidden">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl p-6 border ${pkg.highlight ? "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20" : "bg-surface border-white/5"}`}
              >
                {pkg.popular && (
                  <div className="mb-4">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                      Populair
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-muted-foreground">per maand</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {slaFeatures.map((feature, idx) => {
                    const value =
                      pkg.name === "Essential"
                        ? feature.essential
                        : pkg.name === "Light"
                          ? feature.light
                          : pkg.name === "Medium"
                            ? feature.medium
                            : feature.large;
                    return (
                      <div
                        key={idx}
                        className="flex justify-between border-b border-white/10 pb-2"
                      >
                        <span className="text-sm text-muted-foreground">
                          {feature.feature}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <Button asChild className="mt-6 w-full bg-accent hover:bg-accent-hover text-white">
                  <Link href="/contact?package=onderhoud">Kies dit pakket</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Vraag een offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Wat is inbegrepen */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Wat zit er in het onderhoudscontract?
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {included.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat is niet inbegrepen */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Wat zit er NIET in het onderhoudscontract?
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {notIncluded.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-red-500/20"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Extra Services
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Website Wijzigingen
              </h3>
              <p className="text-muted-foreground">
                Voor website wijzigingen neem je contact met ons op via{" "}
                <a
                  href="mailto:info@robuustmarketing.nl"
                  className="text-accent hover:underline"
                >
                  info@robuustmarketing.nl
                </a>
                . Voor uitgebreide wijzigingen plannen wij graag een overleg om
                de details te bespreken. Voor kleinere updates stuur je een
                opsomming van je wensen, waarna wij een vrijblijvende offerte
                toesturen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Website Veiligheidscheck
              </h3>
              <p className="text-muted-foreground">
                Je kunt een veiligheidscontrole voor je website bij ons
                aanvragen. Zo'n controle geeft inzicht in de huidige staat van
                je websitebeveiliging, aansluitend voorzien wij je van gepast
                advies. Voor deze service hanteren wij ons standaard uurtarief.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Klaar om je website proactief te beschermen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Kies voor zekerheid met onze SLA pakketten. Neem contact op voor
            advies op maat.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Vraag een offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5"
            >
              <Link href="/diensten">Bekijk alle diensten</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
