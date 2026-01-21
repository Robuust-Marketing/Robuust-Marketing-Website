// HubSpot utilities voor lead submission
import type { HubSpotSubmission } from "@/types/onboarding";

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID;

interface HubSpotFormField {
  objectTypeId: string;
  name: string;
  value: string;
}

interface HubSpotFormSubmission {
  submittedAt: number;
  fields: HubSpotFormField[];
  context: {
    pageUri: string;
    pageName: string;
  };
}

export async function submitToHubSpot(
  data: HubSpotSubmission,
  pageUri: string
): Promise<{ success: boolean; error?: string }> {
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) {
    console.warn("HubSpot credentials not configured");
    return { success: false, error: "HubSpot niet geconfigureerd" };
  }

  const fields: HubSpotFormField[] = [
    { objectTypeId: "0-1", name: "email", value: data.email },
    { objectTypeId: "0-1", name: "firstname", value: data.firstName },
    { objectTypeId: "0-1", name: "lastname", value: data.lastName },
    { objectTypeId: "0-1", name: "company", value: data.company || "" },
    { objectTypeId: "0-1", name: "phone", value: data.phone || "" },
    // Custom properties - these need to be created in HubSpot first
    { objectTypeId: "0-1", name: "project_goal", value: data.projectGoal },
    { objectTypeId: "0-1", name: "company_size", value: data.companySize },
    {
      objectTypeId: "0-1",
      name: "selected_services",
      value: data.selectedServices.join(", "),
    },
    { objectTypeId: "0-1", name: "hosting_tier", value: data.hostingTier },
    { objectTypeId: "0-1", name: "budget_range", value: data.budgetRange },
    { objectTypeId: "0-1", name: "timeline", value: data.timeline },
    {
      objectTypeId: "0-1",
      name: "project_description",
      value: data.projectDescription || "",
    },
    {
      objectTypeId: "0-1",
      name: "estimated_price",
      value: data.estimatedPrice,
    },
    { objectTypeId: "0-1", name: "lead_source", value: data.source },
  ];

  const submission: HubSpotFormSubmission = {
    submittedAt: Date.now(),
    fields,
    context: {
      pageUri,
      pageName: "Start Project Wizard",
    },
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("HubSpot submission failed:", errorData);
      return {
        success: false,
        error: "Er ging iets mis bij het versturen naar HubSpot",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("HubSpot submission error:", error);
    return {
      success: false,
      error: "Kon geen verbinding maken met HubSpot",
    };
  }
}

// HubSpot calendar meeting link
export const HUBSPOT_MEETING_LINK =
  "https://meetings-eu1.hubspot.com/robin-van-der-heide";

// Helper to check if HubSpot is configured
export function isHubSpotConfigured(): boolean {
  return Boolean(HUBSPOT_PORTAL_ID && HUBSPOT_FORM_GUID);
}
