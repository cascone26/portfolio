import { ImageResponse } from "next/og";
import { posts } from "../posts";

export const alt = "BuiltSimple Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  const title = post?.title ?? "BuiltSimple Blog";
  const readTime = post?.readTime ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
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

        {/* Top: Blog label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#60a5fa",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            BuiltSimple Blog
          </div>
          {readTime && (
            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                display: "flex",
                alignItems: "center",
              }}
            >
              · {readTime} read
            </div>
          )}
        </div>

        {/* Middle: Post title */}
        <div
          style={{
            fontSize: title.length > 60 ? "40px" : "48px",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#f1f5f9",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Bottom: Site URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "#94a3b8",
            }}
          >
            builtsimple.dev
          </div>
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
