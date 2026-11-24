# APE 6. Evaluación y validación de prototipos

**Universidad Técnica de Ambato · FISEI · Carrera de Software · 5.º nivel · Interacción Humano-Computador**
**Ciclo:** julio 2026 – diciembre 2026 · **Integrantes:** DavidPe1307, Zzzheyla, killer13233 · **Fecha:** 24/11/2026

## I. Tema
APE 6. Evaluación y validación.

## II. Objetivo
Elegir y aplicar métodos apropiados de evaluación y validación al prototipo **TutoUTA v1** (app de agendamiento de tutorías, rol estudiante), emitir criterios técnicos y mejorar la interfaz en una v2.

## III. Base de conocimiento
- **Evaluación heurística de Nielsen** (2 pasadas) y **recorrido cognitivo** (4 preguntas por paso): métodos de inspección con expertos.
- **Pruebas con usuarios**: pensar en voz alta, SEQ por tarea y SUS al final, con métricas de la **ISO 9241-11** (eficacia, eficiencia, satisfacción).
- **WCAG 2.2 AA**: contraste, tamaño de objetivos, teclado y foco, con axe-core y Lighthouse.
- **Priorización**: severidad × confianza ÷ esfuerzo, con triangulación de métodos y MoSCoW.

## IV. Actividades desarrolladas
| Fase | Qué se hizo | Evidencia |
|---|---|---|
| 1 Planificación y ética | Alcance, objetivos O1–O4 con PI1–PI4, escenario y 5 tareas, métricas y metas, consentimiento (LOPDP) y roles | `docs/01-planificacion/` |
| 2 Piloto P00 | Sesión de 22 min; 3 ajustes (etiqueta «Tarde», texto de ayuda de fechas, tarjeta T5); guion y tarjetas congelados | `docs/02-piloto/` |
| 3 Métodos | Heurística, recorrido cognitivo, pruebas con P01–P05, auditoría WCAG | `docs/03-evaluacion/`, `evidencias/` |
| 4 Análisis y v2 | Matriz H1–H9, backlog B1–B9, v2 navegable y verificación automática | `docs/04-analisis/`, `prototipo/v2/` |

## V. Resultados obtenidos
**Pruebas con usuarios (v1, n = 5; P00 excluido):**
| Tarea | Éxito | Ayudas | SEQ medio |
|---|---|---|---|
| T1 | 5 de 5 (100 %) | 0 | 6,6 |
| T2 | 5 de 5 (100 %) | 0 | 6,6 |
| T3 | 5 de 5 (100 %) | 0 | 6,2 |
| T4 | 5 de 5 (100 %) | 0 | 6,4 |
| T5 | 5 de 5 (100 %) | 0 | 5,6 |

No se registraron tiempos, errores, SUS ni citas.

**Hallazgos:** 9 (H1–H9). Confianza Alta: 0 · Confirmado (0,8): 4 (H1, H2, H3, H8) · A verificar (0,5): 5. Severidad 2: 6 · severidad 1: 3.
**Backlog:** 9 ítems: Must 2 (B2, B3) · Should 4 (B5, B1, B8, B9) · Could 1 (B6) · Won't 2 (B4, B7).
**v2:** 7 de 9 ítems implementados. Recorrido T1–T5 por teclado 19 de 19 pasos, axe-core 0 incumplimientos en 19 pantallas, Lighthouse accesibilidad 100/100.
Detalle: `docs/04-analisis/trazabilidad.md`, `matriz-hallazgos.md`, `backlog.md`.

## VI. Conclusiones
Ver `presentacion/01-conclusiones.md`. En síntesis: el flujo principal se completó sin ayuda y con SEQ alto; los métodos con expertos detectaron más problemas que las pruebas con usuarios; T5 (recordatorios) es la tarea más débil; la v2 corrige los hallazgos priorizados, pero **no se probó con usuarios** y faltan tiempos, errores y SUS.

## VII. Recomendaciones
1. Registrar tiempos, errores, SUS y citas desde la primera sesión.
2. Repetir las pruebas con la v2 para confirmar B2 y B3 (≥ 4 de 5 sin ayuda).
3. Añadir una tarea con fricción real para no obtener 5 de 5 en todo.
4. Probar con usuarios de tecnología de apoyo, además de las pruebas automáticas.

## VIII. Bibliografía
- Cañas Delgado, J. J., Granollers i Saltiveri, T. y Lorés Vidal, J. (2012). *Diseño de sistemas interactivos centrados en el usuario*. UOC.
- Ferrer Martínez, J. (2015). *Desarrollo de interfaces*. RA-MA.
- Shneiderman, B. (2006). *Diseño de interfaces de usuario* (4.ª ed.). Pearson Educación.
- Pressman, R. S. (2010). *Ingeniería del software* (7.ª ed.). McGraw-Hill.
- Beati, H. (2015). *HTML5 y CSS3 para diseñadores*. Alfaomega.
- Córcoles Tendero, J. E. y Montero Simarro, F. (2015). *Diseño de interfaces WEB*. RA-MA.
- Pintos Fernández, J. (2024). *Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente (UF1843)*. Tutor Formación.

## Anexos
Repositorio: https://github.com/DavidPe1307/APE_6_HCI · Consentimiento y hoja de observación en `docs/` · Evidencias en `evidencias/`.
