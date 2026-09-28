export const siteUrl = "https://lukamindek.com";
export const personId = `${siteUrl}/#person`;
export const mindxUrl = "https://mindx.global";
export const mindxOrgId = `${mindxUrl}/#organization`;
export const calendly = "https://calendly.com/lukamindjek/ai-informational-meeting";

export const person = {
  name: "Luka Minđek",
  // People type the name without "đ"; the domain itself uses "mindek".
  alternateNames: ["Luka Mindek", "Luka Mindjek"],
  jobTitle: "AI Engineer and Founder of MindX Global",
  shortTitle: "AI engineer · Founder of MindX Global",
  location: { city: "Varaždin", country: "Croatia", countryCode: "HR" },
  email: "lukamindjek@gmail.com",
  image: "/images/luka-cutout.webp",
  links: {
    linkedin: "https://www.linkedin.com/in/lukamindek/",
    github: "https://github.com/Luksuz",
    instagram: "https://www.instagram.com/mindekluka/",
    mindx: mindxUrl,
    mindxAbout: `${mindxUrl}/about`,
  },
  knowsAbout: [
    "Artificial intelligence",
    "Intelligent document processing",
    "Document AI",
    "Invoice data extraction",
    "AI agents",
    "Workflow automation",
    "LLM integration",
    "Computer vision",
    "Optical character recognition",
    "Large language models",
    "Retrieval-augmented generation",
    "Natural language processing",
    "Python",
    "Next.js",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/cv", label: "CV" },
] as const;
