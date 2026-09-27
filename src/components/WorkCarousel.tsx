import React, { useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Home,
  Briefcase,
  Compass,
  PieChart,
  Image as ImageIcon,
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface WorkCarouselProps {
  onSelectProject: (project: Project) => void;
}

export const WorkCarousel: React.FC<WorkCarouselProps> = ({ onSelectProject }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'real-estate':
        return <Home className="w-5 h-5 text-teal-400" />;
      case 'talento-india':
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 'verona-in-tour':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'expense-tracker':
        return <PieChart className="w-5 h-5 text-purple-400" />;
      default:
        return <ImageIcon className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section className="py-20 relative border-t border-white/[0.06] overflow-hidden" id="carousel-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Featured App Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Shipped Applications &amp; Core Systems
            </h2>
            <p className="text-white/60 text-base sm:text-lg mt-2 max-w-2xl">
              Swipe or use controls to browse apps developed across real estate, job marketplaces, travel, and offline personal finance.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition active:scale-95 cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition active:scale-95 cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Snap-scrollable cards list */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-6 pt-2 scroll-smooth no-scrollbar"
        >
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative snap-center shrink-0 w-[85vw] sm:w-[500px] md:w-[560px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-950 p-6 md:p-8 flex flex-col justify-between hover:border-teal-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-teal-300 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/40">
                      {project.domain}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3.5 tracking-tight group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 font-mono mt-1">
                      {project.company} · {project.period}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {getDomainIcon(project.id)}
                  </div>
                </div>

                <p className="text-white/70 text-sm sm:text-base my-5 leading-relaxed">
                  {project.overview}
                </p>

                {/* Feature highlight bullets */}
                <div className="space-y-2.5 text-xs sm:text-sm text-white/80 mb-6 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Tech Stack and Detail Trigger */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-3">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/75 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-teal-200 transition shrink-0 group-hover:translate-x-0.5 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
