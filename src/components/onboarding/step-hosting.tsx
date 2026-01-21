"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { Check, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { pricing, formatPrice } from "@/data/pricing";
import type { OnboardingData } from "@/types/onboarding";

const hostingOptions = [
  {
    id: "basis",
    ...pricing.hosting.basis,
  },
  {
    id: "professional",
    ...pricing.hosting.professional,
  },
  {
    id: "enterprise",
    ...pricing.hosting.enterprise,
  },
  {
    id: "none",
    label: "Geen hosting nodig",
    description: "Ik heb al hosting of regel dit zelf",
    price: 0,
    features: [],
    custom: false,
    popular: false,
  },
];

export function StepHosting() {
  const { watch, setValue } = useFormContext<OnboardingData>();
  const hostingTier = watch("hostingTier");
  const needsSLA = watch("needsSLA");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Hosting & Onderhoud</h2>
        <p className="text-muted-foreground">
          Kies het hostingpakket dat past bij jouw behoeften. Alle pakketten
          inclusief SSL, backups en support.
        </p>
      </div>

      {/* Hosting options */}
      <div className="grid grid-cols-1 gap-4">
        {hostingOptions.map((option, index) => {
          const isSelected = hostingTier === option.id;
          const isNone = option.id === "none";

          return (
            <motion.button
              key={option.id}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setValue("hostingTier", option.id as OnboardingData["hostingTier"], { shouldValidate: true })}
              className={cn(
                "relative flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all",
                isSelected
                  ? isNone
                    ? "border-white/40 bg-white/10 ring-2 ring-white/20"
                    : "border-accent bg-accent/20 ring-2 ring-accent/30"
                  : "border-white/10 hover:border-white/30 hover:bg-white/5"
              )}
            >
              {/* Popular badge */}
              {option.popular && (
                <span className="absolute -top-3 left-4 inline-flex items-center gap-1 px-3 py-1 text-xs bg-accent text-white rounded-full">
                  <Star className="h-3 w-3" />
                  Meest gekozen
                </span>
              )}

              {/* Radio button */}
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors mt-1",
                  isSelected
                    ? isNone
                      ? "border-white/50 bg-white/20"
                      : "border-accent bg-accent"
                    : "border-white/30"
                )}
              >
                {isSelected && (
                  isNone ? (
                    <X className="h-3 w-3 text-white" />
                  ) : (
                    <Check className="h-3 w-3 text-white" />
                  )
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={cn(
                      "font-semibold text-lg",
                      isSelected ? "text-white" : "text-white/80"
                    )}
                  >
                    {option.label}
                  </span>
                  <span className="text-lg font-bold text-accent">
                    {option.custom || option.price === null
                      ? "Op maat"
                      : option.price === 0
                      ? ""
                      : `${formatPrice(option.price as number)}/maand`}
                  </span>
                </div>
                <p className="text-sm text-white/50 mb-3">{option.description}</p>

                {/* Features */}
                {option.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {option.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60"
                      >
                        {feature}
                      </span>
                    ))}
                    {option.features.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                        +{option.features.length - 4} meer
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* SLA option */}
      {hostingTier && hostingTier !== "none" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5"
        >
          <label className="flex items-start gap-3 cursor-pointer">
            <div
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors mt-0.5",
                needsSLA ? "border-accent bg-accent" : "border-white/30"
              )}
              onClick={() => setValue("needsSLA", !needsSLA)}
            >
              {needsSLA && <Check className="h-3 w-3 text-white" />}
            </div>
            <div onClick={() => setValue("needsSLA", !needsSLA)}>
              <p className="font-medium text-white">Uitgebreide SLA gewenst</p>
              <p className="text-sm text-white/50">
                Gegarandeerde responstijden, 24/7 monitoring en prioriteit support.
                Exact tarief bespreken we in het kennismakingsgesprek.
              </p>
            </div>
          </label>
        </motion.div>
      )}
    </div>
  );
}
