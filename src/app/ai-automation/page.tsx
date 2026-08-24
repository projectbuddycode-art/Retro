"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import Link from "next/link";
import { ArrowRight, ChevronRight, Bot, Check } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  { title: "Custom LLM Integration", desc: "Connect large language models into your business workflows with deterministic, fallback-protected pipelines." },
  { title: "Intelligent Document Processing", desc: "Automated extraction and classification from invoices, contracts, reports and business documents." },
  { title: "Workflow Automation", desc: "Identify repetitive processes and build automation that eliminates manual steps and reduces error rates." },
  { title: "AI-Powered Business Intelligence", desc: "Surface patterns, trends and operational insights from your existing data." },
  { title: "Automated Lead & Task Routing", desc: "Intelligent classification and routing of incoming work items, leads and support requests." },
  { title: "Voice & Conversational AI", desc: "Natural language interfaces for customer service, internal tools and operational workflows." },
];

const outcomes = [
  "Automation designed around practical business operations — not generic demos",
  "Measurable reduction in repetitive manual work",
  "Secure, privacy-conscious AI integration",
  "Ongoing monitoring and improvement of automated workflows",
];

export default function AIAutomationPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0052FF]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-12" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-slate-700 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#0052FF]">AI & Automation</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/20 text-[11px] font-mono font-bold text-[#0052FF] tracking-widest uppercase">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI & Automation</span>
                </div>
                <h1 className="font-display font-bold text-hero-title text-slate-900 tracking-tight leading-tight">
                  Practical AI.{" "}<span className="text-gradient-blue">Real Operational Value.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  We design and build AI automation systems around how your business actually works — not generic AI demonstrations. Intelligent automation that creates measurable operational improvement.
                </p>
                <div className="space-y-3">
                  {outcomes.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="p-1 rounded-md bg-[#0052FF] text-white shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button onClick={() => setContactModalOpen(true)} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold shadow-pb-glow transition-all active:scale-95">
                    <span>Start a Project</span><ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/business-system-integration" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] text-sm font-medium transition-all">
                    <span>System Integration</span><ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-2xl aspect-[4/3]">
                  <LazyVideo src="/videos/ai-automation.mp4" aspectRatio="aspect-[4/3]" objectFit="cover" className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-3">WHAT WE BUILD</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">AI & Automation Capabilities.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((cap, idx) => (
                <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.07 }} className="p-7 rounded-3xl bg-[#FAFAFC] border border-slate-200 hover:border-[#0052FF]/30 hover:shadow-pb-card transition-all space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center"><Bot className="w-4 h-4" /></div>
                  <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">Build Intelligent Workflows.</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Discuss your automation goals with our team.</p>
            <button onClick={() => setContactModalOpen(true)} className="px-9 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold inline-flex items-center gap-2 shadow-pb-glow transition-all">
              <span>Start a Project</span><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-5">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Custom Software Development", href: "/custom-software-development" },
                { label: "Business System Integration", href: "/business-system-integration" },
                { label: "Implementation", href: "/implementation" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] transition-all">
                  {label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
