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
          <div className="md:col-span-4 space-y-4">
            <ProjectBuddyLogo variant="light" size="lg" showTagline={true} />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed pt-2">
              Custom software, AI automation, business system integration, technology implementation and intelligent software products. Serving businesses globally.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Enterprise Software & Technology Partner</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Services", href: "/services" },
                { label: "Custom Software", href: "/custom-software-development" },
                { label: "AI & Automation", href: "/ai-automation" },
                { label: "System Integration", href: "/business-system-integration" },
                { label: "Web Development", href: "/web-development" },
                { label: "App Development", href: "/app-development" },
                { label: "Implementation", href: "/implementation" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Company Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Products", href: "/products" },
                { label: "Atlas", href: "/products/atlas" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs uppercase tracking-widest font-mono text-slate-400 font-semibold pt-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Insights", href: "/insights" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{label}</span>
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
                  <span className="text-xs text-slate-400">Enquiries & Proposals</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold group-hover:text-[#38BDF8]">
                    info@projectbuddy.co.in
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-500 group-hover:text-white" />
              </a>

              <div className="flex items-center gap-3 px-3 py-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>India • Serving Clients Globally</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Project Buddy Technology. All rights reserved.</p>
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <span>Software Engineering</span>
            <span>•</span>
            <span>AI Automation</span>
            <span>•</span>
            <span>Products</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
