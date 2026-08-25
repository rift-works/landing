import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "border-signal bg-signal text-cloud hover:bg-[#185dcc] hover:border-[#185dcc]",
  ghost:
    "border-line bg-transparent text-navy hover:border-navy",
  ghostOnDark:
    "border-white/30 bg-transparent text-cloud hover:border-cloud",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md border px-4 py-[11px] font-mono text-[11px] uppercase tracking-[0.06em] transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
