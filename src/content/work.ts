import { mindxUrl } from "./site";
import type { IconName } from "@/components/Icon";
import type { Tone } from "@/components/Bits";

export type Project = {
  id: string;
  name: string;
  kind: string;
  summary: string;
  role: string;
  stack?: string[];
  url?: string;
  image?: { src: string; width: number; height: number; alt: string };
  /** Phone screenshots, shown in phone frames instead of an image. */
  screens?: { src: string; alt: string }[];
  /** Icon and tint for a project that has no picture. */
  icon?: IconName;
  tone?: Tone;
  /** Short labels floated on the plain panel of a project with no picture. */
  panel?: string[];
  award?: boolean;
  /** Unpublished entries are not rendered anywhere. */
  published: boolean;
};

/** Things I built myself, in competitions or on the side. */
const allProjects: Project[] = [
  {
    id: "sofi",
    name: "Sofi",
    kind: "Mobile app · iOS and Android · 2026",
    summary:
      "Say it, and it's on your calendar. Hold the button, talk, and Sofi turns what you said into calendar events, to-dos and who-owes-whom, and tells you before something clashes with a plan you already made.",
    role: "Designed and built it on my own: the Flutter app, the Next.js backend, live speech-to-text, the AI that turns a ramble into events, Google Calendar sync and App Store subscriptions.",
    stack: ["Flutter", "Next.js", "Supabase", "ElevenLabs", "LLMs", "Google Calendar"],
    screens: [
      { src: "/images/proj-sofi-1.webp", alt: "Sofi's Talk screen with a big button to hold and speak" },
      { src: "/images/proj-sofi-2.webp", alt: "Sofi's day view for tomorrow with a client call and a dentist appointment overlapping, marked in orange" },
      { src: "/images/proj-sofi-3.webp", alt: "Sofi's Owed screen showing who owes whom and how much" },
    ],
    published: true,
  },
  {
    id: "compound",
    name: "Compound",
    kind: "Mobile and web app · 2026",
    summary:
      "A training diary that stays out of the way. Log weight, reps and RPE with one thumb between sets, no keyboard, then read your progress back as real analytics: records, weekly volume, muscle balance and streaks.",
    role: "Built solo: a Flutter phone app and a Next.js web app on one Postgres database, ready-made training plans, an 83-exercise library and a coach mode for following athletes.",
    stack: ["Flutter", "Next.js", "Postgres", "Drizzle", "TypeScript"],
    screens: [
      { src: "/images/proj-compound-1.webp", alt: "Compound routines screen with Squat Day up next" },
      { src: "/images/proj-compound-2.webp", alt: "Compound workout logger with sets of barbell bench press being ticked off" },
      { src: "/images/proj-compound-3.webp", alt: "Compound training plan: Strength, Three Days" },
    ],
    published: true,
  },
  {
    id: "cyber-shepherd",
    name: "Cyber Shepherd",
    kind: "Hackathon winner · 2025",
    summary:
      "Collects cybersecurity news from many sources, sorts the threats into categories and sends each subscriber only the ones they care about, for example in Slack.",
    role: "Built with Ivan Židov in nine hours at the SheepAI hackathon in Zagreb. 1st place of 20 teams.",
    stack: ["LLMs", "Web scraping", "Slack"],
    image: {
      src: "/images/sheepai-hackathon.webp",
      width: 1024,
      height: 683,
      alt: "Team Cyber Shepherd with the 1st place cheque at the SheepAI hackathon",
    },
    award: true,
    published: true,
  },
  {
    id: "solar-scan",
    name: "Solar Scan",
    kind: "Computer vision · 2026",
    summary:
      "Finds rooftop solar panels across Croatia in public aerial photos, estimates each installation's size and yearly output, and links it to its official address and land parcel. A lead list for energy companies, one street or the whole country at a time.",
    role: "Built together with Ivan Židov: aerial image tiling, AI segmentation of the panels, clustering into sites, address matching and a map to review the results.",
    stack: ["Python", "Computer vision", "SAM segmentation", "GIS", "Leaflet"],
    image: { src: "/images/proj-solar-scan.webp", width: 800, height: 720, alt: "Aerial photo of a house with solar panels on the roof, as Solar Scan sees it" },
    published: true,
  },
  {
    id: "nota",
    name: "Nota",
    kind: "Web app · 2025 – 2026",
    summary:
      "Invoicing and bookkeeping for Croatian sole traders. Fill in one invoice and get two: the Croatian one in euros for the tax office and an English one in the client's currency, converted at the Croatian National Bank rate.",
    role: "My own tool, built for my own bookkeeping: AI reads receipts, drafts a quote from one line (\"like last time for this client\"), and it exports the official ledger at tax time.",
    stack: ["Next.js", "Postgres", "LLMs", "PDF generation"],
    icon: "doc",
    tone: "mint",
    panel: ["Račun · HR · EUR", "Invoice · EN · USD", "HNB exchange rate", "Knjiga prometa export"],
    published: true,
  },
  {
    id: "postpilot",
    name: "PostPilot",
    kind: "AI SaaS · 2026",
    summary:
      "An AI social media manager. Connect Facebook, Instagram, LinkedIn and X, and it learns from what worked for you before, writes new posts in your voice and can schedule and publish them.",
    role: "Built end to end: social logins, post sync, AI analysis and writing, a publishing queue with safety limits, and Stripe subscriptions.",
    stack: ["Next.js", "Supabase", "Stripe", "LLMs", "Meta API"],
    image: { src: "/images/proj-postpilot.webp", width: 1200, height: 994, alt: "Design of the PostPilot dashboard with connected accounts and engagement stats" },
    published: true,
  },
  {
    id: "educro",
    name: "EduCRO",
    kind: "EdTech · 2025",
    summary:
      "Learning that works like a game, for Croatian students: points, badges, streaks and leaderboards, plus Učko, an AI tutor that explains a wrong answer right when it happens. Teachers get a panel with questions and class results.",
    role: "Built the platform and the AI tutor, with rules for what a tutor for kids may and may not say.",
    stack: ["React", "Supabase", "LLMs", "Gamification"],
    image: { src: "/images/proj-educro.webp", width: 1200, height: 670, alt: "Illustration of Učko, EduCRO's robot AI tutor, helping a child learn" },
    published: true,
  },
  {
    id: "ballot-counter",
    name: "Ballot vote counter",
    kind: "Computer vision · client project · 2026",
    summary:
      "Reads photographed paper ballots: pairs each front with its back by QR code, reads ticks, crosses and handwritten preferences, checks the official's signature and counts preferential votes per ballot box.",
    role: "Built for a client: QR decoding that survives tilted photos, AI mark reading, validation rules from the electoral law and a review screen for anything unclear.",
    stack: ["Next.js", "Vision LLMs", "QR decoding", "Postgres"],
    icon: "check",
    tone: "lilac",
    panel: ["Front ↔ back by QR", "1st · 2nd · 3rd preference", "Signature check", "Count per ballot box"],
    published: true,
  },
  {
    id: "video-search",
    name: "Video search AI",
    kind: "AI search · 2026",
    summary:
      "Paste a YouTube or video link and the AI watches it, marks the important moments with timestamps and keywords, and then lets you search your whole video archive in plain language.",
    role: "Built the video analysis with Gemini, semantic search on pgvector and a web app with live progress while a video is processed.",
    stack: ["Gemini", "FastAPI", "Supabase pgvector", "Next.js"],
    icon: "eye",
    tone: "peach",
    panel: ["00:42  Demo starts", "03:15  Pricing question", "07:58  Customer story", "Search: \"where they talk about pricing\""],
    published: true,
  },
];

