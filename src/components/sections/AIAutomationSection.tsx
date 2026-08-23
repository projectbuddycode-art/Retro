"use client";

import React, { useState } from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { Cpu, UserCheck, Database, Bot, Zap, BarChart3, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const AIAutomationSection: React.FC = () => {
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(0);

  const workflowSteps = [
    {
      id: "enquiry",
      title: "Customer Enquiry",
      icon: Send,
      desc: "Incoming lead or service request captured via web forms, API webhooks, or email channels.",
      output: "Raw data packet normalized",
    },
    {
      id: "qualification",
      title: "Qualification & Triage",
      icon: UserCheck,
      desc: "AI qualification agent scores lead intent, extracts project requirements, and verifies enterprise parameters.",
      output: "Lead Intent Score: 94/100",
    },
    {
      id: "crm",
      title: "CRM Synchronization",
      icon: Database,
      desc: "Automated creation of contact record, company profile, and deal stage without human manual entry.",
      output: "HubSpot / Salesforce Sync",
    },
    {
      id: "ai-processing",
      title: "AI Processing Engine",
      icon: Bot,
      desc: "LLM document parser extracts technical scope, generates initial proposal draft, and tags tech stack.",
      output: "Scope Doc & RFP Drafted",
    },
    {
      id: "team-action",
      title: "Team Notification",
      icon: Zap,
      desc: "Slack/Teams alert triggers for assigned Account Executive with instant context summary.",
      output: "Notification sent in <3 seconds",
    },
    {
      id: "reporting",
      title: "Executive Reporting",
      icon: BarChart3,
      desc: "Pipeline dashboard updates conversion metrics, response times, and projected revenue automatically.",
      output: "Real-Time Telemetry Updated",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1128] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0052FF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Text Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>CHAPTER 07 • AI & AUTOMATION INTEGRATION</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              One Intelligent System. <br />
              <span className="text-gradient-light">Multiple Possibilities.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              We connect your central business operations with intelligent automated nodes—bringing DATA, AI, CRM, OPERATIONS, SOFTWARE, and ANALYTICS together into one unified system.
            </p>
          </motion.div>

          {/* Video 6 Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 aspect-[4/3] w-full"
          >
            <LazyVideo
              src="/videos/6.mp4"
              aspectRatio="aspect-video"
              objectFit="cover"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        {/* Interactive Workflow Visualization */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              Live Pipeline Flow • Click Nodes to Inspect Data Handoff
            </span>
            <span className="text-[#38BDF8] font-semibold hidden sm:inline text-[11px]">
              AUTOMATED RUNTIME: {"< 3.2s END-TO-END"}
            </span>
          </div>

          {/* Workflow Pipeline Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowNode === idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveWorkflowNode(idx)}
                  className={cn(
                    "p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between h-36 group",
                    isActive
                      ? "bg-slate-900 text-white border-[#0052FF] shadow-pb-glow ring-2 ring-[#0052FF]"
                      : "bg-slate-950/60 hover:bg-slate-900/80 text-slate-300 border-slate-800"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                        isActive ? "bg-[#0052FF] text-white" : "bg-slate-800 text-slate-300 border border-slate-700"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={cn("text-[10px] font-mono", isActive ? "text-[#38BDF8]" : "text-slate-500")}>
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className={cn("text-xs font-bold font-display leading-snug", isActive ? "text-white" : "text-slate-200")}>
                      {step.title}
                    </h4>
                    <span className={cn("text-[10px] font-mono block mt-1 truncate", isActive ? "text-slate-300" : "text-slate-500")}>
                      {step.output}
                    </span>
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-[#0052FF]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
                  NODE 0{activeWorkflowNode + 1} • {workflowSteps[activeWorkflowNode].title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl font-normal">
                {workflowSteps[activeWorkflowNode].desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 font-mono text-xs text-[#38BDF8] shrink-0 w-full sm:w-auto">
              <span className="text-slate-400 block text-[10px] uppercase tracking-wider mb-1">SYSTEM OUTPUT</span>
              ✓ {workflowSteps[activeWorkflowNode].output}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
