A table. Header is a 2px Basalt rule; rows are separated by Hair.

```jsx
<DataTable
  selectable selected={sel} onSelect={setSel} sortKey="amount"
  columns={[
    { key: 'name', label: 'Proyecto' },
    { key: 'amount', label: 'Monto', width: 64, align: 'right', mono: true }
  ]}
  rows={[{ id: 'RW-014', name: 'RW-014 · Datos', amount: '38,000' }]} />
```

Set `mono` on every column holding a figure, code or date — that is what makes a RiftWorks table read as a record. Selected rows fill Bone, never an accent colour.
