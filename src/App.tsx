import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkCarousel } from './components/WorkCarousel';
import { ProjectGrid } from './components/ProjectGrid';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#030E0D] text-white selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden font-sans">
      
      {/* Interactive Background Canvas & Ambient Spline Glow */}
      <div
        className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden pointer-events-none opacity-60"
        style={{
          maskImage:
            'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,185,160,0.18)_0%,transparent_65%)]" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-teal-900/10 rounded-full blur-3xl" />
      </div>

      {/* Main Top Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <WorkCarousel onSelectProject={(project) => setSelectedProject(project)} />
        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />
        <AboutSection onOpenResume={() => setResumeOpen(true)} />
        <SkillsSection />
        <ExperienceSection />
        <ProcessSection />
        <ContactSection
          onOpenResume={() => setResumeOpen(true)}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenResume={() => {
          setSelectedProject(null);
          setResumeOpen(true);
        }}
      />

      {/* Live Resume Preview & Download Drawer/Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Feedback Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-2xl bg-teal-950/95 border border-teal-400/50 text-teal-200 text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
