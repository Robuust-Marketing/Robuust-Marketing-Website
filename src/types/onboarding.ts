import { z } from "zod";

// Project types
export const projectGoals = [
  { id: "nieuwe-website", label: "Nieuwe website", description: "Een volledig nieuwe website laten bouwen" },
  { id: "redesign", label: "Website redesign", description: "Bestaande website vernieuwen" },
  { id: "webshop", label: "Webshop / E-commerce", description: "Online verkopen starten of verbeteren" },
  { id: "marketing", label: "Marketing & Growth", description: "Meer bezoekers en conversies" },
  { id: "anders", label: "Anders", description: "Iets anders of weet ik nog niet" },
] as const;

export const companySizes = [
  { id: "starter", label: "Starter / ZZP", description: "Net begonnen of eenmanszaak" },
  { id: "mkb", label: "MKB", description: "2-50 medewerkers" },
  { id: "enterprise", label: "Enterprise", description: "50+ medewerkers" },
] as const;

// Wizard step labels
export const wizardSteps = [
  { id: 1, name: "Welkom", label: "step_1_welcome" },
  { id: 2, name: "Diensten", label: "step_2_services" },
  { id: 3, name: "Hosting", label: "step_3_hosting" },
  { id: 4, name: "Budget", label: "step_4_budget" },
  { id: 5, name: "Contact", label: "step_5_contact" },
  { id: 6, name: "Overzicht", label: "step_6_summary" },
] as const;

// Zod schemas voor elke stap
export const stepWelcomeSchema = z.object({
  projectGoal: z.enum(["nieuwe-website", "redesign", "webshop", "marketing", "anders"]),
  companySize: z.enum(["starter", "mkb", "enterprise"]),
});

export const stepServicesSchema = z.object({
  selectedServices: z.array(z.string()).min(1, "Selecteer minimaal één dienst"),
});

export const stepHostingSchema = z.object({
  hostingTier: z.enum(["basis", "professional", "enterprise", "none"]),
  needsSLA: z.boolean().optional(),
});

export const stepBudgetSchema = z.object({
  budgetRange: z.string().min(1, "Selecteer een budgetrange"),
  timeline: z.string().min(1, "Selecteer een tijdlijn"),
  projectDescription: z.string().optional(),
});

export const stepContactSchema = z.object({
  firstName: z.string().min(2, "Voer je voornaam in"),
  lastName: z.string().min(2, "Voer je achternaam in"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  phone: z.string().optional(),
  company: z.string().optional(),
  privacyConsent: z.literal(true, {
    message: "Je moet akkoord gaan met de privacyverklaring",
  }),
});

// Gecombineerd schema voor volledige wizard data
export const onboardingSchema = z.object({
  // Step 1
  projectGoal: stepWelcomeSchema.shape.projectGoal,
  companySize: stepWelcomeSchema.shape.companySize,
  // Step 2
  selectedServices: stepServicesSchema.shape.selectedServices,
  // Step 3
  hostingTier: stepHostingSchema.shape.hostingTier,
  needsSLA: stepHostingSchema.shape.needsSLA,
  // Step 4
  budgetRange: stepBudgetSchema.shape.budgetRange,
  timeline: stepBudgetSchema.shape.timeline,
  projectDescription: stepBudgetSchema.shape.projectDescription,
  // Step 5
  firstName: stepContactSchema.shape.firstName,
  lastName: stepContactSchema.shape.lastName,
  email: stepContactSchema.shape.email,
  phone: stepContactSchema.shape.phone,
  company: stepContactSchema.shape.company,
  privacyConsent: stepContactSchema.shape.privacyConsent,
});

// Types afgeleid van schemas
export type StepWelcomeData = z.infer<typeof stepWelcomeSchema>;
export type StepServicesData = z.infer<typeof stepServicesSchema>;
export type StepHostingData = z.infer<typeof stepHostingSchema>;
export type StepBudgetData = z.infer<typeof stepBudgetSchema>;
export type StepContactData = z.infer<typeof stepContactSchema>;
export type OnboardingData = z.infer<typeof onboardingSchema>;

// Wizard state type
export interface WizardState {
  currentStep: number;
  data: Partial<OnboardingData>;
  isSubmitting: boolean;
  isComplete: boolean;
}

// Calculated price estimate type
export interface PriceEstimate {
  oneTimeMin: number;
  oneTimeMax: number;
  monthlyMin: number;
  monthlyMax: number;
  firstYearMin: number;
  firstYearMax: number;
  breakdown: {
    basePackage: { min: number; max: number } | null;
    addOns: { name: string; price: number; type: "one-time" | "monthly" }[];
    hosting: { name: string; price: number | null } | null;
  };
}

// HubSpot submission payload
export interface HubSpotSubmission {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  company?: string;
  projectGoal: string;
  companySize: string;
  selectedServices: string[];
  hostingTier: string;
  budgetRange: string;
  timeline: string;
  projectDescription?: string;
  estimatedPrice: string;
  source: string;
}
