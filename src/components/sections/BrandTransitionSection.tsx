"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { motion } from "framer-motion";

export const BrandTransitionSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0A1128] text-white overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 aspect-[16/9] max-h-[540px] w-full"
        >
          <LazyVideo
            src="/videos/2.mp4"
            overlayGradient={false}
            darkOverlay={false}
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-[#0A1128]/40 pointer-events-none" />

          {/* Floating Architectural Badge */}
          <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between font-mono text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF] animate-pulse" />
              <span className="font-bold text-[#38BDF8] uppercase tracking-wider text-[11px]">
                PROJECT BUDDY BRAND SYSTEM
              </span>
            </div>
            <span className="hidden sm:inline text-slate-400 text-[11px]">
              ARCHITECTURE RUNTIME v2.0
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
