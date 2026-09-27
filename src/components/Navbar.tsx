import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  FileDown,
  ArrowRight,
  Menu,
  X,
  User,
  Layers,
  Briefcase,
  GitBranch,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Apps & Projects', href: '#portfolio', icon: Smartphone },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Process', href: '#process', icon: GitBranch },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030E0D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* ZONE 1: Brand Wordmark (Single Text Element with subtle status indicator) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-teal-500/40 bg-neutral-900 shadow-[0_0_15px_rgba(0,201,167,0.25)] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img
                src="/profile.jpg"
                alt="Tarun Malviya"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-teal-300 transition-colors whitespace-nowrap">
                  {PERSONAL_INFO.name}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-teal-400/90 uppercase font-semibold">
                Flutter &amp; Mobile Engineer
              </span>
            </div>
          </a>

          {/* ZONE 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-teal-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ZONE 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition backdrop-blur-md cursor-pointer whitespace-nowrap"
              title="View & Download Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-teal-400" />
              <span>Resume PDF</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-400 hover:to-emerald-500 shadow-[0_0_20px_rgba(0,201,167,0.3)] transition transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-white/10 bg-[#030E0D]/95 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm text-white/80 hover:text-teal-300 transition-colors"
                >
                  <span className="font-medium">{link.name}</span>
                  <Icon className="w-4 h-4 text-white/40" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90 hover:bg-white/10 transition"
              >
                <FileDown className="w-4 h-4 text-teal-400" />
                <span>View &amp; Download Resume (PDF)</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-500/15 border border-teal-500/30 text-xs font-semibold text-teal-300"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
