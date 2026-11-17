import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle, TrendingUp, Users, FileCheck, Layers, FileSpreadsheet, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

// Helper component for animated number counters
interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-mono font-extrabold tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
            02 / Industry Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Professional Experience & Verified Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Hands-on corporate execution in end-to-end talent acquisition, pipeline calibration, and managerial reporting for global expansion operations.
          </p>
        </div>

        {/* Main Experience Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl border border-white/15 p-8 sm:p-10 relative overflow-hidden shadow-2xl mb-12"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header of Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-emerald-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {EXPERIENCE_DATA.company}
                  </h3>
                  <p className="text-base font-semibold text-emerald-400">
                    {EXPERIENCE_DATA.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {EXPERIENCE_DATA.period}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <CheckCircle className="w-3.5 h-3.5" />
                {EXPERIENCE_DATA.badge}
              </span>
            </div>
          </div>

          {/* Overview Paragraph */}
          <div className="my-8">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-2">
              Operational Scope & Strategic Mandate
            </h4>
            <p className="text-base text-slate-200 leading-relaxed max-w-4xl">
              {EXPERIENCE_DATA.overview}
            </p>
          </div>

          {/* Key Verified Metrics (Animated Counters Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
            {EXPERIENCE_DATA.metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <p className="text-2xl sm:text-3xl text-white font-bold mb-1">
                    <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="text-xs font-semibold text-slate-300 leading-snug">
                    {metric.label}
                  </p>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 font-mono leading-tight">
                  {metric.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Structured Responsibilities & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-white/10">
            <div className="lg:col-span-8">
              <h4 className="text-sm uppercase font-mono tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                Verified Operational Deliverables & Achievements
              </h4>
              <div className="space-y-3">
                {EXPERIENCE_DATA.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[10px] font-mono font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Deployed Panel */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Talent Competencies Deployed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {EXPERIENCE_DATA.skillsDeployed.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-200 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                  Weekly recruitment dashboards reported closures, pipeline velocity, and document verification checkpoints.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
