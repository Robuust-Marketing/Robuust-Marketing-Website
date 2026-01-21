"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  canProceed: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export function WizardNavigation({
  currentStep,
  totalSteps,
  canProceed,
  onNext,
  onPrevious,
}: WizardNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
      {/* Previous button */}
      {currentStep > 1 ? (
        <Button
          type="button"
          variant="ghost"
          onClick={onPrevious}
          className="text-white/70 hover:text-white hover:bg-white/5"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Vorige
        </Button>
      ) : (
        <div />
      )}

      {/* Next button */}
      {currentStep < totalSteps && (
        <Button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="bg-accent hover:bg-accent-hover text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === totalSteps - 1 ? "Naar overzicht" : "Volgende"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
