import Link from "next/link";
import { person, mindxUrl } from "@/content/site";

const cards = [
  {
    href: "/work",
    label: "AI engineer",
    img: "/images/ai-document-analysis.webp",
    alt: "AI reading a technical drawing and turning it into structured data",
    w: 900,
    h: 491,
    pos: "lg:left-[78%] lg:top-[8%]",
  },
  {
    href: mindxUrl,
    label: "Founder, MindX Global",
    img: "/images/mindx-brain.webp",
    alt: "MindX Global logo, a brain drawn as a circuit",
    w: 600,
    h: 450,
    pos: "lg:left-[91%] lg:top-[30%]",
  },
  {
    href: "/about",
    label: "Hackathon winner",
    img: "/images/sheepai-hackathon.webp",
    alt: "Luka Minđek winning 1st place at the SheepAI hackathon in Zagreb",
    w: 1024,
    h: 683,
    pos: "lg:left-[79%] lg:top-[62%]",
  },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-name" className="relative lg:h-[680px]">
      {/* Decoration */}
      <span className="orb-ring left-[27%] top-[8%] hidden h-9 w-9 lg:block" aria-hidden="true" />
      <span className="orb left-[31%] top-[80%] hidden h-8 w-8 lg:block" aria-hidden="true" />
      <span className="dot-soft left-[4%] top-[6%] h-7 w-7" aria-hidden="true" />
      <span className="dot-soft right-[3%] top-[3%] h-6 w-6" aria-hidden="true" />
      <span className="dot-soft bottom-[6%] right-[10%] h-4 w-4" aria-hidden="true" />

      <div className="relative grid grid-cols-1 lg:h-full lg:grid-cols-[1fr_1.05fr_1fr] lg:grid-rows-[minmax(0,1fr)]">
        {/* Left: intro */}
        <div className="relative z-10 self-center px-6 pt-10 sm:px-12 lg:pb-10 lg:pt-0">
          <p className="hero-name text-[22px] sm:text-[26px]" aria-hidden="true">Hello, I&apos;m</p>
          <h1 id="hero-name" className="hero-name mt-3 text-[44px] uppercase sm:text-[60px] xl:text-[66px]">
            <span className="sr-only">Hello, I&apos;m </span>
            Luka
            <br />
            Minđek
          </h1>
          <p className="mt-5 max-w-[360px] text-[16px] leading-[1.75] text-muted">
            Freelance AI engineer from {person.location.city}, {person.location.country}. I teach computers to read the boring
            paperwork so people don&apos;t have to, and I run MindX Global.
          </p>

          <div className="mt-8">
            <p className="relative inline-block rounded-xl bg-surface px-4 py-2.5 text-[13px] shadow-[var(--shadow-float)]">
              {person.email}
              <span className="absolute -bottom-1.5 left-10 h-3 w-3 rotate-45 bg-surface" aria-hidden="true" />
            </p>
            <ul className="mt-5 flex items-center gap-3">
              <li>
                <a
                  href={`mailto:${person.email}`}
                  aria-label="Email Luka"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow-accent)] hover:bg-accent-dark"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={person.links.linkedin}
                  rel="me"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink shadow-[var(--shadow-float)] hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={person.links.github}
                  rel="me"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink shadow-[var(--shadow-float)] hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={person.links.instagram}
                  rel="me"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-ink shadow-[var(--shadow-float)] hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Centre: portrait in front of a large soft circle */}
        <div className="relative mt-8 flex h-[440px] min-h-0 items-end justify-center overflow-hidden sm:h-[540px] lg:mt-0 lg:h-[600px] lg:self-end lg:overflow-visible">
          <div
            className="absolute bottom-[-20%] left-1/2 aspect-square w-[92%] max-w-[640px] lg:bottom-[-12%] lg:w-[118%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#f7f8fa_55%,rgba(247,248,250,0)_72%)]"
            aria-hidden="true"
          />
          <img
            src="/images/luka-cutout.webp"
            alt="Luka Minđek"
            width={1137}
            height={1400}
            fetchPriority="high"
            className="relative z-10 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_40px_rgba(30,37,48,0.18)]"
          />
        </div>

        {/* Right: floating cards (a row on small screens) */}
        <ul className="relative z-10 flex gap-4 overflow-x-auto px-6 pb-8 pt-6 lg:static lg:block lg:overflow-visible lg:p-0">
          {cards.map((c) => (
            <li key={c.label} className={`shrink-0 lg:absolute lg:w-[180px] lg:-translate-x-1/2 ${c.pos}`}>
              <a href={c.href} className="group block w-[196px] text-center lg:w-auto">
                <span className="block rounded-2xl bg-surface p-2 shadow-[var(--shadow-float)] transition-transform group-hover:-translate-y-1">
                  <img src={c.img} alt={c.alt} width={c.w} height={c.h} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
                </span>
                <span className="mx-auto my-2 block h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
                <span className="block whitespace-nowrap rounded-2xl bg-surface px-4 py-3 text-[14px] text-ink shadow-[var(--shadow-float)] group-hover:text-accent">
                  {c.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/work"
          aria-label="See my work"
          className="absolute bottom-8 right-6 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-surface text-ink shadow-[var(--shadow-float)] hover:text-accent lg:flex"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
