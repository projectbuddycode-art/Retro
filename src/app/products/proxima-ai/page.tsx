"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/ContactModal";
import { EarlyAccessModal } from "@/components/ui/EarlyAccessModal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { proximaProduct } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Search,
  Eye,
  Database,
  Cpu,
  TrendingUp,
  Award,
  Layers,
  FileText,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  PlayCircle,
  Activity,
  Check,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const fadeUpInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function ProximaPage() {
  const [accessModalOpen, setAccessModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Proxima AI by Project Buddy",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Proxima AI is an AI-powered business intelligence and opportunity research platform. It helps identify relevant business opportunities, analyze companies in depth and turn research into more informed outreach.",
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
      { "@type": "ListItem", position: 3, name: "Proxima AI", item: "https://projectbuddy.co.in/products/proxima-ai" },
    ],
  };

  const workflowSteps = [
    { name: "DISCOVER", desc: "Identify potentially relevant targets based on market parameters." },
    { name: "RESEARCH", desc: "Collect publicly accessible profile data, websites, and signals." },
    { name: "VERIFY", desc: "Audit data sources to filter signal from noise with confidence markers." },
    { name: "ANALYZE", desc: "Run technology evaluation, structure reviews and opportunity engines." },
    { name: "PRIORITIZE", desc: "Generate explainable Opportunity Scores and rank based on relevance." },
    { name: "PREPARE", desc: "Create high-fidelity playbooks, discovery questions and context maps." },
    { name: "CONNECT", desc: "Initiate highly informed, high-value outreach based on evidence." },
  ];

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
        {/* 01 — HERO */}
        <section className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Grid and ambient gradients */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0052FF]/15 rounded-full blur-[180px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D8FF]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full mb-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/products" className="hover:text-slate-300 transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#38BDF8]">Proxima AI</span>
            </nav>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column (Hero Content) */}
              <div className="lg:col-span-5 space-y-8">
                <motion.div {...fadeUp} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      PRODUCT
                    </span>
                    <div className="h-px flex-1 max-w-[40px] bg-slate-800" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                      02
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight leading-none">
                      Proxima AI
                    </h1>
                    <p className="text-lg sm:text-xl text-[#38BDF8] font-sans font-medium tracking-tight">
                      Business Intelligence & Opportunity Research
                    </p>
                  </div>

                  <p className="text-base text-slate-400 leading-relaxed font-normal">
                    {proximaProduct.description}
                  </p>

                  <div className="py-2 text-xs font-mono text-slate-500 flex flex-wrap gap-x-4 gap-y-2 uppercase tracking-wider">
                    <span>FIND.</span>
                    <span className="text-slate-700">•</span>
                    <span>UNDERSTAND.</span>
                    <span className="text-slate-700">•</span>
                    <span>CONNECT.</span>
                    <span className="text-slate-700">•</span>
                    <span>WIN.</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button
                      onClick={() => setAccessModalOpen(true)}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95 group"
                    >
                      <span>Request Access to Proxima</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <Shield className="w-4 h-4 text-slate-600" />
                      <span>Data Confidence Checks</span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-slate-400">Flagship Business Research System</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column (Showcase Frame) */}
              <div className="lg:col-span-7 relative">
                {/* Showcase Wrapper */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group rounded-3xl overflow-hidden border border-slate-800 bg-[#0A1128]/70 shadow-2xl p-2 sm:p-4 backdrop-blur-md"
                >
                  {/* Subtle technical line grid overlays */}
                  <div className="absolute inset-0 bg-tech-grid-dark opacity-10 pointer-events-none" />
                  
                  {/* Electric-blue glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0052FF]/10 to-[#38BDF8]/10 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity" />

                  {/* The product video centerpiece */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full border border-slate-800/80 bg-[#030712]">
                    <LazyVideo
                      src="/videos/proxima-ai.mp4"
                      aspectRatio="aspect-[16/9]"
                      objectFit="contain"
                      priority="auto"
                      className="w-full h-full border-none shadow-none bg-[#030712]"
                    />
                  </div>
                </motion.div>
                {/* Decorative coordinate badge */}
                <div className="absolute -bottom-6 right-4 text-[10px] font-mono text-slate-500 tracking-widest hidden sm:block">
                  PROXIMA AI // ACTIVE SYSTEM SHOWCASE (02)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — WHAT PROXIMA DOES */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070C1E] relative overflow-hidden border-t border-slate-900">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-4">
                02 — CORE CAPABILITY
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                AI-Powered Business Intelligence for{" "}
                <span className="text-gradient-light">Smarter Outreach & Bigger Wins.</span>
              </h2>
              <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
                Winning enterprise software client agreements requires thorough preparation. Instead of sending generic, uninformed cold pitches, Proxima AI equips your sales team with detailed business signals, observed technologies, and verified opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* 03 — PRODUCT INTELLIGENCE ARCHITECTURE */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050917] relative overflow-hidden border-t border-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUpInView} className="mb-16">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-4">
                03 — PRODUCT ARCHITECTURE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                The Product Capability Suite
              </h2>
              <p className="mt-3 text-slate-500 text-sm max-w-xl leading-relaxed">
                Proxima AI is built around 10 core capability modules, designed to analyze external company footprint data with transparency.
              </p>
            </motion.div>

            {/* Architecture List (Grid layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 04 - Company Intelligence */}
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">04</div>
                  <h3 className="font-display font-bold text-lg text-white">Company Intelligence</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Research and organize relevant information about businesses before outreach. Evaluates company profiling, website information, business context, technology signals, and growth signs.
                </p>
                <div className="text-[11px] font-mono text-slate-600 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[#38BDF8]">System Philosophy:</span> Does not assume every data point is always present; includes confidence ratings for each signal.
                </div>
              </div>

              {/* Card 05 - Website & Technology Analysis */}
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">05</div>
                  <h3 className="font-display font-bold text-lg text-white">Website & Technology Analysis</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Analyze publicly accessible business websites to identify relevant observations regarding structure, performance signals, SEO fundamentals, and visible technology integrations.
                </p>
                <div className="text-[11px] font-mono text-slate-600 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[#38BDF8]">Supported Signals:</span> Web technologies, analytics tools, CRM tags, marketing signals, and potential integration opportunities.
                </div>
              </div>

              {/* Card 06 - Opportunity Discovery */}
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">06</div>
                  <h3 className="font-display font-bold text-lg text-white">Opportunity Discovery</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Calculates an explainable Opportunity Score based on business relevance, service fit, and potential software improvements. Evaluates opportunities for AI-assisted workflows and process automation.
                </p>
                <div className="text-[11px] font-mono text-slate-600 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[#38BDF8]">Why This Opportunity:</span> Scoring signals are transparently listed. Proxima does not predict revenue numbers with certainty.
                </div>
              </div>

              {/* Card 07 - Security Assessment */}
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">07</div>
                  <h3 className="font-display font-bold text-lg text-white">Security Assessment</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Surfaces high-level, non-intrusive security observations (e.g., SSL certificate status, HTTP headers) strictly from publicly available sources or authorized checks.
                </p>
                <div className="text-[11px] font-mono text-slate-600 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-amber-500 font-semibold">Verification Rule:</span> No penetration testing. Any security finding includes the evidence source, severity, and recommended next step.
                </div>
              </div>

              {/* Card 08 - Sales Prep & Playbooks */}
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">08</div>
                  <h3 className="font-display font-bold text-lg text-white">Sales Preparation & Playbooks</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Compile research into a detailed executive report and outreach playbook. Generates relevant conversation starters, discovery questions, and suggested technology solutions.
                </p>
                <div className="text-[11px] font-mono text-slate-600 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[#38BDF8]">Traceability:</span> Every suggested point is trace-mapped to either verified public evidence or user-provided context.
                </div>
              </div>

              {/* Card 09 - CRM & Pipeline */}
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">09</div>
                  <h3 className="font-display font-bold text-lg text-white">CRM & Pipeline Organization</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Track prospects, save research results, and track outreach interactions in a unified workspace. Organize next actions and pipeline stages for clear operations management.
                </p>
                <div className="text-[11px] font-mono text-slate-600 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[#38BDF8]">Realism Focus:</span> No fake activities or fake prospects are generated; UI is built purely for actual team operations.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — PRODUCT WORKFLOW */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070C1E] border-y border-slate-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUpInView} className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-4">
                10 — THE WORKFLOW
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                Structured Opportunity Workflow
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                Proxima turns scattered, unverified business information into a structured step-by-step intelligence pipeline.
              </p>
            </motion.div>

            {/* Workflow steps visual mapping */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-center">
              {workflowSteps.map((step, idx) => (
                <div key={step.name} className="relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#38BDF8] mb-1">STEP 0{idx + 1}</div>
                    <h4 className="text-xs font-bold tracking-widest font-mono text-white mb-2">{step.name}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-normal">{step.desc}</p>
                  </div>
                  {idx < 6 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                      <ChevronRight className="w-5 h-5 text-slate-800" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCURACY & VERIFICATION SYSTEM SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050917] relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0052FF]/5 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-8 backdrop-blur-sm">
              <div className="space-y-4 text-center">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block">
                  SYSTEM PHILOSOPHY
                </span>
                <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                  Intelligence is only useful if it can be trusted.
                </h3>
                <p className="text-slate-400 text-sm max-w-xl mx-auto">
                  Proxima explicitly separates facts from inferences to make sure outreach is built on verified details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <h4 className="text-xs font-mono font-bold text-white tracking-wide uppercase">Verified Info</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Supported by reliable public records or directly observable assets. Clear source tracking.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h4 className="text-xs font-mono font-bold text-white tracking-wide uppercase">AI Inference</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Analytical recommendations generated from processing available inputs. Clearly marked.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    <h4 className="text-xs font-mono font-bold text-white tracking-wide uppercase">Unverified Signal</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    A potentially useful observation requiring manual audit or verification before outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 — EARLY ACCESS / REQUEST ACCESS CTA */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070C1E] border-t border-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-[150px] pointer-events-none" />

          <motion.div
            {...fadeUpInView}
            className="max-w-3xl mx-auto text-center relative z-10 space-y-8"
          >
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase block mb-6">
                REQUEST ACCESS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Request Access to Proxima
              </h2>
              <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Join the early-access program and explore how Proxima can support business intelligence, opportunity research and smarter sales preparation.
              </p>
            </div>

            <button
              onClick={() => setAccessModalOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold tracking-tight shadow-pb-glow transition-all active:scale-95 group"
            >
              <span>Request Early Access →</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[11px] text-slate-500 font-mono">
              Strict privacy configuration. No credit card required.
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
                  Project Buddy designs, integrates, and implements custom software, intelligent workflow automation systems, and connected internal applications built precisely around your operational needs.
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
      <EarlyAccessModal isOpen={accessModalOpen} onClose={() => setAccessModalOpen(false)} initialProduct="Proxima AI" />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} initialProjectType="AI Automation" />
    </div>
  );
}
