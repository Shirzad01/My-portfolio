export type ProjectType = 'production' | 'evolving' | 'game' | 'concept' | 'experimental';

export type TechCategory = 'ai' | 'dev' | 'cloud' | 'automation' | 'models';

export interface Project {
  id: string;
  slug: string;
  title: string;
  nativeTitle?: string; // e.g. for Dari/Persian "فرار از میر آغا"
  type: ProjectType;
  category: 'AI & Agents' | 'Flutter & Mobile' | 'Concepts & Research' | 'Games & Graphics';
  tagline: string;
  description: string;
  fullOverview: string;
  architectureBreakdown?: string[];
  features: string[];
  techStack: string[];
  modelsOrAPIs?: string[];
  status: 'Active Evolution' | 'Completed Concept' | 'Experimental Prototype' | 'Shipped Application';
  isConceptOnly: boolean;
  demoUrl?: string; // '[ADD DEMO URL]' placeholder if unverified
  repoUrl?: string; // '[ADD GITHUB URL]' placeholder
  highlightQuote?: string;
  statsOrMetrics?: { label: string; value: string }[];
}

export interface TechnologyItem {
  name: string;
  category: TechCategory;
  categoryLabel: string;
  level: 'Core Focus' | 'Active Exploration' | 'Integration Stack';
  description: string;
  useCaseInPortfolio: string;
  icon?: string;
}

export interface Experiment {
  id: string;
  title: string;
  status: 'In Development' | 'Active Research' | 'Concept Proof' | 'Prototype Stage';
  category: 'AI Agents' | 'Physical AI & Robotics' | 'Local AI & Voice' | 'GEO & AI Search' | 'Multi-Model Systems';
  hypothesis: string;
  overview: string;
  learnings: string[];
  technologies: string[];
  futureRoadmap: string;
}

export interface NowBuildingItem {
  id: string;
  topic: string;
  focusArea: string;
  currentStage: string;
  statusBadge: 'Active Sprint' | 'Deep Research' | 'Iterating Architecture' | 'Prototyping';
  description: string;
  nextMilestone: string;
  techTags: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  contentMarkdown: string;
  category: 'Artificial Intelligence' | 'Flutter' | 'AI Agents' | 'Automation' | 'GEO & AI Search';
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readingTimeMinutes: number;
  isDraftOrPlaceholder: boolean;
}

export interface GeoEntityFaq {
  question: string;
  answer: string;
  semanticEntities: string[];
}
