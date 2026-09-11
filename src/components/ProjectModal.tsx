"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, ExternalLink, Github, Layers, Cpu, CheckCircle2, ShieldAlert, Sparkles, Terminal } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-card border border-cyber-cyan/30 shadow-2xl shadow-black/80 p-6 sm:p-8 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-surface-50 border border-white/10 hover:border-cyber-cyan/40 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
              {project.category}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded text-[11px] font-mono ${
                project.isConceptOnly
                  ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                  : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {project.status}
            </span>
            {project.nativeTitle && (
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                {project.nativeTitle}
              </span>
            )}
          </div>

          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {project.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base font-mono text-cyan-300">
            {project.tagline}
          </p>
        </div>

        {/* Concept Disclaimer if applicable */}
        {project.isConceptOnly && (
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <p>
              <strong>Concept Notice:</strong> This entry represents an architectural concept, research blueprint, or UI design exploration. It is not presented as an officially deployed commercial platform or sponsored institutional partnership.
            </p>
          </div>
        )}

        {/* Full Overview */}
        <div>
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
            System Overview & Purpose
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Highlight Quote */}
        {project.highlightQuote && (
          <div className="p-4 rounded-xl bg-surface-50/70 border-l-2 border-cyber-cyan text-xs font-mono text-slate-300 italic">
            &ldquo;{project.highlightQuote}&rdquo;
          </div>
        )}

        {/* System Architecture Breakdown */}
        {project.architectureBreakdown && project.architectureBreakdown.length > 0 && (
          <div>
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyber-cyan" />
              Technical Architecture Breakdown
            </h3>
            <div className="space-y-2">
              {project.architectureBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface-50/50 border border-white/5 text-xs text-slate-300 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div>
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
            Core Capabilities & Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-surface-50/30 p-2 rounded border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0 mt-1.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack & Models */}
        <div className="space-y-3 pt-2 border-t border-white/10">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">Technologies Used:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-surface-50 border border-white/10 text-xs font-mono text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.modelsOrAPIs && project.modelsOrAPIs.length > 0 && (
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">AI Models & APIs Integrated:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.modelsOrAPIs.map((model, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/30 text-xs font-mono text-cyan-300">
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions / Links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="text-slate-400 text-[11px]">
            {project.demoUrl ? (
              <span>Demo Status: <strong className="text-slate-300">{project.demoUrl}</strong></span>
            ) : (
              <span>Architecture Model Verified</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/10 text-slate-300 transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
