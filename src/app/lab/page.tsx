import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { experimentsData } from "@/data/experiments";
import { JsonLd } from "@/components/JsonLd";
import { FlaskConical, ArrowLeft, Terminal, CheckCircle2, Compass, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Lab & Research Sandbox",
  description:
    "Experimental prototypes, autonomous agent research, local AI pipelines, physical AI bridges, and Generative Engine Optimization testbeds by Haroon Shirzad.",
  alternates: {
    canonical: "https://haroonshirzad.dev/lab",
  },
};

export default function LabPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://haroonshirzad.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Lab",
        item: "https://haroonshirzad.dev/lab",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 flex flex-col justify-between">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex-grow w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyber-purple transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Flagship Overview</span>
          </Link>
        </div>

        {/* Lab Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-cyber-purple" />
            <span>AI LAB // RESEARCH LOGS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            AI Laboratory & Experimental Testbeds
          </h1>
          <p className="mt-3 text-base text-slate-400 font-mono max-w-3xl leading-relaxed">
            Hands-on prototypes, empirical learnings, and hypotheses exploring autonomous multi-agent loops, Claude Code workflows, edge voice systems, and physical robotics.
          </p>
        </div>

        {/* Experiments Matrix */}
        <div className="space-y-8">
          {experimentsData.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-white/10 hover:border-cyber-purple/40 shadow-glass backdrop-blur-md space-y-6 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-cyber-purple font-bold">
                    EXP_VECTOR://0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 uppercase">
                    {exp.category}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-300 border border-white/10">
                  {exp.status}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white font-display mb-2">
                  {exp.title}
                </h2>
                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs font-mono text-purple-200">
                  <strong className="text-white block mb-1">Core Hypothesis:</strong>
                  {exp.hypothesis}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyber-purple" />
                  Overview & Methodology
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.overview}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                  Empirical Findings & Learnings
                </h3>
                <div className="space-y-2">
                  {exp.learnings.map((learning, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-surface-50/60 border border-white/5 text-xs text-slate-300 font-mono flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple shrink-0 mt-1.5" />
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyber-cyan" />
                  Next Target & Roadmap
                </h3>
                <p className="text-xs font-mono text-slate-300 bg-surface-50/40 p-3 rounded-lg border border-white/5">
                  {exp.futureRoadmap}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
