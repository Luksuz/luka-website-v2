import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { person } from "@/content/site";
import { projects, mindxWork } from "@/content/work";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Luka Minđek — work and projects";
const h1 = "Work and projects";
const description =
  "Projects by Luka Minđek: Cyber Shepherd (SheepAI hackathon winner), a container code scanner, a RAG app generator, and client work at MindX Global.";

export const metadata: Metadata = pageMeta({ title: title, description, path: "/work" });

export default function Work() {
  return (
    <Page
      current="/work"
      schema={siteGraph([webPage("CollectionPage", title, "/work", description), breadcrumb("Work", "/work")])}
    >
      <h1 className="text-4xl font-extrabold text-ink">{h1}</h1>
      <p className="mt-5 text-lg text-muted">
        Things I've built on my own and in competitions. Client projects are written up on the MindX blog and linked at the end.
      </p>

      <div className="mt-10 space-y-12">
        {projects.map((p) => (
          <article key={p.name} aria-labelledby={slug(p.name)}>
            <h2 id={slug(p.name)} className="text-2xl font-bold text-ink">{p.name}</h2>
            <p className="mt-1 text-sm font-medium text-teal">{p.kind}</p>
            <p className="mt-3 text-muted">{p.summary}</p>
            <p className="mt-2 text-muted"><span className="font-medium text-ink">My part:</span> {p.role}</p>
            {p.url && (
              <p className="mt-2"><a href={p.url} className="text-accent-dark underline">Open {p.name}</a></p>
            )}
            {p.image && (
              <img
                src={p.image.src}
                alt={p.image.alt}
                width={p.image.width}
                height={p.image.height}
                loading="lazy"
                decoding="async"
                className="mt-4 w-full rounded-lg border border-line"
              />
            )}
          </article>
        ))}
      </div>

      <Section id="client-work" title="Client work at MindX Global">
        <p className="text-muted">
          What I build for companies, with the results, is written up on{" "}
          <a href={`${person.links.mindx}/blog`} className="text-ink underline hover:text-accent-dark">mindx.global</a>. A few:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5">
          {mindxWork.map((w) => (
            <li key={w.href}>
              <a href={w.href} className="text-ink underline hover:text-accent-dark">{w.name}</a>
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
