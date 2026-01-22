"use client";

import { useFormContext, useWatch } from "react-hook-form";
import {
  Globe,
  RefreshCw,
  ShoppingCart,
  TrendingUp,
  HelpCircle,
  User,
  Users,
  Building2,
  Shield,
  Clock,
  MessageSquare,
  Check,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { projectGoals, companySizes, type OnboardingData } from "@/types/onboarding";
import { pricing } from "@/data/pricing";

const goalIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "nieuwe-website": Globe,
  redesign: RefreshCw,
  webshop: ShoppingCart,
  marketing: TrendingUp,
  anders: HelpCircle,
};

const sizeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  starter: User,
  mkb: Users,
  enterprise: Building2,
};

export function StepWelcome() {
  const { setValue, control } = useFormContext<OnboardingData>();
  // Use useWatch for better reactivity
  const projectGoal = useWatch({ control, name: "projectGoal" });
  const companySize = useWatch({ control, name: "companySize" });
  const budgetRange = useWatch({ control, name: "budgetRange" });

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Welkom bij Robuust
        </h2>
        <p className="text-muted-foreground">
          Vertel ons over je project en ontvang direct een prijsindicatie.
        </p>
      </div>

      {/* Trust indicators */}
      <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-accent" />
          Reactie binnen 24 uur
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4 text-accent" />
          100% vrijblijvend
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4 text-accent" />
          Persoonlijk advies
        </div>
      </div>

      {/* Project goal */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-white mb-3">
          Wat is je doel?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectGoals.map((goal, index) => {
            const Icon = goalIcons[goal.id];
            const isSelected = projectGoal === goal.id;

            return (
              <div
                key={goal.id}
                role="button"
                tabIndex={0}
                onClick={() => setValue("projectGoal", goal.id, { shouldValidate: true })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setValue("projectGoal", goal.id, { shouldValidate: true });
                  }
                }}
                className={cn(
                  "relative flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "border-accent bg-accent/20 ring-2 ring-accent/30 shadow-lg shadow-accent/20"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5 active:scale-[0.98] active:bg-white/10"
                )}
              >
                {/* Checkmark indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-lg">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                )}
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-200",
                    isSelected ? "bg-accent text-white scale-105" : "bg-white/5 text-white/60"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={cn("font-medium transition-colors", isSelected ? "text-white" : "text-white/80")}>
                    {goal.label}
                  </p>
                  <p className="text-sm text-white/50">{goal.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Company size */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-white mb-3">
          Hoe groot is je organisatie?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {companySizes.map((size, index) => {
            const Icon = sizeIcons[size.id];
            const isSelected = companySize === size.id;

            return (
              <div
                key={size.id}
                role="button"
                tabIndex={0}
                onClick={() => setValue("companySize", size.id, { shouldValidate: true })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setValue("companySize", size.id, { shouldValidate: true });
                  }
                }}
                className={cn(
                  "relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "border-accent bg-accent/20 ring-2 ring-accent/30 shadow-lg shadow-accent/20"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5 active:scale-[0.98] active:bg-white/10"
                )}
              >
                {/* Checkmark indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent shadow-lg">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                )}
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-200",
                    isSelected ? "bg-accent text-white scale-105" : "bg-white/5 text-white/60"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className={cn("font-medium transition-colors", isSelected ? "text-white" : "text-white/80")}>
                    {size.label}
                  </p>
                  <p className="text-xs text-white/50">{size.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Budget */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Wallet className="h-4 w-4 text-accent" />
          <label className="text-sm font-medium text-white">
            Wat is je budget?
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {pricing.budgetRanges.map((budget) => {
            const isSelected = budgetRange === budget.id;

            return (
              <div
                key={budget.id}
                role="button"
                tabIndex={0}
                onClick={() => setValue("budgetRange", budget.id, { shouldValidate: true })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setValue("budgetRange", budget.id, { shouldValidate: true });
                  }
                }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "border-accent bg-accent/20 ring-1 ring-accent/30 shadow-md shadow-accent/10"
                    : "border-white/10 hover:border-white/30 hover:bg-white/5 active:scale-[0.98] active:bg-white/10"
                )}
              >
                <div
                  className={cn(
                    "flex w-5 h-5 items-center justify-center rounded-full border-2 transition-all duration-200",
                    isSelected ? "border-accent bg-accent scale-110" : "border-white/30"
                  )}
                >
                  {isSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </div>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isSelected ? "text-white" : "text-white/70"
                  )}
                >
                  {budget.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
