"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Building2, User, Mail, Globe, MessageSquare, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    stage: "",
    name: "",
    company: "",
    email: "",
    website: "",
    description: "",
    budget: "",
  });

  if (!isOpen) return null;

  const projectTypeOptions = [
    { title: "AI / Automation", desc: "Intelligent workflows, LLMs & process automation" },
    { title: "Software Platform", desc: "Custom web applications & SaaS products" },
    { title: "Mobile App", desc: "Native & cross-platform mobile solutions" },
    { title: "Business System", desc: "Internal portals, ERP, CRM & data pipelines" },
    { title: "Digital Transformation", desc: "Modernizing legacy architecture & cloud migration" },
    { title: "Something Else", desc: "Tailored engineering & strategy consultancy" },
  ];

  const stageOptions = [
    { title: "Exploring", desc: "Initial ideation and scope discovery" },
    { title: "Planning", desc: "Requirements gathered, preparing RFP or specs" },
    { title: "Ready to Build", desc: "Clear roadmap and timeline ready for execution" },
    { title: "Improving Existing", desc: "Refactoring, scaling or adding features" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email to info@projectbuddy.co.in
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      projectType: "",
      stage: "",
      name: "",
      company: "",
      email: "",
      website: "",
      description: "",
      budget: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A1128]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-slate-700">
              Project Buddy • Guided Project Discovery
            </span>
          </div>
          <button
            onClick={resetForm}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!submitted && (
          <div className="px-6 pt-4 pb-2 bg-white border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className={cn("px-2.5 py-1 rounded-full font-bold", step === 1 ? "bg-[#0052FF] text-white" : "bg-slate-100 text-slate-600")}>
                01. Scope
              </span>
              <span className="text-slate-300">→</span>
              <span className={cn("px-2.5 py-1 rounded-full font-bold", step === 2 ? "bg-[#0052FF] text-white" : "bg-slate-100 text-slate-600")}>
                02. Stage
              </span>
              <span className="text-slate-300">→</span>
              <span className={cn("px-2.5 py-1 rounded-full font-bold", step === 3 ? "bg-[#0052FF] text-white" : "bg-slate-100 text-slate-600")}>
                03. Details
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Step {step} of 3</span>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-slate-900">Project Brief Received</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your brief has been dispatched directly to our engineering leadership team at{" "}
                  <span className="font-mono font-semibold text-[#0052FF]">info@projectbuddy.co.in</span>.
                </p>
                <p className="text-xs text-slate-500 pt-2">
                  We review every complex requirements doc within 24 business hours.
                </p>
              </div>
              <button
                onClick={resetForm}
                className="px-8 py-3 rounded-full bg-[#0052FF] text-white text-sm font-semibold hover:bg-[#0043D6] transition-all"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">What are you looking to build?</h3>
                    <p className="text-xs text-slate-500 mt-1">Select the core focus of your upcoming technology initiative.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypeOptions.map((opt) => (
                      <button
                        key={opt.title}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, projectType: opt.title });
                        }}
                        className={cn(
                          "p-4 rounded-2xl border text-left transition-all flex flex-col justify-between group",
                          formData.projectType === opt.title
                            ? "border-[#0052FF] bg-[#F0F5FF] shadow-sm"
                            : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-slate-900">{opt.title}</span>
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border flex items-center justify-center text-xs",
                              formData.projectType === opt.title
                                ? "border-[#0052FF] bg-[#0052FF] text-white"
                                : "border-slate-300 group-hover:border-slate-400"
                            )}
                          >
                            {formData.projectType === opt.title && "✓"}
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 leading-tight">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">What stage are you currently at?</h3>
                    <p className="text-xs text-slate-500 mt-1">This helps us align the right engineering strategy team.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stageOptions.map((opt) => (
                      <button
                        key={opt.title}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, stage: opt.title });
                        }}
                        className={cn(
                          "p-4 rounded-2xl border text-left transition-all flex flex-col justify-between group",
                          formData.stage === opt.title
                            ? "border-[#0052FF] bg-[#F0F5FF] shadow-sm"
                            : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-slate-900">{opt.title}</span>
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border flex items-center justify-center text-xs",
                              formData.stage === opt.title
                                ? "border-[#0052FF] bg-[#0052FF] text-white"
                                : "border-slate-300 group-hover:border-slate-400"
                            )}
                          >
                            {formData.stage === opt.title && "✓"}
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 leading-tight">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Tell us about your project</h3>
                    <p className="text-xs text-slate-500 mt-1">Provide your contact details so our tech lead can connect.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@company.com"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Website (Optional)</label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://company.com"
                          className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Summary / Goals *</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <textarea
                        required
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Briefly describe what systems, automation, or software you need built..."
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Approximate Budget Range (Optional)</label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#0052FF] bg-white"
                      >
                        <option value="">Select scope budget...</option>
                        <option value="₹2 - ₹5 Lakhs">₹2 - ₹5 Lakhs (Focused System / Automation)</option>
                        <option value="₹5 - ₹15 Lakhs">₹5 - ₹15 Lakhs (Custom Platform / AI Workflow)</option>
                        <option value="₹15 Lakhs+">₹15 Lakhs+ (Full Digital Transformation)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400">
                    Enquiry destination: <span className="font-mono font-medium text-slate-600">info@projectbuddy.co.in</span>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs font-bold inline-flex items-center gap-2 shadow-pb-glow transition-all"
                    >
                      {isSubmitting ? "Dispatching..." : "Submit Discovery Brief"}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Step 1 & 2) */}
        {!submitted && step < 3 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep((step - 1) as 1 | 2)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              disabled={
                (step === 1 && !formData.projectType) ||
                (step === 2 && !formData.stage)
              }
              onClick={() => setStep((step + 1) as 2 | 3)}
              className="px-6 py-2.5 rounded-full bg-[#0052FF] hover:bg-[#0043D6] disabled:opacity-50 text-white text-xs font-bold inline-flex items-center gap-2 shadow-pb-sm transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
