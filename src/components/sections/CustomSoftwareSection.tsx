"use client";

import React from "react";
import { Container } from "../ui/Container";
import { LazyVideo } from "../ui/LazyVideo";
import { Code2, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CustomSoftwareSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-200 relative overflow-hidden">
      <Container>
        <div className="max-w-3xl space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-wider text-[#0052FF] uppercase"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>CHAPTER 06 • CUSTOM SOFTWARE DEVELOPMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            Engineered Around <br />
            <span className="text-gradient-blue">Your Business.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl"
          >
            We build custom full-stack web platforms, internal microservices, and enterprise applications designed specifically to match 100% of your operational requirements.
          </motion.p>
        </div>

        {/* Video 8.mp4 Integration: Primary Visual for Chapter 06 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 w-full mb-12"
        >
          <LazyVideo
            src="/videos/8.mp4"
            overlayGradient={true}
            aspectRatio="aspect-[16/9]"
            className="object-cover opacity-90 max-h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-800 shadow-pb-card flex items-center justify-between">
            <span className="font-bold text-[#0052FF] uppercase tracking-wider text-[11px]">CUSTOM SOFTWARE ARCHITECTURE</span>
            <span className="text-slate-500 text-[11px]">NEXT.JS • TYPESCRIPT • GCP / AWS</span>
          </div>
        </motion.div>

        {/* Engineering Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#0052FF]">01. FULL-STACK WEB APPS</span>
            <h4 className="text-base font-bold font-display text-slate-900">High-Performance Platforms</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">Built with Next.js 14 App Router, Server Components, and zero Cumulative Layout Shift.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#0052FF]">02. SCALABLE MICROSERVICES</span>
            <h4 className="text-base font-bold font-display text-slate-900">Decoupled Architecture</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">Containerized Node.js & Python backend services built for auto-scaling and resilience.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#0052FF]">03. INTERNAL ENTERPRISE TOOLS</span>
            <h4 className="text-base font-bold font-display text-slate-900">Operational Dashboards</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">Role-based access control (RBAC), permissioned data sharing, and custom workflow tooling.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
