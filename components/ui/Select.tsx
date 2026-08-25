"use client";

import { useState, type CSSProperties } from "react";

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRight: "2px solid var(--rw-text-secondary)",
        borderBottom: "2px solid var(--rw-text-secondary)",
        transform: open ? "rotate(-135deg)" : "rotate(45deg)",
        marginBottom: open ? -4 : 4,
        transition: "transform var(--rw-duration) var(--rw-easing)",
      }}
    />
  );
}

type SelectProps = {
  label?: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: CSSProperties;
};

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Seleccione…",
  style,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option === value);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, position: "relative", ...style }}>
      {label ? (
        <span
          style={{
            font: "var(--rw-weight-medium) var(--rw-ui-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "var(--rw-ui-label-track)",
            textTransform: "uppercase",
            color: "var(--rw-text-secondary)",
          }}
        >
          {label}
        </span>
      ) : null}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "var(--rw-surface-input)",
          borderRadius: "var(--rw-radius-field)",
          font: "var(--rw-weight-regular) 14px/1.2 var(--rw-font-sans)",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--rw-space-3)",
          padding: "11px 13px",
          textAlign: "left",
          cursor: "pointer",
          color: selected ? "var(--rw-text)" : "var(--rw-text-secondary)",
          border: `1px solid ${open ? "var(--rw-invert)" : "var(--rw-border-field)"}`,
        }}
      >
        <span>{selected ?? placeholder}</span>
        <Chevron open={open} />
      </button>
      {open ? (
        <div
          role="listbox"
          style={{
            border: "1px solid var(--rw-invert)",
            background: "var(--rw-surface-input)",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 20,
          }}
        >
          {options.map((option, index) => {
            const isSel = option === value;
            return (
              <div
                key={option}
                role="option"
                aria-selected={isSel}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                style={{
                  padding: "10px 13px",
                  paddingLeft: isSel ? 10 : 13,
                  font: "var(--rw-weight-regular) 13px/1.2 var(--rw-font-sans)",
                  color: "var(--rw-text)",
                  background: isSel ? "var(--rw-bone)" : "transparent",
                  borderLeft: isSel ? "3px solid var(--rw-oxide)" : "none",
                  borderBottom: index < options.length - 1 ? "1px solid var(--rw-rule-hair)" : "none",
                  cursor: "pointer",
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
