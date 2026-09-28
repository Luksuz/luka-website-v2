import { person } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto grid max-w-3xl gap-6 px-4 py-10 text-sm text-muted sm:grid-cols-2 sm:px-6">
        <div>
          <p className="font-display font-bold text-ink">{person.name}</p>
          <p>
            {person.shortTitle}
            <br />
            {person.location.city}, {person.location.country}
          </p>
        </div>
        <ul className="space-y-1 sm:text-right">
          <li>
            <a href={`mailto:${person.email}`} className="hover:text-accent-dark">{person.email}</a>
          </li>
          <li>
            <a href={person.links.linkedin} rel="me" className="hover:text-accent-dark">LinkedIn</a>
            {" · "}
            <a href={person.links.github} rel="me" className="hover:text-accent-dark">GitHub</a>
            {" · "}
            <a href={person.links.mindx} className="hover:text-accent-dark">MindX Global</a>
          </li>
          <li>© {new Date().getFullYear()} {person.name}</li>
        </ul>
      </div>
    </footer>
  );
}
