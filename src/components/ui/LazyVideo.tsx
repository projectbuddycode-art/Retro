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
  priority?: boolean;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className,
  overlayGradient = true,
  darkOverlay = false,
  aspectRatio = "aspect-video",
  priority = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(priority);

  useEffect(() => {
    if (priority) {
      setShouldRender(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    // RootMargin: 700px before viewport ensures video starts preloading before user reaches section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
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
      { rootMargin: "700px 0px 700px 0px", threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-950 w-full rounded-2xl border border-slate-800/80 shadow-2xl",
        aspectRatio,
        className
      )}
    >
      {shouldRender && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload={priority ? "auto" : "metadata"}
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700 ease-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...props}
        />
      )}

      {/* Skeleton / Fallback frame during load */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center space-y-3 p-4">
          <div className="w-8 h-8 rounded-full border-2 border-[#0052FF]/30 border-t-[#0052FF] animate-spin" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            SYSTEM TELEMETRY LOADING
          </span>
        </div>
      )}

      {/* Overlay Gradients */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      )}
      {darkOverlay && (
        <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />
      )}
    </div>
  );
};
