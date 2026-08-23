"use client";

import React, { useState } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "Custom Software",
    challenge: "",
    timeline: "1-2 Months",
    budget: "₹5L - ₹10L",
  });

  const projectOptions = [
    "Custom Software",
    "Enterprise Application",
    "Web Application",
    "Mobile Application",
    "AI Automation",
    "Business Process Automation",
    "System Integration",
    "Software Modernization",
    "SaaS Product",
    "Other",
  ];

  const timelineOptions = ["Immediate (< 1 Month)", "1-2 Months", "3-6 Months", "Flexible"];
  const budgetOptions = ["Under ₹5L", "₹5L - ₹10L", "₹10L - ₹20L", "₹20L+ Enterprise"];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetModal = () => {
    setStep(1);
    setSubmitted(false);
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
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 p-6 sm:p-10 text-slate-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#0052FF] uppercase tracking-widest block">
                PROJECT DISCOVERY BRIEF • STEP 0{step} OF 04
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 tracking-tight">
                {step === 1 && "01 • About You & Your Business"}
                {step === 2 && "02 • What Are You Building?"}
                {step === 3 && "03 • Operational Challenge & Context"}
                {step === 4 && "04 • Timeline & Scope Parameters"}
              </h3>
            </div>
            <button
              onClick={resetModal}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900">Brief Submitted Successfully</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Our senior software architect will review your technical specifications and contact you at <span className="font-semibold text-slate-900">{formData.email}</span> within 4 hours.
              </p>
              <button
                onClick={resetModal}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0052FF] text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                    Select Target Solution Category *
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {projectOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, projectType: opt })}
                        className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                          formData.projectType === opt
                            ? "bg-[#0052FF] text-white border-[#0052FF] shadow-sm"
                            : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Describe the Primary Operational Challenge / System Goal
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Explain your existing workflow bottleneck, data silos, or what you want the software system to accomplish..."
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Desired Timeline</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`p-3 rounded-xl border text-xs font-semibold ${
                            formData.timeline === t
                              ? "bg-[#0052FF] text-white border-[#0052FF]"
                              : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Estimated Budget Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`p-3 rounded-xl border text-xs font-semibold ${
                            formData.budget === b
                              ? "bg-[#0052FF] text-white border-[#0052FF]"
                              : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#0052FF]" />
                    <span>Strict NDA Guarantee</span>
                  </div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-full bg-[#0052FF] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-[#0052FF] text-white text-xs font-semibold flex items-center gap-2 shadow-pb-glow"
                  >
                    <span>Submit Implementation Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
