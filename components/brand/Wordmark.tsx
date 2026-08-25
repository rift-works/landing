import { cn } from "@/lib/cn";

const sizes = {
  sm: "text-[18px]",
  md: "text-[20px]",
  lg: "text-[32px]",
  xl: "text-[clamp(40px,7vw,84px)]",
} as const;

type WordmarkProps = {
  className?: string;
  size?: keyof typeof sizes;
  invert?: boolean;
};

export function Wordmark({ className, size = "md", invert = false }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display font-extrabold tracking-[-0.055em] leading-none",
        invert ? "text-cloud" : "text-navy",
        sizes[size],
        className,
      )}
    >
      <span>Rift</span>
      <span
        aria-hidden="true"
        className={cn(
          "mx-[-0.02em] mb-[0.08em] inline-block h-[0.08em] w-[0.18em] self-center",
          invert ? "bg-cloud" : "bg-signal",
        )}
      />
      <span className={invert ? "text-cloud" : "text-signal"}>W</span>
      <span>orks</span>
    </span>
  );
}
