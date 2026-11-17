import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Target, Search, Lightbulb, Rocket, Trophy, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0d0f17] rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-8 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-400">
                {project.period}
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold text-white font-mono">{m.value}</p>
                <p className="text-xs text-slate-400">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Case Study Deep Dive: Problem -> Research -> Strategy -> Execution -> Outcome */}
          <div className="space-y-6 mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 pb-2 border-b border-white/10">
              Executive Case Study Breakdown
            </h4>

            {/* 1. Problem */}
            <div className="p-5 rounded-2xl bg-red-500/[0.04] border border-red-500/20">
              <div className="flex items-center gap-2.5 text-red-400 font-semibold text-sm mb-2">
                <Target className="w-4 h-4" />
                <span>1. Problem Statement</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* 2. Research */}
            <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20">
              <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm mb-2">
                <Search className="w-4 h-4" />
                <span>2. Research & Empirical Discovery</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.caseStudy.research}
              </p>
            </div>

            {/* 3. Strategy */}
            <div className="p-5 rounded-2xl bg-blue-500/[0.04] border border-blue-500/20">
              <div className="flex items-center gap-2.5 text-blue-400 font-semibold text-sm mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>3. Formulated Strategy & Framework</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.caseStudy.strategy}
              </p>
            </div>

            {/* 4. Execution */}
            <div className="p-5 rounded-2xl bg-purple-500/[0.04] border border-purple-500/20">
              <div className="flex items-center gap-2.5 text-purple-400 font-semibold text-sm mb-2">
                <Rocket className="w-4 h-4" />
                <span>4. Operational Execution & Implementation</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.caseStudy.execution}
              </p>
            </div>

            {/* 5. Outcome */}
            <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20">
              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold text-sm mb-2">
                <Trophy className="w-4 h-4" />
                <span>5. Verified Outcome & Business Impact</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>

          {/* Key Strategic Highlights */}
          <div className="mb-8">
            <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              Core Deliverables
            </h5>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
            <Tag className="w-3.5 h-3.5 text-slate-500" />
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
