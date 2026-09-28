import type { Metadata } from "next";
import Link from "next/link";
import Page, { Section } from "@/components/Page";
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
    <Page current="/" schema={siteGraph([webPage("WebPage", title, "", description)])}>
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-ink sm:text-5xl">{person.name}</h1>
          <p className="mt-3 text-lg font-medium text-accent-dark">{person.shortTitle}</p>
          <p className="mt-5 text-lg text-muted">
            I'm an AI engineer from {person.location.city}, {person.location.country}. I build software that reads
            documents and images — invoices, forms, drawings, photos — and turns them into data a business can use.
            I run <a href={person.links.mindx} className="font-medium text-ink underline hover:text-accent-dark">MindX Global</a>,
            where I build these systems for clients.
          </p>
          <p className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${person.email}`}
              className="rounded-md bg-accent px-4 py-2 font-medium text-white hover:bg-accent-dark"
            >
              Email me
            </a>
            <Link href="/about" className="rounded-md border border-line bg-surface px-4 py-2 font-medium text-ink hover:border-accent-dark">
              About me
            </Link>
          </p>
        </div>
        <img
          src={person.image}
          alt="Portrait of Luka Minđek"
          width={640}
          height={640}
          fetchPriority="high"
          className="h-40 w-40 rounded-full border border-line sm:h-52 sm:w-52"
        />
      </div>

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
