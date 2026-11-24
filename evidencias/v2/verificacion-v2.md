# Verificación automática · TutoUTA v2 (issue #17)

- Fecha: 24/11/2026, 6:37:44 p. m. · Viewport 390 × 844 · Navegador: Chromium (Playwright)
- **Recorrido T1–T5 solo con teclado:** 19 de 19 pasos correctos
- **Foco visible (contorno ≥ 2 px) en el elemento enfocado:** 19 de 19 pasos
- **axe-core (WCAG 2.2 A/AA):** 0 reglas incumplidas en 19 pantallas revisadas
- **Lighthouse accesibilidad:** **100 / 100**

## Recorrido paso a paso (solo teclado)
| # | Tarea | Acción | Resultado esperado | Pantalla (h1) | Control enfocado con teclado | Foco visible | axe | OK | Captura |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Inicio | Estado inicial (primer Tab: «Saltar al contenido») | Inicio sin reserva | TutoUTA | Saltar al contenido | sí | 0 | ✅ | pasos/01-Inicio.png |
| 2 | T1 | Tab → «Nueva tutoría» → Enter | Pantalla Nueva tutoría | Nueva tutoría | Nueva tutoría | sí | 0 | ✅ | pasos/02-T1.png |
| 3 | T1 | Tab → «09:00–10:00» → Enter | Horario de mañana seleccionado | Nueva tutoría | 09:00–10:00 · Por la mañana | sí | 0 | ✅ | pasos/03-T1.png |
| 4 | T1 | Tab → «Continuar» → Enter | Pantalla de confirmación | Confirma tu tutoría | Continuar | sí | 0 | ✅ | pasos/04-T1.png |
| 5 | T1 | Tab → «Confirmar reserva» → Enter | Reserva confirmada con fecha y hora | ¡Tutoría reservada! | Confirmar reserva | sí | 0 | ✅ | pasos/05-T1.png |
| 6 | T2 | Tab → «Volver al Inicio» → Enter | Inicio muestra fecha y hora | TutoUTA | Volver al Inicio | sí | 0 | ✅ | pasos/06-T2.png |
| 7 | T3 | Tab → «Cambiar horario» (en la tarjeta, B2) → Enter | Pantalla Cambiar horario | Cambiar horario | Cambiar horario | sí | 0 | ✅ | pasos/07-T3.png |
| 8 | T3 | Tab → «16:00–17:00» → Enter | Horario de tarde seleccionado | Cambiar horario | 16:00–17:00 · Por la tarde | sí | 0 | ✅ | pasos/08-T3.png |
| 9 | T3 | Tab → «Guardar nuevo horario» → Enter | Horario actualizado a la tarde | ¡Horario actualizado! | Guardar nuevo horario | sí | 0 | ✅ | pasos/09-T3.png |
| 10 | T4 | Tab → «Ver mis tutorías» → Enter | Mis tutorías | Mis tutorías | Ver mis tutorías | sí | 0 | ✅ | pasos/10-T4.png |
| 11 | T4 | Tab → «Cancelar tutoría» → Enter | Diálogo de cancelación abierto con foco dentro | Mis tutorías | Cancelar tutoría | sí | 0 | ✅ | pasos/11-T4.png |
| 12 | T4 | Esc en el diálogo | El diálogo se cierra y el foco vuelve a «Cancelar tutoría» | Mis tutorías | Cancelar tutoría | sí | 0 | ✅ | pasos/12-T4.png |
| 13 | T4 | Enter (el foco ya está en «Sí, cancelar») → Enter | Pasa a Canceladas con Deshacer | Mis tutorías | Sí, cancelar | sí | 0 | ✅ | pasos/13-T4.png |
| 14 | T5 | Tab → pestaña «Ajustes» → Enter | Ajustes | Ajustes | Ajustes | sí | 0 | ✅ | pasos/14-T5.png |
| 15 | T5 | Tab → «Recordatorios →» → Enter | Recordatorios | Recordatorios | Recordatorios → | sí | 0 | ✅ | pasos/15-T5.png |
| 16 | T5 | Tab → «1 h antes» → Enter (B3: sin interruptor previo) | Recordatorio activado en un paso | Recordatorios | 1 h antes | sí | 0 | ✅ | pasos/16-T5.png |
| 17 | T5 | Tab → «Listo» → Enter | Vuelve a Ajustes con aviso activo | Ajustes | Listo | sí | 0 | ✅ | pasos/17-T5.png |
| 18 | B5 | «Opciones del evaluador» → «Reiniciar demo» | Pide confirmación antes de reiniciar | Ajustes | Reiniciar demo | sí | 0 | ✅ | pasos/18-B5.png |
| 19 | B5 | Enter en «Reiniciar» (foco inicial del diálogo) | Vuelve al estado inicial | TutoUTA | Reiniciar | sí | 0 | ✅ | pasos/19-B5.png |

## Incumplimientos de axe-core
Ninguno: 0 violaciones en todas las pantallas del recorrido.

> Criterio de aceptación de #17: reporte automático sin errores críticos. Los criterios de B9 (teclado, Esc, foco visible) se comprueban en el recorrido.
