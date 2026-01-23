"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "@/components/motion";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { WizardProgress } from "./wizard-progress";
import { WizardNavigation } from "./wizard-navigation";
import { StepWelcome } from "./step-welcome";
import { StepServices } from "./step-services";
import { StepContact } from "./step-contact";
import { StepSummary } from "./step-summary";
import { PriceCalculator } from "./price-calculator";

import {
  onboardingSchema,
  wizardSteps,
  type OnboardingData,
} from "@/types/onboarding";
import { trackFunnelStep, trackFunnelComplete } from "@/lib/gtm";
import { calculatePriceEstimate, formatPriceEstimate } from "@/lib/pricing";

const TOTAL_STEPS = 4;

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

/**
 * Custom hook to watch only the fields needed for price calculation.
 * This prevents unnecessary re-renders when other form fields change.
 */
function usePriceCalculationData(control: ReturnType<typeof useForm<OnboardingData>>["control"]) {
  const companySize = useWatch({ control, name: "companySize" });
  const projectGoal = useWatch({ control, name: "projectGoal" });
  const selectedServices = useWatch({ control, name: "selectedServices" });
  const hostingTier = useWatch({ control, name: "hostingTier" });

  return { companySize, projectGoal, selectedServices, hostingTier };
}

/**
 * Custom hook to watch fields needed for step validation (canProceed).
 * Each step only watches its own relevant fields.
 *
 * New 4-step flow:
 * 1. Start: projectGoal + companySize + budgetRange
 * 2. Diensten: selectedServices + hostingTier
 * 3. Contact: firstName, lastName, email, privacyConsent
 * 4. Overzicht: always true
 */
function useStepValidationData(
  control: ReturnType<typeof useForm<OnboardingData>>["control"],
  currentStep: number
) {
  // Watch all validation fields - React Compiler will optimize these
  const projectGoal = useWatch({ control, name: "projectGoal" });
  const companySize = useWatch({ control, name: "companySize" });
  const selectedServices = useWatch({ control, name: "selectedServices" });
  const hostingTier = useWatch({ control, name: "hostingTier" });
  const budgetRange = useWatch({ control, name: "budgetRange" });
  const firstName = useWatch({ control, name: "firstName" });
  const lastName = useWatch({ control, name: "lastName" });
  const email = useWatch({ control, name: "email" });
  const privacyConsent = useWatch({ control, name: "privacyConsent" });

  // Return validation status based on current step
  switch (currentStep) {
    case 1:
      // Start: need goal, size, and budget
      return Boolean(projectGoal && companySize && budgetRange);
    case 2:
      // Diensten: need at least one service and hosting selection
      return selectedServices && selectedServices.length > 0 && Boolean(hostingTier);
    case 3:
      // Contact: need basic contact info and privacy consent
      return Boolean(firstName && lastName && email && privacyConsent);
    case 4:
      // Summary: always allow
      return true;
    default:
      return false;
  }
}

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

  // Use specific watches for price calculation instead of watching entire form
  const priceData = usePriceCalculationData(methods.control);
  const priceEstimate = calculatePriceEstimate(priceData);
  const formattedPrice = formatPriceEstimate(priceEstimate);

  // Use specific watches for step validation
  const canProceed = useStepValidationData(methods.control, currentStep);

  // Track step views
  useEffect(() => {
    const step = wizardSteps[currentStep - 1];
    if (step) {
      trackFunnelStep("offerte_wizard", currentStep, step.label, TOTAL_STEPS);
    }
  }, [currentStep]);

  const goToNextStep = useCallback(() => {
    if (currentStep < TOTAL_STEPS && canProceed) {
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

    // Get all form values for submission
    const formData = methods.getValues();

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
      trackFunnelComplete("offerte_wizard", {
        value: priceEstimate.firstYearMin,
        selectedServices: formData.selectedServices,
        metadata: {
          company_size: formData.companySize || "unknown",
          hosting_tier: formData.hostingTier || "none",
          with_booking: withBooking ? 1 : 0,
        },
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
        return <StepContact />;
      case 4:
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
                {currentStep < 4 && (
                  <WizardNavigation
                    currentStep={currentStep}
                    totalSteps={TOTAL_STEPS}
                    canProceed={canProceed}
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
                formData={priceData}
              />
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
