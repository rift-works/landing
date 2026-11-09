import React from 'react';
import { Logo } from '../../components/core/Logo.jsx';

export function Footer({ lang = 'es' }) {
  const legal = lang === 'es'
    ? 'RiftWorks · Managua, Nicaragua · Marca en proceso de registro'
    : 'RiftWorks · Managua, Nicaragua · Mark pending registration';
  return (
    <footer data-theme="dark" style={{
      background: 'var(--rw-basalt-deep)',
      color: 'var(--rw-bone)',
      padding: '44px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--rw-space-8)',
      flexWrap: 'wrap'
    }}>
      <Logo size={30} reversed descriptor clearSpace={false} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
        <a href="mailto:hola@weareriftworks.com" style={{
          font: 'var(--rw-weight-regular) 13px/1.4 var(--rw-font-mono)',
          color: 'var(--rw-oxide-lift)',
          borderBottom: 'none'
        }}>hola@weareriftworks.com</a>
        <span style={{
          font: 'var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)',
          color: 'rgba(237,233,227,.55)'
        }}>{legal}</span>
      </div>
    </footer>
  );
}
