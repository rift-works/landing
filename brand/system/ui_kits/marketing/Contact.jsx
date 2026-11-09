import React from 'react';
import { Input } from '../../components/forms/Input.jsx';
import { Textarea } from '../../components/forms/Textarea.jsx';
import { Select } from '../../components/forms/Select.jsx';
import { Slider } from '../../components/forms/Slider.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Alert } from '../../components/feedback/Alert.jsx';

const COPY = {
  es: { head: 'Iniciar un proyecto', label: { mail: 'Correo', co: 'Empresa', pillar: 'Pilar', scope: 'Alcance', budget: 'Presupuesto' },
        send: 'Enviar', sent: 'Solicitud registrada', sentBody: 'Respondemos en dos días hábiles.',
        pillars: ['Ingeniería y Arquitectura', 'Datos e IA', 'Diseño de Producto', 'Estrategia'],
        placeholder: 'Describa el alcance esperado' },
  en: { head: 'Start a project', label: { mail: 'Email', co: 'Company', pillar: 'Pillar', scope: 'Scope', budget: 'Budget' },
        send: 'Send', sent: 'Request logged', sentBody: 'We reply within two business days.',
        pillars: ['Engineering & Architecture', 'Data & AI', 'Product Design', 'Strategy'],
        placeholder: 'Describe the scope you expect' }
};

export function Contact({ lang = 'es' }) {
  const c = COPY[lang];
  const [pillar, setPillar] = React.useState(c.pillars[0]);
  const [budget, setBudget] = React.useState(25000);
  const [scope, setScope] = React.useState('');
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => { setPillar(c.pillars[0]); }, [lang]);

  return (
    <section style={{
      borderTop: '1px solid var(--rw-border)',
      padding: '60px 48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 40,
      alignItems: 'start'
    }}>
      <h2 style={{
        margin: 0,
        font: 'var(--rw-weight-semibold) var(--rw-h2-size)/var(--rw-h2-lh) var(--rw-font-sans)',
        letterSpacing: 'var(--rw-h2-track)',
        color: 'var(--rw-text)'
      }}>{c.head}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Input label={c.label.mail} placeholder="nombre@empresa.com" />
        <Input label={c.label.co} />
        <Select label={c.label.pillar} value={pillar} onChange={setPillar} options={c.pillars} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Slider label={c.label.budget} min={5000} max={120000} step={5000} value={budget}
          onChange={setBudget} valueLabel={'USD ' + budget.toLocaleString('en-US')} />
        <Textarea label={c.label.scope} rows={3} value={scope}
          onChange={e => setScope(e.target.value)} maxLength={500} placeholder={c.placeholder} />
        {sent ? (
          <Alert tone="positive" title={c.sent}>{c.sentBody}</Alert>
        ) : (
          <Button fullWidth onClick={() => setSent(true)}>{c.send}</Button>
        )}
      </div>
    </section>
  );
}
