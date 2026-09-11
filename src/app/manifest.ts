import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haroon Shirzad — AI Developer & Technology Explorer",
    short_name: "Haroon Shirzad",
    description:
      "Personal portfolio and AI laboratory of Haroon Shirzad. Practical AI applications, autonomous agents, Flutter mobile engineering, and workflow automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070D",
    theme_color: "#05070D",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
