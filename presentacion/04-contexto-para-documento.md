# Contexto para elaborar el documento del proceso y los resultados (APE 6)

## Instrucciones para quien redacte
Elabora un documento visualmente cuidado (portada, tablas con estilo, jerarquía clara, resaltados de cifras clave) sobre cómo evaluamos y mejoramos un prototipo, y qué resultados obtuvimos. Formato sugerido: Word (.docx) y, si se puede, también PDF. Idioma: español formal académico. Extensión sugerida: 10 a 14 páginas.

**Reglas de honestidad (obligatorias):**
- Usa SOLO los datos de este archivo. No inventes cifras, citas, tiempos, puntajes SUS ni participantes.
- Donde dice «no registrado», escríbelo así en el documento. Esas ausencias se presentan como limitaciones, no se rellenan.
- Reporta proporciones como «5 de 5 (100 %)».
- La v2 NO se probó con usuarios; no afirmes que mejoró la experiencia de usuarios, solo lo que se verificó.

## 1. Datos generales
- **Universidad Técnica de Ambato · FISEI · Carrera de Software · 5.º nivel · Interacción Humano-Computador.** Ciclo julio – diciembre 2026.
- **Actividad:** APE 6 «Evaluación y validación». Objetivo de la guía: elegir métodos apropiados de evaluación y validación para un contexto de aplicación de prototipos. Habilidades blandas: liderazgo, trabajo en equipo, responsabilidad.
- **Pasos pedidos por la guía:** revisar el material del docente, aplicar métodos en casos prácticos, hacer una presentación del desarrollo, elaborar conclusiones con criterios técnicos para mejorar los métodos y subir el archivo al aula virtual a tiempo.
- **Repositorio:** https://github.com/DavidPe1307/APE_6_HCI
- **Equipo:** David Pérez (DavidPe1307), Sheyla Pacha (Zzzheyla), Martín Palacios (killer13233).
- **Fecha de las sesiones y verificaciones documentadas:** 24/11/2026.

## 2. El prototipo
**TutoUTA**, app móvil de agendamiento de tutorías académicas para estudiantes universitarios (rol estudiante, datos ficticios, sin backend, 390×844).
- **v1:** prototipo interactivo en Figma. Pantallas: Inicio, Buscar, Confirmar, Mis tutorías, Detalle, Cambiar horario, Cancelar (con Deshacer), Ajustes > Recordatorios y «Reiniciar demo».
- **v2:** versión HTML navegable en `prototipo/v2/index.html`, creada a partir del backlog.
- **Fuera de alcance:** backend real, roles de docente y administrador, notificaciones push reales, pagos, calendario externo.

## 3. Proceso por fases
**Fase 1 · Planificación y ética (David).** Alcance; objetivo general; O1 a O4 con PI1 a PI4; escenario y 5 tareas sin pistas; métricas ISO 9241-11 con metas fijadas antes de tocar el prototipo; consentimiento informado alineado a la LOPDP (códigos P00–P05, sin nombre, cédula ni correo, sin grabar rostro, 3 casillas: participar, grabar pantalla y grabar voz); guion del facilitador (respuesta fija «¿Qué harías si yo no estuviera?»); 4 roles de sesión con 3 integrantes.

| Objetivo | Pregunta de investigación |
|---|---|
| O1 Eficacia y eficiencia del flujo principal | PI1: ¿T1 y T2 con éxito ≥ 80 %, en tiempo meta y sin ayudas? |
| O2 Recuperación ante errores | PI2: ¿T3 con ≤ 1 error y éxito ≥ 80 %? |
| O3 Control y libertad | PI3: ¿T4 y T5 sin ayuda y con éxito ≥ 80 %? |
| O4 Satisfacción y accesibilidad básica | PI4: ¿SEQ ≥ 5,5 por tarea, SUS ≥ 68 y cumplimiento WCAG 2.2 AA? |

