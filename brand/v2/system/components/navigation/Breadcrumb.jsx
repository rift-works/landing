import React from 'react';

/** Slashes are mono glyphs. The last crumb is the current page and is not a link. */
export function Breadcrumb({ items = [], style, ...rest }) {
  return (
    <nav aria-label="Breadcrumb" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'center',
      font: 'var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)',
      color: 'var(--rw-text-secondary)',
      ...style
    }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const label = it.label ?? it;
        return (
          <React.Fragment key={i}>
            {last ? (
              <span aria-current="page" style={{ color: 'var(--rw-text)' }}>{label}</span>
            ) : (
              <a href={it.href || '#'} style={{ color: 'inherit', borderBottom: 'none' }}>{label}</a>
            )}
            {!last ? <span aria-hidden="true">/</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
