"use client";

import { useState } from "react";
import { Linkedin, Twitter, Link2, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
  compact?: boolean;
}

export function ShareButtons({ title, url, compact = false }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnX = () => {
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnWhatsApp = () => {
    const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const buttonClass = compact
    ? "h-10 w-10 border-white/10 bg-surface hover:bg-surface-hover hover:border-accent/30 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
    : "h-9 w-9 border-white/10 bg-surface hover:bg-surface-hover hover:border-accent/30 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background";

  if (compact) {
    return (
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={shareOnWhatsApp}
          className={buttonClass}
          aria-label="Deel via WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={copyLink}
          className={buttonClass}
          aria-label="Kopieer link"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <Link2 className="h-5 w-5" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-white">Deel dit artikel</p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={shareOnLinkedIn}
          className={buttonClass}
          aria-label="Deel op LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={shareOnX}
          className={buttonClass}
          aria-label="Deel op X"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={shareOnWhatsApp}
          className={buttonClass}
          aria-label="Deel via WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={copyLink}
          className={buttonClass}
          aria-label="Kopieer link"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </Button>
      </div>
      {copied && (
        <p className="text-xs text-green-500" role="status" aria-live="polite">
          Link gekopieerd!
        </p>
      )}
    </div>
  );
}
