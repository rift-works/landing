A milestone timeline. Markers are squares — never dots.

```jsx
<Timeline items={[
  { title: 'Kick-off', date: '14 · 08 · 2026', state: 'current' },
  { title: 'Arquitectura aprobada', date: '12 · 09 · 2026', state: 'past' },
  { title: 'Primera entrega', date: 'Pendiente', state: 'pending' }
]} />
```

Dates use middot separators in Spanish material. Pending items get a hollow marker and drop to Ash so the reader can see what has not happened yet.
