import React from 'react';

/** The current page is a Basalt fill. Arrows are mono glyphs. */
export function Pagination({ page = 1, pages = 3, onChange, style, ...rest }) {
  const nums = Array.from({ length: pages }, (_, i) => i + 1);
  const cell = (content, opts = {}) => (
    <button
      type="button"
      disabled={opts.disabled}
      onClick={opts.onClick}
      aria-label={opts.label}
      aria-current={opts.current ? 'page' : undefined}
      style={{
        minWidth: 32,
        padding: '7px 11px',
        background: opts.current ? 'var(--rw-invert)' : 'transparent',
        color: opts.current ? 'var(--rw-on-invert)' : opts.disabled ? 'var(--rw-text-muted)' : 'var(--rw-text)',
        border: opts.current ? '1px solid var(--rw-invert)' : '1px solid var(--rw-border)',
        borderRadius: 'var(--rw-radius)',
        font: `${opts.current ? 'var(--rw-weight-medium)' : 'var(--rw-weight-regular)'} 11px/1 var(--rw-font-mono)`,
        cursor: opts.disabled ? 'default' : 'pointer',
        transition: 'background var(--rw-duration) var(--rw-easing)'
      }}
    >{content}</button>
  );
  return (
    <nav aria-label="Pagination" style={{ display: 'flex', gap: 6, alignItems: 'center', ...style }} {...rest}>
      {cell('‹', { label: 'Anterior', disabled: page === 1, onClick: () => onChange && onChange(page - 1) })}
      {nums.map(n => cell(n, { current: n === page, onClick: () => onChange && onChange(n), label: `Página ${n}` }))}
      {cell('›', { label: 'Siguiente', disabled: page === pages, onClick: () => onChange && onChange(page + 1) })}
    </nav>
  );
}
