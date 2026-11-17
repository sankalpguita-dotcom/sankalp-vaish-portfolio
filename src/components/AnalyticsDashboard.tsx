import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, Activity, Users, Target, ShieldCheck, Database, Award, ArrowUpRight, CheckCircle2, Filter } from 'lucide-react';
import { DASHBOARD_METRICS, RECRUITMENT_FUNNEL, FEATURED_PROJECTS } from '../data/portfolioData';

export const AnalyticsDashboard: React.FC = () => {
  const [selectedMetricCategory, setSelectedMetricCategory] = useState<string>('All');
  const [activeSkillDomain, setActiveSkillDomain] = useState<'marketing' | 'analytics' | 'management'>('marketing');

  const metricCategories = ['All', 'Recruitment Operations', 'Market & Social Research', 'Event & Brand Management', 'Marketing Strategy'];

  const filteredMetrics = selectedMetricCategory === 'All'
    ? DASHBOARD_METRICS
    : DASHBOARD_METRICS.filter((m) => m.category === selectedMetricCategory);

  const qualitativeSkills = {
    marketing: [
      { name: 'Marketing Strategy', indicator: 'Strategic Mastery', evidence: 'Saregama 2025 Gen Z 5-Channel Framework' },
      { name: 'Market Research', indicator: 'Empirical Proficiency', evidence: 'Primary field survey with 150+ volunteer participants' },
      { name: 'Digital Marketing', indicator: 'High Competency', evidence: 'Multi-platform social engagement & streaming trend analysis' },
      { name: 'Branding', indicator: 'Executive Governance', evidence: 'TEDx IILM visual consistency & corporate presence' },
      { name: 'Sponsorship Management', indicator: 'Commercial Closer', evidence: 'Secured Rubaroo RestroBar deal for Marketing Mania' },
    ],
    analytics: [
      { name: 'Business Analytics', indicator: 'Certified Competency', evidence: 'HCLTech Business Analytics & Data-Driven Decision-Making' },
      { name: 'Data Analysis', indicator: 'Practical Rigor', evidence: 'StoneX multi-channel candidate pipeline variance tracking' },
      { name: 'Survey Analysis', indicator: 'Research Rigor', evidence: 'Community HeartLink 150+ respondent friction analysis' },
      { name: 'MS Excel', indicator: 'Advanced Functional', evidence: 'VLOOKUP, Pivot tables, tracking databases & reports' },
    ],
    management: [
      { name: 'Talent Acquisition', indicator: 'Corporate Proven', evidence: 'StoneX Global 1,000+ CVs screened, 100+ shortlisted' },
      { name: 'Stakeholder Coordination', indicator: 'Signature Strength', evidence: 'Aligning university deans, corporate sponsors & VIP speakers' },
      { name: 'Project Coordination', indicator: 'Demonstrated Lead', evidence: 'Hosted 100+ teams for multi-stage Marketing Mania' },
      { name: 'Problem Solving', indicator: 'Strategic Acumen', evidence: 'Interest-based labour conflict resolution simulation' },
      { name: 'Communication', indicator: 'Executive Articulation', evidence: 'Inter-collegiate case competition presentations & briefings' },
    ],
  };

  return (
    <section id="analytics" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090b10]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
            04 / Analytics & Evidence Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Interactive Business Analytics Dashboard
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Transparent, documented performance analytics and qualitative competency matrices. Built with verified data points from corporate operations, research datasets, and inter-collegiate leadership.
          </p>
        </div>

        {/* Section A: Documented Professional Metrics Grid */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Documented Professional Metrics
            </h3>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
              {metricCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedMetricCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedMetricCategory === cat
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMetrics.map((metric) => (
              <div
                key={metric.id}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    {metric.category}
                  </span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1">
                    {metric.value.toLocaleString()}{metric.suffix}
                  </p>
                  <p className="text-sm font-semibold text-slate-200">
                    {metric.label}
                  </p>
                </div>
                <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-white/[0.05] leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section B & C: Skill Visualizations & Recruitment Pipeline Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Qualitative Skill Indicators Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    Qualitative Skill Visualizations
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Evidence-backed proficiency indicators without arbitrary unsupported percentages.
                  </p>
                </div>

                {/* Domain Switcher */}
                <div className="flex rounded-xl bg-white/[0.04] p-1 border border-white/10">
                  {(['marketing', 'analytics', 'management'] as const).map((domain) => (
                    <button
                      key={domain}
                      onClick={() => setActiveSkillDomain(domain)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                        activeSkillDomain === domain
                          ? 'bg-white text-black shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Matrix List */}
              <div className="space-y-3.5">
                {qualitativeSkills[activeSkillDomain].map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {skill.indicator}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill.evidence}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Domain: {activeSkillDomain.toUpperCase()}</span>
              <span>Evidence Basis: Academic & Industry Projects</span>
            </div>
          </div>

          {/* Experience Overview: Talent Acquisition Pipeline Funnel */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  Recruitment Pipeline Funnel
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Documented recruitment funnel from StoneX Global internship.
                </p>
              </div>

              {/* Funnel Stages */}
              <div className="space-y-4">
                {RECRUITMENT_FUNNEL.map((stage, idx) => {
                  const widths = ['100%', '65%', '35%', '22%'];
                  const colors = [
                    'bg-slate-700',
                    'bg-blue-600',
                    'bg-purple-600',
                    'bg-emerald-600',
                  ];
                  return (
                    <div key={stage.stage} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{stage.stage}</span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="text-white font-bold">{stage.count.toLocaleString()}</span>
                          <span className="text-slate-500 text-[10px]">({stage.rate})</span>
                        </div>
                      </div>

                      {/* Visual Funnel Bar */}
                      <div className="w-full h-3 rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: widths[idx] }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className={`h-full rounded-full ${colors[idx]}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Operational Takeaway */}
              <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">High-Selectivity Ratio:</strong> Starting with 1,000+ sourced candidate profiles, 100+ were shortlisted and 10+ final pre-vetted professionals were directly integrated into managerial final stages, demonstrating rigorous quality filtering.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 font-mono">
              Data Verified: June – August 2026 StoneX Global Cohort
            </div>
          </div>
        </div>

        {/* Section D: Project Portfolio Distribution Matrix */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-400" />
                Strategic Project Distribution
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Five distinct case studies mapped across key managerial competencies.
              </p>
            </div>
            <a
              href="#projects"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 self-start"
            >
              Explore Full Case Studies
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {FEATURED_PROJECTS.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-blue-300 inline-block mb-2">
                    {p.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1 leading-snug">{p.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{p.summary}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/[0.04] text-[11px] font-mono text-emerald-400">
                  Key: {p.metrics[0].value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
