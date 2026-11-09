An inline message. The only place the system uses a coloured left edge — and it is 4px, square, on a white card.

```jsx
<Alert title="Cambio guardado">La propuesta RW-014 se actualizó.</Alert>
<Alert tone="negative" title="No se pudo enviar">Revise la dirección de correo.</Alert>
```

Note the negative tone uses **Oxide Deep**, not the Negative red — an error in the brand's own voice reads as brand, not as a system dialog. Reserve `tone="negative"` red for destructive confirmations.
