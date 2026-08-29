"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProjectBuddyLogo } from "../ui/ProjectBuddyLogo";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["solutions", "ecosystem", "process", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(`/#${sectionId}`);
              return;
            }
          }
        }
        if (window.scrollY < 300) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/#solutions" },
    { name: "Systems", href: "/#ecosystem" },
    { name: "Products", href: "/products" },
    { name: "How It Works", href: "/#process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 sm:px-8 lg:px-12 py-4 sm:py-5",
          scrolled ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Project Buddy Logo */}
          <div className="inline-flex items-center">
            <ProjectBuddyLogo variant="dark" size="md" showTagline={false} />
          </div>

          {/* Center: Floating Centered Navigation Pill with Active Indicator */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
            {navLinks.map((link) => {
              const isPageActive = pathname === link.href;
              const isSectionActive = activeSection === link.href;
              const isActive = isPageActive || isSectionActive;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-sans font-medium transition-all duration-200 tracking-tight flex items-center gap-1.5",
                    isActive
                      ? "text-[#0052FF] font-semibold bg-[#0052FF]/5"
                      : "text-slate-700 hover:text-[#0052FF]"
                  )}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Electric Blue CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs lg:text-sm font-semibold tracking-tight shadow-pb-sm hover:shadow-pb-glow transition-all duration-200 active:scale-95 btn-magnetic group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Premium Full-Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A1128]/95 backdrop-blur-xl text-white flex flex-col justify-between p-6 pt-24 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#38BDF8]">
                  Navigation Menu
                </span>
                <span className="text-[11px] text-slate-400 font-mono">PROJECT BUDDY</span>
              </div>

              <nav className="flex flex-col space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xl sm:text-2xl font-display font-bold transition-colors py-2 flex items-center justify-between border-b border-slate-800/60 tracking-tight",
                        pathname === link.href ? "text-[#38BDF8]" : "text-slate-200 hover:text-white"
                      )}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-5 h-5 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  Ready to build serious software or automate operations?
                </p>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContactModal) onOpenContactModal();
                }}
                className="w-full py-3.5 rounded-full bg-[#0052FF] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-pb-glow tracking-tight"
              >
                <span>Start a Project →</span>
              </button>

              <div className="text-center">
                <span className="text-xs text-slate-500 font-mono">
                  info@projectbuddy.co.in
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
