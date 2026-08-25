import React from 'react';

/** A 2px Basalt frame stands in for the shadow the system does not have. */
export function Dialog({ open = true, title, children, confirmLabel = 'Enviar', cancelLabel = 'Cancelar', onConfirm, onCancel, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(18, 18, 16, 0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--rw-space-6)',
        zIndex: 100
      }}
      onClick={onCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={e => e.stopPropagation()}
        style={{
          border: 'var(--rw-border-strong) solid var(--rw-basalt)',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 420,
          ...style
        }}
        {...rest}
      >
        <div style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          borderBottom: '1px solid var(--rw-rule-soft)'
        }}>
          {title ? (
            <span style={{
              font: 'var(--rw-weight-semibold) 15px/1.2 var(--rw-font-sans)',
              letterSpacing: '-0.02em',
              color: 'var(--rw-basalt)'
            }}>{title}</span>
          ) : null}
          <span style={{
            font: 'var(--rw-weight-regular) 12px/1.5 var(--rw-font-sans)',
            color: 'var(--rw-ash)'
          }}>{children}</span>
        </div>
        <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button type="button" onClick={onCancel} style={{
            border: '1px solid var(--rw-basalt)', background: 'transparent', color: 'var(--rw-basalt)',
            padding: '9px 14px', font: 'var(--rw-weight-semibold) 10px/1 var(--rw-font-mono)',
            letterSpacing: 'var(--rw-button-track)', textTransform: 'uppercase', cursor: 'pointer'
          }}>{cancelLabel}</button>
          <button type="button" onClick={onConfirm} style={{
            border: '1px solid var(--rw-basalt)', background: 'var(--rw-basalt)', color: 'var(--rw-bone)',
            padding: '10px 14px', font: 'var(--rw-weight-semibold) 10px/1 var(--rw-font-mono)',
            letterSpacing: 'var(--rw-button-track)', textTransform: 'uppercase', cursor: 'pointer'
          }}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
