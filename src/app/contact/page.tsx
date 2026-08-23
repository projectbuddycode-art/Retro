"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, ShieldCheck, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: "AI / Automation",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052FF]/10 text-xs font-mono font-bold text-[#0052FF]">
                  <span>DISCUSS YOUR PROJECT</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Let's Architect What Comes Next.
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  Have an ambitious custom software build, AI automation initiative, or enterprise system upgrade in mind? Submit your brief to connect directly with our tech leadership.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-pb-card">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#0052FF]/10 text-[#0052FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Direct Project Inquiries</span>
                    <a href="mailto:info@projectbuddy.co.in" className="text-sm sm:text-base font-mono font-bold text-slate-900 hover:text-[#0052FF]">
                      info@projectbuddy.co.in
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-slate-100 text-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Global Delivery HQ</span>
                    <span className="text-sm font-semibold text-slate-800">
                      India • Global Enterprise Clients
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-3 text-xs">
                <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                <span>NDA & Confidentiality Guaranteed on All Submissions.</span>
              </div>
            </div>

            {/* Right: Detailed Direct Brief Submission Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-pb-card">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900">Brief Successfully Sent</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your brief has been sent to{" "}
                      <span className="font-mono font-semibold text-[#0052FF]">info@projectbuddy.co.in</span>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900">Project Brief & Details</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Website URL (Optional)</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://company.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Focus Area</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF] bg-white"
                      >
                        <option value="AI / Automation">AI & Automation Pipeline</option>
                        <option value="Custom Software">Custom Software Platform</option>
                        <option value="Digital Platform">Digital Client Portal / Marketplace</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Project Scope Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF] bg-white"
                      >
                        <option value="">Select scope...</option>
                        <option value="₹2 - ₹5 Lakhs">₹2 - ₹5 Lakhs</option>
                        <option value="₹5 - ₹15 Lakhs">₹5 - ₹15 Lakhs</option>
                        <option value="₹15 Lakhs+">₹15 Lakhs+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Summary / Technical Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project requirements, target timeline, and key operational goals..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Directly routed to <span className="font-mono text-slate-600">info@projectbuddy.co.in</span>
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-bold inline-flex items-center gap-2 shadow-pb-glow transition-all"
                    >
                      {isSubmitting ? "Dispatching..." : "Submit Project Brief"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
