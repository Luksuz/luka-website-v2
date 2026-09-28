import { mindxUrl } from "./site";

/**
 * What I can build for you. Headings use the words people actually search for
 * ("intelligent document processing", "AI agents", "RAG chatbot"); the text
 * under them stays plain: your problem, what I build, what you get.
 */
export type Service = {
  id: string;
  title: string;
  short: string;
  problem: string;
  build: string;
  result: string;
  examples: string[];
  keywords: string[];
  caseStudy: { name: string; href: string; img: string };
};

export const services: Service[] = [
  {
    id: "document-processing",
    title: "Intelligent document processing",
    short: "PDFs, invoices and orders turned into clean data, no retyping.",
    problem: "Someone on your team copies numbers from PDFs, invoices or order emails into another system. Every day.",
    build:
      "An AI pipeline that reads each document, pulls out the fields you care about (totals, line items, dates, customer details), checks them and sends them where they need to go: your ERP, a spreadsheet, an API.",
    result: "The typing is gone, and a person only looks at the few documents the AI isn't sure about.",
    examples: ["Invoice data extraction", "Purchase orders from email", "Receipts and bank statements", "Contracts and delivery notes"],
    keywords: ["PDF to structured data", "Invoice extraction", "OCR + LLM", "JSON output"],
    caseStudy: { name: "Order extraction from emails and PDFs", href: `${mindxUrl}/blog/order-extraction`, img: "/images/case-order-extraction.webp" },
  },
  {
    id: "ocr-handwriting",
    title: "OCR for scans and handwriting",
    short: "Scanned forms and handwritten notes, read properly.",
    problem: "You have boxes (or folders) of scanned forms and handwritten pages that nobody can search.",
    build:
      "OCR that goes past plain text: it understands the layout, reads handwriting, ticks and stamps, and fills a proper form or database record for every page.",
    result: "Paper archives you can search, filter and use, instead of paper archives you avoid.",
    examples: ["Handwritten forms", "Scanned archives", "Field reports", "Stamped and signed documents"],
    keywords: ["Handwriting recognition", "Layout-aware OCR", "Document digitization"],
    caseStudy: { name: "Handwritten form digitizer", href: `${mindxUrl}/blog/handwritten-form-digitizer`, img: "/images/case-handwritten-form-digitizer.webp" },
  },
  {
    id: "ai-agents",
    title: "AI agents and workflow automation",
    short: "AI that doesn't just answer, it does the next step too.",
    problem: "A process has many small steps: read the request, check it against the rules, look something up, route it, reply.",
    build:
      "AI agents that run those steps for you, using your own tools and data (email, CRM, databases, APIs), with a human approving anything important.",
    result: "Requests handled in minutes instead of days, with a clear log of what the AI did and why.",
    examples: ["Claims and application processing", "Email triage and replies", "Checks against your rules", "Hand-off to the right person"],
    keywords: ["Agentic AI", "LLM tool use", "Human in the loop", "Process automation"],
    caseStudy: { name: "Insurance claim processing", href: `${mindxUrl}/blog/insurance-claim-processor`, img: "/images/case-insurance-claim-processor.webp" },
  },
  {
    id: "rag-assistant",
    title: "AI assistant for your company documents (RAG)",
    short: "Ask your manuals, policies and reports a question, get an answer with sources.",
    problem: "The answer exists somewhere in your documents, but finding it takes half an hour and three colleagues.",
    build:
      "A private chatbot built on retrieval-augmented generation (RAG): it searches your own documents, answers in plain language and shows exactly which page the answer came from.",
    result: "New people get up to speed faster, and experts stop answering the same questions.",
    examples: ["Internal knowledge base", "Technical manuals", "Policies and procedures", "Customer support answers"],
    keywords: ["RAG", "Semantic search", "Answers with citations", "Private LLM"],
    caseStudy: { name: "Company knowledge assistant with sources", href: `${mindxUrl}/blog/geobim-knowledge`, img: "/images/case-geobim-knowledge-en.webp" },
  },
  {
    id: "computer-vision",
    title: "Computer vision and image analysis",
    short: "Photos, labels and drawings checked by AI.",
    problem: "People spend hours looking at photos, product labels or technical drawings to check the same things.",
    build:
      "Vision models that look at each image or drawing and report what matters: missing label information, progress on a building site, rooms and sizes on a floor plan.",
    result: "Faster checks that are the same every time, with the doubtful cases flagged for a person.",
    examples: ["Label compliance checks", "Floor plans and technical drawings", "Construction progress photos", "Product photos"],
    keywords: ["Image recognition", "Vision LLM", "Quality control"],
    caseStudy: { name: "Pet food label compliance checks", href: `${mindxUrl}/blog/food-label-compliance`, img: "/images/case-food-label-compliance.webp" },
  },
  {
    id: "llm-integration",
    title: "LLM integration into your software",
    short: "GPT, Claude or Gemini features inside the app you already have.",
    problem: "You'd like AI inside your product or internal tool, but don't want a science project.",
    build:
      "A well-tested AI feature added to your existing app: the right model for the job, prompts that hold up with real data, costs kept in check, and a fallback when the AI isn't sure.",
    result: "An AI feature your users actually use, not a demo that breaks on the first real customer.",
    examples: ["Smart search", "Summaries and drafts", "Classification and tagging", "AI-powered web apps"],
    keywords: ["OpenAI API", "Claude API", "Python", "Next.js"],
    caseStudy: { name: "Receipt parser", href: `${mindxUrl}/blog/receipt-parser`, img: "/images/case-receipt-parser.webp" },
  },
];

export const steps = [
  { title: "A quick call", body: "15 minutes, free. You show me the documents or the process, I tell you honestly if AI is a good fit." },
  { title: "A small test on your data", body: "Before anything big, I run a sample of your real documents through a first version, so we both see how well it works." },
  { title: "The build", body: "I build it, connect it to your systems and test it with the people who'll use it. You see progress every week." },
  { title: "Live, and looked after", body: "It goes live, I keep an eye on it, and it keeps improving as it sees more of your documents." },
];

export const faqs = [
  {
    q: "Do you work as a freelancer or through a company?",
    a: "Both, depending on the size. You always work with me directly. Bigger and ongoing projects go through MindX Global, my AI company.",
  },
  {
    q: "What does a project cost?",
    a: "It depends on how many document types and systems are involved. After the first call you get a written scope and a price before any work starts.",
  },
  {
    q: "Is my data safe?",
    a: "Your documents are only used for your project. When needed, the system can run on your own servers or in the cloud region you choose.",
  },
  {
    q: "Do I need clean data or a data team?",
    a: "No. Messy scans, mixed PDFs and handwriting are the normal case. You just need someone who knows the process and can answer questions.",
  },
  {
    q: "Where are you based?",
    a: "Varaždin, Croatia. I work remotely, with companies in Europe and further away, in English or Croatian.",
  },
];
