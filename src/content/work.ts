import { mindxUrl } from "./site";

export type Project = {
  name: string;
  kind: string;
  summary: string;
  role: string;
  url?: string;
  image?: { src: string; width: number; height: number; alt: string };
  /** Unpublished entries are not rendered anywhere. */
  published: boolean;
};

/** Things I built myself or in competitions. */
const allProjects: Project[] = [
  {
    name: "Cyber Shepherd",
    kind: "Hackathon winner · 2025",
    summary:
      "Collects cybersecurity news from many sources, sorts the threats into categories and sends each subscriber only the ones they care about, for example in Slack.",
    role: "Built with Ivan Židov in nine hours at the SheepAI hackathon in Zagreb. 1st place of 20 teams.",
    image: {
      src: "/images/sheepai-hackathon.webp",
      width: 1024,
      height: 683,
      alt: "Team Cyber Shepherd with the 1st place cheque at the SheepAI hackathon",
    },
    published: true,
  },
  // TODO(luka): add projects built in your own time. Fill in, add an image in
  // public/images/, then set published: true. Copy this block per project.
  {
    name: "TODO: project name",
    kind: "TODO: e.g. Computer vision · 2026",
    summary: "TODO: one or two sentences on what it does and who it helps.",
    role: "TODO: what you built yourself.",
    published: false,
  },
  {
    name: "TODO: project name",
    kind: "TODO: e.g. LLM application · 2026",
    summary: "TODO: one or two sentences on what it does and who it helps.",
    role: "TODO: what you built yourself.",
    published: false,
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
