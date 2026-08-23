"use client";

import React from "react";
import { Container } from "../ui/Container";
import { LazyVideo } from "../ui/LazyVideo";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const CustomSoftwareSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFAFC] border-b border-slate-200 relative overflow-hidden">
      <Container>
        {/* Stage 1: Clean Editorial Introduction — ALL TEXT OUTSIDE THE VIDEO */}
        <div className="max-w-3xl space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-[#0052FF] uppercase"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>CHAPTER 06 • CUSTOM SOFTWARE DEVELOPMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]"
          >
            Engineered Around <br />
            <span className="text-[#0052FF]">Your Business.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl font-sans"
          >
            Off-the-shelf software forces your business to change its processes to fit rigid SaaS paradigms. We build bespoke software systems engineered specifically around your established operational reality.
          </motion.p>
        </div>

        {/* Stage 2: Pure Cinematic Video Frame (8.mp4) — ZERO TEXT OR OVERLAYS INSIDE FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 w-full mb-16"
        >
          <LazyVideo
            src="/videos/8.mp4"
            priority="near"
            aspectRatio="aspect-[16/9]"
            objectFit="cover"
            className="w-full h-full max-h-[560px]"
          />
        </motion.div>

        {/* Stage 3: Connected Architecture System Line — OUTSIDE THE VIDEO FRAME */}
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
