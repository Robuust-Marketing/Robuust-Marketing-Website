"use client";

import { motion } from "@/components/motion";
import { Check } from "lucide-react";
import { wizardSteps } from "@/types/onboarding";
import { cn } from "@/lib/utils";

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="relative">
      {/* Step indicators - Desktop */}
      <div className="hidden md:flex items-center justify-between relative z-10">
        {wizardSteps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                  backgroundColor: isCompleted || isCurrent
                    ? "rgb(197, 60, 11)"
                    : "rgba(255, 255, 255, 0.1)",
                }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "border-2 transition-colors duration-300",
                  isCompleted || isCurrent
                    ? "border-accent"
                    : "border-white/20"
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5 text-white" />
                ) : (
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isCurrent ? "text-white" : "text-white/50"
                    )}
                  >
                    {stepNumber}
                  </span>
                )}
              </motion.div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium",
                  isCurrent ? "text-white" : "text-white/50"
                )}
              >
                {step.name}
              </span>
            </div>
          );
        })}

        {/* Progress bar background */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-white/10 -z-10" />

        {/* Progress bar fill */}
        <motion.div
          className="absolute top-5 left-0 h-0.5 bg-accent -z-10"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Step indicators - Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white font-medium">
            Stap {currentStep} van {totalSteps}
          </span>
          <span className="text-sm text-white/50">
            {wizardSteps[currentStep - 1]?.name}
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}
