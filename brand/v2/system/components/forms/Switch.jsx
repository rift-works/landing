import React from 'react';

/** State is carried by position and fill, not by colour alone. */
export function Switch({ label, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--rw-space-4)',
      opacity: disabled ? 0.4 : 1,
      minHeight: 32,
      ...style
    }}>
      {label ? (
        <span style={{
          font: 'var(--rw-weight-regular) 13px/1.2 var(--rw-font-sans)',
          color: checked ? 'var(--rw-text)' : 'var(--rw-text-secondary)'
        }}>{label}</span>
      ) : null}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={typeof label === 'string' ? label : undefined}
        disabled={disabled}
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 46, height: 24, flex: '0 0 auto',
          background: checked ? 'var(--rw-invert)' : 'var(--rw-rule)',
          border: 'none',
          borderRadius: 'var(--rw-radius)',
          padding: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: checked ? 'flex-end' : 'flex-start',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background var(--rw-duration) var(--rw-easing)'
        }}
        {...rest}
      >
        <span style={{
          width: 18, height: 18,
          background: checked ? 'var(--rw-on-invert)' : 'var(--rw-surface-raised)',
          transition: 'background var(--rw-duration) var(--rw-easing)'
        }} />
      </button>
    </div>
  );
}
