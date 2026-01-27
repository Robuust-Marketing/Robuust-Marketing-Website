// Google Tag Manager utilities voor Robuust Marketing
// Met Google Consent Mode v2 voor AVG/GDPR compliance

declare global {
  interface Window {
    dataLayer: (Record<string, unknown> | unknown[])[];
    Cookiebot?: {
      consent: {
        marketing: boolean;
        statistics: boolean;
        preferences: boolean;
        necessary: boolean;
      };
      consented: boolean;
      declined: boolean;
      hasResponse: boolean;
    };
    HubSpotConversations?: {
      widget: {
        open: () => void;
        close: () => void;
        remove: () => void;
        status: () => { loaded: boolean; open: boolean };
      };
    };
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

// =============================================================================
// CONSENT MODE V2
// =============================================================================

/**
 * Initialize Google Consent Mode v2 with default denied state
 * MUST be called BEFORE GTM loads
 */
export const initConsentMode = () => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  // Consent Mode v2 - default alles denied (AVG-compliant)
  window.dataLayer.push({
    event: "consent_default",
    // Google Consent Mode v2 parameters
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted", // Altijd toegestaan (noodzakelijk)
    wait_for_update: 500, // Wacht 500ms op consent update
  });

  // Push als gtag command voor Google tags
  window.dataLayer.push([
    "consent",
    "default",
    {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 500,
    },
  ]);
};

/**
 * Update consent state after user makes a choice
 * Called automatically by Cookiebot via GTM, but can also be called manually
 */
export const updateConsent = (consent: {
  analytics?: boolean;
  marketing?: boolean;
  preferences?: boolean;
}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const consentUpdate = {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    functionality_storage: consent.preferences ? "granted" : "denied",
    personalization_storage: consent.preferences ? "granted" : "denied",
  };

  // Push consent update event
  window.dataLayer.push({
    event: "consent_update",
    ...consentUpdate,
  });

  // Push als gtag command
  window.dataLayer.push(["consent", "update", consentUpdate]);
};

// =============================================================================
// CONSENT HELPERS
// =============================================================================

/**
 * Check if user has given consent for a specific category
 */
export const hasConsent = (
  category: "marketing" | "statistics" | "preferences" | "necessary"
): boolean => {
  if (typeof window === "undefined") return false;

  // Check Cookiebot consent
  if (window.Cookiebot?.consent) {
    return window.Cookiebot.consent[category] === true;
  }

  return false;
};

/**
 * Check if user has made any consent choice
 */
export const hasConsentResponse = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.Cookiebot?.hasResponse === true;
};

/**
 * Check if analytics tracking is allowed
 */
export const canTrackAnalytics = (): boolean => {
  return hasConsent("statistics");
};

/**
 * Check if marketing/advertising tracking is allowed
 */
export const canTrackMarketing = (): boolean => {
  return hasConsent("marketing");
};

// =============================================================================
// CORE TRACKING FUNCTIONS
// =============================================================================

/**
 * Push event to dataLayer
 * Events are always pushed - GTM handles consent filtering
 */
const pushToDataLayer = (data: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};

/**
 * Track pageview
 */
export const trackPageview = (url: string, title?: string) => {
  pushToDataLayer({
    event: "page_view",
    page_location: url,
    page_title: title || document.title,
  });
};

/**
 * Track custom event (GA4 format)
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  pushToDataLayer({
    event: eventName,
    ...parameters,
  });
};

// =============================================================================
// CONVERSION TRACKING
// =============================================================================

type ConversionType =
  | "lead_form_submit"
  | "contact_form_submit"
  | "quote_request"
  | "phone_click"
  | "email_click"
  | "meeting_booked"
  | "wizard_complete";

interface ConversionData {
  type: ConversionType;
  value?: number;
  currency?: string;
  formName?: string;
  leadSource?: string;
  metadata?: Record<string, string | number>;
}

/**
 * Track a conversion event
 * Automatically sends to both GA4 and GTM for flexibility
 */
export const trackConversion = (data: ConversionData) => {
  const { type, value, currency = "EUR", formName, leadSource, metadata } = data;

  // GA4 generate_lead event (standaard voor lead gen)
  if (
    type === "lead_form_submit" ||
    type === "contact_form_submit" ||
    type === "quote_request" ||
    type === "wizard_complete"
  ) {
    pushToDataLayer({
      event: "generate_lead",
      conversion_type: type,
      value: value,
      currency: currency,
      form_name: formName,
      lead_source: leadSource || window.location.pathname,
      ...metadata,
    });
  }

  // Ook custom event voor GTM triggers
  pushToDataLayer({
    event: "conversion",
    conversion_type: type,
    conversion_value: value,
    conversion_currency: currency,
    form_name: formName,
    lead_source: leadSource || window.location.pathname,
    ...metadata,
  });
};

