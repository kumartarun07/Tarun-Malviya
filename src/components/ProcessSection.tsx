import React from 'react';
import { GitBranch, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      phase: 'PHASE 01',
      number: '01',
      accent: 'teal',
      title: 'Requirement Analysis & Architecture',
      description:
        'Defining the state management paradigm (GetX vs BLoC), local persistence requirements (Sqflite/Hive), and REST API schema contracts before writing the first line of code.',
      chips: ['State Architecture', 'API Contracts', 'Database Schema'],
    },
    {
      phase: 'PHASE 02',
      number: '02',
      accent: 'blue',
      title: 'Pixel-Perfect UI/UX Development',
      description:
        'Transforming Figma designs into interactive, adaptive Flutter widgets. Ensuring consistent rendering across diverse screen aspect ratios, tablets, and dark/light modes.',
      chips: ['Material 3', 'Cupertino', 'Fluid 60FPS'],
    },
    {
      phase: 'PHASE 03',
      number: '03',
      accent: 'emerald',
      title: 'Cloud Services, APIs & Data Layer',
      description:
        'Implementing secure Firebase authentication, RESTful API consumption, background push notifications, payment gateways, and resilient offline synchronization.',
      chips: ['REST & Dio', 'Firebase Auth', 'Razorpay Gateway'],
    },
    {
      phase: 'PHASE 04',
      number: '04',
      accent: 'purple',
      title: 'Optimization, QA & Store Launch',
      description:
        'Profiling memory and app bundle size, configuring release certificates, managing privacy manifest requirements, and submitting builds to Google Play & Apple App Store.',
      chips: ['Play Console', 'App Store Connect', 'Bundle Optimization'],
    },
  ];

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#030E0D]" id="process">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4 font-mono">
            <GitBranch className="w-3.5 h-3.5 text-teal-400" />
            <span>Lifecycle Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            From Idea to App Store Release
          </h2>
          <p className="text-white/60 text-base sm:text-lg mt-3 max-w-xl mx-auto">
            A disciplined engineering methodology ensuring high-performance, stable, and compliant mobile products.
          </p>
        </div>

        {/* 4 Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-500/30">
                    {step.phase}
                  </span>
                  <span className="text-2xl font-bold text-white/20 font-mono group-hover:text-teal-400/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px]"
                  >
                    {chip}
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
