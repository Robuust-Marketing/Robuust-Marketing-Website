"use client";

import { useFormContext } from "react-hook-form";
import { Check, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { pricing, formatPrice } from "@/data/pricing";
import type { OnboardingData } from "@/types/onboarding";

// Prijzen per service voor weergave
const servicePrices: Record<string, { price: number; type: "one-time" | "monthly" } | null> = {
  design: null, // Inbegrepen
  development: null, // Inbegrepen
  hosting: null, // Inbegrepen (apart gekozen)
  maintenance: { price: pricing.serviceAddOns.maintenance.price, type: "monthly" },
  tracking: { price: pricing.serviceAddOns.tracking.price, type: "one-time" },
  "email-marketing": { price: pricing.serviceAddOns["email-marketing"].price, type: "one-time" },
  "online-marketing": { price: pricing.serviceAddOns["online-marketing"].price, type: "monthly" },
  branding: { price: pricing.serviceAddOns.branding.price, type: "one-time" },
  seo: { price: pricing.serviceAddOns.seo.price, type: "one-time" },
  crm: { price: pricing.serviceAddOns.crm.price, type: "one-time" },
};

export function StepServices() {
  const { watch, setValue } = useFormContext<OnboardingData>();
  const selectedServices = watch("selectedServices") || [];

  const toggleService = (serviceId: string) => {
    const newSelection = selectedServices.includes(serviceId)
      ? selectedServices.filter((s) => s !== serviceId)
      : [...selectedServices, serviceId];

    setValue("selectedServices", newSelection, { shouldValidate: true });
  };

  // Base services die inbegrepen zijn in het pakket
  const baseServiceIds = ["design", "development", "hosting"];
  const projectGoal = watch("projectGoal");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Welke diensten heb je nodig?
        </h2>
        <p className="text-muted-foreground">
          Selecteer de diensten die je nodig hebt. De prijsindicatie wordt automatisch
          bijgewerkt.
        </p>
      </div>

      {/* Basis diensten info - alleen tonen als niet marketing-only */}
      {projectGoal !== "marketing" && (
        <div className="mb-6 p-4 rounded-xl bg-accent/10 border border-accent/30">
          <div className="flex items-center gap-2 mb-2">
            <Package className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Inbegrepen in je pakket</span>
          </div>
          <p className="text-xs text-white/70">
            Design, Development en Hosting zijn standaard inbegrepen in je website pakket. Selecteer hieronder eventuele extra diensten.
          </p>
        </div>
      )}

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service, index) => {
          const isSelected = selectedServices.includes(service.id);
          const isBaseService = baseServiceIds.includes(service.id);
          const priceInfo = servicePrices[service.id];

          // Skip hosting in de grid (wordt apart gekozen)
          if (service.id === "hosting") return null;

          const ServiceIcon = service.icon;

          return (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => toggleService(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleService(service.id);
                }
              }}
              className={cn(
                "relative flex items-start gap-3 p-4 rounded-xl border-2 text-left cursor-pointer select-none",
                "transition-all duration-200",
                isSelected
                  ? "border-accent bg-accent/20 ring-2 ring-accent/30 shadow-lg shadow-accent/20"
                  : "border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.98] active:bg-white/10"
              )}
            >

              {/* Inbegrepen badge voor basis diensten */}
              {isBaseService && projectGoal !== "marketing" && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs bg-green-500/30 text-green-400 rounded-full border border-green-500/50 font-medium">
                  Inbegrepen
                </span>
              )}

              {/* Prijs badge voor add-on diensten */}
              {priceInfo && !isBaseService && (
                <span className={cn(
                  "absolute -top-2 -right-2 px-2 py-0.5 text-xs rounded-full border font-medium",
                  isSelected
                    ? "bg-accent/30 text-accent border-accent/50"
                    : "bg-white/10 text-white/70 border-white/30"
                )}>
                  {priceInfo.type === "monthly"
                    ? `${formatPrice(priceInfo.price)}/mnd`
                    : formatPrice(priceInfo.price)}
                </span>
              )}

              {/* Custom Checkbox */}
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded mt-0.5",
                  "border-2 transition-all duration-200",
                  isSelected
                    ? "border-accent bg-accent"
                    : "border-white/40 bg-transparent"
                )}
              >
                {isSelected && (
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              {/* Icon and content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
                      isSelected
                        ? "bg-accent text-white"
                        : "bg-white/10 text-white/60"
                    )}
                  >
                    <ServiceIcon className="h-4 w-4" />
                  </div>
                  <span
                    className={cn(
                      "font-medium transition-colors",
                      isSelected ? "text-white" : "text-white/80"
                    )}
                  >
                    {service.name}
                  </span>
                </div>
                <p className="text-xs text-white/50 mt-2 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selection summary */}
      {selectedServices.length > 0 && (
        <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
          <p className="text-sm text-white">
            <Check className="inline h-4 w-4 text-accent mr-2" />
            <span className="text-accent font-semibold">{selectedServices.length}</span>{" "}
            {selectedServices.length === 1 ? "dienst" : "diensten"} geselecteerd
          </p>
        </div>
      )}
    </div>
  );
}
