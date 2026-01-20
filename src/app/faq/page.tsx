"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    name: "Algemeen",
    faqs: [
      {
        question: "Wat doet Robuust Marketing precies?",
        answer:
          "Robuust Marketing is een full-service digitaal bureau gespecialiseerd in webdevelopment, hosting en online marketing. We helpen bedrijven met het bouwen van moderne websites, het beheren van hosting infrastructuur en het opzetten van effectieve marketing strategieën.",
      },
      {
        question: "Voor welke bedrijven werken jullie?",
        answer:
          "We werken met bedrijven van alle groottes, van startups tot gevestigde ondernemingen. Onze klanten komen uit diverse sectoren: e-commerce, zakelijke dienstverlening, horeca, tech en meer. De gemene deler is dat ze waarde hechten aan kwaliteit en een professionele online aanwezigheid.",
      },
      {
        question: "Waar zijn jullie gevestigd?",
        answer:
          "We zijn gevestigd in Nederland en werken primair met Nederlandse en Belgische klanten. Dankzij moderne communicatiemiddelen werken we ook regelmatig samen met internationale klanten.",
      },
    ],
  },
  {
    name: "Projecten & Prijzen",
    faqs: [
      {
        question: "Wat kost een website bij Robuust?",
        answer:
          "De kosten hangen af van de complexiteit en functionaliteiten. Een professionele website begint vanaf €2.500 (Solid Start pakket). Voor grotere projecten met geavanceerde functionaliteiten start de investering vanaf €7.500 (Firm Foundation pakket). We maken altijd eerst een op maat gemaakte offerte na een kennismakingsgesprek.",
      },
      {
        question: "Hoe lang duurt het om een website te bouwen?",
        answer:
          "Een gemiddeld website project duurt 6-12 weken van start tot lancering. Dit is afhankelijk van de complexiteit, de beschikbaarheid van content en de snelheid van feedback. Eenvoudige websites kunnen sneller, complexe platforms kunnen langer duren.",
      },
      {
        question: "Kan ik een bestaande website laten verbeteren?",
        answer:
          "Ja, we helpen regelmatig klanten met het optimaliseren of herontwerpen van bestaande websites. Dit kan variëren van kleine aanpassingen tot een complete redesign en migratie naar een moderner platform.",
      },
      {
        question: "Bieden jullie ook maatwerk oplossingen?",
        answer:
          "Absoluut. Naast onze standaard pakketten bouwen we ook volledig op maat gemaakte oplossingen. Denk aan custom portals, integraties met externe systemen, of unieke functionaliteiten die specifiek voor jouw business nodig zijn.",
      },
    ],
  },
  {
    name: "Hosting & Onderhoud",
    faqs: [
      {
        question: "Waar staan jullie servers?",
        answer:
          "Onze servers staan in Europa, specifiek in Duitsland en Finland. Dit zorgt voor snelle laadtijden voor Europese bezoekers en volledige AVG-compliance.",
      },
      {
        question: "Wat is jullie uptime garantie?",
        answer:
          "We garanderen een uptime van 99.9%. Dit betekent maximaal 8,76 uur downtime per jaar, maar in de praktijk liggen we ruim boven deze standaard. Alle websites worden 24/7 gemonitord.",
      },
      {
        question: "Maken jullie backups van mijn website?",
        answer:
          "Ja, we maken dagelijks automatische backups die minimaal 30 dagen bewaard worden. Bij onze onderhoudspakketten is dit standaard inbegrepen. In geval van problemen kunnen we snel een backup terugzetten.",
      },
      {
        question: "Wat houdt onderhoud precies in?",
        answer:
          "Website onderhoud omvat: security updates, plugin/package updates, performance monitoring, uptime monitoring, backup beheer en kleine content wijzigingen. We bieden verschillende onderhoudscontracten aan afhankelijk van je behoeften.",
      },
    ],
  },
  {
    name: "Samenwerking",
    faqs: [
      {
        question: "Hoe verloopt de samenwerking?",
        answer:
          "Na een kennismakingsgesprek maken we een projectplan met duidelijke fases: Discovery, Design, Development en Launch. Je krijgt wekelijkse updates en hebt direct contact met de mensen die aan je project werken. We werken transparant en houden je altijd op de hoogte.",
      },
      {
        question: "Moet ik zelf content aanleveren?",
        answer:
          "In de basis verwachten we dat je teksten, afbeeldingen en andere content aanlevert. We kunnen je hierbij ondersteunen met tips en richtlijnen, of je doorverwijzen naar partners voor copywriting en fotografie. Ook kunnen we stock fotografie verzorgen indien gewenst.",
      },
      {
        question: "Kan ik zelf mijn website beheren na oplevering?",
        answer:
          "Ja, we bouwen websites altijd met een gebruiksvriendelijk CMS zodat je zelf content kunt aanpassen. Je krijgt een handleiding en eventueel een korte training. Voor technische wijzigingen kun je altijd bij ons terecht.",
      },
      {
        question: "Wat als ik niet tevreden ben?",
        answer:
          "Klanttevredenheid staat voorop. Tijdens het project bouwen we in feedbackmomenten zodat we tijdig kunnen bijsturen. Mocht je na oplevering ergens niet tevreden over zijn, bespreken we dit en zoeken we samen naar een oplossing.",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Veelgestelde
            <br />
            <span className="text-gradient-accent">vragen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Antwoorden op de vragen die we het meest krijgen. Staat jouw vraag
            er niet tussen? Neem gerust contact op.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
                <div className="rounded-2xl bg-surface border border-white/5 px-6">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = `${category.name}-${faqIndex}`;
                    return (
                      <FAQItem
                        key={itemId}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItems[itemId] || false}
                        onToggle={() => toggleItem(itemId)}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Vraag niet beantwoord?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Neem contact met ons op en we helpen je graag verder met je vraag.
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
                Stel je vraag
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
