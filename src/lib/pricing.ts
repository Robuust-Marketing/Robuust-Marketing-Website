// Prijsberekening utilities voor de onboarding wizard
import { pricing, formatPrice, type ServiceAddOnId } from "@/data/pricing";
import type { PriceEstimate, OnboardingData } from "@/types/onboarding";

// Services die een add-on prijs hebben
const serviceAddOnMapping: Record<string, ServiceAddOnId> = {
  tracking: "tracking",
  "email-marketing": "email-marketing",
  "online-marketing": "online-marketing",
  branding: "branding",
  seo: "seo",
  crm: "crm",
  maintenance: "maintenance",
};

// Basis diensten die onderdeel zijn van het pakket (geen extra kosten)
const baseServices = ["design", "development", "hosting"];

export function calculatePriceEstimate(
  data: Partial<OnboardingData>
): PriceEstimate {
  let oneTimeMin = 0;
  let oneTimeMax = 0;
  let monthlyMin = 0;
  let monthlyMax = 0;

  const addOns: PriceEstimate["breakdown"]["addOns"] = [];
  let hostingBreakdown: PriceEstimate["breakdown"]["hosting"] = null;

  // 1. Bepaal basis pakket op basis van company size en project goal
  const basePackage = determineBasePackage(data.companySize, data.projectGoal);

  if (basePackage) {
    oneTimeMin += basePackage.min;
    oneTimeMax += basePackage.max;
  }

  // 2. Voeg service add-ons toe
  if (data.selectedServices) {
    for (const serviceId of data.selectedServices) {
      // Skip basis services (zitten in pakket)
      if (baseServices.includes(serviceId)) continue;

      const addOnId = serviceAddOnMapping[serviceId];
      if (addOnId && pricing.serviceAddOns[addOnId]) {
        const addOn = pricing.serviceAddOns[addOnId];
        addOns.push({
          name: addOn.label,
          price: addOn.price,
          type: addOn.type,
        });

        if (addOn.type === "one-time") {
          oneTimeMin += addOn.price;
          oneTimeMax += addOn.price;
        } else {
          monthlyMin += addOn.price;
          monthlyMax += addOn.price;
        }
      }
    }
  }

  // 3. Voeg hosting toe
  if (data.hostingTier && data.hostingTier !== "none") {
    const hostingPlan = pricing.hosting[data.hostingTier];
    if (hostingPlan) {
      hostingBreakdown = {
        name: hostingPlan.label,
        price: hostingPlan.price,
      };

      if (hostingPlan.price !== null) {
        monthlyMin += hostingPlan.price;
        // Gebruik priceMax voor bovengrens indien beschikbaar (bijv. VPS €50-€100)
        monthlyMax += hostingPlan.priceMax ?? hostingPlan.price;
      }
    }
  }

  // 4. Bereken eerste jaar totaal
  const firstYearMin = oneTimeMin + monthlyMin * 12;
  const firstYearMax = oneTimeMax + monthlyMax * 12;

  return {
    oneTimeMin,
    oneTimeMax,
    monthlyMin,
    monthlyMax,
    firstYearMin,
    firstYearMax,
    breakdown: {
      basePackage,
      addOns,
      hosting: hostingBreakdown,
    },
  };
}

function determineBasePackage(
  companySize?: string,
  projectGoal?: string
): { min: number; max: number } | null {
  // Enterprise of grote projecten krijgen Firm Foundation
  if (companySize === "enterprise") {
    return {
      min: pricing.packages["firm-foundation"].minPrice,
      max: pricing.packages["firm-foundation"].maxPrice,
    };
  }

  // Webshop projecten krijgen ook Firm Foundation vanwege complexiteit
  if (projectGoal === "webshop") {
    return {
      min: pricing.packages["firm-foundation"].minPrice,
      max: pricing.packages["firm-foundation"].maxPrice,
    };
  }

  // Marketing projecten hebben geen website pakket nodig
  if (projectGoal === "marketing") {
    return null;
  }

  // Starters krijgen Solid Start
  if (companySize === "starter") {
    return {
      min: pricing.packages["solid-start"].minPrice,
      max: pricing.packages["solid-start"].maxPrice,
    };
  }

  // MKB krijgt standaard Firm Foundation (meest gekozen)
  if (companySize === "mkb") {
    return {
      min: pricing.packages["firm-foundation"].minPrice,
      max: pricing.packages["firm-foundation"].maxPrice,
    };
  }

  // Default: Solid Start
  return {
    min: pricing.packages["solid-start"].minPrice,
    max: pricing.packages["solid-start"].maxPrice,
  };
}

export function formatPriceEstimate(estimate: PriceEstimate): {
  oneTime: string;
  monthly: string;
  firstYear: string;
} {
  const formatRange = (min: number, max: number) => {
    if (min === 0 && max === 0) return "€0";
    if (min === max) return formatPrice(min);
    return `${formatPrice(min)} - ${formatPrice(max)}`;
  };

  return {
    oneTime: formatRange(estimate.oneTimeMin, estimate.oneTimeMax),
    monthly:
      estimate.monthlyMin > 0 || estimate.monthlyMax > 0
        ? `${formatRange(estimate.monthlyMin, estimate.monthlyMax)}/maand`
        : "Geen maandelijkse kosten",
    firstYear: formatRange(estimate.firstYearMin, estimate.firstYearMax),
  };
}

export function getPackageName(
  companySize?: string,
  projectGoal?: string
): string | null {
  if (projectGoal === "marketing") return null;

  if (companySize === "enterprise" || projectGoal === "webshop") {
    return pricing.packages["firm-foundation"].name;
  }

  if (companySize === "starter") {
    return pricing.packages["solid-start"].name;
  }

  if (companySize === "mkb") {
    return pricing.packages["firm-foundation"].name;
  }

  return pricing.packages["solid-start"].name;
}
