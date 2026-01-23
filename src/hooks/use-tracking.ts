"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  trackEvent,
  trackConversion,
  trackFormSubmit,
  trackFormStart,
  trackFormError,
  trackFunnelStep,
  trackFunnelComplete,
  trackFunnelAbandon,
  trackCTAClick,
  trackPhoneClick,
  trackEmailClick,
  hasConsent,
} from "@/lib/gtm";

/**
 * Hook voor makkelijke tracking in React componenten
 *
 * @example
 * ```tsx
 * function ContactForm() {
 *   const { form, cta, consent } = useTracking();
 *
 *   const handleSubmit = async (data) => {
 *     form.submit("contact_form", { value: 500 });
 *     await submitForm(data);
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <button onClick={() => cta.click("submit", "contact_form")}>
 *         Versturen
 *       </button>
 *     </form>
 *   );
 * }
 * ```
 */
export function useTracking() {
  // ==========================================================================
  // FORM TRACKING
  // ==========================================================================
  const form = {
    /**
     * Track form start (user begins interacting with form)
     */
    start: useCallback((formName: string) => {
      trackFormStart(formName);
    }, []),

    /**
     * Track form submission
     */
    submit: useCallback(
      (
        formName: string,
        options?: {
          success?: boolean;
          value?: number;
          metadata?: Record<string, string | number>;
        }
      ) => {
        trackFormSubmit(formName, options);
      },
      []
    ),

    /**
     * Track form validation error
     */
    error: useCallback(
      (formName: string, field: string, message: string) => {
        trackFormError(formName, field, message);
      },
      []
    ),
  };

  // ==========================================================================
  // FUNNEL / WIZARD TRACKING
  // ==========================================================================
  const funnel = {
    /**
     * Track step view in multi-step form/wizard
     */
    step: useCallback(
      (
        funnelName: string,
        stepNumber: number,
        stepName: string,
        totalSteps: number
      ) => {
        trackFunnelStep(funnelName, stepNumber, stepName, totalSteps);
      },
      []
    ),

    /**
     * Track funnel completion
     */
    complete: useCallback(
      (
        funnelName: string,
        options?: {
          value?: number;
          selectedServices?: string[];
          metadata?: Record<string, string | number>;
        }
      ) => {
        trackFunnelComplete(funnelName, options);
      },
      []
    ),

    /**
     * Track funnel abandonment
     */
    abandon: useCallback(
      (funnelName: string, lastStep: number, lastStepName: string) => {
        trackFunnelAbandon(funnelName, lastStep, lastStepName);
      },
      []
    ),
  };

  // ==========================================================================
  // CTA & CLICK TRACKING
  // ==========================================================================
  const cta = {
    /**
     * Track CTA button click
     */
    click: useCallback(
      (ctaName: string, location: string, destination?: string) => {
        trackCTAClick(ctaName, location, destination);
      },
      []
    ),

    /**
     * Track phone link click
     */
    phone: useCallback((phoneNumber: string, location: string) => {
      trackPhoneClick(phoneNumber, location);
    }, []),

    /**
     * Track email link click
     */
    email: useCallback((email: string, location: string) => {
      trackEmailClick(email, location);
    }, []),
  };

  // ==========================================================================
  // CONVERSION TRACKING
  // ==========================================================================
  const conversion = {
    /**
     * Track a lead generation conversion
     */
    lead: useCallback(
      (options: {
        formName: string;
        value?: number;
        source?: string;
        metadata?: Record<string, string | number>;
      }) => {
        trackConversion({
          type: "lead_form_submit",
          formName: options.formName,
          value: options.value,
          leadSource: options.source,
          metadata: options.metadata,
        });
      },
      []
    ),

    /**
     * Track a quote request conversion
     */
    quote: useCallback(
      (options: {
        value?: number;
        services?: string[];
        metadata?: Record<string, string | number>;
      }) => {
        trackConversion({
          type: "quote_request",
          formName: "offerte_aanvraag",
          value: options.value,
          metadata: {
            ...options.metadata,
            services: options.services?.join(", ") || "",
          },
        });
      },
      []
    ),

    /**
     * Track a meeting booked conversion
     */
    meeting: useCallback(
      (metadata?: Record<string, string | number>) => {
        trackConversion({
          type: "meeting_booked",
          formName: "meeting_scheduler",
          metadata,
        });
      },
      []
    ),
  };

  // ==========================================================================
  // CONSENT INFO
  // ==========================================================================
  const consent = {
    /**
     * Check if analytics tracking is allowed
     */
    hasAnalytics: useCallback(() => hasConsent("statistics"), []),

    /**
     * Check if marketing tracking is allowed
     */
    hasMarketing: useCallback(() => hasConsent("marketing"), []),
  };

  // ==========================================================================
  // GENERIC EVENT
  // ==========================================================================
  const event = useCallback(
    (eventName: string, params?: Record<string, string | number | boolean>) => {
      trackEvent(eventName, params);
    },
    []
  );

  return {
    form,
    funnel,
    cta,
    conversion,
    consent,
    event,
  };
}

/**
 * Hook om funnel abandonment automatisch te tracken bij unmount
 *
 * @example
 * ```tsx
 * function QuoteWizard() {
 *   const [step, setStep] = useState(1);
 *
 *   useFunnelTracking("offerte_wizard", step, getStepName(step), 4);
 *
 *   return <WizardContent />;
 * }
 * ```
 */
export function useFunnelTracking(
  funnelName: string,
  currentStep: number,
  currentStepName: string,
  totalSteps: number
) {
  const lastStepRef = useRef({ step: currentStep, name: currentStepName });
  const isCompletedRef = useRef(false);

  // Track step views
  useEffect(() => {
    trackFunnelStep(funnelName, currentStep, currentStepName, totalSteps);
    lastStepRef.current = { step: currentStep, name: currentStepName };

    // Check if completed
    if (currentStep === totalSteps) {
      isCompletedRef.current = true;
    }
  }, [funnelName, currentStep, currentStepName, totalSteps]);

  // Track abandonment on unmount
  useEffect(() => {
    return () => {
      if (!isCompletedRef.current && lastStepRef.current.step < totalSteps) {
        trackFunnelAbandon(
          funnelName,
          lastStepRef.current.step,
          lastStepRef.current.name
        );
      }
    };
  }, [funnelName, totalSteps]);

  const markComplete = useCallback(
    (options?: {
      value?: number;
      selectedServices?: string[];
      metadata?: Record<string, string | number>;
    }) => {
      isCompletedRef.current = true;
      trackFunnelComplete(funnelName, options);
    },
    [funnelName]
  );

  return { markComplete };
}

/**
 * Hook om form interactie te tracken (start bij eerste focus)
 *
 * @example
 * ```tsx
 * function ContactForm() {
 *   const formRef = useFormTracking("contact_form");
 *
 *   return <form ref={formRef}>...</form>;
 * }
 * ```
 */
export function useFormTracking(formName: string) {
  const hasStartedRef = useRef(false);

  const formRef = useCallback(
    (element: HTMLFormElement | null) => {
      if (!element) return;

      const handleFocus = () => {
        if (!hasStartedRef.current) {
          hasStartedRef.current = true;
          trackFormStart(formName);
        }
      };

      element.addEventListener("focusin", handleFocus);

      return () => {
        element.removeEventListener("focusin", handleFocus);
      };
    },
    [formName]
  );

  return formRef;
}
