# M1 · Evaluación heurística de Nielsen (2 pasadas)

**Evaluadora:** Zzzheyla  **Fecha:** 24/11/2026  **Versión evaluada:** TutoUTA v1 (Figma)  **Método:** inspección con las 10 heurísticas de Nielsen (Nielsen, 1994)

**Severidad:** 0 no es problema · 1 cosmético · 2 menor · 3 mayor · 4 catástrofe. Es **preliminar**: se ajusta por consenso del equipo y con los datos de P01–P05 (triangulación en la matriz de hallazgos).

**Evidencia:** cada captura está en [`evidencias/heuristica/`](../../../evidencias/heuristica/). Además se enlaza el marco exacto de Figma (`node-id`) para verlo en resolución completa.

## Cómo se hizo

| Pasada | Qué se recorrió | Enfoque |
|---|---|---|
| **1 · Flujo** | La ruta de las tareas T1→T5: reservar Cálculo, consultar la reserva, pasarla a la tarde, cancelarla y activar un recordatorio | ¿Se puede completar cada tarea? ¿Dónde se traba un estudiante nuevo? |
| **2 · Detalle** | Cada pantalla por separado (Inicio, Nueva tutoría, Confirmación, Mis tutorías, Detalle, Cambiar horario, Cancelación, Ajustes, Recordatorios) | Etiquetas, consistencia, estados, mensajes y aciertos |

Marcos revisados: estados *Sin reserva*, *Mañana*, *Tarde* y *Cancelada*, con los avisos *no / 15 min / 1 h / 1 día* (151 marcos de 390 × 844).

**Heurísticas:** 1 Visibilidad del estado · 2 Lenguaje del mundo real · 3 Control y libertad · 4 Consistencia y estándares · 5 Prevención de errores · 6 Reconocer antes que recordar · 7 Flexibilidad y eficiencia · 8 Diseño minimalista · 9 Recuperarse de errores · 10 Ayuda y documentación.

## Problemas encontrados

