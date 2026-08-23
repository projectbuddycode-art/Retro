"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { ArrowRight, Cpu, Sparkles, Shield, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenContactModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] overflow-hidden border-b border-slate-200/80">
      {/* Subtle Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#0052FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-pb-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-slate-800 uppercase">
                PROJECT BUDDY / TECHNOLOGY PARTNER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-hero-title text-slate-900 leading-[1.08]">
              We Turn Complex Ideas <br className="hidden sm:inline" />
              Into <span className="text-gradient-blue">Systems That Scale.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              From intelligent software and AI automation to digital platforms and growth systems, Project Buddy helps ambitious businesses design, build and scale what comes next.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenContactModal}
                className="px-7 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-pb-float hover:shadow-pb-glow transition-all active:scale-95 group tracking-tight"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#ecosystem"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base border border-slate-200 flex items-center justify-center gap-2 shadow-pb-sm transition-all hover:border-slate-300"
              >
                <span>Explore Our Work</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Hero Video Frame (Video 1 Integration) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[4/3] sm:aspect-square lg:aspect-[4/4]">
              <LazyVideo
                src="/videos/Enterprise_software_system_engin._1080p_202608232315.mp4"
                priority={true}
                overlayGradient={true}
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Telemetry Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 text-xs font-mono text-slate-800 shadow-pb-card flex items-center justify-between">
                <div>
                  <span className="text-[#0052FF] font-bold block text-[10px] uppercase tracking-wider">ENTERPRISE SYSTEM ENGINEERING</span>
                  <span className="text-slate-600 font-sans text-xs font-medium">Modular Architecture & AI Integration</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Proof / Positioning Pipeline Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <div className="flex items-center gap-2 text-slate-700 font-semibold font-mono text-[11px] uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-[#0052FF]" />
            <span>ENTERPRISE ENGINEERING & AI AUTOMATION</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-600 font-medium text-[11px] sm:text-xs tracking-tight">
            <span className="text-slate-900 font-semibold">Strategy</span>
            <span className="text-slate-300">→</span>
            <span className="text-slate-900 font-semibold">Design</span>
            <span className="text-slate-300">→</span>
            <span className="text-slate-900 font-semibold">Engineering</span>
            <span className="text-slate-300">→</span>
            <span className="text-slate-900 font-semibold">Automation</span>
            <span className="text-slate-300">→</span>
            <span className="text-[#0052FF] font-bold">Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
