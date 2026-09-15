"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "../ui/Container";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { TextType } from "../ui/TextType";

interface HeroSectionProps {
  onOpenContactModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resizeCanvas = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isMobile = window.innerWidth < 768;

    // Cursor parallax state (smooth lerped)
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // ─── STAR DEFINITIONS & DEPTH LAYERS ───────────────────────────────────────
    type Star = {
      x: number;
      y: number;
      layer: 0 | 1 | 2; // 0 = Distant, 1 = Midground, 2 = Foreground
      radius: number;
      baseAlpha: number;
      speed: number;
      angle: number; // primary drift direction in radians
      swayAmp: number; // organic sway amplitude
      swayFreq: number; // sway frequency
      swayPhase: number;
      twinkleSpeed: number;
      twinklePhase: number;
      colorType: "blue" | "sky" | "slate" | "white";
    };

    const countLayer0 = isMobile ? 45 : 125; // Distant micro-stars
    const countLayer1 = isMobile ? 18 : 48;  // Midground stars
    const countLayer2 = isMobile ? 6 : 14;   // Foreground luminous stars

    const createStar = (layer: 0 | 1 | 2, initialScatter = true): Star => {
      const angle =
        (Math.PI * 1.15) + (Math.random() - 0.5) * (Math.PI * 0.9); // gentle upper-left/downward galactic drift

      let radius: number;
      let speed: number;
      let baseAlpha: number;
      let colorType: Star["colorType"];

      if (layer === 0) {
        // Distant micro-star: subtle, tiny, gentle drift
        radius = 0.55 + Math.random() * 0.65;
        speed = 0.08 + Math.random() * 0.14;
        baseAlpha = 0.22 + Math.random() * 0.35;
        colorType = Math.random() > 0.4 ? "slate" : "sky";
      } else if (layer === 1) {
        // Midground: moderate speed, soft glow
        radius = 1.2 + Math.random() * 1.0;
        speed = 0.22 + Math.random() * 0.20;
        baseAlpha = 0.45 + Math.random() * 0.30;
        colorType = Math.random() > 0.5 ? "blue" : "sky";
      } else {
        // Foreground: luminous, cinematic diffraction & soft halo
        radius = 2.4 + Math.random() * 1.3;
        speed = 0.40 + Math.random() * 0.28;
        baseAlpha = 0.70 + Math.random() * 0.25;
        colorType = Math.random() > 0.6 ? "white" : "blue";
      }

      return {
        x: initialScatter ? Math.random() * (width || window.innerWidth) : (Math.random() > 0.5 ? -15 : (width || window.innerWidth) + 15),
        y: initialScatter ? Math.random() * (height || window.innerHeight) : Math.random() * (height || window.innerHeight),
        layer,
        radius,
        baseAlpha,
        speed,
        angle,
        swayAmp: 0.3 + Math.random() * 0.8,
        swayFreq: 0.4 + Math.random() * 0.6,
        swayPhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.8 + Math.random() * 1.6,
        twinklePhase: Math.random() * Math.PI * 2,
        colorType,
      };
    };

    const stars: Star[] = [
      ...Array.from({ length: countLayer0 }, () => createStar(0)),
      ...Array.from({ length: countLayer1 }, () => createStar(1)),
      ...Array.from({ length: countLayer2 }, () => createStar(2)),
    ];

