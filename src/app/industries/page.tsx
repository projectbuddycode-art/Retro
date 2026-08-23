"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { HighTicketConversionSection } from "@/components/sections/HighTicketConversionSection";
import { Layers } from "lucide-react";

export default function IndustriesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900">
      <Navbar onOpenContactModal={() => setModalOpen(true)} />

      <main className="flex-grow pt-28">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-700">
              <Layers className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>INDUSTRY BLUEPRINTS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Sector-Specific Software & AI Solutions
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Every industry has distinct regulatory, operational, and data workflows. Discover how Project Buddy engineers custom technology tailored to your sector.
            </p>
          </div>
        </section>

        <IndustriesSection />
        <HighTicketConversionSection onOpenContactModal={() => setModalOpen(true)} />
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
