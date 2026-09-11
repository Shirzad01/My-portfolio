import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { articlesData } from "@/data/articles";
import { JsonLd } from "@/components/JsonLd";
import { BookOpen, ArrowLeft, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Knowledge Base & Technical Writing | Haroon Shirzad",
  description:
    "Engineering write-ups, architectural frameworks, and insights into multi-model AI, Flutter, and Generative Engine Optimization by Haroon Shirzad.",
  alternates: {
    canonical: "https://haroonshirzad.dev/articles",
  },
};

export default function ArticlesPage() {
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
        name: "Articles",
        item: "https://haroonshirzad.dev/articles",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 flex flex-col justify-between">
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex-grow w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyber-blue transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Flagship Overview</span>
          </Link>
        </div>

        {/* Knowledge Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-blue/30 text-sky-300 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyber-blue" />
            <span>KNOWLEDGE ARCHITECTURE // ARTICLES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Engineering Insights & Articles
          </h1>
          <p className="mt-3 text-base text-slate-400 font-mono max-w-3xl leading-relaxed">
            Architectural frameworks, performance optimization guides, and reflections on building multi-model mobile AI and GEO-ready web systems.
          </p>
        </div>

        {/* Notice about draft / placeholder state */}
        <div className="mb-10 p-4 rounded-xl bg-surface-50/50 border border-white/10 flex items-center gap-3 text-xs font-mono text-slate-400">
          <Sparkles className="w-4 h-4 text-cyber-blue shrink-0" />
          <span>
            <strong>Architectural Foundation:</strong> This blog system is engineered with full SEO metadata, Schema.org Article JSON-LD, tags, and reading times for scalable technical publishing.
          </span>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group p-6 rounded-2xl bg-surface-card border border-white/10 hover:border-cyber-blue/40 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readingTimeMinutes} min read</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-cyber-blue transition-colors font-display mb-2">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-auto space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="text-cyber-blue group-hover:translate-x-1 transition-transform">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
