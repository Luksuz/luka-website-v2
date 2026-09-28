import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";

export default function Page({
  current,
  schema,
  children,
}: {
  current: string;
  schema: object;
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Header current={current} />
      <main id="main" className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        {children}
      </main>
      <Footer />
      <JsonLd data={schema} />
    </>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-14">
      <h2 id={id} className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
