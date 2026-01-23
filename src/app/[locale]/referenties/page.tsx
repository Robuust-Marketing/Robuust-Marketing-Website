"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Thomas van der Berg",
    role: "Directeur",
    company: "Van der Berg Bouw",
    quote:
      "Robuust heeft onze website volledig getransformeerd. De nieuwe site laadt razendsnel en we krijgen nu dagelijks kwalitatieve leads binnen. De samenwerking verliep perfect.",
    rating: 5,
    image: null,
  },
  {
    name: "Lisa Bakker",
    role: "Marketing Manager",
    company: "Fresh Organics",
    quote:
      "Eindelijk een partij die begrijpt wat we nodig hebben. Het team denkt proactief mee en levert altijd meer dan verwacht. Onze online verkopen zijn met 200% gestegen.",
    rating: 5,
    image: null,
  },
  {
    name: "Mark Jansen",
    role: "Eigenaar",
    company: "Jansen Techniek",
    quote:
      "Na jaren met een trage, verouderde website te hebben gewerkt, was de overstap naar Robuust een verademing. Snelle oplevering, goede communicatie en een prachtig resultaat.",
    rating: 5,
    image: null,
  },
  {
    name: "Sandra de Vries",
    role: "CEO",
    company: "De Vries Consultancy",
    quote:
      "De hosting en het onderhoud bij Robuust geven me rust. Ik hoef me nergens zorgen over te maken en kan me focussen op mijn core business.",
    rating: 5,
    image: null,
  },
  {
    name: "Peter Visser",
    role: "Oprichter",
    company: "Visser & Partners",
    quote:
      "Wat begon met een website, is uitgegroeid tot een complete digitale strategie. Robuust is een echte partner in onze online groei.",
    rating: 5,
    image: null,
  },
  {
    name: "Emma Smit",
    role: "E-commerce Manager",
    company: "Style Studio",
    quote:
      "Onze webshop presteert beter dan ooit. Het team van Robuust heeft niet alleen een mooie site gebouwd, maar denkt ook mee over conversie-optimalisatie.",
    rating: 5,
    image: null,
  },
];

const stats = [
  { value: "50+", label: "Tevreden klanten" },
  { value: "100+", label: "Projecten opgeleverd" },
  { value: "4.9", label: "Gemiddelde beoordeling" },
  { value: "98%", label: "Zou ons aanbevelen" },
];

const logos = [
  "Van der Berg Bouw",
  "Fresh Organics",
  "Jansen Techniek",
  "De Vries Consultancy",
  "Visser & Partners",
  "Style Studio",
  "Tech Solutions",
  "Green Energy NL",
];

export default function ReferentiesPage() {
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4"
          >
            Referenties
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Wat onze klanten{" "}
            <span className="text-gradient-accent">zeggen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Lees de ervaringen van bedrijven die we hebben geholpen met hun
            online aanwezigheid.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-surface p-6 border border-white/5"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="text-white mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role} bij {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Zij gingen je voor
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Een selectie van bedrijven die we hebben mogen helpen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-surface p-6 border border-white/5 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-5 w-5" />
                  <span className="text-sm font-medium">{logo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Waarom kiezen bedrijven voor Robuust?
              </h2>
              <p className="text-muted-foreground mb-8">
                We leveren niet alleen mooie websites, maar echte resultaten.
                Onze klanten waarderen onze persoonlijke aanpak en technische
                expertise.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: "Persoonlijke aanpak",
                    desc: "Je hebt altijd contact met dezelfde persoon",
                  },
                  {
                    icon: Award,
                    title: "Kwaliteit boven kwantiteit",
                    desc: "We nemen de tijd voor elk project",
                  },
                  {
                    icon: Star,
                    title: "Langdurige partnerships",
                    desc: "Veel klanten werken al jaren met ons",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-accent/5 border border-accent/20 p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-2xl text-white font-medium mb-4">
                &ldquo;Robuust is meer dan een leverancier - ze zijn een
                strategische partner in onze groei.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">TvdB</span>
                </div>
                <div>
                  <div className="text-white font-medium">
                    Thomas van der Berg
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Directeur, Van der Berg Bouw
                  </div>
                </div>
              </div>
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
            Klaar om de volgende te zijn?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg mb-8"
          >
            Ontdek hoe wij jouw bedrijf kunnen helpen groeien. Start met een
            vrijblijvend gesprek.
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
              <Link href="/offerte" className="flex items-center gap-2">
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
              <Link href="/portfolio">Bekijk ons werk</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
