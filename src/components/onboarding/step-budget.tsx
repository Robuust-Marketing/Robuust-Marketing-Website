"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { pricing } from "@/data/pricing";
import type { OnboardingData } from "@/types/onboarding";

export function StepBudget() {
  const { watch, setValue, register } = useFormContext<OnboardingData>();
  const budgetRange = watch("budgetRange");
  const timeline = watch("timeline");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Budget & Planning</h2>
        <p className="text-muted-foreground">
          Help ons een passende oplossing voor te stellen door je budget en planning
          aan te geven.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Wat is je budget?
          </label>
          <div className="space-y-2">
            {pricing.budgetRanges.map((budget, index) => {
              const isSelected = budgetRange === budget.id;

              return (
                <motion.button
                  key={budget.id}
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setValue("budgetRange", budget.id, { shouldValidate: true })}
                  className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-lg border-2 text-left transition-all",
                    isSelected
                      ? "border-accent bg-accent/20 ring-1 ring-accent/30"
                      : "border-white/10 hover:border-white/30 hover:bg-white/5"
                  )}
                >
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 transition-colors",
                      isSelected ? "border-accent bg-accent" : "border-white/30"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      isSelected ? "text-white" : "text-white/70"
                    )}
                  >
                    {budget.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Wanneer wil je live?
          </label>
          <div className="space-y-2">
            {pricing.timelines.map((tl, index) => {
              const isSelected = timeline === tl.id;

              return (
                <motion.button
                  key={tl.id}
                  type="button"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => setValue("timeline", tl.id, { shouldValidate: true })}
                  className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-lg border-2 text-left transition-all",
                    isSelected
                      ? "border-accent bg-accent/20 ring-1 ring-accent/30"
                      : "border-white/10 hover:border-white/30 hover:bg-white/5"
                  )}
                >
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 transition-colors",
                      isSelected ? "border-accent bg-accent" : "border-white/30"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      isSelected ? "text-white" : "text-white/70"
                    )}
                  >
                    {tl.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project description */}
      <div className="mt-8">
        <label
          htmlFor="projectDescription"
          className="block text-sm font-medium text-white mb-3"
        >
          Projectomschrijving{" "}
          <span className="text-white/50 font-normal">(optioneel)</span>
        </label>
        <textarea
          id="projectDescription"
          {...register("projectDescription")}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          placeholder="Vertel ons meer over je project, wensen en doelen. Hoe meer informatie, hoe beter we kunnen helpen."
        />
      </div>
    </div>
  );
}
