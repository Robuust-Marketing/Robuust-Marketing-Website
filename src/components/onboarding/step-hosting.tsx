"use client";

import { useFormContext } from "react-hook-form";
import { Check, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { pricing, formatPrice } from "@/data/pricing";
import type { OnboardingData } from "@/types/onboarding";

const hostingOptions = [
  {
    id: "basis",
    ...pricing.hosting.basis,
  },
  {
    id: "professional",
    ...pricing.hosting.professional,
  },
  {
    id: "enterprise",
    ...pricing.hosting.enterprise,
  },
  {
    id: "none",
    label: "Geen hosting nodig",
    description: "Ik heb al hosting of regel dit zelf",
    price: 0,
    features: [],
    custom: false,
    popular: false,
  },
];

export function StepHosting() {
  const { watch, setValue } = useFormContext<OnboardingData>();
  const hostingTier = watch("hostingTier");
  const needsSLA = watch("needsSLA");

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Hosting & Onderhoud</h2>
        <p className="text-muted-foreground">
          Kies het hostingpakket dat past bij jouw behoeften. Alle pakketten
          inclusief SSL, backups en support.
        </p>
      </div>

      {/* Hosting options */}
      <div className="grid grid-cols-1 gap-4">
        {hostingOptions.map((option) => {
          const isSelected = hostingTier === option.id;
          const isNone = option.id === "none";

          return (
            <div
              key={option.id}
              role="button"
              tabIndex={0}
              onClick={() => setValue("hostingTier", option.id as OnboardingData["hostingTier"], { shouldValidate: true })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setValue("hostingTier", option.id as OnboardingData["hostingTier"], { shouldValidate: true });
                }
              }}
              className={cn(
                "relative flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer select-none",
                isSelected
                  ? isNone
                    ? "border-white/40 bg-white/10 ring-2 ring-white/20"
                    : "border-accent bg-accent/20 ring-2 ring-accent/30 shadow-lg shadow-accent/20"
                  : "border-white/10 hover:border-white/30 hover:bg-white/5"
              )}
            >
              {/* Popular badge */}
              {option.popular && (
                <span className="absolute -top-3 left-4 inline-flex items-center gap-1 px-3 py-1 text-xs bg-accent text-white rounded-full font-medium">
                  <Star className="h-3 w-3" />
                  Meest gekozen
                </span>
              )}

              {/* Radio button */}
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 mt-1",
                  isSelected
                    ? isNone
                      ? "border-white/50 bg-white/30 scale-110"
                      : "border-accent bg-accent scale-110"
                    : "border-white/30"
                )}
              >
                {isSelected && (
                  isNone ? (
                    <X className="h-4 w-4 text-white" strokeWidth={3} />
                  ) : (
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  )
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={cn(
                      "font-semibold text-lg transition-colors",
                      isSelected ? "text-white" : "text-white/80"
                    )}
                  >
                    {option.label}
                  </span>
                  <span className={cn(
                    "text-lg font-bold transition-colors",
                    isSelected ? "text-accent" : "text-white/60"
                  )}>
                    {option.custom || option.price === null
                      ? "Op maat"
                      : option.price === 0
                      ? ""
                      : `${formatPrice(option.price as number)}/maand`}
                  </span>
                </div>
                <p className="text-sm text-white/50 mb-3">{option.description}</p>

                {/* Features */}
                {option.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {option.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className={cn(
                          "text-xs px-2 py-1 rounded-full transition-colors",
                          isSelected
                            ? "bg-accent/20 text-accent"
                            : "bg-white/5 text-white/60"
                        )}
                      >
                        {feature}
                      </span>
                    ))}
                    {option.features.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                        +{option.features.length - 4} meer
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SLA option */}
      {hostingTier && hostingTier !== "none" && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setValue("needsSLA", !needsSLA)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setValue("needsSLA", !needsSLA);
            }
          }}
          className={cn(
            "mt-6 p-4 rounded-xl border-2 cursor-pointer select-none transition-all duration-200",
            needsSLA
              ? "border-accent bg-accent/20 ring-2 ring-accent/30"
              : "border-white/10 bg-white/5 hover:border-white/20"
          )}
        >
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 mt-0.5",
                needsSLA ? "border-accent bg-accent scale-110" : "border-white/30"
              )}
            >
              {needsSLA && <Check className="h-4 w-4 text-white" strokeWidth={3} />}
            </div>
            <div>
              <p className={cn(
                "font-medium transition-colors",
                needsSLA ? "text-white" : "text-white/80"
              )}>
                Uitgebreide SLA gewenst
              </p>
              <p className="text-sm text-white/50">
                Gegarandeerde responstijden, 24/7 monitoring en prioriteit support.
                Exact tarief bespreken we in het kennismakingsgesprek.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
