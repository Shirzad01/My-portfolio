import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { geoEntityGraph } from "@/data/geoKnowledge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05070D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://haroonshirzad.dev"),
  title: {
    default: "Haroon Shirzad — AI Developer • Builder • Technology Explorer",
    template: "%s | Haroon Shirzad",
  },
  description:
    "Official portfolio and AI laboratory of Haroon Shirzad. Building practical AI applications, multi-model agent systems, Flutter mobile experiences, and workflow automation. 'I don't just use AI tools. I build systems with them.'",
  keywords: [
    "Haroon Shirzad",
    "Haroon Shirzad AI",
    "Haroon Shirzad Developer",
    "AI Developer",
    "AI Agent Builder",
    "Flutter Developer",
    "Generative AI",
    "BakhterGPT",
    "Multi-Model AI",
    "DeepSeek Flutter",
    "Gemini AI Integration",
    "AI Automation",
    "n8n",
    "Computer Vision",
    "Voice AI",
    "Technology Explorer"
  ],
  authors: [{ name: "Haroon Shirzad", url: "https://haroonshirzad.dev" }],
  creator: "Haroon Shirzad",
  publisher: "Haroon Shirzad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://haroonshirzad.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://haroonshirzad.dev",
    siteName: "Haroon Shirzad — AI Developer & Technology Explorer",
    title: "Haroon Shirzad — AI Developer • Builder • Technology Explorer",
    description:
      "Official portfolio and AI laboratory of Haroon Shirzad. Practical AI applications, autonomous agents, Flutter mobile engineering, and automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haroon Shirzad — AI Developer & Technology Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon Shirzad — AI Developer • Builder • Technology Explorer",
    description:
      "Building practical AI systems, autonomous agent workflows, and high-performance Flutter mobile applications.",
    creator: "@haroonshirzad",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <head>
        {/* Schema.org Person and WebSite JSON-LD */}
        <JsonLd data={geoEntityGraph} />
        <link rel="author" href="https://haroonshirzad.dev" />
      </head>
      <body className="bg-[#05070D] text-slate-100 font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
