import React from 'react';

/** Paper on Bone, 1px rule, 22px padding, square, unshadowed. */
export function Card({ label, title, children, footer, interactive = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        background: 'var(--rw-surface-raised)',
        border: `1px solid ${interactive && hover ? 'var(--rw-invert)' : 'var(--rw-border)'}`,
        borderRadius: 'var(--rw-radius)',
        boxShadow: 'var(--rw-shadow)',
        padding: 'var(--rw-card-pad)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--rw-space-3)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'border-color var(--rw-duration) var(--rw-easing)',
        ...style
      }}
      {...rest}
    >
      {label ? (
        <span style={{
          font: 'var(--rw-weight-medium) var(--rw-ui-label-size)/1 var(--rw-font-mono)',
          letterSpacing: 'var(--rw-ui-label-track)',
          textTransform: 'uppercase',
          color: 'var(--rw-accent-text)'
        }}>{label}</span>
      ) : null}
      {title ? (
        <h3 style={{
          margin: 0,
          font: 'var(--rw-weight-semibold) var(--rw-h3-size)/var(--rw-h3-lh) var(--rw-font-sans)',
          letterSpacing: 'var(--rw-h3-track)',
          color: 'var(--rw-text)'
        }}>{title}</h3>
      ) : null}
      {children}
      {footer ? (
        <div style={{
          borderTop: '1px solid var(--rw-border-inner)',
          paddingTop: 'var(--rw-space-3)',
          font: 'var(--rw-weight-regular) var(--rw-data-size)/var(--rw-data-lh) var(--rw-font-mono)',
          color: 'var(--rw-text-secondary)'
        }}>{footer}</div>
      ) : null}
    </div>
  );
}
