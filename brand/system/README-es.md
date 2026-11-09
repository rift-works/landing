<!-- RW-D-19 -->
# RiftWorks — Sistema de Diseño (Design System)

**RiftWorks · RW-D-19 (Oficial)** · Aprobado 17 · 08 · 2026 — Gabriel Obando, Axel García

Documentación técnica del sistema en código para desarrolladores.

---

## 1. Arquitectura y consumo

El sistema se compone de tokens CSS, estilos globales y primitivas de componentes en React / JSX.

### Archivos principales
* [`styles.css`](./styles.css): Hoja de estilos unificada que importa todos los tokens y reglas base.
* [`tokens.css`](./tokens.css): Colección consolidada de variables CSS.

Para consumir el sistema en cualquier aplicación o prototipo:
```html
<link rel="stylesheet" href="../system/styles.css">
```

O importando los tokens en CSS:
```css
@import "../system/tokens.css";
```

---

## 2. Estructura del directorio

```
brand/system/
├── components/          # Componentes primitivos organizados por dominio
│   ├── core/            # Button, Badge, Card, Logo
│   ├── data/            # DataTable, Metric, CodeBlock
│   ├── feedback/        # Alert, Toast, Spinner, Modal
│   ├── forms/           # Input, Textarea, Select, Checkbox, Slider...
│   └── navigation/      # Accordion, Tabs, Breadcrumb, Pagination
├── tokens/              # Tokens desglosados
│   ├── base.css         # Reset y variables estructurales
│   ├── colors.css       # Paleta: Bone, Paper, Basalt, Oxide
│   ├── fonts.css        # Archivo y IBM Plex Mono
│   ├── motion.css       # Curvas y tiempos (160ms cubic-bezier)
│   ├── spacing.css      # Retícula, canal y escala de espaciado
│   ├── surface.css      # Radios (0px), bordes y planos
│   └── typography.css   # Escala tipográfica y jerarquías
└── ui_kits/
    └── marketing/       # Maquetación de landing e interfaces públicas
```

---

## 3. Restricciones duras de implementación

1. **Radio:** `0px` en toda la interfaz. La única excepción permitida son los campos de formulario (`input`, `textarea`, `select`), que utilizan `4px`.
2. **Elevación y sombras:** Prohibidas las sombras (`box-shadow: none`). La elevación se expresa exclusivamente mediante contraste de planos: fondo `Bone` (`#EDE9E3`) con tarjetas/elementos elevados en `Paper` (`#FBFAF7`).
3. **Fondos y desenfoque:** Sin gradientes ni `backdrop-filter: blur()`. Todo fondo es plano y directo.
4. **Color de acento:** Un solo acento (`Oxide` `#D9410F` o `Oxide Lift` `#FF6A33` sobre fondo oscuro) por vista.
5. **Tipografía:**
   * **Archivo**: Para lenguaje, narrativa, títulos y cuerpo de texto. Sentence case estricto (nunca Title Case).
   * **IBM Plex Mono**: Exclusivo para datos, métricas numéricas, etiquetas y navegación en MAYÚSCULAS con tracking (`letter-spacing: 0.16em`). Prohibido redactar oraciones continuas en mono.
6. **Movimiento:** Transiciones en `160ms cubic-bezier(0.2, 0, 0, 1)`. Prohibido el rebote o escalado elástico. Respetar siempre `prefers-reduced-motion`.
