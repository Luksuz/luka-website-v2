import type { Metadata } from "next";
import Link from "next/link";
import Page, { Section } from "@/components/Page";
import { Stat, Pic } from "@/components/Bits";
import { person } from "@/content/site";
import { achievements, publishedAchievements, formatMonth } from "@/content/achievements";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "About Luka Minđek — AI engineer from Croatia";
const h1 = "About Luka Minđek";
const description =
  "Who Luka Minđek is: AI engineer from Varaždin, Croatia, founder of MindX Global, SheepAI hackathon winner. How he works and what he builds.";

export const metadata: Metadata = pageMeta({ title, description, path: "/about" });

const link = "text-ink underline hover:text-accent";

const builds = [
  { src: "/images/case-order-extraction.webp", alt: "Orders read from WhatsApp messages and PDFs into a structured form", caption: "Orders from emails, chats and PDFs" },
  { src: "/images/case-floor-plan-analyzer.webp", alt: "Floor plan with rooms detected and measured by AI", caption: "Floor plans and technical drawings" },
  { src: "/images/case-food-label-compliance.webp", alt: "Pet food label checked for compliance with a risk score", caption: "Product label checks" },
];

const steps = [
  ["Real documents first", "I start from the client's own documents, not a demo set. The ugly scans are the ones that matter."],
  ["Measure it", "I measure accuracy on those documents before and after, and I report the number."],
  ["No middlemen", "I talk to the client directly, from the first call to the day the system runs on its own."],
  ["Ship early", "A working first version in days, then I improve it with real use."],
];

export default function About() {
  const timeline = [...achievements.filter((a) => a.published)].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <Page current="/about" schema={siteGraph([webPage("ProfilePage", title, "/about", description), breadcrumb("About", "/about")])}>
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{h1}</h1>
          <p className="mt-5 text-lg text-muted">
            I&apos;m Luka Minđek, an AI engineer from {person.location.city}, {person.location.country}, and the founder of{" "}
            <a href={person.links.mindx} className={link}>MindX Global</a>. I&apos;ve been building software for more than eight
            years, and for most of that time the work has been about one thing: getting computers to read what people
            would otherwise have to read and retype.
          </p>
          <p className="mt-4 text-muted">
            Invoices, orders, handwritten forms, product labels, floor plans, site photos — I build the AI that reads
            them, pulls out the fields that matter and hands back clean, checked data.
          </p>
        </div>
        <Pic src="/images/luka-mountains.webp" alt="Luka Minđek outdoors with mountains behind him" width={900} height={1200} className="mx-auto aspect-[4/5] w-full max-w-sm" priority />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat value="8+" label="years building software" />
        <Stat value="50+" label="projects delivered" />
        <Stat value="30+" label="custom AI systems" />
        <Stat value="1st" label="SheepAI hackathon 2025" />
      </div>

      <Section id="what" title="What I build">
        <p className="text-muted">
          The tools change every few months. Today that usually means vision-language models, OCR and classic computer
          vision, joined with plain software: a database, an API, a simple screen where a person can check the result.
          When a company wants answers from its own documents, I build assistants that quote the source next to every answer.
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {builds.map((b) => (
            <li key={b.src}>
              <Pic src={b.src} alt={b.alt} width={720} height={393} className="aspect-[16/10] w-full" />
              <p className="mt-2 text-sm text-ink">{b.caption}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how" title="How I work">
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-float)]">
              <p className="flex items-center gap-3 font-semibold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm text-white">{i + 1}</span>
                {t}
              </p>
              <p className="mt-2 text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {publishedAchievements.length > 0 && (
        <Section id="milestones" title="Milestones">
          <ol className="relative space-y-8 border-l-2 border-line pl-6">
            {timeline.map((a) => (
              <li key={a.event} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-card bg-accent" aria-hidden="true" />
                <p className="text-sm text-muted">
                  <time dateTime={a.date}>{formatMonth(a.date)}</time> · {a.place}
                </p>
                <p className="mt-1 text-lg font-semibold text-ink">
                  {a.title} — {a.event}
                </p>
                <p className="mt-1 text-muted">{a.summary}</p>
                {a.source && (
                  <a href={a.source} className="mt-1 inline-block text-sm text-accent hover:underline">Source</a>
                )}
                {a.image && (
                  <Pic src={a.image.src} alt={a.image.alt} width={a.image.width} height={a.image.height} className="mt-4 aspect-[3/2] w-full max-w-lg" />
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section id="mindx" title="MindX Global">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_1.2fr]">
          <a href={person.links.mindx} className="block">
            <Pic src="/images/mindx-global.webp" alt="The MindX Global homepage" width={720} height={450} className="aspect-[16/10] w-full" />
          </a>
          <p className="text-muted">
            I founded <a href={person.links.mindx} className={link}>MindX Global</a> to do this work for companies. It has
            delivered 50+ projects and 30+ custom AI systems for clients around the world. The case studies, with the
            numbers, are on the <a href={`${person.links.mindx}/blog`} className={link}>MindX blog</a>.
          </p>
        </div>
      </Section>

      <Section id="outside" title="Outside work">
        <p className="text-muted">
          I work out, go hiking and play amateur chess. More of that on{" "}
          <a href={person.links.instagram} rel="me" className={link}>Instagram</a>.
        </p>
      </Section>

      <p className="mt-14 text-muted">
        More: <Link href="/work" className={link}>my work</Link> · <Link href="/cv" className={link}>CV</Link> ·{" "}
        <a href={`mailto:${person.email}`} className={link}>email</a>
      </p>
    </Page>
  );
}
