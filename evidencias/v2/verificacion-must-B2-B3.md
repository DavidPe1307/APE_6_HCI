# Verificación de los ítems Must en la v2 (Issue #13)

**Revisó:** Zzzheyla  **Fecha:** 24/11/2026  **Versión:** TutoUTA v2 · `prototipo/v2/index.html` (PR #22)  **Cómo:** recorrido de las tareas en Chromium a 390 × 844, comparando con los criterios de aceptación de `docs/04-analisis/backlog.md`.

La v2 la implementó killer13233 en el PR #22. Este documento verifica que los dos Must del backlog tienen su mejora visible y cumplen la parte del criterio que se puede comprobar sin usuarios.

## B2 · Acciones en la tarjeta de la reserva (H2 · Must)

**Historia:** Como estudiante quiero ver en la tarjeta de mi reserva las acciones «Cambiar horario» y «Cancelar tutoría» para gestionarla sin adivinar dónde está.

| Parte del criterio | Comprobación | Resultado | Evidencia |
|---|---|---|---|
| La tarjeta muestra «Cambiar horario» y «Cancelar tutoría» | Inicio con una reserva confirmada | ✅ Los dos botones están dentro de la tarjeta | [Inicio](must/B2_inicio_tarjeta_con_acciones.png) |
| Lo mismo en Mis tutorías | Pestaña Mis tutorías → Próximas | ✅ Los dos botones están dentro de la tarjeta | [Mis tutorías](must/B2_mis_tutorias_tarjeta_con_acciones.png) |
| T3 se completa desde la tarjeta | «Cambiar horario» → 16:00–17:00 → «Guardar nuevo horario» | ✅ «¡Horario actualizado!» con 16:00–17:00, en 3 toques (en la v1 eran 4) | — |
| T4 se completa desde la tarjeta | «Cancelar tutoría» | ✅ Abre el diálogo de confirmación | [Diálogo](must/B2_dialogo_cancelar.png) |
| T3 y T4 sin ayuda por ≥ 4 de 5 participantes | Sesiones P01–P05 (M3) | ⏳ Pendiente | `docs/03-evaluacion/usuarios/` |

## B3 · Recordatorio en un solo paso (H3 · Must)

**Historia:** Como estudiante quiero que al elegir una anticipación el recordatorio quede activado sin un interruptor previo para configurarlo en un solo paso.

| Parte del criterio | Comprobación | Resultado | Evidencia |
|---|---|---|---|
| «Listo» deshabilitado mientras no haya opción elegida | Entrar a Recordatorios con los avisos desactivados | ✅ «Listo» aparece gris, con la ayuda «Elige una opción para activar el recordatorio» | [Inicial](must/B3_recordatorios_inicial_listo_deshabilitado.png) |
| Tocar una anticipación activa el recordatorio y muestra la confirmación | Un toque en «1 h antes» | ✅ Estado «Activados · 1 h antes», ✓ en la opción y el mensaje «Recordatorio activado · Aviso 1 h antes. Preferencia guardada.» | [Tras 1 toque](must/B3_un_paso_1h_activado.png) |
| «Listo» se habilita y termina la tarea | Tocar «Listo» | ✅ Vuelve a la pantalla anterior | — |
| Ya no hay interruptor previo | Revisión de la pantalla | ✅ El interruptor se reemplazó por el botón «Desactivar», que solo aparece con un aviso activo | [Tras 1 toque](must/B3_un_paso_1h_activado.png) |

## Resultado

| Must | Mejora visible | Criterio sin usuarios | Criterio con usuarios (≥ 4 de 5) |
|---|---|---|---|
| B2 (H2) | ✅ | ✅ | ⏳ M3 |
| B3 (H3) | ✅ | ✅ | ⏳ M3 |

Los dos ítems Must están implementados en la v2. Las sesiones P01–P05 con la v2 deben confirmar que T3, T4 y T5 se completan sin ayuda; si no se cumple, el ítem vuelve al backlog.
