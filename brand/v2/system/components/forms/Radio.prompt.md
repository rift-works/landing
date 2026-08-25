A radio button — the only circular element in the system.

```jsx
<Radio name="billing" label="Mensual" checked={v === 'm'} onChange={() => setV('m')} />
<Radio name="billing" label="Por fase" checked={v === 'f'} onChange={() => setV('f')} />
```

Selection is carried by a 5px Basalt ring. Do not add a coloured fill; the ring is the signal.
