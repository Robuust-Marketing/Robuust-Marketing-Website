"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface LazyYouTubeProps {
  videoId: string;
  title?: string;
  className?: string;
  thumbnail?: string; // Local thumbnail path (e.g., "/video-thumbnails/intro.jpg")
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
export function LazyYouTube({ videoId, title = "Video", className = "", thumbnail }: LazyYouTubeProps) {
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

  // Use local thumbnail if provided, otherwise use YouTube's thumbnail URL
  const thumbnailUrl = thumbnail || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const isLocalThumbnail = !!thumbnail;

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
      {/* Thumbnail - use Next.js Image for local, regular img for external */}
      {isLocalThumbnail ? (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 512px"
          className="object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // Fallback to lower quality thumbnail if maxres doesn't exist
            const target = e.target as HTMLImageElement;
            const fallbackUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
            if (!target.src.includes("hqdefault")) {
              target.src = fallbackUrl;
            }
          }}
        />
      )}

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
