A slider with a mono readout above it.

```jsx
<Slider label="Presupuesto" value={v} onChange={setV}
  min={5000} max={80000} valueLabel="USD 25,000" />
```

The square Oxide handle is the accent element. Always format `valueLabel` — a bare number without units is not enough.
