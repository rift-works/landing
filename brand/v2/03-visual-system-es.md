<!-- RW-D-03 -->
# Sistema visual

**RiftWorks v2 · RW-D-03** · Aprobado 17 · 08 · 2026 — Gabriel Obando, Axel García

Marca, paleta, tipografía y lenguaje de superficie.

---

## La marca

**Aperture**, canal CH-A. Dos masas sólidas separadas por un canal vertical
escalonado. Salió de un brief que descartó grietas, clichés geológicos, circuitos
y monogramas RW literales; los fundadores la eligieron porque el canal desplazado
lee como las dos costas de Nicaragua y su línea de falla sin ilustrar ninguna de
las dos. El escalón es asimétrico a propósito: la masa izquierda entra a la
cintura, la derecha sale, así el canal nunca es una simple canaleta.

## Paleta — Basalt & Oxide

| Rol | Nombre | Hex |
| --- | --- | --- |
| Superficie clara | Bone | `#EDE9E3` |
| Superficie elevada | Paper | `#FBFAF7` |
| Texto | Basalt | `#1A1A18` |
| Superficie oscura | Basalt Deep | `#121210` |
| Acento (relleno, texto grande) | Oxide | `#D9410F` |
| Acento (texto pequeño, enlaces) | Oxide Deep | `#8F2A06` |
| Acento sobre oscuro | Oxide Lift | `#FF6A33` |
| Texto secundario | Ash | `#6B675F` |
| Positivo · Negativo · Info | — | `#15693F` · `#A8180F` · `#1B3A8F` |

Oxide mide 3.68 sobre Bone: solo relleno y texto grande. Texto pequeño y enlaces
usan Oxide Deep (6.94). Sobre superficie oscura el acento es Oxide Lift (6.57) y
Oxide no se usa. Los tres colores de estado son solo para estado, nunca decoración.

**Un acento por vista.** Es la regla más difícil del sistema y la que evita que
parezca plantilla de dashboard. Una pantalla recibe un elemento oxide: un
subrayado de tab activo, o una fecha seleccionada, o una barra de progreso. No
los tres.

## Tipografía

Archivo para todo lo que se lee como lenguaje; IBM Plex Mono para todo lo que se
lee como dato. Los tamaños display explotan el eje de ancho de Archivo en
`wdth 112` con tracking en `-0.035em`; el cuerpo va 16/1.62 sin tracking. Mono
siempre en mayúscula con `+0.16em` a tamaño de etiqueta. **Mono nunca lleva una
oración** — en el momento en que carga prosa la marca lee como terminal.

## Superficie

- **Radios:** cero en todo, con una excepción: los campos de formulario llevan
  `4px`. Nada más.
- **Sombras: ninguna.** No hay sistema de elevación. La jerarquía viene de
  escala, alineación, peso de regla y espacio negativo. Una superficie "elevada"
  es Paper sobre Bone. Lo que necesita flotar usa un marco Basalt de `2px`.
- **Bordes:** `1px` Rule `#D6D0C7` para bordes y divisores; `1px` Rule Soft
  `#E4DFD6` dentro de una tarjeta; `1px` Hair `#EFEAE3` para filas de tabla y
  lista; `2px` Basalt para reglas estructurales. Un borde oxide de `3px` marca la
  única cosa activa.
- **Tarjetas:** Paper sobre Bone, borde Rule de `1px`, padding `22px`, esquinas
  rectas, sin sombra.
- **Fondos:** color plano, siempre. No hay gradientes. La única textura permitida
  es una trama de líneas a 45° al 5.5% sobre oscuro y 18% sobre gris medio, usada
  exclusivamente como sustituto de fotografía no producida y en el fondo de
  videollamada.
- **Transparencia:** solo sobre oscuro, solo en texto y bordes, y solo en tres
  valores: `0.7` secundario, `0.45` atenuado, `0.2` bordes. **No hay blur en
  ningún lugar.** El overlay de diálogo es Basalt Deep plano al 55%.

## Movimiento

`160ms` en `cubic-bezier(0.2, 0, 0, 1)` para todo, excepto diálogos y paneles
que van a `240ms`. Se animan color, color de borde, opacidad y transform en el
único lugar donde aplica. Nada escala al entrar, nada rebota. El sistema respeta
`prefers-reduced-motion` poniendo la duración en cero.

## Estados

Hover: los botones primarios oscurecen a Basalt Deep; los secundarios se rellenan
de Basalt e invierten su etiqueta; los ghost ganan borde Rule; los enlaces pasan
de Oxide Deep a Basalt con subrayado sólido; las filas van a Bone; las tarjetas
enlazadas van Basalt en el borde. Press: solo color, un paso más oscuro que
hover — nada se encoge. Focus: outline Oxide Deep de `2px` con `2px` de offset,
solo en `:focus-visible`.

## Retícula

12 columnas en escritorio, 4 en móvil, canal de `24px`, contenedor máximo de
`1240px`. El padding de sección es `44px`. Nada se centra excepto la tipografía
display de portadas y el estado vacío. Los encabezados son estáticos: el sistema
no tiene elementos fijos, ni botones flotantes, ni pies pegados. Los objetivos
táctiles nunca bajan de `44px`.

## Iconografía

RiftWorks no tiene set de iconos y este sistema no inventa uno. Chevrons, checks
y puntos de radio se dibujan con bordes CSS; los glifos estructurales salen de la
fuente mono (`+`, `−`, `‹`, `›`, `×`, `/`, `↓`, `⌘K`); el símbolo Aperture es
el único gráfico propio y hace de ilustración de estado vacío. Si un producto
necesita un set real, el brief es monoline, trazo `1.5px`, terminales cuadradas,
uniones sin radio, retícula de 24px. **La sustitución no se ha hecho** — ver
`13-open-items-es.md`.
