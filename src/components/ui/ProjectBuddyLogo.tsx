import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  useImageOnly?: boolean;
}

export const ProjectBuddyLogo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  showTagline = false,
  useImageOnly = false,
}) => {
  const isDarkBg = variant === "light";

  const heightSizes = {
    sm: "h-7",
    md: "h-9",
    lg: "h-11",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 group transition-transform duration-200 active:scale-[0.98]"
    >
      <div className={`relative ${heightSizes[size]} w-auto aspect-square flex items-center justify-center rounded-xl overflow-hidden shadow-sm border border-slate-200/80 bg-white p-0.5`}>
        <Image
          src="/logo.jpg"
          alt="Project Buddy Logo"
          width={40}
          height={40}
          className="object-contain w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {!useImageOnly && (
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
              ENTERPRISE TECHNOLOGY
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
