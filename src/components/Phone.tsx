/** A phone drawn in CSS around a real app screenshot (1206×2622, iPhone 17 Pro). */
export function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-[2.6rem] bg-ink p-[7px] shadow-[0_40px_70px_-30px_rgba(30,37,48,0.55),0_18px_30px_-18px_rgba(30,37,48,0.35)] ring-1 ring-black/40 ${className}`}>
      <div className="relative overflow-hidden rounded-[2.15rem] bg-black">
        <img src={src} alt={alt} width={600} height={1304} loading="lazy" decoding="async" className="block aspect-[600/1304] w-full" />
        <span className="absolute left-1/2 top-[1.4%] h-[3.3%] w-[30%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
      </div>
      <span className="absolute -right-[3px] top-[22%] h-[9%] w-[3px] rounded-r bg-ink" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[18%] h-[5%] w-[3px] rounded-l bg-ink" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[26%] h-[8%] w-[3px] rounded-l bg-ink" aria-hidden="true" />
    </div>
  );
}

/** Three phones: the middle one forward, the side ones smaller and set back. */
export function PhoneTrio({ screens }: { screens: { src: string; alt: string }[] }) {
  const [a, b, c] = screens;
  return (
    <div className="relative mx-auto flex w-full max-w-[520px] items-end justify-center">
      {a && <Phone src={a.src} alt={a.alt} className="relative z-0 -mr-6 hidden w-[30%] -rotate-6 sm:block" />}
      {b && <Phone src={b.src} alt={b.alt} className="relative z-10 w-[58%] sm:w-[38%]" />}
      {c && <Phone src={c.src} alt={c.alt} className="relative z-0 -ml-6 hidden w-[30%] rotate-6 sm:block" />}
    </div>
  );
}
