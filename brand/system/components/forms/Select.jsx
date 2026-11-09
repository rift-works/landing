import React from 'react';

const Chevron = ({ open }) => (
  <span style={{
    width: 8, height: 8,
    borderRight: '2px solid var(--rw-text-secondary)',
    borderBottom: '2px solid var(--rw-text-secondary)',
    transform: open ? 'rotate(-135deg)' : 'rotate(45deg)',
    marginBottom: open ? -4 : 4,
    transition: 'transform var(--rw-duration) var(--rw-easing)'
  }} />
);

/** A listbox. The selected row carries a 3px Oxide edge — the view's one accent. */
export function Select({ label, options = [], value, onChange, placeholder = 'Seleccione…', style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find(o => (o.value ?? o) === value);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, position: 'relative', ...style }} {...rest}>
      {label ? (
        <span style={{
          font: 'var(--rw-weight-medium) var(--rw-ui-label-size)/1 var(--rw-font-mono)',
          letterSpacing: 'var(--rw-ui-label-track)',
          textTransform: 'uppercase',
          color: 'var(--rw-text-secondary)'
        }}>{label}</span>
      ) : null}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{
          ...{
        width: '100%',
        boxSizing: 'border-box',
        background: 'var(--rw-surface-input)',
        border: '1px solid var(--rw-border-field)',
        borderRadius: 'var(--rw-radius-field)',
        padding: 'var(--rw-field-pad-y) var(--rw-field-pad-x)',
        font: 'var(--rw-weight-regular) 14px/1.2 var(--rw-font-sans)',
        color: 'var(--rw-text)',
        outline: 'none',
        transition: 'border-color var(--rw-duration) var(--rw-easing)'
      },
          borderColor: open ? 'var(--rw-invert)' : 'var(--rw-border-field)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--rw-space-3)',
          padding: '11px 13px',
          textAlign: 'left',
          cursor: 'pointer',
          color: selected ? 'var(--rw-text)' : 'var(--rw-text-secondary)'
        }}
      >
        <span>{selected ? (selected.label ?? selected) : placeholder}</span>
        <Chevron open={open} />
      </button>
      {open ? (
        <div role="listbox" style={{
          border: '1px solid var(--rw-invert)',
          background: 'var(--rw-surface-input)',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 20
        }}>
          {options.map((o, i) => {
            const v = o.value ?? o;
            const isSel = v === value;
            return (
              <div
                key={v}
                role="option"
                aria-selected={isSel}
                onClick={() => { onChange && onChange(v); setOpen(false); }}
                style={{
                  padding: '10px 13px',
                  paddingLeft: isSel ? 10 : 13,
                  font: 'var(--rw-weight-regular) 13px/1.2 var(--rw-font-sans)',
                  color: 'var(--rw-text)',
                  background: isSel ? 'var(--rw-bone)' : 'transparent',
                  borderLeft: isSel ? '3px solid var(--rw-oxide)' : 'none',
                  borderBottom: i < options.length - 1 ? '1px solid var(--rw-rule-hair)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {o.label ?? o}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
