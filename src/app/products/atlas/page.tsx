"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { EarlyAccessModal } from "@/components/ui/EarlyAccessModal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { atlasProduct } from "@/data/products";
import {
  ArrowRight,
  Cpu,
  TrendingUp,
  Eye,
  Lightbulb,
  Building2,
  ChevronRight,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const featureIcons = [Cpu, TrendingUp, Eye, Lightbulb, Building2];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function AtlasPage() {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Atlas by Project Buddy",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Atlas is an AI-powered financial operating system being developed by Project Buddy — an intelligent operating layer for financial workflows helping businesses bring greater clarity to operations.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Project Buddy",
      url: "https://projectbuddy.co.in",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://projectbuddy.co.in" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://projectbuddy.co.in/products" },
      { "@type": "ListItem", position: 3, name: "Atlas", item: "https://projectbuddy.co.in/products/atlas" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050917] text-white selection:bg-[#0052FF]/20 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Ambient background */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0052FF]/12 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/6 rounded-full blur-[120px] pointer-events-none" />

          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto w-full mb-10 relative z-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/products" className="hover:text-slate-300 transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#38BDF8]">Atlas</span>
            </nav>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Copy */}
              <div className="space-y-8">
                <motion.div {...fadeUp} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      PRODUCT
                    </span>
                    <div className="h-px flex-1 max-w-[40px] bg-slate-800" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                      01
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
                      Atlas
                    </h1>
                    <p className="text-lg sm:text-xl text-[#38BDF8] font-sans font-medium tracking-tight">
                      AI-Powered Financial Operating System
                    </p>
                  </div>

                  <p className="text-base text-slate-400 leading-relaxed max-w-lg font-normal">
                    {atlasProduct.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button
                      onClick={() => setEarlyAccessOpen(true)}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95 group"
                    >
                      <span>Request Early Access</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <Shield className="w-4 h-4 text-slate-600" />
                      <span>Strictly Confidential</span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-slate-400">Currently in development — early access available</span>
                  </div>
                </motion.div>
              </div>

              {/* Right: Cinematic video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-2 border border-slate-800 shadow-2xl aspect-video w-full group">
                  {/* Subtle glass reflection and glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0052FF]/5 to-[#38BDF8]/5 rounded-3xl blur pointer-events-none" />
                  <div className="relative rounded-2xl overflow-hidden w-full h-full bg-[#030712]">
                    <LazyVideo
                      src={atlasProduct.videoAsset || "/videos/atlas.mp4"}
                      aspectRatio="aspect-video"
                      objectFit="contain"
                      className="w-full h-full border-none shadow-none bg-[#030712]"
                    />
                  </div>
                </div>
                {/* Coordinate badge below the frame */}
                <div className="absolute -bottom-6 right-4 text-[10px] font-mono text-slate-500 tracking-widest hidden sm:block">
                  ATLAS // OPERATIONS ENGINE (01)
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FEATURE ARCHITECTURE ─── */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A1128] relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0052FF]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section header */}
            <motion.div {...fadeUpInView} className="mb-16 max-w-2xl">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-4">
                FEATURE ARCHITECTURE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Designed Around How Businesses{" "}
                <span className="text-gradient-light">Actually Operate.</span>
              </h2>
              <p className="mt-4 text-slate-400 text-base leading-relaxed">
                Atlas is being built with five core intelligence modules, each focused on a specific dimension of financial and operational clarity.
              </p>
            </motion.div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {atlasProduct.features.map((feature, idx) => {
                const Icon = featureIcons[idx] || Cpu;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative p-7 rounded-3xl border bg-slate-900/60 backdrop-blur-sm transition-all group hover:border-[#0052FF]/40 ${
                      idx === 0
                        ? "md:col-span-2 lg:col-span-1 border-[#0052FF]/30"
                        : "border-slate-800"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#0052FF]/15 text-[#38BDF8] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                    {/* Architectural line accent */}
                    <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent group-hover:via-[#0052FF]/40 transition-all" />
                  </motion.div>
                );
              })}
            </div>

            {/* Technical disclaimer */}
            <motion.div
              {...fadeUpInView}
              className="mt-12 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-500 font-mono leading-relaxed"
            >
              <span className="text-[#38BDF8] font-bold">NOTE: </span>
              Atlas is currently in active development. Feature availability and specifics may evolve as the product matures. No performance claims are made — Atlas is designed to help businesses work with greater clarity, not to replace professional financial judgment.
            </motion.div>
          </div>
        </section>

        {/* ─── EARLY ACCESS CTA ─── */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050917] relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/15 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            {...fadeUpInView}
            className="max-w-3xl mx-auto text-center relative z-10 space-y-8"
          >
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-6">
                EARLY ACCESS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Get Early Access to Atlas.
              </h2>
              <p className="mt-5 text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
                Join the early-access list to receive product updates, launch information and opportunities to explore Atlas as it develops.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { label: "Product Updates", desc: "First to know when Atlas launches" },
                { label: "Early Exploration", desc: "Opportunities to explore features in development" },
                { label: "Direct Dialogue", desc: "Feedback shapes the product roadmap" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5"
                >
                  <p className="text-xs font-mono font-bold text-white tracking-wide">{item.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setEarlyAccessOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95 group"
            >
              <span>Request Early Access →</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-slate-600 font-mono">
              No commitments. No credit card. Your information is handled with strict confidentiality.
            </p>
          </motion.div>
        </section>

        {/* IMPLEMENTATION CROSS-SELL */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050917] border-t border-slate-900/60 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-left max-w-xl">
                <h4 className="text-sm font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                  Need Something Built Around Your Business?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Project Buddy also designs and implements custom software, intelligent workflows and integrated business systems.
                </p>
              </div>
              <Link
                href="/implementation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all shrink-0 group"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EarlyAccessModal isOpen={earlyAccessOpen} onClose={() => setEarlyAccessOpen(false)} initialProduct="Atlas" />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} initialProjectType="Custom Software" />
    </div>
  );
}
