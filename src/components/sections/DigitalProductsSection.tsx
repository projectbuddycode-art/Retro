"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { LayoutDashboard, Smartphone, Layers } from "lucide-react";
import { motion } from "framer-motion";

export const DigitalProductsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Asymmetric Video 7 Composition (60% width on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 aspect-[16/10]">
              <LazyVideo
                src="/videos/7.mp4"
                aspectRatio="aspect-[16/10]"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-wider text-[#0052FF] uppercase">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>CHAPTER 08 • DIGITAL PRODUCTS & PLATFORMS</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Built to Work <br />
              <span className="text-gradient-blue">As One.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We design and build client portals, customer marketplaces, interactive analytics suites, and multi-device digital products that operate seamlessly across desktop and mobile.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#0052FF]/10 text-[#0052FF]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-display">Mobile & Web Client Portals</h4>
                  <p className="text-[11px] text-slate-500">Self-service client onboarding & transparent reporting.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#0052FF]/10 text-[#0052FF]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-display">Interactive Analytics Dashboards</h4>
                  <p className="text-[11px] text-slate-500">Real-time telemetry and revenue pipeline tracking.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
