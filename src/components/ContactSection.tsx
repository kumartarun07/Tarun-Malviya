import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Send,
  Download,
  Copy,
  Check,
  MessageSquarePlus,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
  onShowToast,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Full-Time Flutter Developer Role',
    message: '',
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    const subject = encodeURIComponent(
      `[${formData.type}] Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Tarun,\n\nMy name is ${formData.name} (${formData.email}).\n\nI am contacting you regarding: ${formData.type}\n\nProject / Role Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    onShowToast(`Thank you ${formData.name}! Launching your mail client...`);

    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-28 relative border-t border-white/[0.06] bg-gradient-to-b from-[#030E0D] via-neutral-950 to-black"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl border-gradient bg-neutral-900/40 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
          
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-6 font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Inquire</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Let's build something exceptional together.
          </h2>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a dedicated Flutter developer for a full-time role, a robust cross-platform MVP built from scratch, or an existing mobile app upgraded for store release — let's connect!
          </p>

          {/* Contact Methods Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            
            {/* Card 1: Email */}
            <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition cursor-pointer"
                  title="Copy email"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs text-white/50 block">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-semibold text-white group-hover:text-teal-300 break-all transition-colors mt-0.5 inline-block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Card 2: Phone / WhatsApp */}
            <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone number')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'Phone number' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs text-white/50 block">Call / WhatsApp</span>
                <a
                  href={`tel:${PERSONAL_INFO.rawPhone}`}
                  className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors mt-0.5 inline-block font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Card 3: LinkedIn */}
            <div className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition"
                  title="Open LinkedIn in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="text-xs text-white/50 block">LinkedIn Profile</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-white group-hover:text-teal-300 transition-colors mt-0.5 inline-block"
                >
                  {PERSONAL_INFO.linkedinHandle}
                </a>
              </div>
            </div>

          </div>

          {/* Direct Interactive Message Form */}
          <div className="max-w-xl mx-auto mb-10 p-6 sm:p-8 rounded-3xl bg-black/50 border border-white/10 text-left shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <MessageSquarePlus className="w-4 h-4 text-teal-400" />
              <span>Drop a Direct Message</span>
            </h3>
            <p className="text-xs text-white/50 mb-5">
              Fill out the message below to send directly to Tarun's inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sender-name"
                    className="block text-xs font-medium text-white/70 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sender-email"
                    className="block text-xs font-medium text-white/70 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project-type"
                  className="block text-xs font-medium text-white/70 mb-1.5"
                >
                  Opportunity / Project Type
                </label>
                <select
                  id="project-type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white/90 text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition"
                >
                  <option value="Full-Time Flutter Developer Role">Full-Time Flutter Developer Role</option>
                  <option value="Contract / Freelance Mobile App">Contract / Freelance Mobile App</option>
                  <option value="Google Play Store / Apple App Store Deployment">Google Play Store / Apple App Store Deployment</option>
                  <option value="State Architecture & Code Audit">State Architecture &amp; Code Audit</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="sender-message"
                  className="block text-xs font-medium text-white/70 mb-1.5"
                >
                  Message / Project Scope
                </label>
                <textarea
                  id="sender-message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your app goals, timeline, or open role..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-teal-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 font-semibold text-xs sm:text-sm text-white transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,201,167,0.25)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Tarun</span>
              </button>
            </form>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Flutter%20Developer%20Opportunity%20-%20Tarun%20Malviya`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 shadow-[0_0_30px_rgba(0,201,167,0.35)] transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Direct Email Client</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white/90 bg-white/5 hover:bg-white/10 border-gradient hover:text-white transition transform hover:-translate-y-0.5 backdrop-blur-xl cursor-pointer"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Download Resume PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
