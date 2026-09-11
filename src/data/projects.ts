import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "bakhter-gpt",
    slug: "bakhter-gpt",
    title: "BakhterGPT",
    type: "evolving",
    category: "AI & Agents",
    tagline: "Multi-Model AI Ecosystem with Vision, Voice, and Educational Communication",
    description: "An evolving AI-powered mobile application built with Flutter featuring multi-provider model routing (Google Gemini, DeepSeek, OpenAI), multimodal vision processing, chat persistence via Firestore, and contextual educational workflows.",
    fullOverview: "BakhterGPT is an evolving cross-platform AI intelligence platform engineered using Flutter and Dart. It abstracts multiple frontier foundation models behind a dynamic orchestration layer, allowing seamless switching between OpenAI GPT models, Google Gemini multimodal APIs, and DeepSeek reasoning models. The app is tailored with specialized educational and communication pipelines, enabling interactive learning, student-teacher assistance, voice query streaming, and document/image intelligence.",
    architectureBreakdown: [
      "Client UI: Flutter reactive state architecture with custom dark theme & fluid chat streams",
      "Model Gateway: Dynamic multi-provider API router supporting Google Gemini, DeepSeek, and OpenAI endpoints",
      "Multimodal Pipeline: Client-side image pre-processing, compression, and visual token analysis",
      "Persistence Layer: Firebase Authentication and Google Cloud Firestore for secure session and context storage",
      "Voice & Audio: Real-time speech-to-text tokenization and audio playback streaming",
      "Domain Modules: Educational assistance sub-system for school communication and structured teacher/student query resolution"
    ],
    features: [
      "Dynamic Multi-Provider AI Engine (Gemini, DeepSeek, OpenAI)",
      "Multimodal Image & Visual Document Analysis",
      "Persistent Chat History & Session Management via Cloud Firestore",
      "Real-Time Voice and Text Query Processing",
      "Specialized Educational Interaction & School Communication Workflows",
      "Context-Aware Prompt Templating & Memory Persistence",
      "Cross-Platform Flutter Performance with 60fps Gesture Physics"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Firestore", "REST APIs", "Cloud Functions", "Riverpod/Provider"],
    modelsOrAPIs: ["Google Gemini Pro/Flash", "DeepSeek-V3/R1", "OpenAI GPT-4o", "OpenRouter API"],
    status: "Active Evolution",
    isConceptOnly: false,
    demoUrl: "[ADD DEMO URL]",
    repoUrl: "[ADD GITHUB URL]",
    highlightQuote: "Unifying multi-provider LLMs and multimodal vision into a unified, responsive Flutter interface.",
    statsOrMetrics: [
      { label: "Core AI Providers", value: "3+ Models" },
      { label: "Platform", value: "Flutter Mobile" },
      { label: "Data Engine", value: "Firestore Realtime" }
    ]
  },
  {
    id: "secrets-of-universe",
    slug: "secrets-of-universe",
    title: "The Secrets of Universe",
    type: "production",
    category: "Flutter & Mobile",
    tagline: "Interactive Astronomical Explorer & Deep-Space Educational Platform",
    description: "An immersive Flutter astronomy application delivering high-resolution planetary telemetry, celestial cataloguing, star charts, space video streaming, and curated astronomical knowledge.",
    fullOverview: "The Secrets of Universe is an educational exploration application crafted to bring the cosmos to users' fingertips. Developed with Flutter, it combines NASA space telemetry data, planetary scale models, curated astrophysical articles, high-resolution cosmic imagery, and video streaming into a fluid, dark-mode cosmic interface.",
    architectureBreakdown: [
      "Flutter UI Engine: Custom viewport transitions and layered parallax space backgrounds",
      "Celestial Data Store: Structured planetary indices, orbital metrics, and astrophysical facts",
      "Media Cache Pipeline: Asynchronous caching for high-res astronomical imagery and deep-space video streams",
      "Search & Indexing: Rapid offline-first indexing of celestial bodies and deep-space objects"
    ],
    features: [
      "Detailed Planetary Telemetry, Orbital Dynamics & Atmospheric Profiles",
      "High-Resolution Cosmic Imagery & NASA Open API Integration",
      "Curated Deep-Space Educational Video Streaming",
      "Interactive Celestial Catalog with Category Filtering",
      "Offline-First Caching for Astronomical Fact Sheets",
      "Deep Cosmic Ambient Theme with Fluid Page Transitions"
    ],
    techStack: ["Flutter", "Dart", "REST APIs", "CachedNetworkImage", "Video Player", "State Management"],
    status: "Shipped Application",
    isConceptOnly: false,
    demoUrl: "[ADD DEMO URL]",
    repoUrl: "[ADD GITHUB URL]",
    highlightQuote: "Translating complex astronomical telemetry into an awe-inspiring mobile visual experience.",
    statsOrMetrics: [
      { label: "Focus", value: "Astrophysics & Space" },
      { label: "Architecture", value: "Offline-First Flutter" },
      { label: "Interface", value: "Cosmic Dark UI" }
    ]
  },
  {
    id: "sound-flow",
    slug: "sound-flow",
    title: "Sound Flow",
    type: "concept",
    category: "Flutter & Mobile",
    tagline: "Immersive Afghan Musical Heritage & High-Fidelity Audio Experience",
    description: "A dark-themed music streaming and discovery application concept dedicated to showcasing Afghan musical heritage and legendary artists through frosted glassmorphism and acoustic visualization.",
    fullOverview: "Sound Flow is a cultural and musical streaming concept designed to celebrate the rich musical traditions of Afghanistan. The interface combines dark aesthetic backdrops, frosted acrylic cards, dynamic audio waveforms, and rich discography profiles for legendary Afghan maestros including Ahmad Zahir, Sarban, Nashenas, Farhad Darya, Zahir Howaida, Qais Ulfat, and Saida Gul Mina. (Concept project — no official artist endorsements claimed).",
    architectureBreakdown: [
      "Visual Design: Layered backdrop blur (Glassmorphism), animated vinyl rotations, and reactive color extraction",
      "Audio Engine Concept: Seamless track crossfading, buffer queuing, and background audio service lifecycle",
      "Artist Knowledge Graph: Discography timelines, lyrical archives, and historical context catalogs"
    ],
    features: [
      "Immersive Dark Futuristic Music Player Interface with Backdrop Blur Effects",
      "Curated Artist Showcase (Ahmad Zahir, Sarban, Nashenas, Farhad Darya, Zahir Howaida, Qais Ulfat, Saida Gul Mina)",
      "Dynamic Vinyl Turntable & Audio Visualizer Animation State",
      "Lyrical Synchronization & Track Metadata Inspection",
      "Curated Afghan Musical Genres: Classical, Ghazal, Folk, and Contemporary Pop"
    ],
    techStack: ["Flutter", "Dart", "Glassmorphism UI", "Audio Players API", "Custom Animations"],
    status: "Completed Concept",
    isConceptOnly: true,
    demoUrl: "[ADD DEMO URL]",
    repoUrl: "[ADD GITHUB URL]",
    highlightQuote: "A tribute to classical and modern Afghan musical heritage, elevated through cutting-edge UI engineering.",
    statsOrMetrics: [
      { label: "Design System", value: "Deep Glassmorphism" },
      { label: "Genre Focus", value: "Afghan Classical & Folk" },
      { label: "Category", value: "Audio Experience Concept" }
    ]
  },
  {
    id: "farar-az-mir-agha",
    slug: "farar-az-mir-agha",
    title: "Escape from Mir Agha",
    nativeTitle: "فرار از میر آغا",
    type: "game",
    category: "Games & Graphics",
    tagline: "Fast-Paced 2D Arcade Obstacle Game Built with Flutter CustomPainter",
    description: "A custom 2D mobile arcade game developed entirely in Flutter using low-level CustomPainter rendering, reactive 60fps game loops, procedural obstacle spawns, and dynamic audio feedback.",
    fullOverview: "فرار از میر آغا (Escape from Mir Agha) is an entertaining 2D arcade evasion game built to push the limits of Flutter's CustomPainter canvas engine without external gaming engines. It features procedural obstacle generation, collision vector calculations, dynamic score velocity multipliers, localized Dari/Persian typography, and synchronized sound effects.",
    architectureBreakdown: [
      "Rendering Pipeline: Low-level Flutter CustomPainter drawing vectors, character sprites, and obstacle hitboxes directly to the canvas",
      "Physics Engine: Custom ticker-driven gravity, acceleration, and bounding-box collision detection",
      "Audio Management: Low-latency sound trigger multiplexer for collisions, jumps, and game over states",
      "Localization: Native support for Persian/Dari titles, numerals, and contextual menu overlays"
    ],
    features: [
      "Pure CustomPainter Canvas Rendering with Zero Heavy Game Engine Overhead",
      "Real-time 60fps Collision Detection & Dynamic Gravity Calculation",
      "Procedural Random Obstacle Matrix with Progressive Difficulty Scaling",
      "Localized Dari / Persian Visual Aesthetics & Audio Soundscape",
      "High Score Persistence & Quick Restart Game Loops"
    ],
    techStack: ["Flutter", "Dart", "CustomPainter", "Flame Audio / Soundpool", "Shared Preferences"],
    status: "Shipped Application",
    isConceptOnly: false,
    demoUrl: "[ADD DEMO URL]",
    repoUrl: "[ADD GITHUB URL]",
    highlightQuote: "Proving that Flutter's native 2D canvas is capable of fluid, responsive, high-framerate arcade gameplay.",
    statsOrMetrics: [
      { label: "Graphics Engine", value: "Flutter CustomPainter" },
      { label: "Target Framerate", value: "60 FPS Native" },
      { label: "Language Mode", value: "Dari / Persian Native" }
    ]
  },
  {
    id: "perfect-wallpaper",
    slug: "perfect-wallpaper",
    title: "Perfect Wallpaper",
    type: "production",
    category: "Flutter & Mobile",
    tagline: "High-Definition Visual Discovery & Android Wallpaper Management Engine",
    description: "A polished Flutter utility application for curated wallpaper exploration, asynchronous downloading, native Android wallpaper manager integration, and optimized monetization.",
    fullOverview: "Perfect Wallpaper is a modern wallpaper curation and utility app built for Android with Flutter. It provides instant high-resolution background browsing, tag filtering, background download services, direct home/lock screen application through native Android MethodChannels, and integrated ad mediation.",
    architectureBreakdown: [
      "Native MethodChannels: Direct communication between Dart and Android WallpaperManager APIs",
      "Asynchronous Download Manager: Resumable chunk downloading with storage permission handlers",
      "Image Grid Virtualization: Staggered masonry layout with proactive image prefetching and memory caching",
      "Monetization Layer: Non-intrusive ad mediation and interstitial lifecycle handling"
    ],
    features: [
      "Curated Staggered Grid Discovery for HD and 4K Mobile Wallpapers",
      "Native Android System Wallpaper Set (Home Screen, Lock Screen, or Both)",
      "High-Speed Asynchronous Image Download & Gallery Sync",
      "Categorized Tag Navigation & Search Filtering",
      "Optimized Memory Caching to prevent Android OOM on high-density displays"
    ],
    techStack: ["Flutter", "Dart", "Android MethodChannels", "Dio", "AdMob / Google Mobile Ads"],
    status: "Shipped Application",
    isConceptOnly: false,
    demoUrl: "[ADD DEMO URL]",
    repoUrl: "[ADD GITHUB URL]",
    highlightQuote: "Seamlessly bridging Flutter UI with low-level Android native system wallpaper services.",
    statsOrMetrics: [
      { label: "Native Bridge", value: "Android MethodChannels" },
      { label: "Asset Pipeline", value: "4K High-Res Caching" },
      { label: "Platform", value: "Flutter / Android" }
    ]
  },
  {
    id: "hospital-ai-concept",
    slug: "hospital-ai-concept",
    title: "Hospital AI Platform Concept",
    type: "concept",
    category: "Concepts & Research",
    tagline: "Unified Multi-Agent Clinical Automation & Hospital Operational Intelligence",
    description: "An architectural blueprint for an AI-augmented healthcare ecosystem unifying diagnostic laboratory vision analysis, clinical intake, doctor workflow automation, and hospital auxiliary services.",
    fullOverview: "The Hospital AI Concept is an architectural exploration of how frontier AI agents and computer vision models could streamline modern medical facilities. The platform proposes a central intelligence fabric connecting patient triage, laboratory report vision analysis, longitudinal medical history synthesis, physician prescription assistance, and logistical operations (canteen, parking, appointment routing). (Note: Conceptual architecture and research design).",
    architectureBreakdown: [
      "Clinical Agent Network: Specialized sub-agents for patient triage, medical history indexing, and doctor workflow summarization",
      "Vision Diagnostic Engine: Multimodal computer vision pipeline to parse pathology reports and lab scan summaries",
      "Hospital Ops Router: Centralized dispatch connecting ancillary services (parking capacity, canteen inventory, pharmacy fulfillment)",
      "Privacy & Security Blueprint: Air-gapped PHI encryption boundaries and local model inference layers"
    ],
    features: [
      "AI Patient Intake & Natural Language Symptom Triaging",
      "Laboratory Result & Diagnostic Imagery Computer Vision Analysis",
      "Automated Clinical Summary & Physician Chart Assistance",
      "Longitudinal Patient History Synthesis & Drug Interaction Checks",
      "Integrated Hospital Services Automation (Bed Tracking, Canteen, Parking)",
      "Role-Based Access Control Architecture for Doctors, Nurses, and Staff"
    ],
    techStack: ["AI System Design", "Multimodal Vision", "Autonomous Agents", "HIPAA/Privacy Blueprints", "Vector Embeddings"],
    modelsOrAPIs: ["Multimodal Vision LLMs", "Specialized Medical Embeddings", "Local LLM Orchestration"],
    status: "Completed Concept",
    isConceptOnly: true,
    highlightQuote: "Designing an end-to-end intelligent neural fabric for 21st-century healthcare operations.",
    statsOrMetrics: [
      { label: "Type", value: "System Architecture Concept" },
      { label: "Domain", value: "Clinical Intelligence" },
      { label: "Agent Structure", value: "Multi-Agent Router" }
    ]
  },
  {
    id: "ai-employment-concept",
    slug: "ai-employment-concept",
    title: "AI Employment & Skill Matching Platform Concept",
    type: "concept",
    category: "Concepts & Research",
    tagline: "Conversational Talent Discovery & Skill-Based Economic Mobility Engine",
    description: "A humanitarian-oriented AI platform concept engineered to democratize employment access through conversational voice/chat skill intake, semantic competency mapping, and opportunity matchmaking.",
    fullOverview: "Inspired by global workforce development challenges and economic empowerment initiatives (such as UNDP-style humanitarian frameworks), this concept designs a zero-barrier employment matching system. Instead of requiring rigid resumes, an intelligent conversational agent interviews job seekers via voice or text in their local language, extracts real-world competencies, and matches them to an enterprise opportunity database. (Note: Research & concept blueprint — no official UNDP partnership or deployment claimed).",
    architectureBreakdown: [
      "Conversational Intake Agent: Voice/text multilingual agent that uncovers non-traditional skills through interactive dialogues",
      "Semantic Skill Extraction: Vector clustering model mapping natural language responses into standardized competency taxonomies",
      "Employer Matching Matrix: Dual-sided scoring algorithm prioritizing verified skills over conventional credential filters",
      "Analytics & Policy Dashboard: Aggregated workforce supply/demand analytics for development organizations"
    ],
    features: [
      "Multilingual Voice & Text Conversational Skill Intake Engine",
      "Semantic Competency Parsing (Transforming spoken experience into machine-matchable skills)",
      "Enterprise Job & Gig Opportunity Semantic Matchmaking",
      "Zero-Resume Barrier Designed for Informal and Developing Economy Workers",
      "Labor Market Analytics & Skill Deficiency Diagnostic Dashboards"
    ],
    techStack: ["Conversational AI", "Vector Search / RAG", "Voice-to-Text Pipelines", "Labor Data Modeling"],
    modelsOrAPIs: ["Whisper / Voice AI", "Vector Embeddings", "LLM Intent Classifiers"],
    status: "Completed Concept",
    isConceptOnly: true,
    highlightQuote: "Eliminating the resume barrier through conversational AI to connect raw human skill with real economic opportunities.",
    statsOrMetrics: [
      { label: "Target", value: "Conversational Skill Matching" },
      { label: "Input Modality", value: "Voice & Text Dialogues" },
      { label: "Status", value: "Architectural Concept" }
    ]
  },
  {
    id: "ai-assistant-jarvis",
    slug: "ai-assistant-jarvis",
    title: "Autonomous AI Assistant (Jarvis Concept)",
    type: "experimental",
    category: "AI & Agents",
    tagline: "Autonomous Agent for Computer Control, Voice Intelligence, and Physical Automation",
    description: "An experimental autonomous assistant prototype fusing natural voice interaction, OS-level computer control, intent parsing, multi-step tool execution, and future physical/IoT hardware control.",
    fullOverview: "The Autonomous AI Assistant (Jarvis Concept) is an experimental sandbox testing the boundaries of autonomous computer use, voice interactivity, and real-world system control. It investigates how frontier models can translate high-level spoken directives into executable operating system commands, automated browser sessions, file system manipulations, and physical microcontroller triggers.",
    architectureBreakdown: [
      "Perception Layer: Continuous low-latency wake-word detection and real-time audio tokenization",
      "Reasoning & Planning: Intent decomposition loop parsing user objectives into DAG (Directed Acyclic Graph) tool steps",
      "OS Action Bridge: Safe sandboxed execution of shell commands, desktop automation, and API triggers",
      "IoT / Hardware Bridge: Serial and MQTT communication protocols for future robotics and smart-environment control"
    ],
    features: [
      "Continuous Conversational Voice Loop with Intent Recognition",
      "Autonomous Multi-Step Computer Control & Script Execution",
      "Tool-Augmented Tool Use (Browser automation, File operations, App control)",
      "Contextual Working Memory & Long-Term Vector Store Recall",
      "Extensible Hardware & IoT Hook Interfaces for Physical AI Integration"
    ],
    techStack: ["Python", "Node.js / TypeScript", "Local LLMs", "Voice AI", "OS Automation", "MQTT / Serial"],
    modelsOrAPIs: ["Claude / OpenAI API", "Local Ollama / Llama 3", "Whisper", "ElevenLabs / Piper TTS"],
    status: "Experimental Prototype",
    isConceptOnly: false,
    demoUrl: "[ADD DEMO URL]",
    repoUrl: "[ADD GITHUB URL]",
    highlightQuote: "Transforming passive chat assistants into active, autonomous agents that interact with computers and the physical world.",
    statsOrMetrics: [
      { label: "Execution Mode", value: "Autonomous Loop" },
      { label: "Modality", value: "Voice + OS Control" },
      { label: "State", value: "Active Experiment" }
    ]
  }
];
