"use client";

import React from "react";
import Link from "next/link";
import { NeuralCanvas } from "./NeuralCanvas";
import { ArrowRight, Bot, Code2, Sparkles, Terminal, Layers, Compass } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-gradient">
      {/* Background Interactive Neural Particle Canvas */}
      <div className="absolute inset-0 z-0">
        <NeuralCanvas className="w-full h-full" />
      </div>

      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-border-glow shadow-glass backdrop-blur-md mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
          </span>
          <span className="font-mono text-xs text-slate-300 tracking-wide">
            AI Ecosystem Builder & Mobile Engineer
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="block font-display">Haroon Shirzad</span>
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-mono font-medium text-gradient-cyan">
            AI Developer • Builder • Technology Explorer
          </span>
        </h1>

        {/* Core Philosophy Banner */}
        <div className="my-5 px-6 py-2.5 rounded-xl bg-surface-50/60 border border-cyber-cyan/30 backdrop-blur-md inline-block max-w-2xl">
          <p className="text-sm sm:text-base font-mono text-cyan-300 font-semibold tracking-wide">
            &ldquo;I don&apos;t just use AI tools. I build systems with them.&rdquo;
          </p>
        </div>

        {/* Supporting Narrative */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-sans">
          Building practical AI-powered applications, architecting multi-model agent systems, engineering cross-platform Flutter experiences, and turning experimental technology ideas into working software.
        </p>

        {/* Strong CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <Link
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-mono font-semibold text-slate-950 bg-cyber-cyan hover:bg-sky-400 rounded-xl shadow-neon-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono text-slate-200 bg-surface-card hover:bg-surface-50 border border-white/10 hover:border-cyber-cyan/40 rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4 text-cyber-cyan" />
            <span>About Me</span>
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 rounded-xl transition-all"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Interactive Quick Focus Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 w-full max-w-4xl text-left">
          <div className="p-3.5 rounded-xl bg-surface-card/60 border border-white/5 hover:border-cyber-cyan/30 backdrop-blur-sm transition-colors">
            <div className="flex items-center gap-2 text-cyber-cyan mb-1">
              <Bot className="w-4 h-4" />
              <span className="font-mono text-xs font-semibold text-slate-200">AI Agents & LLMs</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">Multi-model routing, prompt pipelines & autonomous loops</p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-card/60 border border-white/5 hover:border-cyber-cyan/30 backdrop-blur-sm transition-colors">
            <div className="flex items-center gap-2 text-cyber-blue mb-1">
              <Code2 className="w-4 h-4" />
              <span className="font-mono text-xs font-semibold text-slate-200">Flutter & Mobile</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">60fps CustomPainter, reactive state & native channels</p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-card/60 border border-white/5 hover:border-cyber-cyan/30 backdrop-blur-sm transition-colors">
            <div className="flex items-center gap-2 text-cyber-purple mb-1">
              <Layers className="w-4 h-4" />
              <span className="font-mono text-xs font-semibold text-slate-200">Automation & n8n</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">Event-driven webhooks & AI-assisted operational flows</p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-card/60 border border-white/5 hover:border-cyber-cyan/30 backdrop-blur-sm transition-colors">
            <div className="flex items-center gap-2 text-cyber-emerald mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs font-semibold text-slate-200">Physical & Voice AI</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">Computer vision, audio tokens & hardware bridges</p>
          </div>
        </div>
      </div>
    </section>
  );
};
