import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { person } from "@/content/site";
import { roles, skills, credentials } from "@/content/cv";
import { publishedAchievements, formatMonth } from "@/content/achievements";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Luka Minđek — CV, AI engineer and founder";
const description =
  "CV of Luka Minđek, AI engineer and founder of MindX Global: experience, skills in document AI, computer vision and LLMs, and awards.";

export const metadata: Metadata = pageMeta({ title: title, description, path: "/cv" });

export default function CV() {
  const published = credentials.filter((c) => c.published);
  return (
    <Page current="/cv" schema={siteGraph([webPage("WebPage", title, "/cv", description), breadcrumb("CV", "/cv")])}>
      <h1 className="text-4xl font-extrabold text-ink">{person.name} — CV</h1>
      <p className="mt-3 text-lg text-muted">
        {person.shortTitle} · {person.location.city}, {person.location.country} ·{" "}
        <a href={`mailto:${person.email}`} className="text-ink underline hover:text-accent-dark">{person.email}</a>
      </p>

      <Section id="experience" title="Experience">
        <div className="space-y-8">
          {roles.map((r) => (
            <div key={r.title}>
              <h3 className="text-lg font-bold text-ink">
                {r.title},{" "}
                {r.orgUrl ? <a href={r.orgUrl} className="underline hover:text-accent-dark">{r.org}</a> : r.org}
              </h3>
              {r.period && <p className="text-sm text-muted">{r.period}</p>}
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                {r.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="grid gap-4 sm:grid-cols-[12rem_1fr]">
          {skills.map((s) => (
            <div key={s.group} className="contents">
              <dt className="font-medium text-ink">{s.group}</dt>
              <dd className="text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {publishedAchievements.length > 0 && (
        <Section id="awards" title="Awards">
          <ul className="list-disc space-y-1 pl-5 text-muted">
            {publishedAchievements.map((a) => (
              <li key={a.event}>
                {a.title}, {a.event} — {a.place}, <time dateTime={a.date}>{formatMonth(a.date)}</time>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {published.length > 0 && (
        <Section id="education" title="Education and certifications">
          <ul className="list-disc space-y-1 pl-5 text-muted">
            {published.map((c) => (
              <li key={c.name}>{c.name} — {c.issuer}{c.year ? `, ${c.year}` : ""}</li>
            ))}
          </ul>
        </Section>
      )}
    </Page>
  );
}
