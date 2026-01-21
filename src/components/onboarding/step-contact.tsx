"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OnboardingData } from "@/types/onboarding";

export function StepContact() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OnboardingData>();
  const privacyConsent = watch("privacyConsent");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Contactgegevens</h2>
        <p className="text-muted-foreground">
          Vul je gegevens in zodat we contact met je kunnen opnemen.
        </p>
      </div>

      {/* Contact form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-white mb-2"
          >
            Voornaam *
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-background border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent",
              errors.firstName ? "border-red-500" : "border-white/10"
            )}
            placeholder="Je voornaam"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.firstName.message}
            </p>
          )}
        </motion.div>

        {/* Last name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-white mb-2"
          >
            Achternaam *
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-background border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent",
              errors.lastName ? "border-red-500" : "border-white/10"
            )}
            placeholder="Je achternaam"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.lastName.message}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-background border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent",
              errors.email ? "border-red-500" : "border-white/10"
            )}
            placeholder="je@email.nl"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </p>
          )}
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-2"
          >
            Telefoonnummer{" "}
            <span className="text-white/50 font-normal">(optioneel)</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="06 12345678"
          />
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sm:col-span-2"
        >
          <label
            htmlFor="company"
            className="block text-sm font-medium text-white mb-2"
          >
            Bedrijfsnaam{" "}
            <span className="text-white/50 font-normal">(optioneel)</span>
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Je bedrijfsnaam"
          />
        </motion.div>
      </div>

      {/* Privacy consent */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-6"
      >
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            onClick={() => setValue("privacyConsent", !privacyConsent as true, { shouldValidate: true })}
            className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors mt-0.5",
              privacyConsent ? "border-accent bg-accent" : "border-white/30",
              errors.privacyConsent && "border-red-500"
            )}
          >
            {privacyConsent && <Check className="h-3 w-3 text-white" />}
          </div>
          <div onClick={() => setValue("privacyConsent", !privacyConsent as true, { shouldValidate: true })}>
            <p className="text-sm text-white/80">
              Ik ga akkoord met de{" "}
              <Link
                href="/privacy"
                className="text-accent hover:underline"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
              >
                privacyverklaring
              </Link>{" "}
              en geef toestemming voor het verwerken van mijn gegevens. *
            </p>
          </div>
        </label>
        {errors.privacyConsent && (
          <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.privacyConsent.message}
          </p>
        )}
      </motion.div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-xs text-white/50"
      >
        * Verplichte velden. We behandelen je gegevens vertrouwelijk conform onze
        privacyverklaring.
      </motion.p>
    </div>
  );
}
