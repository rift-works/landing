import React from 'react';

/** Chips are square and monospaced so they never read as consumer-app tags. */
export function MultiSelect({ label, value = [], onChange, placeholder = 'Añadir…', style, ...rest }) {
  const remove = v => onChange && onChange(value.filter(x => x !== v));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }} {...rest}>
      {label ? (
        <span style={{
          font: 'var(--rw-weight-medium) var(--rw-ui-label-size)/1 var(--rw-font-mono)',
          letterSpacing: 'var(--rw-ui-label-track)',
          textTransform: 'uppercase',
          color: 'var(--rw-text-secondary)'
        }}>{label}</span>
      ) : null}
      <div style={{
        border: '1px solid var(--rw-border-field)',
        borderRadius: 'var(--rw-radius-field)',
        background: 'var(--rw-surface-input)',
        padding: 9,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        alignItems: 'center',
        minHeight: 44,
        boxSizing: 'border-box'
      }}>
        {value.map(v => (
          <span key={v} style={{
            background: 'var(--rw-invert)',
            color: 'var(--rw-on-invert)',
            padding: '5px 9px',
            font: 'var(--rw-weight-regular) 11px/1 var(--rw-font-mono)',
            display: 'inline-flex',
            gap: 7,
            alignItems: 'center'
          }}>
            {v}
            <button
              type="button"
              onClick={() => remove(v)}
              aria-label={`Quitar ${v}`}
              style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                color: 'var(--rw-on-invert)', opacity: 0.6,
                font: 'var(--rw-weight-regular) 11px/1 var(--rw-font-mono)'
              }}
            >×</button>
          </span>
        ))}
        <span style={{
          font: 'var(--rw-weight-regular) 12px/1 var(--rw-font-sans)',
          color: 'var(--rw-text-secondary)',
          padding: 4
        }}>{placeholder}</span>
      </div>
    </div>
  );
}
