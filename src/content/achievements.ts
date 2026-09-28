export type Achievement = {
  title: string;
  event: string;
  place: string;
  date: string; // ISO (YYYY-MM or YYYY)
  summary: string;
  image?: { src: string; alt: string; width: number; height: number };
  source?: string;
  /** A prize, listed as an award in structured data. "Took part" entries are not. */
  award?: boolean;
  /** Unpublished entries are not rendered and not added to structured data. */
  published: boolean;
};

export const achievements: Achievement[] = [
  {
    title: "1st place",
    event: "SheepAI Hackathon",
    place: "Infobip campus, Zagreb",
    date: "2025-11",
    summary:
      "80 developers in 20 teams had nine hours to build something useful with AI. Ivan Židov and I won with Cyber Shepherd, which scrapes security news, sorts the threats into categories and sends each subscriber only the ones they care about, for example in Slack.",
    image: {
      src: "/images/sheepai-hackathon.webp",
      alt: "Luka Minđek winning 1st place at the SheepAI hackathon in Zagreb with team Cyber Shepherd",
      width: 1024,
      height: 683,
    },
    source: "https://shiftmag.dev/inside-sheepai-hackathon-80-developers-vs-info-overload-7282/",
    award: true,
    published: true,
  },
  {
    title: "Took part",
    event: "ABC BootCamps Silicon Valley 2026",
    place: "San Jose and San Francisco, USA",
    date: "2026-07",
    summary:
      "The prize for winning SheepAI: two weeks of startup workshops and pitching in California with ABC BootCamps, plus a stop at Tesla's factory and a lot of San Francisco.",
    image: {
      src: "/images/abc-pitch.webp",
      alt: "Luka Minđek presenting at ABC BootCamps next to a banner reading Think big, start small, learn fast",
      width: 933,
      height: 1400,
    },
    source: "https://abcbootcamps.com/sheepai-where-ideas-and-ai-become-reality/",
    published: true,
  },
  {
    title: "Took part",
    event: "MEGATHON Amsterdam 2026",
    place: "The HUBB, Amsterdam, Netherlands",
    date: "2026-06",
    summary:
      "A 48-hour AI hackathon with 500 builders, investors in the room and finals on the main stage, during Amsterdam Tech Week. No prize this time, but a great weekend of building and meeting people.",
    source: "https://megathon.xyz/",
    published: true,
  },
  {
    title: "Graduated with 91.83%",
    event: "AI programmer programme, AI Centre Lipik",
    place: "Lipik, Croatia",
    date: "2024-09",
    summary:
      "Six months of full-time training as an AI programmer. I finished 5th in my generation with 91.83% across the knowledge assessments.",
    source: "https://www.compas.com.hr/clanak/1/13291/centar-umjetne-inteligencije-lipik-ispratio-petu-generaciju-ai-strunjaka.html",
    published: true,
  },
];

export const publishedAchievements = achievements.filter((a) => a.published);

export function formatMonth(iso: string) {
  const [y, m] = iso.split("-");
  if (!m) return y;
  return new Date(Number(y), Number(m) - 1).toLocaleString("en-GB", { month: "long", year: "numeric" });
}
