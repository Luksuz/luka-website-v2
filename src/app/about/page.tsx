import type { Metadata } from "next";
import Link from "next/link";
import Page, { Section } from "@/components/Page";
import { person } from "@/content/site";
import { publishedAchievements, formatMonth } from "@/content/achievements";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "About Luka Minđek — AI engineer from Croatia";
const h1 = "About Luka Minđek";
const description =
  "Who Luka Minđek is: AI engineer from Varaždin, Croatia, founder of MindX Global, SheepAI hackathon winner. How he works and what he builds.";

export const metadata: Metadata = pageMeta({ title: title, description, path: "/about" });

const link = "text-ink underline hover:text-accent-dark";

export default function About() {
  return (
    <Page
      current="/about"
      schema={siteGraph([webPage("ProfilePage", title, "/about", description), breadcrumb("About", "/about")])}
    >
      <h1 className="text-4xl font-extrabold text-ink">{h1}</h1>
      <p className="mt-5 text-lg text-muted">
        I'm Luka Minđek, an AI engineer from {person.location.city}, {person.location.country}, and the founder of{" "}
        <a href={person.links.mindx} className={link}>MindX Global</a>. I've been building software for more than eight
        years, and for most of that time the work has been about one thing: getting computers to read what people would
        otherwise have to read and retype.
      </p>

      <figure className="mt-10">
        <img
          src="/images/sheepai-hackathon.webp"
          alt="Luka Minđek winning 1st place at the SheepAI hackathon in Zagreb with team Cyber Shepherd"
          width={1024}
          height={683}
          className="w-full rounded-lg border border-line"
        />
        <figcaption className="mt-2 text-sm text-muted">1st place at the SheepAI hackathon, Zagreb, November 2025.</figcaption>
      </figure>

      <Section id="what" title="What I build">
        <div className="space-y-4 text-muted">
          <p>
            Businesses still run on paper and PDFs: invoices, purchase orders, handwritten forms, product labels,
            floor plans, site photos. Someone reads each one and types the numbers into another system. I build the AI
            that does that step — it reads the document or image, pulls out the fields that matter and hands back clean,
            checked data.
          </p>
          <p>
            The tools change every few months. Today that usually means vision-language models, OCR and classic computer
            vision, joined with plain software: a database, an API, a simple screen where a person can check the result.
            When a company wants answers from its own documents, I build assistants that quote the source next to every answer.
          </p>
        </div>
      </Section>

      <Section id="how" title="How I work">
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>I start from the client's real documents, not a demo set. The ugly scans are the ones that matter.</li>
          <li>I measure accuracy on those documents before and after, and I report the number.</li>
          <li>I talk to the client directly, from the first call to the day the system runs on its own.</li>
          <li>I ship small and early: a working first version in days, then improve it with real use.</li>
        </ul>
      </Section>

      <Section id="mindx" title="MindX Global">
        <p className="text-muted">
          I founded <a href={person.links.mindx} className={link}>MindX Global</a> to do this work for companies. It has
          delivered 50+ projects and 30+ custom AI systems for clients around the world. The case studies, with the
          numbers, are on the <a href={`${person.links.mindx}/blog`} className={link}>MindX blog</a>.
        </p>
      </Section>

      {publishedAchievements.length > 0 && (
        <Section id="competitions" title="Competitions and awards">
          <ul className="space-y-4 text-muted">
            {publishedAchievements.map((a) => (
              <li key={a.event}>
                <p className="font-display font-semibold text-ink">
                  {a.title} — {a.event}, {a.place}, <time dateTime={a.date}>{formatMonth(a.date)}</time>
                </p>
                <p>{a.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="outside" title="Outside work">
        <p className="text-muted">I work out, go hiking and play amateur chess.</p>
      </Section>

      <p className="mt-14 text-muted">
        More: <Link href="/work" className={link}>my work</Link> · <Link href="/cv" className={link}>CV</Link> ·{" "}
        <a href={`mailto:${person.email}`} className={link}>email</a>
      </p>
    </Page>
  );
}
