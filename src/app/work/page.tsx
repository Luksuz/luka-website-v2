import type { Metadata } from "next";
import Page, { Block } from "@/components/Page";
import { Pic, Chip, IconTile, toneBg } from "@/components/Bits";
import { PhoneTrio } from "@/components/Phone";
import { person } from "@/content/site";
import { projects, mindxWork, type Project } from "@/content/work";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Luka Minđek — work and projects";
const h1 = "Work and projects";
const description =
  "Apps and AI projects by Luka Minđek: Sofi and Compound mobile apps, Solar Scan, Nota, PostPilot, the SheepAI-winning Cyber Shepherd and client work at MindX Global.";

export const metadata: Metadata = pageMeta({ title, description, path: "/work" });

// The panel behind each app's phones, picked to sit well with its screenshots.
const appPanel: Record<string, string> = {
  sofi: "bg-[radial-gradient(80%_80%_at_50%_100%,#4f7dff_0%,#1f47d6_55%,#1a36a8_100%)]",
  compound: "bg-[radial-gradient(80%_80%_at_50%_100%,#ffffff_0%,#e7edf7_60%,#d5deec_100%)]",
};

export default function Work() {
  const apps = projects.filter((p) => p.screens?.length);
  const others = projects.filter((p) => !p.screens?.length);
  return (
    <Page current="/work" bare schema={siteGraph([webPage("CollectionPage", title, "/work", description), breadcrumb("Work", "/work")])}>
      <section className="wash relative overflow-hidden rounded-[28px] px-5 py-12 shadow-[var(--shadow-soft)] sm:rounded-[40px] sm:px-12 sm:py-16">
        <span className="orb right-[10%] top-[22%] hidden h-10 w-10 md:block" aria-hidden="true" />
        <span className="orb-ring right-[22%] top-[60%] hidden h-8 w-8 md:block" aria-hidden="true" />
        <h1 className="text-4xl font-semibold text-ink sm:text-[64px] sm:leading-[1.02]">{h1}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Apps I designed and built myself, AI experiments, a hackathon win and a few client builds. The work I do for
          companies at MindX is at the bottom.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {projects.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="inline-block rounded-full bg-surface px-3.5 py-1.5 text-sm text-ink shadow-[var(--shadow-float)] hover:text-accent">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Block id="apps" title="Apps you can hold" hl="hold" intro="Designed, built and shipped by me, from the first sketch to the App Store paywall.">
        <div className="space-y-8">
          {apps.map((p, i) => (
            <article key={p.id} id={p.id} aria-labelledby={`${p.id}-title`} className="scroll-mt-8 overflow-hidden rounded-[32px] bg-surface shadow-[var(--shadow-float)]">
              <div className={`grid items-center lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`flex items-end justify-center px-6 pt-10 ${appPanel[p.id] ?? "bg-sky"}`}>
                  <div className="w-full translate-y-6">{p.screens && <PhoneTrio screens={p.screens} />}</div>
                </div>
                <div className="p-6 sm:p-10">
                  <Chip tone="sky">{p.kind}</Chip>
                  <h3 id={`${p.id}-title`} className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{p.name}</h3>
                  <p className="mt-4 text-lg text-muted">{p.summary}</p>
                  <p className="mt-4 text-muted"><span className="font-semibold text-ink">My part:</span> {p.role}</p>
                  <Stack items={p.stack} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Block>

      <Block id="projects" title="More things I built" hl="built">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <li key={p.id} className={i === 0 || i === others.length - 1 ? "lg:col-span-2" : ""}>
              <ProjectCard p={p} wide={i === 0 || i === others.length - 1} />
            </li>
          ))}
        </ul>
      </Block>

      <Block
        id="client-work"
       
        title="Client work at MindX Global"
        hl="MindX Global"
        intro={
          <>
            What I build for companies, with the results, is written up on{" "}
            <a href={`${person.links.mindx}/blog`} className="text-ink underline hover:text-accent">mindx.global</a>.
          </>
        }
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mindxWork.map((w) => (
            <li key={w.href}>
              <a href={w.href} className="group block">
                <span className="block rounded-3xl bg-surface p-2.5 shadow-[var(--shadow-float)] transition-transform group-hover:-translate-y-1">
                  <Pic src={w.img} alt={w.name} width={720} height={393} className="aspect-[16/10] w-full shadow-none" />
                  <span className="block px-1.5 pb-1 pt-3 text-sm font-medium text-ink group-hover:text-accent">{w.name} →</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Block>
    </Page>
  );
}

function ProjectCard({ p, wide = false }: { p: Project; wide?: boolean }) {
  const fill = wide ? "lg:aspect-auto lg:h-full" : "";
  return (
    <article
      id={p.id}
      aria-labelledby={`${p.id}-title`}
      className={`flex h-full scroll-mt-8 flex-col overflow-hidden rounded-3xl bg-surface shadow-[var(--shadow-float)] ${wide ? "lg:grid lg:grid-cols-[1.15fr_1fr]" : ""}`}
    >
      <div className="relative">
        {p.image ? (
          <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} loading="lazy" decoding="async" className={`aspect-[16/10] w-full object-cover ${fill}`} />
        ) : (
          <div className={`dot-grid relative flex aspect-[16/10] ${fill} w-full flex-col items-center justify-center gap-2 overflow-hidden px-6 ${toneBg[p.tone ?? "sky"]}`}>
            {p.icon && (
              <span className="mb-1 rounded-2xl bg-white p-1 shadow-[var(--shadow-float)]">
                <IconTile icon={p.icon} tone={p.tone} size="lg" />
              </span>
            )}
            {p.panel?.map((x, n) => (
              <span
                key={x}
                className={`rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-[var(--shadow-float)] ${n % 2 ? "translate-x-6" : "-translate-x-6"}`}
              >
                {x}
              </span>
            ))}
          </div>
        )}
        {p.award && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-[var(--shadow-float)]">🏆 1st place</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-accent">{p.kind}</p>
        <h3 id={`${p.id}-title`} className="mt-1 text-2xl font-semibold text-ink">{p.name}</h3>
        <p className="mt-3 text-muted">{p.summary}</p>
        <p className="mt-3 text-sm text-muted"><span className="font-semibold text-ink">My part:</span> {p.role}</p>
        <div className="mt-auto">
          <Stack items={p.stack} />
        </div>
        {p.url && <p className="mt-3"><a href={p.url} className="text-accent underline">Open {p.name}</a></p>}
      </div>
    </article>
  );
}

function Stack({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
      {items.map((s) => (
        <li key={s} className="rounded-full bg-stone px-3 py-1 text-xs font-medium text-ink">{s}</li>
      ))}
    </ul>
  );
}
