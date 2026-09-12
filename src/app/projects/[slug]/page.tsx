import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projectsData } from "@/data/projects";
import { JsonLd } from "@/components/JsonLd";
import {
  ArrowLeft,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  Terminal,
  Cpu,
  ExternalLink,
  Code2
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — System Architecture & Details`,
    description: project.description,
    alternates: {
      canonical: `https://haroonshirzad.dev/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Haroon Shirzad`,
      description: project.description,
      url: `https://haroonshirzad.dev/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: "Flutter / Cross-Platform / Mobile",
    description: project.description,
    author: {
      "@type": "Person",
      name: "Haroon Shirzad",
      url: "https://haroonshirzad.dev",
    },
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://haroonshirzad.dev/projects/${project.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 flex flex-col justify-between">
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" tabIndex={-1} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex-grow w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Projects Matrix</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/10 shadow-glass backdrop-blur-md mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-surface-50 border border-white/10 text-cyber-cyan">
              {project.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono ${
                project.isConceptOnly
                  ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                  : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
              }`}
            >
              {project.status}
            </span>
            {project.nativeTitle && (
              <span lang="fa" dir="rtl" className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                {project.nativeTitle}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-cyan-300 max-w-3xl">
            {project.tagline}
          </p>

          {project.statsOrMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {project.statsOrMetrics.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-surface-50/50 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">{stat.label}</span>
                  <span className="text-sm font-bold font-mono text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Concept Disclaimer if applicable */}
        {project.isConceptOnly && (
          <div className="mb-10 p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3.5 text-amber-200 text-xs">
            <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
            <div className="space-y-1">
              <strong className="text-amber-300 text-sm block">System Architecture / Concept Notice</strong>
              <p className="leading-relaxed">
                This entry documents a conceptual system architecture, research design, or UI exploration. It is not presented as an officially deployed commercial platform or sponsored institutional deployment.
              </p>
            </div>
          </div>
        )}

        {/* Deep Overview */}
        <div className="space-y-10">
          <section className="p-8 rounded-2xl bg-surface-card border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
              Comprehensive System Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>

            {project.highlightQuote && (
              <div className="mt-4 p-4 rounded-xl bg-surface-50/80 border-l-2 border-cyber-cyan text-xs font-mono text-slate-300 italic">
                &ldquo;{project.highlightQuote}&rdquo;
              </div>
            )}
          </section>

          {/* Architecture Breakdown */}
          {project.architectureBreakdown && (
            <section className="p-8 rounded-2xl bg-surface-card border border-white/10 space-y-4">
              <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyber-cyan" />
                Technical Architecture & Implementation Details
              </h2>
              <div className="space-y-3">
                {project.architectureBreakdown.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface-50/60 border border-white/5 flex items-start gap-3 text-xs sm:text-sm font-mono text-slate-300">
                    <Terminal className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Core Features */}
          <section className="p-8 rounded-2xl bg-surface-card border border-white/10 space-y-4">
            <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-emerald" />
              Engineered Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface-50/40 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyber-emerald shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack & Foundation Models */}
          <section className="p-8 rounded-2xl bg-surface-card border border-white/10 space-y-6">
            <div>
              <h3 className="text-sm font-bold font-mono text-slate-400 uppercase tracking-wider mb-3">
                Frameworks & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-surface-50 border border-white/10 text-xs font-mono text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.modelsOrAPIs && (
              <div>
                <h3 className="text-sm font-bold font-mono text-slate-400 uppercase tracking-wider mb-3">
                  AI Models & Gateway Endpoints
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.modelsOrAPIs.map((model, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-xs font-mono text-cyan-300">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
