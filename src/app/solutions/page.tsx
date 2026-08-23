"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { Code2, Bot, LayoutDashboard, RefreshCw, Layers, Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      num: "01",
      id: "custom-software",
      title: "Custom Software Engineering",
      tagline: "Systems built around how your business actually operates.",
      desc: "Full-stack web applications, internal enterprise control dashboards, microservices, and specialized business tools engineered from the ground up without rigid SaaS constraints.",
      icon: Code2,
      video: "/videos/Enterprise_software_motion_graphic_202608030216.mp4",
      outcomes: [
        "Purpose-built software matching 100% of operational workflows",
        "High-concurrency cloud microservices (GCP, AWS)",
        "Zero vendor lock-in with 100% client IP ownership",
      ],
      deliverables: [
        "Internal Control Dashboards",
        "Customer Self-Service Portals",
        "Workflow Automation Apps",
        "Custom REST & gRPC APIs",
      ],
    },
    {
      num: "02",
      id: "ai-automation",
      title: "AI & Autonomous Workflows",
      tagline: "Remove repetitive work and build intelligent business operations.",
      desc: "Custom LLM integrations, document extraction engines, automated lead triage, and autonomous voice/chat pipelines that eliminate grunt work and accelerate response times.",
      icon: Bot,
      video: "/videos/System_automating_business_data_._202608232317.mp4",
      outcomes: [
        "70%+ reduction in manual processing turnaround time",
        "Automated CRM & ERP data synchronization",
        "Zero-error intelligent document parsing",
      ],
      deliverables: [
        "Autonomous Voice & Chat AI",
        "Document Extraction Engines",
        "Predictive Task Routing",
        "LLM Knowledge Retrieval",
      ],
    },
    {
      num: "03",
      id: "digital-products",
      title: "Digital Products & Portals",
      tagline: "From product strategy to working enterprise applications.",
      desc: "Secure client portals, customer marketplaces, interactive analytics suites, and multi-device digital products that deliver a seamless experience across desktop and mobile.",
      icon: LayoutDashboard,
      video: "/videos/7.mp4",
      outcomes: [
        "Higher customer retention & self-service capability",
        "Reduced support overhead with transparent reporting",
        "Multi-tenant security & role-based access control (RBAC)",
      ],
      deliverables: [
        "Self-service Enterprise Client Portals",
        "Real-time Analytics Dashboards",
        "RBAC & Permissioned Data Sharing",
        "Secure Payment & Subscription Hubs",
      ],
    },
    {
      num: "04",
      id: "data-infrastructure",
      title: "Data Engineering & Infrastructure",
      tagline: "Unify fragmented data sources into real-time operational intelligence.",
      desc: "Real-time ETL data pipelines, high-frequency analytical databases, cloud infrastructure setup, and legacy monolith-to-cloud refactoring.",
      icon: RefreshCw,
      video: "/videos/Blue_line_forms_digital_infrastr._202608232314.mp4",
      outcomes: [
        "Single source of truth for enterprise decision making",
        "99.99% uptime cloud architecture",
        "Zero-downtime database & stack migration",
      ],
      deliverables: [
        "Real-time Data Pipelines",
        "Executive Analytics Suites",
        "PostgreSQL & Vector Stores",
        "AWS / GCP Cloud Provisioning",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Header Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-[#0052FF] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAPABILITIES & ARCHITECTURE</span>
            </div>

            <h1 className="font-display font-bold text-hero-title text-slate-900">
              Enterprise Systems & <br />
              <span className="text-gradient-blue">Capabilities.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              We design and build custom software, AI automation pipelines, digital products, and resilient cloud infrastructure tailored around your operating model.
            </p>
          </motion.div>
        </section>

        {/* Editorial Capabilities Storytelling Tabs */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Capability Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 font-semibold block mb-2">
                Select Capability Module
              </span>
              {capabilities.map((cap, idx) => {
                const isActive = activeTab === idx;
                const Icon = cap.icon;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col space-y-3 ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900 shadow-2xl ring-1 ring-[#0052FF]"
                        : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-pb-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold ${
                          isActive ? "bg-[#0052FF] text-white" : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-mono font-bold ${isActive ? "text-[#38BDF8]" : "text-slate-400"}`}>
                        {cap.num}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-lg font-bold font-display tracking-tight ${isActive ? "text-white" : "text-slate-900"}`}>
                        {cap.title}
                      </h3>
                      <p className={`text-xs mt-1 leading-relaxed ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                        {cap.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep Dive Capability Viewer */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-wider">
                    MODULE {capabilities[activeTab].num} • {capabilities[activeTab].title}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">SPECIFICATION DEPLOYED</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
                  {capabilities[activeTab].tagline}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {capabilities[activeTab].desc}
                </p>
              </div>

              {/* Video Asset Representation */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 aspect-video w-full">
                <LazyVideo
                  src={capabilities[activeTab].video}
                  overlayGradient={true}
                  className="object-cover opacity-90"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-800 flex items-center justify-between">
                  <span className="font-bold text-[#0052FF] uppercase tracking-wider text-[10px]">REAL-TIME RUNTIME VISUAL</span>
                  <span className="text-slate-500 text-[10px]">ENTERPRISE ARCHITECTURE</span>
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">
                  Expected Business Outcomes
                </span>
                <div className="space-y-2">
                  {capabilities[activeTab].outcomes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-1 rounded-md bg-[#0052FF] text-white shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Custom Implementation Brief Available</span>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs font-semibold tracking-tight shadow-pb-sm hover:shadow-pb-glow transition-all"
                >
                  <span>Discuss {capabilities[activeTab].title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white border-t border-slate-800 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Ready to Build Your System?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Schedule a 30-minute technical discovery discussion directly with our senior software lead.
            </p>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight inline-flex items-center gap-2 shadow-pb-glow"
            >
              <span>Schedule Discovery Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
