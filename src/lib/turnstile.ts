/**
 * Cloudflare Turnstile Server-Side Verification
 *
 * Verifies Turnstile tokens on the server to protect against bots.
 * @see https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export interface TurnstileVerifyResult {
  success: boolean;
  error?: string;
}

/**
 * Check if Turnstile is configured (secret key is set)
 */
export function isTurnstileConfigured(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY);
}

/**
 * Verify a Turnstile token on the server
 *
 * @param token - The token from the Turnstile widget (cf-turnstile-response)
 * @param remoteip - Optional: The user's IP address for additional validation
 * @returns Verification result with success status and optional error
 */
export async function verifyTurnstileToken(
  token: string,
  remoteip?: string
): Promise<TurnstileVerifyResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // Skip verification in development if not configured
  if (!secretKey) {
    console.warn("Turnstile secret key not configured, skipping verification");
    return { success: true };
  }

  // Token is required when Turnstile is configured
  if (!token) {
    return { success: false, error: "Turnstile token ontbreekt" };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);
    if (remoteip) {
      formData.append("remoteip", remoteip);
    }

    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      console.error("Turnstile API error:", response.status, response.statusText);
      return { success: false, error: "Verificatie mislukt" };
    }

    const data: TurnstileVerifyResponse = await response.json();

    if (!data.success) {
      const errorCodes = data["error-codes"]?.join(", ") || "unknown";
      console.error("Turnstile verification failed:", errorCodes);
      return { success: false, error: "Bot verificatie mislukt" };
    }

    return { success: true };
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return { success: false, error: "Verificatie fout" };
  }
}
