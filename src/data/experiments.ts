import { Experiment } from "@/types";

export const experimentsData: Experiment[] = [
  {
    id: "exp-autonomous-agents",
    title: "Multi-Agent Collaboration & Tool-Use Sandbox",
    status: "Active Research",
    category: "AI Agents",
    hypothesis: "Can specialized lightweight agents out-perform a single monolithic prompt when executing multi-step development and research tasks?",
    overview: "Investigating multi-agent orchestration frameworks where specialized roles (Planner, Researcher, Code Generator, Critic/Validator) collaborate with shared memory to complete complex multi-step technical objectives.",
    learnings: [
      "Rigid sequential agent loops often degrade if validation gates are loose; explicit JSON contracts between agents reduce hallucination rates significantly.",
      "Giving agents isolated sub-tools rather than a massive monolithic toolset improves precision and token efficiency."
    ],
    technologies: ["Autonomous Agents", "Python", "Claude API", "Tool Calling", "JSON Schema Validation"],
    futureRoadmap: "Implementing dynamic DAG (Directed Acyclic Graph) task schedulers with self-healing execution loops."
  },
  {
    id: "exp-claude-code-workflows",
    title: "Autonomous Developer Workflows with Claude Code & CLI",
    status: "Active Research",
    category: "AI Agents",
    hypothesis: "How can terminal-native agentic tools transform full-stack engineering velocity through headless command execution and automated test loops?",
    overview: "Exploration of developer velocity using autonomous CLI coding agents. Testing automated codebase inspection, multi-file refactoring pipelines, continuous lint-fix loops, and self-validating test runners.",
    learnings: [
      "Agentic coding succeeds best when projects maintain clean modular separation and strong type boundaries.",
      "Providing structured project memory and strict error-trace feedback loops accelerates autonomous debugging."
    ],
    technologies: ["Claude Code", "CLI Automation", "Bash Scripting", "TypeScript", "Automated Testing"],
    futureRoadmap: "Building custom MCP (Model Context Protocol) servers to bridge local IDE tools directly to AI reasoning agents."
  },
  {
    id: "exp-geo-ai-search",
    title: "Generative Engine Optimization (GEO) & Machine Entity Mapping",
    status: "In Development",
    category: "GEO & AI Search",
    hypothesis: "How do generative search engines (Perplexity, ChatGPT Search, Claude, Google SGE) parse, evaluate, and cite developer portfolios compared to traditional crawlers?",
    overview: "Rigorous experimentation with structured machine-readable knowledge formats: Schema.org semantic graphs, llms.txt protocol, deterministic entity declarations, and semantic FAQ architecture to maximize discovery by AI answer engines.",
    learnings: [
      "LLM crawlers prioritize concise, factually grounded entity triples over keyword-stuffed longform copy.",
      "Clear disambiguation between conceptual architectures and shipped applications prevents AI hallucinations in search summaries."
    ],
    technologies: ["Schema.org JSON-LD", "llms.txt Specification", "Entity Graph Modeling", "Semantic HTML", "Next.js Metadata"],
    futureRoadmap: "Creating an automated GEO auditing CLI to benchmark entity visibility across leading generative answer engines."
  },
  {
    id: "exp-local-ai-voice",
    title: "Edge AI Voice Assistant & Offline Speech Pipeline",
    status: "Prototype Stage",
    category: "Local AI & Voice",
    hypothesis: "Can fully offline local LLMs and quantized speech models deliver sub-500ms conversational turn-around times on consumer hardware?",
    overview: "Benchmarking local quantized language models (Llama 3, Phi-3, Mistral) paired with local Whisper and fast speech synthesis engines (Piper / Sherpa-ONNX) running entirely without external cloud latency or bandwidth constraints.",
    learnings: [
      "Streaming audio tokenization drastically reduces perceived latency compared to waiting for complete sentence completions.",
      "Quantized 4-bit models provide sufficient reasoning for intent classification while keeping memory footprints below 4GB VRAM."
    ],
    technologies: ["Ollama", "Whisper", "Piper TTS", "Python", "WebSockets", "Local Quantization"],
    futureRoadmap: "Integrating the offline pipeline with Flutter mobile clients for zero-cloud private voice communication."
  },
  {
    id: "exp-physical-ai-robotics",
    title: "Physical AI & Microcontroller Actuation Bridge",
    status: "Concept Proof",
    category: "Physical AI & Robotics",
    hypothesis: "How can vision-language models bridge the gap between high-level spatial instructions and physical microcontroller actuators?",
    overview: "Investigating the intersection of multimodal vision models and physical computing. Prototyping software bridges connecting AI intent parsers with microcontrollers (ESP32/Arduino) via serial and MQTT channels for ambient physical automation.",
    learnings: [
      "Physical actuation requires strict safety bounds and fallback timeout mechanisms to prevent runaway motor commands.",
      "Hierarchical decomposition (High-Level AI -> Deterministic Microcontroller FSM) is critical for physical reliability."
    ],
    technologies: ["ESP32 / Microcontrollers", "MQTT Protocols", "Serial Bridges", "Computer Vision", "Python"],
    futureRoadmap: "Constructing a small-scale experimental robotic testbed driven by visual feedback and autonomous agent directives."
  },
  {
    id: "exp-multi-model-router",
    title: "Dynamic Multi-Model Cost & Latency Routing Gateway",
    status: "Prototype Stage",
    category: "Multi-Model Systems",
    hypothesis: "What heuristics most effectively route incoming AI queries across DeepSeek, Gemini, Claude, and OpenAI to balance cost, reasoning depth, and response latency?",
    overview: "Developing an adaptive client-side and edge router that classifies query complexity (factual lookup vs. deep code reasoning vs. multimodal image query) and automatically dispatches to the most cost-effective foundation model.",
    learnings: [
      "Lightweight rule-based heuristics before LLM classification save tokens and keep routing latency under 10ms.",
      "Fallback cascades ensure 99.9% uptime even during upstream provider rate limits or API degradations."
    ],
    technologies: ["Multi-Model APIs", "Edge Routing", "Dart / TypeScript", "OpenRouter", "Latency Telemetry"],
    futureRoadmap: "Packaging the multi-model router into an open-source Flutter package for cross-platform developers."
  }
];
