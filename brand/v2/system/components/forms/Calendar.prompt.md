A month calendar — Monday-first, mono figures, zero-padded.

```jsx
<Calendar month={7} year={2026} selected={14} onSelect={setDay} locale="es" />
```

The selected day is a solid Oxide square with white figures (4.46) — it is the view's one accent. Weekends and adjacent-month days step down through Ash and Field Border rather than disappearing.
