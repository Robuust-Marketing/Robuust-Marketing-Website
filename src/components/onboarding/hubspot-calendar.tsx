"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "@/components/motion";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HUBSPOT_MEETING_LINK } from "@/lib/hubspot";

export function HubSpotCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load HubSpot meetings embed script
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.onload = () => {
      setIsLoading(false);
    };
    script.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
      >
        <Calendar className="h-8 w-8 text-accent mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">
          Plan een afspraak
        </h3>
        <p className="text-sm text-white/60 mb-4">
          Kies een moment dat jou uitkomt voor een vrijblijvend kennismakingsgesprek.
        </p>
        <Button asChild className="bg-accent hover:bg-accent-hover text-white">
          <a
            href={HUBSPOT_MEETING_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open agenda
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden bg-white/5 border border-white/10"
    >
      {isLoading && (
        <div className="p-8 text-center">
          <div className="animate-pulse">
            <Calendar className="h-8 w-8 text-accent mx-auto mb-4" />
            <p className="text-sm text-white/60">Agenda laden...</p>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="meetings-iframe-container"
        data-src={`${HUBSPOT_MEETING_LINK}?embed=true`}
        style={{ minHeight: isLoading ? 0 : "600px" }}
      />

      {/* Fallback link */}
      <div className="p-4 border-t border-white/10 text-center">
        <a
          href={HUBSPOT_MEETING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline inline-flex items-center gap-1"
        >
          Open in nieuw venster
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </motion.div>
  );
}
