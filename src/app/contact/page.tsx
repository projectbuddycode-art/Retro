"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { Mail, ShieldCheck, ArrowRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-widest text-[#0052FF] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT DISCOVERY & INQUIRIES</span>
            </div>

            <h1 className="font-display font-bold text-hero-title text-slate-900">
              Let's Discuss <br />
              <span className="text-gradient-blue">What You're Building.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Direct access to our senior software architects. No sales pressure, no generic forms.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: Guided Discovery Brief */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052FF]/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                  RECOMMENDED DISCOVERY FLOW
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  3-Step Implementation Brief Generator
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                  Generate a structured technical scope doc with estimated timeline and budget bounds in under 2 minutes.
                </p>
              </div>

              <div className="pt-4 relative z-10">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight flex items-center justify-center gap-2 shadow-pb-glow transition-all"
                >
                  <span>Launch Brief Generator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Direct Email & Leadership Connect */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-pb-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-wider block">
                  DIRECT LEADERSHIP CONNECT
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  Email Engineering Office
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                  Send your technical requirements, RFP documents, or inquiry brief directly to our senior leadership team.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0052FF] shrink-0" />
                  <span className="text-sm font-mono font-bold text-slate-900">info@projectbuddy.co.in</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Response Time: &lt; 4 Hours</span>
                <span>GLOBAL TELEMETRY ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Confidentiality & Security Standards */}
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white text-[#0052FF] shadow-sm shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-display text-slate-900">Strict NDA & Confidentiality Guarantee</h4>
                <p className="text-xs text-slate-600 font-sans mt-0.5">
                  All technical specifications, codebase architecture, and operational workflows shared are governed by strict non-disclosure obligations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0052FF] shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% IP Ownership Guarantee</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
