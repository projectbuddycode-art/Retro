"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { HighTicketConversionSection } from "@/components/sections/HighTicketConversionSection";
import { Cpu, ShieldCheck, Zap, Award } from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900">
      <Navbar onOpenContactModal={() => setModalOpen(true)} />

      <main className="flex-grow pt-28">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-700">
              <Cpu className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>ABOUT PROJECT BUDDY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Software Engineering + AI Automation Partner
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              We position ourselves as serious technology partners for ambitious businesses. We combine high-scale software engineering, AI workflow automation, and strategic digital transformation.
            </p>
          </div>
        </section>

        {/* Company Core Values & Philosophy */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-4">
              <div className="p-3 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Enterprise Standard Quality</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero temporary band-aids. We build maintainable software, clean APIs, and robust test pipelines ready for long-term production.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-4">
              <div className="p-3 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Business-First AI Strategy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We focus strictly on ROI-backed automation—eliminating high-friction manual work and speeding up operational turnaround times.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-sm space-y-4">
              <div className="p-3 rounded-2xl bg-[#0052FF]/10 text-[#0052FF] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Dedicated Tech Partnership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We work as an extension of your leadership team, offering clear technical roadmaps, telemetry monitoring, and continuous scaling support.
              </p>
            </div>
          </div>
        </section>

        <ProcessSection />
        <HighTicketConversionSection onOpenContactModal={() => setModalOpen(true)} />
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
