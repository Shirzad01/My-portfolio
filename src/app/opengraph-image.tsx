import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Haroon Shirzad — AI Developer • Builder • Technology Explorer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#05070D",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(0, 240, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          color: "#F8FAFC",
        }}
      >
        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#00F0FF",
              boxShadow: "0 0 15px #00F0FF",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "monospace",
              color: "#38BDF8",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            AI Developer &amp; Systems Builder
          </span>
        </div>

        {/* Main Title & Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 60%, #94A3B8 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Haroon Shirzad
          </h1>

          <p
            style={{
              fontSize: "28px",
              fontFamily: "monospace",
              color: "#38BDF8",
              margin: 0,
              fontWeight: 600,
            }}
          >
            &ldquo;I don&apos;t just use AI tools. I build systems with them.&rdquo;
          </p>

          <p
            style={{
              fontSize: "20px",
              color: "#94A3B8",
              margin: 0,
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Multi-Model AI Pipelines • Flutter Engineering • Autonomous Agents • Workflow Automation
          </p>
        </div>

        {/* Bottom Tech Pills & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["Flutter & Dart", "AI Agents", "Gemini & DeepSeek", "n8n Automation"].map((tag, idx) => (
              <div
                key={idx}
                style={{
                  padding: "6px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#E2E8F0",
                  fontSize: "16px",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "18px",
              fontFamily: "monospace",
              color: "#00F0FF",
              fontWeight: 600,
            }}
          >
            haroonshirzad.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
