import React from 'react';

const TONES = {
  neutral:  { color: 'var(--rw-text)',       border: 'var(--rw-invert)' },
  positive: { color: 'var(--rw-positive)',   border: 'var(--rw-positive)' },
  negative: { color: 'var(--rw-negative)',   border: 'var(--rw-negative)' },
  info:     { color: 'var(--rw-info)',       border: 'var(--rw-info)' },
  muted:    { color: 'var(--rw-text-secondary)', border: 'var(--rw-border)' }
};

/** Status, always carrying a word. Colour is the second signal, never the only one. */
export function Badge({ tone = 'neutral', solid = false, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 11px',
        border: `1px solid ${t.border}`,
        background: solid ? t.border : 'transparent',
        color: solid ? 'var(--rw-on-invert)' : t.color,
        font: 'var(--rw-weight-medium) var(--rw-ui-label-size)/1 var(--rw-font-mono)',
        letterSpacing: 'var(--rw-button-track)',
        textTransform: 'uppercase',
        borderRadius: 'var(--rw-radius)',
        whiteSpace: 'nowrap',
        ...style
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
