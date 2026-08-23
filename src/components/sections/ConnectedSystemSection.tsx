"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { Network } from "lucide-react";
import { motion } from "framer-motion";

export const ConnectedSystemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typographic Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-wider text-[#0052FF] uppercase">
              <Network className="w-3.5 h-3.5" />
              <span>CHAPTER 04 • CONNECTED ARCHITECTURE</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1]">
              Disconnected Systems Don't Scale. <br />
              <span className="text-gradient-blue">One Connected System Can.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Most businesses operate with disconnected software, manual processes, fragmented data, and tools that do not communicate properly. Project Buddy designs unified, connected technology infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">01. PAYMENTS & OPERATIVE DATA</span>
                <p className="text-xs text-slate-700 font-medium">Real-time sync across gateways & ERPs.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">02. ANALYTICS & TELEMETRY</span>
                <p className="text-xs text-slate-700 font-medium">Automated pipeline reporting.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Immersive Composition with Video 1 (1.mp4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 aspect-[4/3]">
              <LazyVideo
                src="/videos/1.mp4"
                aspectRatio="aspect-[4/3]"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
