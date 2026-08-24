"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { EarlyAccessModal } from "@/components/ui/EarlyAccessModal";
import { ContactModal } from "@/components/ui/ContactModal";
import {
  ArrowRight,
  Cpu,
  TrendingUp,
  Eye,
  Zap,
  Layers,
  Database,
  Search,
  Shield,
  Activity,
  FileText,
  Bookmark,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const proximaCapabilities = [
  { icon: Database, label: "Company Intelligence" },
  { icon: Search, label: "Website Analysis" },
  { icon: Cpu, label: "Technology Insights" },
  { icon: Shield, label: "Security Assessment" },
  { icon: TrendingUp, label: "Opportunity Scoring" },
  { icon: Activity, label: "Automation Discovery" },
  { icon: FileText, label: "Executive Reports" },
  { icon: Bookmark, label: "Sales Playbooks" },
  { icon: Layers, label: "CRM & Pipeline Intelligence" },
  { icon: Zap, label: "Smart Alerts" },
];

export const ProductsSection: React.FC = () => {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [earlyAccessProduct, setEarlyAccessProduct] = useState<"Atlas" | "Proxima AI">("Atlas");
  
  const [contactOpen, setContactOpen] = useState(false);
  const [contactProductType, setContactProductType] = useState<string>("Custom Software");

  const openEarlyAccess = (product: "Atlas" | "Proxima AI") => {
    setEarlyAccessProduct(product);
    setEarlyAccessOpen(true);
  };

  const openContact = (productType: string) => {
    setContactProductType(productType);
    setContactOpen(true);
  };

  return (
    <>
      <section
        id="products"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 relative overflow-hidden"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-[0.4] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-24">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block mb-4">
              PRODUCTS
            </span>
            <h2 className="font-display font-bold text-5xl sm:text-6xl text-slate-900 tracking-tight leading-none mb-6">
              Built for What's Next.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl font-normal">
              We don't just build software for clients. We are building intelligent systems that businesses can implement, customize and scale with.
            </p>
          </div>

          {/* PRODUCT 01: Atlas Product Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-36">
            {/* Left Column: Content */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    PRODUCT
                  </span>
                  <div className="h-px flex-1 max-w-[30px] bg-slate-200" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#0052FF] uppercase">
                    01
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight">
                    Atlas
                  </h3>
                  <p className="text-[#0052FF] text-base font-semibold font-mono tracking-wide uppercase">
                    AI-Powered Financial & Business Operations.
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Atlas is designed to help businesses bring greater clarity to operations, automate financial reconciliations, identify cashflow trends, and make better-informed decisions.
                </p>

                <p className="text-slate-500 text-xs italic leading-relaxed border-l-2 border-slate-200 pl-4">
                  "Built for businesses that want more than off-the-shelf software. Atlas can be implemented and adapted around your existing operations."
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => openEarlyAccess("Atlas")}
                  className="px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95"
                >
                  Request Early Access
                </button>
                <button
                  onClick={() => openContact("Custom Software")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#0052FF] hover:text-[#0052FF] text-xs font-semibold transition-all group"
                >
                  <span>Implement Atlas in Your Business</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Atlas Video Showcase */}
            <div className="lg:col-span-7 relative">
              {/* Premium Product Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-2 sm:p-3 border border-slate-200 shadow-xl aspect-video w-full group">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0052FF]/5 to-[#38BDF8]/5 rounded-3xl blur pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden w-full h-full bg-[#030712]">
                  <LazyVideo
                    src="/videos/atlas.mp4"
                    aspectRatio="aspect-video"
                    objectFit="contain"
                    priority="auto"
                    className="w-full h-full border-none shadow-none bg-[#030712]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 right-4 text-[10px] font-mono text-slate-400 tracking-widest hidden sm:block">
                ATLAS // OPERATIONS ENGINE (01)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT 02: Proxima AI Product Showcase (Controlled dark environment) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Proxima Video Showcase */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              {/* Premium Showcase Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0A1128]/80 p-2 sm:p-3 border border-slate-800 shadow-2xl aspect-video w-full group">
                {/* Subtle light reflection and glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D8FF]/10 to-[#0052FF]/10 rounded-3xl blur pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden w-full h-full bg-[#030712]">
                  <LazyVideo
                    src="/videos/proxima-ai.mp4"
                    aspectRatio="aspect-video"
                    objectFit="contain"
                    priority="auto"
                    className="w-full h-full border-none shadow-none bg-[#030712]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 left-4 text-[10px] font-mono text-slate-600 tracking-widest hidden sm:block">
                PROXIMA AI // BUSINESS INTELLIGENCE (02)
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-600 uppercase">
                    PRODUCT
                  </span>
                  <div className="h-px flex-1 max-w-[30px] bg-slate-800" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                    02
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
                    Proxima AI
                  </h3>
                  <p className="text-[#38BDF8] text-base font-semibold font-mono tracking-wide uppercase">
                    AI-Powered Business Intelligence.
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Proxima AI helps identify the right business opportunities, understand companies in depth, uncover operational and technology signals, and turn research into better conversations and stronger client opportunities.
                </p>
              </div>

              {/* Refined capability list grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 border-t border-slate-900">
                {proximaCapabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.label} className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-[#0052FF]/20 text-[#38BDF8] shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-slate-300 font-medium">{cap.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => openEarlyAccess("Proxima AI")}
                  className="px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95"
                >
                  Request Early Access
                </button>
                <button
                  onClick={() => openContact("AI Automation")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all group"
                >
                  <span>Talk About Implementing Proxima</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION CROSS-SELL BANNER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block">
              ENTERPRISE IMPLEMENTATION
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Have a Business. Need the System Around It?
            </h3>
            <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
              We help companies go beyond off-the-shelf software. From implementation and integration to custom workflows, automation and enterprise development, Project Buddy can adapt technology around the way your business actually operates.
            </p>
          </div>

          <button
            onClick={() => openContact("Custom Software")}
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold shadow-pb-glow transition-all active:scale-95 group"
          >
            <span>Discuss Your Implementation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      <EarlyAccessModal
        isOpen={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
        initialProduct={earlyAccessProduct}
      />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialProjectType={contactProductType}
      />
    </>
  );
};
