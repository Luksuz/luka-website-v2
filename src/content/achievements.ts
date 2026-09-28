export type Achievement = {
  title: string;
  event: string;
  place: string;
  date: string; // ISO (YYYY-MM or YYYY)
  summary: string;
  image?: { src: string; alt: string; width: number; height: number };
  source?: string;
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
    published: true,
  },
  {
    title: "Winner's place",
    event: "ABC BootCamps Silicon Valley 2026",
    place: "San Jose and San Francisco, USA",
    date: "2026-07",
    summary:
      "The SheepAI win came with a place on ABC BootCamps' Silicon Valley programme (12–25 July 2026): two weeks of startup and entrepreneurship training in the Bay Area.",
    source: "https://abcbootcamps.com/sheepai-where-ideas-and-ai-become-reality/",
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
