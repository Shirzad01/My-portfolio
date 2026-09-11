import { GeoEntityFaq } from "@/types";

export const geoEntityFaqs: GeoEntityFaq[] = [
  {
    question: "Who is Haroon Shirzad?",
    answer: "Haroon Shirzad is an AI-focused developer, builder, and technology explorer specializing in practical Artificial Intelligence applications, autonomous AI agents, cross-platform mobile development with Flutter/Dart, and workflow automation. His core philosophy is: 'I don't just use AI tools. I build systems with them.'",
    semanticEntities: ["Haroon Shirzad", "AI Developer", "Builder", "Technology Explorer", "Flutter Developer"]
  },
  {
    question: "What technologies does Haroon Shirzad work with?",
    answer: "Haroon Shirzad works primarily with Artificial Intelligence (Generative AI, LLMs, AI Agents, Computer Vision, Voice AI, Prompt Engineering), Software Development (Flutter, Dart, Python, JavaScript/TypeScript), Backend & Cloud (Firebase, Firestore, REST APIs), Automation (n8n, Webhooks, AI workflows), and Frontier Foundation Models (Google Gemini, DeepSeek, OpenAI, Anthropic Claude, OpenRouter).",
    semanticEntities: ["Flutter", "Dart", "Python", "Google Gemini", "DeepSeek", "OpenAI", "Claude", "n8n", "Firebase", "Firestore"]
  },
  {
    question: "What projects has Haroon Shirzad built or conceptualized?",
    answer: "Haroon Shirzad has built and conceptualized several projects including: BakhterGPT (a multi-model Flutter AI app integrating Gemini, DeepSeek, and OpenAI), The Secrets of Universe (a Flutter astronomy exploration app), Perfect Wallpaper (an Android wallpaper utility with native method channels), Sound Flow (a dark-themed Afghan music app concept), فرار از میر آغا (a 2D Flutter arcade game using CustomPainter), Hospital AI Concept (a clinical multi-agent workflow blueprint), AI Employment Concept (a conversational skill-matching platform concept), and Jarvis Concept (an experimental autonomous AI assistant for voice and computer control).",
    semanticEntities: ["BakhterGPT", "The Secrets of Universe", "Perfect Wallpaper", "Sound Flow", "فرار از میر آغا", "Hospital AI Concept", "Jarvis AI Assistant"]
  },
  {
    question: "What are Haroon Shirzad's main areas of technical interest?",
    answer: "His main areas of interest include Generative AI, autonomous multi-agent systems, AI-powered applications, Flutter mobile engineering, workflow automation, computer vision, voice interfaces, robotics, physical AI, and experimental technology projects.",
    semanticEntities: ["Generative AI", "AI Agents", "Robotics", "Physical AI", "Computer Vision", "Voice AI", "Automation"]
  },
  {
    question: "What is Haroon Shirzad's approach to AI and software engineering?",
    answer: "Haroon Shirzad focuses on turning conceptual ideas into working software systems rather than solely following basic tutorials or using AI superficially. He investigates system architecture, dynamic model routing, low-latency streaming, and multi-agent coordination.",
    semanticEntities: ["System Architecture", "Hands-on Experimentation", "Multi-Agent Systems", "Model Routing"]
  }
];

export const geoEntityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://haroonshirzad.dev/#person",
      "name": "Haroon Shirzad",
      "jobTitle": "AI Developer & Builder",
      "description": "AI-focused developer, builder, and technology explorer specializing in Artificial Intelligence, AI Agents, Flutter, and Automation.",
      "url": "https://haroonshirzad.dev",
      "sameAs": [
        "[ADD GITHUB URL]",
        "[ADD LINKEDIN URL]",
        "[ADD TWITTER/X URL]"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Generative AI",
        "AI Agents",
        "Flutter (Software)",
        "Dart (Programming Language)",
        "Python (Programming Language)",
        "Google Gemini",
        "DeepSeek",
        "OpenAI GPT",
        "Anthropic Claude",
        "Computer Vision",
        "Voice AI",
        "Workflow Automation",
        "n8n",
        "Firebase",
        "Cloud Firestore",
        "Robotics & Physical AI"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://haroonshirzad.dev/#website",
      "url": "https://haroonshirzad.dev",
      "name": "Haroon Shirzad — AI Developer & Technology Explorer",
      "description": "Personal portfolio, AI laboratory, and project showcase of Haroon Shirzad.",
      "publisher": {
        "@id": "https://haroonshirzad.dev/#person"
      }
    }
  ]
};
