import React from 'react';

export function ProgressBar({ label, value = 0, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }} {...rest}>
      {label ? (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--rw-space-4)',
          font: 'var(--rw-weight-regular) 11px/1 var(--rw-font-mono)',
          color: 'var(--rw-text-secondary)'
        }}>
          <span>{label}</span>
          <span style={{ color: 'var(--rw-text)' }}>{pct}%</span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ height: 8, background: 'var(--rw-rule)' }}
      >
        <div style={{
          height: 8,
          width: `${pct}%`,
          background: 'var(--rw-accent)',
          transition: 'width var(--rw-duration) var(--rw-easing)'
        }} />
      </div>
    </div>
  );
}
