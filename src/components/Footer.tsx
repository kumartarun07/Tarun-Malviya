import React from 'react';
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Download,
  Smartphone,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-black text-white/70 relative z-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/[0.08]">
          
          {/* Column 1: Identity & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-teal-500/40 bg-neutral-900 shadow-md">
                <img
                  src="/profile.jpg"
                  alt="Tarun Malviya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-mono text-teal-400">
                  {PERSONAL_INFO.role} · Android &amp; iOS
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed mb-5">
              Engineering reliable, high-performance cross-platform mobile apps. Available for full-time software engineering roles and strategic freelance contracts.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-teal-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-teal-400" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.rawPhone}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-teal-300 transition-colors">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-300 transition-colors">
                  Skill Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-300 transition-colors">
                  Experience &amp; Education
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-teal-300 transition-colors">
                  Lifecycle Methodology
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Resume */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-teal-300 truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a
                  href={`tel:${PERSONAL_INFO.rawPhone}`}
                  className="hover:text-teal-300"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Tarun Malviya. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-white/40 font-mono text-[11px]">
              Engineered with Flutter, React &amp; Modern Web Standards
            </span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
