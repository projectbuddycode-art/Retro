"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type VideoPriority = "critical" | "near" | "auto" | "lazy";

interface LazyVideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src"> {
  src?: string;
  webmSrc?: string;
  mp4Src?: string;
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
  webmSrc,
  mp4Src,
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

  // Determine source paths
  const resolvedMp4 = mp4Src || src;
  const resolvedWebm =
    webmSrc ||
    (resolvedMp4 && resolvedMp4.endsWith(".mp4")
      ? resolvedMp4.replace(/\.mp4$/, ".webm")
      : undefined);

  // Auto-detect matching poster if none is supplied
  const resolvedPoster =
    poster ||
    (resolvedMp4 && resolvedMp4.endsWith(".mp4")
      ? resolvedMp4.replace(/\.mp4$/, "-poster.webp")
      : undefined);

  useEffect(() => {
    if (priority === "critical") {
      setShouldRender(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    let rootMargin = "600px 0px";
    if (priority === "near") rootMargin = "1000px 0px";
    if (priority === "lazy") rootMargin = "250px 0px";

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
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [priority]);

  // Tab visibility management: pause video when tab is hidden to save GPU/battery
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      } else {
        if (shouldRender && videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [shouldRender]);

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
      {/* Poster Background layer — Prevents any empty or black flash */}
      {resolvedPoster && (
        <div
          className={cn(
            "absolute inset-0 bg-slate-950 bg-cover bg-center transition-opacity duration-700 pointer-events-none",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage: `url(${resolvedPoster})`,
            backgroundSize: objectFit === "contain" ? "contain" : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: desktopObjectPosition,
          }}
        />
      )}

      {/* Video Element */}
      {shouldRender && (
        <video
          ref={videoRef}
          poster={resolvedPoster}
          muted
          loop
          playsInline
          autoPlay
          preload={priority === "critical" ? "auto" : "metadata"}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          onPlaying={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full transition-opacity duration-700 ease-out",
            fitClass,
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{
            objectPosition: desktopObjectPosition,
          }}
          {...props}
        >
          {resolvedWebm && <source src={resolvedWebm} type="video/webm" />}
          {resolvedMp4 && <source src={resolvedMp4} type="video/mp4" />}
        </video>
      )}
    </div>
  );
};
