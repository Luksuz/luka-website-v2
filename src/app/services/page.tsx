import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { Pic, Chip, Eyebrow, IconTile, tones } from "@/components/Bits";
import { person, personId, siteUrl, calendly } from "@/content/site";
import { services, steps, faqs } from "@/content/services";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Freelance AI Engineer: Document AI & Agents | Luka Minđek";
const h1 = "Freelance AI engineer for documents, automation and AI agents";
const description =
  "Hire Luka Minđek, a freelance AI engineer: intelligent document processing, invoice and PDF data extraction, OCR, AI agents, RAG chatbots and computer vision.";

const why = [
  { icon: "layers", text: "50+ AI projects built, most of them on messy real-world documents" },
  { icon: "users", text: "You talk to the engineer who builds it, no account managers" },
  { icon: "trophy", text: "1st place at the SheepAI hackathon in Zagreb, 2025" },
  { icon: "check", text: "Honest answers, including \"AI isn't the right tool for this\"" },
] as const;

export const metadata: Metadata = pageMeta({ title, description, path: "/services" });

const serviceSchema = services.map((s) => ({
  "@type": "Service",
  "@id": `${siteUrl}/services#${s.id}`,
  name: s.title,
  description: `${s.short} ${s.build}`,
  serviceType: s.title,
  provider: { "@id": personId },
  areaServed: "Worldwide",
}));

export default function Services() {
  return (
    <Page
      current="/services"
      schema={siteGraph([webPage("WebPage", title, "/services", description), breadcrumb("Services", "/services"), ...serviceSchema])}
    >
      <Eyebrow>Services</Eyebrow>
      <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-[52px] sm:leading-[1.08]">{h1}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        If your team spends its days retyping PDFs, reading scans or answering the same questions, I can probably help.
        I build AI that reads documents and images and does the boring steps for you, and I build it for real use, not for a demo.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={calendly} className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-[var(--shadow-accent)] hover:bg-accent-dark">
          Book a free 15-min call
        </a>
        <a href={`mailto:${person.email}`} className="rounded-full bg-surface px-6 py-3 font-medium text-ink shadow-[var(--shadow-float)] hover:text-accent">
          Or send me an email
        </a>
      </div>

      <nav aria-label="Services on this page" className="mt-10 flex flex-wrap gap-2">
        {services.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 rounded-full bg-surface py-1.5 pl-1.5 pr-4 text-sm text-ink shadow-[var(--shadow-float)] hover:text-accent">
            <IconTile icon={s.icon} tone={s.tone} />
            {s.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-14">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-8 rounded-[28px] bg-surface p-5 shadow-[var(--shadow-float)] sm:p-8">
            <div className={`grid items-start gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <IconTile icon={s.icon} tone={s.tone} size="lg" />
                <h2 id={`${s.id}-title`} className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">{s.title}</h2>
                <p className="mt-2 text-lg text-ink">{s.short}</p>
                <dl className="mt-5 space-y-3 text-muted">
                  <div>
                    <dt className="font-medium text-ink">Sound familiar?</dt>
                    <dd>{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">What I build</dt>
                    <dd>{s.build}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">What you get</dt>
                    <dd>{s.result}</dd>
                  </div>
                </dl>
                <h3 className="sr-only">Typical uses</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.examples.map((x) => (
                    <li key={x}><Chip tone={s.tone}>{x}</Chip></li>
                  ))}
                  {s.keywords.map((x) => (
                    <li key={x}><Chip>{x}</Chip></li>
                  ))}
                </ul>
              </div>
              <a href={s.caseStudy.href} className="group block">
                <Pic src={s.caseStudy.img} alt={s.caseStudy.name} width={720} height={393} className="aspect-[16/10] w-full shadow-none transition-transform group-hover:-translate-y-1" />
                <p className="mt-2 text-sm text-muted">
                  Real project: <span className="text-ink group-hover:text-accent">{s.caseStudy.name} →</span>
                </p>
              </a>
            </div>
          </section>
        ))}
      </div>

      <Section id="how" eyebrow="The process" title="How we'd work together" hl="work together">
        <ol className="grid gap-5 sm:grid-cols-2">
          {steps.map((st, i) => (
            <li key={st.title} className="rounded-3xl bg-surface p-6 shadow-[var(--shadow-float)]">
              <p className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${["bg-sky text-sky-ink", "bg-mint text-mint-ink", "bg-lilac text-lilac-ink", "bg-peach text-peach-ink"][i]}`}>Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{st.title}</h3>
              <p className="mt-2 text-muted">{st.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="why" eyebrow="Why me" title="Why people work with me" hl="work with me">
        <ul className="grid gap-4 sm:grid-cols-2">
          {why.map((w, i) => (
            <li key={w.text} className="flex items-center gap-4 rounded-3xl bg-surface p-5 text-ink shadow-[var(--shadow-float)]">
              <IconTile icon={w.icon} tone={tones[i]} />
              {w.text}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Questions people usually ask" hl="usually ask">
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-ink marker:hidden">
                <span className="mr-2 inline-block text-accent transition-transform group-open:rotate-45">+</span>
                {f.q}
              </summary>
              <p className="mt-2 pl-6 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </Page>
  );
}
