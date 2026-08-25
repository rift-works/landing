import React from 'react';
import { Accordion } from '../../components/navigation/Accordion.jsx';

const COPY = {
  es: {
    head: 'Cuatro fases, siempre en este orden.',
    body: 'No renombramos las fases por cliente. Cada una termina en un entregable que se factura por separado.',
    min: 'Compromiso mínimo',
    faq: [
      { question: '¿Qué incluye Discover?', answer: 'Dos semanas de diagnóstico, entrevistas con el equipo y un mapa del estado actual de la operación.' },
      { question: '¿Cómo se factura?', answer: 'Por fase, contra entregable.' },
      { question: '¿Trabajan en inglés?', answer: 'Sí. Toda la documentación existe en ambos idiomas.' }
    ]
  },
  en: {
    head: 'Four phases, always in this order.',
    body: 'We do not rename the phases per client. Each one ends in a deliverable and is invoiced separately.',
    min: 'Engagement minimum',
    faq: [
      { question: 'What does Discover include?', answer: 'Two weeks of diagnosis, interviews with the team, and a map of the operation as it stands.' },
      { question: 'How is it invoiced?', answer: 'By phase, against a deliverable.' },
      { question: 'Do you work in Spanish?', answer: 'Yes. Every document exists in both languages.' }
    ]
  }
};

export function Approach({ lang = 'es' }) {
  const c = COPY[lang];
  return (
    <section style={{
      borderTop: '1px solid var(--rw-border)',
      padding: '60px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
      gap: 56
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h2 style={{
          margin: 0,
          font: 'var(--rw-weight-semibold) var(--rw-h2-size)/var(--rw-h2-lh) var(--rw-font-sans)',
          letterSpacing: 'var(--rw-h2-track)',
          color: 'var(--rw-text)'
        }}>{c.head}</h2>
        <p style={{
          margin: 0,
          font: 'var(--rw-weight-regular) var(--rw-body-size)/var(--rw-body-lh) var(--rw-font-sans)',
          color: 'var(--rw-text-secondary)',
          maxWidth: '42em'
        }}>{c.body}</p>
        <div style={{
          borderTop: 'var(--rw-border-strong) solid var(--rw-invert)',
          paddingTop: 14,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--rw-space-4)',
          font: 'var(--rw-weight-regular) var(--rw-data-size)/1.4 var(--rw-font-mono)'
        }}>
          <span style={{ color: 'var(--rw-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{c.min}</span>
          <span style={{ color: 'var(--rw-text)' }}>USD 5,000</span>
        </div>
      </div>
      <Accordion items={c.faq} />
    </section>
  );
}
