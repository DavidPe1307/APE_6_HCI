# Método 4 · Revisión de accesibilidad WCAG 2.2 AA (TutoUTA v1)

**Evaluador:** killer13233 · **Fecha:** 24/11/2026 · **Versión:** v1 · **Archivo evaluado:** Figma `APE_06_HCI` (enlace en el README)

## Cómo se evaluó
- **Automática (API de Figma):** script `figma-auditoria-v2.mjs` que lee el archivo de Figma, calcula el contraste de **cada texto** contra su fondo real (fórmula WCAG de luminancia relativa) y mide el tamaño de **cada elemento con interacción** del prototipo.
- **Cobertura:** 184 pantallas · 2.787 textos · 1.129 elementos interactivos.
- **Evidencia:** `evidencias/accesibilidad/resumen-auditoria-figma-v1.md` (resultado completo) y `evidencias/accesibilidad/pantallas/` (60 capturas exportadas).
- **Búsqueda en el archivo:** script `revisar-criterios.mjs` que busca textos y capas de foco, barra inferior, errores y confirmaciones en las 184 pantallas (resultado en `evidencias/accesibilidad/revision-criterios-v1.md`).

> **Limitación:** el prototipo v1 está en Figma Design. Lighthouse y axe-core auditan páginas web, no el lienzo de Figma, y Figma no permite navegar el prototipo con teclado (Tab/Esc). Esos criterios se verifican con Lighthouse y axe sobre la **v2 HTML** (issue #17). La API de Figma limitó la exportación de capturas (error 429), por lo que se exportaron 60 de 184 pantallas.

## Resumen de resultados
| Criterio | Meta | Resultado medido | Cumple |
|---|---|---|---|
| 1.4.3 Contraste de texto | ≥ 4,5:1 (≥ 3:1 texto grande) | **0 de 2.787** textos por debajo del mínimo; ratio más bajo **5,59:1** | Sí |
| 2.5.8 Tamaño de objetivos (AA) | ≥ 24 × 24 px | **0 de 1.129** elementos menores a 24 px | Sí |
| Meta del proyecto: objetivos | ≥ 44 × 44 px | **0 de 1.129** elementos menores a 44 px | Sí |
| Meta del proyecto: texto | ≥ 16 px | **0 de 2.787** textos menores a 16 px | Sí |
| 2.1.1 / 2.1.2 / 2.4.7 Teclado y foco | Tab, Enter, Esc, foco visible | No medible en Figma Design | No aplica en v1 → se mide en v2 |
| Lighthouse / axe-core | Sin errores críticos | No ejecutable sobre Figma Design | No aplica en v1 → se mide en v2 |

## 1. Contraste de texto (1.4.3)
Combinaciones reales de color encontradas en el archivo (extracto; la lista completa está en el resumen):

| # | Uso en la interfaz | Texto / fondo | Ratio | Mínimo | Cumple |
|---|---|---|---|---|---|
| C1 | Botones primarios (blanco sobre azul) | #FFFFFF / #1F4E9C | 7,99:1 | 4,5:1 | Sí |
| C2 | Texto secundario sobre fondo gris claro (peor caso) | #4B5C72 / #E3E9F1 | 5,59:1 | 4,5:1 | Sí |
| C3 | Texto secundario sobre blanco | #4B5C72 / #FFFFFF | 6,83:1 | 4,5:1 | Sí |
| C4 | Mensaje de éxito (verde) | #176044 / #EAF5EF | 6,73:1 | 4,5:1 | Sí |
| C5 | Mensaje de error / cancelación (rojo) | #A32232 / #FFF1F2 | 6,75:1 | 4,5:1 | Sí |
| C6 | Botón destructivo «Sí, cancelar» | #FFFFFF / #A32232 | 7,41:1 | 4,5:1 | Sí |
| C7 | Títulos | #142B4B / #F6F9FD | 13,46:1 | 4,5:1 | Sí |

## 2. Objetivos táctiles (2.5.8)
| Medición | Resultado |
|---|---|
| Elementos con interacción medidos | 1.129 |
| Menores a 24 × 24 px (incumple AA) | 0 |
| Menores a 44 × 44 px (meta del proyecto) | 0 |

> Solo se midieron los elementos que tienen una interacción de prototipo. Un ícono sin interacción no cuenta como objetivo táctil.

## 3. Teclado y foco (2.1.1, 2.1.2, 2.4.7)
| # | Prueba | Resultado en v1 |
|---|---|---|
| K1 | Recorrer con Tab en orden lógico | No aplica: Figma no permite navegar el prototipo con teclado |
| K2 | Foco visible | **Parcial:** hay estado «seleccionado» diseñado (40 capas, p. ej. «Horario de mañana seleccionado», 16 botones con borde ≥ 2 px), pero no un estado de foco de teclado específico |
| K3 | Activar con Enter / Espacio | No aplica en v1 |
| K4 | Cerrar el diálogo «Cancelar» con Esc | No aplica en v1 |
| K5 | Sin trampa de teclado | No aplica en v1 |

## 4. Otros criterios (revisión visual)
| # | Criterio | Qué revisar | Cumple | Evidencia |
|---|---|---|---|---|
| X1 | 1.1.1 Contenido no textual | Los íconos de la barra inferior tienen texto visible | **Sí**: «Inicio», «Mis tutorías» y «Ajustes» en 176 de 184 pantallas (las 8 restantes son diálogos o pantallas de éxito sin barra) | revision-criterios-v1.md |
| X2 | 3.3.1 Identificación de errores | Hay un mensaje claro si se intenta confirmar sin elegir horario | **Sí** (prevención): «Elige un horario» / «Elige un nuevo horario» y 58 capas en estado desactivado hasta elegir | revision-criterios-v1.md |
| X3 | 4.1.3 Mensajes de estado | Se ve una confirmación tras reservar, cambiar, cancelar y activar el recordatorio | **Sí**: «¡Tutoría reservada!», «¡Horario actualizado!», paso a «Canceladas», «Activados · 15 min antes» | revision-criterios-v1.md |

## 5. Herramienta automática
| Herramienta | Resultado | Evidencia |
|---|---|---|
| Script con la API de Figma (contraste, tamaños, texto) | 0 incumplimientos en 184 pantallas | evidencias/accesibilidad/resumen-auditoria-figma-v1.md |
| Lighthouse / axe-core | Pendiente sobre la v2 HTML (#17) | — |

## 6. Lista de incumplimientos (pasa a la matriz de hallazgos)
| ID | Criterio WCAG | Pantalla | Descripción | Severidad (1–4) | Evidencia |
|---|---|---|---|---|---|
| A1 | 2.1.1 / 2.4.7 | Todas | El prototipo v1 no se puede navegar con teclado ni se puede comprobar el foco (limitación de Figma Design) | 2 | Este documento, sección 3 |
| A2 | 2.4.7 | Buscar / Cambiar horario | Existe estado «seleccionado», pero no un estado de foco de teclado distinto; no se puede garantizar el foco visible al implementar | 2 | revision-criterios-v1.md |

## Aciertos de accesibilidad a conservar en la v2
- Paleta con contraste holgado: el peor caso es 5,59:1 y el azul #1F4E9C sobre blanco llega a 7,99:1.
- Todos los objetivos táctiles miden 44 px o más, por encima del mínimo AA (24 px).
- Ningún texto es menor a 16 px.
- La barra inferior combina ícono y texto, y cada acción importante (reservar, cambiar, cancelar, recordatorio) muestra una confirmación.
- El botón de confirmar queda desactivado hasta elegir horario, lo que previene el error.
- Los colores de estado (verde éxito, rojo cancelación) cumplen el contraste.

## Observación para la evaluación heurística
En «Buscar · Programación» aparece el texto «El recorrido de prueba está limitado a Cálculo». Física y Programación no completan el flujo, lo que puede confundir a un participante. Se comparte con la evaluación heurística (Zzzheyla).