| ID | Pantalla / paso | Problema | Pasos para reproducir | Heurística violada | Evidencia | Sev. | Pasada | Tarea |
|---|---|---|---|---|---|---|---|---|
| HE1 | Inicio · Detalle · Ajustes | Los recordatorios **solo se configuran desde Ajustes → Recordatorios**. El detalle de la tutoría y la pantalla de reserva no ofrecen activar un aviso, y en Inicio el texto «Recordatorios desactivados» no muestra señal de ser tocable (sin flecha), a diferencia de «Recordatorios →» en Ajustes. | 1. Reservar una tutoría. 2. Abrir *Ver detalle*: solo hay «Cambiar horario» y «Cancelar». 3. Volver a Inicio: «Recordatorios desactivados» aparece como texto. 4. La opción solo aparece en Ajustes. | #6 Reconocer antes que recordar · #7 Flexibilidad y eficiencia | [07](../../../evidencias/heuristica/07_inicio_con_reserva.png) · [09](../../../evidencias/heuristica/09_detalle_tutoria.png) · [16](../../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) · [Figma 2-660](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-660) | **3** | 1 | T5 |
| HE2 | Recordatorios | Con el interruptor apagado, las opciones «15 min / 1 h / 1 día antes» se ven grises, como deshabilitadas, pero ocupan el centro de la pantalla. La instrucción «Activa el interruptor para elegir la anticipación» está debajo y en letra pequeña, y «Listo» está activo aunque no se haya elegido nada. | 1. Ajustes → Recordatorios. 2. Con el interruptor apagado, las opciones se ven grises y el prototipo no tiene un marco que responda si se tocan. 3. «Listo» aparece activo sin haber configurado nada. | #1 Visibilidad del estado · #5 Prevención de errores | [17](../../../evidencias/heuristica/17_recordatorios_desactivados.png) · [18](../../../evidencias/heuristica/18_recordatorios_activado_1h.png) · [Figma 2-655](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-655) | **2** | 1 | T5 |
| HE3 | Inicio · Mis tutorías | La única entrada al detalle (donde están *Cambiar horario* y *Cancelar*) es el enlace de texto pequeño «Ver detalle →» al pie de la tarjeta. La tarjeta no muestra que la reserva se puede cambiar o cancelar. | 1. Con una reserva, ir a Inicio o a Mis tutorías. 2. Buscar cómo cambiar la hora: no hay botón visible, solo el enlace «Ver detalle →». | #6 Reconocer antes que recordar · #7 Flexibilidad y eficiencia | [07](../../../evidencias/heuristica/07_inicio_con_reserva.png) · [08](../../../evidencias/heuristica/08_mis_tutorias_proximas.png) · [Figma 2-640](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-640) | **2** | 1 | T3, T4 |
| HE4 | Nueva tutoría · Cambiar horario | No se puede elegir el día. La búsqueda muestra una sola fecha fija («Jue, 26 nov 2026») y Cambiar horario solo permite «un nuevo horario para el mismo día». | 1. Nueva tutoría → Cálculo: solo el 26 de noviembre. 2. Detalle → Cambiar horario: «Elige un nuevo horario para el mismo día». | #3 Control y libertad · #7 Flexibilidad y eficiencia | [02](../../../evidencias/heuristica/02_buscar_calculo_fecha_fija.png) · [10](../../../evidencias/heuristica/10_cambiar_horario_mismo_dia.png) · [Figma 2-27](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-27) | **2** | 2 | T1, T3 |
| HE5 | Ajustes | «Reiniciar demo» borra la reserva y desactiva los recordatorios **sin pedir confirmación**. Es un control de la demo que queda a la vista del participante, junto a «Recordatorios →». | 1. Ajustes. 2. Tocar «Reiniciar demo»: no existe un marco de confirmación en el prototipo. | #5 Prevención de errores · #3 Control y libertad | [16](../../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) · [Figma 2-650](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-650) | **2** | 2 | T5 |
| HE6 | Horario actualizado (variante) | Existe un marco «¡Horario actualizado!» en el estado *Mañana* que muestra la hora **anterior** (09:00–10:00). Si algún enlace del prototipo lleva a él, el usuario verá que el cambio no se aplicó. El marco correcto (estado *Tarde*) muestra 16:00–17:00. | Comparar [M/0/changed] con [A/0/changed]. **A verificar en el piloto P00:** comprobar a qué marco lleva «Guardar nuevo horario». | #1 Visibilidad del estado · #4 Consistencia | [12](../../../evidencias/heuristica/12_horario_actualizado_tarde.png) · [13](../../../evidencias/heuristica/13_horario_actualizado_variante_manana.png) · [Figma 2-680](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-680) | **2** | 2 | T3 |
| HE7 | Detalle | El botón para anular la reserva se llama solo «Cancelar». En las apps, «Cancelar» suele significar «cerrar sin hacer nada», así que la etiqueta es ambigua. El diálogo posterior lo aclara («¿Cancelar esta tutoría?»). | 1. Abrir el detalle de una reserva. 2. Leer el botón rojo «Cancelar». | #4 Consistencia y estándares · #2 Lenguaje del mundo real | [09](../../../evidencias/heuristica/09_detalle_tutoria.png) · [14](../../../evidencias/heuristica/14_confirmar_cancelacion.png) | **1** | 2 | T4 |
| HE8 | Barra inferior (todas) | La navegación inferior (Inicio · Mis tutorías · Ajustes) usa el mismo estilo de botón con borde que las acciones («Canceladas», «Volver al Inicio», «Elegir otro horario») y no tiene íconos. La pestaña activa solo se distingue por el relleno. | Observar cualquier pantalla: la barra se confunde con botones de acción. | #4 Consistencia y estándares | [01](../../../evidencias/heuristica/01_inicio_sin_reserva.png) · [06](../../../evidencias/heuristica/06_reserva_confirmada.png) | **1** | 2 | Todas |
| HE9 | Nueva tutoría · Física / Programación | Las pestañas Física y Programación están visibles pero no tienen horarios («Sin plazas en esta demo»). Muestran opciones que no se pueden usar. | Nueva tutoría → Física o Programación. | #8 Diseño minimalista | [03](../../../evidencias/heuristica/03_buscar_fisica_sin_plazas.png) · [Figma 2-32](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-32) | **1** | 2 | T1 |

