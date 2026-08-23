"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AIAutomationSection } from "@/components/sections/AIAutomationSection";
import { EngineeringSection } from "@/components/sections/EngineeringSection";
import { HighTicketConversionSection } from "@/components/sections/HighTicketConversionSection";
import { Cpu, Bot, Code2, LayoutDashboard, TrendingUp, RefreshCw, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900">
      <Navbar onOpenContactModal={() => setModalOpen(true)} />

      <main className="flex-grow pt-28">
        {/* Page Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052FF]/10 text-xs font-mono font-bold text-[#0052FF]">
              <Cpu className="w-3.5 h-3.5" />
              <span>SOLUTIONS & SYSTEMS ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Technology Solutions
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              We design, build, and deploy custom software, AI automation pipelines, and scalable digital infrastructure tailored specifically to your business operations.
            </p>
          </div>
        </section>

        {/* Deep Dive Services Architecture */}
        <ServicesSection onOpenContactModal={() => setModalOpen(true)} />
        <AIAutomationSection />
        <EngineeringSection />
        <HighTicketConversionSection onOpenContactModal={() => setModalOpen(true)} />
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
