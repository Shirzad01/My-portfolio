"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";
import {
  Code2,
  Sparkles,
  Bot,
  ExternalLink,
  Layers,
  ArrowRight,
  Gamepad2,
  Cpu,
  Eye,
  Info
} from "lucide-react";

type CategoryFilter = "All" | "AI & Agents" | "Flutter & Mobile" | "Concepts & Research" | "Games & Graphics";

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "AI & Agents",
    "Flutter & Mobile",
    "Concepts & Research",
    "Games & Graphics"
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>SYSTEM ARTIFACTS // 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Featured Projects & Systems
            </h2>
            <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
              Real-world Flutter apps, multi-model AI architectures, game graphics, and research concepts.
            </p>
          </div>

          <Link
            href="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan hover:text-sky-300 transition-colors group"
          >
            <span>View Complete Project Matrix</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-cyber-cyan text-slate-950 font-bold shadow-neon-cyan"
                  : "bg-surface-card hover:bg-surface-50 text-slate-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-surface-card border border-white/10 hover:border-cyber-cyan/40 p-6 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-surface-50 border border-white/10 text-slate-300">
                    {project.category}
                  </span>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      project.isConceptOnly
                        ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                        : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Native Title */}
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors font-display">
                    {project.title}
                  </h3>
                  {project.nativeTitle && (
                    <span lang="fa" dir="rtl" className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {project.nativeTitle}
                    </span>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-xs font-mono text-cyan-300/90 mb-3">
                  {project.tagline}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* AI Models or Special tags if present */}
                {project.modelsOrAPIs && project.modelsOrAPIs.length > 0 && (
                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                      Models Integrated:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.modelsOrAPIs.slice(0, 3).map((m, i) => (
                        <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyber-cyan/5 text-cyber-cyan border border-cyber-cyan/20">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Tech tags + Inspect button */}
              <div className="pt-4 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 bg-surface-50 hover:bg-surface-100 hover:text-white border border-white/10 hover:border-cyber-cyan/40 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>Inspect System Architecture</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
