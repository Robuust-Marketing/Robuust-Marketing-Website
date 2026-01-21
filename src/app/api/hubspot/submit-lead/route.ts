import { NextResponse } from "next/server";
import { submitToHubSpot, isHubSpotConfigured } from "@/lib/hubspot";
import { onboardingSchema } from "@/types/onboarding";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = onboardingSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Ongeldige invoer", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const { estimatedPrice, withBooking } = body;

    // Prepare HubSpot submission
    const hubspotData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      company: data.company,
      projectGoal: data.projectGoal,
      companySize: data.companySize,
      selectedServices: data.selectedServices,
      hostingTier: data.hostingTier,
      budgetRange: data.budgetRange,
      timeline: data.timeline,
      projectDescription: data.projectDescription,
      estimatedPrice: estimatedPrice || "Niet berekend",
      source: "start-project-wizard",
    };

    // Submit to HubSpot if configured
    if (isHubSpotConfigured()) {
      const result = await submitToHubSpot(
        hubspotData,
        `${request.headers.get("origin") || ""}/start-project`
      );

      if (!result.success) {
        console.error("HubSpot submission failed:", result.error);
        // Continue anyway - we don't want to block the user
      }
    } else {
      // Log the lead data for development/testing
      console.log("Lead data (HubSpot not configured):", hubspotData);
    }

    // Send email notification as backup
    await sendEmailNotification(hubspotData, withBooking);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis bij het verwerken van je aanvraag" },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(
  data: {
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
  },
  withBooking: boolean
) {
  // Use Resend if configured
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@robuustmarketing.nl";

  if (!RESEND_API_KEY) {
    console.log("Resend not configured, skipping email notification");
    return;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    const emailBody = `
Nieuwe projectaanvraag via de Start Project wizard${withBooking ? " (met afspraak)" : ""}

--- CONTACT ---
Naam: ${data.firstName} ${data.lastName}
Email: ${data.email}
Telefoon: ${data.phone || "-"}
Bedrijf: ${data.company || "-"}

--- PROJECT ---
Doel: ${data.projectGoal}
Organisatiegrootte: ${data.companySize}
Geselecteerde diensten: ${data.selectedServices.join(", ")}
Hosting: ${data.hostingTier}
Budget: ${data.budgetRange}
Timeline: ${data.timeline}

--- BESCHRIJVING ---
${data.projectDescription || "Geen beschrijving opgegeven"}

--- PRIJSINDICATIE ---
${data.estimatedPrice}

---
Automatisch verzonden via de Robuust Marketing website
    `.trim();

    await resend.emails.send({
      from: "Robuust Marketing <noreply@robuustmarketing.nl>",
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `Nieuwe projectaanvraag: ${data.firstName} ${data.lastName}${data.company ? ` (${data.company})` : ""}`,
      text: emailBody,
    });

    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
}
