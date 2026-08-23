"use client";

import React from "react";
import { Container } from "../ui/Container";
import { LazyVideo } from "../ui/LazyVideo";
import { Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CustomSoftwareSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFC] border-b border-slate-200 relative overflow-hidden">
      <Container>
        {/* Stage 1: Editorial Introduction */}
        <div className="max-w-3xl space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-[#0052FF] uppercase"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>CHAPTER 06 • CUSTOM SOFTWARE DEVELOPMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]"
          >
            Engineered Around <br />
            <span className="text-[#0052FF]">Your Business.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl font-sans"
          >
            Off-the-shelf software forces your business to change its processes to fit rigid SaaS paradigms. We build bespoke software systems engineered specifically around your established operational reality.
          </motion.p>
        </div>

        {/* Stage 2 & Stage 3: Cinematic Video Reveal 8.mp4 with Technical Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 w-full mb-16"
        >
          <LazyVideo
            src="/videos/8.mp4"
            overlayGradient={true}
            aspectRatio="aspect-[16/9]"
            className="object-cover opacity-90 max-h-[560px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Technical Telemetry Overlay */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800 text-xs font-mono text-slate-200 flex flex-wrap items-center justify-between gap-2 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="font-bold text-[#38BDF8] uppercase tracking-wider text-[11px]">
                SYSTEM ARCHITECTURE • CUSTOM SOFTWARE ENGINEERING
              </span>
            </div>
            <span className="text-slate-400 text-[10px] uppercase tracking-widest hidden sm:inline">
              SCALABLE DIGITAL INFRASTRUCTURE
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
            <span className="text-slate-400">STACK: NEXT.JS 14 • TYPESCRIPT • HIGH CONCURRENCY INGEST</span>
            <span className="text-[#38BDF8] font-bold">100% OWNERSHIP</span>
          </div>
        </motion.div>

        {/* Stage 4: Connected Architecture System Line (Not Generic Cards) */}
        <div className="relative pt-6 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-3 p-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0052FF]">01 —</span>
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">CUSTOM PLATFORMS</span>
              </div>
              <h4 className="text-lg font-bold font-display text-slate-900">Bespoke Enterprise Web Apps</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Full-stack web applications engineered for complex workflows, multi-role permissions, and real-time operations.
              </p>
            </div>

            <div className="space-y-3 p-2 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0052FF]">02 —</span>
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">SCALABLE SERVICES</span>
              </div>
              <h4 className="text-lg font-bold font-display text-slate-900">High-Concurrency Backends</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Decoupled API architectures, microservices, and database layers capable of handling enterprise data volumes.
              </p>
            </div>

            <div className="space-y-3 p-2 border-t md:border-t-0 md:border-l border-slate-200 md:pl-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0052FF]">03 —</span>
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">ENTERPRISE OPERATIONS</span>
              </div>
              <h4 className="text-lg font-bold font-display text-slate-900">System Modernization</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Refactoring legacy codebases into modern cloud infrastructure without operational downtime or data loss.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
