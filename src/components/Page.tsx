import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import CtaBand from "./CtaBand";
import { Hl } from "./Bits";

export default function Page({
  current,
  schema,
  hero,
  bare = false,
  cta = true,
  children,
}: {
  current: string;
  schema: object;
  /** Home page: a full-width hero card that holds the header. */
  hero?: React.ReactNode;
  /** Sections bring their own cards instead of sitting in one big card. */
  bare?: boolean;
  /** The dark "let's talk" band above the footer. */
  cta?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>
      {hero ? (
        <div className="px-3 pt-3 sm:px-6 sm:pt-6">
          <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-card shadow-[var(--shadow-soft)] sm:rounded-[40px]">
            <Header current={current} />
            {hero}
          </div>
        </div>
      ) : (
        <Header current={current} />
      )}
      {bare ? (
        <main id="main" className="mx-auto max-w-[1320px] space-y-6 px-3 pt-6 sm:space-y-8 sm:px-6 sm:pt-8">
          {children}
        </main>
      ) : (
        <main id="main" className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="rounded-[28px] bg-card px-5 py-10 shadow-[var(--shadow-soft)] sm:px-12 sm:py-14">{children}</div>
        </main>
      )}
      {cta && <CtaBand wide={bare} />}
      <Footer />
      <JsonLd data={schema} />
    </>
  );
}

export function Section({
  id,
  title,
  hl,
  intro,
  children,
}: {
  id: string;
  title: string;
  /** Part of the title shown in the accent colour. */
  hl?: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-16 first:mt-0 sm:mt-20">
      <h2 id={id} className="text-3xl font-semibold text-ink sm:text-[40px]">
        <Hl text={title} hl={hl} />
      </h2>
      {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
      <div className="mt-7">{children}</div>
    </section>
  );
}

/** A section on a bare page: its own rounded card. */
export function Block({
  id,
  title,
  hl,
  intro,
  className = "bg-card",
  action,
  children,
}: {
  id: string;
  title: string;
  hl?: string;
  intro?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className={`rounded-[28px] px-5 py-10 shadow-[var(--shadow-soft)] sm:rounded-[40px] sm:px-12 sm:py-14 ${className}`}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id={id} className="text-3xl font-semibold text-ink sm:text-[44px]">
            <Hl text={title} hl={hl} />
          </h2>
          {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
        </div>
        {action}
      </div>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
