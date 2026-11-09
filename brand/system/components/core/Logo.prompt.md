The RiftWorks mark — use it instead of placing an SVG by hand, so clear space and minimum sizes hold.

```jsx
<Logo size={32} />
<Logo variant="stacked" size={64} descriptor />
<Logo variant="symbol" size={16} />
<Logo size={28} reversed />   {/* on Basalt Deep */}
```

- `variant="symbol"` is the only thing allowed below 96px in a lockup; its own floor is 16px.
- `descriptor` renders the locked EN/ES pair. It is the one place the brand is bilingual in a single block.
- `reversed` switches the ink to Bone and the descriptor to Oxide Lift. Never use Oxide on dark.
- Set `clearSpace={false}` only when the parent already reserves the space.
