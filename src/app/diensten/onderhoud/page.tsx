import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Shield, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Onderhoud & SLA Pakketten | Robuust Marketing",
  description:
    "Proactieve website onderhoud pakketten met waterdichte SLA's. Van Essential tot Large - kies het pakket dat bij jouw bedrijf past.",
};

const packages = [
  {
    name: "Essential",
    price: "€ 60",
    color: "border-slate/30",
  },
  {
    name: "Light",
    price: "€ 120",
    color: "border-royal-blue/30",
  },
  {
    name: "Medium",
    price: "€ 225",
    color: "border-navy/30",
    popular: true,
  },
  {
    name: "Large",
    price: "€ 575",
    color: "border-gold",
  },
];

const slaFeatures = [
  {
    feature: "Preventief Onderhoud (WordPress & Plug-ins Updates)",
    essential: "1x per maand",
    light: "1x per week",
    medium: "1x per werkdag",
    large: "4x per werkdag",
  },
  {
    feature: "Pro-actieve Monitoring",
    essential: "Elke minuut",
    light: "Elke minuut",
    medium: "Elke minuut",
    large: "Elke minuut",
  },
  {
    feature: "Back-ups via Host en Extern",
    essential: "Wekelijks",
    light: "Dagelijks",
    medium: "2x per dag",
    large: "4x per dag",
  },
  {
    feature: "Incidenten per maand inbegrepen",
    essential: "1 incident",
    light: "2 incidenten",
    medium: "4 incidenten",
    large: "8 incidenten",
  },
  {
    feature: "Reactietijd voor Incidenten",
    essential: "Binnen 48 uur",
    light: "Binnen 48 uur",
    medium: "Binnen 24 uur",
    large: "Binnen 12 uur",
  },
  {
    feature: "Oplostijd voor incidenten",
    essential: "Binnen 5 werkdagen",
    light: "Binnen 3 werkdagen",
    medium: "Binnen 72 uur",
    large: "Binnen 36 uur",
  },
  {
    feature: "Inbegrepen online meeting",
    essential: "1x per jaar",
    light: "1x per halfjaar",
    medium: "1x per kwartaal",
    large: "1x per maand",
  },
  {
    feature: "Rapportagefrequentie",
    essential: "Maandelijks",
    light: "Maandelijks",
    medium: "Maandelijks",
    large: "Wekelijks",
  },
  {
    feature: "Uptimegarantie op jaarbasis",
    essential: "98,0%",
    light: "98,5%",
    medium: "99,0%",
    large: "99,5%",
  },
];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-royal-blue to-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Website Onderhoud
              <span className="block text-gold">met Waterdichte SLA's</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate">
              Kies tussen proactief beschermen of reactief genezen. Wij
              adviseren altijd preventief onderhoud - bespaar tijd, geld en
              zorgen.
            </p>
          </div>
        </div>
      </section>

      {/* Preventief vs Reactief */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Preventief */}
            <Card className="border-2 border-gold bg-warm-white p-8">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-gold" />
                <h2 className="text-2xl font-bold text-navy">
                  Voorkomen door onderhoud
                </h2>
              </div>
              <p className="mt-4 text-slate">
                Proactieve bescherming tegen hackers en performance problemen.
                In onze ervaring zien we dat als je dit niet regelmatig
                aanpakt, het een mogelijk groot probleem kan worden.
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gold">
                  ✓ Voorkom problemen voordat ze ontstaan
                </p>
                <p className="mt-2 text-sm font-semibold text-gold">
                  ✓ Bespaar tijd en geld op lange termijn
                </p>
                <p className="mt-2 text-sm font-semibold text-gold">
                  ✓ Waterdichte SLA garanties
                </p>
              </div>
            </Card>

            {/* Reactief */}
            <Card className="border-2 border-destructive/30 p-8">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-destructive" />
                <h2 className="text-2xl font-bold text-navy">
                  Genezen met spoed
                </h2>
              </div>
              <p className="mt-4 text-slate">
                Spoedgevallen: <span className="font-bold">€175 ex BTW per uur</span>. Minimale
                tijd: 15 minuten.
              </p>
              <div className="mt-4 rounded-lg bg-destructive/10 p-4">
                <p className="text-sm font-semibold text-destructive">
                  Reactieve oplossing tegen hackers
                </p>
                <p className="mt-2 text-sm text-charcoal">
                  Als uw website offline raakt door een hack, kunnen we een
                  back-up herstellen. Inclusief malware-scan en reparaties kost
                  dit normaal gesproken ongeveer 2,5 uur tegen ons spoedtarief.
                  Dit kan dus aanzienlijk in de kosten lopen.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SLA Pakketten Tabel */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Pro-actief Onderhoud Pakketten
            </h2>
            <p className="mt-4 text-lg text-slate">
              Kies het pakket dat bij jouw bedrijf past
            </p>
          </div>

          {/* Desktop Table */}
          <div className="mt-12 hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-navy bg-white p-4 text-left">
                    <span className="text-lg font-bold text-navy">Pakket</span>
                  </th>
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className={`relative border-b-2 ${pkg.color} bg-white p-4 text-center`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                            Populair
                          </span>
                        </div>
                      )}
                      <div className="text-xl font-bold text-navy">
                        {pkg.name}
                      </div>
                      <div className="mt-1 text-2xl font-bold text-gold">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-slate">per maand</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slaFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-warm-white"}
                  >
                    <td className="border-b border-border p-4 font-medium text-charcoal">
                      {row.feature}
                    </td>
                    <td className="border-b border-border p-4 text-center text-sm text-charcoal">
                      {row.essential}
                    </td>
                    <td className="border-b border-border p-4 text-center text-sm text-charcoal">
                      {row.light}
                    </td>
                    <td className="border-b border-navy/20 bg-navy/5 p-4 text-center text-sm font-medium text-navy">
                      {row.medium}
                    </td>
                    <td className="border-b border-border p-4 text-center text-sm text-charcoal">
                      {row.large}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="mt-12 space-y-6 lg:hidden">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`border-2 ${pkg.color} p-6`}>
                {pkg.popular && (
                  <div className="mb-4">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                      Populair
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-navy">{pkg.name}</h3>
                  <div>
                    <div className="text-2xl font-bold text-gold">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-slate">per maand</div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
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
                        className="flex justify-between border-b border-border pb-2"
                      >
                        <span className="text-sm text-charcoal">
                          {feature.feature}
                        </span>
                        <span className="text-sm font-medium text-navy">
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact?package=onderhoud">Kies dit pakket</Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
              <Link href="/contact">Vraag een offerte aan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wat is inbegrepen */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy">
            Wat zit er in het onderhoudscontract?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {included.map((item, idx) => (
              <Card key={idx} className="p-6">
                <item.icon className="h-10 w-10 text-gold" />
                <h3 className="mt-4 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wat is niet inbegrepen */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy">
            Wat zit er NIET in het onderhoudscontract?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {notIncluded.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border-2 border-destructive/20 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="h-6 w-6 flex-shrink-0 text-destructive" />
                  <div>
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy">
            Extra Services
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-navy">
                Website Wijzigingen
              </h3>
              <p className="mt-3 text-sm text-slate">
                Voor website wijzigingen neem je contact met ons op via{" "}
                <a
                  href="mailto:info@robuust.marketing"
                  className="text-gold hover:underline"
                >
                  info@robuust.marketing
                </a>
                . Voor uitgebreide wijzigingen plannen wij graag een overleg om
                de details te bespreken. Voor kleinere updates stuur je een
                opsomming van je wensen, waarna wij een vrijblijvende offerte
                toesturen.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-navy">
                Website Veiligheidscheck
              </h3>
              <p className="mt-3 text-sm text-slate">
                Je kunt een veiligheidscontrole voor je website bij ons
                aanvragen. Zo'n controle geeft inzicht in de huidige staat van
                je websitebeveiliging, aansluitend voorzien wij je van gepast
                advies. Voor deze service hanteren wij ons standaard uurtarief.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Klaar om je website proactief te beschermen?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Kies voor zekerheid met onze SLA pakketten. Neem contact op voor
            advies op maat.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
              <Link href="/contact">Vraag een offerte aan</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/diensten">Bekijk alle diensten</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
