import React from 'react';

/** The check is drawn with CSS borders — the system has no icon set. */
export function Checkbox({ label, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      minHeight: 24,
      ...style
    }}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        width: 18, height: 18, flex: '0 0 auto',
        background: checked ? 'var(--rw-invert)' : 'var(--rw-surface-input)',
        border: checked ? '1px solid var(--rw-invert)' : '1px solid var(--rw-border-field)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--rw-duration) var(--rw-easing)'
      }}>
        {checked ? (
          <span style={{
            width: 8, height: 4,
            borderLeft: '2px solid var(--rw-on-invert)',
            borderBottom: '2px solid var(--rw-on-invert)',
            transform: 'rotate(-45deg)',
            marginTop: -2
          }} />
        ) : null}
      </span>
      <span style={{
        font: 'var(--rw-weight-regular) 13px/1.2 var(--rw-font-sans)',
        color: checked ? 'var(--rw-text)' : 'var(--rw-text-secondary)'
      }}>{label}</span>
    </label>
  );
}
