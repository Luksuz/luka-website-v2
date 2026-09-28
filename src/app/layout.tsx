import type { Metadata, Viewport } from "next";
import { Jost, Archivo_Black } from "next/font/google";
import { person, siteUrl } from "@/content/site";
import "./globals.css";

const jost = Jost({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-jost" });
const archivo = Archivo_Black({ subsets: ["latin", "latin-ext"], display: "swap", weight: "400", variable: "--font-archivo" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${person.name} — AI engineer, founder of MindX Global`, template: `%s | ${person.name}` },
  description:
    "Luka Minđek is an AI engineer from Varaždin, Croatia, and the founder of MindX Global. He builds AI that reads documents and images.",
  applicationName: person.name,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  openGraph: { type: "profile", siteName: person.name, locale: "en_GB", firstName: "Luka", lastName: "Minđek" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#E6EAF0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${archivo.variable}`}>
      <body className="min-h-screen bg-page text-ink antialiased">{children}</body>
    </html>
  );
}
