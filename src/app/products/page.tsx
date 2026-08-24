"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { EarlyAccessModal } from "@/components/ui/EarlyAccessModal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { atlasProduct, proximaProduct } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, TrendingUp, Eye, Lightbulb, Building2, ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const featureIcons = [Cpu, TrendingUp, Eye, Lightbulb, Building2];

export default function ProductsPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);
  const [earlyAccessProduct, setEarlyAccessProduct] = useState<"Atlas" | "Proxima AI">("Atlas");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-[#0052FF]/10 selection:text-[#0052FF]">
      <Navbar onOpenContactModal={() => setContactModalOpen(true)} />

      <main className="flex-grow">
        {/* ─── HERO ─── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050917] text-white">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-600 mb-12" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#38BDF8]">Products</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl space-y-6"
            >
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block">
                OUR PRODUCTS
              </span>

              <h1 className="font-display font-bold text-hero-title text-white tracking-tight leading-tight">
                Building the Systems{" "}
                <span className="text-gradient-light">of Tomorrow.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
                Alongside custom software and intelligent business systems, Project Buddy is developing a portfolio of products designed to help businesses operate smarter, move faster and scale with greater clarity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── ATLAS SHOWCASE (PRODUCT 01) ─── */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A1128] relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
          {/* Subtle architectural lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0052FF]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0052FF]/20 to-transparent" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#0052FF]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Atlas info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">PRODUCT</span>
                    <div className="h-px w-8 bg-slate-700" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">01</span>
                  </div>
                  <h2 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
                    Atlas
                  </h2>
                  <p className="text-lg text-[#38BDF8] font-medium">AI-Powered Financial Operating System</p>
                </div>

                <p className="text-slate-400 text-base leading-relaxed">
                  {atlasProduct.description}
                </p>

                {/* Feature quick list */}
                <div className="space-y-3">
                  {atlasProduct.features.slice(0, 3).map((feature, idx) => {
                    const Icon = featureIcons[idx] || Cpu;
                    return (
                      <div key={feature.title} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                        <div className="w-8 h-8 rounded-xl bg-[#0052FF]/20 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{feature.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      setEarlyAccessProduct("Atlas");
                      setEarlyAccessOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95"
                  >
                    <span>Request Early Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/products/atlas"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>In development — early access available</span>
                </div>
              </motion.div>

              {/* Right: Cinematic Video Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl aspect-[4/3]">
                  <LazyVideo
                    src={atlasProduct.videoAsset || "/videos/Camera_moving_through_digital_ar_202608232247.mp4"}
                    aspectRatio="aspect-[4/3]"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-mono text-slate-500 tracking-widest">ATLAS</p>
                      <p className="text-[10px] font-mono text-slate-600">FINANCIAL INTELLIGENCE SYSTEM</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-[#0052FF]/20 border border-[#0052FF]/30 text-[10px] font-mono text-[#38BDF8]">
                      EARLY ACCESS
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-6 bg-[#0052FF]/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── PROXIMA AI SHOWCASE (PRODUCT 02) ─── */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050917] relative overflow-hidden border-t border-slate-900">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#0052FF]/8 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Proxima Image Showcase (Desktop visual showcase frame) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0A1128]/70 shadow-2xl p-2 backdrop-blur-md aspect-[16/9]">
                  {/* Glowing board border */}
                  <div className="relative rounded-2xl overflow-hidden w-full h-full bg-[#030712]">
                    <Image
                      src="/images/proxima-dashboard.jpg"
                      alt="Proxima AI Dashboard"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -inset-6 bg-[#0052FF]/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />
              </motion.div>

              {/* Right: Proxima Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">PRODUCT</span>
                    <div className="h-px w-8 bg-slate-700" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">02</span>
                  </div>
                  <h2 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
                    Proxima AI
                  </h2>
                  <p className="text-lg text-[#38BDF8] font-medium">AI-Powered Business Intelligence</p>
                </div>

                <p className="text-slate-400 text-base leading-relaxed">
                  {proximaProduct.description}
                </p>

                {/* Features quick list */}
                <div className="space-y-3">
                  {proximaProduct.features.slice(0, 3).map((feature, idx) => {
                    return (
                      <div key={feature.title} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                        <div className="w-8 h-8 rounded-xl bg-[#0052FF]/20 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{feature.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      setEarlyAccessProduct("Proxima AI");
                      setEarlyAccessOpen(true);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95"
                  >
                    <span>Request Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/products/proxima-ai"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Early access program active</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── ROADMAP STATEMENT ─── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050917] relative overflow-hidden border-t border-slate-800/60">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-4">
                MORE SYSTEMS IN DEVELOPMENT
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Developing Systems for Operations.
              </h2>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Project Buddy is developing intelligent systems designed around real business operations. New workflow layers will be revealed here as they mature.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1128] border-t border-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Ecosystem Access
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Request access to the Project Buddy software ecosystem or start a custom project with our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setEarlyAccessProduct("Proxima AI");
                  setEarlyAccessOpen(true);
                }}
                className="px-9 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold inline-flex items-center gap-2 shadow-pb-glow transition-all active:scale-95"
              >
                <span>Request Proxima Access</span>
              </button>
              <button
                onClick={() => {
                  setEarlyAccessProduct("Atlas");
                  setEarlyAccessOpen(true);
                }}
                className="px-9 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-all"
              >
                Request Atlas Access
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EarlyAccessModal isOpen={earlyAccessOpen} onClose={() => setEarlyAccessOpen(false)} initialProduct={earlyAccessProduct} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
