"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ImplementationModal } from "@/components/ui/ImplementationModal";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Search,
  Map,
  Code2,
  Rocket,
  TrendingUp,
  Settings2,
  Bot,
  Layers,
  RefreshCw,
  Link2,
  Users,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "Understand",
    description:
      "Study the business, workflows, systems and operational bottlenecks. We don't prescribe a solution before understanding the problem.",
    icon: Search,
  },
  {
    num: "02",
    title: "Architect",
    description:
      "Define how technology, automation, data and workflows should connect. Every element is mapped before a line of code is written.",
    icon: Map,
  },
  {
    num: "03",
    title: "Build or Integrate",
    description:
      "Develop new systems or integrate with existing infrastructure. We work around your business — not the other way around.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Deploy",
    description:
      "Implement carefully into real business operations. Phased rollouts, training and transition support as required.",
    icon: Rocket,
  },
  {
    num: "05",
    title: "Improve",
    description:
      "Monitor, refine and continue improving the system. Technology implementation is a process, not a single event.",
    icon: TrendingUp,
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Implementation",
    description: "Deploy systems designed around your workflows.",
  },
  {
    icon: Link2,
    title: "Business System Integration",
    description: "Connect software, databases, APIs and operational tools.",
  },
  {
    icon: Bot,
    title: "AI & Automation Integration",
    description:
      "Introduce intelligent automation where it creates measurable operational value.",
  },
  {
    icon: Layers,
    title: "Workflow Engineering",
    description:
      "Analyze existing processes and redesign inefficient operational flows.",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    description:
      "Improve or replace outdated systems without disrupting business operations unnecessarily.",
  },
  {
    icon: Users,
    title: "Ongoing Technical Partnership",
    description:
      "Continue refining, improving and expanding systems after launch.",
  },
];

const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function ImplementationPage() {
  const [implModalOpen, setImplModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technology Implementation & Integration",
    provider: {
      "@type": "Organization",
      name: "Project Buddy",
      url: "https://projectbuddy.co.in",
    },
    description:
      "Project Buddy helps businesses implement and integrate technology into their actual operations — designing, implementing and integrating systems around the way their teams actually operate.",
    serviceType: [
      "Software Implementation",
      "Business System Integration",
      "AI Automation Integration",
      "Workflow Engineering",
      "Legacy System Modernization",
    ],
    areaServed: "Worldwide",
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://projectbuddy.co.in" },
      { "@type": "ListItem", position: 2, name: "Implementation", item: "https://projectbuddy.co.in/implementation" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section className="pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0052FF]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-12" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#0052FF]">Implementation</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl space-y-6"
            >
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block">
                IMPLEMENTATION
              </span>

              <h1 className="font-display font-bold text-hero-title text-slate-900 tracking-tight leading-tight">
                From Software to{" "}
                <span className="text-gradient-blue">Real Business Impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Technology only creates value when it works inside your business. We help businesses move beyond isolated software tools by designing, implementing and integrating systems around the way their teams actually operate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setImplModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95 group"
                >
                  <span>Discuss Your Business Systems</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/custom-software-development"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] text-sm font-medium transition-all"
                >
                  <span>Custom Software Development</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CAPABILITIES ─── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUpInView} className="mb-14">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-4">
                CAPABILITIES
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                What We Do.
              </h2>
              <p className="mt-3 text-slate-500 text-base max-w-xl leading-relaxed">
                A focused set of implementation and integration disciplines designed for businesses that need technology to actually work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="p-7 rounded-3xl bg-[#FAFAFC] border border-slate-200 hover:border-[#0052FF]/30 hover:shadow-pb-card transition-all group space-y-4"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight mb-2">{cap.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUpInView} className="mb-16 max-w-2xl">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-4">
                OUR APPROACH
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                How We Implement.
              </h2>
              <p className="mt-3 text-slate-500 text-base leading-relaxed">
                A disciplined, systematic approach to technology implementation that respects the complexity of real business operations.
              </p>
            </motion.div>

            <div className="space-y-5">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-6 p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#0052FF]/20 hover:shadow-pb-card transition-all group"
                  >
                    {/* Number + Icon */}
                    <div className="shrink-0 text-center">
                      <div className="text-[10px] font-mono font-bold text-[#0052FF] tracking-widest mb-2">{step.num}</div>
                      <div className="w-12 h-12 rounded-2xl bg-[#0052FF]/8 text-[#0052FF] flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1.5">
                      <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ALREADY HAVE SOFTWARE? ─── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1128] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/15 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            {...fadeUpInView}
            className="max-w-5xl mx-auto relative z-10"
          >
            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 sm:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block">
                    ENTERPRISE INTEGRATION
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    Already Have Software?{" "}
                    <span className="text-[#38BDF8]">Let's Make It Work Better.</span>
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed">
                    If your business already uses multiple platforms, spreadsheets, manual processes or disconnected systems, Project Buddy can help evaluate where technology can be consolidated, integrated or improved.
                  </p>

                  <div className="space-y-2.5">
                    {[
                      "Disconnected platforms and data silos",
                      "Manual processes that should be automated",
                      "Software that doesn't match how your team works",
                      "Outdated systems due for modernization",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  <button
                    onClick={() => setImplModalOpen(true)}
                    className="w-full px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-pb-glow transition-all active:scale-95"
                  >
                    <span>Discuss Your Business Systems →</span>
                  </button>
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="w-full px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 inline-flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-slate-600 text-center font-mono">
                    International enquiries welcome
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── INTERNAL LINKS ─── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Custom Software Development", href: "/custom-software-development" },
                { label: "AI & Automation", href: "/ai-automation" },
                { label: "Business System Integration", href: "/business-system-integration" },
                { label: "Web Development", href: "/web-development" },
                { label: "App Development", href: "/app-development" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] transition-all"
                >
                  {label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ImplementationModal isOpen={implModalOpen} onClose={() => setImplModalOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
