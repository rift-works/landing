"use client";

import { useId, useState, type CSSProperties, type TextareaHTMLAttributes } from "react";

type TextareaProps = {
  label?: string;
  help?: string;
  error?: string;
  style?: CSSProperties;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  label,
  help,
  error,
  maxLength,
  value,
  id,
  rows = 4,
  style,
  ...rest
}: TextareaProps) {
  const [focus, setFocus] = useState(false);
  const generatedId = useId();
  const fieldId = id || generatedId;
  const count = typeof value === "string" ? value.length : 0;

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
      <textarea
        id={fieldId}
        rows={rows}
        value={value}
        maxLength={maxLength}
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
          font: "var(--rw-weight-regular) 14px/1.5 var(--rw-font-sans)",
          color: "var(--rw-text)",
          outline: "none",
          resize: "vertical",
          transition: "border-color var(--rw-duration) var(--rw-easing)",
          borderColor: error ? "var(--rw-negative)" : focus ? "var(--rw-invert)" : "var(--rw-border-field)",
        }}
        {...rest}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--rw-space-4)",
          font: "var(--rw-weight-regular) 10px/1 var(--rw-font-mono)",
          color: error ? "var(--rw-negative)" : "var(--rw-text-secondary)",
        }}
      >
        <span>{error || help}</span>
        {maxLength ? (
          <span>
            {count} / {maxLength}
          </span>
        ) : null}
      </div>
    </div>
  );
}