| Tarea | Meta del participante (resumen) | Tiempo meta |
|---|---|---|
| T1 | Conseguir una tutoría de Cálculo para esta semana | ≤ 90 s |
| T2 | Comprobar día y hora de la tutoría | ≤ 30 s |
| T3 | Pasar la tutoría a la tarde | ≤ 60 s |
| T4 | Hacer que la tutoría deje de estar agendada | ≤ 45 s |
| T5 | Configurar avisos antes de las tutorías (tarjeta reescrita tras el piloto) | ≤ 60 s |

Metas de las métricas: tasa de éxito ≥ 80 % [(Éxitos + 0,5 × Parciales) ÷ Intentos], 0 ayudas, tiempo con mediana y rango, ≤ 1 error por tarea, SEQ ≥ 5,5, SUS ≥ 68. Códigos de resultado: É éxito, P parcial, F fallo, A abandono.

**Fase 2 · Piloto P00 (24/11/2026, 22 min).** Estudiante ajeno al grupo. Facilitador: David; observador y cronometrista: compañeros. Tres ajustes reales:
1. T3: P00 dudó si «15:00» era tarde y confundió «Cambiar horario» con «Cancelar» por estar pegados → se añadió la etiqueta «Tarde» a horarios ≥ 13:00 y se dio estilo secundario a «Cancelar».
2. T5: buscó los recordatorios en el detalle de la reserva antes de Ajustes → se reescribió la tarjeta hacia «preferencias generales de notificación», sin nombrar botones.
3. T1: lunes y martes aparecían deshabilitados sin aviso → se agregó el texto «Disponible de miércoles a sábado esta semana».
Guion y tarjetas quedaron congelados. Los datos de P00 no entran en los resultados finales.

**Fase 3 · Cuatro métodos.**
- M1 Evaluación heurística de Nielsen (2 pasadas, severidad 0–4) · M2 Recorrido cognitivo (4 preguntas por paso) · M3 Pruebas con usuarios P01–P05 con Think-Aloud, SEQ y SUS (sobre la v1 en Figma, tarjetas congeladas) · M4 Auditoría WCAG 2.2 AA.

