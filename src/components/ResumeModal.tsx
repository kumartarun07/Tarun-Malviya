import React, { useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-white/20 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-neutral-950/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-bold text-white font-mono">
              TARUN_MALVIYA_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Tarun_Malviya.pdf"
              download="Tarun_Malviya_Flutter_Developer.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold transition shadow-[0_0_15px_rgba(0,201,167,0.3)] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-neutral-900 text-neutral-100 font-sans selection:bg-teal-500/30">
          <div className="max-w-3xl mx-auto bg-[#080d0c] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            
            {/* Header info */}
            <div className="border-b border-white/15 pb-6 mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-medium text-teal-400 mt-1 font-mono">
                {PERSONAL_INFO.role} | {PERSONAL_INFO.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs text-white/70 font-mono">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.linkedinHandle}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-wider text-teal-400 uppercase font-mono mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-6 border-t border-white/10 pt-5">
              <h2 className="text-xs font-bold tracking-wider text-teal-400 uppercase font-mono mb-3">
                TECHNICAL SKILLS
              </h2>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Mobile Development:</span>
                  <span className="sm:col-span-8 text-white/75">
                    Flutter, Dart, Cross-Platform App Development, Mobile UI/UX, Material 3, Cupertino
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">State Management:</span>
                  <span className="sm:col-span-8 text-white/75">
                    GetX, Bloc, Provider, Cubit, Clean Architecture
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Backend &amp; APIs:</span>
                  <span className="sm:col-span-8 text-white/75">
                    REST API Integration, Firebase Authentication, Cloud Firestore, FCM Push Notifications
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Database &amp; Storage:</span>
                  <span className="sm:col-span-8 text-white/75">
                    Sqflite, Hive, Local Storage / Data Persistence, Shared Preferences
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Tools &amp; Deployment:</span>
                  <span className="sm:col-span-8 text-white/75">
                    Git, GitHub, Android Studio, Google Maps API, Google Play Store Deployment, Apple App Store Deployment, Cursor, Antigravity, Emergent
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Payment Gateways:</span>
                  <span className="sm:col-span-8 text-white/75">Razorpay</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Deep Linking:</span>
                  <span className="sm:col-span-8 text-white/75">Firebase Dynamic Links, App Links &amp; Universal Links</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-semibold text-white/90">Analytics &amp; Monitoring:</span>
                  <span className="sm:col-span-8 text-white/75">Firebase Analytics, Crashlytics</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-6 border-t border-white/10 pt-5">
              <h2 className="text-xs font-bold tracking-wider text-teal-400 uppercase font-mono mb-4">
                PROFESSIONAL EXPERIENCE
              </h2>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white">
                    Flutter Developer | Next Big Technology (NBT)
                  </h3>
                  <span className="text-xs font-mono text-white/60">
                    Nov 2024 – Mar 2026
                  </span>
                </div>

                {/* Sub-projects */}
                <div className="space-y-4 mt-3">
                  <div>
                    <h4 className="text-xs font-semibold text-teal-300 italic mb-1.5">
                      Real Estate Mobile Application
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-white/75 pl-1 leading-relaxed">
                      <li>Built core platform features in Flutter and GetX, including property search and filtering, dynamic listings, and Google Maps–based location browsing.</li>
                      <li>Integrated Firebase Authentication and REST APIs to support secure user sign-in and live property data; added push notifications for listing updates.</li>
                      <li>Optimized app performance for both Android and iOS ahead of production release; deployed the application to Google Play Store and Apple App Store.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-teal-300 italic mb-1.5">
                      Talento India — Job Portal App
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-white/75 pl-1 leading-relaxed">
                      <li>Implemented job listing and search functionality in Flutter using GetX, backed by REST API integration for real-time job data.</li>
                      <li>Built real-time chat functionality using Firebase, enabling direct communication between users on the platform.</li>
                      <li>Added Firebase Authentication for account management and contributed UI performance improvements ahead of publishing to Play Store and App Store.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-teal-300 italic mb-1.5">
                      Verona In Tour — Tourism App
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-xs text-white/75 pl-1 leading-relaxed">
                      <li>Developed the tourism application in Flutter and GetX, integrating REST APIs to deliver dynamic tour and destination content.</li>
                      <li>Managed application data flow and optimized performance for a smooth cross-platform user experience; deployed to Play Store and App Store.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic & Featured Projects */}
            <div className="mb-6 border-t border-white/10 pt-5">
              <h2 className="text-xs font-bold tracking-wider text-teal-400 uppercase font-mono mb-3">
                KEY ACADEMIC &amp; FEATURED PROJECTS
              </h2>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-bold text-white">Expense Tracker App</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-white/75 pl-1 mt-1 leading-relaxed">
                    <li>Built an offline-first expense management app in Flutter using the Bloc pattern for state management and Sqflite for local data persistence.</li>
                    <li>Implemented analytics graphs to visualize spending patterns for users without requiring an internet connection.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white">Wallpaper App</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-white/75 pl-1 mt-1 leading-relaxed">
                    <li>Developed a Flutter application integrating a third-party API for wallpaper search, preview, and download.</li>
                    <li>Implemented device wallpaper setup functionality (home screen / lock screen) directly from within the app using native platform channels.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="border-t border-white/10 pt-5">
              <h2 className="text-xs font-bold tracking-wider text-teal-400 uppercase font-mono mb-2">
                EDUCATION
              </h2>
              <div className="text-xs sm:text-sm text-white/85">
                <span className="font-bold text-white">Bachelor of Computer Application (BCA)</span>
                <span className="text-white/60"> — Jai Narayan Vyas University, Jodhpur (2019)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-neutral-950/80">
          <span className="text-xs text-white/50">
            Official CV formatted for mobile development &amp; tech recruitment
          </span>

          <a
            href="/Tarun_Malviya.pdf"
            download="Tarun_Malviya_Flutter_Developer.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-400 hover:bg-teal-300 text-black text-xs font-bold transition shadow-[0_0_15px_rgba(0,201,167,0.3)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
