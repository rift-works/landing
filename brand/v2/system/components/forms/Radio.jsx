import React from 'react';

/** The one circle in the system, and only because a square radio is unreadable. */
export function Radio({ label, checked = false, onChange, name, disabled = false, style, ...rest }) {
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
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange && onChange(true)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        width: 18, height: 18, flex: '0 0 auto', boxSizing: 'border-box',
        borderRadius: '50%',
        background: 'var(--rw-surface-input)',
        border: checked ? '5px solid var(--rw-invert)' : '1px solid var(--rw-border-field)',
        transition: 'border-width var(--rw-duration) var(--rw-easing)'
      }} />
      <span style={{
        font: 'var(--rw-weight-regular) 13px/1.2 var(--rw-font-sans)',
        color: checked ? 'var(--rw-text)' : 'var(--rw-text-secondary)'
      }}>{label}</span>
    </label>
  );
}