**Fase 4 · Análisis y v2.** Matriz de hallazgos con triangulación (3+ métodos = Alta 1,0; 2 = Confirmado 0,8; 1 = A verificar 0,5), backlog con Prioridad = (Severidad × Confianza) ÷ Esfuerzo (S=1, M=2, L=3) y reglas MoSCoW (Must ≥ 1,5; Should 0,75–1,49; Could 0,4–0,74; Won't < 0,4; todo incumplimiento WCAG AA mínimo Should), v2 y verificación.

## 4. Resultados
### 4.1 Pruebas con usuarios (v1, n = 5, P00 excluido)
| Tarea | Éxito | É/P/F/A | Ayudas | SEQ medio |
|---|---|---|---|---|
| T1 | 5 de 5 (100 %) | 5/0/0/0 | 0 | 6,6 |
| T2 | 5 de 5 (100 %) | 5/0/0/0 | 0 | 6,6 |
| T3 | 5 de 5 (100 %) | 5/0/0/0 | 0 | 6,2 |
| T4 | 5 de 5 (100 %) | 5/0/0/0 | 0 | 6,4 |
| T5 | 5 de 5 (100 %) | 5/0/0/0 | 0 | 5,6 (2 de 5 marcaron 5) |

**No registrado:** tiempos por tarea, deslices y equivocaciones, SUS y citas textuales. Por eso las metas de tiempo, errores y SUS quedan sin verificar.

| PI | Respuesta |
|---|---|
| PI1 | Parcial: éxito y ayudas cumplen; tiempos sin datos |
| PI2 | Parcial: éxito 100 % y SEQ 6,2; errores sin datos |
| PI3 | Sí: T4 y T5 con 100 % y 0 ayudas |
| PI4 | Parcial: SEQ ≥ 5,5 en las 5 tareas; SUS sin datos; WCAG v1 ver 4.3 |

### 4.2 Hallazgos (H1–H9)
Total 9: 4 Confirmados (0,8), 5 A verificar (0,5), ninguno con confianza Alta. Severidad 2: seis hallazgos; severidad 1: tres; ninguno de severidad 3 o 4. M3 no confirmó ninguno (todas las tareas salieron 5 de 5).

| ID | Hallazgo | Métodos | Sev. | Confianza |
|---|---|---|---|---|
| H1 | Activar un recordatorio no se ofrece en el detalle ni al reservar; el atajo de Inicio parece una etiqueta | M1, M2 | 2 | Confirmado 0,8 |
| H2 | La tarjeta de la reserva no muestra que se puede cambiar o cancelar | M1, M2 | 2 | Confirmado 0,8 |
| H3 | Opciones de anticipación deshabilitadas hasta activar el interruptor; instrucción en letra pequeña | M1, M2 | 2 | Confirmado 0,8 |
| H4 | No se puede elegir el día (fecha fija) | M1 | 2 | A verificar 0,5 |
| H5 | «Reiniciar demo» borra todo sin confirmación | M1 | 2 | A verificar 0,5 |
| H6 | «Cancelar» del detalle es ambiguo (parece «cerrar») | M1 | 1 | A verificar 0,5 |
| H7 | Barra inferior parecida a los botones y sin íconos | M1 | 1 | A verificar 0,5 |
| H8 | Física y Programación sin horarios disponibles | M1, M4 | 1 | Confirmado 0,8 |
| H9 | La v1 no permite navegar con teclado ni comprobar un foco visible | M4 | 2 | A verificar 0,5 |

Aportes por método: M1 detectó 8 de 9, M2 detectó 3, M4 detectó 2, M3 ninguno.

### 4.3 Accesibilidad de la v1 (M4)
Contraste de texto peor caso 5,59:1 (cumple 4,5:1). Objetivos táctiles: 0 de 1.129 por debajo de 24 px. Incumplimiento: teclado y foco visible (H9).

### 4.4 Backlog priorizado
| ID | Ítem | Hallazgo | Prioridad | MoSCoW |
|---|---|---|---|---|
| B2 | Acciones «Cambiar horario» y «Cancelar tutoría» en la tarjeta | H2 | 1,6 | Must |
| B3 | Recordatorio en un paso (sin interruptor previo) | H3 | 1,6 | Must |
| B5 | «Reiniciar demo» con confirmación | H5 | 1,0 | Should |
| B1 | «Activar recordatorio» en detalle y confirmación | H1 | 0,8 | Should |
| B8 | «Próximamente» en materias sin horarios | H8 | 0,8 | Should |
| B9 | Teclado, foco visible y estados anunciados | H9 | 0,5 | Should (por WCAG) |
| B6 | Etiqueta «Cancelar tutoría» | H6 | 0,5 | Could |
| B4 | Elegir el día | H4 | 0,33 | Won't |
| B7 | Barra de pestañas con ícono y texto | H7 | 0,25 | Won't |

### 4.5 v1 → v2
Se implementaron 7 de 9 ítems: B1, B2, B3, B5, B6, B8 y B9. B4 se mantuvo sin cambios. B7 se cubrió dentro de B9 (íconos con texto en la barra). Mejoras visibles: botones en la tarjeta (T3 pasa de 4 a 3 toques), recordatorio activado con un toque en «15 min / 1 h / 1 día antes», «Activar recordatorio» en el detalle, «Reiniciar demo» dentro de «Opciones del evaluador» con confirmación, navegación con Tab/Enter/Esc, foco de 3 px y mensajes anunciados con `aria-live`.

**Verificación de la v2 (sin usuarios):** recorrido T1–T5 solo con teclado: 19 de 19 pasos correctos; foco visible: 19 de 19; axe-core: 0 reglas incumplidas en 19 pantallas; Lighthouse accesibilidad: 100/100. Los ítems Must B2 y B3 se verificaron contra sus criterios de aceptación (parte sin usuarios ✅). **Pendiente:** el criterio «≥ 4 de 5 participantes sin ayuda» con la v2.

### 4.6 Trazabilidad (resumen)
| O | Tareas | Hallazgos | Backlog | Mejora v2 |
|---|---|---|---|---|
| O1 | T1, T2 | H8, H4 | B8, B4 | «Próximamente»; el día fijo no cambia |
| O2 | T3 | H2, H4 | B2, B4 | Botones en la tarjeta |
| O3 | T4, T5 | H1, H3, H5, H6 | B3, B1, B5, B6 | Recordatorio en un paso, acceso en detalle, confirmación al reiniciar, etiqueta clara |
| O4 | T1–T5 + auditoría | H9, H7 | B9, B7 | Teclado y foco; íconos en la barra |

## 5. Conclusiones
- **C1 (O1):** el flujo principal se completó sin ayuda (5 de 5, SEQ 6,6); el único hallazgo es menor. Limitación: sin tiempos.
- **C2 (O2):** T3 5 de 5, SEQ 6,2; aun así dos métodos de expertos señalaron que la acción no es evidente. Limitación: sin errores registrados.
- **C3 (O3):** T4 5 de 5 (SEQ 6,4) y T5 5 de 5 (SEQ 5,6, la más baja). La tarjeta T5 se reescribió tras el piloto hacia «preferencias de notificación», lo que pudo orientar a los participantes a Ajustes.
- **C4 (O4):** la v1 cumple contraste y tamaño de objetivos y falla en teclado y foco; la v2 lo corrige según pruebas automáticas. SUS no registrado; lo automático no reemplaza a usuarios con tecnología de apoyo.
- **C5 (v2):** 7 de 9 ítems implementados; la v2 no se probó con usuarios.

## 6. Criterios técnicos para mejorar los métodos
1. Los métodos con expertos detectaron más que los usuarios; con n = 5, que nadie falle no prueba que el problema no exista.
2. Registrar tiempos, errores, SUS y citas desde la primera sesión; sin eso 3 de 4 PI quedaron «Parcial».
3. Incluir una tarea con fricción real; 5 de 5 en todo sugiere tareas fáciles o guiadas.
4. Repetir las pruebas con la v2.
5. Apoyar las severidades en frecuencia de errores, no solo en consenso.

## 7. Lecciones del trabajo en equipo
Reparto por issues y ramas con Pull Requests, evidencias enlazadas a cada hallazgo, y verificación cruzada (Martín implementó la v2; Sheyla verificó los Must contra el backlog). Los métodos que no dependían del piloto (heurística, recorrido cognitivo y accesibilidad) arrancaron en paralelo.

## 8. Evidencias disponibles en el repositorio
- Capturas de la v2: `evidencias/v2/pasos/01-Inicio.png` … `19-B5.png` y `evidencias/v2/must/` (B2 y B3).
- Reportes: `evidencias/v2/lighthouse-v2.png`, `lighthouse-v2.report.html`, `lighthouse-v2.report.json`.
- Capturas de la v1 de la heurística: `evidencias/heuristica/` (01 a 18).
- Verificaciones: `evidencias/v2/verificacion-v2.md` y `verificacion-must-B2-B3.md`.

## 9. Bibliografía de la guía
Cañas Delgado, Granollers i Saltiveri y Lorés Vidal (2012), *Diseño de sistemas interactivos centrados en el usuario*, UOC · Ferrer Martínez (2015), *Desarrollo de interfaces*, RA-MA · Shneiderman (2006), *Diseño de interfaces de usuario*, 4.ª ed., Pearson · Pressman (2010), *Ingeniería del software*, 7.ª ed., McGraw-Hill · Beati (2015), *HTML5 y CSS3 para diseñadores*, Alfaomega · Córcoles Tendero y Montero Simarro (2015), *Diseño de interfaces WEB*, RA-MA · Pintos Fernández (2024), *Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente*, Tutor Formación.

## 10. Estructura sugerida del documento
Portada (UTA, FISEI, tema, integrantes, fecha) → Resumen ejecutivo de una página → Contexto y objetivos → Metodología (4 métodos) → Proceso por fases (con el piloto) → Resultados (tablas y gráficos de SEQ por tarea, hallazgos por severidad y confianza, backlog por MoSCoW) → Antes y después v1 → v2 → Trazabilidad → Conclusiones y limitaciones → Criterios técnicos → Bibliografía → Anexos.
