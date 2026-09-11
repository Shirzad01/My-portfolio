"use client";

import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { Mail, Github, Linkedin, Twitter, Send, Copy, Check, Terminal, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    // Uses the email placeholder or direct string
    navigator.clipboard.writeText(personalData.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Interactive feedback simulation without external service dependency
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TRANSMISSION CHANNEL // 08</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Initiate Connection
          </h2>
          <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
            Interested in AI agent architectures, Flutter engineering, research collaborations, or technical discussions?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-white/10 shadow-glass backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyber-cyan" />
                Direct Channels & Coordinates
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Open to technical collaborations, open-source AI agent tooling, and high-impact engineering projects.
              </p>

              {/* Email Block with Copy */}
              <div className="p-4 rounded-xl bg-surface-50 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Email Dispatch
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-cyber-cyan truncate font-semibold">
                    {personalData.socialLinks.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-surface-100 hover:bg-surface-200 text-slate-200 border border-white/10 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Placeholders List */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Network Profiles (Configured Placeholders)
                </span>

                <div className="grid grid-cols-1 gap-2">
                  <div className="p-3 rounded-lg bg-surface-50/70 border border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Github className="w-4 h-4 text-slate-400" />
                      GitHub
                    </span>
                    <span className="text-slate-400 text-[11px]">{personalData.socialLinks.github}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-50/70 border border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Linkedin className="w-4 h-4 text-slate-400" />
                      LinkedIn
                    </span>
                    <span className="text-slate-400 text-[11px]">{personalData.socialLinks.linkedin}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-surface-50/70 border border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Twitter className="w-4 h-4 text-slate-400" />
                      Twitter / X
                    </span>
                    <span className="text-slate-400 text-[11px]">{personalData.socialLinks.twitter}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-cyber-cyan/30 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyber-cyan" />
                  <span className="text-xs font-mono text-slate-300">SECURE_TRANSMISSION_FORM</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyan-300 border border-cyber-cyan/20">
                  Ready
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-surface-50/80 border border-cyber-emerald/40 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/40 flex items-center justify-center mx-auto text-cyber-emerald">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">Transmission Recorded</h4>
                  <p className="text-xs font-mono text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Haroon will review your dispatch and respond to your provided coordinates.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-lg text-xs font-mono bg-surface-100 hover:bg-surface-200 text-slate-200 border border-white/10"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Identity / Name <span className="text-cyber-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Turing"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-50 border border-white/10 focus:border-cyber-cyan text-xs font-mono text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Return Coordinates / Email <span className="text-cyber-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-50 border border-white/10 focus:border-cyber-cyan text-xs font-mono text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Agent Architecture / Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-50 border border-white/10 focus:border-cyber-cyan text-xs font-mono text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message Content <span className="text-cyber-cyan">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your inquiry, project vision, or question..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-50 border border-white/10 focus:border-cyber-cyan text-xs font-mono text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-cyber-cyan hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs shadow-neon-cyan transition-all transform active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
