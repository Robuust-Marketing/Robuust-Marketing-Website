"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Server, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPackageName } from "@/lib/pricing";
import type { PriceEstimate, OnboardingData } from "@/types/onboarding";

interface PriceCalculatorProps {
  priceEstimate: PriceEstimate;
  formattedPrice: {
    oneTime: string;
    monthly: string;
    firstYear: string;
  };
  formData: Partial<OnboardingData>;
}

export function PriceCalculator({
  priceEstimate,
  formattedPrice,
  formData,
}: PriceCalculatorProps) {
  const packageName = getPackageName(formData.companySize, formData.projectGoal);
  const hasData =
    priceEstimate.oneTimeMin > 0 ||
    priceEstimate.monthlyMin > 0;

  return (
    <div className="sticky top-32">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-2xl bg-surface p-6 border border-white/5"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
            <Calculator className="h-4 w-4 text-accent" />
          </div>
          <h3 className="font-semibold text-white">Prijsindicatie</h3>
        </div>

        <AnimatePresence mode="wait">
          {hasData ? (
            <motion.div
              key="has-data"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Package */}
              {packageName && (
                <div className="pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-sm text-white/50">Pakket</span>
                  </div>
                  <p className="text-lg font-semibold text-accent">{packageName}</p>
                </div>
              )}

              {/* One-time costs */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-white/50" />
                  <span className="text-sm text-white/50">Eenmalige kosten</span>
                </div>
                <motion.p
                  key={formattedPrice.oneTime}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-white"
                >
                  {formattedPrice.oneTime}
                </motion.p>
              </div>

              {/* Monthly costs */}
              {priceEstimate.monthlyMin > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Server className="h-4 w-4 text-white/50" />
                    <span className="text-sm text-white/50">Maandelijks</span>
                  </div>
                  <motion.p
                    key={formattedPrice.monthly}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl font-semibold text-white"
                  >
                    {formattedPrice.monthly}
                  </motion.p>
                </div>
              )}

              {/* Breakdown */}
              {(priceEstimate.breakdown.addOns.length > 0 ||
                priceEstimate.breakdown.hosting) && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    Opbouw
                  </p>
                  <div className="space-y-1.5">
                    {/* Base package */}
                    {priceEstimate.breakdown.basePackage && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">{packageName}</span>
                        <span className="text-white/80">
                          {priceEstimate.breakdown.basePackage.min === priceEstimate.breakdown.basePackage.max
                            ? `€${priceEstimate.breakdown.basePackage.min.toLocaleString("nl-NL")}`
                            : `€${priceEstimate.breakdown.basePackage.min.toLocaleString("nl-NL")} - €${priceEstimate.breakdown.basePackage.max.toLocaleString("nl-NL")}`}
                        </span>
                      </div>
                    )}

                    {/* Add-ons */}
                    {priceEstimate.breakdown.addOns.map((addOn) => (
                      <div key={addOn.name} className="flex justify-between text-sm">
                        <span className="text-white/60">{addOn.name}</span>
                        <span className="text-white/80">
                          €{addOn.price.toLocaleString("nl-NL")}
                          {addOn.type === "monthly" && "/mo"}
                        </span>
                      </div>
                    ))}

                    {/* Hosting */}
                    {priceEstimate.breakdown.hosting && priceEstimate.breakdown.hosting.price && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">
                          Hosting ({priceEstimate.breakdown.hosting.name})
                        </span>
                        <span className="text-white/80">
                          €{priceEstimate.breakdown.hosting.price}/mo
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* First year total */}
              <div className="pt-4 border-t border-white/10 bg-accent/5 -mx-6 -mb-6 px-6 py-4 rounded-b-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/70">Eerste jaar</span>
                  <motion.span
                    key={formattedPrice.firstYear}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xl font-bold text-accent"
                  >
                    {formattedPrice.firstYear}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="no-data"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white/30" />
              </div>
              <p className="text-sm text-white/50">
                Maak je selectie om een prijsindicatie te zien
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <p className="text-xs text-white/40 mt-4 text-center">
          Vrijblijvende indicatie
        </p>
      </motion.div>

      {/* Trust badges */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
          Transparante prijzen
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
          Geen verborgen kosten
        </span>
      </div>
    </div>
  );
}
