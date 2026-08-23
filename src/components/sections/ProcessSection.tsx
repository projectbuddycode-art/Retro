"use client";

import React from "react";
import { Compass, Cpu, Code2, Network, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      name: "Discover & Audit",
      icon: Compass,
      desc: "Deep audit of business model, manual workflows, operational bottlenecks, and growth objectives.",
    },
    {
      num: "02",
      name: "Strategize & Architect",
      icon: Cpu,
      desc: "Defining precise technology stack, database schemas, security rules, and implementation blueprint.",
    },
    {
      num: "03",
      name: "Design & Build",
      icon: Code2,
      desc: "Full-stack software engineering and AI pipeline development built to enterprise standards.",
    },
    {
      num: "04",
      name: "Integrate",
      icon: Network,
      desc: "Connecting APIs, CRM platforms, legacy databases, and automated notification webhooks.",
    },
    {
      num: "05",
      name: "Improve & Scale",
      icon: TrendingUp,
      desc: "Continuous APM telemetry monitoring, performance tuning, and scaling feature releases.",
    },
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-wider text-slate-700 uppercase">
            <span>CHAPTER 09 • ENGINEERING METHODOLOGY</span>
          </div>

          <h2 className="font-display font-bold text-section-title text-slate-900 tracking-tight leading-tight">
            We Don't Start With Technology. <br />
            <span className="text-gradient-blue">We Start With the Problem.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Our 5-stage engineering methodology ensures every line of code built serves a clear operational or revenue objective.
          </p>
        </motion.div>

        {/* Sequential 5-Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative z-10 bg-white p-6 rounded-3xl border border-slate-200 shadow-pb-sm flex flex-col justify-between h-full space-y-4 group hover:border-[#0052FF] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0052FF] bg-[#0052FF]/10 px-2.5 py-1 rounded-full">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-slate-900 tracking-tight">{step.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
