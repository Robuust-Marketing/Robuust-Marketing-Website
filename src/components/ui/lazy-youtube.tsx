"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface LazyYouTubeProps {
  videoId: string;
  title?: string;
  className?: string;
}

// YouTube domains to preconnect to
const PRECONNECT_URLS = [
  "https://www.youtube.com",
  "https://www.google.com",
  "https://i.ytimg.com", // thumbnails (already loaded, but iframe uses it too)
];

/**
 * Lazy-loading YouTube embed component.
 * Shows a thumbnail with play button, loads iframe only on click.
 * Preconnects to YouTube on hover for faster iframe load.
 * Improves page load performance by deferring heavy iframe.
 */
export function LazyYouTube({ videoId, title = "Video", className = "" }: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPreconnected, setIsPreconnected] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handlePreconnect = useCallback(() => {
    if (isPreconnected) return;

    // Add preconnect links to head on hover
    PRECONNECT_URLS.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = url;
      document.head.appendChild(link);
    });

    setIsPreconnected(true);
  }, [isPreconnected]);

  // YouTube thumbnail URL - maxresdefault for highest quality
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  // Fallback to hqdefault if maxresdefault doesn't exist
  const fallbackThumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={`w-full h-full ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      onPointerEnter={handlePreconnect}
      onFocus={handlePreconnect}
      className={`relative w-full h-full group cursor-pointer ${className}`}
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 512px"
        className="object-cover"
        onError={(e) => {
          // Fallback to lower quality thumbnail if maxres doesn't exist
          const target = e.target as HTMLImageElement;
          if (target.src !== fallbackThumbnailUrl) {
            target.src = fallbackThumbnailUrl;
          }
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-accent-hover transition-all duration-300">
          <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
}
