"use client";

import React, { useState } from "react";
import Link from "next/link";
import { experimentsData } from "@/data/experiments";
import { FlaskConical, Terminal, ArrowUpRight, Cpu, CheckCircle2, Compass, Layers } from "lucide-react";

export const AiLabSection: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<string>(experimentsData[0].id);

  const currentExperiment =
    experimentsData.find((e) => e.id === selectedExp) || experimentsData[0];

  return (
    <section id="ai-lab" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-cyber-purple" />
              <span>RESEARCH SANDBOX // 04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              AI Lab & Experimental Prototypes
            </h2>
            <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
              An active technology laboratory exploring autonomous agents, Claude Code workflows, local AI voice pipelines, physical robotics, and GEO architecture.
            </p>
          </div>

          <Link
            href="/lab"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono text-cyber-purple hover:text-purple-300 transition-colors group"
          >
            <span>Explore Full Lab Logs</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Interactive Lab Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Experiment Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 px-1">
              Active Testbeds ({experimentsData.length})
            </div>

            {experimentsData.map((exp) => {
              const isSelected = exp.id === selectedExp;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? "bg-surface-100 border-cyber-purple shadow-neon-purple"
                      : "bg-surface-card border-white/5 hover:border-white/20 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface-50 border border-white/10 text-purple-300">
                      {exp.category}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-display mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {exp.hypothesis}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Lab Detail Terminal View */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-card border border-cyber-purple/30 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  LAB_EXPERIMENT://{currentExperiment.id}
                </span>
              </div>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                {currentExperiment.status}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                {currentExperiment.title}
              </h3>
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs font-mono text-purple-200">
                <strong className="text-white block mb-1">Working Hypothesis:</strong>
                {currentExperiment.hypothesis}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyber-purple" />
                Overview & Methodology
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentExperiment.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                Key Empirical Learnings
              </h4>
              <div className="space-y-2">
                {currentExperiment.learnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-surface-50/60 border border-white/5 text-xs text-slate-300 font-mono flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple shrink-0 mt-1.5" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyber-cyan" />
                Next Architectural Iteration
              </h4>
              <p className="text-xs font-mono text-slate-400 bg-surface-50/40 p-3 rounded-lg border border-white/5">
                {currentExperiment.futureRoadmap}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {currentExperiment.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
