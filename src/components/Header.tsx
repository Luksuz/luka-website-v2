import Link from "next/link";
import { nav, person } from "@/content/site";

export default function Header({ current }: { current: string }) {
  return (
    <header className="border-b border-line bg-page">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-base font-bold text-ink no-underline">
          {person.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current === item.href ? "page" : undefined}
                  className={
                    current === item.href
                      ? "text-accent-dark underline decoration-2"
                      : "text-muted hover:text-accent-dark"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
