import React from 'react';

/** The ⌘K hint is a mono glyph, not an icon. */
export function SearchField({ value = '', onChange, results = [], shortcut = '⌘K', placeholder = 'Buscar…', style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const open = focus && value.length > 0;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', ...style }}>
      <div style={{
        border: `1px solid ${focus ? 'var(--rw-invert)' : 'var(--rw-border-field)'}`,
        borderRadius: 'var(--rw-radius-field)',
        background: 'var(--rw-surface-input)',
        padding: '11px 13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--rw-space-3)',
        transition: 'border-color var(--rw-duration) var(--rw-easing)'
      }}>
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 120)}
          onChange={e => onChange && onChange(e.target.value)}
          style={{
            flex: 1, minWidth: 0, border: 'none', background: 'none', outline: 'none',
            font: 'var(--rw-weight-regular) 13px/1.2 var(--rw-font-sans)',
            color: 'var(--rw-text)'
          }}
          {...rest}
        />
        <span style={{
          font: 'var(--rw-weight-regular) 11px/1 var(--rw-font-mono)',
          color: 'var(--rw-text-secondary)',
          flex: '0 0 auto'
        }}>{shortcut}</span>
      </div>
      {open ? (
        <div style={{
          border: '1px solid var(--rw-border)',
          background: 'var(--rw-surface-input)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {results.map((r, i) => (
            <span key={i} style={{
              padding: '10px 13px',
              font: 'var(--rw-weight-regular) 12px/1.3 var(--rw-font-sans)',
              color: 'var(--rw-text)',
              borderBottom: '1px solid var(--rw-rule-hair)'
            }}>{r}</span>
          ))}
          <span style={{
            padding: '8px 13px',
            font: 'var(--rw-weight-regular) 10px/1 var(--rw-font-mono)',
            color: 'var(--rw-text-secondary)'
          }}>{results.length} resultado{results.length === 1 ? '' : 's'}</span>
        </div>
      ) : null}
    </div>
  );
}
