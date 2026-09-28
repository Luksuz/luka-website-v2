import type { Metadata } from "next";
import Link from "next/link";
import Page, { Block } from "@/components/Page";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import { PhoneTrio } from "@/components/Phone";
import { Pic, Stat, IconTile, Chip } from "@/components/Bits";
import { person } from "@/content/site";
import { publishedAchievements, formatMonth } from "@/content/achievements";
import { projects, mindxWork } from "@/content/work";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage } from "@/lib/schema";

const title = `${person.name} — freelance AI engineer, founder of MindX Global`;
const description =
  "Luka Minđek is a freelance AI engineer from Croatia and founder of MindX Global. Document processing, invoice and PDF extraction, OCR, AI agents and RAG.";

export const metadata: Metadata = pageMeta({ title: title, description, path: "/" });

const nowList = [
  "Figures pulled out of PDFs and invoices",
  "Handwriting and scanned forms",
  "Product label checks",
  "Technical drawings and floor plans",
  "Answers from a company's own documents",
];

const moreLink = "inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-ink shadow-[var(--shadow-float)] hover:text-accent";

export default function Home() {
  const featured = projects.find((p) => p.id === "sofi");
  const more = ["compound", "cyber-shepherd", "solar-scan"]
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <Page current="/" bare hero={<Hero />} schema={siteGraph([webPage("WebPage", title, "", description)])}>
      {/* Numbers */}
      <section aria-label="In numbers" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat value="4 years" label="building AI and software" icon="clock" tone="sky" />
        <Stat value="50+" label="projects delivered" icon="layers" tone="mint" />
        <Stat value="30+" label="custom AI systems" icon="spark" tone="lilac" />
        <Stat value="1st" label="place, SheepAI hackathon 2025" icon="trophy" tone="sun" />
      </section>

      {/* Now */}
      <Block id="now" title="Building AI that reads paperwork" hl="reads paperwork" className="wash">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-lg text-muted">
              Most days you&apos;ll find me building at{" "}
              <a href={person.links.mindx} className="font-medium text-ink underline hover:text-accent">MindX Global</a>. I work
              with every client directly, no agency in the middle, and I&apos;m still enjoying every project.
            </p>
            <ul className="mt-6 space-y-3">
              {nowList.map((x) => (
                <li key={x} className="flex items-center gap-3 text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <a href={person.links.mindx} className="group relative block">
            <Pic src="/images/mindx-global.webp" alt="The MindX Global homepage" width={720} height={450} className="aspect-[16/10] w-full transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </Block>

      {/* Services */}
      <Block
        id="help"
       
        title="How I can help"
        hl="help"
        intro="Freelance AI engineering for teams drowning in documents and repetitive steps."
        action={<Link href="/services" className={moreLink}>All services <Icon name="arrow" className="h-4 w-4" /></Link>}
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.id}>
              <Link
                href={`/services#${s.id}`}
                className="group flex h-full flex-col rounded-3xl bg-surface p-6 shadow-[var(--shadow-float)] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <IconTile icon={s.icon} tone={s.tone} size="lg" />
                  <span className="text-sm font-semibold text-line">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink group-hover:text-accent">{s.title}</h3>
                <p className="mt-2 text-muted">{s.short}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent">
                  How it works <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      {/* Work */}
      <Block
        id="work"
       
        title="Selected work"
        hl="work"
        intro="Apps I built myself, AI experiments and a hackathon win."
        action={<Link href="/work" className={moreLink}>All work <Icon name="arrow" className="h-4 w-4" /></Link>}
      >
        {featured && (
          <article className="grid items-center overflow-hidden rounded-[32px] bg-surface shadow-[var(--shadow-float)] lg:grid-cols-2">
            <div className="flex items-end justify-center bg-[radial-gradient(80%_80%_at_50%_100%,#4f7dff_0%,#1f47d6_55%,#1a36a8_100%)] px-6 pt-10">
              <div className="w-full translate-y-6">{featured.screens && <PhoneTrio screens={featured.screens} />}</div>
            </div>
            <div className="p-6 sm:p-10">
              <Chip tone="sky">{featured.kind}</Chip>
              <h3 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{featured.name}</h3>
              <p className="mt-4 text-lg text-muted">{featured.summary}</p>
              <p className="mt-6">
                <Link href={`/work#${featured.id}`} className={moreLink}>More about {featured.name} <Icon name="arrow" className="h-4 w-4" /></Link>
              </p>
            </div>
          </article>
        )}
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {more.map((p) => (
            <li key={p.id}>
              <Link href={`/work#${p.id}`} className="group flex h-full items-center gap-4 rounded-3xl bg-surface p-3 shadow-[var(--shadow-float)] transition-transform hover:-translate-y-1">
                <img
                  src={p.screens?.[1]?.src ?? p.image?.src ?? ""}
                  alt=""
                  width={120}
                  height={120}
                  loading="lazy"
                  className={`h-24 w-24 shrink-0 rounded-2xl object-cover ${p.screens ? "object-top" : ""}`}
                />
                <span>
                  <span className="block text-xs font-medium text-accent">{p.kind}</span>
                  <span className="mt-0.5 block text-lg font-semibold text-ink group-hover:text-accent">{p.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="mt-12 text-xl font-semibold text-ink">Client work at MindX Global</h3>
        <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {mindxWork.slice(0, 4).map((w) => (
            <li key={w.href}>
              <a href={w.href} className="group block">
                <Pic src={w.img} alt={w.name} width={720} height={393} className="aspect-[16/10] w-full transition-transform group-hover:-translate-y-1" />
                <p className="mt-3 text-sm font-medium text-ink group-hover:text-accent">{w.name} →</p>
              </a>
            </li>
          ))}
        </ul>
      </Block>

      {/* Achievements */}
      {publishedAchievements.length > 0 && (
        <Block id="achievements" title="Hackathons, bootcamps and a diploma" hl="Hackathons">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {publishedAchievements.map((a) => (
              <li key={a.event} className="flex flex-col overflow-hidden rounded-3xl bg-surface shadow-[var(--shadow-float)]">
                <div className="relative">
                  {a.image ? (
                    <img src={a.image.src} alt={a.image.alt} width={a.image.width} height={a.image.height} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  ) : (
                    <div className="aspect-[4/3] w-full bg-sky" aria-hidden="true" />
                  )}
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-[var(--shadow-float)] ${
                      a.award ? "bg-accent text-white" : "bg-surface text-ink"
                    }`}
                  >
                    {a.award ? "🏆 " : ""}
                    {a.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold leading-snug text-ink">{a.event}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <Icon name="pin" className="h-4 w-4 shrink-0" /> {a.place}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                    <Icon name="calendar" className="h-4 w-4 shrink-0" /> <time dateTime={a.date}>{formatMonth(a.date)}</time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Block>
      )}

      {/* Silicon Valley */}
      <section aria-labelledby="sv-title" className="overflow-hidden rounded-[28px] bg-sky shadow-[var(--shadow-soft)] sm:rounded-[40px]">
        <div className="grid items-center gap-10 px-5 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 id="sv-title" className="text-3xl font-semibold text-ink sm:text-[44px]">Fresh from Silicon Valley</h2>
            <p className="mt-4 text-lg text-ink/75">
              Winning SheepAI with Ivan Židov sent us to California for two weeks of ABC BootCamps: startup workshops, a
              pitch on stage, a stop at Tesla and a lot of San Francisco.
            </p>
            <p className="mt-6">
              <Link href="/about#silicon-valley" className={moreLink}>See the photos <Icon name="arrow" className="h-4 w-4" /></Link>
            </p>
          </div>
          <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[420px]" aria-hidden="false">
            <figure className="absolute left-0 top-6 w-[46%] -rotate-6 rounded-2xl bg-white p-2 pb-8 shadow-[var(--shadow-soft)]">
              <img src="/images/abc-golden-gate.webp" alt="Luka Minđek in front of the Golden Gate Bridge" width={933} height={1400} loading="lazy" className="aspect-[3/4] w-full rounded-xl object-cover" />
              <figcaption className="mt-2 text-center text-xs text-muted">Golden Gate</figcaption>
            </figure>
            <figure className="absolute right-0 top-0 w-[48%] rotate-3 rounded-2xl bg-white p-2 pb-8 shadow-[var(--shadow-soft)]">
              <img src="/images/abc-tesla.webp" alt="Luka Minđek on a Cybertruck at the Tesla factory" width={1400} height={1050} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
              <figcaption className="mt-2 text-center text-xs text-muted">Tesla factory</figcaption>
            </figure>
            <figure className="absolute bottom-0 right-[8%] w-[50%] -rotate-2 rounded-2xl bg-white p-2 pb-8 shadow-[var(--shadow-soft)]">
              <img src="/images/abc-certificates.webp" alt="Luka Minđek and Ivan Židov with their ABC Silicon Valley certificates" width={1400} height={933} loading="lazy" className="aspect-[3/2] w-full rounded-xl object-cover" />
              <figcaption className="mt-2 text-center text-xs text-muted">Certificates, with Ivan</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </Page>
  );
}
