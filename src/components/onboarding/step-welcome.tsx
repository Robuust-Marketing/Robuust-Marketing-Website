"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { projectGoals, companySizes, type OnboardingData } from "@/types/onboarding";

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
  const { watch, setValue } = useFormContext<OnboardingData>();
  const projectGoal = watch("projectGoal");
  const companySize = watch("companySize");

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
              <motion.button
                key={goal.id}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setValue("projectGoal", goal.id, { shouldValidate: true })}
                className={cn(
                  "flex items-start gap-3 p-4 rounded-xl border text-left transition-all",
                  isSelected
                    ? "border-accent bg-accent/10"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                    isSelected ? "bg-accent/20 text-accent" : "bg-white/5 text-white/60"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className={cn("font-medium", isSelected ? "text-white" : "text-white/80")}>
                    {goal.label}
                  </p>
                  <p className="text-sm text-white/50">{goal.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Company size */}
      <div>
        <label className="block text-sm font-medium text-white mb-3">
          Hoe groot is je organisatie?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {companySizes.map((size, index) => {
            const Icon = sizeIcons[size.id];
            const isSelected = companySize === size.id;

            return (
              <motion.button
                key={size.id}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.05 }}
                onClick={() => setValue("companySize", size.id, { shouldValidate: true })}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all",
                  isSelected
                    ? "border-accent bg-accent/10"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                )}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                    isSelected ? "bg-accent/20 text-accent" : "bg-white/5 text-white/60"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className={cn("font-medium", isSelected ? "text-white" : "text-white/80")}>
                    {size.label}
                  </p>
                  <p className="text-xs text-white/50">{size.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
