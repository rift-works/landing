import React from 'react';

const TONES = {
  neutral:  { edge: 'var(--rw-invert)',   title: 'var(--rw-text)' },
  positive: { edge: 'var(--rw-positive)', title: 'var(--rw-positive)' },
  negative: { edge: 'var(--rw-oxide-deep)', title: 'var(--rw-oxide-deep)' },
  info:     { edge: 'var(--rw-info)',     title: 'var(--rw-info)' }
};

/** A 4px left edge carries the tone. No icons, no fills. */
export function Alert({ tone = 'neutral', title, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <div
      role={tone === 'negative' ? 'alert' : 'status'}
      style={{
        border: '1px solid var(--rw-border)',
        borderLeft: `4px solid ${t.edge}`,
        background: 'var(--rw-surface-input)',
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        ...style
      }}
      {...rest}
    >
      {title ? (
        <span style={{
          font: 'var(--rw-weight-semibold) 12px/1.3 var(--rw-font-sans)',
          color: t.title
        }}>{title}</span>
      ) : null}
      {children ? (
        <span style={{
          font: 'var(--rw-weight-regular) 11px/1.4 var(--rw-font-sans)',
          color: 'var(--rw-text-secondary)'
        }}>{children}</span>
      ) : null}
    </div>
  );
}
