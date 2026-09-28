export type Photo = { src: string; alt: string; caption: string; width: number; height: number };

/** ABC BootCamps Silicon Valley, July 2026. */
export const abcPhotos: Photo[] = [
  { src: "/images/abc-pitch.webp", alt: "Luka Minđek presenting at ABC BootCamps next to a banner reading Think big, start small, learn fast", caption: "Pitch time. The banner says it all.", width: 933, height: 1400 },
  { src: "/images/abc-tesla.webp", alt: "Luka Minđek sitting on a Cybertruck in front of the Tesla factory", caption: "A stop at Tesla's factory", width: 1400, height: 1050 },
  { src: "/images/abc-golden-gate.webp", alt: "Luka Minđek standing in front of the Golden Gate Bridge", caption: "The Golden Gate, obviously", width: 933, height: 1400 },
  { src: "/images/abc-san-francisco.webp", alt: "Luka Minđek among the skyscrapers of downtown San Francisco", caption: "Downtown San Francisco", width: 1050, height: 1400 },
  { src: "/images/abc-pacific.webp", alt: "Luka Minđek in a San Francisco hoodie by the Pacific Ocean", caption: "Hoodie weather on the Pacific", width: 1400, height: 1050 },
  { src: "/images/abc-big-sur.webp", alt: "Rocky California coastline with waves", caption: "The California coast", width: 1050, height: 1400 },
];

/** A few extra shots, just for fun. */
export const funPhotos: Photo[] = [
  { src: "/images/shot-hiking.webp", alt: "Luka Minđek sitting on white rocks on a mountain meadow, with forest and peaks behind him", caption: "Hiking day, best kind of day", width: 1149, height: 1400 },
  { src: "/images/shot-gym.webp", alt: "Luka Minđek doing barbell curls in the gym", caption: "Gym first, code after", width: 790, height: 1400 },
  { src: "/images/shot-mustang.webp", alt: "Luka Minđek leaning on a black Ford Mustang on a mountain road", caption: "Road trip mode", width: 787, height: 1400 },
  { src: "/images/shot-mustang-road.webp", alt: "A black Ford Mustang parked on a hilltop road under a blue sky", caption: "Hills, a Mustang and a very blue sky", width: 787, height: 1400 },
];
