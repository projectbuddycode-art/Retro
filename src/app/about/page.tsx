"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { ShieldCheck, Settings2, Key, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* About Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-[#0052FF] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT PROJECT BUDDY</span>
            </div>

            <h1 className="font-display font-bold text-hero-title text-slate-900">
              Engineering Philosophy & <br />
              <span className="text-gradient-blue">Operating Model.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              We don't build generic SaaS templates or agency portfolios. We engineer robust digital infrastructure designed around the specific operational reality of your business.
            </p>
          </motion.div>
        </section>

        {/* Video Moment: Enterprise Operating Model Visual */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0A1128] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="lg:col-span-6 space-y-6 relative z-10">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block">
                CORE PHILOSOPHY STATEMENT
              </span>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight">
                “Technology is only valuable when it improves how the business operates.”
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Off-the-shelf software forces businesses to change their processes to fit rigid SaaS paradigms. At Project Buddy, we flip this approach. We build software systems engineered specifically around your established business processes.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <span className="text-xs font-mono text-slate-300">Software fits the operation — 100% bespoke logic.</span>
              </div>
            </div>

            {/* Video Integration: Enterprise_operating_model_visua._202608240106.mp4 */}
            <div className="lg:col-span-6 relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 aspect-[4/3]">
                <LazyVideo
                  src="/videos/Enterprise_operating_model_visua._202608240106.mp4"
                  overlayGradient={true}
                  className="object-cover opacity-90"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <span className="font-bold text-[#38BDF8] uppercase tracking-wider text-[10px]">OPERATING MODEL RUNTIME</span>
                  <span className="text-slate-400 text-[10px]">ENTERPRISE ARCHITECTURE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Principles Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="space-y-4 mb-12">
            <span className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-widest block">
              OUR 3 CORE ENGINEERING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Built for Production Reliability & Long-Term Value.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">01. No Fake Workarounds</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We solve underlying operational root causes instead of applying superficial visual patches or fragile no-code workarounds.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">02. Production Reliability</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Every system is tested against real-world scale, security edge cases, automated backups, and high-concurrency enterprise loads.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">03. Complete System Ownership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                You own your custom software systems, codebase IP, database schemas, and data structures completely without vendor lock-in.
              </p>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white border-t border-slate-800 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Connect Directly With Engineering Leadership.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Book a 30-minute technical discovery discussion directly with our senior software architect.
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
