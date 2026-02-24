import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BuiltSimple — Web & AI Solutions for Small Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1121 0%, #111d3a 50%, #0b1121 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            right: "-50px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#f1f5f9",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          BuiltSimple
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 500,
            background: "linear-gradient(90deg, #60a5fa, #818cf8)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "24px",
          }}
        >
          Web & AI Solutions
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "600px",
          }}
        >
          Fast, affordable websites and AI tools for small businesses in Kansas City. builtsimple.dev
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #818cf8, #3b82f6)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
