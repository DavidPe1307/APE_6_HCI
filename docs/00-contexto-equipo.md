# Contexto del proyecto (leer antes de empezar)

## Qué es el APE 6
Guía práctica de Interacción Humano-Computador (UTA, 5.º nivel): **Evaluación y validación**. El objetivo es elegir métodos apropiados para evaluar un prototipo, aplicarlos en un caso práctico, presentar el desarrollo, emitir criterios técnicos para mejorar y subir el archivo al aula virtual dentro de la fecha indicada.

## Qué evaluamos
- **Prototipo:** TutoUTA v1, app de agendamiento de tutorías (rol estudiante), en Figma. El enlace está en el README.
- **Flujo:** reservar una tutoría, ver fecha y hora, cambiarla a la tarde, cancelarla y activar un recordatorio.
- **Fuera de alcance:** backend real, docentes/administrador, notificaciones push reales.
- **Tipo de estudio:** formativo (n = 5). Buscamos problemas con evidencia, no demostrar que la app funciona.

## Objetivos
| ID | Objetivo | Pregunta |
|---|---|---|
| O1 | Eficacia y eficiencia del flujo principal | PI1: ¿T1 y T2 con éxito ≥ 80 % y en tiempo meta, sin ayudas? |
| O2 | Recuperación ante errores | PI2: ¿T3 con ≤ 1 error y éxito ≥ 80 %? |
| O3 | Control y libertad | PI3: ¿T4 y T5 sin ayuda y con éxito ≥ 80 %? |
| O4 | Satisfacción y accesibilidad básica | PI4: ¿SEQ ≥ 5,5, SUS ≥ 68 y criterios WCAG 2.2 AA? |

## Tareas con usuarios (orden fijo)
T1 reservar Cálculo · T2 comprobar fecha y hora · T3 pasarla a la tarde · T4 cancelarla · T5 activar recordatorio. Detalle y tiempos meta en `docs/01-planificacion/03-escenario-tareas.md`.

## Quién hace qué
| Persona | Responsabilidad |
|---|---|
| DavidPe1307 | Fase 1 (planificación y ética), piloto P00, trazabilidad, conclusiones, documento final y presentación |
| Zzzheyla | Evaluación heurística, recorrido cognitivo, matriz de hallazgos H1–Hn y prototipo v2 (Must) |
| killer13233 | Pruebas con usuarios P01–P05, accesibilidad WCAG, backlog MoSCoW y prototipo v2 (Should) |

## Orden de trabajo
1. **Ya pueden empezar:** heurística, recorrido cognitivo y accesibilidad. No dependen del piloto.
2. **Después del piloto P00:** pruebas con usuarios P01–P05 (tarjetas y guion congelados).
3. **Cuando estén los 4 métodos:** matriz de hallazgos → backlog → v2 → trazabilidad.
4. **Al final:** conclusiones, documento final y presentación.

## Reglas
- Cada quien trabaja en su issue y su carpeta; rama `feature/<usuario>-<tema>`, Pull Request y 1 revisión antes del merge.
- Todo hallazgo necesita evidencia (captura, cita, métrica). Sin evidencia no entra a la matriz.
- Se reportan los resultados reales («3 de 5 (60 %)»), aunque no cumplan la meta.
- No se pide nombre, cédula ni correo a los participantes; solo códigos P00–P05.
- Los datos de P00 no entran en los resultados finales.
