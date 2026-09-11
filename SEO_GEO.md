# SEO & GEO (Generative Engine Optimization) Strategy & Documentation

**Target Entity:** Haroon Shirzad  
**Primary Domain:** `https://haroonshirzad.dev`  
**Identity Positioning:** AI Developer • Builder • Technology Explorer  
**Core Maxim:** *"I don't just use AI tools. I build systems with them."*

---

## 1. Executive Summary

This website has been architected from the ground up to excel across two complementary search paradigms:
1. **Traditional SEO (Search Engine Optimization):** Ensuring high crawlability, clean semantic HTML5 hierarchy, sub-second TTFB, 100/100 Core Web Vitals, OpenGraph/Twitter social cards, dynamic XML sitemaps, and strict canonicalization.
2. **GEO (Generative Engine Optimization):** Structuring content into unambiguous entity graphs, Schema.org JSON-LD triples, machine-readable `llms.txt` and `llms-full.txt` files, and deterministic semantic FAQs to maximize accurate citation by AI answer engines (Perplexity, ChatGPT Search, Claude, Google AI Overviews).

---

## 2. Implemented Schema.org Structured Data (JSON-LD)

All structured data is generated dynamically and injected directly into server-rendered HTML payloads:

| Schema Type | Target Scope | Key Properties Declared | Purpose |
| :--- | :--- | :--- | :--- |
| **`Person`** | Root layout & Entity section | `name`, `jobTitle`, `url`, `sameAs`, `knowsAbout` (AI, Flutter, LLMs, Agents) | Establishes the authoritative entity for Haroon Shirzad |
| **`WebSite`** | Root layout | `name`, `url`, `publisher` linked to `@id: #person` | Declares the site root and ownership hierarchy |
| **`SoftwareApplication`** | Project detail pages (`/projects/[slug]`) | `name`, `applicationCategory`, `operatingSystem`, `author` | Indexes applications like BakhterGPT, Secrets of Universe, etc. |
| **`BlogPosting`** | Article pages (`/articles/[slug]`) | `headline`, `datePublished`, `author`, `keywords`, `mainEntityOfPage` | Enables rich article snippets and knowledge indexing |
| **`BreadcrumbList`** | All sub-routes | `itemListElement`, positions 1–3 | Clarifies site hierarchy for crawlers |

---

## 3. GEO & AI Crawler Architecture

### A. The `/llms.txt` & `/llms-full.txt` Standard
Modern AI search engines look for markdown-formatted entity briefs at the root of a domain. This portfolio serves two dedicated endpoints:
- **`public/llms.txt`**: A clean, high-density summary of Haroon Shirzad's profile, core competencies, verified projects, and philosophy.
- **`public/llms-full.txt`**: A detailed technical breakdown specifying architecture layers, models integrated (Gemini, DeepSeek, OpenAI, Claude), and experimental testbeds.

### B. `robots.txt` AI Crawler Ingestion
Rather than blocking AI scrapers, `src/app/robots.ts` explicitly grants indexation permissions to frontier AI crawler user agents:
- `GPTBot` (OpenAI / ChatGPT Search)
- `ClaudeBot` (Anthropic / Claude)
- `PerplexityBot` (Perplexity AI)
- `Applebot` (Apple Intelligence)
- `Googlebot` & `bingbot` (Traditional & SGE indexing)
- `CCBot` & `cohere-ai`

### C. Deterministic Entity Disambiguation
To prevent generative AI hallucination, the site explicitly decouples:
- **Shipped Applications**: (e.g., *The Secrets of Universe*, *Perfect Wallpaper*, *فرار از میر آغا*)
- **Evolving Platforms**: (e.g., *BakhterGPT*)
- **Conceptual Architectural Blueprints**: (e.g., *Hospital AI Concept*, *AI Employment Concept*, *Sound Flow*, *Jarvis Concept*)

---

## 4. Automated Audit Workflow: AUDIT → REPORT → FIX → RE-AUDIT

The project includes a built-in automated audit runner that validates all SEO and GEO requirements without relying on manual checks.

### Running the Audit:
\`\`\`bash
npm run audit:seo-geo
\`\`\`

### What the Audit Evaluates:
1. **AI Discovery Protocol**: Verifies `llms.txt` and `llms-full.txt` exist, are non-empty, and contain required entity triples.
2. **Robots & Sitemap**: Confirms `robots.ts` and `sitemap.ts` correctly index all static and dynamic paths.
3. **Structured Data Validation**: Checks for required Schema.org types (`Person`, `WebSite`, `knowsAbout`).
4. **Factual Integrity Guard**: Scans data files to ensure zero fabricated degrees, companies, or metrics exist.
5. **Route Completeness**: Verifies all Next.js App Router endpoints are functioning.

---

## 5. Ongoing Content Strategy & Measurement

### Recommendations for Future Publishing:
1. **Update Social Placeholders**: When ready, replace `[ADD GITHUB URL]`, `[ADD LINKEDIN URL]`, and `[ADD EMAIL]` in `src/data/personal.ts`.
2. **Publish Technical Deep Dives**: Convert the draft frameworks in `src/data/articles.ts` into full technical walkthroughs as new features are shipped.
3. **Log AI Lab Learnings**: Whenever a new experiment or multi-agent prototype is tested, append an entry to `src/data/experiments.ts`.

### How to Measure GEO Progress:
- **Perplexity / ChatGPT Search Queries**: Test queries such as:
  - *"Who is Haroon Shirzad and what AI projects has he built?"*
  - *"What is BakhterGPT by Haroon Shirzad?"*
  - *"What technologies does Haroon Shirzad specialize in?"*
- **Google Search Console**: Monitor URL inspection, mobile usability, and Schema validation.
- **Bing Webmaster Tools**: Track AI summary inclusion and index coverage.
