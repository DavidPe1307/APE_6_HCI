# Matriz de hallazgos H1–Hn y triangulación de confianza

> **Estado: FINAL con los 4 métodos:** M1 heurística, M2 recorrido cognitivo, M3 pruebas con usuarios P01–P05 (v1 en Figma) y M4 auditoría WCAG 2.2 AA de la v1. Interacciones verificadas en modo presentación el 24/11/2026; el posible hallazgo de «Horario actualizado» con la hora anterior se descartó.
> **M3:** las 5 tareas tuvieron 5 de 5 éxitos sin ayuda y SEQ ≥ 5,5, así que M3 no confirmó ningún hallazgo ni aportó hallazgos nuevos. No se registraron tiempos, errores, SUS ni citas (ver [resultados](../03-evaluacion/usuarios/02-resultados-usuarios.md), «Limitaciones del registro»).

**Confianza (triangulación):** 3 o más métodos = **Alta (1,0)** · 2 métodos = **Confirmado (0,8)** · 1 método = **A verificar (0,5)**.
**Severidad:** 1 cosmético · 2 menor · 3 mayor · 4 catástrofe.
**Métodos:** M1 heurística · M2 recorrido cognitivo · M3 usuarios (think-aloud + SEQ + SUS) · M4 WCAG 2.2 AA.

| ID | Fallo | Evidencia | Principio (heurística / WCAG) | Métodos que lo detectaron | Sev. | Confianza | Recomendación |
|---|---|---|---|---|---|---|---|
| H1 | Activar un recordatorio no se ofrece en el detalle ni al reservar; el atajo de Inicio («Recordatorios desactivados») es tocable pero se ve como una etiqueta | [07](../../evidencias/heuristica/07_inicio_con_reserva.png) · [09](../../evidencias/heuristica/09_detalle_tutoria.png) · [16](../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) · CW T5 paso 1 | #6 · #7 · #4 | M1 (HE1) · M2 (T5 paso 1) · M3: no confirmado (T5 5/5 sin ayuda; SEQ 5,6, el más bajo) | 2 | Confirmado (0,8) | Agregar «Activar recordatorio» en el detalle y en «¡Tutoría reservada!»; dar al acceso de Inicio aspecto de enlace («Recordatorios →») |
| H2 | La tarjeta de la reserva no muestra que se puede cambiar o cancelar; aunque toda la tarjeta es tocable, la única pista es «Ver detalle →» | [07](../../evidencias/heuristica/07_inicio_con_reserva.png) · [08](../../evidencias/heuristica/08_mis_tutorias_proximas.png) · CW T3 paso 1 | #6 · #7 | M1 (HE3) · M2 (T3 paso 1) · M3: no confirmado (T3 y T4 5/5 sin ayuda) | 2 | Confirmado (0,8) | Agregar en la tarjeta los botones «Cambiar horario» y «Cancelar tutoría», o renombrar el enlace a «Ver o cambiar →» |
| H3 | Las opciones de anticipación se ven deshabilitadas hasta activar el interruptor, y la instrucción está debajo, en letra pequeña; «Listo» está activo sin configuración | [17](../../evidencias/heuristica/17_recordatorios_desactivados.png) · [18](../../evidencias/heuristica/18_recordatorios_activado_1h.png) · CW T5 paso 2 | #1 · #5 | M1 (HE2) · M2 (T5 paso 2) · M3: no confirmado (T5 5/5 sin ayuda; SEQ 5,6) | 2 | Confirmado (0,8) | Activar el recordatorio al elegir una anticipación (sin interruptor previo) o mover la instrucción junto al interruptor; deshabilitar «Listo» hasta que haya una opción |
| H4 | No se puede elegir el día: fecha fija al reservar y cambio solo «para el mismo día» | [02](../../evidencias/heuristica/02_buscar_calculo_fecha_fija.png) · [10](../../evidencias/heuristica/10_cambiar_horario_mismo_dia.png) | #3 · #7 | M1 (HE4) | 2 | A verificar (0,5) | Selector de días hábiles de la semana en Nueva tutoría y en Cambiar horario |
| H5 | «Reiniciar demo» borra la reserva y los recordatorios sin confirmación (verificado: reinicia de inmediato), a la vista del participante | [16](../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) | #5 · #3 | M1 (HE5) | 2 | A verificar (0,5) | Pedir confirmación o mover el control a una zona solo para el equipo evaluador |
| H6 | El botón «Cancelar» del detalle es ambiguo (suele significar «cerrar») | [09](../../evidencias/heuristica/09_detalle_tutoria.png) · [14](../../evidencias/heuristica/14_confirmar_cancelacion.png) | #4 · #2 | M1 (HE7) | 1 | A verificar (0,5) | Cambiar la etiqueta a «Cancelar tutoría» |
| H7 | La barra inferior se ve igual que los botones de acción y no tiene íconos | [01](../../evidencias/heuristica/01_inicio_sin_reserva.png) · [06](../../evidencias/heuristica/06_reserva_confirmada.png) | #4 | M1 (HE8) | 1 | A verificar (0,5) | Barra de pestañas estándar con ícono + texto e indicador de pestaña activa |
| H8 | Las pestañas Física y Programación se muestran sin horarios disponibles y el flujo no se puede completar con ellas | [03](../../evidencias/heuristica/03_buscar_fisica_sin_plazas.png) · auditoría WCAG, «Observación para la evaluación heurística» | #8 | M1 (HE9) · M4 (observación de la auditoría) | 1 | Confirmado (0,8) | Ocultar las materias sin horarios o marcarlas como «Próximamente» antes de entrar |
| H9 | La v1 no permite navegar con teclado ni comprobar un foco visible; los horarios tienen estado «seleccionado» pero no un estado de foco distinto | [Auditoría WCAG, secciones 3 y 6 (A1, A2)](../03-evaluacion/accesibilidad/01-auditoria-wcag.md) | WCAG 2.1.1 · 2.4.7 | M4 (A1 + A2) | 2 | A verificar (0,5) | Implementar en la v2 navegación con Tab, Enter y Esc, y foco visible de al menos 2 px (backlog B9) |

