"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  overlayGradient?: boolean;
  darkOverlay?: boolean;
  aspectRatio?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className,
  overlayGradient = true,
  darkOverlay = false,
  aspectRatio = "aspect-video",
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-950 w-full rounded-2xl",
        aspectRatio,
        className
      )}
    >
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700 ease-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      )}

      {/* Fallback loading frame */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-950 animate-pulse flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
        </div>
      )}

      {/* Optional Gradients */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      )}
      {darkOverlay && (
        <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
      )}
    </div>
  );
};