export const projects = allProjects.filter((p) => p.published);

/** Client work lives on MindX; here it is only listed and linked. */
export const mindxWork = [
  { name: "Company knowledge assistant with sources", href: `${mindxUrl}/blog/geobim-knowledge`, img: "/images/case-geobim-knowledge-en.webp" },
  { name: "Order extraction from emails and PDFs", href: `${mindxUrl}/blog/order-extraction`, img: "/images/case-order-extraction.webp" },
  { name: "Pet food label compliance checks", href: `${mindxUrl}/blog/food-label-compliance`, img: "/images/case-food-label-compliance.webp" },
  { name: "Handwritten form digitizer", href: `${mindxUrl}/blog/handwritten-form-digitizer`, img: "/images/case-handwritten-form-digitizer.webp" },
  { name: "Insurance claim processing", href: `${mindxUrl}/blog/insurance-claim-processor`, img: "/images/case-insurance-claim-processor.webp" },
  { name: "Floor plan analysis", href: `${mindxUrl}/blog/floor-plan-analyzer`, img: "/images/case-floor-plan-analyzer.webp" },
  { name: "Receipt parser", href: `${mindxUrl}/blog/receipt-parser`, img: "/images/case-receipt-parser.webp" },
  { name: "Construction progress tracking", href: `${mindxUrl}/blog/construction-tracker`, img: "/images/case-construction-tracker.webp" },
];
