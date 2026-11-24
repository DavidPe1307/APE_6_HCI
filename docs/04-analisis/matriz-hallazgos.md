# Matriz de hallazgos H1–Hn y triangulación de confianza

> **Estado: BORRADOR con M1 (heurística) y M2 (recorrido cognitivo).**
> Falta agregar M3 (pruebas con usuarios P01–P05) y M4 (accesibilidad WCAG 2.2 AA), a cargo de killer13233. Cuando lleguen esos datos se actualizan las columnas *Métodos*, *Confianza* y *Severidad*, y se agregan los hallazgos nuevos.

**Confianza (triangulación):** 3 o más métodos = **Alta (1,0)** · 2 métodos = **Confirmado (0,8)** · 1 método = **A verificar (0,5)**.
**Severidad:** 1 cosmético · 2 menor · 3 mayor · 4 catástrofe.
**Métodos:** M1 heurística · M2 recorrido cognitivo · M3 usuarios (think-aloud + SEQ + SUS) · M4 WCAG 2.2 AA.

| ID | Fallo | Evidencia | Principio (heurística / WCAG) | Métodos que lo detectaron | Sev. | Confianza | Recomendación |
|---|---|---|---|---|---|---|---|
| H1 | Los recordatorios solo se configuran desde Ajustes; el detalle de la tutoría no ofrece activar un aviso y en Inicio «Recordatorios desactivados» no parece tocable | [07](../../evidencias/heuristica/07_inicio_con_reserva.png) · [09](../../evidencias/heuristica/09_detalle_tutoria.png) · [16](../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) · CW T5 paso 1 | #6 · #7 | M1 (HE1) · M2 (T5 paso 1) · _M3 T5: pendiente_ | 3 | Confirmado (0,8) | Agregar «Activar recordatorio» en el detalle y en «¡Tutoría reservada!»; convertir el texto de Inicio en un enlace con flecha («Recordatorios →») |
| H2 | El acceso a cambiar o cancelar está escondido tras el enlace pequeño «Ver detalle →»; la tarjeta no muestra que la reserva se puede gestionar | [07](../../evidencias/heuristica/07_inicio_con_reserva.png) · [08](../../evidencias/heuristica/08_mis_tutorias_proximas.png) · CW T3 paso 1 | #6 · #7 · _2.5.8 a medir_ | M1 (HE3) · M2 (T3 paso 1) · _M3 T3/T4 y M4: pendiente_ | 2 | Confirmado (0,8) | Convertir «Ver detalle» en un botón de al menos 24 × 24 px o agregar en la tarjeta los botones «Cambiar horario» y «Cancelar tutoría» |
| H3 | Las opciones de anticipación se ven deshabilitadas hasta activar el interruptor, y la instrucción está debajo, en letra pequeña; «Listo» está activo sin configuración | [17](../../evidencias/heuristica/17_recordatorios_desactivados.png) · [18](../../evidencias/heuristica/18_recordatorios_activado_1h.png) · CW T5 paso 3 | #1 · #5 | M1 (HE2) · M2 (T5 paso 3) · _M3 T5: pendiente_ | 2 | Confirmado (0,8) | Activar el recordatorio al elegir una anticipación (sin interruptor previo) o mover la instrucción junto al interruptor; deshabilitar «Listo» hasta que haya una opción |
| H4 | No se puede elegir el día: fecha fija al reservar y cambio solo «para el mismo día» | [02](../../evidencias/heuristica/02_buscar_calculo_fecha_fija.png) · [10](../../evidencias/heuristica/10_cambiar_horario_mismo_dia.png) | #3 · #7 | M1 (HE4) | 2 | A verificar (0,5) | Selector de días hábiles de la semana en Nueva tutoría y en Cambiar horario |
| H5 | «Reiniciar demo» borra la reserva y los recordatorios sin confirmación, a la vista del participante | [16](../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) | #5 · #3 | M1 (HE5) | 2 | A verificar (0,5) | Pedir confirmación o mover el control a una zona solo para el equipo evaluador |
| H6 | Variante de «¡Horario actualizado!» que muestra la hora anterior (09:00–10:00) | [12](../../evidencias/heuristica/12_horario_actualizado_tarde.png) · [13](../../evidencias/heuristica/13_horario_actualizado_variante_manana.png) | #1 · #4 | M1 (HE6) · _verificar en P00_ | 2 | A verificar (0,5) | Comprobar el enlace de «Guardar nuevo horario» y eliminar el marco [M/0/changed] si no se usa |
| H7 | El botón «Cancelar» del detalle es ambiguo (suele significar «cerrar») | [09](../../evidencias/heuristica/09_detalle_tutoria.png) · [14](../../evidencias/heuristica/14_confirmar_cancelacion.png) | #4 · #2 | M1 (HE7) | 1 | A verificar (0,5) | Cambiar la etiqueta a «Cancelar tutoría» |
| H8 | La barra inferior se ve igual que los botones de acción y no tiene íconos | [01](../../evidencias/heuristica/01_inicio_sin_reserva.png) · [06](../../evidencias/heuristica/06_reserva_confirmada.png) | #4 | M1 (HE8) | 1 | A verificar (0,5) | Barra de pestañas estándar con ícono + texto e indicador de pestaña activa |
| H9 | Las pestañas Física y Programación se muestran sin horarios disponibles | [03](../../evidencias/heuristica/03_buscar_fisica_sin_plazas.png) | #8 | M1 (HE9) | 1 | A verificar (0,5) | Ocultar las materias sin horarios o marcarlas como «Próximamente» antes de entrar |

## Pendiente para cerrar el Issue #12

- [ ] Agregar los hallazgos de M3 con su cita o métrica (por ejemplo, «2 de 5 (40 %) no encontraron el recordatorio en T5»).
- [ ] Agregar los hallazgos de M4 (contraste, tamaño de objetivos, teclado y reporte automático).
- [ ] Unir duplicados y recalcular la confianza: si M3 confirma H1, H2 o H3, sube a **Alta (1,0)**.
- [ ] Revisar las severidades por consenso del equipo con los datos medidos.
- [ ] Pasar la matriz final a killer13233 para el backlog (Prioridad = Sev × Conf ÷ Esfuerzo).
