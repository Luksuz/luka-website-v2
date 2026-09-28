export type Role = { title: string; org: string; orgUrl?: string; period?: string; points: string[] };

export const roles: Role[] = [
  {
    title: "Founder and AI engineer",
    org: "MindX Global",
    orgUrl: "https://mindx.global",
    // TODO(luka): add the period, e.g. "2022 – now"
    points: [
      "Build AI systems that read documents and images — invoices, orders, forms, technical drawings, photos — and turn them into data a business can use.",
      "50+ projects delivered for companies around the world.",
      "Work directly with each client, from the first call to the system running in production.",
    ],
  },
  {
    title: "Freelance AI and software engineer",
    org: "Independent",
    // TODO(luka): add the period, e.g. "2018 – 2022"
    points: [
      "Built web applications end to end: React and Next.js front ends, Node.js and Python back ends, cloud deployment.",
      "Moved into machine learning: text analysis, chatbots and image models for clients.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Document AI and vision", items: ["OCR", "PDF and table extraction", "Handwriting", "Object detection", "Image classification", "Vision-language models"] },
  { group: "LLMs", items: ["OpenAI, Anthropic and Google APIs", "Retrieval-augmented generation", "Prompt design and evaluation", "Agents and tool calling"] },
  { group: "Machine learning", items: ["Python", "PyTorch", "TensorFlow", "Hugging Face"] },
  { group: "Software", items: ["TypeScript", "Next.js", "React", "Node.js", "FastAPI", "Django", "PostgreSQL"] },
  { group: "Infrastructure", items: ["Docker", "Vercel", "Railway", "AWS", "Google Cloud"] },
];

export type Credential = { name: string; issuer: string; year?: string; published: boolean };

// These came from the old site's tech wall. Confirm each, then set published: true.
export const credentials: Credential[] = [
  { name: "Python developer", issuer: "Algebra", published: false },
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", published: false },
  { name: "Google Cloud certification", issuer: "Google", published: false },
];
