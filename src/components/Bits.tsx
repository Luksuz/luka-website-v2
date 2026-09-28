/** Small shared building blocks for the pages. */
import Icon, { type IconName } from "./Icon";

export type Tone = "sky" | "mint" | "peach" | "lilac" | "sun";

export const toneBg: Record<Tone, string> = {
  sky: "bg-sky text-sky-ink",
  mint: "bg-mint text-mint-ink",
  peach: "bg-peach text-peach-ink",
  lilac: "bg-lilac text-lilac-ink",
  sun: "bg-sun text-sun-ink",
};

export const tones: Tone[] = ["sky", "mint", "peach", "lilac", "sun"];

export function IconTile({ icon, tone = "sky", size = "md" }: { icon: IconName; tone?: Tone; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-11 w-11 rounded-xl";
  const ico = size === "lg" ? "h-7 w-7" : "h-5 w-5";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${box} ${toneBg[tone]}`}>
      <Icon name={icon} className={ico} />
    </span>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] ${
        light ? "bg-white/10 text-white" : "bg-accent-soft text-accent-dark"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-white" : "bg-accent"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export function Stat({ value, label, icon, tone = "sky" }: { value: string; label: string; icon?: IconName; tone?: Tone }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-surface px-5 py-4 shadow-[var(--shadow-float)]">
      {icon && <IconTile icon={icon} tone={tone} />}
      <div>
        <p className="text-3xl font-semibold leading-none text-ink">{value}</p>
        <p className="mt-1.5 text-sm leading-snug text-muted">{label}</p>
      </div>
    </div>
  );
}

export function Pic({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`rounded-2xl object-cover shadow-[var(--shadow-float)] ${className}`}
    />
  );
}

export function Chip({ children, tone }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm ${tone ? toneBg[tone] : "bg-surface text-ink shadow-[var(--shadow-float)]"}`}>
      {children}
    </span>
  );
}

/** Title with one word or phrase picked out in the accent colour. */
export function Hl({ text, hl }: { text: string; hl?: string }) {
  if (!hl || !text.includes(hl)) return <>{text}</>;
  const [a, b] = text.split(hl);
  return (
    <>
      {a}
      <span className="text-accent">{hl}</span>
      {b}
    </>
  );
}
