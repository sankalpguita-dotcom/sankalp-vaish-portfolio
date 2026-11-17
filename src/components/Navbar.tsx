import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenAssistant: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssistant }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'analytics', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080c]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Sankalp Vaish Home"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-blue-400/50 transition-colors">
            <span className="font-bold text-sm tracking-wider metallic-text font-mono group-hover:scale-105 transition-transform">
              SV
            </span>
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider text-white uppercase group-hover:text-blue-300 transition-colors">
              Sankalp Vaish
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
              Management & Marketing
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-pointer"
            title="Ask AI Assistant about Sankalp"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>AI Assistant</span>
          </button>

          <a
            href={PERSONAL_INFO.cvDownloadPath}
            download="Sankalp_Vaish_CV.pdf"
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-slate-200 transition-all font-semibold shadow-sm active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/[0.04] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistant();
                }}
                className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Ask AI Assistant</span>
              </button>

              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="Sankalp_Vaish_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-lg bg-white text-black hover:bg-slate-200"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
