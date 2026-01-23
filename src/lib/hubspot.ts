// HubSpot utilities voor lead submission via Contacts API
import type { HubSpotSubmission } from "@/types/onboarding";

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

interface HubSpotContactProperties {
  [key: string]: string;
}

export async function submitToHubSpot(
  data: HubSpotSubmission,
  pageUri: string
): Promise<{ success: boolean; error?: string; contactId?: string }> {
  if (!HUBSPOT_ACCESS_TOKEN) {
    console.warn("HubSpot access token not configured");
    return { success: false, error: "HubSpot niet geconfigureerd" };
  }

  // Contact properties - standaard + custom velden
  const properties: HubSpotContactProperties = {
    email: data.email,
    firstname: data.firstName,
    lastname: data.lastName,
    company: data.company || "",
    phone: data.phone || "",
    // Custom properties - maak deze eerst aan in HubSpot als ze nog niet bestaan
    project_goal: data.projectGoal,
    company_size: data.companySize,
    selected_services: data.selectedServices.join(", "),
    hosting_tier: data.hostingTier,
    budget_range: data.budgetRange,
    timeline: data.timeline || "",
    project_description: data.projectDescription || "",
    estimated_price: data.estimatedPrice,
    lead_source: data.source,
    hs_lead_status: "NEW",
  };

  try {
    // Eerst proberen bestaand contact te updaten, anders aanmaken
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (response.status === 409) {
      // Contact bestaat al, update via email
      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json().catch(() => ({}));
        console.error("HubSpot update failed:", errorData);
        return {
          success: false,
          error: "Kon contact niet updaten in HubSpot",
        };
      }

      const updatedContact = await updateResponse.json();
      return { success: true, contactId: updatedContact.id };
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("HubSpot submission failed:", errorData);
      return {
        success: false,
        error: "Er ging iets mis bij het versturen naar HubSpot",
      };
    }

    const newContact = await response.json();
    return { success: true, contactId: newContact.id };
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
  return Boolean(HUBSPOT_ACCESS_TOKEN);
}
