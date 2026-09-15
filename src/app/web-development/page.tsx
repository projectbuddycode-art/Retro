"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import Link from "next/link";
import { ArrowRight, ChevronRight, Globe, Check } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  { title: "Business Websites", desc: "Professional, high-performance websites that accurately represent your business and convert visitors." },
  { title: "Digital Platforms", desc: "Complex web platforms with user accounts, content management, and business logic built in." },
  { title: "E-commerce Systems", desc: "Full-featured online stores with inventory, payments, fulfilment and customer management." },
  { title: "Landing Pages & Campaigns", desc: "Conversion-optimized pages for marketing, product launches and lead generation." },
  { title: "Content-Driven Experiences", desc: "SEO-optimized websites with structured content architecture for long-term organic growth." },
  { title: "Web Application Development", desc: "Browser-based tools and applications for customers, partners or internal teams." },
];

export default function WebDevelopmentPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />
      <main className="flex-grow">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-12" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link><ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-slate-700 transition-colors">Services</Link><ChevronRight className="w-3 h-3" />
              <span className="text-[#0052FF]">Web Development</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/20 text-[11px] font-mono font-bold text-[#0052FF] tracking-widest uppercase">
                <Globe className="w-3.5 h-3.5" /><span>Web Development</span>
              </div>
              <h1 className="font-display font-bold text-hero-title text-slate-900 tracking-tight leading-tight">
                Web Presence That{" "}<span className="text-gradient-blue">Works for Your Business.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                From high-quality business websites to complex digital platforms and e-commerce systems — built for performance, reliability and long-term value.
              </p>
              <div className="space-y-3">
                {["Performance-optimized for search engines and real users", "Clean, semantic architecture for long-term maintainability", "Mobile-first, fully responsive across all devices", "Built to convert visitors into customers or enquiries"].map((item) => (
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
                <Link href="/app-development" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] text-sm font-medium transition-all">
                  <span>App Development</span><ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-3">WHAT WE BUILD</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">Web Development Services.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((cap, idx) => (
                <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-15px" }} transition={{ duration: 0.6, delay: idx * 0.07 }} className="p-7 rounded-3xl bg-[#FAFAFC] border border-slate-200 hover:border-[#0052FF]/30 hover:shadow-pb-card hover:shadow-[#0052FF]/5 hover:-translate-y-1 transition-all duration-300 ease-out space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center"><Globe className="w-4 h-4" /></div>
                  <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">Build a Premium Web Presence.</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">Tell us about your website or platform requirements.</p>
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
                { label: "App Development", href: "/app-development" },
                { label: "Custom Software Development", href: "/custom-software-development" },
                { label: "AI & Automation", href: "/ai-automation" },
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
