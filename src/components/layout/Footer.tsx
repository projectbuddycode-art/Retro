import React from "react";
import Link from "next/link";
import { ProjectBuddyLogo } from "../ui/ProjectBuddyLogo";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050917] text-white border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/60">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <ProjectBuddyLogo variant="light" size="lg" showTagline={true} />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed pt-2">
              Turning ideas into intelligent systems. Engineering high-scale custom software, AI automation pipelines, and enterprise digital platforms.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Enterprise Grade Software & AI Partner</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["Solutions", "Industries", "Work", "Insights", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@projectbuddy.co.in"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#0052FF] text-slate-200 hover:text-white transition-all group"
              >
                <div className="p-2 rounded-lg bg-[#0052FF]/20 text-[#38BDF8]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Inquiries & Proposals</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold group-hover:text-[#38BDF8]">
                    info@projectbuddy.co.in
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-500 group-hover:text-white" />
              </a>

              <div className="flex items-center gap-3 px-3 py-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>India • Serving Enterprise Clients Globally</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Project Buddy Technology. All rights reserved.</p>
          <div className="flex items-center space-x-6 font-mono text-[11px]">
            <span>Software Engineering</span>
            <span>•</span>
            <span>AI Automation</span>
            <span>•</span>
            <span>Digital Transformation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
