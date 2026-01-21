"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { WizardProgress } from "./wizard-progress";
import { WizardNavigation } from "./wizard-navigation";
import { StepWelcome } from "./step-welcome";
import { StepServices } from "./step-services";
import { StepHosting } from "./step-hosting";
import { StepBudget } from "./step-budget";
import { StepContact } from "./step-contact";
import { StepSummary } from "./step-summary";
import { PriceCalculator } from "./price-calculator";

import {
  onboardingSchema,
  wizardSteps,
  type OnboardingData,
} from "@/types/onboarding";
import { trackEvent } from "@/lib/gtm";
import { calculatePriceEstimate, formatPriceEstimate } from "@/lib/pricing";

const TOTAL_STEPS = 6;

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function WizardContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const methods = useForm<OnboardingData>({
    resolver: zodResolver(onboardingSchema),
    mode: "onChange",
    defaultValues: {
      selectedServices: [],
      hostingTier: "professional",
      needsSLA: false,
      privacyConsent: false,
    },
  });

  const formData = methods.watch();
  const priceEstimate = calculatePriceEstimate(formData);
  const formattedPrice = formatPriceEstimate(priceEstimate);

  // Track step views
  useEffect(() => {
    const step = wizardSteps[currentStep - 1];
    if (step) {
      trackEvent({
        action: "onboarding_step_view",
        category: "onboarding",
        label: step.label,
        value: currentStep,
      });
    }
  }, [currentStep]);

  const canProceed = useCallback(() => {
    switch (currentStep) {
      case 1:
        return Boolean(formData.projectGoal && formData.companySize);
      case 2:
        return formData.selectedServices && formData.selectedServices.length > 0;
      case 3:
        return Boolean(formData.hostingTier);
      case 4:
        return Boolean(formData.budgetRange && formData.timeline);
      case 5:
        return Boolean(
          formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.privacyConsent
        );
      case 6:
        return true;
      default:
        return false;
    }
  }, [currentStep, formData]);

  const goToNextStep = useCallback(() => {
    if (currentStep < TOTAL_STEPS && canProceed()) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, canProceed]);

  const goToPreviousStep = useCallback(() => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleSubmit = async (withBooking: boolean) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/hubspot/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          estimatedPrice: formattedPrice.firstYear,
          withBooking,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      // Track completion
      trackEvent({
        action: "onboarding_complete",
        category: "conversion",
        label: formData.companySize || "unknown",
        value: priceEstimate.firstYearMin,
      });

      setIsComplete(true);

      // Redirect to thank you page if not booking
      if (!withBooking) {
        window.location.href = "/bedankt?type=project";
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Could add error handling UI here
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepWelcome />;
      case 2:
        return <StepServices />;
      case 3:
        return <StepHosting />;
      case 4:
        return <StepBudget />;
      case 5:
        return <StepContact />;
      case 6:
        return (
          <StepSummary
            priceEstimate={priceEstimate}
            formattedPrice={formattedPrice}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            isComplete={isComplete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Progress */}
          <WizardProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

          {/* Main content */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Step content */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-surface p-6 md:p-8 border border-white/5 min-h-[400px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                {currentStep < 6 && (
                  <WizardNavigation
                    currentStep={currentStep}
                    totalSteps={TOTAL_STEPS}
                    canProceed={canProceed()}
                    onNext={goToNextStep}
                    onPrevious={goToPreviousStep}
                  />
                )}
              </div>
            </div>

            {/* Price calculator sidebar */}
            <div className="lg:col-span-1">
              <PriceCalculator
                priceEstimate={priceEstimate}
                formattedPrice={formattedPrice}
                formData={formData}
              />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
