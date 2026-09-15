"use client";

import React, { useState } from "react";
import { Building2, Home, ShoppingBag, Hotel, Factory, Rocket, Stethoscope, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      name: "Professional Services",
      icon: Building2,
      challenge: "High billable hour waste on manual client onboarding, document collection, and status reporting.",
      opportunity: "Automated client portals and AI document extraction to speed up client intake by 80%.",
      solution: "Unified Client Portal with integrated e-signatures, document AI, and automated status notifications.",
    },
    {
      name: "Real Estate",
      icon: Home,
      challenge: "High lead drop-off due to slow follow-up and fragmented listing data across channels.",
      opportunity: "Instant AI lead qualification via WhatsApp/Web and automated CRM property matching.",
      solution: "Real Estate Lead Engine & Property CRM with automated WhatsApp bot qualification.",
    },
    {
      name: "Retail & D2C",
      icon: ShoppingBag,
      challenge: "Inventory stockouts, manual order processing, and low customer lifetime value (LTV).",
      opportunity: "Real-time inventory synchronization across storefronts and automated VIP customer retention flows.",
      solution: "Headless E-commerce Architecture & Automated ERP Inventory Sync.",
    },
    {
      name: "Hospitality",
      icon: Hotel,
      challenge: "High OTA commission dependence and manual reservation management across platforms.",
      opportunity: "Direct booking engine with automated guest concierge AI messaging.",
      solution: "Direct Booking Engine & Automated Guest Communication Hub.",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      challenge: "Paper-based inventory logs, unmonitored machine downtime, and fragmented vendor tracking.",
      opportunity: "Custom IoT telemetry dashboards and digital vendor management portals.",
      solution: "Digital Factory Operations Dashboard & Vendor Portal.",
    },
    {
      name: "Startups & SaaS",
      icon: Rocket,
      challenge: "Slow MVP engineering velocity, unscalable codebase, and high AWS/GCP infrastructure costs.",
      opportunity: "Production-ready Next.js / TypeScript microservice architecture built to scale to 1M users.",
      solution: "Scalable SaaS Platform Architecture & Production Microservices.",
    },
    {
      name: "Healthcare",
      icon: Stethoscope,
      challenge: "Patient appointment no-shows, manual intake forms, and disconnected medical record tools.",
      opportunity: "Automated appointment reminders via SMS/WhatsApp and secure digital intake forms.",
      solution: "Patient Intake Portal & Automated Appointment Retention Engine.",
    },
    {
      name: "Financial Services",
      icon: Landmark,
      challenge: "Slow loan/advisory intake processing and manual verification of financial statements.",
      opportunity: "AI statement parsing and secure permissioned client document vault.",
      solution: "Automated Intake Engine & Secure Financial Document Vault.",
    },
  ];

  return (
    <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
            <span>SECTOR-SPECIFIC ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built for Industry-Specific <span className="text-gradient-blue">Reality.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don't apply cookie-cutter solutions. We study the operational dynamics of your sector to build software and automation that fit like a glove.
          </p>
        </div>

        {/* Interactive Industry Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Industry Pills List */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2.5">
            {industries.map((ind, idx) => {
              const isActive = selectedIndustry === idx;
              const Icon = ind.icon;

              return (
                <button
                  key={ind.name}
                  onClick={() => setSelectedIndustry(idx)}
                  className={cn(
                    "p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3 group",
                    isActive
                      ? "bg-[#0052FF] text-white border-[#0052FF] shadow-pb-sm font-bold"
                      : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 font-medium"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs",
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm truncate">{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Industry Blueprint Display */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-pb-card space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#0052FF]/10 text-[#0052FF]">
                  {React.createElement(industries[selectedIndustry].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#0052FF] font-semibold block">SECTOR BLUEPRINT</span>
                  <h3 className="text-xl font-bold text-slate-900">{industries[selectedIndustry].name}</h3>
                </div>
              </div>
            </div>

            {/* Progression Flow: Challenge -> Opportunity -> Solution */}
            <div className="space-y-6">
              {/* Step 1: Challenge */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider block">
                  01. Operational Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {industries[selectedIndustry].challenge}
                </p>
              </div>

              {/* Step 2: Opportunity */}
              <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-1">
                <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wider block">
                  02. Technology Opportunity
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {industries[selectedIndustry].opportunity}
                </p>
              </div>

              {/* Step 3: Solution */}
              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                  03. Recommended Architecture Solution
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  {industries[selectedIndustry].solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
