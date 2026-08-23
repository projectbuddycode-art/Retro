"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type VideoPriority = "critical" | "near" | "auto" | "lazy";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
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
  aspectRatio = "aspect-video",
  priority = "auto",
  objectFit = "contain",
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
    objectFit === "cover"
      ? "object-cover"
      : objectFit === "fill"
      ? "object-fill"
      : "object-contain";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-950 w-full rounded-2xl border border-slate-800/50 shadow-xl",
        aspectRatio,
        className
      )}
    >
      {/* Seamless Clean Video Frame — ZERO Text, Badges, Telemetry or Overlays */}
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

      {/* Clean Poster / Fallback Frame — Zero Text or Spinners */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-slate-950 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: poster ? `url(${poster})` : undefined,
          }}
        />
      )}
    </div>
  );
};
