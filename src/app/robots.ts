import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot",
          "Googlebot",
          "bingbot",
          "CCBot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://haroonshirzad.dev/sitemap.xml",
  };
}
