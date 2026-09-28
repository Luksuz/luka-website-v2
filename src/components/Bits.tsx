/** Small shared building blocks for the inner pages. */

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-surface px-5 py-4 shadow-[var(--shadow-float)]">
      <p className="text-3xl font-semibold text-accent">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
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

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full bg-surface px-3 py-1 text-sm text-ink shadow-[var(--shadow-float)]">{children}</span>;
}
