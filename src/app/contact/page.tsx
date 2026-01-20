"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@robuust.marketing",
    href: "mailto:info@robuust.marketing",
  },
  {
    icon: Phone,
    title: "Telefoon",
    value: "+31 6 12 34 56 78",
    href: "tel:+31612345678",
  },
  {
    icon: MapPin,
    title: "Locatie",
    value: "Nederland",
    href: null,
  },
  {
    icon: Clock,
    title: "Reactietijd",
    value: "Binnen 24 uur",
    href: null,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
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
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Laten we
            <br />
            <span className="text-gradient-accent">praten</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Heb je een project in gedachten? Wil je meer weten over onze diensten?
            Of gewoon even kennismaken? We horen graag van je.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-surface p-8 border border-white/5"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bericht verzonden!
                  </h3>
                  <p className="text-muted-foreground">
                    Bedankt voor je bericht. We nemen binnen 24 uur contact met je
                    op.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Stuur een bericht
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Je naam"
                          required
                          className="bg-background border-white/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Bedrijf</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Je bedrijf"
                          className="bg-background border-white/10"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="je@email.nl"
                          required
                          className="bg-background border-white/10"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+31 6 12345678"
                          className="bg-background border-white/10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Onderwerp *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Waar gaat je vraag over?"
                        required
                        className="bg-background border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Vertel ons meer over je project of vraag..."
                        rows={5}
                        required
                        className="bg-background border-white/10 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-hover text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Verzenden..."
                      ) : (
                        <>
                          Verstuur bericht
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Direct contact
                </h2>
                <p className="text-muted-foreground">
                  Liever direct bellen of mailen? Dat kan natuurlijk ook. We staan
                  klaar om je vragen te beantwoorden.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-surface p-6 border border-white/5"
                  >
                    <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQ teaser */}
              <div className="rounded-2xl bg-accent/5 border border-accent/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Veelgestelde vragen
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Bekijk de antwoorden op de meest gestelde vragen over onze
                  diensten, prijzen en werkwijze.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="text-white/80">
                    • Wat kost een website bij Robuust?
                  </li>
                  <li className="text-white/80">
                    • Hoe lang duurt een project?
                  </li>
                  <li className="text-white/80">
                    • Bieden jullie ook onderhoud?
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
