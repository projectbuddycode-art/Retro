"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What types of technology systems does Project Buddy specialize in?",
      a: "Project Buddy specializes in enterprise-grade custom software development, AI automation workflows, high-scale digital platforms (client portals, SaaS applications, dashboards), and legacy system digital transformation.",
    },
    {
      q: "How does Project Buddy approach AI & business process automation?",
      a: "We build business-first automation. We do not add AI for novelty. Instead, we analyze operational bottlenecks, map data flows, and integrate LLM agents, OCR document processing, and automated API webhooks directly into your CRM or internal systems.",
    },
    {
      q: "What is the typical timeline and engagement model for a complex project?",
      a: "Depending on scope, MVP platforms and focused automation systems take between 4 to 8 weeks. Larger digital transformations follow an agile sprint structure with clear milestones and weekly telemetry updates.",
    },
    {
      q: "How do you ensure data security and maintainable code quality?",
      a: "We adhere to strict enterprise coding standards: strict TypeScript type safety, AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), modular microservices, and zero proprietary lock-in.",
    },
    {
      q: "How can we start a project or schedule an architectural discovery session?",
      a: "You can click 'Start a Project' or submit your project details directly via our guided discovery tool or email us at info@projectbuddy.co.in. Our engineering leadership team reviews all briefs within 24 business hours.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold tracking-wider text-[#0052FF] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Clear information about our engineering processes and technical capabilities.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all overflow-hidden",
                  isOpen ? "bg-slate-50 border-[#0052FF]" : "bg-white border-slate-200"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-slate-900 text-sm sm:text-base tracking-tight"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 transition-transform text-slate-500",
                      isOpen && "rotate-180 text-[#0052FF]"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
