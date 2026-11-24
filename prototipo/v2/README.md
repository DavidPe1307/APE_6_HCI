# TutoUTA v2 · Prototipo navegable (HTML)

**Abrir:** doble clic en `index.html` (no necesita internet ni servidor). Recargar la página vuelve al estado inicial.
Rol estudiante · datos ficticios · sin backend · móvil 390 × 844.

## Cambios v1 → v2 (según `docs/04-analisis/backlog.md`)
| Backlog | Hallazgo | MoSCoW | Qué cambió en la v2 |
|---|---|---|---|
| B2 | H2 | Must | La tarjeta de la reserva (Inicio y Mis tutorías) muestra los botones «Cambiar horario» y «Cancelar tutoría» |
| B3 | H3 | Must | Elegir «15 min / 1 h / 1 día antes» activa el recordatorio en un paso (sin interruptor previo); «Listo» queda deshabilitado hasta elegir |
| B1 | H1 | Should | «Activar recordatorio» en el detalle y en «¡Tutoría reservada!»; en Inicio, «Activar recordatorio →» con aspecto de enlace |
| B5 | H5 | Should | «Reiniciar demo» pide confirmación y está dentro de «Opciones del evaluador» |
| B9 | H9 (A1 + A2) | Should | Navegación completa con teclado (Tab, Enter, Esc), foco visible de 3 px, el foco pasa al título al cambiar de pantalla, diálogos con foco atrapado y regreso del foco, mensajes de estado anunciados (`aria-live`) |
| B6 | H6 | Could | Etiqueta «Cancelar tutoría» en lugar de «Cancelar» |
| — | H7 (Won't) | — | Se agregaron íconos con texto a la barra inferior como parte de B9 (texto visible + indicador de pestaña activa) |
| B4, B8 | H4, H8 | Won't / Could | Sin cambios: se mantiene un solo día y la nota «limitado a Cálculo» |

## Se conserva de la v1 (aciertos)
Paleta y contraste (peor caso ≥ 5,5:1), objetivos ≥ 44 px, texto ≥ 16 px, confirmación antes de reservar, «Tu reserva no cambia hasta que guardes», diálogo de cancelación y «Deshacer cancelación».

## Verificación automática
`verificar-v2.mjs` recorre T1–T5 solo con teclado, ejecuta axe-core en cada pantalla y Lighthouse. Resultado y capturas en `evidencias/v2/`.
