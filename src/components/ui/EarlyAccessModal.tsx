"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Zap, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: "Atlas" | "Proxima AI";
}

const companySizeOptions = [
  "Solo / Freelance",
  "2–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–1000 employees",
  "1000+ employees",
];

const productOptions = ["Atlas", "Proxima AI"];

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose, initialProduct = "Atlas" }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    website: "",
    role: "",
    companySize: "",
    productInterest: "Atlas",
    currentBusinessChallenge: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        productInterest: initialProduct,
      }));
    }
  }, [isOpen, initialProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(null);
  };

  const handleSelectProduct = (product: string) => {
    setFormData((prev) => ({ ...prev, productInterest: product }));
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMessage("Please enter your company name.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submissionDate: new Date().toISOString(),
          sourcePage: "/products",
        }),
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
      fullName: "",
      workEmail: "",
      companyName: "",
      website: "",
      role: "",
      companySize: "",
      productInterest: initialProduct,
      currentBusinessChallenge: "",
      message: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  const isProxima = formData.productInterest === "Proxima AI";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0A1128] rounded-3xl border border-slate-800 shadow-2xl z-10 text-white"
          style={{
            backgroundImage: isProxima
              ? "radial-gradient(ellipse at 50% 0%, rgba(0,216,255,0.08) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(0,82,255,0.08) 0%, transparent 60%)",
          }}
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#0A1128]/95 backdrop-blur-sm px-6 sm:px-10 pt-8 pb-5 border-b border-slate-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {isProxima ? (
                    <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
                  ) : (
                    <Cpu className="w-3.5 h-3.5 text-[#0052FF]" />
                  )}
                  <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest">
                    REQUEST EARLY ACCESS
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  Join the Product Ecosystem
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm leading-relaxed">
                  Join the early-access list to explore our flagship business tools and shape the product roadmap.
                </p>
              </div>
              <button
                onClick={resetModal}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0 mt-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mt-4 p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 pb-10">
            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">Request Received</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in {formData.productInterest}. Our team will review your details and keep you informed.
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>Confidential — handled with strict privacy standards.</span>
                </div>
                <button
                  onClick={resetModal}
                  className="mt-4 px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-8 space-y-5">
                {/* Product Selectors */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Product Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {productOptions.map((prod) => (
                      <button
                        type="button"
                        key={prod}
                        onClick={() => handleSelectProduct(prod)}
                        className={`p-3 rounded-xl border text-xs font-mono font-bold tracking-wide uppercase transition-all text-center ${
                          formData.productInterest === prod
                            ? "bg-[#0052FF] text-white border-[#0052FF] shadow-pb-glow"
                            : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        {prod}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      required
                      placeholder="you@company.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Company + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Company Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="Your company"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                </div>

                {/* Role + Company Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      name="role"
                      placeholder="E.g. CEO, Director of Operations..."
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all appearance-none"
                    >
                      <option value="">Select company size</option>
                      {companySizeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Current Business Challenge
                  </label>
                  <textarea
                    name="currentBusinessChallenge"
                    rows={3}
                    placeholder="Describe your primary financial or business operational challenge..."
                    value={formData.currentBusinessChallenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Additional Message{" "}
                    <span className="text-slate-600 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Anything else you'd like us to know..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052FF] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                    <span>Strict confidentiality guaranteed</span>
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
                        <span>Request Access</span>
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
