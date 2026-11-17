import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Users, BarChart2, ShieldCheck, Sparkles, FileSpreadsheet, Presentation, FileText, Palette, Bot, Search } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'hr' | 'tools' | 'analytics' | 'strengths'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toolIconMap: Record<string, any> = {
    'MS Excel': FileSpreadsheet,
    'PowerPoint': Presentation,
    'MS Word': FileText,
    'Canva': Palette,
    'Lovable AI': Bot,
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
              05 / Competency Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Skills, Tools & Professional Strengths
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Curated capabilities spanning talent acquisition systems, productivity suites, analytical methods, and executive leadership competencies.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search competencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'hr', label: 'HR & Recruitment' },
            { id: 'tools', label: 'Tools & Platforms' },
            { id: 'analytics', label: 'Analytical & Business' },
            { id: 'strengths', label: 'Core Strengths' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs font-semibold px-4 py-2.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. HR & Recruitment Section */}
        {(activeTab === 'all' || activeTab === 'hr') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-xl">
              <Users className="w-5 h-5 text-blue-400" />
              <h3>HR & Recruitment Lifecycle Competencies</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS_DATA.hrRecruitment
                .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* 2. Tools & Platforms */}
        {(activeTab === 'all' || activeTab === 'tools') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-xl">
              <Wrench className="w-5 h-5 text-purple-400" />
              <h3>Tools, Software & Platforms</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SKILLS_DATA.tools
                .filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((tool, i) => {
                  const ToolIcon = toolIconMap[tool.name] || Sparkles;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-purple-400 mb-4">
                          <ToolIcon className="w-6 h-6" />
                        </div>
                        <h4 className="text-base font-bold text-white mb-1">{tool.name}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 inline-block mb-3">
                          {tool.level}
                        </span>
                        <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        )}

        {/* 3. Analytical & Business Methods */}
        {(activeTab === 'all' || activeTab === 'analytics') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-xl">
              <BarChart2 className="w-5 h-5 text-emerald-400" />
              <h3>Analytical, Research & Business Proficiency</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS_DATA.analyticalBusiness
                .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}

        {/* 4. Core Strengths */}
        {(activeTab === 'all' || activeTab === 'strengths') && (
          <div>
            <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-xl">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <h3>Core Strengths & Executive Capabilities</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SKILLS_DATA.coreStrengths
                .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((strength, i) => (
                  <motion.div
                    key={strength.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2 block">
                        {strength.level}
                      </span>
                      <h4 className="text-base font-bold text-white mb-2">{strength.name}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{strength.desc}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
