"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import Link from "next/link";
import { ArrowRight, Code2, Bot, Globe, Smartphone, Settings2, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    num: "01",
    title: "Custom Software Development",
    description:
      "Full-stack applications, enterprise systems, internal dashboards and specialized business tools engineered from the ground up — designed around how your business actually operates.",
    href: "/custom-software-development",
    keywords: ["Enterprise Applications", "Web Apps", "Business Systems", "APIs"],
  },
  {
    icon: Bot,
    num: "02",
    title: "AI & Automation",
    description:
      "Custom AI integrations, automated workflows, document processing engines and intelligent business automation that eliminates repetitive work and surfaces better decisions.",
    href: "/ai-automation",
    keywords: ["LLM Integration", "Workflow Automation", "Document AI", "Process Automation"],
  },
  {
    icon: Layers,
    num: "03",
    title: "Business System Integration",
    description:
      "Connect disparate platforms, databases, APIs and operational tools into a unified system. Eliminate data silos and build a connected operational environment.",
    href: "/business-system-integration",
    keywords: ["API Integration", "Data Pipelines", "CRM Integration", "ERP Connectivity"],
  },
  {
    icon: Globe,
    num: "04",
    title: "Web Development",
    description:
      "High-quality business websites, digital platforms, e-commerce systems and content-driven web experiences built for performance, conversion and long-term reliability.",
    href: "/web-development",
    keywords: ["Business Websites", "Digital Platforms", "E-commerce", "Web Applications"],
  },
  {
    icon: Smartphone,
    num: "05",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications, enterprise mobile tools and client-facing apps built to production standards — not prototype quality.",
    href: "/app-development",
    keywords: ["iOS Apps", "Android Apps", "React Native", "Enterprise Mobile"],
  },
  {
    icon: Settings2,
    num: "06",
    title: "Implementation & Integration",
    description:
      "Technology only creates value when it works inside your business. We implement and integrate systems around the way your teams actually operate.",
    href: "/implementation",
    keywords: ["Software Implementation", "System Modernization", "Technical Partnership", "Deployment"],
  },
];

export default function ServicesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl space-y-5"
            >
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block">
                SERVICES
              </span>
              <h1 className="font-display font-bold text-hero-title text-slate-900 tracking-tight">
                What We{" "}
                <span className="text-gradient-blue">Build & Deliver.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Project Buddy is a software and technology company focused on custom software development, business systems, AI-enabled automation, application development, system integration and technology implementation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={service.href}
                      className="group p-8 rounded-3xl bg-[#FAFAFC] border border-slate-200 hover:border-[#0052FF]/40 hover:shadow-pb-card transition-all flex flex-col h-full space-y-5 block"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-300">{service.num}</span>
                      </div>

                      <div className="flex-1 space-y-2.5">
                        <h2 className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-[#0052FF] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {service.keywords.map((kw) => (
                          <span key={kw} className="text-[10px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                            {kw}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0052FF] group-hover:gap-2.5 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white border-t border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Not Sure Where to Start?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Talk to our team about what you're trying to achieve. We'll help identify the right approach.
            </p>
            <button
              onClick={() => setContactModalOpen(true)}
              className="px-9 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold inline-flex items-center gap-2 shadow-pb-glow transition-all active:scale-95"
            >
              <span>Start a Project</span>
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
