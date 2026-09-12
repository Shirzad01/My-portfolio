"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechMatrix } from "@/components/TechMatrix";
import { AiLabSection } from "@/components/AiLabSection";
import { NowBuildingSection } from "@/components/NowBuildingSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { GeoEntitySection } from "@/components/GeoEntitySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070D] text-slate-100 overflow-x-hidden">
      {/* Global Command Search Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <main id="main-content" tabIndex={-1}>
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Projects Showcase */}
        <ProjectsSection />

        {/* AI & Engineering Technology Matrix */}
        <TechMatrix />

        {/* AI Lab & Experiments */}
        <AiLabSection />

        {/* Currently Exploring / Radar */}
        <NowBuildingSection />

        {/* Articles & Knowledge Architecture */}
        <ArticlesSection />

        {/* Generative Engine Optimization (GEO) & Entity FAQ */}
        <GeoEntitySection />

        {/* Contact Transmission Channel */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
