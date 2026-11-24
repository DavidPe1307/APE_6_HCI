# Conclusiones (Dato medido → Interpretación → Acción en backlog → Limitación)

## Respuesta a las preguntas de investigación
| PI | Respuesta | Base |
|---|---|---|
| PI1 | **Parcial** | T1 y T2: 5 de 5 (100 %), 0 ayudas. Tiempos no registrados, la meta de tiempo no se verificó |
| PI2 | **Parcial** | T3: 5 de 5 (100 %), SEQ 6,2. Errores no registrados |
| PI3 | **Sí** | T4 y T5: 5 de 5 (100 %), 0 ayudas |
| PI4 | **Parcial** | SEQ ≥ 5,5 en las 5 tareas. SUS no registrado. WCAG v1: contraste y tamaño de objetivos cumplen; teclado y foco no verificables |

## Conclusiones
| # | Dato medido | Interpretación | Acción en backlog | Limitación |
|---|---|---|---|---|
| C1 (O1) | T1 y T2: 5 de 5 (100 %), 0 ayudas, SEQ 6,6. H8: Física y Programación sin horarios | El flujo principal se completó sin ayuda. El único hallazgo del flujo es menor (severidad 1) | B8 «Próximamente» (Should, 0,8) · B4 elegir día (Won't, 0,33) | Sin tiempos: no se sabe si se cumplieron las metas de 90 y 30 s |
| C2 (O2) | T3: 5 de 5 (100 %), SEQ 6,2. H2 (Confirmado, 0,8): la tarjeta no anuncia sus acciones | Nadie se trabó, pero dos métodos expertos señalaron que la acción no es evidente | B2 botones en la tarjeta (Must, 1,6) | Sin errores registrados: no hay frecuencia para ajustar la severidad |
| C3 (O3) | T4: 5 de 5, SEQ 6,4 · T5: 5 de 5, SEQ 5,6 (la más baja; 2 de 5 marcaron 5). H1 y H3 Confirmados (0,8) | T5 es la tarea más débil aunque se completó. El recordatorio exige llegar a Ajustes y un paso previo con interruptor | B3 (Must, 1,6) · B1 (Should, 0,8) · B5 (Should, 1,0) · B6 (Could, 0,5) | La tarjeta T5 se reescribió tras el piloto hacia «preferencias de notificación», lo que pudo orientar a los participantes hacia Ajustes |
| C4 (O4) | WCAG v1: contraste peor caso 5,59:1; 0 de 1.129 objetivos bajo 24 px. H9: teclado y foco sin verificar. v2: axe 0 incumplimientos en 19 pantallas, Lighthouse 100/100, recorrido por teclado 19 de 19 | La v1 cumple lo visual y falla en lo que exige teclado. La v2 lo corrige según las pruebas automáticas | B9 (Should por WCAG, 0,5) | Lo automático no reemplaza a usuarios con tecnología de apoyo. SUS no registrado |
| C5 (v2) | Se implementaron 7 de 9 ítems. Must B2 y B3 verificados sin usuarios | Hay mejora visible y verificable en los puntos priorizados | B4 y B7 quedan fuera o cubiertos por B9 | **La v2 no se probó con usuarios.** Los criterios «≥ 4 de 5 sin ayuda» siguen pendientes |

## Criterios técnicos para mejorar los métodos
1. **Los métodos con expertos detectaron más que los usuarios.** La heurística aportó 8 de los 9 hallazgos, el recorrido cognitivo 3 y la auditoría WCAG 2; las pruebas con usuarios no confirmaron ninguno. Con n = 5, que nadie falle no prueba que el problema no exista, solo que no impidió completar las tareas.
2. **Registrar lo que se mide.** No se cronometraron tareas ni se aplicaron SUS, errores ni citas. Sin eso, 3 de 4 PI quedaron «Parcial». La próxima vez, el cronometrista y el observador deben tener la hoja de observación abierta desde la primera sesión.
3. **Tareas con más fricción.** Todas las tareas salieron 5 de 5, lo que sugiere tareas demasiado fáciles o guiadas. Conviene sumar una tarea con una trampa real (por ejemplo, un conflicto de horario).
4. **Probar la v2.** La evaluación se cierra de verdad cuando una nueva ronda confirma que T3, T4 y T5 se completan sin ayuda con la v2.
5. **Severidad con datos.** Las severidades salieron del consenso del equipo; con tiempos y errores se podrían apoyar en frecuencia.

> Muestra formativa (n = 5): los resultados indican problemas, no prueban que la app funcione. Se reportan tal cual.
