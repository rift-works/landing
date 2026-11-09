import React from 'react';

/** Flat Rule Soft blocks. No shimmer — the system has no gradients. */
export function Skeleton({ lines = 3, widths = ['100%', '82%', '64%'], height = 11, style, ...rest }) {
  const rows = Array.from({ length: lines }, (_, i) => widths[i % widths.length]);
  return (
    <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: 9, ...style }} {...rest}>
      {rows.map((w, i) => (
        <div key={i} style={{ height, width: w, background: 'var(--rw-border-inner)' }} />
      ))}
    </div>
  );
}
