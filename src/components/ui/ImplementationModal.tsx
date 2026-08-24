"use client";

import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImplementationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const budgetRanges = [
  "Exploring possibilities",
  "Up to ₹5L / ~$6K",
  "₹5L – ₹15L / ~$6K–$18K",
  "₹15L – ₹50L / ~$18K–$60K",
  "₹50L+ / ~$60K+",
  "Enterprise / Long-term partnership",
];

const timelineOptions = [
  "Immediate (< 1 month)",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Flexible / Ongoing",
];

const industryOptions = [
  "Finance & Banking",
  "Professional Services",
  "Healthcare",
  "Retail & E-commerce",
  "Manufacturing",
  "Technology",
  "Real Estate",
  "Education",
  "Legal",
  "Logistics",
  "Other",
];

const companySizeOptions = [
  "Solo / Freelance",
  "2–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–1000 employees",
  "1000+ employees",
];

export const ImplementationModal: React.FC<ImplementationModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    workEmail: "",
    phone: "",
    website: "",
    country: "",
    industry: "",
    companySize: "",
    currentSystems: "",
    mainChallenge: "",
    budgetRange: "",
    timeline: "",
    additionalContext: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(null);
  };

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }
    if (!formData.company.trim()) {
      setErrorMessage("Please enter your company name.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/implementation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const resetModal = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      company: "",
      workEmail: "",
      phone: "",
      website: "",
      country: "",
      industry: "",
      companySize: "",
      currentSystems: "",
      mainChallenge: "",
      budgetRange: "",
      timeline: "",
      additionalContext: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-slate-200 shadow-2xl z-10 text-slate-900"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm px-6 sm:px-10 pt-8 pb-5 border-b border-slate-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0052FF] uppercase tracking-widest block mb-2">
                  IMPLEMENTATION ENQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
                  Discuss Your Business Systems
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm leading-relaxed">
                  Share details about your current systems, challenges and goals. Our team will review and respond.
                </p>
              </div>
              <button
                onClick={resetModal}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shrink-0 mt-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {errorMessage && (
              <div className="mt-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="px-6 sm:px-10 pb-10">
            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-slate-900">Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will review your systems and operational context and respond with relevant information.
                  </p>
                </div>
                <button
                  onClick={resetModal}
                  className="mt-4 px-8 py-3 rounded-full bg-[#0052FF] text-white text-xs font-semibold transition-all hover:bg-[#0043D6]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-8 space-y-5">
                {/* Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Name <span className="text-[#0052FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Company <span className="text-[#0052FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-[#0052FF]">*</span>
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      required
                      placeholder="you@company.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Website + Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="United States, India, UK..."
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Industry + Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all appearance-none"
                    >
                      <option value="">Select industry</option>
                      {industryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Approximate Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all appearance-none"
                    >
                      <option value="">Select size</option>
                      {companySizeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Current Systems */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Current Systems / Tools Used
                  </label>
                  <textarea
                    name="currentSystems"
                    rows={3}
                    placeholder="E.g. Salesforce CRM, QuickBooks, Excel spreadsheets, custom internal tools..."
                    value={formData.currentSystems}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Main Challenge */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Main Operational Challenge
                  </label>
                  <textarea
                    name="mainChallenge"
                    rows={3}
                    placeholder="Describe the primary operational bottleneck, inefficiency or problem you want to solve..."
                    value={formData.mainChallenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Project Budget Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => handleSelect("budgetRange", b)}
                        className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                          formData.budgetRange === b
                            ? "bg-[#0052FF] text-white border-[#0052FF] shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 font-mono">
                    Approximate indicative range — international enquiries welcome.
                  </p>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timelineOptions.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => handleSelect("timeline", t)}
                        className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                          formData.timeline === t
                            ? "bg-[#0052FF] text-white border-[#0052FF]"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Context */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Additional Context{" "}
                    <span className="text-slate-400 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="additionalContext"
                    rows={2}
                    placeholder="Anything else relevant to your situation..."
                    value={formData.additionalContext}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#0052FF]" />
                    <span>Strict NDA Guarantee</span>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold flex items-center gap-2 shadow-pb-glow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Discuss Your Systems</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
