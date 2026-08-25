"use client";

import { useId, useState, type CSSProperties, type InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  help?: string;
  error?: string;
  style?: CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, help, error, id, style, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  const generatedId = useId();
  const fieldId = id || generatedId;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, ...style }}>
      {label ? (
        <label
          htmlFor={fieldId}
          style={{
            font: "var(--rw-weight-medium) var(--rw-ui-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "var(--rw-ui-label-track)",
            textTransform: "uppercase",
            color: "var(--rw-text-secondary)",
          }}
        >
          {label}
        </label>
      ) : null}
      <input
        id={fieldId}
        aria-invalid={error ? true : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "var(--rw-surface-input)",
          border: "1px solid var(--rw-border-field)",
          borderRadius: "var(--rw-radius-field)",
          padding: "var(--rw-field-pad-y) var(--rw-field-pad-x)",
          font: "var(--rw-weight-regular) 14px/1.2 var(--rw-font-sans)",
          color: "var(--rw-text)",
          outline: "none",
          transition: "border-color var(--rw-duration) var(--rw-easing)",
          borderColor: error ? "var(--rw-negative)" : focus ? "var(--rw-invert)" : "var(--rw-border-field)",
        }}
        {...rest}
      />
      {error || help ? (
        <span
          style={{
            font: "var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)",
            color: error ? "var(--rw-negative)" : "var(--rw-text-secondary)",
          }}
        >
          {error || help}
        </span>
      ) : null}
    </div>
  );
}
