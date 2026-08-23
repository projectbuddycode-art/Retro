"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { Network, Database, Cpu, Bot, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const EcosystemSection: React.FC = () => {
  const ecosystemPillars = [
    { name: "Strategy & Architecture", desc: "Mapping core data flows, API contracts, and scalable cloud specs." },
    { name: "Custom Software", desc: "High-concurrency web applications, microservices, and internal portals." },
    { name: "AI & Autonomous Agents", desc: "LLM triage, document extraction, and autonomous background logic." },
    { name: "Data & CRM Infrastructure", desc: "ACID databases, vector search stores, and instant CRM synchronization." },
  ];

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Video 2 Integration: Software Ecosystem Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 aspect-video lg:aspect-[4/3]">
              <LazyVideo
                src="/videos/Enterprise_software_system_anima._202608030154.mp4"
                overlayGradient={true}
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] font-mono font-bold text-[#0052FF] uppercase tracking-wider">
                UNIFIED ECOSYSTEM RUNTIME
              </div>
            </div>
          </motion.div>

          {/* Right Column: Storytelling & Connected Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/20 text-[11px] font-mono font-semibold tracking-wider text-[#0052FF] uppercase">
              <Network className="w-3.5 h-3.5" />
              <span>CHAPTER 03 • CONNECTED ECOSYSTEM</span>
            </div>

            <h2 className="font-display font-bold text-section-title text-slate-900 leading-tight">
              One Unified System. <br />
              <span className="text-gradient-blue">Zero Operational Friction.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Instead of managing ten disconnected software vendors, Project Buddy connects your entire tech stack—software, AI automation, databases, and customer channels—into one cohesive, scalable ecosystem.
            </p>

            {/* Ecosystem Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ecosystemPillars.map((p, idx) => (
                <div key={p.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0052FF]">0{idx + 1}</span>
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-xs font-bold font-display text-slate-900">{p.name}</h4>
                  <p className="text-[11px] text-slate-500 font-normal leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
