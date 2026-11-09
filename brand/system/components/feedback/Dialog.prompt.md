A modal. The 2px Basalt frame is what replaces elevation — never add a shadow or a backdrop blur.

```jsx
<Dialog open={open} title="¿Enviar la propuesta?"
  confirmLabel="Enviar" onConfirm={send} onCancel={close}>
  Se enviará a Nombre del cliente y quedará registrada.
</Dialog>
```

The dialog is the one component that hard-codes light colours: it always renders on white, even inside a dark container, because a confirmation must not change appearance with theme.
