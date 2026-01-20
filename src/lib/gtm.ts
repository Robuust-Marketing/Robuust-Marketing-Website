// Google Tag Manager utilities voor Robuust Marketing
// Gebruikt in combinatie met Cookiebot voor GDPR compliance

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

// Initialize GTM dataLayer
export const initGTM = () => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
};

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

// Track custom events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "custom_event",
    event_action: action,
    event_category: category,
    event_label: label,
    event_value: value,
  });
};

// Track conversions
export const trackConversion = (
  type: "contact_form" | "package_inquiry" | "phone_click"
) => {
  trackEvent({
    action: "conversion",
    category: "engagement",
    label: type,
  });
};

// Track conversion header clicks
export const trackConversionHeaderClick = (ctaText: string) => {
  trackEvent({
    action: "click",
    category: "conversion_header",
    label: ctaText,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent({
    action: "submit",
    category: "form",
    label: formName,
  });
};
