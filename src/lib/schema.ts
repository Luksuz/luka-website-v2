import { person, personId, siteUrl, mindxOrgId, mindxUrl } from "@/content/site";
import { publishedAchievements } from "@/content/achievements";

export const websiteId = `${siteUrl}/#website`;

export function personSchema() {
  return {
    "@type": "Person",
    "@id": personId,
    name: person.name,
    alternateName: person.alternateNames,
    url: siteUrl,
    image: `${siteUrl}${person.image}`,
    jobTitle: person.jobTitle,
    email: `mailto:${person.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.city,
      addressCountry: person.location.countryCode,
    },
    worksFor: { "@type": "Organization", "@id": mindxOrgId, name: "MindX Global", url: mindxUrl },
    knowsAbout: person.knowsAbout,
    ...(publishedAchievements.length > 0 && {
      award: publishedAchievements.map((a) => `${a.title}, ${a.event} (${a.date.slice(0, 4)})`),
    }),
    sameAs: [person.links.linkedin, person.links.github, person.links.mindxAbout],
  };
}

export function siteGraph(extra: object[] = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: person.name,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      ...extra,
    ],
  };
}

export function breadcrumb(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name, item: `${siteUrl}${path}` },
    ],
  };
}

export function webPage(type: string, name: string, path: string, description: string) {
  return {
    "@type": type,
    "@id": `${siteUrl}${path}#webpage`,
    url: `${siteUrl}${path}`,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    ...(type === "ProfilePage" && { mainEntity: { "@id": personId } }),
  };
}
