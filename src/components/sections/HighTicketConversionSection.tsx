"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface HighTicketProps {
  onOpenContactModal?: () => void;
}

export const HighTicketConversionSection: React.FC<HighTicketProps> = ({ onOpenContactModal }) => {
  return (
    <div className="space-y-0">
      {/* Video 3 Final Brand Moment Clean Reset Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Video 3 Clean Environment Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 aspect-[16/10] sm:aspect-[16/9] max-w-[1000px] mx-auto w-full"
          >
            <LazyVideo
              src="/videos/3.mp4"
              aspectRatio="aspect-[16/9]"
              objectFit="contain"
              className="w-full h-full"
            />
          </motion.div>

          <div className="space-y-4 max-w-3xl mx-auto pt-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#0052FF] uppercase block">
              PROJECT BUDDY PHILOSOPHY
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              We Don't Just Build Digital Products. <br />
              <span className="text-gradient-blue">We Build the Systems That Move Businesses Forward.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7 bg-slate-900/90 p-8 sm:p-16 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-mono font-semibold tracking-widest text-[#38BDF8] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAPTER 11 • ENTERPRISE CONVERSION</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Let's Build What's Next.
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Whether you're building a new digital product, automating a critical workflow or modernizing an existing operation, let's understand what the right system should look like.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm sm:text-base font-semibold tracking-tight flex items-center justify-center gap-3 shadow-pb-glow transition-all active:scale-95 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm sm:text-base font-medium border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </button>
            </div>

            <div className="pt-8 border-t border-slate-800 text-xs sm:text-sm font-sans font-medium text-slate-400 flex flex-wrap items-center justify-center gap-2 sm:gap-4 tracking-tight">
              <span className="text-white font-semibold">Strategy.</span>
              <span>•</span>
              <span className="text-white font-semibold">Engineering.</span>
              <span>•</span>
              <span className="text-white font-semibold">Automation.</span>
              <span>•</span>
              <span className="text-[#38BDF8] font-semibold">One Technology Partner.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
