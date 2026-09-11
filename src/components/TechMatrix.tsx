"use client";

import React, { useState } from "react";
import { technologiesData } from "@/data/technologies";
import { TechCategory } from "@/types";
import { Cpu, Code2, Cloud, Sparkles, Workflow, Bot, ShieldCheck, Terminal } from "lucide-react";

export const TechMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | "all">("all");

  const categoryConfigs: { id: TechCategory | "all"; label: string; icon: any }[] = [
    { id: "all", label: "All Stacks", icon: Cpu },
    { id: "ai", label: "AI & Machine Intelligence", icon: Bot },
    { id: "dev", label: "Development & Mobile", icon: Code2 },
    { id: "cloud", label: "Backend & Cloud", icon: Cloud },
    { id: "automation", label: "Automation & Workflows", icon: Workflow },
    { id: "models", label: "AI Models & Gateways", icon: Sparkles },
  ];

  const filteredTech =
    selectedCategory === "all"
      ? technologiesData
      : technologiesData.filter((t) => t.category === selectedCategory);

  return (
    <section id="technologies" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES // 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            AI & Engineering Technology Matrix
          </h2>
          <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
            Core frameworks, foundation models, mobile toolkits, and automation engines actively used in production and research prototypes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categoryConfigs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-cyber-cyan text-slate-950 font-bold shadow-neon-cyan"
                    : "bg-surface-card hover:bg-surface-50 text-slate-300 border border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface-card border border-white/10 hover:border-cyber-cyan/40 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-surface-50 border border-white/10 text-slate-400">
                    {tech.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">
                    {tech.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {tech.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 mt-2">
                <div className="flex items-start gap-1.5 text-[11px] font-mono text-cyan-300/80">
                  <Terminal className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-400">Application:</strong> {tech.useCaseInPortfolio}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-12 p-4 rounded-xl bg-surface-50/40 border border-white/5 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
          <p className="text-xs font-mono text-slate-400 leading-normal">
            <strong>Framework & Model Integration Note:</strong> All models (OpenAI, Google Gemini, DeepSeek, Anthropic Claude) and frameworks are used as developer API integrations and research platforms. No claims of corporate sponsorship, official certification, or corporate affiliation.
          </p>
        </div>
      </div>
    </section>
  );
};
