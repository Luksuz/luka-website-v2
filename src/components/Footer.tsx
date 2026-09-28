import Link from "next/link";
import { nav, person } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 pb-10 pt-6 text-sm text-muted sm:grid-cols-[1.4fr_1fr_1fr] sm:px-10">
        <div>
          <Link href="/" className="text-[26px] font-bold leading-none tracking-tight text-ink" aria-label={`${person.name} — home`}>
            luka<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs">
            AI engineer and founder of MindX Global. Based in {person.location.city}, {person.location.country}, working with teams everywhere.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-semibold text-ink">Pages</p>
          <ul className="mt-3 space-y-1.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-accent-dark">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-ink">Elsewhere</p>
          <ul className="mt-3 space-y-1.5">
            <li><a href={person.links.linkedin} rel="me" className="hover:text-accent-dark">LinkedIn</a></li>
            <li><a href={person.links.github} rel="me" className="hover:text-accent-dark">GitHub</a></li>
            <li><a href={person.links.instagram} rel="me" className="hover:text-accent-dark">Instagram</a></li>
            <li><a href={person.links.mindx} className="hover:text-accent-dark">MindX Global</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-[1240px] border-t border-line px-5 py-6 text-center text-xs text-muted sm:px-10">
        © {new Date().getFullYear()} {person.name} · <a href={`mailto:${person.email}`} className="hover:text-accent-dark">{person.email}</a>
      </p>
    </footer>
  );
}
