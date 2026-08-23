"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  overlayGradient?: boolean;
  darkOverlay?: boolean;
  priority?: boolean;
  scaleOnScroll?: boolean;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className,
  overlayGradient = true,
  darkOverlay = false,
  priority = false,
  scaleOnScroll = false,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "250px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy silent fallback
      });
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden w-full h-full group", className)}>
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000 transform scale-100 group-hover:scale-[1.02]",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Subtle Gradient & Vignette Overlays for Crisp Text Legibility */}
      {overlayGradient && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1128]/80 via-transparent to-[#0A1128]/30" />
      )}
      {darkOverlay && (
        <div className="absolute inset-0 pointer-events-none bg-[#0A1128]/50 backdrop-brightness-95" />
      )}
    </div>
  );
};
