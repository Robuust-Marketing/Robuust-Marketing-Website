"use client";

import { useTranslations } from "next-intl";
import { HubSpotCalendar } from "@/components/onboarding/hubspot-calendar";
import { Calendar, Clock, Video } from "lucide-react";

export default function AfspraakPageClient() {
  const t = useTranslations("afspraak");

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">{t("benefit1Title")}</h3>
                <p className="text-sm text-white/60">{t("benefit1Desc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Video className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">{t("benefit2Title")}</h3>
                <p className="text-sm text-white/60">{t("benefit2Desc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Calendar className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">{t("benefit3Title")}</h3>
                <p className="text-sm text-white/60">{t("benefit3Desc")}</p>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <HubSpotCalendar />
        </div>
      </div>
    </main>
  );
}
