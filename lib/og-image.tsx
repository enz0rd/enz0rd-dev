import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };

const SKILL_PILLS = ["TypeScript", "React", "Next.js", "Node.js"];

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundImage: "linear-gradient(135deg, #03110a 0%, #050806 55%, #000000 100%)",
          fontFamily: "monospace",
          color: "#f4f4f4",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#8fe3b0", letterSpacing: 2 }}>
          enz0rd.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 100, fontWeight: 700 }}>$ @enz0rd</div>
          <div style={{ display: "flex", fontSize: 40, color: "#d4d4d4" }}>Enzo Rossi Daltoé</div>
          <div style={{ display: "flex", fontSize: 30, color: "#8fe3b0" }}>Fullstack Developer</div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {SKILL_PILLS.map((skill) => (
            <div
              key={skill}
              style={{
                display: "flex",
                fontSize: 24,
                padding: "10px 20px",
                border: "1px solid #3a4a40",
                color: "#e4e4e4",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
