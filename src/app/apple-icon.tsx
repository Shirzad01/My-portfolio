import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#05070D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#00F0FF",
          borderRadius: "36px",
          border: "4px solid rgba(0, 240, 255, 0.4)",
          fontWeight: 900,
          fontFamily: "monospace",
          boxShadow: "inset 0 0 40px rgba(0, 240, 255, 0.2)",
        }}
      >
        <span>H</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
