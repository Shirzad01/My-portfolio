"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";
import { technologiesData } from "@/data/technologies";
import { experimentsData } from "@/data/experiments";
import { articlesData } from "@/data/articles";
import { Search, X, Code2, Cpu, FlaskConical, BookOpen, ArrowRight, Terminal } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search results across collections
  const matchedProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(normalizedQuery) ||
      p.description.toLowerCase().includes(normalizedQuery) ||
      p.techStack.some((t) => t.toLowerCase().includes(normalizedQuery))
  );

  const matchedTech = technologiesData.filter(
    (t) =>
      t.name.toLowerCase().includes(normalizedQuery) ||
      t.description.toLowerCase().includes(normalizedQuery)
  );

  const matchedExperiments = experimentsData.filter(
    (e) =>
      e.title.toLowerCase().includes(normalizedQuery) ||
      e.hypothesis.toLowerCase().includes(normalizedQuery)
  );

  const matchedArticles = articlesData.filter(
    (a) =>
      a.title.toLowerCase().includes(normalizedQuery) ||
      a.summary.toLowerCase().includes(normalizedQuery)
  );

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Search"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-surface-card border border-cyber-cyan/30 shadow-2xl shadow-black/90 p-4 sm:p-6 overflow-hidden space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="relative flex items-center border-b border-white/10 pb-3">
          <Search className="w-5 h-5 text-cyber-cyan mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, technologies, experiments, or articles..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results scroll list */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1 text-xs font-mono">
          {/* Projects results */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyber-cyan" />
                Projects ({matchedProjects.length})
              </div>
              <div className="space-y-1.5">
                {matchedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelect(`/projects/${p.slug}`)}
                    className="p-2.5 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/5 hover:border-cyber-cyan/30 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-white font-semibold flex items-center gap-2">
                        {p.title}
                        {p.nativeTitle && (
                          <span className="text-[10px] text-purple-300">({p.nativeTitle})</span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-md">{p.tagline}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Lab Experiments results */}
          {matchedExperiments.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-cyber-purple" />
                AI Lab Experiments ({matchedExperiments.length})
              </div>
              <div className="space-y-1.5">
                {matchedExperiments.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => handleSelect(`/lab`)}
                    className="p-2.5 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/5 hover:border-cyber-purple/30 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-white font-semibold">{e.title}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-md">{e.hypothesis}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles results */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyber-blue" />
                Articles & Knowledge ({matchedArticles.length})
              </div>
              <div className="space-y-1.5">
                {matchedArticles.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => handleSelect(`/articles/${a.slug}`)}
                    className="p-2.5 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/5 hover:border-cyber-blue/30 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="text-white font-semibold">{a.title}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-md">{a.summary}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies results */}
          {matchedTech.length > 0 && (
            <div>
              <div className="text-[10px] uppercase text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyber-emerald" />
                Technologies ({matchedTech.length})
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {matchedTech.slice(0, 6).map((t, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelect(`/#technologies`)}
                    className="p-2 rounded-lg bg-surface-50 hover:bg-surface-100 border border-white/5 cursor-pointer text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-[10px] text-slate-400">{t.categoryLabel}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchedProjects.length === 0 &&
            matchedExperiments.length === 0 &&
            matchedArticles.length === 0 &&
            matchedTech.length === 0 && (
              <div className="py-8 text-center text-slate-500 font-mono">
                No matching systems or artifacts found for &ldquo;{query}&rdquo;.
              </div>
            )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-500">
          <span>Navigate with mouse or enter</span>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-50 border border-white/10">ESC to close</kbd>
        </div>
      </div>
    </div>
  );
};
