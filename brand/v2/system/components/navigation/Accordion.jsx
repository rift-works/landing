import React from 'react';

/** + and − are mono glyphs; the open item's glyph is the accent. */
export function Accordion({ items = [], defaultOpen = 0, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderTop: 'var(--rw-border-strong) solid var(--rw-invert)', ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = i === open;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--rw-space-4)',
                padding: '12px 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--rw-border-inner)',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <span style={{
                font: `${isOpen ? 'var(--rw-weight-semibold)' : 'var(--rw-weight-regular)'} 13px/1.2 var(--rw-font-sans)`,
                color: isOpen ? 'var(--rw-text)' : 'var(--rw-text-secondary)'
              }}>{it.question ?? it.title}</span>
              <span aria-hidden="true" style={{
                font: 'var(--rw-weight-regular) 14px/1 var(--rw-font-mono)',
                color: isOpen ? 'var(--rw-accent-text)' : 'var(--rw-text-secondary)',
                flex: '0 0 auto'
              }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? (
              <div style={{
                padding: '0 0 14px',
                borderBottom: '1px solid var(--rw-border-inner)',
                font: 'var(--rw-weight-regular) 13px/1.6 var(--rw-font-sans)',
                color: 'var(--rw-text)'
              }}>{it.answer ?? it.children}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