    // Lifecycle & visibility handlers
    let isVisible = true;
    let isIntersecting = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && isIntersecting && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (isIntersecting && isVisible && !prefersReducedMotion) {
            lastTime = performance.now();
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    let lastTime = performance.now();

    const drawStar = (
      star: Star,
      screenX: number,
      screenY: number,
      alpha: number
    ) => {
      if (
        screenX < -30 ||
        screenX > width + 30 ||
        screenY < -30 ||
        screenY > height + 30
      )
        return;

      const r = star.radius;

      // Color mapping with enterprise tech palette
      let fillStyle: string;
      let haloColor: string;

      switch (star.colorType) {
        case "blue":
          fillStyle = `rgba(0, 82, 255, ${alpha})`;
          haloColor = `rgba(0, 82, 255, ${alpha * 0.25})`;
          break;
        case "sky":
          fillStyle = `rgba(56, 189, 248, ${alpha})`;
          haloColor = `rgba(56, 189, 248, ${alpha * 0.22})`;
          break;
        case "white":
          fillStyle = `rgba(240, 249, 255, ${alpha})`;
          haloColor = `rgba(0, 82, 255, ${alpha * 0.35})`;
          break;
        case "slate":
        default:
          fillStyle = `rgba(100, 116, 139, ${alpha * 0.85})`;
          haloColor = `rgba(148, 163, 184, ${alpha * 0.12})`;
          break;
      }

      // Foreground star optical glow & subtle diffraction flare
      if (star.layer === 2) {
        const glowRadius = r * 5;
        const grad = ctx.createRadialGradient(
          screenX,
          screenY,
          0,
          screenX,
          screenY,
          glowRadius
        );
        grad.addColorStop(0, haloColor);
        grad.addColorStop(1, "rgba(0, 82, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(screenX, screenY, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 4-point micro optical flare
        const flareLength = r * 3.5;
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.35})`;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(screenX - flareLength, screenY);
        ctx.lineTo(screenX + flareLength, screenY);
        ctx.moveTo(screenX, screenY - flareLength);
        ctx.lineTo(screenX, screenY + flareLength);
        ctx.stroke();
      } else if (star.layer === 1) {
        // Midground star subtle halo
        const glowRadius = r * 3;
        const grad = ctx.createRadialGradient(
          screenX,
          screenY,
          0,
          screenX,
          screenY,
          glowRadius
        );
        grad.addColorStop(0, haloColor);
        grad.addColorStop(1, "rgba(0, 82, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(screenX, screenY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Star core
      ctx.fillStyle = fillStyle;
      ctx.beginPath();
      ctx.arc(screenX, screenY, r, 0, Math.PI * 2);
      ctx.fill();
    };

    // If user prefers reduced motion, render single static frame
    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        drawStar(star, star.x, star.y, star.baseAlpha);
      });
      return () => {
        window.removeEventListener("resize", resizeCanvas);
        observer.disconnect();
      };
    }

    // Main 60 FPS animation loop
    const render = (time: number) => {
      if (!isVisible || !isIntersecting) return;

      const elapsed = Math.min(time - lastTime, 50); // cap max delta
      lastTime = time;
      const dt = elapsed / 16.667; // normalize to 60fps unit

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (!isMobile) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.04 * dt;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04 * dt;
      }

      const parallaxNormX = (currentMouseX - width / 2) / (width || 1);
      const parallaxNormY = (currentMouseY - height / 2) / (height || 1);

      const margin = 40;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Organic continuous motion along vector + sinusoidal sway
        const vx = Math.cos(s.angle) * s.speed;
        const vy = Math.sin(s.angle) * s.speed;
        const sway = Math.sin((time * 0.001 * s.swayFreq) + s.swayPhase) * s.swayAmp;

        s.x += (vx + sway * 0.15) * dt;
        s.y += (vy + Math.cos((time * 0.001 * s.swayFreq) + s.swayPhase) * 0.1) * dt;

        // Wrap around viewport with smooth buffer
        if (s.x < -margin) s.x = width + margin;
        else if (s.x > width + margin) s.x = -margin;

        if (s.y < -margin) s.y = height + margin;
        else if (s.y > height + margin) s.y = -margin;

        // Depth parallax factor
        const parallaxFactor =
          s.layer === 0 ? 4 : s.layer === 1 ? 12 : 24;

        const screenX = s.x + (!isMobile ? parallaxNormX * parallaxFactor : 0);
        const screenY = s.y + (!isMobile ? parallaxNormY * parallaxFactor : 0);

        // Soft organic twinkle / opacity oscillation
        const twinkle =
          Math.sin((time * 0.0015 * s.twinkleSpeed) + s.twinklePhase) * 0.22;
        const currentAlpha = Math.max(
          0.05,
          Math.min(1, s.baseAlpha + twinkle)
        );

        drawStar(s, screenX, screenY, currentAlpha);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center bg-[#FAF9F6] text-slate-900 pt-24 pb-16 overflow-hidden border-b border-slate-200/80">
      {/* Cinematic continuous-motion starfield canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ opacity: 1, width: "100%", height: "100%" }}
      />

      {/* Central radial glow — soft blue behind typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#0052FF]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle edge density gradient enhancement */}
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

          {/* Headline with React Bits TextType Typing Animation */}
          <div className="overflow-visible">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-[clamp(1.9rem,3.8vw,3.6rem)] text-[#0F172A] tracking-tight leading-[1.08] max-w-3xl"
            >
              <span className="block">We engineer the systems</span>
              <span className="block text-[#0052FF]">
                <TextType
                  text={[
                    "businesses run on.",
                    "enterprises scale on.",
                    "modern operations demand.",
                  ]}
                  typingSpeed={45}
                  variableSpeed={{ min: 25, max: 65 }}
                  initialDelay={400}
                  pauseDuration={2600}
                  deletingSpeed={22}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorBlinkDuration={0.6}
                  loop={true}
                  className="text-[#0052FF]"
                  cursorClassName="text-[#0052FF]"
                />
              </span>
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

          {/* Dual CTAs */}
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
