import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const ProjectBuddyLogo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  showTagline = false,
}) => {
  const isDarkBg = variant === "light"; // "light" variant means light text for dark bg

  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <Link href="/" className="inline-flex items-center gap-3 group transition-transform duration-200 active:scale-[0.98]">
      {/* Precision Geometric Tech Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Frame */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill={isDarkBg ? "#0A1128" : "#FFFFFF"}
            stroke={isDarkBg ? "rgba(255, 255, 255, 0.15)" : "#E2E8F0"}
            strokeWidth="1.5"
          />
          {/* Primary PB Interlocking Hex Nodes */}
          <path
            d="M12 12H24C26.7614 12 29 14.2386 29 17C29 19.7614 26.7614 22 24 22H12V12Z"
            fill="#0052FF"
          />
          <path
            d="M12 20H25C27.7614 20 30 22.2386 30 25C30 27.7614 27.7614 30 25 30H12V20Z"
            fill={isDarkBg ? "#38BDF8" : "#0A1128"}
          />
          <circle cx="17" cy="17" r="2.5" fill="#FFFFFF" />
          <circle cx="17" cy="25" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-bold tracking-tight font-sans ${textSizes[size]} ${
              isDarkBg ? "text-white" : "text-slate-900"
            }`}
          >
            PROJECT <span className="text-[#0052FF]">BUDDY</span>
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] tracking-widest uppercase font-mono font-medium -mt-1 ${
              isDarkBg ? "text-slate-400" : "text-slate-500"
            }`}
          >
            TECHNOLOGY PARTNER
          </span>
        )}
      </div>
    </Link>
  );
};