## M3 frente a los hallazgos

| Tarea | Hallazgos relacionados | Éxito sin ayuda | SEQ medio | Lectura |
|---|---|---|---|---|
| T3 | H2 | 5 de 5 | 6,2 | Ningún participante se trabó al buscar dónde cambiar la reserva |
| T4 | H2, H6 | 5 de 5 | 6,4 | La etiqueta «Cancelar» no causó errores |
| T5 | H1, H3 | 5 de 5 | **5,6** (2 de 5 marcaron 5) | Es la tarea peor valorada, pero sin fallas. Además, la tarjeta T5 se reescribió tras el piloto hacia «preferencias de notificación», lo que puede orientar al participante hacia Ajustes |

**Conclusión:** la confianza de H1–H9 **no cambia**: H1, H2 y H3 siguen en *Confirmado (0,8)* por M1 y M2, y H8 por M1 y M4. Como M3 no registró tiempos ni errores, tampoco hay datos de frecuencia para cambiar las severidades. Con n = 5 y sin esas métricas, no fallar no prueba que el problema no exista: indica que no impidió completar las tareas en esta muestra.

## Cierre del Issue #12

- [x] Agregar los hallazgos de M3: no hubo fallos ni citas, y la tabla anterior resume su efecto en cada hallazgo.
- [x] Agregar los hallazgos de M4: H9 (A1 + A2). La auditoría no encontró fallas de contraste (peor caso 5,59:1) ni de tamaño de objetivos (0 de 1.129 bajo 24 px), y su observación sobre Física y Programación confirma H8.
- [x] Unir duplicados y recalcular la confianza: sin duplicados (HE6 descartado). M3 no sube ninguna confianza a *Alta*.
- [x] Revisar las severidades con los datos medidos: se mantienen, porque M3 no aportó frecuencia de errores. Si el equipo decide otra severidad en la revisión, se cambia aquí y en `backlog.csv`.
- [x] Pasar la matriz a killer13233 para el backlog: el backlog (#16) ya usa H1–H9. Pendiente para él: B8 sube a 0,8 por H8 *Confirmado*.
