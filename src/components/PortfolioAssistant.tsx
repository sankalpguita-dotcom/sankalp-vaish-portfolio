import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User, Settings, Key, RefreshCw, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, FEATURED_PROJECTS, EDUCATION_TIMELINE, CERTIFICATIONS_DATA, SKILLS_DATA } from '../data/portfolioData';
import { ChatMessage } from '../types';

interface PortfolioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioAssistant: React.FC<PortfolioAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am Sankalp's Executive Portfolio Assistant. How can I assist you with Sankalp's academic profile, corporate experience at StoneX Global, marketing strategies, or analytics credentials?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'Tell me about his StoneX Global internship',
        "What was Sankalp's Saregama Gen Z marketing strategy?",
        'What is Community Heartlink?',
        'What are his key skills & tools?',
        'How can I get in touch with Sankalp?',
      ],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('sankalp_gemini_api_key') || '');
  const [showConfig, setShowConfig] = useState(false);
  const [apiSaveStatus, setApiSaveStatus] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('sankalp_gemini_api_key', key);
    setApiSaveStatus(true);
    setTimeout(() => setApiSaveStatus(false), 2000);
  };

  // Intelligent Local Knowledge Base Engine (Fallback)
  const generateLocalResponse = (query: string): string => {
    const q = query.toLowerCase();

    // 1. StoneX Global / Experience
    if (q.includes('stonex') || q.includes('experience') || q.includes('intern') || q.includes('talent acquisition') || q.includes('recruit')) {
      return `At StoneX Global, Sankalp served as an HR Intern in Talent Acquisition (June–August 2026). His verified impact includes:
• Screened 1,000+ CVs across digital hiring channels
• Shortlisted 100+ high-potential profiles for the company experience center expansion
• Delivered 10+ pre-assessed, high-match candidates to hiring managers
• Coordinated 20+ interview rounds managing end-to-end scheduling
• Verified documents for 100+ shortlisted candidates
• Prepared weekly multi-profile recruitment progress dashboards.`;
    }

    // 2. Saregama Project / Music Strategy
    if (q.includes('saregama') || q.includes('music') || q.includes('gen z') || q.includes('marketing strategy')) {
      return `In the Saregama 2025 Case Competition, Sankalp formulated a data-driven marketing and monetization model repositioning 50+ years of classic Hindi music IP for Gen Z audio consumers. Key elements:
• Conducted streaming analytics across Spotify, YouTube Shorts, and Instagram Reels
• Developed a synchronized 5-channel digital engagement strategy
• Leveraged modern remix culture, UGC sound bite challenges, and creator ambassadors
• Proposed actionable IP monetization frameworks via micro-licensing and streaming algorithms.`;
    }

    // 3. Community Heartlink / Lovable AI / NGOs
    if (q.includes('heartlink') || q.includes('ngo') || q.includes('community') || q.includes('lovable') || q.includes('survey')) {
      return `Community HeartLink is a social impact platform developed by Sankalp in 2025. It bridges youth volunteers with grassroots NGOs:
• Empirical Research: Conducted primary field research surveying 150+ student and professional respondents
• Identified key friction points causing a 78% drop-off in volunteer engagement
• Partnered with 5 grassroots NGOs to specify requirements
• Built an end-to-end, ready-to-launch no-code web platform using Lovable AI for NGO discovery, volunteer profiles, and collaborative project matching.`;
    }

    // 4. Markbuzz / Marketing Mania / Rubaroo
    if (q.includes('markbuzz') || q.includes('rubaroo') || q.includes('marketing mania') || q.includes('sponsorship')) {
      return `As Coordinator of MarkBuzz (Marketing Club) at IILM University:
• Led operations and hospitality for "Marketing Mania", hosting 100+ competing student teams
• Pitched and successfully negotiated commercial sponsorship with Rubaroo RestroBar (Greater Noida)
• Managed full event budgets, registration drives, and multi-venue live rounds.`;
    }

    // 5. TEDx
    if (q.includes('tedx') || q.includes('speaker') || q.includes('core member')) {
      return `As a Core Member of TEDx IILM (2026):
• Curated external thought leaders and coordinated speaker itineraries
• Secured corporate event sponsorships adhering to TEDx guidelines
• Maintained visual brand governance and managed live session executions.`;
    }

    // 6. Conflict Resolution / OB
    if (q.includes('conflict') || q.includes('labour') || q.includes('retention') || q.includes('organisational behaviour') || q.includes('ob')) {
      return `In his Workplace Conflict Resolution Project (Organisational Behaviour, 2025):
• Simulated the role of an HR Manager during a high-stakes labour-management deadlock
• Structured an interest-based mediation framework aimed at employee retention
• Established safety committees, open-door reviews, and grievance handling procedures.`;
    }

    // 7. Education / MBA / University
    if (q.includes('education') || q.includes('iilm') || q.includes('lucknow') || q.includes('degree') || q.includes('mba')) {
      return `Sankalp's Academic Qualifications:
• MBA (HR & Marketing Dual Specialization) – IILM University, Greater Noida (2025–2027, In-Progress)
• B.Com – University of Lucknow (2021–2024, Graduated)
• ISC Class XII (Commerce & Math) – St Antony's Inter College (2020–2021)
• ICSE Class X – St Antony's Inter College (2018–2019).`;
    }

    // 8. Certifications
    if (q.includes('certif') || q.includes('nism') || q.includes('hcl') || q.includes('sirmaur') || q.includes('mdp')) {
      return `Sankalp holds 4 prestigious certifications:
1. Management Development Programme (MDP) on Strategic Decision-Making – IIM Sirmaur (2026)
2. Business Analytics & Data-Driven Decision-Making – HCLTech (2025)
3. NISM Series V-A: Mutual Fund Distributors – SEBI / NISM (2026)
4. NISM Series XII: Securities Markets Foundation – SEBI / NISM (2026).
Certificates are verified with credentials on file.`;
    }

    // 9. Skills / Tools
    if (q.includes('skill') || q.includes('tool') || q.includes('excel') || q.includes('software')) {
      return `Sankalp's core competencies:
• HR & Recruitment: Talent Acquisition, Resume Screening, Candidate Shortlisting, Talent Mapping, Interview Scheduling, Onboarding, Documentation & Reporting
• Tools: MS Excel (VLOOKUP, Pivot tables), PowerPoint, MS Word, Canva, Lovable AI
• Analytical: Business Analytics, Data Analysis, Market Research, Survey Analysis, Financial Accounting, Ratio Analysis
• Soft Strengths: Executive Communication, Stakeholder Coordination, Problem Solving, Presentation Skills.`;
    }

    // 10. Contact / Email / Phone / LinkedIn
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('hire') || q.includes('call')) {
      return `You can reach Sankalp Vaish directly via:
• Email: Sankalpvaishh@gmail.com
• Phone: +91 78001 57287
• LinkedIn: https://linkedin.com/in/sankalp-vaish-a00739376
• Location: Greater Noida / Delhi NCR, India.
You can also use the contact form at the bottom of the page or download his CV!`;
    }

    // 11. Tagline / Identity
    if (q.includes('tagline') || q.includes('who is') || q.includes('about')) {
      return `Sankalp Vaish is an All-round Management Professional pursuing his MBA in HR & Marketing at IILM University. His personal tagline is "CREATE. ANALYSE. LEAD." He specializes in marketing strategy, digital platforms, talent acquisition, and business data analytics.`;
    }

    // Default Fallback
    return `Sankalp Vaish is an All-round Management Professional with proven expertise across Talent Acquisition (StoneX Global), Marketing Strategy (Saregama 2025), Digital Innovation (Community HeartLink), and Event Leadership (Marketing Mania, TEDx IILM). 

Would you like more details on his:
1. Professional Experience at StoneX Global
2. Featured Marketing Case Studies
3. Analytical Skills & Certifications (IIM Sirmaur, HCLTech, NISM)
4. Contact & Networking Information?`;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // If an external Gemini API Key is configured, attempt live Gemini API call
    if (apiKey.trim()) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: `System Context: You are Sankalp Vaish's personal executive portfolio assistant. Answer questions strictly based on his authentic portfolio data:
- Name: Sankalp Vaish
- Identity: All-round Management Professional
- Tagline: CREATE. ANALYSE. LEAD.
- Education: MBA (HR & Marketing) at IILM University (2025-2027), B.Com from University of Lucknow (2021-2024), ISC/ICSE from St Antony's Inter College.
- Experience: HR Intern at StoneX Global (June-Aug 2026), screened 1000+ CVs, shortlisted 100+, delivered 10+ candidates, coordinated 20+ interviews, verified documents for 100+ candidates.
- Projects: Saregama Case Competition (Gen Z repositioning, 5-channel digital strategy), Community HeartLink (150+ research respondents, 5 NGO partners, Lovable AI no-code platform), MarkBuzz Coordinator (100+ teams, Rubaroo sponsorship), TEDx IILM Core Member, Conflict Resolution simulation.
- Certifications: IIM Sirmaur MDP (2026), HCLTech Business Analytics (2025), NISM Mutual Funds V-A (2026), NISM Securities Markets XII (2026).
- Contact: Sankalpvaishh@gmail.com, +91 7800157287.

User question: ${text}`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generatedText) {
            setMessages((prev) => [
              ...prev,
              {
                id: (Date.now() + 1).toString(),
                sender: 'assistant',
                text: generatedText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              },
            ]);
            setIsTyping(false);
            return;
          }
        }
      } catch (err) {
        console.warn('API call failed, engaging built-in knowledge engine fallback.', err);
      }
    }

    // Default / Fallback simulation with realistic response cadence
    setTimeout(() => {
      const reply = generateLocalResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: [
            'Download his CV',
            'View StoneX Global metrics',
            'Connect on LinkedIn',
          ],
        },
      ]);
      setIsTyping(false);
    }, 450);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 pointer-events-none">
        {/* Backdrop for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden pointer-events-auto"
        />

        {/* Chat Window Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full sm:w-[420px] h-[85vh] sm:h-[620px] bg-[#0c0e14] rounded-t-3xl sm:rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden relative"
        >
          {/* Header */}
          <div className="p-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-sm">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0c0e14]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Sankalp&apos;s Portfolio Assistant
                </h3>
                <p className="text-[10px] text-slate-400 font-mono">
                  {apiKey ? 'Powered by Gemini AI' : 'Active • Knowledge Engine'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowConfig(!showConfig)}
                className={`p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors ${
                  showConfig ? 'bg-white/10 text-white' : ''
                }`}
                title="Assistant Settings & API Key"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Optional API Key Configuration Drawer */}
          {showConfig && (
            <div className="p-4 bg-[#12151e] border-b border-white/10 text-xs text-slate-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white flex items-center gap-1">
                  <Key className="w-3.5 h-3.5 text-blue-400" />
                  API Configuration
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  {apiKey ? 'Connected' : 'Fallback Engine Active'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mb-2">
                The assistant functions out-of-the-box with a high-accuracy local knowledge base. You may optionally connect your Google Gemini API Key for live AI generative responses.
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  placeholder="Enter Gemini API Key..."
                  value={apiKey}
                  onChange={(e) => handleSaveApiKey(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-400"
                />
              </div>
              {apiSaveStatus && (
                <p className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1 font-mono">
                  <Check className="w-3 h-3" /> Saved to browser storage
                </p>
              )}
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-xs'
                      : 'bg-white/[0.05] border border-white/10 text-slate-200 rounded-tl-xs whitespace-pre-line'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[9px] text-slate-400 mt-1 block text-right font-mono opacity-60">
                    {msg.timestamp}
                  </span>

                  {/* Suggestion Chips */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col gap-1.5">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Suggested Prompts:
                      </p>
                      {msg.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-left text-[11px] p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-blue-300 border border-white/5 transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>{suggestion}</span>
                          <ArrowRight className="w-3 h-3 text-slate-500" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Buttons */}
          <div className="px-3 py-1.5 border-t border-white/[0.06] bg-black/30 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {[
              'StoneX Internship',
              'Saregama Strategy',
              'Certifications',
              'Contact Info',
            ].map((preset) => (
              <button
                key={preset}
                onClick={() => handleSendMessage(`Tell me about ${preset}`)}
                className="text-[10px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.06] transition-colors cursor-pointer"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white/[0.02] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Sankalp's work..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
