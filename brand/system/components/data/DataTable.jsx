import React from 'react';

/** 2px Basalt header rule, Hair row separators, Bone on the selected row. */
export function DataTable({ columns = [], rows = [], selectable = false, selected = [], onSelect, sortKey, style, ...rest }) {
  const toggle = id => {
    if (!onSelect) return;
    onSelect(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  };
  const box = on => (
    <span style={{
      width: 16, height: 16, flex: '0 0 auto',
      background: on ? 'var(--rw-invert)' : 'var(--rw-surface-input)',
      border: on ? '1px solid var(--rw-invert)' : '1px solid var(--rw-border-field)'
    }} />
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }} {...rest}>
      <div style={{
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        padding: '9px 0',
        borderBottom: 'var(--rw-border-strong) solid var(--rw-invert)',
        font: 'var(--rw-weight-medium) 9px/1 var(--rw-font-mono)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--rw-text-secondary)'
      }}>
        {selectable ? box(false) : null}
        {columns.map(c => (
          <span key={c.key} style={{
            flex: c.width ? `0 0 ${c.width}px` : 1,
            textAlign: c.align || 'left',
            color: sortKey === c.key ? 'var(--rw-text)' : 'inherit'
          }}>
            {c.label}{sortKey === c.key ? ' ↓' : ''}
          </span>
        ))}
      </div>
      {rows.map((r, i) => {
        const on = selected.includes(r.id);
        return (
          <div
            key={r.id ?? i}
            onClick={selectable ? () => toggle(r.id) : undefined}
            style={{
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: i < rows.length - 1 ? '1px solid var(--rw-rule-hair)' : 'none',
              background: on ? 'var(--rw-bone)' : 'transparent',
              font: 'var(--rw-weight-regular) 12px/1.3 var(--rw-font-sans)',
              color: 'var(--rw-text)',
              cursor: selectable ? 'pointer' : 'default'
            }}
          >
            {selectable ? box(on) : null}
            {columns.map(c => (
              <span key={c.key} style={{
                flex: c.width ? `0 0 ${c.width}px` : 1,
                textAlign: c.align || 'left',
                fontFamily: c.mono ? 'var(--rw-font-mono)' : 'inherit',
                minWidth: 0
              }}>{r[c.key]}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