**Resumen:** 9 problemas: **1 mayor** (HE1), **5 menores** (HE2–HE6) y **3 cosméticos** (HE7–HE9). Ninguno es catastrófico: con el prototipo se pueden completar las 5 tareas.

## Aciertos a conservar

| # | Acierto | Heurística | Evidencia |
|---|---|---|---|
| A1 | El botón deshabilitado dice qué falta («Elige un horario», «Elige un nuevo horario») en lugar de un «Continuar» gris sin explicación. | #1 · #5 | [02](../../../evidencias/heuristica/02_buscar_calculo_fecha_fija.png) · [10](../../../evidencias/heuristica/10_cambiar_horario_mismo_dia.png) |
| A2 | El horario elegido se marca con ✓, borde y el texto «Seleccionado: 09:00–10:00». No depende solo del color. | #1 · WCAG 1.4.1 | [04](../../../evidencias/heuristica/04_horario_manana_seleccionado.png) |
| A3 | Pantalla «Confirma tu tutoría» antes de reservar, con «Revisa la fecha y la hora» y la opción «Elegir otro horario». | #5 · #3 | [05](../../../evidencias/heuristica/05_confirmar_manana.png) |
| A4 | «¡Tutoría reservada!» muestra materia, fecha, hora y tutor, y lleva a Mis tutorías. | #1 | [06](../../../evidencias/heuristica/06_reserva_confirmada.png) |
| A5 | Inicio muestra la próxima tutoría con fecha, hora y estado «Confirmada», además del estado de los recordatorios. Apoya T2. | #1 · #6 | [07](../../../evidencias/heuristica/07_inicio_con_reserva.png) |
| A6 | «Nueva tutoría» deshabilitado con explicación: «Una reserva a la vez en esta demo. Puedes cambiarla o cancelarla.» | #9 · #10 | [07](../../../evidencias/heuristica/07_inicio_con_reserva.png) |
| A7 | Cambiar horario muestra «Tu horario actual» y avisa «Tu reserva no cambia hasta que guardes». | #1 · #5 · #6 | [10](../../../evidencias/heuristica/10_cambiar_horario_mismo_dia.png) · [11](../../../evidencias/heuristica/11_nuevo_horario_seleccionado.png) |
| A8 | Cancelar pide confirmación, explica qué pasará y usa un botón rojo diferenciado de «Volver». | #5 | [14](../../../evidencias/heuristica/14_confirmar_cancelacion.png) |
| A9 | Se puede **deshacer** una cancelación desde Canceladas. | #3 · #9 | [15](../../../evidencias/heuristica/15_canceladas_deshacer.png) |
| A10 | Física y Programación explican por qué no hay horarios y ofrecen «Ver horarios de Cálculo». | #9 | [03](../../../evidencias/heuristica/03_buscar_fisica_sin_plazas.png) |
| A11 | Al activar un recordatorio aparece «Recordatorio activado · Aviso 1 h antes. Preferencia guardada.» | #1 | [18](../../../evidencias/heuristica/18_recordatorios_activado_1h.png) |
| A12 | Lenguaje cercano al estudiante («Tu plaza está confirmada», «Liberarás tu plaza»). | #2 | [06](../../../evidencias/heuristica/06_reserva_confirmada.png) · [14](../../../evidencias/heuristica/14_confirmar_cancelacion.png) |

## Qué pasa a la matriz de hallazgos

- HE1, HE2 y HE3 coinciden con fallos del **recorrido cognitivo** (M2), así que ya tienen 2 métodos.
- HE6 se verifica en el piloto P00 antes de contarlo como hallazgo.
- El resto queda «A verificar» hasta tener los datos de P01–P05 (M3) y la revisión WCAG (M4). En particular, el tamaño del enlace «Ver detalle →» (HE3) debe medirse con el criterio 2.5.8.
