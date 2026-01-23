"use client";

import { useState } from "react";
import { Linkedin, Twitter, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnX = () => {
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
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

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-white">Deel dit artikel</p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={shareOnLinkedIn}
          className="h-9 w-9 border-white/10 bg-surface hover:bg-surface-hover hover:border-accent/30"
          aria-label="Deel op LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={shareOnX}
          className="h-9 w-9 border-white/10 bg-surface hover:bg-surface-hover hover:border-accent/30"
          aria-label="Deel op X"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={copyLink}
          className="h-9 w-9 border-white/10 bg-surface hover:bg-surface-hover hover:border-accent/30"
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
        <p className="text-xs text-green-500">Link gekopieerd!</p>
      )}
    </div>
  );
}
