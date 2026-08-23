"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandTransitionSection } from "@/components/sections/BrandTransitionSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ConnectedSystemSection } from "@/components/sections/ConnectedSystemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CustomSoftwareSection } from "@/components/sections/CustomSoftwareSection";
import { AIAutomationSection } from "@/components/sections/AIAutomationSection";
import { DigitalProductsSection } from "@/components/sections/DigitalProductsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { HighTicketConversionSection } from "@/components/sections/HighTicketConversionSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => setContactModalOpen(true);
  const handleCloseContactModal = () => setContactModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      {/* Global Navbar */}
      <Navbar onOpenContactModal={handleOpenContactModal} />

      {/* Main Content Sequential 11-Chapter Film Storytelling Flow */}
      <main className="flex-grow">
        {/* 01. HERO */}
        <HeroSection onOpenContactModal={handleOpenContactModal} />

        {/* 02. VIDEO 2 (2.mp4) — BRAND TRANSITION */}
        <BrandTransitionSection />

        {/* 03. BUSINESS PROBLEM */}
        <ProblemSection />

        {/* 04. VIDEO 1 (1.mp4) — CONNECTED SYSTEMS */}
        <ConnectedSystemSection />

        {/* 05. VIDEO 4 (4.mp4) — WHAT WE BUILD */}
        <ServicesSection onOpenContactModal={handleOpenContactModal} />

        {/* 06. VIDEO 5 (5.mp4) — CUSTOM SOFTWARE */}
        <CustomSoftwareSection />

        {/* 07. VIDEO 6 (6.mp4) — AI, AUTOMATION & INTEGRATION */}
        <AIAutomationSection />

        {/* 08. VIDEO 7 (7.mp4) — DIGITAL PRODUCTS & PLATFORMS */}
        <DigitalProductsSection />

        {/* 09. APPROACH / HOW WE WORK */}
        <ProcessSection />

        {/* 10 & 11. VIDEO 3 (3.mp4) BRAND MOMENT & FINAL CONVERSION CTA */}
        <HighTicketConversionSection onOpenContactModal={handleOpenContactModal} />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* 3-Step Guided Project Discovery Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContactModal} />
    </div>
  );
}
