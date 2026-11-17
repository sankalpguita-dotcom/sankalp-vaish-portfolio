import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { SkillsTools } from './components/SkillsTools';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioAssistant } from './components/PortfolioAssistant';
import { Sparkles, MessageSquare } from 'lucide-react';

export function App() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080c] text-[#f3f4f6] relative selection:bg-blue-500/30 selection:text-white">
      {/* Three.js Interactive Particle Background */}
      <BackgroundCanvas />

      {/* Main Layout */}
      <div className="relative z-10">
        <Navbar onOpenAssistant={() => setAssistantOpen(true)} />

        <main>
          <Hero onOpenAssistant={() => setAssistantOpen(true)} />
          <About />
          <Experience />
          <Projects />
          <AnalyticsDashboard />
          <SkillsTools />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating AI Assistant FAB (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setAssistantOpen(!assistantOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
          aria-label="Open Sankalp's Portfolio Assistant"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full border border-black" />
          </div>
          <span className="tracking-wide">Ask Sankalp&apos;s AI</span>
        </button>
      </div>

      {/* Floating Chatbot Assistant Window */}
      <PortfolioAssistant
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />
    </div>
  );
}

export default App;
