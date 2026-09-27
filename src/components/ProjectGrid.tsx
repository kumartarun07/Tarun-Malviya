import React, { useState } from 'react';
import {
  Smartphone,
  ChevronRight,
  Plus,
  ArrowRight,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'production' | 'firebase' | 'offline'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (proj.category === activeFilter) return true;
    if (proj.secondaryCategories && proj.secondaryCategories.includes(activeFilter)) return true;
    return false;
  });

  return (
    <section className="py-24 relative border-t border-white/[0.06]" id="portfolio">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-300 backdrop-blur-md mb-4">
            <Smartphone className="w-3.5 h-3.5 text-teal-400" />
            <span>Production &amp; Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Selected Applications
          </h2>
          <p className="text-white/70 text-base sm:text-lg mt-3">
            Hand-crafted Flutter mobile applications engineered for reliability, responsiveness, and top-tier app store user experiences.
          </p>
        </div>

        {/* Filter Controls (Zero-pill discipline: Segmented controls) */}
        <div className="flex flex-wrap gap-2.5 mt-9">
          {[
            { id: 'all', label: 'All Applications', count: PROJECTS.length },
            { id: 'production', label: 'Store Released', count: 3 },
            { id: 'firebase', label: 'Firebase & Real-Time', count: 2 },
            { id: 'offline', label: 'Offline & BLoC', count: 2 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveFilter(item.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === item.id
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/40 shadow-[0_0_15px_rgba(0,201,167,0.2)]'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{item.label}</span>
              <span className="ml-1.5 opacity-60 font-mono text-[11px]">({item.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/60 flex flex-col justify-between hover:-translate-y-1.5 hover:border-teal-500/40 hover:shadow-[0_20px_40px_-15px_rgba(0,201,167,0.2)] transition-all duration-300 group"
            >
              {/* Media Preview Container with Fallback */}
              <div className="relative h-56 overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if local asset fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Styled CSS/SVG Fallback Background Container */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/80 backdrop-blur-md text-teal-300 border border-teal-500/30 font-mono">
                    {project.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-800/80 text-white backdrop-blur-md">
                    {project.platforms.join(' & ')}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/50 font-mono mt-1">
                    {project.company} · {project.domain}
                  </p>
                  <p className="text-sm text-white/70 mt-3 line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Card Bottom: Tech Pills & Inspector Trigger */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Collaborative Callout Card */}
          <div className="rounded-3xl overflow-hidden border border-dashed border-white/20 bg-gradient-to-b from-white/[0.02] to-teal-500/[0.04] p-8 flex flex-col justify-between text-center items-center min-h-[380px]">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
              <Plus className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Your Next Mobile Product</h3>
              <p className="text-sm text-white/60 mt-3 leading-relaxed max-w-sm">
                Looking for an experienced Flutter engineer to bring your Android &amp; iOS product from Figma concept to dual App Store launch?
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-black bg-teal-400 hover:bg-teal-300 transition shadow-[0_0_20px_rgba(0,201,167,0.3)]"
            >
              <span>Start Collaboration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
