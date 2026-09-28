export type Achievement = {
  title: string;
  event: string;
  place: string;
  date: string; // ISO (YYYY-MM or YYYY)
  summary: string;
  url?: string;
  /** Unpublished entries are not rendered and not added to structured data. */
  published: boolean;
};

export const achievements: Achievement[] = [
  {
    title: "1st place",
    event: "SheepAI Hackathon",
    place: "Zagreb, Croatia",
    date: "2025-11",
    summary:
      "Won with a teammate against 80 developers in 20 teams. We built Cyber Shepherd, a tool that collects cybersecurity threat reports and sorts them by what matters.",
    published: true,
  },
  {
    // TODO(luka): fill in, then set published: true
    title: "1st place",
    event: "Lipik Bootcamp",
    place: "Lipik, Croatia",
    date: "TODO",
    summary: "TODO: one sentence on what you built and who you competed against.",
    published: false,
  },
  {
    // TODO(luka): name, city and year of the US bootcamp, then set published: true
    title: "TODO: result or role",
    event: "TODO: US bootcamp name",
    place: "TODO: city, USA",
    date: "TODO",
    summary: "TODO: one sentence on what it was and what you did there.",
    published: false,
  },
];

export const publishedAchievements = achievements.filter((a) => a.published);

export function formatMonth(iso: string) {
  const [y, m] = iso.split("-");
  if (!m) return y;
  return new Date(Number(y), Number(m) - 1).toLocaleString("en-GB", { month: "long", year: "numeric" });
}
