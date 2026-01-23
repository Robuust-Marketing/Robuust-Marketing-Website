"use client";

import { motion } from "framer-motion";

export default function VoorwaardenPage() {
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
            Algemene Voorwaarden
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
            className="rounded-3xl bg-surface p-8 md:p-12 border border-white/5 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 1 - Definities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-white">Robuust Marketing:</strong> de
                  eenmanszaak gevestigd in Nederland, hierna te noemen
                  &quot;opdrachtnemer&quot;.
                </li>
                <li>
                  <strong className="text-white">Opdrachtgever:</strong> de
                  natuurlijke of rechtspersoon die met Robuust Marketing een
                  overeenkomst aangaat.
                </li>
                <li>
                  <strong className="text-white">Diensten:</strong> alle door
                  Robuust Marketing aangeboden diensten, waaronder maar niet
                  beperkt tot webdesign, webdevelopment, hosting en onderhoud.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 2 - Toepasselijkheid
              </h2>
              <p className="text-muted-foreground mb-4">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen,
                offertes, werkzaamheden, overeenkomsten en leveringen van diensten
                door of namens Robuust Marketing.
              </p>
              <p className="text-muted-foreground">
                Afwijkingen van deze voorwaarden zijn slechts geldig indien deze
                uitdrukkelijk schriftelijk zijn overeengekomen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 3 - Offertes en aanbiedingen
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen,
                  tenzij anders aangegeven.
                </li>
                <li>
                  Prijzen in offertes zijn exclusief BTW, tenzij anders vermeld.
                </li>
                <li>
                  Een overeenkomst komt tot stand na schriftelijke aanvaarding van
                  de offerte door de opdrachtgever.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 4 - Uitvoering van de overeenkomst
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Robuust Marketing voert de overeenkomst naar beste inzicht en
                  vermogen uit.
                </li>
                <li>
                  De opdrachtgever draagt er zorg voor dat alle gegevens die nodig
                  zijn voor de uitvoering tijdig worden aangeleverd.
                </li>
                <li>
                  Genoemde termijnen zijn indicatief en geen fatale termijnen.
                  Overschrijding geeft geen recht op schadevergoeding of ontbinding.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 5 - Betalingsvoorwaarden
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Betaling dient te geschieden binnen 14 dagen na factuurdatum,
                  tenzij anders overeengekomen.
                </li>
                <li>
                  Bij projecten boven €2.500 kan een aanbetaling van 50% worden
                  gevraagd voor aanvang van de werkzaamheden.
                </li>
                <li>
                  Bij niet-tijdige betaling is de opdrachtgever van rechtswege in
                  verzuim en is wettelijke rente verschuldigd.
                </li>
                <li>
                  Hosting- en onderhoudskosten worden maandelijks of jaarlijks
                  vooruit gefactureerd.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 6 - Intellectueel eigendom
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Alle rechten van intellectuele eigendom op de ontwikkelde
                  materialen berusten bij Robuust Marketing, tenzij anders
                  schriftelijk overeengekomen.
                </li>
                <li>
                  Na volledige betaling verkrijgt de opdrachtgever een
                  gebruiksrecht op de geleverde materialen.
                </li>
                <li>
                  Robuust Marketing behoudt het recht om het ontwerp te gebruiken
                  voor eigen promotiedoeleinden, tenzij anders overeengekomen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 7 - Hosting en onderhoud
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Hostingdiensten worden geleverd met een uptime garantie van
                  99.9%, gemeten op jaarbasis.
                </li>
                <li>
                  Onderhoudswerkzaamheden die buiten het overeengekomen pakket
                  vallen, worden apart geoffreerd.
                </li>
                <li>
                  De opdrachtgever is verantwoordelijk voor het maken van backups
                  van eigen content, tenzij een onderhoudscontract anders bepaalt.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 8 - Aansprakelijkheid
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  De aansprakelijkheid van Robuust Marketing is beperkt tot het
                  bedrag dat in het desbetreffende geval onder de
                  aansprakelijkheidsverzekering wordt uitgekeerd.
                </li>
                <li>
                  Robuust Marketing is niet aansprakelijk voor indirecte schade,
                  waaronder gevolgschade, gederfde winst of gemiste besparingen.
                </li>
                <li>
                  De opdrachtgever vrijwaart Robuust Marketing voor aanspraken van
                  derden die verband houden met de geleverde diensten.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 9 - Opzegging en ontbinding
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Doorlopende overeenkomsten (hosting, onderhoud) kunnen worden
                  opgezegd met inachtneming van een opzegtermijn van 1 maand.
                </li>
                <li>
                  Bij opzegging van projecten die in uitvoering zijn, zijn de tot
                  dan verrichte werkzaamheden verschuldigd.
                </li>
                <li>
                  Robuust Marketing kan de overeenkomst per direct ontbinden bij
                  wanbetaling of faillissement van de opdrachtgever.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 10 - Geheimhouding
              </h2>
              <p className="text-muted-foreground">
                Beide partijen zijn verplicht tot geheimhouding van alle
                vertrouwelijke informatie die zij in het kader van de
                overeenkomst hebben verkregen. Deze verplichting geldt ook na
                beëindiging van de overeenkomst.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 11 - Toepasselijk recht en geschillen
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Op alle overeenkomsten is uitsluitend Nederlands recht van
                  toepassing.
                </li>
                <li>
                  Geschillen worden voorgelegd aan de bevoegde rechter in het
                  arrondissement waar Robuust Marketing is gevestigd.
                </li>
                <li>
                  Partijen zullen eerst trachten geschillen in onderling overleg
                  op te lossen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Artikel 12 - Contact
              </h2>
              <p className="text-muted-foreground">
                Voor vragen over deze algemene voorwaarden kunt u contact opnemen
                via{" "}
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
