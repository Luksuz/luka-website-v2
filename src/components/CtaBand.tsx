import { person, calendly } from "@/content/site";
import Icon from "./Icon";

/** Dark "let's talk" band shown above the footer on every page. */
export default function CtaBand({ wide = false }: { wide?: boolean }) {
  return (
    <section aria-labelledby="cta-title" className={`mx-auto mt-6 px-3 sm:mt-8 sm:px-6 ${wide ? "max-w-[1320px]" : "max-w-5xl"}`}>
      <div className="cta-band relative overflow-hidden rounded-[28px] px-6 py-12 text-white shadow-[var(--shadow-soft)] sm:rounded-[40px] sm:px-12 sm:py-16">
        <span className="orb right-[8%] top-[18%] hidden h-10 w-10 opacity-80 md:block" aria-hidden="true" />
        <span className="orb-ring right-[20%] bottom-[16%] hidden h-8 w-8 opacity-60 md:block" aria-hidden="true" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 id="cta-title" className="text-3xl font-semibold leading-tight sm:text-5xl">
              Got a pile of documents you never want to retype again?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/75">
              Send me one example and a sentence about what should happen with it. I&apos;ll reply within a day with an
              honest take. Or just say hi, that&apos;s fine too.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <a
              href={calendly}
              className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 font-semibold text-white shadow-[var(--shadow-accent)] hover:bg-accent-dark"
            >
              <Icon name="calendar" /> Book a free 15-min call
            </a>
            <a
              href={`mailto:${person.email}`}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-ink hover:bg-sky"
            >
              <Icon name="mail" /> {person.email}
            </a>
            <p className="flex justify-center gap-5 pt-1 text-sm text-white/70 lg:justify-start">
              <a href={person.links.linkedin} rel="me" className="hover:text-white">LinkedIn</a>
              <a href={person.links.github} rel="me" className="hover:text-white">GitHub</a>
              <a href={person.links.instagram} rel="me" className="hover:text-white">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
