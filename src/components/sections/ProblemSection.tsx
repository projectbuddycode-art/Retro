"use client";

import React, { useState } from "react";
import { AlertCircle, ZapOff, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ProblemSection: React.FC = () => {
  const [activeFrictionPoint, setActiveFrictionPoint] = useState(0);

  const frictionPoints = [
    {
      id: "disconnected",
      title: "Disconnected Systems & Data Silos",
      summary: "Different departments using separate tools that don't talk to each other.",
      detail: "When customer records, financial data, and project updates live in separate software, team members spend hours manually copying information across spreadsheets instead of serving clients.",
      impact: "30%+ wasted team hours in manual re-keying",
    },
    {
      id: "manual",
      title: "Manual Operational Bottlenecks",
      summary: "Critical workflows dependent on manual email threads and human memory.",
      detail: "Without automated routing and smart validation, routine approvals, client onboarding, and task handoffs stall waiting for team action.",
      impact: "Slow execution and high error rates",
    },
    {
      id: "visibility",
      title: "Poor Operational Visibility",
      summary: "Leadership lacks real-time insight into performance and pipeline health.",
      detail: "Decisions are made on stale data gathered at the end of the month, making it impossible to catch operational issues or revenue leaks as they happen.",
      impact: "Delayed strategic decision making",
    },
    {
      id: "scaling",
      title: "Fragile Architecture That Cannot Scale",
      summary: "Outdated software breaking as lead volumes and user load increase.",
      detail: "Legacy software or basic web builds fail under load, leading to slow page speeds, server downtime, and security vulnerabilities.",
      impact: "Lost deals & enterprise credibility risks",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-slate-700 uppercase">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>CHAPTER 03 • OPERATIONAL BOTTLENECKS</span>
          </div>

          <h2 className="font-display font-bold text-section-title text-slate-900 max-w-2xl">
            Technology Should Move <br className="hidden sm:inline" />
            Your Business Forward. <span className="text-slate-400 font-normal">Not Create More Work.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
            Most companies don't suffer from a lack of software. They suffer from fragmented tools, manual workarounds, and systems that fail to scale with growth.
          </p>
        </motion.div>

        {/* Editorial Layout: Left Navigation / Right Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive List of Friction Points */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 font-semibold block mb-2">
              Common Operational Bottlenecks
            </span>
            {frictionPoints.map((item, idx) => {
              const isActive = activeFrictionPoint === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFrictionPoint(idx)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col space-y-2 group",
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-pb-card"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn("text-xs font-mono font-semibold", isActive ? "text-[#38BDF8]" : "text-slate-400")}>
                      0{idx + 1}
                    </span>
                    <span className={cn("text-[11px] font-medium px-2.5 py-0.5 rounded-full", isActive ? "bg-slate-800 text-slate-300" : "bg-white text-slate-500 border border-slate-200")}>
                      Operational Friction
                    </span>
                  </div>
                  <h3 className={cn("text-base font-bold font-display tracking-tight", isActive ? "text-white" : "text-slate-900 group-hover:text-[#0052FF]")}>
                    {item.title}
                  </h3>
                  <p className={cn("text-xs leading-relaxed font-sans", isActive ? "text-slate-300" : "text-slate-500")}>
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Architectural View */}
          <div className="lg:col-span-7 bg-[#0A1128] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            {/* Background Data Line Visual */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0052FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-[11px] font-mono text-[#38BDF8] tracking-widest uppercase font-semibold">
                  System Audit • {frictionPoints[activeFrictionPoint].title}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">STATUS: UNOPTIMIZED</span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {frictionPoints[activeFrictionPoint].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                  {frictionPoints[activeFrictionPoint].detail}
                </p>
              </div>

              {/* Impact Metric Box */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <ZapOff className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-semibold block">Business Impact</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-sans">
                    {frictionPoints[activeFrictionPoint].impact}
                  </span>
                </div>
              </div>
            </div>

            {/* Solution Hint */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Project Buddy engineers unified custom software & automation pipelines to eliminate this bottleneck.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
