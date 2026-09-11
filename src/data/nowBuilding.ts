import { NowBuildingItem } from "@/types";

export const nowBuildingData: NowBuildingItem[] = [
  {
    id: "nb-1",
    topic: "Autonomous Multi-Agent Systems",
    focusArea: "Agentic Tool Use & Orchestration",
    currentStage: "Designing self-healing execution loops and shared memory architectures for developer sub-agents.",
    statusBadge: "Active Sprint",
    description: "Building tool-augmented autonomous agent pipelines that break high-level development tasks into verifiable sub-goals with automated feedback loops.",
    nextMilestone: "Complete benchmark evaluation of agent task completion rates across varying toolsets.",
    techTags: ["AI Agents", "Python", "Claude API", "Tool Calling"]
  },
  {
    id: "nb-2",
    topic: "Generative Engine Optimization (GEO)",
    focusArea: "AI Discoverability & Machine Knowledge Graphs",
    currentStage: "Testing schema structures and llms.txt formats for Perplexity, ChatGPT Search, and Claude crawlers.",
    statusBadge: "Deep Research",
    description: "Developing standardized schemas, structured entity maps, and semantic FAQs to ensure accurate AI search citations and knowledge extraction.",
    nextMilestone: "Publish automated audit tool for web developer portfolio GEO compliance.",
    techTags: ["GEO", "JSON-LD", "Schema.org", "llms.txt"]
  },
  {
    id: "nb-3",
    topic: "Advanced Flutter & Custom Graphics",
    focusArea: "CustomPainter Physics & Native Bridges",
    currentStage: "Refining 60fps canvas game mechanics and optimizing memory allocation on complex mobile views.",
    statusBadge: "Iterating Architecture",
    description: "Pushing Flutter UI capabilities with custom shaders, vector math drawing, and low-latency native platform channels.",
    nextMilestone: "Release reusable CustomPainter game physics library for Flutter developers.",
    techTags: ["Flutter", "Dart", "CustomPainter", "MethodChannels"]
  },
  {
    id: "nb-4",
    topic: "Physical AI & Robotics Interfaces",
    focusArea: "Microcontroller Actuation & Vision Feedback",
    currentStage: "Connecting vision-language models with ESP32 microcontrollers via serial telemetry.",
    statusBadge: "Prototyping",
    description: "Prototyping ambient physical automation where visual AI models observe physical states and trigger deterministic actuator responses.",
    nextMilestone: "Construct functional closed-loop vision-to-actuator breadboard demo.",
    techTags: ["Robotics", "ESP32", "Computer Vision", "MQTT"]
  },
  {
    id: "nb-5",
    topic: "AI-Powered Workflow Automation",
    focusArea: "Event-Driven n8n & Model Pipelines",
    currentStage: "Integrating real-time webhook triggers with structured LLM parsing for zero-touch automation.",
    statusBadge: "Active Sprint",
    description: "Creating resilient automated workflows connecting data stores, mobile app triggers, and foundation models to eliminate manual operational overhead.",
    nextMilestone: "Deploy scalable multi-model webhook handler with automated failover.",
    techTags: ["n8n", "Webhooks", "Cloud Functions", "Automation"]
  }
];
