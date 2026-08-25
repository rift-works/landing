import type { CSSProperties, HTMLAttributes } from "react";

const PATHS = ["M6 6 H26 V32 H21 V58 H6 Z", "M43 6 H58 V58 H38 V32 H43 Z"];

type LogoProps = {
  variant?: "horizontal" | "stacked" | "symbol";
  size?: number;
  reversed?: boolean;
  descriptor?: boolean;
  clearSpace?: boolean;
  style?: CSSProperties;
} & HTMLAttributes<HTMLSpanElement>;

export function Logo({
  variant = "horizontal",
  size = 32,
  reversed = false,
  descriptor = false,
  clearSpace = true,
  style,
  ...rest
}: LogoProps) {
  const ink = reversed ? "var(--rw-bone)" : "var(--rw-basalt)";
  const channel = size * (5 / 64);
  const pad = clearSpace ? channel : 0;

  const symbol = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={ink}
      role="img"
      aria-label="RiftWorks"
      style={{ display: "block", flex: "0 0 auto" }}
    >
      {PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );

  if (variant === "symbol") {
    return (
      <span style={{ display: "inline-flex", padding: pad, ...style }} {...rest}>
        {symbol}
      </span>
    );
  }

  const word = (
    <span
      style={{
        font: `var(--rw-weight-semibold) ${size * 0.82}px/1 var(--rw-font-sans)`,
        letterSpacing: "-0.035em",
        color: ink,
        whiteSpace: "nowrap",
      }}
    >
      RiftWorks
    </span>
  );

  const tag = descriptor ? (
    <span
      style={{
        font: `var(--rw-weight-medium) ${Math.max(9, size * 0.26)}px/1.5 var(--rw-font-mono)`,
        letterSpacing: "var(--rw-label-track)",
        textTransform: "uppercase",
        color: reversed ? "var(--rw-oxide-lift)" : "var(--rw-oxide-deep)",
      }}
    >
      Technology · Data · Design · Strategy
      <br />
      Tecnología · Datos · Diseño · Estrategia
    </span>
  ) : null;

  if (variant === "stacked") {
    return (
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: size * 0.28,
          padding: pad,
          textAlign: "center",
          ...style,
        }}
        {...rest}
      >
        {symbol}
        {word}
        {tag}
      </span>
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: descriptor ? "flex-start" : "center",
        gap: size * 0.44,
        padding: pad,
        ...style,
      }}
      {...rest}
    >
      {symbol}
      <span style={{ display: "flex", flexDirection: "column", gap: size * 0.2 }}>
        {word}
        {tag}
      </span>
    </span>
  );
}
