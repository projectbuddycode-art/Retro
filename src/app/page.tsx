"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandTransitionSection } from "@/components/sections/BrandTransitionSection";

// Dynamic imports for all below-the-fold sections
const ProblemSection = dynamic(() =>
  import("@/components/sections/ProblemSection").then((m) => m.ProblemSection)
);
const ConnectedSystemSection = dynamic(() =>
  import("@/components/sections/ConnectedSystemSection").then((m) => m.ConnectedSystemSection)
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/ServicesSection").then((m) => m.ServicesSection)
);
const CustomSoftwareSection = dynamic(() =>
  import("@/components/sections/CustomSoftwareSection").then((m) => m.CustomSoftwareSection)
);
const AIAutomationSection = dynamic(() =>
  import("@/components/sections/AIAutomationSection").then((m) => m.AIAutomationSection)
);
const DigitalProductsSection = dynamic(() =>
  import("@/components/sections/DigitalProductsSection").then((m) => m.DigitalProductsSection)
);
const ProductsSection = dynamic(() =>
  import("@/components/sections/ProductsSection").then((m) => m.ProductsSection)
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/ProcessSection").then((m) => m.ProcessSection)
);
const HighTicketConversionSection = dynamic(() =>
  import("@/components/sections/HighTicketConversionSection").then((m) => m.HighTicketConversionSection)
);
const FAQSection = dynamic(() =>
  import("@/components/sections/FAQSection").then((m) => m.FAQSection)
);

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

        {/* 08b. OUR PRODUCTS — ATLAS & PRODUCT ECOSYSTEM */}
        <ProductsSection />

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
