<!-- RW-D-14 -->
# Guidelines — referencia de normas (ES)

**RiftWorks v2 · RW-D-14** · Aprobado 17 · 08 · 2026 — Gabriel Obando, Axel García

Esta es la referencia corta: las reglas sin los especímenes. La versión completa
de 24 páginas, con ejemplos y comparaciones, está en
`docs/standalone/guidelines-es.html`.

---

## Marca

- Marca: **Aperture**, canal CH-A. Dos masas con canal vertical escalonado y asimétrico.
- Tres lockups aprobados: horizontal, apilado, símbolo. Más monocromo para una tinta.
- Aire mínimo: el ancho del canal, en los cuatro lados. Nada entra.
- Tamaño mínimo: lockup 24 px / 8 mm; símbolo 16 px / 5 mm.
- No estirar, rotar, rellenar el canal, sombrear, recolorear ni recrear el wordmark.
- El wordmark va convertido a curvas antes de imprenta o bordado.

## Color

- Bone `#EDE9E3` superficie clara · Paper `#FBFAF7` elevada.
- Basalt `#1A1A18` texto · Basalt Deep `#121210` superficie oscura.
- Oxide `#D9410F` solo relleno y texto grande (3.68 sobre Bone).
- Oxide Deep `#8F2A06` texto pequeño y enlaces (6.94).
- Oxide Lift `#FF6A33` acento sobre oscuro (6.57). Oxide no se usa sobre oscuro.
- Ash `#6B675F` texto secundario.
- Positivo `#15693F` · Negativo `#A8180F` · Info `#1B3A8F`, solo para estado.
- **Un acento por vista.**
- Máximo dos colores de fondo por presentación o documento.

## Tipografía

- Archivo para lenguaje; IBM Plex Mono para dato.
- Display: `wdth 112`, tracking `-0.035em`. Cuerpo: 16/1.62, sin tracking.
- Mono: mayúscula, `+0.16em` a tamaño de etiqueta. **Nunca una oración en mono.**
- Sentence case en títulos y cuerpo. MAYÚSCULA mono en etiquetas, eyebrows,
  botones, navegación y encabezados de tabla. Title Case no existe.
- Mínimos: 24 px en diapositiva, 14 px / 12 pt impreso, nunca menos.

## Superficie

- Radio cero en todo. Única excepción: campos de formulario, `4px`.
- Sin sombras. Sin sistema de elevación. Lo elevado es Paper sobre Bone.
- Bordes: `1px` Rule `#D6D0C7` · `1px` Rule Soft `#E4DFD6` · `1px` Hair
  `#EFEAE3` · `2px` Basalt estructural · `3px` Oxide para lo activo.
- Tarjetas: Paper sobre Bone, borde Rule, padding `22px`.
- Fondos planos. Sin gradientes. Única textura: trama a 45°, 5.5% sobre oscuro,
  18% sobre gris medio, solo como sustituto de fotografía.
- Transparencia solo sobre oscuro, solo texto y bordes: `0.7` · `0.45` · `0.2`.
- **Sin blur.** Overlay de diálogo: Basalt Deep plano al 55%.

## Movimiento y estados

- `160ms` `cubic-bezier(0.2, 0, 0, 1)`; diálogos y paneles `240ms`.
- Se anima color, borde, opacidad. Nada escala, rebota ni sobrepasa.
- Press: solo color. Focus: outline Oxide Deep `2px` con `2px` de offset,
  `:focus-visible`.
- `prefers-reduced-motion` pone la duración en cero.

## Retícula

- 12 columnas escritorio, 4 móvil, canal `24px`, contenedor `1240px`.
- Padding de sección `44px`. Objetivos táctiles nunca bajo `44px`.
- Nada centrado salvo display en portadas y estado vacío.
- Sin elementos fijos, sin botones flotantes, sin pies pegados.

## Redacción

- Primera persona del plural. Nunca "yo", nunca voz personificada.
- Oraciones declarativas. Sin preguntas retóricas, sin fragmentos, sin metadiscurso.
- Toda cifra con fuente; marcador `00,000` si no existe el dato. `USD 5,000`.
- Dos archivos por documento, uno por idioma. Nunca cuerpo mezclado.
- Etiquetas sustantivos, botones verbos. Estados con palabra.
- **Sin emoji, en ningún lugar.**

## Iconografía

- No hay set de iconos. Chevrons y checks con bordes CSS; glifos estructurales de
  la fuente mono; el símbolo Aperture como única ilustración.
- Si se adopta un set: monoline, `1.5px`, terminales cuadradas, sin radio, 24px.
  Decisión pendiente de los fundadores.
