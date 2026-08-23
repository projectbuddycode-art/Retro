"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { motion } from "framer-motion";

export const BrandTransitionSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0A1128] text-white overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 aspect-[16/9] max-h-[540px] w-full"
        >
          <LazyVideo
            src="/videos/2.mp4"
            priority="critical"
            aspectRatio="aspect-[16/9]"
            objectFit="cover"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
