import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Compass, Award, TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreInterests = [
    { title: 'Marketing Strategy', desc: 'Crafting brand positioning, value propositions, and customer acquisition models.', icon: Target },
    { title: 'Digital Marketing', desc: 'Omni-channel campaigns, social media ecosystem strategy, and digital consumer touchpoints.', icon: TrendingUp },
    { title: 'Business Analytics', desc: 'Synthesizing data into actionable managerial intelligence and business performance metrics.', icon: Compass },
    { title: 'Market Research', desc: 'Primary & secondary research, empirical survey design (150+ participants), and consumer insighting.', icon: BookOpen },
    { title: 'Talent Acquisition', desc: 'Full-cycle recruitment, candidate screening (1000+ CVs), pipeline metrics, and stakeholder alignment.', icon: Users },
    { title: 'Strategic Management', desc: 'Competitive benchmarking, organizational frameworks, and sustainable growth roadmaps.', icon: ShieldCheck },
    { title: 'Leadership', desc: 'Cross-functional event coordination (Marketing Mania 100+ teams, TEDx Core Member).', icon: Award },
    { title: 'Business Development', desc: 'Corporate sponsorship negotiation (Rubaroo) and multi-stakeholder partnership building.', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-3">
            01 / Professional Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            About Me & Strategic Acumen
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            I am an MBA candidate at <span className="text-slate-200 font-medium">IILM University, Greater Noida</span> specializing in HR and Marketing. My approach unites qualitative strategic marketing with quantitative business analytics and structured organizational leadership.
          </p>
        </div>

        {/* Narrative & Value Proposition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              The Convergence of Human Capital & Market Analytics
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                My professional journey is grounded in understanding both the <em>people</em> who power businesses and the <em>market data</em> that steers corporate decisions. Through my corporate internship at <strong className="text-white">StoneX Global</strong>, I screened over 1,000 CVs, managed 20+ interview rounds, and reported recruitment closures directly to hiring leaders.
              </p>
              <p>
                Complementing recruitment operations, I have led high-visibility marketing initiatives, including coordinating <em>Marketing Mania</em> for 100+ teams, securing commercial sponsorships from <em>Rubaroo</em>, serving as a <em>TEDx IILM</em> Core Member, and repositioning legacy music catalogues for Gen Z in national case competitions.
              </p>
              <p>
                Certified by <strong className="text-white">IIM Sirmaur</strong> in Strategic Decision-Making, <strong className="text-white">HCLTech</strong> in Business Analytics, and <strong className="text-white">NISM / SEBI</strong> in Mutual Funds and Securities Markets, I bring a calibrated, multi-dimensional executive toolkit to modern business challenges.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10 text-center">
              <div className="p-3 rounded-2xl bg-white/[0.03]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar I</p>
                <p className="text-sm font-bold text-white mt-1">Create</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Brand Strategies</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar II</p>
                <p className="text-sm font-bold text-white mt-1">Analyse</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Empirical Insights</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Pillar III</p>
                <p className="text-sm font-bold text-white mt-1">Lead</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Cross-Functional Ops</p>
              </div>
            </div>
          </div>

          {/* Quick Fact Sheet */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Current Academic Enrollment</p>
              <h4 className="text-base font-bold text-white">MBA (HR & Marketing)</h4>
              <p className="text-xs text-blue-400 font-medium">IILM University, Greater Noida (2025–2027)</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                Talent Architecture, Strategic Marketing, Digital Channels, Business Data Analytics & Brand Development.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Undergraduate Degree</p>
              <h4 className="text-base font-bold text-white">Bachelor of Commerce (B.Com)</h4>
              <p className="text-xs text-blue-400 font-medium">University of Lucknow (2021–2024)</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                Corporate accounting, commercial law, microeconomics, and business mathematics.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Senior Secondary & High School</p>
              <h4 className="text-base font-bold text-white">ISC Class XII & ICSE Class X</h4>
              <p className="text-xs text-emerald-400 font-medium">St Antony&apos;s Inter College, Lucknow</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                Commerce & Mathematics stream with strong mathematical and communication foundations.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Executive Learning</p>
              <h4 className="text-base font-bold text-white">IIM Sirmaur MDP Certification</h4>
              <p className="text-xs text-amber-400 font-medium">Strategic Decision-Making (2026)</p>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                Executive residential programme on strategic leadership and case-based problem solving.
              </p>
            </div>
          </div>
        </div>

        {/* Core Domains of Interest */}
        <div className="mb-20">
          <div className="text-left mb-8">
            <h3 className="text-2xl font-bold text-white">Core Domains of Specialization & Interest</h3>
            <p className="text-sm text-slate-400 mt-1">Multidisciplinary capabilities spanning human capital, analytical data, and market strategy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreInterests.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">{interest.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{interest.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Professional Journey Timeline */}
        <div>
          <div className="text-left mb-10">
            <h3 className="text-2xl font-bold text-white">Academic & Professional Journey</h3>
            <p className="text-sm text-slate-400 mt-1">Structured chronological progression demonstrating continuous academic and professional growth.</p>
          </div>

          <div className="relative border-l border-white/15 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            {EDUCATION_TIMELINE.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-7 h-7 rounded-full bg-[#090a0f] border-2 border-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>

                {/* Content Card */}
                <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 relative">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {item.period}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {item.location}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white">{item.degree}</h4>
                  <p className="text-sm font-medium text-blue-400 mb-2">{item.specialization} • {item.institution}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 self-center mr-1">Focus Areas:</span>
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
