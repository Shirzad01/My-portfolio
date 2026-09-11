"use client";

import React from "react";
import Link from "next/link";
import { articlesData } from "@/data/articles";
import { BookOpen, ArrowRight, Clock, Tag, Calendar, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-24 relative z-10 bg-[#05070D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-50 border border-cyber-blue/30 text-sky-300 text-xs font-mono mb-3">
              <BookOpen className="w-3.5 h-3.5 text-cyber-blue" />
              <span>KNOWLEDGE BASE // 06</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Technical Writing & Insights Architecture
            </h2>
            <p className="mt-2 text-base text-slate-400 font-mono max-w-2xl">
              In-depth engineering write-ups, architectural blueprints, and reflections on multi-model AI, Flutter, and GEO.
            </p>
          </div>

          <Link
            href="/articles"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono text-cyber-blue hover:text-sky-300 transition-colors group"
          >
            <span>View All Knowledge Artifacts</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                <h3 className="text-lg font-bold text-white group-hover:text-cyber-blue transition-colors font-display mb-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.slice(0, 3).map((tag, idx) => (
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
                  <span className="text-cyber-blue group-hover:translate-x-0.5 transition-transform">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
