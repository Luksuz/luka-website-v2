import type { Metadata } from "next";
import Page, { Section } from "@/components/Page";
import { Pic, Chip } from "@/components/Bits";
import { person, personId, siteUrl } from "@/content/site";
import { services, steps, faqs } from "@/content/services";
import { pageMeta } from "@/lib/meta";
import { siteGraph, webPage, breadcrumb } from "@/lib/schema";

const title = "Freelance AI Engineer: Document AI & Agents | Luka Minđek";
const h1 = "Freelance AI engineer for documents, automation and AI agents";
const description =
  "Hire Luka Minđek, a freelance AI engineer: intelligent document processing, invoice and PDF data extraction, OCR, AI agents, RAG chatbots and computer vision.";
const calendly = "https://calendly.com/lukamindjek/ai-informational-meeting";

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
      <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{h1}</h1>
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
          <a key={s.id} href={`#${s.id}`} className="rounded-full bg-surface px-3 py-1 text-sm text-ink shadow-[var(--shadow-float)] hover:text-accent">
            {s.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-14">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-8">
            <div className={`grid items-start gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <h2 id={`${s.id}-title`} className="text-2xl font-semibold text-ink sm:text-3xl">{s.title}</h2>
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
                  {[...s.examples, ...s.keywords].map((x) => (
                    <li key={x}><Chip>{x}</Chip></li>
                  ))}
                </ul>
              </div>
              <a href={s.caseStudy.href} className="group block">
                <Pic src={s.caseStudy.img} alt={s.caseStudy.name} width={720} height={393} className="aspect-[16/10] w-full transition-transform group-hover:-translate-y-1" />
                <p className="mt-2 text-sm text-muted">
                  Real project: <span className="text-ink group-hover:text-accent">{s.caseStudy.name} →</span>
                </p>
              </a>
            </div>
          </section>
        ))}
      </div>

      <Section id="how" title="How we'd work together">
        <ol className="grid gap-5 sm:grid-cols-2">
          {steps.map((st, i) => (
            <li key={st.title} className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-float)]">
              <p className="text-sm font-medium text-accent">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{st.title}</h3>
              <p className="mt-2 text-muted">{st.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="why" title="Why people work with me">
        <ul className="grid gap-3 text-muted sm:grid-cols-2">
          <li>✓ 50+ AI projects built, most of them on messy real-world documents</li>
          <li>✓ You talk to the engineer who builds it, no account managers</li>
          <li>✓ 1st place at the SheepAI hackathon in Zagreb, 2025</li>
          <li>✓ Honest answers, including &quot;AI isn&apos;t the right tool for this&quot;</li>
        </ul>
      </Section>

      <Section id="faq" title="Questions people usually ask">
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

      <Section id="start" title="Got a pile of documents?">
        <p className="text-muted">
          Send me one example and a sentence about what you&apos;d like to happen with it. I&apos;ll reply within a day
          with an honest take. <a href={`mailto:${person.email}`} className="text-ink underline hover:text-accent-dark">{person.email}</a>{" "}
          or <a href={calendly} className="text-ink underline hover:text-accent-dark">book a free call</a>.
        </p>
      </Section>
    </Page>
  );
}
