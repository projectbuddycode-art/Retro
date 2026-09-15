"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { HighTicketConversionSection } from "@/components/sections/HighTicketConversionSection";
import { BookOpen, ArrowRight, Sparkles, Cpu, ShieldCheck } from "lucide-react";

export default function InsightsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const articles = [
    {
      title: "Architecting Enterprise AI Workflows: Moving Beyond Simple Wrappers",
      category: "AI & Automation",
      date: "August 2026",
      summary: "How to engineer deterministic, fallback-protected LLM pipelines that integrate securely into company CRMs and legacy relational databases.",
    },
    {
      title: "Microservices vs. Modular Monoliths: Next.js 14 App Router Strategy",
      category: "Software Engineering",
      date: "July 2026",
      summary: "A practical evaluation of serverless function cold starts, edge caching, and scalable state management for high-concurrency web applications.",
    },
    {
      title: "Eliminating Manual Operational Friction in Professional Services",
      category: "Digital Transformation",
      date: "June 2026",
      summary: "Case study on how automated client portals reduced client onboarding time by 80% while enhancing data privacy compliance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900">
      <Navbar onOpenContactModal={() => setModalOpen(true)} />

      <main className="flex-grow pt-28">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-700">
              <BookOpen className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>TECHNICAL THOUGHT LEADERSHIP & INSIGHTS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Engineering Insights & Architecture
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
              Deep dives into AI workflow design, full-stack performance optimization, and enterprise technology strategy.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div
                key={art.title}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-pb-card flex flex-col justify-between space-y-6 hover:border-[#0052FF] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0052FF] font-bold bg-[#0052FF]/10 px-2.5 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-slate-400">{art.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{art.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{art.summary}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052FF]">
                  <span>Read Article Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <HighTicketConversionSection onOpenContactModal={() => setModalOpen(true)} />
      </main>

      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
