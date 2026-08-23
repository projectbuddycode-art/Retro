"use client";

import React from "react";
import { ArrowUpRight, Cpu, Layers, Database, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface WorkSectionProps {
  onOpenContactModal?: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenContactModal }) => {
  const caseStudies = [
    {
      id: "diamond-capture",
      category: "Industrial Hardware & Cloud Rendering",
      title: "Diamond Capture System",
      client: "Gemstone Inspection Enterprise",
      desc: "Engineered for high-value gemstone inspection, the Diamond Capture System integrates micro-motor device controls, multi-angle camera arrays, and real-time cloud rendering for ultra-precise automated scanning.",
      deliverables: [
        "Sync high-res industrial camera capture triggers",
        "Process raw image streams & 3D mesh rendering",
        "Spectrum-calibrated LED illumination sequences",
      ],
      tag: "HARDWARE + CLOUD",
    },
    {
      id: "institute-os",
      category: "Educational Operations Platform",
      title: "InstituteOS",
      client: "Multi-Campus Educational System",
      desc: "InstituteOS serves as the single source of truth for educational institutions, harmonizing complex academic workflows, fee structures, and regulatory compliance into one intuitive interface.",
      deliverables: [
        "Automated student onboarding & fee collection",
        "Curriculum scheduling, grading & attendance telemetry",
        "Real-time ledger, payroll & tuition reconciliation",
        "Faculty allocation & resource utilization engine",
      ],
      tag: "ENTERPRISE ERP",
    },
    {
      id: "atlas-fintech",
      category: "FinTech Infrastructure",
      title: "ATLAS — Financial Operations Engine",
      client: "Scaling Financial Services Firm",
      desc: "ATLAS automates complex financial operations for scaling businesses, removing manual ledger entry while providing executive leadership with instant clarity on cash-flow dynamics.",
      deliverables: [
        "Real-time multi-bank transaction stream ingest",
        "Automated recurring invoice generation & reminders",
        "AI ledger matching for expenses & receipts",
        "Predictive cash-flow forecasting & tax reporting",
      ],
      tag: "FINANCIAL AUTOMATION",
    },
    {
      id: "autonomous-voice-ai",
      category: "AI & Telephony Automation",
      title: "Autonomous Voice & AI Pipeline",
      client: "Customer Operations Center",
      desc: "Real-time bi-directional audio websocket pipeline providing autonomous customer triage, instant calendar scheduling, and intelligent human agent hand-off with context.",
      deliverables: [
        "Real-time bi-directional audio websocket pipeline",
        "Instant calendar booking & customer record updates",
        "Intelligent human agent hand-off with context",
      ],
      tag: "REAL-TIME AI",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-[#0052FF] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHAPTER 09 • FEATURED SYSTEMS ARCHITECTURE</span>
          </div>

          <h2 className="font-display font-bold text-section-title text-slate-900 tracking-tight leading-tight">
            Selected Systems <br />
            <span className="text-gradient-blue">Engineered for Real Operations.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            We build digital infrastructure designed around the specific operational reality of scaling companies. Here are representative custom systems we've architected.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0052FF] transition-all flex flex-col justify-between space-y-6 group shadow-pb-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0052FF] bg-[#0052FF]/10 px-2.5 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{cs.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 group-hover:text-[#0052FF] transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  {cs.desc}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                  Key System Deliverables:
                </span>
                <ul className="space-y-2">
                  {cs.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 font-medium">STATUS: DEPLOYED</span>
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052FF] hover:underline"
                >
                  <span>Discuss Similar System</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
