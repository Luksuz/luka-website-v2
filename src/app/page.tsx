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
          Most days you&apos;ll find me building at <a href={person.links.mindx} className="text-ink underline hover:text-accent-dark">MindX Global</a>:
          AI that pulls figures out of PDFs, reads handwriting, checks product labels, makes sense of technical drawings
          and answers questions about a company&apos;s own documents. I work with every client directly, no agency in the
          middle. 50+ projects so far, and still enjoying every one.
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

      <Section id="silicon-valley-teaser" title="Fresh from Silicon Valley">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_1.4fr]">
          <img
            src="/images/abc-golden-gate.webp"
            alt="Luka Minđek standing in front of the Golden Gate Bridge"
            width={933}
            height={1400}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-float)]"
          />
          <p className="text-muted">
            Winning SheepAI with Ivan Židov sent me to California in July 2026 for two weeks of ABC BootCamps: startup
            workshops, a pitch on stage and a lot of San Francisco.{" "}
            <Link href="/about#silicon-valley" className="text-ink underline hover:text-accent-dark">See the photos</Link>.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Say hi">
        <p className="text-muted">
          Got a pile of documents you&apos;d love to never type in again? Or just want to chat? Email <a href={`mailto:${person.email}`} className="text-ink underline hover:text-accent-dark">{person.email}</a> or
          go straight to <a href={person.links.mindx} className="text-ink underline hover:text-accent-dark">mindx.global</a>.
          You&apos;ll also find me on <a href={person.links.linkedin} rel="me" className="text-ink underline hover:text-accent-dark">LinkedIn</a> and{" "}
          <a href={person.links.github} rel="me" className="text-ink underline hover:text-accent-dark">GitHub</a> and{" "}
          <a href={person.links.instagram} rel="me" className="text-ink underline hover:text-accent-dark">Instagram</a>.
        </p>
      </Section>
    </Page>
  );
}
