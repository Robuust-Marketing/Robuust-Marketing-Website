"use client";

import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: TurnstileRenderOptions
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
    onTurnstileLoad?: () => void;
  }
}

interface TurnstileRenderOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "error-callback"?: (error: unknown) => void;
  "expired-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  action?: string;
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: (error: unknown) => void;
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact";
  action?: string;
  className?: string;
}

/**
 * Cloudflare Turnstile Widget Component
 *
 * Renders a Turnstile challenge widget for bot protection.
 * The token is passed to the onVerify callback when verification succeeds.
 *
 * @example
 * ```tsx
 * const [token, setToken] = useState<string | null>(null);
 *
 * <Turnstile
 *   onVerify={setToken}
 *   onExpire={() => setToken(null)}
 *   theme="dark"
 * />
 * ```
 */
export function Turnstile({
  onVerify,
  onError,
  onExpire,
  theme = "dark",
  size = "normal",
  action,
  className,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const scriptLoadedRef = useRef(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || !siteKey) return;

    // Remove existing widget if present
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        // Widget may already be removed
      }
    }

    // Render new widget
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      "error-callback": onError,
      "expired-callback": onExpire,
      theme,
      size,
      action,
    });
  }, [siteKey, onVerify, onError, onExpire, theme, size, action]);

  useEffect(() => {
    if (!siteKey) {
      console.warn("Turnstile site key not configured");
      return;
    }

    // If Turnstile is already loaded, render immediately
    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Set up callback for when script loads
    window.onTurnstileLoad = () => {
      scriptLoadedRef.current = true;
      renderWidget();
    };

    // Load script if not already loaded
    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Widget may already be removed
        }
      }
    };
  }, [siteKey, renderWidget]);

  // Don't render anything if no site key
  if (!siteKey) {
    return null;
  }

  return <div ref={containerRef} className={className} />;
}

/**
 * Hook to reset the Turnstile widget
 * Useful after a failed submission to allow retry
 */
export function useTurnstileReset() {
  return useCallback((widgetId: string) => {
    if (window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }, []);
}
