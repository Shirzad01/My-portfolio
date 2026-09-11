"use client";

import React, { useState } from "react";
import { geoEntityFaqs, geoEntityGraph } from "@/data/geoKnowledge";
import { Bot, Search, Copy, Check, Terminal, Share2, Sparkles, Database } from "lucide-react";

export const GeoEntitySection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedJson, setCopiedJson] = useState(false);

  const handleCopyFaq = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyJsonLd = () => {
    navigator.clipboard.writeText(JSON.stringify(geoEntityGraph, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <section id="geo-entity" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>GEO & MACHINE INTELLIGENCE // 07</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Generative Engine Optimization (GEO) Knowledge Fabric
            </h2>
            <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
              Deterministic, machine-readable entity definitions crafted for AI search systems, answer engines, and LLM crawlers.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <button
              onClick={handleCopyJsonLd}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyber-cyan bg-surface-card hover:bg-surface-50 border border-cyber-cyan/30 transition-colors"
            >
              {copiedJson ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedJson ? "JSON-LD Copied" : "Copy Schema.org JSON-LD"}</span>
            </button>
          </div>
        </div>

        {/* Entity Knowledge Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Entity List (Left) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Entity Questions for Generative Engines
            </div>

            {geoEntityFaqs.map((faq, idx) => {
              const isActive = activeFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFaq(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? "bg-surface-100 border-cyber-cyan shadow-neon-cyan"
                      : "bg-surface-card border-white/5 hover:border-white/20 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono text-cyber-cyan font-semibold flex items-center gap-1.5">
                      <Search className="w-3 h-3" />
                      Q{idx + 1}: {faq.question}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyFaq(faq.answer, idx);
                      }}
                      title="Copy exact entity answer"
                      aria-label="Copy exact entity answer"
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-cyber-emerald" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {faq.answer}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {faq.semanticEntities.slice(0, 4).map((ent, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-400 border border-white/5"
                      >
                        #{ent}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Entity Inspector & LLM Crawler Overview */}
          <div className="lg:col-span-6 space-y-6">
            {/* Active Selected FAQ Detail */}
            <div className="p-6 rounded-2xl bg-surface-card border border-cyber-cyan/30 shadow-2xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  Semantic Answer Extract
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Zero Hallucination Grounding
                </span>
              </div>

              <h3 className="text-base font-bold text-white font-display">
                {geoEntityFaqs[activeFaq].question}
              </h3>

              <div className="p-4 rounded-xl bg-surface-50/70 border border-white/5 text-xs font-mono text-slate-200 leading-relaxed">
                {geoEntityFaqs[activeFaq].answer}
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">
                  Grounding Entity Nodes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {geoEntityFaqs[activeFaq].semanticEntities.map((ent, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-cyber-cyan/10 text-cyan-300 border border-cyber-cyan/20 text-xs font-mono"
                    >
                      {ent}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Crawler Files Overview (llms.txt, robots.txt, Schema.org) */}
            <div className="p-6 rounded-2xl bg-surface-card border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                AI Crawler & Discovery Protocols
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="p-3 rounded-xl bg-surface-50 border border-white/10 hover:border-cyber-cyan/40 block transition-colors group"
                >
                  <div className="text-cyber-cyan font-bold flex items-center justify-between mb-1">
                    <span>/llms.txt</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Structured markdown summary for AI answer engines & LLMs.</p>
                </a>

                <a
                  href="/robots.txt"
                  target="_blank"
                  className="p-3 rounded-xl bg-surface-50 border border-white/10 hover:border-cyber-cyan/40 block transition-colors group"
                >
                  <div className="text-cyber-cyan font-bold flex items-center justify-between mb-1">
                    <span>/robots.txt</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Permits PerplexityBot, GPTBot, ClaudeBot, and search bots.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
