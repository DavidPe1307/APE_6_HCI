# Método 3 · Protocolo de las pruebas con usuarios (Think-Aloud + SEQ + SUS)

**Responsable:** killer13233 · **Participan los 3 integrantes** · **Requisito:** piloto P00 hecho y tarjetas congeladas (`docs/02-piloto/02-bitacora-ajustes.md`).

## Participantes
| Código | Carrera / semestre | Fecha | Consentimiento (participar / pantalla / voz) |
|---|---|---|---|
| P01 | | | ☐ / ☐ / ☐ |
| P02 | | | ☐ / ☐ / ☐ |
| P03 | | | ☐ / ☐ / ☐ |
| P04 | | | ☐ / ☐ / ☐ |
| P05 | | | ☐ / ☐ / ☐ |

Criterio de selección: 5 estudiantes de **carreras distintas**, que no hayan visto el prototipo y que no sean del grupo. No se registra nombre, cédula ni correo.

## Antes de cada sesión (~2 min)
- [ ] Prototipo en modo Presentación, en el estado inicial (sin reserva, aviso desactivado).
- [ ] Grabación de pantalla lista (solo si el participante la autorizó). **Nunca** se graba el rostro.
- [ ] Tarjetas T1–T5 impresas, una por hoja, en orden.
- [ ] Cronómetro en cero.

## Durante la sesión (~20 min)
1. Consentimiento y guion de `docs/01-planificacion/05-consentimiento-roles.md`, leído palabra por palabra.
2. Escenario y tarjetas T1→T5 de `docs/01-planificacion/03-escenario-tareas.md`.
3. El tiempo corre desde que el participante termina de leer la tarjeta y se detiene cuando cumple el criterio de éxito o abandona.
4. Tras cada tarea, SEQ: «Del 1 (muy difícil) al 7 (muy fácil), ¿qué tan fácil fue esta tarea?»
5. Al final, el cuestionario SUS de 10 ítems (`docs/01-planificacion/04-metricas.md`).

## Códigos
É = éxito sin ayuda · P = 1 ayuda o dato incompleto · F = 2+ ayudas o resultado erróneo · A = bloqueo > 60 s.
**Desliz:** sabía qué hacer pero tocó mal. **Equivocación:** el plan era incorrecto (fue a otra pantalla).

## Registro (cómo llenar los datos crudos)
| Archivo | Qué va | Una fila por |
|---|---|---|
| `datos-sesiones.csv` | tiempo, resultado (E/P/F/A), ayudas, deslices, equivocaciones, SEQ y notas | participante × tarea (25 filas) |
| `sus.csv` | respuestas 1–5 a los 10 ítems | participante (5 filas) |
| `citas.csv` | frase literal, gesto/emoción y problema asociado | cita |

Se pueden abrir y llenar en Excel; al guardar, elegir **CSV UTF-8 (delimitado por comas)** para no perder las tildes.

## Consolidación
Desde la raíz del repo: `node docs/03-evaluacion/usuarios/consolidar.mjs`. Genera `02-resultados-usuarios.md` con la tasa de éxito «x de 5 (y %)», la mediana y el rango de tiempos, las ayudas, los errores, el SEQ, el SUS y la respuesta a PI1–PI4.

## Evidencias
Grabaciones y capturas en `evidencias/usuarios/` con el nombre `P0X-TY.png` o `P0X.mp4`. Las grabaciones pesadas (> 50 MB) no se suben al repo: se dejan en Drive y se pone el enlace en `evidencias/usuarios/enlaces.md`.
