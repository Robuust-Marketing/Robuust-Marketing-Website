"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const thankYouContent: Record<
  string,
  {
    icon: typeof CheckCircle;
    title: string;
    message: string;
    nextSteps: string[];
    cta: { label: string; href: string };
    secondary?: { label: string; href: string };
  }
> = {
  offerte: {
    icon: FileText,
    title: "Bedankt voor je offerte aanvraag!",
    message:
      "We hebben je aanvraag in goede orde ontvangen. Ons team bekijkt je project en stuurt je binnen 24 uur een gepersonaliseerde offerte.",
    nextSteps: [
      "Je ontvangt een bevestigingsmail",
      "We analyseren je wensen en doelen",
      "Je krijgt binnen 24 uur een offerte op maat",
      "Optioneel: we plannen een vrijblijvend gesprek",
    ],
    cta: { label: "Bekijk ons werk", href: "/portfolio" },
    secondary: { label: "Terug naar home", href: "/" },
  },
  contact: {
    icon: MessageSquare,
    title: "Bedankt voor je bericht!",
    message:
      "We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op. Meestal binnen 24 uur.",
    nextSteps: [
      "Je ontvangt een bevestigingsmail",
      "We lezen je bericht zorgvuldig",
      "Je hoort binnen 24 uur van ons",
    ],
    cta: { label: "Bekijk onze diensten", href: "/diensten" },
    secondary: { label: "Terug naar home", href: "/" },
  },
  sollicitatie: {
    icon: Briefcase,
    title: "Bedankt voor je sollicitatie!",
    message:
      "Leuk dat je bij ons wilt werken! We hebben je sollicitatie ontvangen en nemen deze zorgvuldig door.",
    nextSteps: [
      "Je ontvangt een bevestigingsmail",
      "We beoordelen je CV en motivatie",
      "Binnen 5 werkdagen hoor je van ons",
      "Bij interesse plannen we een kennismakingsgesprek",
    ],
    cta: { label: "Meer over Robuust", href: "/over-ons" },
    secondary: { label: "Terug naar vacatures", href: "/vacatures" },
  },
  default: {
    icon: CheckCircle,
    title: "Bedankt!",
    message:
      "We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.",
    nextSteps: [
      "Je ontvangt een bevestigingsmail",
      "We nemen binnen 24 uur contact op",
    ],
    cta: { label: "Terug naar home", href: "/" },
  },
};

function BedanktContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "default";
  const content = thankYouContent[type] || thankYouContent.default;
  const Icon = content.icon;

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
                "radial-gradient(ellipse, rgba(34, 197, 94, 0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
          >
            <Icon className="h-10 w-10 text-green-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg mb-8"
          >
            {content.message}
          </motion.p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl bg-surface p-8 border border-white/5"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Wat gebeurt er nu?
            </h2>
            <ol className="space-y-4">
              {content.nextSteps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-white pt-1">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-2xl bg-accent/5 border border-accent/20 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Vragen? Neem contact op
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@robuustmarketing.nl"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-accent" />
                info@robuustmarketing.nl
              </a>
              <a
                href="tel:+31850604877"
                className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                +31 85 060 48 77
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white"
            >
              <Link href={content.cta.href} className="flex items-center gap-2">
                {content.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {content.secondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5"
              >
                <Link href={content.secondary.href}>
                  {content.secondary.label}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function BedanktPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="animate-pulse text-white">Laden...</div>
        </div>
      }
    >
      <BedanktContent />
    </Suspense>
  );
}
