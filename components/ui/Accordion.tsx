"use client";

import { useState, type CSSProperties } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  defaultOpen?: number;
  style?: CSSProperties;
};

export function Accordion({ items, defaultOpen = 0, style }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderTop: "var(--rw-border-strong) solid var(--rw-invert)", ...style }}>
      {items.map((item, index) => {
        const isOpen = index === open;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "var(--rw-space-4)",
                padding: "12px 0",
                minHeight: 44,
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--rw-border-inner)",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  font: `${isOpen ? "var(--rw-weight-semibold)" : "var(--rw-weight-regular)"} 13px/1.2 var(--rw-font-sans)`,
                  color: isOpen ? "var(--rw-text)" : "var(--rw-text-secondary)",
                }}
              >
                {item.question}
              </span>
              <span
                aria-hidden="true"
                style={{
                  font: "var(--rw-weight-regular) 14px/1 var(--rw-font-mono)",
                  color: isOpen ? "var(--rw-accent-text)" : "var(--rw-text-secondary)",
                  flex: "0 0 auto",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div
                style={{
                  padding: "0 0 14px",
                  borderBottom: "1px solid var(--rw-border-inner)",
                  font: "var(--rw-weight-regular) 13px/1.6 var(--rw-font-sans)",
                  color: "var(--rw-text)",
                }}
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
