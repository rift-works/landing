import React from 'react';

const DEFAULT_PHASES = ['Discover', 'Architect', 'Build', 'Optimize'];

/** The four-phase delivery model. Never rename the phases per client. */
export function PhaseProgress({ phases = DEFAULT_PHASES, current = 2, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 6, ...style }} {...rest}>
      {phases.map((p, i) => {
        const done = i < current;
        const isCurrent = i === current;
        return (
          <div key={p} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{
              height: 5,
              background: isCurrent ? 'var(--rw-accent)' : done ? 'var(--rw-invert)' : 'var(--rw-rule)'
            }} />
            <span style={{
              font: `${isCurrent ? 'var(--rw-weight-medium)' : 'var(--rw-weight-regular)'} 9px/1 var(--rw-font-mono)`,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isCurrent ? 'var(--rw-accent-text)' : 'var(--rw-text-secondary)'
            }}>{p}</span>
          </div>
        );
      })}
    </div>
  );
}
