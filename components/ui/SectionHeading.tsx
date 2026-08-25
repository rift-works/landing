import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-6 lg:mb-[42px] lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-[720px]">
        <p
          className={cn(
            "mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em]",
            invert ? "text-coast" : "text-ink-muted",
          )}
        >
          <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className={cn("font-display text-[clamp(32px,4vw,54px)] leading-[1.08] tracking-[-0.045em]", invert ? "text-cloud" : "text-navy")}>
          {title}
        </h2>
      </div>
      {description ? (
        <p className={cn("max-w-[540px] text-base leading-relaxed lg:pb-1", invert ? "text-cloud/70" : "text-ink-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
