import React from 'react';

const SIZES = {
  sm: { padY: 'var(--rw-control-pad-y-sm)', padX: 'var(--rw-control-pad-x-sm)', font: '10px' },
  md: { padY: 'var(--rw-control-pad-y)', padX: 'var(--rw-control-pad-x)', font: 'var(--rw-button-size)' }
};

/** Square, mono, uppercase. Labels are verbs. */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;

  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--rw-basalt-deep)' : 'var(--rw-invert)',
      color: 'var(--rw-on-invert)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--rw-invert)' : 'transparent',
      color: hover && !disabled ? 'var(--rw-on-invert)' : 'var(--rw-text)',
      border: '1px solid var(--rw-invert)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--rw-text)',
      border: `1px solid ${hover && !disabled ? 'var(--rw-border)' : 'transparent'}`
    },
    accent: {
      background: 'var(--rw-oxide)',
      color: '#FFFFFF',
      border: '1px solid transparent',
      filter: hover && !disabled ? 'brightness(0.88)' : 'none'
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...skins[variant],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--rw-space-2)',
        width: fullWidth ? '100%' : 'auto',
        minHeight: size === 'sm' ? 32 : 40,
        padding: `${s.padY} ${s.padX}`,
        font: `var(--rw-weight-semibold) ${s.font}/1 var(--rw-font-mono)`,
        letterSpacing: 'var(--rw-button-track)',
        textTransform: 'uppercase',
        borderRadius: 'var(--rw-radius)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background var(--rw-duration) var(--rw-easing), color var(--rw-duration) var(--rw-easing), border-color var(--rw-duration) var(--rw-easing)',
        ...style
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
