import React from 'react';
import {
  Smartphone,
  LayoutGrid,
  Download,
  ArrowRight,
  Clock,
  Layers,
  UploadCloud,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-32 sm:pt-40 pb-20 px-5 sm:px-8 relative overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,185,160,0.15)_0%,transparent_70%)] pointer-events-none -z-10" />

      {/* Availability Status Pill */}
      <div className="inline-flex items-center gap-2.5 rounded-full bg-teal-950/40 border border-teal-500/30 px-4 py-2 backdrop-blur-md text-teal-300 shadow-[0_0_20px_rgba(0,201,167,0.15)] mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {PERSONAL_INFO.status}
        </span>
      </div>

      {/* Main Headline with Animated Photo Avatar */}
      <h1 className="leading-[1.08] font-bold text-white tracking-tight max-w-5xl mx-auto text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        <span className="inline-flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <span>Crafting</span>
          
          {/* Portrait Avatar with Smooth Entrance Animation */}
          <div className="relative inline-block my-1 align-middle">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-teal-400/80 shadow-[0_0_35px_rgba(0,201,167,0.4)] relative z-10 bg-neutral-900"
              style={{
                animation: 'portraitFall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Tarun Malviya"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 z-20 bg-teal-700 text-white rounded-full p-1 border-2 border-[#030E0D]">
              <Smartphone className="w-3.5 h-3.5 text-teal-200" />
            </div>
          </div>

          <span>high-grade</span>
        </span>

        <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-teal-400 via-emerald-300 to-green-500 bg-clip-text text-transparent animate-shimmer-mask glow-teal">
          cross-platform
        </span>

        <span className="block mt-1 sm:mt-2 text-white/95">
          mobile applications.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 mt-7 leading-relaxed font-normal text-balance">
        Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> — a Flutter Developer with 1.5+ years of hands-on experience building and shipping cross-platform Android &amp; iOS applications with GetX, Bloc, Firebase, and REST APIs.
      </p>

      {/* Primary Action Buttons */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#portfolio"
          className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,201,167,0.35)] hover:scale-105 cursor-pointer"
        >
          <LayoutGrid className="w-4 h-4" />
          <span>View Mobile Projects</span>
        </a>

        <button
          onClick={onOpenResume}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border-gradient hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-xl cursor-pointer"
        >
          <Download className="w-4 h-4 text-teal-400" />
          <span>Resume (PDF)</span>
        </button>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-medium text-sm sm:text-base text-white/60 hover:text-teal-300 transition"
        >
          <span>Let's talk</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Credibility & Proof Bar */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-14 pt-8 border-t border-white/[0.08] text-xs sm:text-sm text-white/60 max-w-4xl">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
          </div>
          <span>
            <strong className="text-white/90">1.5+ Years</strong> Professional Experience
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
          </div>
          <span>
            <strong className="text-white/90">GetX &amp; Bloc</strong> State Patterns
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span>
            <strong className="text-white/90">Play Store &amp; App Store</strong> Deployments
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <span>
            Jodhpur, India • <strong className="text-white/90">Open for Remote</strong>
          </span>
        </div>
      </div>
    </section>
  );
};
