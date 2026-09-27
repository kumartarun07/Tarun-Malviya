import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenResume: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenResume,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider bg-teal-950/70 px-3 py-1 rounded-full border border-teal-500/30">
              {project.domain}
            </span>
            <span className="text-xs text-white/50 font-mono">
              {project.company} · {project.period}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-teal-300/80 mt-1 font-mono">
            {project.subtitle}
          </p>
        </div>

        {/* Media Preview */}
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-neutral-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg text-xs font-mono bg-black/80 text-white border border-white/10 backdrop-blur-md">
              Target Frame Rate: 60 FPS
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-mono bg-teal-950/80 text-teal-300 border border-teal-500/30 backdrop-blur-md">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Description Body */}
        <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
          <p>{project.description}</p>
        </div>

        {/* Key Engineering Accomplishments */}
        <div className="my-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
          <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">
            Core Engineering Contributions:
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details Grid */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.architecturalHighlights.map((arch, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5"
            >
              <span className="text-xs font-bold text-teal-300 block mb-1">
                {arch.label}
              </span>
              <p className="text-xs text-white/60 leading-normal">
                {arch.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2.5">
            Technologies &amp; Libraries:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-teal-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition cursor-pointer"
          >
            <span>View Full Resume</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
