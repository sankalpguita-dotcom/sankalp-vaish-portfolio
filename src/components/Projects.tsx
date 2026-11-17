import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Marketing Strategy',
    'Social Impact & Digital Platform',
    'Event Marketing & Sponsorship',
    'Branding & Stakeholder Management',
    'Organisational Behaviour',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
              03 / Strategic Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Featured Management Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              In-depth strategic initiatives structured by Problem → Research → Strategy → Execution → Outcome.
            </p>
          </div>

          <p className="text-xs font-mono text-slate-500 hidden md:block">
            Click any project card to inspect the complete case study
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-500 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setActiveProject(project)}
              className="group glass-panel glass-panel-hover rounded-3xl border border-white/10 p-6 sm:p-7 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Subtle accent hover indicator */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 group-hover:bg-blue-500/15 rounded-full blur-2xl transition-colors pointer-events-none" />

              <div>
                {/* Card Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.05] text-blue-300 border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-semibold text-slate-300 mb-3 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {project.summary}
                </p>

                {/* Quick Metric Snapshot */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  {project.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <p className="text-sm font-bold text-white font-mono">{m.value}</p>
                      <p className="text-[10px] text-slate-500 truncate">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-blue-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View Case Study
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>

                <div className="flex gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Case Study Viewer */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};
