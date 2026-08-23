"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type VideoPriority = "critical" | "near" | "auto" | "lazy";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  overlayGradient?: boolean;
  darkOverlay?: boolean;
  aspectRatio?: string;
  priority?: VideoPriority;
  objectFit?: "cover" | "contain" | "fill";
  desktopObjectPosition?: string;
  mobileObjectPosition?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className,
  overlayGradient = false,
  darkOverlay = false,
  aspectRatio = "aspect-video",
  priority = "auto",
  objectFit = "cover",
  desktopObjectPosition = "center center",
  mobileObjectPosition = "center center",
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(priority === "critical");

  useEffect(() => {
    if (priority === "critical") {
      setShouldRender(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    // Configurable rootMargin based on explicit loading strategy
    let rootMargin = "800px 0px 800px 0px";
    if (priority === "near") rootMargin = "1300px 0px 1300px 0px";
    if (priority === "lazy") rootMargin = "200px 0px 200px 0px";

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
      { rootMargin, threshold: 0.02 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [priority]);

  const fitClass =
    objectFit === "contain"
      ? "object-contain"
      : objectFit === "fill"
      ? "object-fill"
      : "object-cover";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-950 w-full rounded-2xl border border-slate-800/60 shadow-xl",
        aspectRatio,
        className
      )}
    >
      {/* Seamless Video Render */}
      {shouldRender && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload={priority === "critical" ? "auto" : "metadata"}
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full transition-opacity duration-700 ease-out",
            fitClass,
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{
            objectPosition: desktopObjectPosition,
          }}
          {...props}
        />
      )}

      {/* Clean Poster / Fallback Frame (Zero Spinners or Telemetry Text) */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-slate-950 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: poster ? `url(${poster})` : undefined,
          }}
        >
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
      )}

      {/* Subtle Ambient Overlay Gradients */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
      )}
      {darkOverlay && (
        <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
      )}
    </div>
  );
};
