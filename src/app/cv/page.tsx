import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { Chip } from "@/components/Bits";
import { person } from "@/content/site";
import { roles, skills, credentials } from "@/content/cv";
import { publishedAchievements, formatMonth } from "@/content/achievements";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Luka Minđek — CV, AI engineer and founder";
const description =
  "CV of Luka Minđek, AI engineer and founder of MindX Global: experience, skills in document AI, computer vision and LLMs, and awards.";

export const metadata: Metadata = pageMeta({ title, description, path: "/cv" });

export default function CV() {
  const published = credentials.filter((c) => c.published);
  return (
    <Page current="/cv" schema={siteGraph([webPage("WebPage", title, "/cv", description), breadcrumb("CV", "/cv")])}>
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <img
          src="/images/luka-cutout.webp"
          alt="Luka Minđek"
          width={1137}
          height={1400}
          className="h-36 w-36 shrink-0 rounded-full bg-surface object-cover object-top shadow-[var(--shadow-float)]"
        />
        <div>
          <h1 className="text-4xl font-semibold text-ink">{person.name} — CV</h1>
          <p className="mt-2 text-lg text-muted">{person.shortTitle} · {person.location.city}, {person.location.country}</p>
          <p className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a href={`mailto:${person.email}`} className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-accent)] hover:bg-accent-dark">{person.email}</a>
            <a href={person.links.linkedin} rel="me" className="rounded-xl bg-surface px-4 py-2 text-sm shadow-[var(--shadow-float)] hover:text-accent">LinkedIn</a>
            <a href={person.links.github} rel="me" className="rounded-xl bg-surface px-4 py-2 text-sm shadow-[var(--shadow-float)] hover:text-accent">GitHub</a>
          </p>
        </div>
      </div>

      <Section id="experience" title="Experience">
        <ol className="relative space-y-8 border-l-2 border-line pl-6">
          {roles.map((r) => (
            <li key={r.title} className="relative">
              <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-card bg-accent" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-ink">
                {r.title}, {r.orgUrl ? <a href={r.orgUrl} className="underline hover:text-accent">{r.org}</a> : r.org}
              </h3>
              {r.period && <p className="text-sm text-muted">{r.period}</p>}
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                {r.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-float)]">
              <h3 className="font-semibold text-ink">{s.group}</h3>
              <p className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => <Chip key={i}>{i}</Chip>)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {publishedAchievements.length > 0 && (
        <Section id="awards" title="Awards and events">
          <ul className="space-y-3">
            {publishedAchievements.map((a) => (
              <li key={a.event} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-float)]">
                <p className="font-semibold text-ink">{a.title} — {a.event}</p>
                <p className="text-sm text-muted">{a.place}, <time dateTime={a.date}>{formatMonth(a.date)}</time>{a.source && <> · <a href={a.source} className="text-accent hover:underline">source</a></>}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {published.length > 0 && (
        <Section id="education" title="Education and certifications">
          <ul className="space-y-3">
            {published.map((c) => (
              <li key={c.name} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-float)]">
                <p className="font-semibold text-ink">{c.issuer}</p>
                <p className="text-muted">{c.name}{c.year ? `, ${c.year}` : ""}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </Page>
  );
}
