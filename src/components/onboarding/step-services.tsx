"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import type { OnboardingData } from "@/types/onboarding";

export function StepServices() {
  const { watch, setValue } = useFormContext<OnboardingData>();
  const selectedServices = watch("selectedServices") || [];

  const toggleService = (serviceId: string) => {
    const newSelection = selectedServices.includes(serviceId)
      ? selectedServices.filter((s) => s !== serviceId)
      : [...selectedServices, serviceId];

    setValue("selectedServices", newSelection, { shouldValidate: true });
  };

  // Recommended services based on common combinations
  const recommendedIds = ["design", "development", "hosting"];

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

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service, index) => {
          const isSelected = selectedServices.includes(service.id);
          const isRecommended = recommendedIds.includes(service.id);

          return (
            <motion.button
              key={service.id}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => toggleService(service.id)}
              className={cn(
                "relative flex items-start gap-3 p-4 rounded-xl border text-left transition-all",
                isSelected
                  ? "border-accent bg-accent/10"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5"
              )}
            >
              {/* Recommended badge */}
              {isRecommended && !isSelected && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full border border-accent/30">
                  Aanbevolen
                </span>
              )}

              {/* Checkbox */}
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors mt-0.5",
                  isSelected ? "border-accent bg-accent" : "border-white/30"
                )}
              >
                {isSelected && <Check className="h-3 w-3 text-white" />}
              </div>

              {/* Icon and content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                      isSelected
                        ? "bg-accent/20 text-accent"
                        : "bg-white/5 text-white/60"
                    )}
                  >
                    <service.icon className="h-4 w-4" />
                  </div>
                  <span
                    className={cn(
                      "font-medium",
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
            </motion.button>
          );
        })}
      </div>

      {/* Selection summary */}
      {selectedServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10"
        >
          <p className="text-sm text-white/70">
            <span className="text-accent font-medium">{selectedServices.length}</span>{" "}
            {selectedServices.length === 1 ? "dienst" : "diensten"} geselecteerd
          </p>
        </motion.div>
      )}
    </div>
  );
}
