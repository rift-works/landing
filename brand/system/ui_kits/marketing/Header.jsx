import React from 'react';
import { Logo } from '../../components/core/Logo.jsx';
import { Button } from '../../components/core/Button.jsx';

const NAV = {
  es: ['Servicios', 'Enfoque', 'Trabajo', 'Contacto'],
  en: ['Services', 'Approach', 'Work', 'Contact']
};

export function Header({ lang = 'es', onLang, dark = false }) {
  return (
    <header style={{
      padding: '26px 48px',
      borderBottom: `1px solid ${dark ? 'rgba(237,233,227,.16)' : 'var(--rw-rule)'}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--rw-space-6)',
      flexWrap: 'wrap'
    }}>
      <Logo size={24} reversed={dark} clearSpace={false} />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap' }}>
        {NAV[lang].map((n, i) => (
          <a key={n} href="#" style={{
            font: 'var(--rw-weight-regular) 12px/1 var(--rw-font-mono)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: i === 0 ? 'var(--rw-accent-text)' : 'var(--rw-text)',
            borderBottom: 'none'
          }}>{n}</a>
        ))}
        <button
          type="button"
          onClick={() => onLang && onLang(lang === 'es' ? 'en' : 'es')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            font: 'var(--rw-weight-regular) 12px/1 var(--rw-font-mono)',
            letterSpacing: '0.1em',
            color: 'var(--rw-text-secondary)'
          }}
        >{lang === 'es' ? 'EN' : 'ES'}</button>
        <Button variant="accent" size="sm">
          {lang === 'es' ? 'Iniciar un proyecto' : 'Start a project'}
        </Button>
      </nav>
    </header>
  );
}
