"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { motion } from "@/components/motion";
import {
  Check,
  Calendar,
  Send,
  ArrowRight,
  Building2,
  Target,
  Server,
  Wallet,
  Clock,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Turnstile } from "@/components/ui/turnstile";
import { HubSpotCalendar } from "./hubspot-calendar";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { pricing } from "@/data/pricing";
import { getPackageName } from "@/lib/pricing";
import type { OnboardingData, PriceEstimate } from "@/types/onboarding";
import { projectGoals, companySizes } from "@/types/onboarding";

interface StepSummaryProps {
  priceEstimate: PriceEstimate;
  formattedPrice: {
    oneTime: string;
    monthly: string;
    firstYear: string;
  };
  onSubmit: (withBooking: boolean) => void;
  isSubmitting: boolean;
  isComplete: boolean;
  turnstileToken: string | null;
  onTurnstileVerify: (token: string) => void;
}

export function StepSummary({
  priceEstimate,
  formattedPrice,
  onSubmit,
  isSubmitting,
  isComplete,
  turnstileToken,
  onTurnstileVerify,
}: StepSummaryProps) {
  const { watch, setValue, register, control } = useFormContext<OnboardingData>();
  const formData = watch();
  const timeline = useWatch({ control, name: "timeline" });

  const selectedGoal = projectGoals.find((g) => g.id === formData.projectGoal);
  const selectedSize = companySizes.find((s) => s.id === formData.companySize);
  const selectedHosting = pricing.hosting[formData.hostingTier as keyof typeof pricing.hosting];
  const selectedBudget = pricing.budgetRanges.find((b) => b.id === formData.budgetRange);
  const selectedTimeline = pricing.timelines.find((t) => t.id === timeline);
  const packageName = getPackageName(formData.companySize, formData.projectGoal);

  const selectedServiceNames = formData.selectedServices
    ?.map((id) => services.find((s) => s.id === id)?.name)
    .filter(Boolean);

  if (isComplete) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
        >
          <Check className="h-8 w-8 text-green-400" />
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Bedankt voor je aanvraag!
        </h2>
        <p className="text-muted-foreground mb-6">
          We hebben je gegevens ontvangen. Je kunt hieronder direct een afspraak
          inplannen, of we nemen binnen 24 uur contact met je op.
        </p>
        <HubSpotCalendar />
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Overzicht & Afspraak
        </h2>
        <p className="text-muted-foreground">
          Controleer je gegevens en plan direct een kennismakingsgesprek.
        </p>
      </div>

      {/* Summary cards */}
      <div className="space-y-4 mb-8">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">Contact</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-white/50">Naam:</span>
              <span className="text-white ml-2">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div>
              <span className="text-white/50">Email:</span>
              <span className="text-white ml-2">{formData.email}</span>
            </div>
            {formData.company && (
              <div>
                <span className="text-white/50">Bedrijf:</span>
                <span className="text-white ml-2">{formData.company}</span>
              </div>
            )}
            {formData.phone && (
              <div>
                <span className="text-white/50">Telefoon:</span>
                <span className="text-white ml-2">{formData.phone}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Project info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">Project</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-white/50">Doel:</span>
              <span className="text-white ml-2">{selectedGoal?.label}</span>
            </div>
            <div>
              <span className="text-white/50">Organisatie:</span>
              <span className="text-white ml-2">{selectedSize?.label}</span>
            </div>
            {packageName && (
              <div className="col-span-2">
                <span className="text-white/50">Pakket:</span>
                <span className="text-accent ml-2 font-medium">{packageName}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Services */}
        {selectedServiceNames && selectedServiceNames.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <Check className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">Diensten</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedServiceNames.map((name) => (
                <span
                  key={name}
                  className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hosting & Budget row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Hosting */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Server className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">Hosting</span>
            </div>
            <p className="text-sm text-white/70">
              {formData.hostingTier === "none"
                ? "Geen hosting"
                : selectedHosting?.label || "-"}
            </p>
          </motion.div>

          {/* Budget */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">Budget</span>
            </div>
            <p className="text-sm text-white/70">
              {selectedBudget?.label || "-"}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline & Project Description (optional fields) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="space-y-4 mb-8"
      >
        {/* Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-accent" />
            <label className="text-sm font-medium text-white">
              Wanneer wil je live?{" "}
              <span className="text-white/50 font-normal">(optioneel)</span>
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {pricing.timelines.map((tl) => {
              const isSelected = timeline === tl.id;

              return (
                <div
                  key={tl.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setValue("timeline", tl.id, { shouldValidate: true })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setValue("timeline", tl.id, { shouldValidate: true });
                    }
                  }}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg border-2 text-left transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "border-accent bg-accent/20 ring-1 ring-accent/30"
                      : "border-white/10 hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
                  )}
                >
                  <div
                    className={cn(
                      "flex w-4 h-4 items-center justify-center rounded-full border-2 transition-all duration-200",
                      isSelected ? "border-accent bg-accent" : "border-white/30"
                    )}
                  >
                    {isSelected && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors",
                      isSelected ? "text-white" : "text-white/70"
                    )}
                  >
                    {tl.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="h-4 w-4 text-accent" />
            <label htmlFor="projectDescription" className="text-sm font-medium text-white">
              Extra informatie{" "}
              <span className="text-white/50 font-normal">(optioneel)</span>
            </label>
          </div>
          <textarea
            id="projectDescription"
            {...register("projectDescription")}
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm"
            placeholder="Vertel ons meer over je project, wensen en doelen..."
          />
        </div>
      </motion.div>

      {/* Price summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="p-6 rounded-xl bg-accent/10 border border-accent/20 mb-8"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Prijsindicatie</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Eenmalige kosten</span>
            <span className="text-xl font-bold text-white">{formattedPrice.oneTime}</span>
          </div>
          {priceEstimate.monthlyMin > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-white/70">Maandelijkse kosten</span>
              <span className="text-lg font-semibold text-white">{formattedPrice.monthly}</span>
            </div>
          )}
          <div className="pt-3 border-t border-accent/20">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Geschat eerste jaar</span>
              <span className="text-2xl font-bold text-accent">{formattedPrice.firstYear}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-white/50 mt-4">
          * Dit is een indicatie op basis van je selectie. De exacte prijs bespreken we
          in het kennismakingsgesprek.
        </p>
      </motion.div>

      {/* Turnstile Bot Protection */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mb-6"
      >
        <Turnstile
          onVerify={onTurnstileVerify}
          onExpire={() => onTurnstileVerify("")}
          theme="dark"
        />
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="space-y-4"
      >
        <Button
          type="button"
          onClick={() => onSubmit(true)}
          disabled={isSubmitting || !turnstileToken}
          className="w-full bg-accent hover:bg-accent-hover text-white py-6 text-lg disabled:opacity-50"
        >
          {isSubmitting ? (
            "Versturen..."
          ) : (
            <>
              <Calendar className="mr-2 h-5 w-5" />
              Verstuur & Plan afspraak
            </>
          )}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-surface px-2 text-white/50">of</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => onSubmit(false)}
          disabled={isSubmitting || !turnstileToken}
          className="w-full border-white/20 text-white hover:bg-white/5 disabled:opacity-50"
        >
          <Send className="mr-2 h-4 w-4" />
          Alleen versturen, neem contact met mij op
        </Button>
      </motion.div>
    </div>
  );
}
