import React from 'react';
import { ArrowUp, Heart, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center font-mono font-bold text-white text-sm">
                SV
              </div>
              <div>
                <span className="text-base font-bold text-white uppercase tracking-wider block">
                  SANKALP VAISH
                </span>
                <span className="text-xs font-mono text-blue-400">
                  CREATE. ANALYSE. LEAD.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              All-round Management Professional specializing in marketing strategy, talent acquisition, business analytics, and organizational development.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                DSMM Academic Project • IILM University (2025–2027)
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                Sections
              </p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Profile</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience (StoneX)</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                Evidence
              </p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#analytics" className="hover:text-white transition-colors">Analytics Dashboard</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tools</a></li>
                <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <p className="font-mono uppercase tracking-wider text-slate-300 font-semibold text-xs mb-3">
                Connect Directly
              </p>
              <div className="flex items-center gap-2 mb-4">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-white/10 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.cvDownloadPath}
                  download="Sankalp_Vaish_CV.pdf"
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-400 border border-white/10 flex items-center justify-center transition-colors"
                  aria-label="Download CV"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white self-start transition-colors pt-4"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Sankalp Vaish. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            Designed for Digital & Social Media Marketing Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
