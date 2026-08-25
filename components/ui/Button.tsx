"use client";

import { useState, type ButtonHTMLAttributes, type CSSProperties } from "react";

const SIZES = {
  sm: { padY: "var(--rw-control-pad-y-sm)", padX: "var(--rw-control-pad-x-sm)", font: "10px" },
  md: { padY: "var(--rw-control-pad-y)", padX: "var(--rw-control-pad-x)", font: "var(--rw-button-size)" },
} as const;

const skins = {
  primary: {
    rest: {
      background: "var(--rw-invert)",
      color: "var(--rw-on-invert)",
      border: "1px solid transparent",
    },
    hover: {
      background: "var(--rw-basalt-deep)",
      color: "var(--rw-on-invert)",
      border: "1px solid transparent",
    },
  },
  secondary: {
    rest: {
      background: "transparent",
      color: "var(--rw-text)",
      border: "1px solid var(--rw-invert)",
    },
    hover: {
      background: "var(--rw-invert)",
      color: "var(--rw-on-invert)",
      border: "1px solid var(--rw-invert)",
    },
  },
  ghost: {
    rest: {
      background: "transparent",
      color: "var(--rw-text)",
      border: "1px solid transparent",
    },
    hover: {
      background: "transparent",
      color: "var(--rw-text)",
      border: "1px solid var(--rw-border)",
    },
  },
  accent: {
    rest: {
      background: "var(--rw-oxide)",
      color: "#FFFFFF",
      border: "1px solid transparent",
      filter: "none",
    },
    hover: {
      background: "var(--rw-oxide)",
      color: "#FFFFFF",
      border: "1px solid transparent",
      filter: "brightness(0.88)",
    },
  },
} as const;

type ButtonProps = {
  variant?: keyof typeof skins;
  size?: keyof typeof SIZES;
  fullWidth?: boolean;
  href?: string;
  style?: CSSProperties;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style">;

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const s = SIZES[size];
  const skin = skins[variant][hover && !disabled ? "hover" : "rest"];

  const box: CSSProperties = {
    ...skin,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--rw-space-2)",
    width: fullWidth ? "100%" : "auto",
    minHeight: size === "sm" ? 32 : 40,
    padding: `${s.padY} ${s.padX}`,
    font: `var(--rw-weight-semibold) ${s.font}/1 var(--rw-font-mono)`,
    letterSpacing: "var(--rw-button-track)",
    textTransform: "uppercase",
    borderRadius: "var(--rw-radius)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    textDecoration: "none",
    borderBottom: skin.border,
    boxSizing: "border-box",
    transition:
      "background var(--rw-duration) var(--rw-easing), color var(--rw-duration) var(--rw-easing), border-color var(--rw-duration) var(--rw-easing)",
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  if (href) {
    return (
      <a href={href} aria-disabled={disabled || undefined} style={box} {...handlers}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} style={box} {...handlers} {...rest}>
      {children}
    </button>
  );
}
