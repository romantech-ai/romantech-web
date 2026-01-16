import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0F",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "linear-gradient(135deg, #00D4FF 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
            }}
          >
            <span style={{ fontSize: 48, color: "#0A0A0F", fontWeight: 700 }}>
              R
            </span>
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Román Tech
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: "#94A3B8",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Automatización e IA para tu negocio
          </span>
          <span
            style={{
              fontSize: 24,
              color: "#64748B",
              marginTop: 20,
            }}
          >
            Chatbots · Webs · Automatizaciones
          </span>
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 200,
            height: 4,
            background: "linear-gradient(90deg, #00D4FF, #8B5CF6)",
            borderRadius: 2,
            marginTop: 40,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
