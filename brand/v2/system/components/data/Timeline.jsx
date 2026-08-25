import React from 'react';

/** Current is Oxide, past is Basalt, pending is a hollow square. */
export function Timeline({ items = [], style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const marker = it.state === 'current' ? 'var(--rw-accent)'
          : it.state === 'pending' ? 'transparent'
          : 'var(--rw-invert)';
        return (
          <div key={i} style={{ display: 'flex', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{
                width: 11, height: 11, flex: '0 0 auto',
                background: marker,
                border: it.state === 'pending' ? '1px solid var(--rw-border-field)' : 'none'
              }} />
              {!last ? <span style={{ width: 1, flex: 1, background: 'var(--rw-border)' }} /> : null}
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              paddingBottom: last ? 0 : 16
            }}>
              <span style={{
                font: `${it.state === 'pending' ? 'var(--rw-weight-regular)' : 'var(--rw-weight-semibold)'} 12px/1.3 var(--rw-font-sans)`,
                color: it.state === 'pending' ? 'var(--rw-text-secondary)' : 'var(--rw-text)'
              }}>{it.title}</span>
              <span style={{
                font: 'var(--rw-weight-regular) 10px/1.3 var(--rw-font-mono)',
                color: 'var(--rw-text-secondary)'
              }}>{it.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
