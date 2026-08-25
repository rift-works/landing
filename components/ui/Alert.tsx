import type { CSSProperties, ReactNode } from "react";

const TONES = {
  neutral: { edge: "var(--rw-invert)", title: "var(--rw-text)" },
  positive: { edge: "var(--rw-positive)", title: "var(--rw-positive)" },
  negative: { edge: "var(--rw-oxide-deep)", title: "var(--rw-oxide-deep)" },
  info: { edge: "var(--rw-info)", title: "var(--rw-info)" },
} as const;

type AlertProps = {
  tone?: keyof typeof TONES;
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

export function Alert({ tone = "neutral", title, children, style }: AlertProps) {
  const t = TONES[tone];

  return (
    <div
      role={tone === "negative" ? "alert" : "status"}
      style={{
        border: "1px solid var(--rw-border)",
        borderLeft: `4px solid ${t.edge}`,
        background: "var(--rw-surface-input)",
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        ...style,
      }}
    >
      {title ? (
        <span
          style={{
            font: "var(--rw-weight-semibold) 12px/1.3 var(--rw-font-sans)",
            color: t.title,
          }}
        >
          {title}
        </span>
      ) : null}
      {children ? (
        <span
          style={{
            font: "var(--rw-weight-regular) 11px/1.4 var(--rw-font-sans)",
            color: "var(--rw-text-secondary)",
          }}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
}
