# M2 · Recorrido cognitivo (Cognitive Walkthrough)

**Evaluadora:** Zzzheyla  **Fecha:** 24/11/2026  **Versión evaluada:** TutoUTA v1 (Figma)  **Método:** Wharton, Rieman, Lewis y Polson (1994)

- **Persona:** estudiante de la UTA que usa TutoUTA por primera vez. Sabe usar apps móviles, pero no conoce la estructura de esta.
- **Tarea principal: T3** (corrección de error), porque es la que el plan define para medir la recuperación ante errores (O2 · PI2).
- **Tarea adicional: T5** (activar recordatorio), porque la evaluación heurística detectó que su ruta está escondida (HE1, HE2).

## Las 4 preguntas por paso

1. ¿**Intentará** lograr el efecto correcto?
2. ¿**Notará** que el control está disponible?
3. ¿**Asociará** el control con el efecto que busca?
4. ¿**Verá progreso** claro después de usarlo?

✔ = sí · ⚠ = con dificultad · ✘ = no

---

## T3 · «Te das cuenta de que a esa hora tienes clase. Haz que tu tutoría sea en la tarde.»

**Estado inicial:** reserva confirmada de Cálculo, jueves 26 de noviembre, 09:00–10:00 (marco [M/0/home](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-635)).
**Ruta óptima (4 toques):** Inicio → tarjeta de la reserva → «Cambiar horario» → «16:00–17:00 · Por la tarde» → «Guardar nuevo horario».

| Paso de la ruta óptima | 1 ¿Intentará? | 2 ¿Notará? | 3 ¿Asociará? | 4 ¿Verá progreso? | ¿Falla? Por qué |
|---|---|---|---|---|---|
| 1. Tocar la tarjeta «Próxima tutoría» en Inicio (o su enlace «Ver detalle →») | ✔ Quiere cambiar su tutoría y la tarjeta la muestra | ⚠ Toda la tarjeta es tocable (verificado), pero nada lo indica salvo el enlace pequeño «Ver detalle →» | ✘ «Ver detalle» habla de consultar, no de cambiar. La confirmación le dijo «Podrás cambiar o cancelar tu tutoría desde Mis tutorías», así que puede ir a esa pestaña, donde vuelve a encontrar solo «Ver detalle →» (+1 toque) | ✔ Abre «Tu tutoría» con el botón «Cambiar horario» | **Sí.** El acceso a la acción de cambio no se reconoce (→ HE3) |
| 2. Tocar «Cambiar horario» | ✔ | ✔ Botón azul principal | ✔ La etiqueta coincide con lo que busca | ✔ Pantalla «Cambiar horario» con «Tu horario actual: Jue, 26 nov · 09:00–10:00» | No |
| 3. Elegir «16:00–17:00 · Por la tarde» | ✔ La tarjeta dice «en la tarde» y la opción dice «Por la tarde» | ✔ Es la única opción disponible; «11:00–12:00» aparece como «Sin plazas» | ✔ | ✔ Aparece ✓ con borde y el botón cambia a «Guardar nuevo horario» | No |
| 4. Tocar «Guardar nuevo horario» | ✔ El aviso «Tu reserva no cambia hasta que guardes» le indica que debe guardar | ✔ | ✔ | ✔ «¡Horario actualizado!» con 16:00–17:00 ([A/0/changed](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-900)), verificado en modo presentación | No |

**Resultado T3:** el único punto de falla está en el **paso 1**, en las preguntas 2 y 3: encontrar dónde se cambia la reserva. Una vez en el detalle, el flujo es claro y con buen feedback (aciertos A1, A2 y A7 de la heurística).

Evidencia: [07](../../../evidencias/heuristica/07_inicio_con_reserva.png) → [09](../../../evidencias/heuristica/09_detalle_tutoria.png) → [10](../../../evidencias/heuristica/10_cambiar_horario_mismo_dia.png) → [11](../../../evidencias/heuristica/11_nuevo_horario_seleccionado.png) → [12](../../../evidencias/heuristica/12_horario_actualizado_tarde.png)

---

## T5 · «Quieres que la app te avise antes de una tutoría. Configúralo.»

**Estado inicial:** reserva confirmada y recordatorios desactivados.
**Ruta óptima (4 toques):** Inicio → «Recordatorios desactivados» → interruptor → «1 h antes» (u otra anticipación) → «Listo».
**Ruta alternativa (5 toques):** «Ajustes» → «Recordatorios →» → interruptor → anticipación → «Listo».

| Paso de la ruta óptima | 1 ¿Intentará? | 2 ¿Notará? | 3 ¿Asociará? | 4 ¿Verá progreso? | ¿Falla? Por qué |
|---|---|---|---|---|---|
| 1. Tocar «Recordatorios desactivados» en Inicio | ⚠ Piensa en *su tutoría*: es probable que primero busque el aviso en el detalle de la tutoría, que no lo ofrece | ✘ Se ve como una etiqueta de estado, sin flecha ni aspecto de botón (en Ajustes el mismo acceso sí lleva «→») | ✔ La palabra «Recordatorios» coincide con lo que busca | ✔ Abre la pantalla Recordatorios (verificado en modo presentación) | **Sí.** El atajo existe pero no se reconoce como tocable; si no lo ve, debe descubrir la ruta por Ajustes (→ HE1) |
| 2. Activar el interruptor | ✘ Lo natural es tocar primero «1 h antes», que ocupa el centro de la pantalla; al hacerlo **no pasa nada** (verificado) | ✔ | ✔ | ✔ El interruptor se pone azul, dice «Activados» y las opciones se habilitan | **Sí.** El orden interruptor → opción no es evidente y la instrucción está debajo, en letra pequeña (→ HE2) |
| 3. Elegir «1 h antes» | ✔ | ✔ | ✔ | ✔ ✓ en la opción y el mensaje «Recordatorio activado · Aviso 1 h antes. Preferencia guardada.» | No |
| 4. Tocar «Listo» | ✔ | ✔ | ✔ | ✔ El estado queda guardado; Inicio pasa a mostrar «Recordatorio: …» (como en el marco [M/15/home](https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/APE_06_HCI?node-id=2-690)) | No |

**Resultado T5:** falla en el **paso 1** (el acceso desde Inicio no parece tocable y el detalle no ofrece la opción) y en el **paso 2** (tocar la anticipación antes del interruptor no responde).

Evidencia: [09](../../../evidencias/heuristica/09_detalle_tutoria.png) · [16](../../../evidencias/heuristica/16_ajustes_reiniciar_demo.png) · [17](../../../evidencias/heuristica/17_recordatorios_desactivados.png) · [18](../../../evidencias/heuristica/18_recordatorios_activado_1h.png)

---

## Conclusión

| Tarea | Pasos | Pasos que fallan | Hallazgo heurístico que confirma |
|---|---|---|---|
| T3 | 4 | Paso 1 (preguntas 2 y 3) | HE3 |
| T5 | 4 | Paso 1 (preguntas 1 y 2) y paso 2 (pregunta 1) | HE1, HE2 |

Los dos métodos de inspección (M1 y M2) coinciden en **HE1, HE2 y HE3**, que pasan a la matriz con confianza **Confirmado (0,8)**. Para subir a **Alta (1,0)** falta ver si P01–P05 se traban en los mismos pasos durante T3 y T5.
