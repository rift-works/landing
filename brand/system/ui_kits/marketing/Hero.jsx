import React from 'react';
import { Button } from '../../components/core/Button.jsx';

const COPY = {
  es: {
    kicker: 'Tecnología · Datos · Diseño · Estrategia',
    head: 'Integramos software, datos y diseño estratégico para transformar operaciones complejas.',
    sub: 'RiftWorks entiende el problema, estructura la solución y tiene la capacidad técnica para construirla.',
    primary: 'Iniciar un proyecto',
    secondary: 'Ver el enfoque',
    model: 'Modelo de entrega'
  },
  en: {
    kicker: 'Technology · Data · Design · Strategy',
    head: 'We integrate software, data and strategic design to transform complex operations.',
    sub: 'RiftWorks understands the problem, structures the solution, and has the technical capacity to build it.',
    primary: 'Start a project',
    secondary: 'See the approach',
    model: 'Delivery model'
  }
};

const PHASES = ['Discover', 'Architect', 'Build', 'Optimize'];

export function Hero({ lang = 'es' }) {
  const c = COPY[lang];
  return (
    <section style={{
      padding: '72px 48px 60px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))',
      gap: 56,
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <span style={{
          font: 'var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--rw-accent-text)'
        }}>{c.kicker}</span>
        <h1 style={{
          margin: 0,
          font: 'var(--rw-weight-semibold) 58px/1.04 var(--rw-font-sans)',
          letterSpacing: '-0.035em',
          color: 'var(--rw-text)'
        }}>{c.head}</h1>
        <p style={{
          margin: 0,
          font: 'var(--rw-weight-regular) 17px/1.6 var(--rw-font-sans)',
          color: 'var(--rw-text-secondary)',
          maxWidth: 520
        }}>{c.sub}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <Button>{c.primary}</Button>
          <Button variant="secondary">{c.secondary}</Button>
        </div>
      </div>
      <div style={{
        border: '1px solid var(--rw-border)',
        background: 'var(--rw-surface-raised)',
        padding: 36
      }}>
        <span style={{
          font: 'var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--rw-text-secondary)'
        }}>{c.model}</span>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 22 }}>
          {PHASES.map((p, i) => (
            <div key={p} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 18,
              padding: '16px 0',
              borderBottom: i < PHASES.length - 1 ? '1px solid var(--rw-border-inner)' : 'none'
            }}>
              <span style={{
                font: 'var(--rw-weight-medium) 12px/1 var(--rw-font-mono)',
                color: 'var(--rw-accent-text)',
                minWidth: 26
              }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{
                font: 'var(--rw-weight-semibold) 20px/1 var(--rw-font-sans)',
                letterSpacing: '-0.02em',
                color: 'var(--rw-text)'
              }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
