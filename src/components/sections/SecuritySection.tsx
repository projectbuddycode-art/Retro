"use client";

import React from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { ShieldCheck, Lock, KeyRound, Eye, RefreshCw, Server, FileCode2 } from "lucide-react";

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: "Secure Software Architecture",
      icon: ShieldCheck,
      desc: "Principle of least privilege, input sanitization, dynamic rate limiting, and protection against OWASP Top 10 vulnerabilities.",
    },
    {
      title: "Authentication & Authorization",
      icon: KeyRound,
      desc: "Multi-factor authentication (MFA), OAuth 2.0 / OIDC integrations, and granular Role-Based Access Control (RBAC).",
    },
    {
      title: "Data Protection & Encryption",
      icon: Lock,
      desc: "AES-256 encryption at rest and TLS 1.3 encryption in transit for all sensitive database records and API payloads.",
    },
    {
      title: "Infrastructure & APM Monitoring",
      icon: Eye,
      desc: "Continuous automated uptime monitoring, error alerting, real-time APM telemetry, and structured audit logs.",
    },
    {
      title: "Scalable Infrastructure Design",
      icon: Server,
      desc: "Containerized deployments, automated database backup policies, and high-availability multi-region cloud setups.",
    },
    {
      title: "Maintainable & Clean Codebase",
      icon: FileCode2,
      desc: "Strict TypeScript type-checking, modular architecture, comprehensive documentation, and zero vendor lock-in.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/20 text-xs font-mono font-semibold text-[#0052FF]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENTERPRISE RELIABILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Systems You Can Trust With <span className="text-gradient-blue">Serious Work.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When software powers core business operations, security and reliability cannot be an afterthought. We build systems with production-grade safety standards from line one.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-pb-card border border-slate-200 aspect-video lg:aspect-square">
            <LazyVideo
              src="/videos/security-tech.mp4"
              overlayGradient={false}
              className="opacity-90 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono text-slate-800">
              <span className="font-bold text-[#0052FF] block">INFRASTRUCTURE SECURITY</span>
              Encrypted endpoints, role-based access & automated audit logs.
            </div>
          </div>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#0052FF] text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
