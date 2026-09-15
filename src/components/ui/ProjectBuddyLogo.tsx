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

  const heightSizes = { sm: "h-8", md: "h-11", lg: "h-12" };
  const textSizes = { sm: "text-[17px]", md: "text-[21px]", lg: "text-[23px]" };

  return (
    <Link
      href="/"
      aria-label="Project Buddy"
      className="inline-flex items-center gap-4 group transition-transform duration-200 active:scale-[0.98]"
    >
      <div className={`relative ${heightSizes[size]} w-auto aspect-square flex items-center justify-center rounded-[14px] overflow-hidden shadow-sm border border-slate-200/80 bg-white p-0.5 shrink-0`}>
        <Image
          src="/logo.jpg"
          alt="Project Buddy Logo"
          width={48}
          height={48}
          className="object-contain w-full h-full rounded-[11px] transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      {!useImageOnly && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center whitespace-nowrap leading-none">
            <span
              className={`font-display font-extrabold ${textSizes[size]} tracking-[-0.045em] leading-none normal-case ${isDarkBg ? "text-white" : "text-[#111827]"}`}
            >
              Project <span className="text-[#0052FF]">Buddy</span>
            </span>
          </div>

          {showTagline && (
            <span
              className={`text-[10px] tracking-[0.08em] font-sans font-medium mt-1 normal-case ${isDarkBg ? "text-slate-400" : "text-slate-500"}`}
            >
              Turn Idea into Reality
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
