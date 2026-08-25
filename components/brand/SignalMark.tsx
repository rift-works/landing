import { cn } from "@/lib/cn";

type SignalMarkProps = {
  className?: string;
  title?: string;
  variant?: "light" | "dark";
};

export function SignalMark({
  className,
  title = "Señal de retorno, firma auxiliar de RiftWorks",
  variant = "light",
}: SignalMarkProps) {
  const bridge = variant === "dark" ? "#F7FAFC" : "#0B1F33";

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("overflow-visible", className)}
    >
      <path
        d="M18 68C36 30 58 28 72 52s28 24 30-18"
        stroke="#1F6FEB"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M102 68C84 30 62 28 48 52S20 76 18 50"
        stroke="#16B8A6"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path d="M52 60h16" stroke={bridge} strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
