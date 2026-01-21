import { Metadata } from "next";
import { WizardContainer } from "@/components/onboarding/wizard-container";

export const metadata: Metadata = {
  title: "Start je project | Robuust Marketing",
  description:
    "Vertel ons over je project en ontvang direct een vrijblijvende prijsindicatie. Plan meteen een kennismakingsgesprek in.",
  openGraph: {
    title: "Start je project | Robuust Marketing",
    description:
      "Vertel ons over je project en ontvang direct een vrijblijvende prijsindicatie.",
    type: "website",
  },
};

export default function StartProjectPage() {
  return <WizardContainer />;
}
