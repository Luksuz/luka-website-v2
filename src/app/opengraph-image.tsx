import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { person } from "@/content/site";

export const dynamic = "force-static";
export const alt = "Luka Minđek — AI engineer, founder of MindX Global";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Satori can't decode WebP; the PNG is kept outside public/ just for this.
  const photo = await readFile(join(process.cwd(), "src/assets/og-portrait.png"));
  const src = `data:image/png;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "#fafaf9", padding: 80, gap: 64 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ width: 96, height: 10, background: "#ea580c", marginBottom: 40 }} />
          <div style={{ fontSize: 80, fontWeight: 800, color: "#1c1917", lineHeight: 1.05 }}>{person.name}</div>
          <div style={{ fontSize: 38, color: "#c2410c", marginTop: 24 }}>AI engineer · Founder of MindX Global</div>
          <div style={{ fontSize: 30, color: "#57534e", marginTop: 20 }}>Varaždin, Croatia · lukamindek.com</div>
        </div>
        <img src={src} width={360} height={360} style={{ borderRadius: 9999, border: "6px solid #e7e5e4" }} />
      </div>
    ),
    size,
  );
}
