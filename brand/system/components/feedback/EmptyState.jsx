import React from 'react';

const PATHS = ['M6 6 H26 V32 H21 V58 H6 Z', 'M43 6 H58 V58 H38 V32 H43 Z'];

/** The Aperture symbol in Field Border grey is the system's only illustration. */
export function EmptyState({ title, children, action, style, ...rest }) {
  return (
    <div style={{
      border: '1px dashed var(--rw-border-field)',
      padding: '26px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
      textAlign: 'center',
      ...style
    }} {...rest}>
      <svg width="30" height="30" viewBox="0 0 64 64" fill="var(--rw-border-field)" aria-hidden="true">
        {PATHS.map((d, i) => <path key={i} d={d} />)}
      </svg>
      {title ? (
        <span style={{
          font: 'var(--rw-weight-semibold) 13px/1.3 var(--rw-font-sans)',
          color: 'var(--rw-text)'
        }}>{title}</span>
      ) : null}
      {children ? (
        <span style={{
          font: 'var(--rw-weight-regular) 11px/1.5 var(--rw-font-sans)',
          color: 'var(--rw-text-secondary)'
        }}>{children}</span>
      ) : null}
      {action}
    </div>
  );
}
