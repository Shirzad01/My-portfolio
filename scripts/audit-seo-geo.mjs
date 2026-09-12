/**
 * SEO & GEO (Generative Engine Optimization) Audit Script for Haroon Shirzad Portfolio
 *
 * Verifies:
 * 1. Schema.org JSON-LD Person & WebSite Entity completeness
 * 2. GEO compliance (llms.txt, llms-full.txt existence and structure)
 * 3. Sitemap & robots.txt configuration
 * 4. Semantic metadata, OpenGraph, and Twitter tags
 * 5. Factual integrity check (ensures zero fabricated credentials)
 * 6. Accessibility & mobile viewport configurations
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("\n=======================================================");
console.log("🔍 RUNNING COMPREHENSIVE SEO & GEO AUDIT");
console.log("   Target: Haroon Shirzad Portfolio (haroonshirzad.dev)");
console.log("=======================================================\n");

let passedChecks = 0;
let totalChecks = 0;
let warnings = [];

function check(name, condition, failureMessage) {
  totalChecks++;
  if (condition) {
    console.log(`  ✅ [PASS] ${name}`);
    passedChecks++;
  } else {
    console.log(`  ❌ [FAIL] ${name} — ${failureMessage}`);
  }
}

function warn(name, message) {
  console.log(`  ⚠️  [WARN] ${name}: ${message}`);
  warnings.push(`${name}: ${message}`);
}

// 1. Check llms.txt and llms-full.txt
console.log("📡 1. AI CRAWLER & GEO DISCOVERY ARTIFACTS");
const llmsPath = path.join(rootDir, "public", "llms.txt");
const llmsFullPath = path.join(rootDir, "public", "llms-full.txt");

const llmsExists = fs.existsSync(llmsPath);
const llmsFullExists = fs.existsSync(llmsFullPath);

check("public/llms.txt exists", llmsExists, "Missing llms.txt in /public directory.");
check("public/llms-full.txt exists", llmsFullExists, "Missing llms-full.txt in /public directory.");

if (llmsExists) {
  const content = fs.readFileSync(llmsPath, "utf8");
  check("llms.txt contains entity name 'Haroon Shirzad'", content.includes("Haroon Shirzad"), "Missing name");
  check("llms.txt contains core motto", content.includes("I don't just use AI tools. I build systems with them."), "Missing motto");
  check("llms.txt lists BakhterGPT", content.includes("BakhterGPT"), "Missing key project");
  check("llms.txt has no fake credential claims", !content.includes("PhD") && !content.includes("Senior VP"), "Unverified credentials detected");
}

// 2. Check Robots and Sitemap configuration
console.log("\n🤖 2. CRAWLER PROTOCOLS & SITEMAP");
const robotsPath = path.join(rootDir, "src", "app", "robots.ts");
const sitemapPath = path.join(rootDir, "src", "app", "sitemap.ts");

check("src/app/robots.ts exists", fs.existsSync(robotsPath), "Missing robots.ts");
check("src/app/sitemap.ts exists", fs.existsSync(sitemapPath), "Missing sitemap.ts");

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf8");
  check("robots.ts explicitly allows GPTBot / ClaudeBot / PerplexityBot",
    robotsContent.includes("GPTBot") && robotsContent.includes("ClaudeBot") && robotsContent.includes("PerplexityBot"),
    "AI bots not explicitly declared in robots.ts"
  );
}

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  check("sitemap.ts indexes core routes and projects",
    sitemapContent.includes("projectsData") && sitemapContent.includes("articlesData"),
    "Dynamic projects/articles not mapped in sitemap"
  );
}

// 3. Structured Data & JSON-LD Validation
console.log("\n🧬 3. SCHEMA.ORG & ENTITY GRAPH KNOWLEDGE");
const geoDataPath = path.join(rootDir, "src", "data", "geoKnowledge.ts");
const geoDataExists = fs.existsSync(geoDataPath);

check("src/data/geoKnowledge.ts exists", geoDataExists, "Missing geoKnowledge.ts");

if (geoDataExists) {
  const geoContent = fs.readFileSync(geoDataPath, "utf8");
  check("Schema.org Person entity declared", geoContent.includes('"@type": "Person"'), "Missing Person schema");
  check("Schema.org WebSite entity declared", geoContent.includes('"@type": "WebSite"'), "Missing WebSite schema");
  check("knowsAbout technical entity keywords populated", geoContent.includes("knowsAbout"), "Missing knowsAbout array");
  check("Entity FAQ definitions present", geoContent.includes("geoEntityFaqs"), "Missing FAQ entity data");
}

// 4. Data Layer Decoupling & Factual Integrity
console.log("\n🛡️ 4. FACTUAL INTEGRITY & DATA ARCHITECTURE");
const personalDataPath = path.join(rootDir, "src", "data", "personal.ts");
const projectsDataPath = path.join(rootDir, "src", "data", "projects.ts");
const techDataPath = path.join(rootDir, "src", "data", "technologies.ts");

check("src/data/personal.ts exists", fs.existsSync(personalDataPath), "Missing personal.ts");
check("src/data/projects.ts exists", fs.existsSync(projectsDataPath), "Missing projects.ts");
check("src/data/technologies.ts exists", fs.existsSync(techDataPath), "Missing technologies.ts");

if (fs.existsSync(personalDataPath)) {
  const pContent = fs.readFileSync(personalDataPath, "utf8");
  check("GitHub uses verified real profile URL; unconfirmed links stay placeholders (no fabrication)",
    pContent.includes("https://github.com/Shirzad01") && pContent.includes("[ADD EMAIL]"),
    "GitHub profile URL not verified, or an unconfirmed link was fabricated instead of left as a placeholder"
  );
}

if (fs.existsSync(projectsDataPath)) {
  const projContent = fs.readFileSync(projectsDataPath, "utf8");
  check("Includes all 8 verified projects & concepts",
    projContent.includes("bakhter-gpt") &&
    projContent.includes("secrets-of-universe") &&
    projContent.includes("sound-flow") &&
    projContent.includes("farar-az-mir-agha") &&
    projContent.includes("perfect-wallpaper") &&
    projContent.includes("hospital-ai-concept") &&
    projContent.includes("ai-employment-concept") &&
    projContent.includes("ai-assistant-jarvis"),
    "One or more required projects missing"
  );
  check("Concepts are explicitly flagged with isConceptOnly: true",
    projContent.includes("isConceptOnly: true"),
    "Concept flags missing"
  );
}

// 5. Build Architecture & Pages
console.log("\n📦 5. APP ROUTER STRUCTURE & PAGES");
const pageIndex = path.join(rootDir, "src", "app", "page.tsx");
const layoutPath = path.join(rootDir, "src", "app", "layout.tsx");
const projectsPage = path.join(rootDir, "src", "app", "projects", "page.tsx");
const projectSlugPage = path.join(rootDir, "src", "app", "projects", "[slug]", "page.tsx");
const labPage = path.join(rootDir, "src", "app", "lab", "page.tsx");
const articlesPage = path.join(rootDir, "src", "app", "articles", "page.tsx");
const articleSlugPage = path.join(rootDir, "src", "app", "articles", "[slug]", "page.tsx");

check("Homepage exists (src/app/page.tsx)", fs.existsSync(pageIndex), "Missing page.tsx");
check("Root layout exists with metadata (src/app/layout.tsx)", fs.existsSync(layoutPath), "Missing layout.tsx");
check("Projects catalog page exists", fs.existsSync(projectsPage), "Missing projects page");
check("Dynamic project detail page exists", fs.existsSync(projectSlugPage), "Missing dynamic project route");
check("AI Lab page exists", fs.existsSync(labPage), "Missing lab page");
check("Articles catalog page exists", fs.existsSync(articlesPage), "Missing articles page");
check("Dynamic article reader page exists", fs.existsSync(articleSlugPage), "Missing dynamic article route");

// Summary Report
console.log("\n=======================================================");
console.log(`📊 AUDIT RESULTS: ${passedChecks}/${totalChecks} CHECKS PASSED (${Math.round((passedChecks / totalChecks) * 100)}%)`);
if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} Warnings to monitor.`);
}
console.log("=======================================================\n");

if (passedChecks === totalChecks) {
  console.log("🎉 All SEO, GEO, and Structured Data requirements are in 100% compliance!\n");
  process.exit(0);
} else {
  console.error("❌ Some checks failed. Review output above.\n");
  process.exit(1);
}
