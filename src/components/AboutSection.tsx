"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { Cpu, ShieldCheck, Zap, Compass, CheckCircle2, Terminal } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>SYSTEM OVERVIEW // 01</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            About Haroon Shirzad
          </h2>
          <p className="mt-2 text-base text-slate-400 font-mono">
            Bridging conceptual AI intelligence with resilient software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-white/10 shadow-glass backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
                The Builder Mindset
              </h3>

              {personalData.bioLong.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Factual Integrity Badge */}
              <div className="mt-6 pt-6 border-t border-white/10 flex items-start gap-3 bg-surface-50/40 p-4 rounded-xl border border-white/5">
                <ShieldCheck className="w-5 h-5 text-cyber-emerald shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-normal">
                  <strong className="text-slate-200">Factual Authenticity Commitment:</strong> This portfolio reflects real code, actual architectural prototypes, and genuine technical explorations. No fictitious credentials, fabricated enterprise clients, or exaggerated metrics.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalData.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-card/70 border border-white/5 hover:border-cyber-cyan/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-cyber-cyan">0{idx + 1}.</span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyber-cyan transition-colors">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Technical Interests & Radar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-white/10 shadow-glass backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-display">
                <Zap className="w-4 h-4 text-cyber-cyan" />
                Key Focus & Technical Interests
              </h3>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Core areas of active engineering, research, and hands-on system development:
              </p>

              <div className="flex flex-wrap gap-2">
                {personalData.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-50 border border-white/10 hover:border-cyber-cyan/50 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyber-cyan" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-100/80 to-surface-card border border-cyber-cyan/20 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">Identity Vector</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  Verified Entity
                </span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Entity Name:</span>
                  <span className="text-white font-medium">Haroon Shirzad</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Primary Domain:</span>
                  <span className="text-white font-medium">AI Systems & Flutter</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Key Paradigm:</span>
                  <span className="text-white font-medium">Multi-Model Agent Loops</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-cyber-emerald flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse" />
                    Actively Building
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
