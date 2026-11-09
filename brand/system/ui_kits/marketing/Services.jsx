import React from 'react';

const PILLARS = {
  es: [
    ['01', 'Ingeniería y Arquitectura', 'Arquitectura cloud, construcción de plataforma, DevOps.'],
    ['02', 'Datos e IA', 'Pipelines, almacenamiento, modelos aplicados.'],
    ['03', 'Diseño de Producto y Marca', 'Investigación, sistemas de diseño, identidad.'],
    ['04', 'Estrategia y Transformación', 'Diagnóstico operativo, hoja de ruta, gobierno.']
  ],
  en: [
    ['01', 'Engineering & Architecture', 'Cloud architecture, platform build, DevOps.'],
    ['02', 'Data & AI', 'Pipelines, warehousing, applied models.'],
    ['03', 'Product Design & Brand Experience', 'Research, design systems, identity.'],
    ['04', 'Strategy & Business Transformation', 'Operational diagnosis, roadmap, governance.']
  ]
};

export function Services({ lang = 'es' }) {
  return (
    <section style={{
      borderTop: '1px solid var(--rw-border)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))'
    }}>
      {PILLARS[lang].map(([n, title, body], i) => (
        <div key={n} style={{
          padding: '26px 22px',
          borderRight: i < 3 ? '1px solid var(--rw-border)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
          <span style={{
            font: 'var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)',
            color: 'var(--rw-text-secondary)'
          }}>{n}</span>
          <span style={{
            font: 'var(--rw-weight-semibold) 16px/1.3 var(--rw-font-sans)',
            color: 'var(--rw-text)'
          }}>{title}</span>
          <span style={{
            font: 'var(--rw-weight-regular) 13px/1.55 var(--rw-font-sans)',
            color: 'var(--rw-text-secondary)'
          }}>{body}</span>
        </div>
      ))}
    </section>
  );
}
