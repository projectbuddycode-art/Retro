"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { WorkSection } from "@/components/sections/WorkSection";
import { HighTicketConversionSection } from "@/components/sections/HighTicketConversionSection";
import { FolderGit2 } from "lucide-react";

export default function WorkPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900">
      <Navbar onOpenContactModal={() => setModalOpen(true)} />

      <main className="flex-grow pt-28">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-700">
              <FolderGit2 className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>SELECTED ARCHITECTURE & CASE STUDIES</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Engineered Software & Systems
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Explore our architectural breakdown of verified systems built to solve high-stakes operational challenges.
            </p>
          </div>
        </section>

        <WorkSection onOpenContactModal={() => setModalOpen(true)} />
        <HighTicketConversionSection onOpenContactModal={() => setModalOpen(true)} />
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
