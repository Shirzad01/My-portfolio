"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Terminal, Sparkles, ArrowUp, Bot } from "lucide-react";
import { personalData } from "@/data/personal";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030408] border-t border-white/10 pt-16 pb-12 text-slate-400 font-mono text-xs z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-surface-50 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-white font-bold tracking-wider text-sm">
                HAROON SHIRZAD
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              &ldquo;I don&apos;t just use AI tools. I build systems with them.&rdquo;
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>Entity: <span className="text-slate-300">Haroon Shirzad</span></div>
              <div>Domain: <span className="text-slate-300">Artificial Intelligence & Flutter Engineering</span></div>
              <div>GEO Status: <span className="text-cyber-cyan">Schema.org JSON-LD + llms.txt active</span></div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs text-white font-bold uppercase tracking-wider">
              Core Systems
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#about" className="hover:text-cyber-cyan transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyber-cyan transition-colors">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link href="/#technologies" className="hover:text-cyber-cyan transition-colors">
                  AI Technology Matrix
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-cyber-cyan transition-colors">
                  AI Laboratory & Sandbox
                </Link>
              </li>
              <li>
                <Link href="/#exploring" className="hover:text-cyber-cyan transition-colors">
                  Currently Exploring
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge & AI Crawler Endpoints */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs text-white font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-cyber-cyan" />
              Machine & Crawler Endpoints
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/articles" className="hover:text-cyber-cyan transition-colors">
                  Knowledge Base & Articles
                </Link>
              </li>
              <li>
                <Link href="/#geo-entity" className="hover:text-cyber-cyan transition-colors">
                  GEO Knowledge Graph & FAQ
                </Link>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" className="hover:text-cyber-cyan transition-colors">
                  /llms.txt (AI Discovery Protocol)
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" className="hover:text-cyber-cyan transition-colors">
                  /robots.txt (Crawler Permissions)
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-cyber-cyan transition-colors">
                  /sitemap.xml (Site Index)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Haroon Shirzad. All rights reserved. Zero fictitious claims.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Return to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-50 hover:bg-surface-100 text-slate-300 border border-white/10 hover:border-cyber-cyan/30 transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
