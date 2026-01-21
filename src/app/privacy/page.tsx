"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Laatst bijgewerkt: januari 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="rounded-3xl bg-surface p-8 md:p-12 border border-white/5 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Inleiding
                </h2>
                <p className="text-muted-foreground">
                  Robuust Marketing, gevestigd in Nederland, is verantwoordelijk
                  voor de verwerking van persoonsgegevens zoals weergegeven in
                  deze privacyverklaring. Wij respecteren de privacy van alle
                  gebruikers van onze website en dragen er zorg voor dat de
                  persoonlijke informatie die u ons verschaft vertrouwelijk wordt
                  behandeld.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Welke gegevens verzamelen wij?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wij verzamelen de volgende persoonsgegevens:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Naam en contactgegevens (e-mail, telefoonnummer)</li>
                  <li>Bedrijfsgegevens (bedrijfsnaam, functie)</li>
                  <li>
                    Technische gegevens (IP-adres, browsertype, apparaatgegevens)
                  </li>
                  <li>
                    Gebruiksgegevens (hoe u onze website gebruikt, welke paginas
                    u bezoekt)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. Waarvoor gebruiken wij uw gegevens?
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Om contact met u op te nemen naar aanleiding van een
                    aanvraag
                  </li>
                  <li>
                    Om onze dienstverlening te verbeteren en te personaliseren
                  </li>
                  <li>
                    Om u te informeren over onze diensten (alleen met uw
                    toestemming)
                  </li>
                  <li>
                    Om te voldoen aan wettelijke verplichtingen
                  </li>
                  <li>
                    Voor website-analyse en optimalisatie
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Onze website maakt gebruik van cookies. Cookies zijn kleine
                  tekstbestanden die op uw apparaat worden opgeslagen. Wij
                  gebruiken:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-white">Functionele cookies:</strong>{" "}
                    noodzakelijk voor het functioneren van de website
                  </li>
                  <li>
                    <strong className="text-white">Analytische cookies:</strong>{" "}
                    om inzicht te krijgen in het gebruik van onze website
                    (Google Analytics)
                  </li>
                  <li>
                    <strong className="text-white">Marketing cookies:</strong>{" "}
                    alleen met uw toestemming, voor het tonen van relevante
                    advertenties
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Via onze cookiebanner kunt u uw voorkeuren beheren en
                  toestemming geven of intrekken.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Bewaartermijn
                </h2>
                <p className="text-muted-foreground">
                  Wij bewaren uw persoonsgegevens niet langer dan strikt nodig
                  is om de doelen te realiseren waarvoor uw gegevens worden
                  verzameld. Contactgegevens worden maximaal 2 jaar na het
                  laatste contact bewaard, tenzij er een lopende
                  klantrelatie is.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Delen met derden
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wij delen uw gegevens alleen met derden indien dit noodzakelijk
                  is voor het uitvoeren van onze diensten:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Hostingproviders (servers in EU: Duitsland/Finland)
                  </li>
                  <li>
                    Analytics diensten (Google Analytics - geanonimiseerd)
                  </li>
                  <li>
                    E-mail dienstverleners (voor het verzenden van berichten)
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Wij verkopen uw gegevens nooit aan derden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Uw rechten
                </h2>
                <p className="text-muted-foreground mb-4">
                  U heeft het recht om:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Uw persoonsgegevens in te zien</li>
                  <li>Uw persoonsgegevens te corrigeren</li>
                  <li>Uw persoonsgegevens te laten verwijderen</li>
                  <li>Bezwaar te maken tegen de verwerking</li>
                  <li>Uw gegevens over te dragen (dataportabiliteit)</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  U kunt een verzoek indienen via{" "}
                  <a
                    href="mailto:info@robuustmarketing.nl"
                    className="text-accent hover:underline"
                  >
                    info@robuustmarketing.nl
                  </a>
                  . Wij reageren binnen 30 dagen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Beveiliging
                </h2>
                <p className="text-muted-foreground">
                  Wij nemen de bescherming van uw gegevens serieus en nemen
                  passende maatregelen om misbruik, verlies, onbevoegde
                  toegang, ongewenste openbaarmaking en ongeoorloofde wijziging
                  tegen te gaan. Onze website maakt gebruik van een SSL-certificaat
                  en onze servers staan in beveiligde datacenters in Europa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Contact
                </h2>
                <p className="text-muted-foreground">
                  Heeft u vragen over deze privacyverklaring of over de
                  verwerking van uw persoonsgegevens? Neem dan contact met ons
                  op via{" "}
                  <a
                    href="mailto:info@robuustmarketing.nl"
                    className="text-accent hover:underline"
                  >
                    info@robuustmarketing.nl
                  </a>
                  .
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
