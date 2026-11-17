import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download, Send, Check, Copy, AlertCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format (e.g., name@company.com).';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the inquiry subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Formulate authentic direct mailto link to send genuine communication
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Sankalp,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionComplete(true);
    }, 600);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
            07 / Direct Engagement
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Connect for Opportunities & Inquiries
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Open to management trainee programs, marketing strategy roles, corporate HR & talent acquisition assignments, and consulting discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Communication Channels & CV */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-xl bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Telephone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
                  title="Copy telephone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/15 border border-[#0077b5]/30 text-[#0077b5] flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">LinkedIn Network</p>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                      sankalp-vaish-a00739376
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Direct CV Download Banner */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Official Document
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Updated 2026
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Sankalp Vaish Curriculum Vitae
              </h4>
              <p className="text-xs text-slate-400 mb-5">
                Complete one-page MBA CV detailing academic coursework, StoneX Global internship, case competitions, and NISM certifications.
              </p>
              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="Sankalp_Vaish_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all shadow-md active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send an Inquiry Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Complete the verified fields below to initiate direct email communication with Sankalp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name / Organization <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Sarah Jenkins (Talent Partner)"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-blue-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. s.jenkins@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-blue-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Subject / Role Description <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="e.g. Opportunity: Management Trainee / Marketing Associate"
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-blue-400'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Message Details <span className="text-blue-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Please share details about your organization, opportunity, or inquiry..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-blue-400'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Opening Mail Client...' : 'Dispatch Inquiry'}</span>
              </button>

              {submissionComplete && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Your inquiry has been formulated and dispatched to your email client addressed to <strong>{PERSONAL_INFO.email}</strong>.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
