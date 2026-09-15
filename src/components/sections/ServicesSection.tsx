"use client";

import React, { useState } from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { Bot, Code2, LayoutDashboard, TrendingUp, RefreshCw, ChevronDown, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  onOpenContactModal?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      id: "custom-software",
      title: "01 • Custom Software Engineering",
      icon: Code2,
      summary: "Full-stack web applications, internal enterprise tools, microservices, and SaaS platforms.",
      problem: "Off-the-shelf software doesn't fit unique business models, leading to expensive workarounds.",
      whatWeBuild: [
        "High-performance Next.js / TypeScript enterprise applications",
        "Scalable cloud architecture (GCP, AWS) & microservices",
        "Internal operational dashboards & workflow tools",
        "Custom APIs & third-party integration layers",
      ],
      impact: "Purpose-built technology matching 100% of operational workflows.",
    },
    {
      id: "ai-automation",
      title: "02 • AI & Automation Systems",
      icon: Bot,
      summary: "Intelligent workflows, custom AI assistants, automated data extraction, and process routing.",
      problem: "Repetitive manual tasks, slow customer response times, and employee bandwidth spent on routine data entry.",
      whatWeBuild: [
        "Autonomous AI agents for client qualification & triage",
        "Document & invoice intelligence processing pipelines",
        "CRM & ERP automated workflow synchronization",
        "Custom LLM fine-tuning & enterprise knowledge retrieval",
      ],
      impact: "70%+ reduction in processing turnaround time and zero manual data errors.",
    },
    {
      id: "digital-products",
      title: "03 • Web & Digital Products",
      icon: LayoutDashboard,
      summary: "Secure client portals, customer marketplaces, interactive analytics, and multi-tenant systems.",
      problem: "Clients asking for status updates via email; lack of transparent, real-time client interaction portals.",
      whatWeBuild: [
        "Self-service enterprise client portals & onboarding hubs",
        "Real-time analytics dashboards & reporting suites",
        "Role-based access control (RBAC) & permissioned data sharing",
        "Secure payment, invoicing, and subscription platforms",
      ],
      impact: "Higher customer retention, reduced support overhead, and premium client experience.",
    },
    {
      id: "business-systems",
      title: "04 • Business Systems & CRM",
      icon: TrendingUp,
      summary: "High-conversion digital infrastructure, lead generation automation, CRM logic, and conversion tracking.",
      problem: "Marketing dollars wasted due to slow lead follow-up, leaky sales funnels, and un-tracked attribution.",
      whatWeBuild: [
        "High-ticket conversion websites & funnel architecture",
        "Instant lead enrichment & automated sales routing",
        "CRM pipeline setup & automated nurture sequences",
        "Analytics infrastructure & real-time revenue dashboards",
      ],
      impact: "Higher conversion rate on traffic and automated 60-second response to incoming leads.",
    },
    {
      id: "data-infrastructure",
      title: "05 • Data & Infrastructure",
      icon: RefreshCw,
      summary: "Refactoring legacy software, cloud migrations, database optimization, and system integration.",
      problem: "Legacy systems slowing down operations, risking security vulnerabilities, and unable to integrate modern AI tools.",
      whatWeBuild: [
        "Monolith-to-cloud microservices refactoring",
        "Database optimization & API bridge development",
        "Legacy system data migration with zero downtime",
        "Enterprise security audit & infrastructure hardening",
      ],
      impact: "Modernized stack ready for AI automation without disrupting active business operations.",
    },
  ];

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header with Video 4 Background Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-wider text-[#0052FF] uppercase">
              <span>CHAPTER 05 • MAIN CAPABILITIES</span>
            </div>

            <h2 className="font-display font-bold text-section-title text-slate-900 leading-tight">
              What We Build: <br />
              <span className="text-gradient-blue">Enterprise Systems & Capabilities.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              We engineer custom software, AI automation pipelines, digital products, business systems, and cloud infrastructure tailored around your business logic.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 aspect-video lg:aspect-[4/3]">
              <LazyVideo
                src="/videos/4.mp4"
                aspectRatio="aspect-video"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Expandable Service Architecture */}
        <div className="space-y-4">
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={cn(
                  "rounded-3xl border transition-all duration-300 overflow-hidden",
                  isExpanded
                    ? "bg-white border-[#0052FF] shadow-pb-card ring-1 ring-[#0052FF]/20"
                    : "bg-white hover:bg-slate-50 border-slate-200"
                )}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div
                      className={cn(
                        "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
                        isExpanded ? "bg-[#0052FF] text-white" : "bg-slate-100 text-slate-700"
                      )}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold font-display text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 hidden sm:block">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300",
                      isExpanded ? "bg-slate-900 text-white rotate-180 border-slate-900" : "bg-slate-50 text-slate-600 border-slate-200"
                    )}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {/* Expanded Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Left: Problem & Impact */}
                      <div className="lg:col-span-5 space-y-6">
                        <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 block mb-1">
                            Operational Problem Solved
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                            {service.problem}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#0052FF]/5 border border-[#0052FF]/20">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0052FF] block mb-1">
                            Expected Business Impact
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                            {service.impact}
                          </p>
                        </div>
                      </div>

                      {/* Right: What We Build */}
                      <div className="lg:col-span-7 space-y-4">
                        <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block tracking-widest">
                          What We Design & Engineer
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.whatWeBuild.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5"
                            >
                              <div className="p-1 rounded-md bg-[#0052FF] text-white shrink-0 mt-0.5">
                                <Check className="w-3 h-3" />
                              </div>
                              <span className="text-xs text-slate-800 font-medium leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-500">
                            Custom Solution Specs Ready
                          </span>
                          <button
                            onClick={onOpenContactModal}
                            className="inline-flex items-center gap-2 text-xs font-bold text-[#0052FF] hover:text-[#0043D6] tracking-tight"
                          >
                            <span>Discuss {service.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
