import type { Metadata } from "next";

const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "Luka Minđek — AI engineer, founder of MindX Global" };

/** Per-page metadata. A page-level openGraph object replaces the root one, so the image is set here every time. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "profile", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