// =============================================================================
// FORM TRACKING
// =============================================================================

/**
 * Track form submission start (user begins filling form)
 */
export const trackFormStart = (formName: string) => {
  pushToDataLayer({
    event: "form_start",
    form_name: formName,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (
  formName: string,
  options?: {
    success?: boolean;
    value?: number;
    metadata?: Record<string, string | number>;
  }
) => {
  const { success = true, value, metadata } = options || {};

  pushToDataLayer({
    event: "form_submit",
    form_name: formName,
    form_success: success,
    form_value: value,
    ...metadata,
  });

  // Bij succesvolle submit ook als conversie tracken
  if (success) {
    trackConversion({
      type: "lead_form_submit",
      formName,
      value,
      metadata,
    });
  }
};

/**
 * Track form error
 */
export const trackFormError = (
  formName: string,
  errorField: string,
  errorMessage: string
) => {
  pushToDataLayer({
    event: "form_error",
    form_name: formName,
    error_field: errorField,
    error_message: errorMessage,
  });
};

// =============================================================================
// WIZARD / FUNNEL TRACKING
// =============================================================================

/**
 * Track wizard/funnel step view
 */
export const trackFunnelStep = (
  funnelName: string,
  stepNumber: number,
  stepName: string,
  totalSteps: number
) => {
  pushToDataLayer({
    event: "funnel_step",
    funnel_name: funnelName,
    step_number: stepNumber,
    step_name: stepName,
    total_steps: totalSteps,
    funnel_progress: Math.round((stepNumber / totalSteps) * 100),
  });
};

/**
 * Track wizard/funnel completion
 */
export const trackFunnelComplete = (
  funnelName: string,
  options?: {
    value?: number;
    selectedServices?: string[];
    metadata?: Record<string, string | number>;
  }
) => {
  const { value, selectedServices, metadata } = options || {};

  pushToDataLayer({
    event: "funnel_complete",
    funnel_name: funnelName,
    funnel_value: value,
    selected_services: selectedServices?.join(", "),
    ...metadata,
  });

  // Ook als conversie tracken
  trackConversion({
    type: "wizard_complete",
    value,
    formName: funnelName,
    metadata,
  });
};

/**
 * Track wizard/funnel abandonment
 */
export const trackFunnelAbandon = (
  funnelName: string,
  lastStep: number,
  lastStepName: string
) => {
  pushToDataLayer({
    event: "funnel_abandon",
    funnel_name: funnelName,
    abandon_step: lastStep,
    abandon_step_name: lastStepName,
  });
};

// =============================================================================
// CLICK TRACKING
// =============================================================================

/**
 * Track CTA button click
 */
export const trackCTAClick = (
  ctaName: string,
  ctaLocation: string,
  destination?: string
) => {
  pushToDataLayer({
    event: "cta_click",
    cta_name: ctaName,
    cta_location: ctaLocation,
    click_destination: destination,
  });
};

/**
 * Track phone number click
 */
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  pushToDataLayer({
    event: "phone_click",
    phone_number: phoneNumber,
    click_location: location,
  });

  trackConversion({
    type: "phone_click",
    metadata: { phone_number: phoneNumber, location },
  });
};

/**
 * Track email click
 */
export const trackEmailClick = (email: string, location: string) => {
  pushToDataLayer({
    event: "email_click",
    email_address: email,
    click_location: location,
  });

  trackConversion({
    type: "email_click",
    metadata: { email, location },
  });
};

/**
 * Track outbound link click
 */
export const trackOutboundClick = (url: string, linkText: string) => {
  pushToDataLayer({
    event: "outbound_click",
    outbound_url: url,
    link_text: linkText,
  });
};

// =============================================================================
// LEGACY COMPATIBILITY (voor bestaande code)
// =============================================================================

/** @deprecated Use trackPageview instead */
export const pageview = (url: string) => trackPageview(url);

/** @deprecated Use trackFormSubmit instead */
export const trackFormSubmission = (formName: string) =>
  trackFormSubmit(formName);

/** @deprecated Use trackCTAClick instead */
export const trackConversionHeaderClick = (ctaText: string) =>
  trackCTAClick(ctaText, "conversion_header");

/** @deprecated Use trackFunnelStep instead */
export const trackOnboardingStep = (stepLabel: string, stepNumber: number) =>
  trackFunnelStep("offerte_wizard", stepNumber, stepLabel, 4);

/** @deprecated Use trackFunnelComplete instead */
export const trackOnboardingComplete = (
  packageType: string,
  estimatedPrice: number
) =>
  trackFunnelComplete("offerte_wizard", {
    value: estimatedPrice,
    metadata: { package_type: packageType },
  });

/** @deprecated Use trackFunnelAbandon instead */
export const trackOnboardingAbandonment = (lastStep: string) =>
  trackFunnelAbandon("offerte_wizard", 0, lastStep);
