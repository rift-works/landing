"use client";

import type { CSSProperties, InputHTMLAttributes } from "react";

type SliderProps = {
  label: string;
  valueLabel?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  style?: CSSProperties;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "min" | "max" | "step">;

export function Slider({
  label,
  valueLabel,
  min = 0,
  max = 100,
  step,
  value = 50,
  onChange,
  style,
  ...rest
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, ...style }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--rw-space-4)",
          font: "var(--rw-weight-regular) 11px/1 var(--rw-font-mono)",
          color: "var(--rw-text-secondary)",
        }}
      >
        <span>{label}</span>
        <span style={{ color: "var(--rw-text)" }}>{valueLabel ?? value}</span>
      </div>
      <div style={{ position: "relative", height: 16, display: "flex", alignItems: "center" }}>
        <div style={{ height: 4, background: "var(--rw-rule)", width: "100%" }} />
        <div
          style={{
            position: "absolute",
            left: 0,
            height: 4,
            width: `${pct}%`,
            background: "var(--rw-invert)",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange?.(Number(event.target.value))}
          aria-label={label}
          style={{ position: "absolute", inset: 0, width: "100%", opacity: 0, cursor: "pointer", margin: 0 }}
          {...rest}
        />
        <span
          style={{
            position: "absolute",
            left: `${pct}%`,
            width: 16,
            height: 16,
            marginLeft: -8,
            background: "var(--rw-oxide)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
