"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "../ui/Container";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenContactModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mobile node reduction for high CPU efficiency, 2.5x density on desktop
    const isMobile = width < 640;
    const nodeCount = isMobile ? 22 : Math.min(Math.floor(width / 32), 54);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseOffset: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.38, // 35% speed boost
        vy: (Math.random() - 0.5) * 0.38,
        radius: Math.random() * 1.4 + 0.8,
        pulseOffset: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.4 + 0.6,
      });
    }

    let pulseTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTimer += 0.04;

      // Subtle background blueprint grid
      ctx.strokeStyle = "rgba(15, 23, 42, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 70;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Dynamic breathing opacity per node
        const currentAlpha = 0.2 + Math.sin(pulseTimer + node.pulseOffset) * 0.12;

        ctx.fillStyle = `rgba(0, 82, 255, ${currentAlpha * node.alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const lineAlpha = (0.12 * (1 - dist / 135)) * currentAlpha * 3.5;
            ctx.strokeStyle = `rgba(0, 82, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Travelling pulse dot on active connections
            if ((i + j) % 3 === 0) {
              const progress = (Math.sin(pulseTimer * 1.5 + i) + 1) / 2;
              const px = node.x + dx * progress;
              const py = node.y + dy * progress;
              ctx.fillStyle = `rgba(56, 189, 248, ${lineAlpha * 2})`;
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center bg-[#FAF9F6] text-slate-900 pt-24 pb-16 overflow-hidden border-b border-slate-200/80">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-70" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[320px] bg-[#0052FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center">
        <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-[11px] font-mono font-semibold tracking-widest text-slate-700 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse" />
            <span>ENGINEERED FOR REAL OPERATIONS</span>
          </motion.div>

          {/* Staggered Masked Reveal Headline (-10% Typography Reduction) */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-[clamp(1.9rem,3.8vw,3.6rem)] text-[#0F172A] tracking-tight leading-[1.08] max-w-3xl"
            >
              We engineer the systems <br />
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#0052FF] inline-block"
              >
                businesses run on.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl font-sans"
          >
            Project Buddy designs and engineers custom software, enterprise applications and AI-enabled systems around real business operations.
          </motion.p>

          {/* Dual CTAs - Clear Conversion Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            {/* Primary Conversion CTA */}
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs sm:text-sm font-semibold tracking-tight flex items-center justify-center gap-2.5 shadow-pb-glow hover:shadow-lg transition-all active:scale-95 btn-magnetic group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Support CTA */}
            <a
              href="#solutions"
              className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-[#0B132B] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-tight flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-95 group"
            >
              <span>Explore Services & Platforms</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Status Proof Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="pt-6 border-t border-slate-200/60 w-full max-w-md text-xs font-mono text-slate-500 flex items-center justify-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0052FF]" />
              <span>Custom Software Engineering</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Production Ready Systems</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
