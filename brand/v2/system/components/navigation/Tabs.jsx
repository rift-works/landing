import React from 'react';

/** The active tab's 3px Oxide underline is the view's one accent. */
export function Tabs({ items = [], value, onChange, children, style, ...rest }) {
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, ...style }} {...rest}>
      <div role="tablist" style={{ display: 'flex', borderBottom: '1px solid var(--rw-border)' }}>
        {items.map(it => {
          const v = it.value ?? it;
          const isActive = v === active;
          return (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange && onChange(v)}
              style={{
                padding: '11px 14px',
                background: 'none',
                border: 'none',
                borderBottom: isActive ? 'var(--rw-border-accent) solid var(--rw-oxide)' : 'var(--rw-border-accent) solid transparent',
                marginBottom: -1,
                font: `${isActive ? 'var(--rw-weight-semibold)' : 'var(--rw-weight-regular)'} 12px/1 var(--rw-font-mono)`,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--rw-text)' : 'var(--rw-text-secondary)',
                cursor: 'pointer',
                transition: 'color var(--rw-duration) var(--rw-easing), border-color var(--rw-duration) var(--rw-easing)'
              }}
            >
              {it.label ?? it}
            </button>
          );
        })}
      </div>
      {children}
    </div>
  );
}
