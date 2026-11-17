import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Linkedin, Mail, CheckCircle2, Award, Briefcase, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssistant }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Apple-style background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-glow" />
      <div className="absolute top-2/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Typography & Strategic Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Executive Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md self-start mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300 tracking-wide font-mono uppercase">
              MBA (HR & Marketing) • IILM University
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
            <span className="metallic-text block">SANKALP</span>
            <span className="text-white block">VAISH</span>
          </h1>

          {/* Personal Tagline */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
              CREATE. ANALYSE. LEAD.
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
          </div>

          {/* Professional Identity & Pitch */}
          <p className="text-lg sm:text-xl font-medium text-slate-200 mb-3 leading-snug">
            All-round Management Professional
          </p>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mb-8">
            &ldquo;An aspiring management professional passionate about marketing strategy, business analytics, research and organizational development.&rdquo;
          </p>

          {/* Target Audience Pill Matrix */}
          <div className="mb-8 pt-2">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-mono mb-2.5">
              Engaging With
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Corporate Recruiters',
                'HR Leadership',
                'Marketing Agencies',
                'Business Strategists',
                'Consulting & Analytics'
              ].map((audience) => (
                <span
                  key={audience}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10 active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="Sankalp_Vaish_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-sm border border-white/15 transition-all backdrop-blur-md active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-300" />
              <span>Download My CV</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06] hover:bg-[#0077b5]/20 text-slate-300 hover:text-white border border-white/15 hover:border-[#0077b5]/50 transition-all backdrop-blur-md"
              title="Connect on LinkedIn"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06] hover:bg-white/10 text-slate-300 hover:text-white border border-white/15 transition-all backdrop-blur-md"
              title="Send Direct Email"
              aria-label="Send direct email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Original Professional Photograph with Executive Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient halo around card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-slate-400/10 to-purple-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

            {/* Main Photograph Card */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 p-3 shadow-2xl shadow-black/80">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={PERSONAL_INFO.photoPath}
                  alt="Sankalp Vaish - All-round Management Professional"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                  loading="eager"
                />

                {/* Subtle vignette gradient for Apple-like editorial depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Badges inside frame */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                  <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white tracking-wide">
                          StoneX Global Alum
                        </p>
                        <p className="text-[11px] text-slate-400">
                          HR Intern – Talent Acquisition
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Credentials Strip */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-left px-1">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">1,000+ CVs</p>
                    <p className="text-[10px] text-slate-400 truncate">Screened at StoneX</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-semibold text-slate-200 truncate">IIM Sirmaur MDP</p>
                    <p className="text-[10px] text-slate-400 truncate">Strategic Decision-Making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
