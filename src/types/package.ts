// Package type definitions for Solid Start & Firm Foundation

export interface Package {
  id: "solid-start" | "firm-foundation";
  name: string;
  tagline: string;
  description: string;
  targetAudience: string[];
  pricing: {
    basePrice: number;
    currency: string;
    pricingModel: "fixed" | "custom" | "starting-from";
    billing: "one-time" | "monthly" | "annual";
  };
  features: FeatureCategory[];
  services: string[]; // Service IDs included in package
  addOns: string[]; // Optional service IDs
  deliveryTime: string;
  sla: {
    uptime: string;
    responseTime: string;
    supportHours: string;
  };
  cta: {
    primary: string;
    secondary?: string;
  };
}

export interface FeatureCategory {
  category: string;
  items: FeatureItem[];
}

export interface FeatureItem {
  name: string;
  description: string;
  included: boolean;
  optional?: boolean;
}
