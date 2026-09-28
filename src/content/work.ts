import { mindxUrl } from "./site";

export type Project = {
  name: string;
  kind: string;
  summary: string;
  role: string;
  url?: string;
  image?: { src: string; width: number; height: number; alt: string };
};

/** Things I built myself or in competitions. */
export const projects: Project[] = [
  {
    name: "Cyber Shepherd",
    kind: "Hackathon winner · 2025",
    summary:
      "Collects cybersecurity threat reports from many sources, removes duplicates and ranks them so a security team reads the important ones first.",
    role: "Built with one teammate in nine hours at the SheepAI hackathon in Zagreb. 1st place of 20 teams.",
    image: {
      src: "/images/sheepai-hackathon.webp",
      width: 1024,
      height: 683,
      alt: "Team Cyber Shepherd with the 1st place cheque at the SheepAI hackathon",
    },
  },
  {
    name: "Container Code Scanner",
    kind: "Computer vision",
    summary:
      "Finds the ID code on a shipping container in a photo and reads it out, so yard staff don't have to type it by hand.",
    role: "Designed and built the detection model, the text reading step and the web app.",
    image: {
      src: "/images/container-code-scanner.webp",
      width: 1200,
      height: 681,
      alt: "Container Code Scanner web app with sample container photos and upload area",
    },
  },
  {
    name: "RAG App Generator",
    kind: "LLM application",
    summary:
      "Upload your documents, describe the app you want, and it builds a small question-answering app over those documents.",
    role: "Designed and built.",
    image: {
      src: "/images/rag-app-generator.webp",
      width: 1200,
      height: 688,
      alt: "RAG App Generator form with document upload and template choices",
    },
  },
  {
    name: "AI Stories",
    kind: "Generative AI",
    summary: "Writes an illustrated short story, one part at a time, from a single idea.",
    role: "Designed and built.",
    image: {
      src: "/images/ai-stories.webp",
      width: 576,
      height: 329,
      alt: "AI Stories page showing a generated illustration and the first part of a story",
    },
  },
];

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
