"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Key, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

export const IdeaToSystemSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Core Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#0A1128] text-white border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />

          <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block">
            ENGINEERING PHILOSOPHY
          </span>

          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight">
            “Software should fit the operation. <br className="hidden sm:inline" />
            <span className="text-gradient-light">The operation shouldn't have to fit the software.”</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Off-the-shelf software forces businesses to change their processes to fit rigid SaaS paradigms. At Project Buddy, we flip this approach. We build software systems engineered specifically around your established business processes.
          </p>
        </motion.div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-pb-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
              <Settings2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">No Fake Workarounds</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We solve underlying operational root causes instead of applying superficial visual patches or fragile no-code workarounds.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-pb-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">Production Reliability</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Every system is tested against real-world scale, security edge cases, automated backups, and high-concurrency enterprise loads.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-pb-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-slate-900">Complete System Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              You own your custom software systems, codebase IP, database schemas, and data structures completely without vendor lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
