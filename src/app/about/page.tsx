import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { Stat, Pic, Eyebrow, IconTile, tones, DetectBox } from "@/components/Bits";
import { person } from "@/content/site";
import { achievements, publishedAchievements, formatMonth } from "@/content/achievements";
import { abcPhotos, funPhotos } from "@/content/photos";
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
          <Eyebrow>About me</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-[56px] sm:leading-[1.05]">{h1}</h1>
          <p className="mt-5 text-lg text-muted">
            Hey, I&apos;m Luka! I&apos;m an AI engineer from {person.location.city}, {person.location.country}, and the founder of{" "}
            <a href={person.links.mindx} className={link}>MindX Global</a>. I&apos;ve been building AI and software for four
            years now, and most of it comes down to one simple idea: computers should read the boring paperwork, so people
            don&apos;t have to.
          </p>
          <p className="mt-4 text-muted">
            Invoices, orders, handwritten forms, product labels, floor plans, site photos — you name it. I build the AI
            that reads them, picks out what matters and hands back clean, checked data. Nobody misses retyping.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          {/* The photo is tilted; the detection box stays level with the page. */}
          <Pic src="/images/luka-mountains.webp" alt="Luka Minđek outdoors with mountains behind him" width={900} height={1200} className="aspect-[3/4] w-full rotate-2" priority />
          <DetectBox left={34.8} top={18.5} width={31} height={30} />
          <span className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-ink shadow-[var(--shadow-float)]">
            <IconTile icon="pin" tone="mint" /> {person.location.city}, {person.location.country}
          </span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat value="4" label="years building AI" icon="clock" tone="sky" />
        <Stat value="50+" label="projects delivered" icon="layers" tone="mint" />
        <Stat value="30+" label="custom AI systems" icon="spark" tone="lilac" />
        <Stat value="1st" label="place at SheepAI 2025" icon="trophy" tone="sun" />
      </div>

      <Section id="what" eyebrow="What I build" title="Computers that read the boring stuff" hl="read">
        <p className="text-muted">
          The tools change every few months. Today that usually means vision-language models, OCR and classic computer
          vision, joined with plain software: a database, an API, a simple screen where a person can check the result.
          When a company wants answers from its own documents, I build assistants that quote the source next to every answer.
        </p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {builds.map((b) => (
            <li key={b.src}>
              <div className="rounded-3xl bg-surface p-3 shadow-[var(--shadow-float)]">
                <Pic src={b.src} alt={b.alt} width={720} height={393} className="aspect-[16/10] w-full shadow-none" />
                <p className="px-2 pb-1 pt-3 font-medium text-ink">{b.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how" eyebrow="How I work" title="Four habits that keep projects on track" hl="on track">
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-surface p-6 shadow-[var(--shadow-float)]">
              <p className="flex items-center gap-3 text-lg font-semibold text-ink">
                <IconTile icon={(["doc", "check", "users", "rocket"] as const)[i]} tone={tones[i]} />
                {t}
              </p>
              <p className="mt-3 text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {publishedAchievements.length > 0 && (
        <Section id="milestones" eyebrow="Timeline" title="Milestones so far" hl="so far">
          <ol className="relative space-y-8 border-l-2 border-line pl-6">
            {timeline.map((a) => (
              <li key={a.event} className="relative grid gap-5 md:grid-cols-[1fr_300px] md:items-start">
                <span className={`absolute -left-[37px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-card text-[10px] ${a.award ? "bg-sun" : "bg-accent"}`} aria-hidden="true">{a.award ? "🏆" : ""}</span>
                <div>
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
                </div>
                {a.image && a.image.width > a.image.height && (
                  <Pic src={a.image.src} alt={a.image.alt} width={a.image.width} height={a.image.height} className="aspect-[3/2] w-full max-w-lg" />
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section id="mindx" eyebrow="My company" title="MindX Global">
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

      <Section id="silicon-valley" eyebrow="July 2026" title="Two weeks in Silicon Valley" hl="Silicon Valley">
        <p className="text-muted">
          Winning SheepAI came with a pretty great prize: a place on{" "}
          <a href="https://abcbootcamps.com/programs/abc-silicon-valley/" className={link}>ABC BootCamps Silicon Valley</a>{" "}
          in July 2026. Two weeks of startup workshops and pitching in San Jose and San Francisco, a stop at Tesla&apos;s
          factory, and a lot of walking around the city in between. The best lesson fit on one banner:{" "}
          <em>think big, start small, learn fast</em>.
        </p>
        <ul className="mt-6 columns-2 gap-4 sm:columns-3 [&>li]:mb-4">
          {abcPhotos.map((ph) => (
            <li key={ph.src} className="break-inside-avoid">
              <figure>
                <Pic src={ph.src} alt={ph.alt} width={ph.width} height={ph.height} className="w-full" />
                <figcaption className="mt-2 text-sm text-muted">{ph.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="outside" eyebrow="Off the clock" title="Outside work" hl="Outside">
        <p className="text-muted">
          When I&apos;m not building things, I&apos;m working out, hiking, playing (amateur, very amateur) chess or on a road
          trip. Here are a few shots, in case you want to see the person behind the code. More on{" "}
          <a href={person.links.instagram} rel="me" className={link}>Instagram</a>.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {funPhotos.map((ph) => (
            <li key={ph.src}>
              <figure>
                <Pic src={ph.src} alt={ph.alt} width={ph.width} height={ph.height} className="aspect-[3/4] w-full" />
                <figcaption className="mt-2 text-sm text-muted">{ph.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

    </Page>
  );
}
