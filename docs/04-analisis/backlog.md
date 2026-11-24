# Backlog B1–Bn priorizado (MoSCoW) · TutoUTA v1 → v2

Generado con `priorizar.mjs` (24/11/2026, 6:36:00 p. m.) desde `backlog.csv`. Fuente de los hallazgos: `matriz-hallazgos.md` (H1–H9) y `docs/03-evaluacion/accesibilidad/01-auditoria-wcag.md` (H9 = A1 + A2).

**Fórmula:** Prioridad = (Severidad × Confianza) ÷ Esfuerzo · **Esfuerzo:** S = 1, M = 2, L = 3 (estimación del equipo) · **Confianza:** 3+ métodos = 1,0 · 2 = 0,8 · 1 = 0,5

**Regla MoSCoW:** Must ≥ 1,5 · Should 0,75–1,49 · Could 0,4–0,74 · Won't < 0,4. Excepción: todo incumplimiento de WCAG 2.2 AA es como mínimo Should.

## Backlog ordenado por prioridad
| # | ID | Hallazgo | Historia de usuario | Criterio de aceptación (medible) | Sev. | Métodos | Confianza | Esfuerzo | Prioridad | MoSCoW |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | B2 | H2 | Como estudiante quiero ver en la tarjeta de mi reserva las acciones «Cambiar horario» y «Cancelar tutoría» para gestionarla sin adivinar dónde está | T3 y T4 completadas sin ayuda por ≥ 4 de 5 (80 %) · ningún participante abre más de 1 pantalla equivocada antes de encontrar la acción | 2 | M1,M2 | Confirmado (0,8) | S (1) | **1,6** | **Must** |
| 2 | B3 | H3 | Como estudiante quiero que al elegir una anticipación el recordatorio quede activado sin un interruptor previo para configurarlo en un solo paso | Tocar «15 min / 1 h / 1 día antes» activa el recordatorio y muestra la confirmación · «Listo» está deshabilitado mientras no haya opción elegida | 2 | M1,M2 | Confirmado (0,8) | S (1) | **1,6** | **Must** |
| 3 | B5 | H5 | Como evaluador quiero que «Reiniciar demo» pida confirmación y esté fuera de la vista del participante para que nadie borre su reserva por accidente | Tocar «Reiniciar demo» abre un diálogo «¿Reiniciar la demo?» con «Reiniciar» / «Volver» · 0 reinicios accidentales en las sesiones | 2 | M1 | A verificar (0,5) | S (1) | **1** | **Should** |
| 4 | B1 | H1 | Como estudiante quiero activar un recordatorio desde el detalle de mi tutoría y desde «¡Tutoría reservada!» para no tener que buscarlo en Ajustes | T5 completada sin ayuda por ≥ 4 de 5 (80 %) participantes en ≤ 60 s · el acceso de Inicio se muestra como enlace «Recordatorios →» | 2 | M1,M2 | Confirmado (0,8) | M (2) | **0,8** | **Should** |
| 5 | B8 | H8 | Como estudiante quiero que las materias sin horarios estén marcadas «Próximamente» antes de entrar para no perder tiempo | Física y Programación muestran la etiqueta «Próximamente» en la lista de materias | 1 | M1,M4 | Confirmado (0,8) | S (1) | **0,8** | **Should** |
| 6 | B9 | H9 | Como estudiante que usa teclado quiero navegar con Tab, activar con Enter, cerrar diálogos con Esc y ver siempre el foco para usar la app sin ratón | En la v2: recorrido completo T1–T5 solo con teclado · foco visible (contorno ≥ 2 px) en todos los controles · Esc cierra el diálogo de cancelación · Lighthouse y axe sin errores críticos | 2 | M4 | A verificar (0,5) | M (2) | **0,5** | **Should** (sube a Should: incumple WCAG 2.2 AA) |
| 7 | B6 | H6 | Como estudiante quiero que el botón diga «Cancelar tutoría» para no confundirlo con «cerrar» | La etiqueta del detalle dice «Cancelar tutoría» | 1 | M1 | A verificar (0,5) | S (1) | **0,5** | **Could** |
| 8 | B4 | H4 | Como estudiante quiero elegir el día de la tutoría (no solo la hora) para adaptarla a mi semana | Nueva tutoría y Cambiar horario muestran al menos 5 días hábiles seleccionables | 2 | M1 | A verificar (0,5) | L (3) | **0,33** | **Won't** |
| 9 | B7 | H7 | Como estudiante quiero una barra de pestañas con ícono, texto e indicador de pestaña activa para distinguirla de los botones de acción | Cada pestaña tiene ícono + texto y la activa tiene indicador visible además del color | 1 | M1 | A verificar (0,5) | M (2) | **0,25** | **Won't** |

## Matriz Impacto vs. Esfuerzo
Impacto = Severidad × Confianza (alto si ≥ 1,0).

| | Esfuerzo bajo (S) | Esfuerzo medio/alto (M, L) |
|---|---|---|
| **Impacto alto** | Victoria rápida: B2 (H2), B3 (H3), B5 (H5) | Proyecto mayor: B1 (H1), B9 (H9), B4 (H4) |
| **Impacto bajo** | Relleno: B8 (H8), B6 (H6) | Evitar / posponer: B7 (H7) |

## Resumen MoSCoW y responsables en la v2
| MoSCoW | Ítems | Responsable v2 |
|---|---|---|
| Must | B2 (H2), B3 (H3) | Zzzheyla (v2 Must) |
| Should | B5 (H5), B1 (H1), B8 (H8), B9 (H9) | killer13233 (#17) |
| Could | B6 (H6) | Si queda tiempo |
| Won't | B4 (H4), B7 (H7) | Fuera de la v2 (se documenta) |

> **Limitación:** la confianza sigue la matriz final (M1, M2, M3 y M4). M3 (P01–P05) no confirmó H1–H3: las 5 tareas se completaron 5 de 5 sin ayuda, así que su confianza se mantiene en 0,8. Las metas de tiempo y el SUS no se registraron.
