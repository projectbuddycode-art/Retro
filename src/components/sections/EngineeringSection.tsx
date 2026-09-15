"use client";

import React, { useState } from "react";
import { LazyVideo } from "../ui/LazyVideo";
import { Code2, Layers, Server, Database, Cpu, Network, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const EngineeringSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const architectureLayers = [
    {
      id: "frontend",
      title: "Frontend Layer",
      icon: Code2,
      tech: ["Next.js 14/15", "TypeScript", "Tailwind CSS", "Framer Motion"],
      spec: "Server-side rendering (SSR), static site generation (SSG), instant web vitals, zero cumulative layout shift.",
      codeSnippet: `// High-Performance App Router Architecture
export default async function Page() {
  const data = fontFetch('/api/v1/telemetry');
  return <ClientDashboard initialData={data} />;
}`,
    },
    {
      id: "application",
      title: "Application Layer",
      icon: Server,
      tech: ["Node.js / Express", "Python FastAPI", "REST / GraphQL", "gRPC"],
      spec: "Decoupled microservice architecture with auto-scaling containerization, JWT OAuth2 auth, and rate limiting.",
      codeSnippet: `// Microservice Endpoint & Input Validator
app.post('/api/v1/process', authMiddleware, async (req, res) => {
  const job = await queue.add('ai-triage', req.body);
  return res.json({ status: 'QUEUED', jobId: job.id });
});`,
    },
    {
      id: "data",
      title: "Data Layer",
      icon: Database,
      tech: ["PostgreSQL / Supabase", "BigQuery", "Redis Cache", "Vector DB (Pinecone)"],
      spec: "ACID-compliant relational storage combined with fast Redis memory cache and high-dimensional vector embeddings for AI.",
      codeSnippet: `// Vector Search Query for Semantic Context
const matches = await pinecone.query({
  vector: embedding,
  topK: 5,
  includeMetadata: true
});`,
    },
    {
      id: "ai-layer",
      title: "AI / Automation Layer",
      icon: Cpu,
      tech: ["LangChain", "OpenAI / Claude API", "Custom PyTorch models", "Celery / BullMQ"],
      spec: "Asynchronous task workers processing batch AI tasks, multi-modal LLM reasoning, and fail-safe fallback triggers.",
      codeSnippet: `// Autonomous Agent Task Execution
const agent = new AgentExecutor({ llm, tools });
const result = await agent.run("Extract invoice metadata and verify VAT ID");`,
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: Network,
      tech: ["Stripe / Razorpay", "HubSpot / Salesforce", "Zapier Webhooks", "AWS S3 / GCS"],
      spec: "Secure webhook handlers with signature validation, idempotent event retries, and unified API abstractions.",
      codeSnippet: `// Webhook Signature Verification
const event = stripe.webhooks.constructEvent(
  req.rawBody, sig, endpointSecret
);`,
    },
    {
      id: "analytics",
      title: "Analytics Telemetry",
      icon: BarChart2,
      tech: ["PostHog", "Datadog", "OpenTelemetry", "Google Analytics 4"],
      spec: "Real-time error reporting, APM latency monitoring, user journey session replays, and custom conversion funnel tracking.",
      codeSnippet: `// Real-Time Event Telemetry
telemetry.track('WORKFLOW_AUTOMATED', {
  durationMs: 1420,
  confidenceScore: 0.98
});`,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050917] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono font-semibold tracking-wider text-[#38BDF8] uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
            </div>

            <h2 className="font-display font-bold text-section-title text-white">
              Built for Today. <span className="text-gradient-light">Engineered for What Comes Next.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              We design software architectures that scale effortlessly. No technical debt, no spaghetti code, just clean, maintainable systems built to enterprise benchmarks.
            </p>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 aspect-[4/3] w-full">
            <LazyVideo
              src="/videos/engineering-infra.mp4"
              aspectRatio="aspect-video"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Code-Based Architectural Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Navigation */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] uppercase font-mono tracking-widest text-slate-400 font-semibold block mb-3">
              System Stack Layers
            </span>
            {architectureLayers.map((layer, idx) => {
              const isActive = activeTab === idx;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group",
                    isActive
                      ? "bg-slate-900 border-[#0052FF] text-white shadow-pb-glow"
                      : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-xl text-xs", isActive ? "bg-[#0052FF] text-white" : "bg-slate-800 text-slate-400")}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold font-display">{layer.title}</span>
                  </div>
                  <span className={cn("text-xs font-mono", isActive ? "text-[#38BDF8]" : "text-slate-600")}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Code & Specs Inspector Box */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider font-semibold">
                {architectureLayers[activeTab].title} Specification
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-slate-400 font-mono">STATUS: OPTIMIZED</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {architectureLayers[activeTab].spec}
            </p>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                Primary Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {architectureLayers[activeTab].tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Code Snippet Display */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">
                Sample Implementation Snippet
              </span>
              <div className="p-4 rounded-2xl bg-[#050917] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                <pre>{architectureLayers[activeTab].codeSnippet}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
