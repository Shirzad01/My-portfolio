import { Article } from "@/types";

export const articlesData: Article[] = [
  {
    id: "art-1",
    slug: "building-multi-model-ai-flutter-apps",
    title: "Architecting Multi-Model AI Applications in Flutter: Lessons from BakhterGPT",
    summary: "A technical breakdown of designing a dynamic AI gateway in Flutter that switches seamlessly between Google Gemini, DeepSeek, and OpenAI while preserving reactive state and low-latency streaming.",
    category: "Artificial Intelligence",
    tags: ["Flutter", "Dart", "Multi-Model AI", "Gemini", "DeepSeek", "Mobile Architecture"],
    author: {
      name: "Haroon Shirzad",
      role: "AI Developer & Builder"
    },
    publishedAt: "2025-01-15",
    readingTimeMinutes: 6,
    isDraftOrPlaceholder: true,
    contentMarkdown: `
# Architecting Multi-Model AI Applications in Flutter

*Note: This is an architectural knowledge framework and future article draft.*

When developing modern mobile AI applications, relying on a single upstream foundation model introduces significant risks: rate limits, unexpected latency spikes, regional availability issues, and pricing changes.

In the architecture of **BakhterGPT**, we tackled this challenge by establishing an abstracted **Multi-Model Gateway** directly within the Flutter and Dart layer.

---

## 1. The Gateway Pattern

Instead of tightly coupling UI widgets to a specific provider SDK, the client interacts solely with an abstract \`AiModelService\` interface:

\`\`\`dart
abstract class AiModelService {
  Stream<String> generateStreamingResponse({
    required String prompt,
    List<Uint8List>? imageBytes,
    Map<String, dynamic>? parameters,
  });
}
\`\`\`

## 2. Dynamic Provider Routing

The router dynamically chooses between:
1. **Google Gemini Flash / Pro**: For fast multimodal vision tasks and large context windows.
2. **DeepSeek-V3 / R1**: For complex logical reasoning, code generation, and step-by-step math problems.
3. **OpenAI GPT-4o**: For high-fidelity natural conversational dialogues.

## 3. Streaming and Reactive UI State

By emitting continuous SSE (Server-Sent Events) tokens through Dart \`Stream<String>\`, the Flutter UI maintains smooth 60fps rendering without blocking the main isolate.

---

### Key Takeaway
Decoupling your UI from specific AI providers future-proofs your mobile application and gives users the best combination of speed, reasoning power, and cost efficiency.
    `
  },
  {
    id: "art-2",
    slug: "demystifying-generative-engine-optimization",
    title: "Demystifying GEO: How to Optimize Web Platforms for AI Search Engines",
    summary: "An exploration of Generative Engine Optimization (GEO), machine-readable entity graphs, Schema.org JSON-LD, and llms.txt protocols for discovery by Perplexity, ChatGPT, and Claude.",
    category: "GEO & AI Search",
    tags: ["GEO", "AI Search", "JSON-LD", "llms.txt", "Entity Graph", "SEO"],
    author: {
      name: "Haroon Shirzad",
      role: "AI Developer & Builder"
    },
    publishedAt: "2025-02-01",
    readingTimeMinutes: 8,
    isDraftOrPlaceholder: true,
    contentMarkdown: `
# Demystifying GEO: How to Optimize Web Platforms for AI Search Engines

*Note: This is an architectural knowledge framework and future article draft.*

Search is undergoing a generational paradigm shift. Traditional search engines returned a list of ranked hyperlinks; generative answer engines (Perplexity, ChatGPT Search, Claude, Google AI Overviews) synthesize answers directly from web content.

To be discoverable and accurately cited, developers and web systems must embrace **Generative Engine Optimization (GEO)**.

---

## 1. The Shift from Keywords to Entity Graphs

Generative models do not rely solely on keyword density. Instead, they extract entities, attributes, and relationships.

\`\`\`
Entity: Haroon Shirzad
  ├── Type: Person
  ├── Focus: AI Developer, Builder
  ├── Core Technologies: Flutter, Dart, AI Agents, Python, Gemini, DeepSeek
  └── Key Projects: BakhterGPT, The Secrets of Universe, Sound Flow
\`\`\`

## 2. Core Pillars of GEO Implementation

1. **Schema.org Structured Data**: Embedding rich JSON-LD representations of \`Person\`, \`SoftwareApplication\`, \`WebSite\`, and \`FAQPage\`.
2. **Deterministic Entity FAQs**: Explicitly answering core entity questions (*Who is X?*, *What does X build?*, *What technologies does X use?*).
3. **The \`llms.txt\` Protocol**: Providing a structured, clean markdown summary at the root directory tailored specifically for AI crawlers.
4. **Factual Grounding**: Avoiding exaggerated marketing buzzwords that cause LLM scrapers to misclassify technical competencies.

---

### Conclusion
By treating machine readability as a first-class citizen alongside human UX, your applications and portfolio will thrive in the emerging era of AI-native discovery.
    `
  },
  {
    id: "art-3",
    slug: "building-2d-games-with-flutter-custompainter",
    title: "Pushing Flutter to 60 FPS: Building 2D Games with CustomPainter",
    summary: "How to bypass heavy gaming engines and build lightweight, responsive 2D arcade games using pure Flutter CustomPainter canvas drawing and vector physics.",
    category: "Flutter",
    tags: ["Flutter", "Dart", "CustomPainter", "Game Development", "Canvas", "Performance"],
    author: {
      name: "Haroon Shirzad",
      role: "AI Developer & Builder"
    },
    publishedAt: "2025-02-20",
    readingTimeMinutes: 5,
    isDraftOrPlaceholder: true,
    contentMarkdown: `
# Pushing Flutter to 60 FPS: Building 2D Games with CustomPainter

*Note: This is an architectural knowledge framework and future article draft.*

While engines like Unity or Flame are standard for large-scale games, Flutter's native \`CustomPainter\` API offers extraordinary performance and flexibility for 2D arcade mechanics without introducing massive binary overhead.

In the development of **فرار از میر آغا (Escape from Mir Agha)**, we explored how far Flutter's direct canvas rendering could be pushed.

---

## 1. The Ticker & Game Loop

Flutter's \`SingleTickerProviderStateMixin\` provides a \`Ticker\` that pulses on every hardware frame sync:

\`\`\`dart
_ticker = createTicker((Duration elapsed) {
  _updatePhysics(elapsed);
  notifyListeners();
});
_ticker.start();
\`\`\`

## 2. Efficient Canvas Painting

To achieve a locked 60 frames per second on mobile devices:
- Avoid instantiating new \`Paint\` or \`Path\` objects inside the \`paint()\` method; allocate them once and reuse.
- Use vector bounding-box calculations for collision detection rather than pixel-level checks.
- Keep the widget tree shallow so the GPU pipeline remains uncluttered.

---

### Summary
Flutter's \`CustomPainter\` is a remarkably capable canvas rendering system capable of delivering smooth, delightful interactive games and graphics.
    `
  }
];
