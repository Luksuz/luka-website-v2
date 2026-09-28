import Link from "next/link";
import { nav, person } from "@/content/site";

export default function Header({ current }: { current: string }) {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 pt-6 sm:px-10 sm:pt-8">
        <Link href="/" className="text-[26px] font-bold leading-none tracking-tight text-ink" aria-label={`${person.name} — home`}>
          luka<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="order-3 w-full sm:order-none sm:w-auto">
          <ul className="flex justify-center gap-7 text-[16px]">
            {nav.map((item) => {
              const active = current === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative pb-2 ${active ? "text-accent" : "text-ink hover:text-accent"}`}
                  >
                    {item.label}
                    {active && <span className="absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-accent" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href={`mailto:${person.email}`}
          className="rounded-xl bg-accent px-6 py-3 text-[14px] font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-accent)] hover:bg-accent-dark"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
