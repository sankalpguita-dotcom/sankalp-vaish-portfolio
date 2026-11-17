import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, Calendar, ShieldCheck, X, Eye } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b10]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
            06 / Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Professional Certifications & Executive Learning
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Rigorous programs from premier institutions validating executive decision-making, business data analytics, and regulatory financial market standards.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-7 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.05] text-emerald-300 border border-white/10 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Gained */}
                <div className="mb-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    Verified Competencies Acquired
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Status: Verified Credential
                </span>

                {cert.imagePath ? (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-slate-500">
                    Credential Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Image Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full glass-panel bg-[#0d0f17] rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl z-10"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                    <p className="text-xs text-slate-400">{selectedCert.issuer} • {selectedCert.year}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-2">
                  <img
                    src={selectedCert.imagePath}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Authentic certification record on file</span>
                  <a
                    href={selectedCert.imagePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Open Full Image
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
