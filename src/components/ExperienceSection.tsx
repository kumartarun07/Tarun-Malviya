import React from 'react';
import {
  Briefcase,
  Calendar,
  Home,
  Compass,
  GraduationCap,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { WORK_EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 relative border-t border-white/[0.06]" id="experience">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4 font-mono">
            <Briefcase className="w-3.5 h-3.5 text-teal-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Hands-on software engineering delivering high-grade mobile applications with end-to-end store publishing.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-teal-500/30 space-y-12">
          
          {/* Work Milestone: NBT */}
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-teal-400 border-4 border-[#030E0D] shadow-[0_0_15px_rgba(0,201,167,0.6)]" />

              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-teal-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Sub-Projects built at NBT */}
                <div className="space-y-4">
                  {exp.projects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 font-semibold text-white text-base">
                          {pIdx === 0 && <Home className="w-4 h-4 text-teal-400" />}
                          {pIdx === 1 && <Briefcase className="w-4 h-4 text-emerald-400" />}
                          {pIdx === 2 && <Compass className="w-4 h-4 text-amber-400" />}
                          <span>{proj.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-teal-300 bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-800/40">
                          {proj.domain}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                        {proj.points.map((pt, ptIdx) => (
                          <li key={ptIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Milestone */}
          <div className="relative">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-teal-500 border-4 border-[#030E0D] shadow-[0_0_15px_rgba(0,185,160,0.6)]" />

            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-teal-400 mt-0.5">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 w-fit">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                  <span>Graduated {PERSONAL_INFO.education.year}</span>
                </div>
              </div>

              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                {PERSONAL_INFO.education.details}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
