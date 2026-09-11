"use client";

import React from "react";
import { nowBuildingData } from "@/data/nowBuilding";
import { Radar, Radio, ArrowUpRight, Sparkles, Activity } from "lucide-react";

export const NowBuildingSection: React.FC = () => {
  return (
    <section id="exploring" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-emerald/30 text-emerald-300 text-xs font-mono mb-3">
              <Radio className="w-3.5 h-3.5 text-cyber-emerald animate-pulse" />
              <span>RADAR // 05</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Currently Exploring & Building
            </h2>
            <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
              Real-time engineering sprints, emerging research vectors, and technical hypotheses currently on the workbench.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-slate-400 bg-surface-card px-3 py-1.5 rounded-lg border border-white/5">
            <Activity className="w-3.5 h-3.5 text-cyber-emerald animate-spin" />
            <span>Telemetry: 5 Active Research Vectors</span>
          </div>
        </div>

        {/* Radar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nowBuildingData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-surface-card border border-white/10 hover:border-cyber-emerald/40 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.focusArea}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
                    {item.statusBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {item.topic}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3 rounded-xl bg-surface-50/70 border border-white/5 mb-4 space-y-1 text-xs font-mono">
                  <div className="text-[10px] text-slate-500 uppercase">Current Stage:</div>
                  <div className="text-slate-300">{item.currentStage}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-3">
                <div className="text-[11px] font-mono text-emerald-300/90 flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyber-emerald shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-400">Next Target:</strong> {item.nextMilestone}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.techTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
