import React from 'react';

const DOW_ES = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const DOW_EN = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];

/** Monday-first. The selected day is the one Oxide element. */
export function Calendar({ month = 7, year = 2026, selected = null, onSelect, locale = 'es', style, ...rest }) {
  const [m, setM] = React.useState(month);
  const [y, setY] = React.useState(year);
  const dow = locale === 'en' ? DOW_EN : DOW_ES;
  const names = locale === 'en' ? MONTHS_EN : MONTHS_ES;

  const first = new Date(y, m, 1);
  const offset = (first.getDay() + 6) % 7;          // Monday-first
  const daysIn = new Date(y, m + 1, 0).getDate();
  const prevDays = new Date(y, m, 0).getDate();

  const cells = [];
  for (let i = offset - 1; i >= 0; i--) cells.push({ d: prevDays - i, out: true });
  for (let d = 1; d <= daysIn; d++) cells.push({ d, out: false });
  while (cells.length % 7 !== 0) cells.push({ d: cells.length - offset - daysIn + 1, out: true });

  const step = dir => {
    let nm = m + dir, ny = y;
    if (nm < 0) { nm = 11; ny -= 1; }
    if (nm > 11) { nm = 0; ny += 1; }
    setM(nm); setY(ny);
  };

  const pad = n => String(n).padStart(2, '0');

  return (
    <div style={{
      border: '1px solid var(--rw-border-field)',
      background: 'var(--rw-surface-input)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }} {...rest}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ font: 'var(--rw-weight-semibold) 13px/1 var(--rw-font-sans)', color: 'var(--rw-text)' }}>
          {names[m]} {y}
        </span>
        <div style={{ display: 'flex', gap: 10 }}>
          {[['‹', -1], ['›', 1]].map(([g, dir]) => (
            <button
              key={g}
              type="button"
              onClick={() => step(dir)}
              aria-label={dir < 0 ? 'Anterior' : 'Siguiente'}
              style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                font: 'var(--rw-weight-medium) 12px/1 var(--rw-font-mono)',
                color: 'var(--rw-text-secondary)'
              }}
            >{g}</button>
          ))}
        </div>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, textAlign: 'center',
        font: 'var(--rw-weight-medium) 9px/1 var(--rw-font-mono)', color: 'var(--rw-text-secondary)'
      }}>
        {dow.map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, textAlign: 'center',
        font: 'var(--rw-weight-regular) 11px/1 var(--rw-font-mono)'
      }}>
        {cells.map((c, i) => {
          const weekend = i % 7 >= 5;
          const isSel = !c.out && c.d === selected;
          return (
            <button
              key={i}
              type="button"
              disabled={c.out}
              onClick={() => !c.out && onSelect && onSelect(c.d)}
              style={{
                padding: '6px 0',
                border: 'none',
                background: isSel ? 'var(--rw-oxide)' : 'transparent',
                color: isSel ? '#FFFFFF'
                  : c.out ? 'var(--rw-text-muted)'
                  : weekend ? 'var(--rw-text-secondary)'
                  : 'var(--rw-text)',
                font: 'inherit',
                cursor: c.out ? 'default' : 'pointer'
              }}
            >{pad(c.d)}</button>
          );
        })}
      </div>
    </div>
  );
}
