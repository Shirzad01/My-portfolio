import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { articlesData } from "@/data/articles";
import { JsonLd } from "@/components/JsonLd";
import { ArrowLeft, Clock, Calendar, User, Tag, BookOpen, Share2, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Haroon Shirzad",
    };
  }

  return {
    title: `${article.title} | Haroon Shirzad`,
    description: article.summary,
    alternates: {
      canonical: `https://haroonshirzad.dev/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://haroonshirzad.dev/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["Haroon Shirzad"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: "Haroon Shirzad",
      url: "https://haroonshirzad.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Haroon Shirzad",
      url: "https://haroonshirzad.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://haroonshirzad.dev/articles/${article.slug}`,
    },
    keywords: article.tags.join(", "),
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
        name: "Articles",
        item: "https://haroonshirzad.dev/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://haroonshirzad.dev/articles/${article.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-slate-100 flex flex-col justify-between">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex-grow w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyber-blue transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Articles & Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/10 shadow-glass backdrop-blur-md mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full uppercase bg-sky-500/10 text-sky-300 border border-sky-500/20">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{article.readingTimeMinutes} min read</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono">
            {article.summary}
          </p>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <div className="w-7 h-7 rounded-full bg-cyber-blue/20 border border-cyber-blue/40 flex items-center justify-center text-cyber-blue font-bold">
                HS
              </div>
              <div>
                <span className="text-white font-semibold block">{article.author.name}</span>
                <span className="text-[10px] text-slate-400">{article.author.role}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-50 text-slate-400 border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <article className="p-8 sm:p-12 rounded-3xl bg-surface-card border border-white/10 shadow-glass backdrop-blur-md space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="space-y-6 whitespace-pre-line font-sans">
            {article.contentMarkdown}
          </div>

          {/* Author Signature */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="text-xs font-mono text-slate-400">
              Written by <strong className="text-white">Haroon Shirzad</strong> — AI Developer & Builder
            </div>
            <Link
              href="/#contact"
              className="text-xs font-mono text-cyber-cyan hover:underline"
            >
              Discuss this article →
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
