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
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    // Cursor parallax state
    let mouseX = width / 2;
    let mouseY = height / 2;
    const isMobile = width < 768;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Pause animation when tab is hidden
    let isVisible = true;
    const handleVisibility = () => { isVisible = !document.hidden; };
    document.addEventListener("visibilitychange", handleVisibility);

    let isIntersecting = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isIntersecting = entry.isIntersecting;
      });
    }, { threshold: 0 });
    observer.observe(canvas);

    // ─── 4-LAYER NODE SYSTEM ───────────────────────────────────────────────────

    // Layer 1: Tiny distant background stars (very slow, very small)
    const l1Count = isMobile ? 30 : 55;
    // Layer 2: Medium network nodes (standard connections)
    const l2Count = isMobile ? 22 : Math.min(Math.floor(width / 26), 50);
    // Layer 3: Active glowing nodes (fewer, larger, more visible)
    const l3Count = isMobile ? 6 : 12;

    type Node = {
      x: number; y: number; vx: number; vy: number;
      radius: number; pulseOffset: number; alpha: number; layer: number;
    };

    const makeNode = (layer: number): Node => {
      const speedScale = layer === 1 ? 0.08 : layer === 2 ? 0.22 : 0.15;
      const radiusRange = layer === 1 ? [0.6, 1.2] : layer === 2 ? [1.2, 2.4] : [2.8, 4.2];
      const alphaRange = layer === 1 ? [0.28, 0.45] : layer === 2 ? [0.48, 0.72] : [0.7, 0.95];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedScale,
        vy: (Math.random() - 0.5) * speedScale,
        radius: radiusRange[0] + Math.random() * (radiusRange[1] - radiusRange[0]),
        pulseOffset: Math.random() * Math.PI * 2,
        alpha: alphaRange[0] + Math.random() * (alphaRange[1] - alphaRange[0]),
        layer,
      };
    };

    const layer1: Node[] = Array.from({ length: l1Count }, () => makeNode(1));
    const layer2: Node[] = Array.from({ length: l2Count }, () => makeNode(2));
    const layer3: Node[] = Array.from({ length: l3Count }, () => makeNode(3));
    const allNodes = [...layer1, ...layer2, ...layer3];

    // ─── SIGNAL PARTICLES ─────────────────────────────────────────────────────
    type Signal = { fromIdx: number; toIdx: number; progress: number; speed: number; alpha: number };
    const signals: Signal[] = [];
    const maxSignals = isMobile ? 4 : 8;

    // Use layer2+layer3 indices for signal connections (more interesting)
    const l2l3Start = l1Count;
    const l2l3End = allNodes.length;

    const spawnSignal = () => {
      if (signals.length >= maxSignals) return;
      const fromIdx = l2l3Start + Math.floor(Math.random() * (l2l3End - l2l3Start));
      const toIdx = l2l3Start + Math.floor(Math.random() * (l2l3End - l2l3Start));
      if (fromIdx === toIdx) return;
      const a = allNodes[fromIdx], b = allNodes[toIdx];
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 60 || dist > 220) return;
      signals.push({ fromIdx, toIdx, progress: 0, speed: 0.006 + Math.random() * 0.008, alpha: 0.8 + Math.random() * 0.2 });
    };

    let pulseTimer = 0;
    let signalSpawnClock = 0;

    const draw = () => {
      if (!isVisible || !isIntersecting) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      pulseTimer += 0.025;
      signalSpawnClock += 0.025;

      // Spawn new signals periodically
      if (signalSpawnClock > 0.8 + Math.random() * 0.6) {
        spawnSignal();
        signalSpawnClock = 0;
      }

      // ── Cursor parallax offset ───────────────────────────────────────────────
      const cx = (mouseX - width / 2) / width;
      const cy = (mouseY - height / 2) / height;

      // ── Draw connection lines (Layer 2 + 3 only) ────────────────────────────
      const connectionNodes = [...layer2, ...layer3];
      const connectionDist = isMobile ? 120 : 155;

      for (let i = 0; i < connectionNodes.length; i++) {
        const a = connectionNodes[i];
        for (let j = i + 1; j < connectionNodes.length; j++) {
          const b = connectionNodes[j];
          const px = isMobile ? 0 : cx;
          const py = isMobile ? 0 : cy;
          const ax = a.x + px * (a.layer === 3 ? 8 : 4);
          const ay = a.y + py * (a.layer === 3 ? 8 : 4);
          const bx = b.x + px * (b.layer === 3 ? 8 : 4);
          const by = b.y + py * (b.layer === 3 ? 8 : 4);

          const dx = bx - ax, dy = by - ay;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const fade = 1 - dist / connectionDist;
            // Animated fade based on node pulse offsets
            const breathe = 0.5 + Math.sin(pulseTimer * 0.7 + a.pulseOffset) * 0.15;
            const lineAlpha = fade * 0.38 * breathe;

            ctx.strokeStyle = `rgba(0, 82, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      // ── Draw signal particles ────────────────────────────────────────────────
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const from = allNodes[sig.fromIdx];
        const to = allNodes[sig.toIdx];
        const px2 = isMobile ? 0 : cx;
        const py2 = isMobile ? 0 : cy;
        const fx = from.x + px2 * 6, fy = from.y + py2 * 6;
        const tx = to.x + px2 * 6, ty = to.y + py2 * 6;

        const t = sig.progress;
        const sigX = fx + (tx - fx) * t;
        const sigY = fy + (ty - fy) * t;

        // Fade in/out over the journey
        const fadeAlpha = Math.sin(t * Math.PI) * sig.alpha;

        // Draw the signal trail
        const grad = ctx.createRadialGradient(sigX, sigY, 0, sigX, sigY, 6);
        grad.addColorStop(0, `rgba(56, 189, 248, ${fadeAlpha * 0.9})`);
        grad.addColorStop(0.5, `rgba(0, 82, 255, ${fadeAlpha * 0.4})`);
        grad.addColorStop(1, `rgba(0, 82, 255, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sigX, sigY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.fillStyle = `rgba(200, 230, 255, ${fadeAlpha})`;
        ctx.beginPath();
        ctx.arc(sigX, sigY, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Draw nodes ──────────────────────────────────────────────────────────
      allNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const parallaxStrength = node.layer === 1 ? 2 : node.layer === 2 ? 5 : 10;
        const nx = node.x + (isMobile ? 0 : cx * parallaxStrength);
        const ny = node.y + (isMobile ? 0 : cy * parallaxStrength);

        // Breathing pulse
        const pulse = Math.sin(pulseTimer * (node.layer === 3 ? 1.4 : 0.8) + node.pulseOffset);
        const currentAlpha = node.alpha + pulse * (node.layer === 3 ? 0.2 : 0.08);

        if (node.layer === 3) {
          // Glowing halo for active layer-3 nodes
          const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.radius * 5);
          glow.addColorStop(0, `rgba(0, 82, 255, ${currentAlpha * 0.22})`);
          glow.addColorStop(1, `rgba(0, 82, 255, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(nx, ny, node.radius * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node core
        const coreColor = node.layer === 3
          ? `rgba(0, 82, 255, ${currentAlpha})`
          : node.layer === 2
            ? `rgba(0, 82, 255, ${currentAlpha})`
            : `rgba(15, 23, 42, ${currentAlpha * 0.65})`;

        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Slight highlight ring on layer-3
        if (node.layer === 3) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${currentAlpha * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(nx, ny, node.radius + 1.5, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center bg-[#FAF9F6] text-slate-900 pt-24 pb-16 overflow-hidden border-b border-slate-200/80">
      {/* Full-viewport network canvas — clearly visible */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ opacity: 1, width: "100%", height: "100%" }}
      />

      {/* Central radial glow — soft blue behind text area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#0052FF]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle edge density enhancement — more network activity at edges */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0052FF]/[0.025] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0052FF]/[0.025] to-transparent pointer-events-none" />

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

          {/* Staggered Masked Reveal Headline */}
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
              <span>Explore Services &amp; Platforms</span>
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
