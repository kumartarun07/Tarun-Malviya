import React from 'react';
import {
  Code2,
  Smartphone,
  Layers,
  Server,
  Database,
  UploadCloud,
  Cpu,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-teal-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-teal-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-purple-400" />;
      case 'CloudUpload':
        return <UploadCloud className="w-6 h-6 text-amber-400" />;
      default:
        return <Cpu className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-neutral-950/60" id="skills">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4 font-mono">
            <Code2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Skill Matrix &amp; Stack
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-3">
            Core technologies, libraries, and tools leveraged daily to architect, build, and deploy production mobile apps.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-white/60 mb-5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                      skill.featured
                        ? 'bg-teal-950/70 border border-teal-500/40 text-teal-300 font-semibold'
                        : 'bg-white/5 border border-white/10 text-white/80'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
