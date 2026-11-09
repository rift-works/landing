import React from 'react';

/** A square ring with one Oxide edge. Rotation is the only spin in the system. */
export function Spinner({ label = 'Cargando…', size = 14, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }} {...rest}>
      <style>{'@keyframes rw-spin { to { transform: rotate(360deg) } }'}</style>
      <span
        role="status"
        aria-label={label}
        style={{
          width: size,
          height: size,
          border: '2px solid var(--rw-rule)',
          borderTopColor: 'var(--rw-accent)',
          animation: 'rw-spin 700ms linear infinite',
          flex: '0 0 auto'
        }}
      />
      {label ? (
        <span style={{
          font: 'var(--rw-weight-regular) 11px/1 var(--rw-font-mono)',
          color: 'var(--rw-text-secondary)'
        }}>{label}</span>
      ) : null}
    </div>
  );
}
