import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projectsData } from "@/data/projects";
import { JsonLd } from "@/components/JsonLd";
import { Code2, ArrowLeft, ArrowRight, Layers, Eye, Sparkles, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & System Architectures",
  description:
    "Explore AI-powered mobile applications, multi-model systems, Flutter graphics, and research concepts built by Haroon Shirzad.",
  alternates: {
    canonical: "https://haroonshirzad.dev/projects",
  },
};

export default function ProjectsPage() {
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
        name: "Projects",
        item: "https://haroonshirzad.dev/projects",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 flex flex-col justify-between">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex-grow w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Flagship Overview</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>PROJECT CATALOG // FULL MATRIX</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Systems, Applications & Research Blueprints
          </h1>
          <p className="mt-3 text-base text-slate-400 font-mono max-w-3xl leading-relaxed">
            Detailed inspection of real-world Flutter mobile applications, multi-provider AI model routers, 2D arcade physics, and humanitarian/clinical concepts.
          </p>
        </div>

        {/* Projects Full Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-surface-card border border-white/10 hover:border-cyber-cyan/40 shadow-glass backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-surface-50 border border-white/10 text-slate-300">
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

                <h2 className="text-xl font-bold text-white font-display mb-1">
                  {project.title}
                </h2>
                {project.nativeTitle && (
                  <span lang="fa" dir="rtl" className="inline-block mb-2 px-2 py-0.5 rounded text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {project.nativeTitle}
                  </span>
                )}

                <p className="text-xs font-mono text-cyan-300 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features Highlights */}
                <div className="space-y-1.5 mb-4">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0 mt-1" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-950 bg-cyber-cyan hover:bg-sky-400 transition-colors shadow-neon-cyan"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect System Deep Dive</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
