import { TechnologyItem } from "@/types";

export const technologiesData: TechnologyItem[] = [
  // AI & Machine Intelligence
  {
    name: "Generative AI & LLMs",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "Core Focus",
    description: "Designing end-to-end architectures utilizing state-of-the-art Large Language Models for reasoning, generation, and multimodal data extraction.",
    useCaseInPortfolio: "Integrated across BakhterGPT, Jarvis Concept, and experimental agent loops."
  },
  {
    name: "Autonomous AI Agents",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "Core Focus",
    description: "Building tool-using, multi-step autonomous agent pipelines capable of decomposing complex goals into deterministic execution steps.",
    useCaseInPortfolio: "Core architecture in the Jarvis AI Assistant and Hospital AI workflow concept."
  },
  {
    name: "Computer Vision",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "Core Focus",
    description: "Multimodal image understanding, optical document analysis, and visual feature extraction using vision foundation models and custom pipelines.",
    useCaseInPortfolio: "Multimodal image query processing in BakhterGPT and diagnostic vision in Hospital AI."
  },
  {
    name: "Voice AI & Speech Interfaces",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "Core Focus",
    description: "Real-time speech-to-text transcription, streaming audio synthesis, and conversational voice interaction loops.",
    useCaseInPortfolio: "Voice conversational layer in BakhterGPT, Jarvis Concept, and Employment Intake AI."
  },
  {
    name: "Prompt Engineering & RAG",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "Core Focus",
    description: "System prompt optimization, few-shot conditioning, structured JSON outputs, semantic retrieval, and contextual groundings.",
    useCaseInPortfolio: "Context management across educational and conversational Flutter applications."
  },
  {
    name: "AI APIs & Gateway Integration",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "Core Focus",
    description: "Unified SDK abstractions, token usage optimization, rate-limit resilience, and streaming response handlers.",
    useCaseInPortfolio: "Multi-provider switching in BakhterGPT."
  },

  // Software Engineering & Mobile
  {
    name: "Flutter",
    category: "dev",
    categoryLabel: "Development",
    level: "Core Focus",
    description: "Cross-platform mobile application development with 60fps animations, custom UI components, and reactive architecture.",
    useCaseInPortfolio: "Primary framework for BakhterGPT, Secrets of Universe, Sound Flow, Perfect Wallpaper, and 2D games."
  },
  {
    name: "Dart",
    category: "dev",
    categoryLabel: "Development",
    level: "Core Focus",
    description: "Strongly-typed object-oriented programming, asynchronous streams, isolates, and native platform channel bridges.",
    useCaseInPortfolio: "Core language for all Flutter mobile and custom graphics applications."
  },
  {
    name: "Python",
    category: "dev",
    categoryLabel: "Development",
    level: "Core Focus",
    description: "Backend scripting, AI agent prototyping, API orchestration, and data pipeline automation.",
    useCaseInPortfolio: "Jarvis AI assistant backend and automation workflows."
  },
  {
    name: "JavaScript / TypeScript",
    category: "dev",
    categoryLabel: "Development",
    level: "Integration Stack",
    description: "Modern asynchronous web engineering, Node.js tooling, and type-safe frontend/backend API interfaces.",
    useCaseInPortfolio: "Portfolio architecture, Next.js web applications, and webhook handler functions."
  },

  // Backend & Cloud Infrastructure
  {
    name: "Google Firebase",
    category: "cloud",
    categoryLabel: "Backend & Cloud",
    level: "Core Focus",
    description: "Authentication systems, cloud storage buckets, remote configuration, and mobile client synchronization.",
    useCaseInPortfolio: "User authentication and real-time state management in BakhterGPT."
  },
  {
    name: "Cloud Firestore",
    category: "cloud",
    categoryLabel: "Backend & Cloud",
    level: "Core Focus",
    description: "NoSQL document database architecture with real-time listener streams and offline persistence.",
    useCaseInPortfolio: "Persistent chat history, user preferences, and educational message indexing in BakhterGPT."
  },
  {
    name: "REST APIs & WebSockets",
    category: "cloud",
    categoryLabel: "Backend & Cloud",
    level: "Core Focus",
    description: "Designing and consuming resilient RESTful endpoints, streaming JSON responses, and event-driven sockets.",
    useCaseInPortfolio: "All external API connectors across astronomy, wallpaper, and AI applications."
  },

  // Automation & Workflows
  {
    name: "n8n Automation",
    category: "automation",
    categoryLabel: "Automation",
    level: "Core Focus",
    description: "Self-hosted and cloud workflow automation, connecting disparate services with conditional branching and AI sub-nodes.",
    useCaseInPortfolio: "Autonomous notifications, multi-system synchronization, and intelligent task routing."
  },
  {
    name: "AI Workflow Engineering",
    category: "automation",
    categoryLabel: "Automation",
    level: "Core Focus",
    description: "Chaining LLM calls, decision trees, validation loops, and structured output parsing to automate complex workflows.",
    useCaseInPortfolio: "Automating data extraction, summarization, and content pipeline distribution."
  },
  {
    name: "Webhooks & Event Handlers",
    category: "automation",
    categoryLabel: "Automation",
    level: "Core Focus",
    description: "Real-time event capture, payload verification, retry queues, and asynchronous event distribution.",
    useCaseInPortfolio: "Connecting mobile triggers with backend cloud actions and automation bots."
  },

  // AI Providers & Models
  {
    name: "Google Gemini",
    category: "models",
    categoryLabel: "AI Providers / Models",
    level: "Active Exploration",
    description: "Gemini Pro and Flash multimodal APIs utilized for high-throughput reasoning, large context windows, and visual inspection.",
    useCaseInPortfolio: "Multimodal and text queries in BakhterGPT."
  },
  {
    name: "DeepSeek",
    category: "models",
    categoryLabel: "AI Providers / Models",
    level: "Active Exploration",
    description: "Utilizing DeepSeek-V3 and DeepSeek-R1 reasoning models for algorithmic problem solving and structured logic extraction.",
    useCaseInPortfolio: "Reasoning and code/math assistance in BakhterGPT."
  },
  {
    name: "OpenAI Models",
    category: "models",
    categoryLabel: "AI Providers / Models",
    level: "Active Exploration",
    description: "GPT-4o, GPT-4o-mini, and Whisper models for conversational fidelity, tool calling, and audio transcription.",
    useCaseInPortfolio: "Foundation models in BakhterGPT and experimental assistants."
  },
  {
    name: "Anthropic / Claude",
    category: "models",
    categoryLabel: "AI Providers / Models",
    level: "Active Exploration",
    description: "Claude 3.5 Sonnet / Opus / Haiku models for nuanced instruction following, agentic tool use, and Claude Code workflows.",
    useCaseInPortfolio: "Autonomous development experimentation and complex agentic reasoning."
  },
  {
    name: "OpenRouter & Model Gateways",
    category: "models",
    categoryLabel: "AI Providers / Models",
    level: "Active Exploration",
    description: "Unified multi-model API aggregation, fallback routing, and latency/cost optimization across frontier models.",
    useCaseInPortfolio: "Dynamic failover routing in multi-provider apps."
  }
];
