"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Video,
  Play,
  Clapperboard,
  Sparkles,
  Share2,
  TrendingUp,
  Film,
  Mic,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const videoTypes = [
  {
    icon: Clapperboard,
    title: "Bedrijfsvideo",
    description:
      "Laat zien wie je bent als bedrijf. Een professionele bedrijfsfilm die je verhaal vertelt.",
  },
  {
    icon: Film,
    title: "Productvideo",
    description:
      "Breng je product tot leven. Van productdemo's tot onboxing video's.",
  },
  {
    icon: Mic,
    title: "Testimonial video",
    description:
      "Laat tevreden klanten aan het woord. Authentieke reviews op video.",
  },
  {
    icon: Play,
    title: "Social media video",
    description:
      "Korte, pakkende video's voor Instagram, TikTok, LinkedIn en meer.",
  },
  {
    icon: Camera,
    title: "Event video",
    description:
      "Leg je bedrijfsevent, beurs of congres vast op professionele wijze.",
  },
  {
    icon: Sparkles,
    title: "Animatie video",
    description:
      "Vertel complexe verhalen eenvoudig met animatie en motion graphics.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Meer engagement",
    description:
      "Video content krijgt tot 10x meer engagement dan tekst of afbeeldingen.",
  },
  {
    icon: Share2,
    title: "Hogere conversie",
    description:
      "Landingspagina's met video hebben tot 80% hogere conversie.",
  },
  {
    icon: Video,
    title: "Beter onthouden",
    description:
      "Mensen onthouden 95% van een boodschap via video, vs. 10% via tekst.",
  },
];

const process = [
  {
    step: "01",
    title: "Briefing",
    description:
      "We bespreken je doelen, doelgroep en de boodschap die je wilt overbrengen.",
  },
  {
    step: "02",
    title: "Concept & Script",
    description:
      "We schrijven het script en maken een storyboard voor de video.",
  },
  {
    step: "03",
    title: "Productie",
    description:
      "De opnames vinden plaats. Wij regelen crew, apparatuur en locaties.",
  },
  {
    step: "04",
    title: "Post-productie",
    description:
      "Editing, kleurgrading, geluidsmix en eventuele animaties worden toegevoegd.",
  },
  {
    step: "05",
    title: "Oplevering",
    description:
      "Je ontvangt de video in alle formaten die je nodig hebt voor web en social.",
  },
];

export default function VideoLatenMakenPageClient() {
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
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
            >
              Video laten maken
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Vertel je verhaal met{" "}
              <span className="text-gradient-accent">krachtige video</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Video is de meest effectieve manier om je boodschap over te
              brengen. Wij maken professionele video&apos;s die resultaat opleveren.
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
                  Bespreek je project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <Link href="/portfolio">Bekijk voorbeelden</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Video */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Waarom video marketing?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Video is niet langer optioneel - het is essentieel voor je online
              succes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center rounded-2xl bg-surface p-8 border border-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Welke video past bij jou?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van bedrijfsfilm tot social media content - we maken video&apos;s voor
              elk doel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ons productieproces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van idee tot oplevering - zo pakken wij je videoproductie aan
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-xl font-bold text-accent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Wat krijg je bij ons?
              </h2>
              <p className="text-muted-foreground mb-8">
                Wij verzorgen het complete videoproductieproces van A tot Z. Je
                hoeft zelf niets te regelen.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategisch advies en concept development",
                  "Professioneel scriptwriting",
                  "Ervaren videograaf en crew",
                  "Professionele apparatuur en belichting",
                  "Color grading en sound design",
                  "Motion graphics en animaties",
                  "Alle benodigde formaten en resoluties",
                  "Onbeperkte revisies tot je tevreden bent",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <Play className="h-10 w-10 text-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Klaar om je verhaal te vertellen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Laten we samen bespreken hoe video jouw bedrijf kan laten groeien.
            Neem contact op voor een vrijblijvend gesprek.
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
                Neem contact op
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
