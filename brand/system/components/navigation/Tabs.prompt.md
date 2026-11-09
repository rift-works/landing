A tab bar. Labels are mono uppercase nouns — `ALCANCE`, `FASES`, `EQUIPO`.

```jsx
<Tabs items={['Alcance', 'Fases', 'Equipo']} value={tab} onChange={setTab}>
  {tab === 'Alcance' ? <ScopePanel /> : null}
</Tabs>
```

The active tab gains weight as well as the Oxide underline, so the state survives greyscale.
