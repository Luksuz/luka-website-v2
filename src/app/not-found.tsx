import type { Metadata } from "next";
import Link from "next/link";
import Page from "@/components/Page";
import { siteGraph } from "@/lib/schema";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Page current="" schema={siteGraph()}>
      <h1 className="text-4xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-5 text-muted">
        This page doesn't exist. Try the <Link href="/" className="text-ink underline">home page</Link>,{" "}
        <Link href="/about" className="text-ink underline">about</Link>, <Link href="/work" className="text-ink underline">work</Link> or{" "}
        <Link href="/cv" className="text-ink underline">CV</Link>.
      </p>
    </Page>
  );
}
