"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Cpu, Menu, X, Search, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Tech Matrix", href: "/#technologies" },
    { name: "AI Lab", href: "/#ai-lab" },
    { name: "Exploring", href: "/#exploring" },
    { name: "Articles", href: "/#articles" },
    { name: "GEO & Entity", href: "/#geo-entity" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070D]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan rounded-md"
        >
          <div className="w-9 h-9 rounded-lg bg-surface-50 border border-border-glow flex items-center justify-center text-cyber-cyan shadow-neon-cyan group-hover:border-cyber-cyan transition-colors">
            <Cpu className="w-5 h-5 text-accent-primary animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-wider text-slate-100 flex items-center gap-2">
              HAROON SHIRZAD
              <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wide">
              AI DEVELOPER & BUILDER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-cyber-cyan hover:bg-white/5 rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Search (Ctrl+K)"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-400 bg-surface-50/70 hover:bg-surface-100 border border-white/10 hover:border-cyber-cyan/40 rounded-lg transition-all"
          >
            <Search className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 border border-white/10 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Direct CTA */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-900 bg-cyber-cyan hover:bg-sky-400 rounded-lg shadow-neon-cyan transition-all transform active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-slate-400 hover:text-white bg-surface-50/50 border border-white/10 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette?.();
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono text-slate-300 bg-surface-100 border border-white/10 rounded-lg"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>Search Portfolio & Lab</span>
              </span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 border border-white/10 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-mono text-slate-300 hover:text-cyber-cyan hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-white/5 flex gap-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-mono font-medium text-slate-900 bg-cyber-cyan hover:bg-sky-400 rounded-lg transition-colors"
            >
              Initiate Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
