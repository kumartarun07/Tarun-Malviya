import React, { useState } from 'react';
import {
  User,
  Layers,
  Rocket,
  PlugZap,
  ShieldCheck,
  Cpu,
  FileText,
  Download,
  GraduationCap,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const chapters = [
    {
      index: 0,
      badge: 'Chapter 01 · Background & Passion',
      icon: User,
      title: 'Crafting intuitive, responsive mobile experiences that users love.',
      paragraphs: [
        `I'm a dedicated Flutter Developer with 1.5+ years of practical industry experience building production-ready Android and iOS applications at Next Big Technology (NBT).`,
        `My software engineering journey began with a Bachelor of Computer Application (BCA) from Jai Narayan Vyas University, Jodhpur. Ever since, I have committed myself exclusively to the Flutter & Dart ecosystem — turning complex product specs into smooth, scalable, and responsive cross-platform apps.`,
      ],
      tags: [
        'Cross-Platform Development',
        'Pixel-Perfect UI/UX',
        'Material Design 3 & Cupertino',
      ],
    },
    {
      index: 1,
      badge: 'Chapter 02 · Architecture & State',
      icon: Layers,
      title: 'Scalable state patterns for stable, maintainable codebases.',
      paragraphs: [
        `A great mobile app requires an architecture that scales as features grow. I specialize in both GetX for lightweight reactive development and BLoC (Business Logic Component) for strict event-driven state segregation.`,
        `Whether managing real-time chat streams, offline caching queues with Sqflite, or complex multi-step search filters, I structure applications with clean separation of concerns: presentation widgets, domain logic controllers/blocs, and data repository layers.`,
      ],
      tags: [
        'GetX Controller & Workers',
        'BLoC & Cubit',
        'Provider',
        'Repository Pattern',
      ],
    },
    {
      index: 2,
      badge: 'Chapter 03 · Production Deployment',
      icon: Rocket,
      title: 'From development through to Google Play Store & Apple App Store.',
      paragraphs: [
        `Writing code is only half the battle. I take complete ownership of the release pipeline: building optimized Android App Bundles (AABs), iOS archive generation in Xcode, configuring signing keystores, handling permissions, and complying with Apple & Google store guidelines.`,
        `I optimize image assets, implement lazy loading, and resolve frame drops to guarantee that the shipped build meets store review standards and offers buttery 60fps scrolling on both platforms.`,
      ],
      tags: [
        'Google Play Console',
        'Apple App Store Connect',
        'Release Signing Keystores',
        '60 FPS Profiling',
      ],
    },
    {
      index: 3,
      badge: 'Chapter 04 · Integrations & Cloud',
      icon: PlugZap,
      title: 'Seamless REST APIs, Firebase, Payment Gateways & Maps.',
      paragraphs: [
        `Modern apps thrive on external services. I have extensive hands-on experience integrating REST APIs via Dio/Http, Firebase Authentication, Cloud Firestore real-time databases, Google Maps SDK with custom location clustering, and Razorpay payment gateways.`,
        `I also implement deep links (Firebase Dynamic Links, Universal Links), Firebase Crashlytics for production error telemetry, and FCM push notifications.`,
      ],
      tags: [
        'REST API Integration',
        'Razorpay Payment Gateway',
        'Firebase Dynamic Links',
        'FCM Push Notifications',
      ],
    },
  ];

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#030E0D]" id="about">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* LEFT: Sticky Interactive Visual Presentation Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 shadow-2xl">
              
              {/* Stacked visual container that updates per active slide */}
              <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black/60">
                
                {/* Visual View 0: Profile Portrait & Identity */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-teal-950/40 via-neutral-900 to-black transition-all duration-500 ${
                    activeSlide === 0
                      ? 'opacity-100 scale-100 pointer-events-auto z-10'
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                >
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-teal-400/50 shadow-[0_0_30px_rgba(0,201,167,0.3)] mb-5 bg-neutral-900">
                    <img
                      src="/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-teal-400 mt-1 uppercase tracking-wider font-semibold">
                    Flutter &amp; Mobile Engineer
                  </p>
                  <p className="text-xs text-white/60 mt-3 max-w-xs leading-relaxed">
                    Engineering cross-platform Android &amp; iOS experiences with high efficiency and clean architecture.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Android</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">iOS</span>
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-bold">Flutter</span>
                  </div>
                </div>

                {/* Visual View 1: State Management Mastery */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center p-7 sm:p-8 bg-gradient-to-b from-blue-950/50 via-neutral-900 to-black transition-all duration-500 ${
                    activeSlide === 1
                      ? 'opacity-100 scale-100 pointer-events-auto z-10'
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    State Management &amp; Architecture
                  </h3>
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    Proven track record architecting enterprise Flutter applications with GetX, BLoC pattern, and Provider for zero memory leaks and predictable data flows.
                  </p>

                  <div className="mt-6 space-y-2.5 font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-black/60 border border-teal-500/20 flex justify-between items-center">
                      <span className="text-teal-400 font-semibold">GetX Controller</span>
                      <span className="text-white/50 text-[11px]">Reactive UI &amp; Obx</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/60 border border-purple-500/20 flex justify-between items-center">
                      <span className="text-purple-400 font-semibold">BLoC / Cubit</span>
                      <span className="text-white/50 text-[11px]">Event Streams</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/60 border border-emerald-500/20 flex justify-between items-center">
                      <span className="text-emerald-400 font-semibold">Clean Architecture</span>
                      <span className="text-white/50 text-[11px]">Presentation / Domain / Data</span>
                    </div>
                  </div>
                </div>

                {/* Visual View 2: Store Releases & Performance */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center p-7 sm:p-8 bg-gradient-to-b from-emerald-950/50 via-neutral-900 to-black transition-all duration-500 ${
                    activeSlide === 2
                      ? 'opacity-100 scale-100 pointer-events-auto z-10'
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    End-to-End Store Deployment
                  </h3>
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    Handling complete code signing, Google Play Store AAB generation, Apple App Store Connect certificates, provisioning profiles, and compliance audits.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                    <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/20">
                      <span className="text-2xl font-bold text-emerald-400 block font-mono">100%</span>
                      <span className="text-[11px] text-white/60">Store Approval</span>
                    </div>
                    <div className="p-4 rounded-xl bg-black/60 border border-teal-500/20">
                      <span className="text-2xl font-bold text-teal-400 block font-mono">60 FPS</span>
                      <span className="text-[11px] text-white/60">Smooth Fluid UI</span>
                    </div>
                  </div>
                </div>

                {/* Visual View 3: Cloud & Native Ecosystem */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center p-7 sm:p-8 bg-gradient-to-b from-purple-950/50 via-neutral-900 to-black transition-all duration-500 ${
                    activeSlide === 3
                      ? 'opacity-100 scale-100 pointer-events-auto z-10'
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Cloud &amp; Native Ecosystem
                  </h3>
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    Seamless integration with Firebase Auth, Cloud Firestore, Google Maps SDK, Razorpay Payment Gateway, and custom Dart-to-Native platform channels.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">Firebase Auth</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">Google Maps</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">Razorpay</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">Sqflite / Hive</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">Crashlytics</span>
                  </div>
                </div>

              </div>

              {/* Quick Summary Credentials */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10 text-left">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-white/50 mb-1">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>Experience</span>
                  </div>
                  <div className="text-xl font-bold text-teal-300 font-mono">1.5+ Years</div>
                  <div className="text-[11px] text-white/60">Commercial Projects</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs text-white/50 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                    <span>Education</span>
                  </div>
                  <div className="text-xl font-bold text-teal-300 font-mono">BCA Degree</div>
                  <div className="text-[11px] text-white/60">JNVU Jodhpur</div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Clickable / Scrollable Story Chapters */}
          <div className="lg:col-span-7 space-y-6">
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              const isActive = activeSlide === chapter.index;

              return (
                <article
                  key={chapter.index}
                  onClick={() => setActiveSlide(chapter.index)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900/80 border-teal-500/50 shadow-[0_0_30px_rgba(0,201,167,0.12)]'
                      : 'bg-neutral-900/30 border-white/10 opacity-70 hover:opacity-100 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-500/20 font-mono">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{chapter.badge}</span>
                    </div>

                    <span className="text-xs font-mono text-white/40">
                      0{chapter.index + 1} / 04
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                    {chapter.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm sm:text-base text-white/70 leading-relaxed">
                    {chapter.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}

            {/* Resume Action Banner */}
            <div className="p-6 rounded-3xl border-gradient bg-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-base font-semibold text-white">
                  Interested in my complete career trajectory?
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  Review my detailed qualifications, technical credentials, and past work history.
                </p>
              </div>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-teal-400 hover:bg-teal-300 transition shrink-0 shadow-[0_0_20px_rgba(0,201,167,0.3)] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
