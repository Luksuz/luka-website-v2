import type { Metadata } from "next";
import Link from "next/link";
import Page, { Section } from "@/components/Page";
import Hero from "@/components/Hero";
import { person } from "@/content/site";
import { publishedAchievements, formatMonth } from "@/content/achievements";
import { projects } from "@/content/work";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage } from "@/lib/schema";

const title = `${person.name} — AI engineer, founder of MindX Global`;
const description =
  "Luka Minđek is an AI engineer from Varaždin, Croatia, and founder of MindX Global. He builds AI that reads documents and images for businesses.";

export const metadata: Metadata = pageMeta({ title: title, description, path: "/" });

export default function Home() {
  return (
    <Page current="/" hero={<Hero />} schema={siteGraph([webPage("WebPage", title, "", description)])}>
      <Section id="now" title="What I'm doing now">
        <p className="text-muted">
          Most of my time goes into <a href={person.links.mindx} className="text-ink underline hover:text-accent-dark">MindX Global</a>:
          AI that pulls figures out of PDFs, reads handwriting, checks product labels, understands technical drawings and
          answers questions over a company's own documents. I work directly with each client — there is no agency in between.
          50+ projects so far.
        </p>
      </Section>

      <Section id="work" title="Selected work">
        <ul className="divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <li key={p.name} className="py-4">
              <p className="font-display font-semibold text-ink">
                {p.name} <span className="text-sm font-normal text-muted">· {p.kind}</span>
              </p>
              <p className="mt-1 text-muted">{p.summary}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link href="/work" className="font-medium text-accent-dark underline">All work and client projects</Link>
        </p>
      </Section>

      {publishedAchievements.length > 0 && (
        <Section id="achievements" title="Achievements">
          <ul className="space-y-4">
            {publishedAchievements.map((a) => (
              <li key={a.event}>
                <p className="font-display font-semibold text-ink">
                  {a.title} — {a.event}
                </p>
                <p className="text-sm text-muted">
                  {a.place} · <time dateTime={a.date}>{formatMonth(a.date)}</time>
                </p>
                <p className="mt-1 text-muted">{a.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="contact" title="Get in touch">
        <p className="text-muted">
          For projects, email <a href={`mailto:${person.email}`} className="text-ink underline hover:text-accent-dark">{person.email}</a> or
          go straight to <a href={person.links.mindx} className="text-ink underline hover:text-accent-dark">mindx.global</a>.
          I'm also on <a href={person.links.linkedin} rel="me" className="text-ink underline hover:text-accent-dark">LinkedIn</a> and{" "}
          <a href={person.links.github} rel="me" className="text-ink underline hover:text-accent-dark">GitHub</a>.
        </p>
      </Section>
    </Page>
  );
}
