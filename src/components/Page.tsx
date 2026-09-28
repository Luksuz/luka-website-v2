import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";

export default function Page({
  current,
  schema,
  hero,
  children,
}: {
  current: string;
  schema: object;
  /** Home page: a full-width hero card that holds the header. */
  hero?: React.ReactNode;
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
      <main id="main" className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="rounded-[28px] bg-card px-5 py-10 shadow-[var(--shadow-soft)] sm:px-12 sm:py-14">{children}</div>
      </main>
      <Footer />
      <JsonLd data={schema} />
    </>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-14 first:mt-0">
      <h2 id={id} className="text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
