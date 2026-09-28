import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { Pic } from "@/components/Bits";
import { person } from "@/content/site";
import { projects, mindxWork } from "@/content/work";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Luka Minđek — work and projects";
const h1 = "Work and projects";
const description =
  "Projects by Luka Minđek: Cyber Shepherd, winner of the SheepAI hackathon, and client work at MindX Global in document AI and computer vision.";

export const metadata: Metadata = pageMeta({ title, description, path: "/work" });

export default function Work() {
  return (
    <Page current="/work" schema={siteGraph([webPage("CollectionPage", title, "/work", description), breadcrumb("Work", "/work")])}>
      <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{h1}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Things I&apos;ve built for fun and in competitions, plus the client work I do at MindX. More personal projects are on the way.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} aria-labelledby={slug(p.name)} className="flex flex-col rounded-3xl bg-surface p-4 shadow-[var(--shadow-float)]">
            {p.image ? (
              <Pic src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} className="aspect-[16/10] w-full shadow-none" />
            ) : (
              <div className="flex aspect-[16/10] w-full items-center justify-center rounded-2xl bg-stone text-4xl font-semibold text-accent" aria-hidden="true">
                {p.name.charAt(0)}
              </div>
            )}
            <div className="px-2 pb-2 pt-5">
              <p className="text-sm font-medium text-accent">{p.kind}</p>
              <h2 id={slug(p.name)} className="mt-1 text-2xl font-semibold text-ink">{p.name}</h2>
              <p className="mt-3 text-muted">{p.summary}</p>
              <p className="mt-3 text-muted"><span className="font-medium text-ink">My part:</span> {p.role}</p>
              {p.url && <p className="mt-3"><a href={p.url} className="text-accent underline">Open {p.name}</a></p>}
            </div>
          </article>
        ))}
      </div>

      <Section id="client-work" title="Client work at MindX Global">
        <p className="text-muted">
          What I build for companies, with the results, is written up on{" "}
          <a href={`${person.links.mindx}/blog`} className="text-ink underline hover:text-accent">mindx.global</a>.
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mindxWork.map((w) => (
            <li key={w.href}>
              <a href={w.href} className="group block">
                <Pic src={w.img} alt={w.name} width={720} height={393} className="aspect-[16/10] w-full transition-transform group-hover:-translate-y-1" />
                <p className="mt-2 text-sm text-ink group-hover:text-accent">{w.name} →</p>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
