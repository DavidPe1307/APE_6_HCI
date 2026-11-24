# Plantilla de evaluación del prototipo TutoUTA v1

Copiar la sección que corresponda a su carpeta (`heuristica/`, `walkthrough/`, `usuarios/`, `accesibilidad/`) y llenarla. Cada fila necesita evidencia en `/evidencias`.

**Evaluador:** ______  **Fecha:** ______  **Versión evaluada:** v1  **Método:** ______

---
## A. Evaluación heurística de Nielsen (2 pasadas)
Severidad: 0 no es problema · 1 cosmético · 2 menor · 3 mayor · 4 catastrófico.

| ID | Pantalla / paso | Problema | Pasos para reproducir | Heurística violada (1–10) | Evidencia | Sev. (0–4) |
|---|---|---|---|---|---|---|
| HE1 | | | | | | |

**Heurísticas:** 1 Visibilidad del estado · 2 Lenguaje del mundo real · 3 Control y libertad · 4 Consistencia y estándares · 5 Prevención de errores · 6 Reconocer antes que recordar · 7 Flexibilidad y eficiencia · 8 Diseño minimalista · 9 Recuperarse de errores · 10 Ayuda y documentación.

**Aciertos a conservar:**
- 

---
## B. Recorrido cognitivo (tarea elegida: T__)
| Paso de la ruta óptima | ¿Intentará el efecto correcto? | ¿Notará que la acción está disponible? | ¿Asociará el control con el efecto? | ¿Verá progreso tras actuar? | Falla (sí/no) y por qué |
|---|---|---|---|---|---|
| 1 | | | | | |

---
## C. Pruebas con usuarios (Think-Aloud + SEQ + SUS)
Usar `docs/03-evaluacion/usuarios/hoja-observacion.md` (una por participante).

| Tarea | Éxitos | Parciales | Fallos | Abandonos | Tasa de éxito | Mediana tiempo (s) | Rango (s) | Ayudas | SEQ medio |
|---|---|---|---|---|---|---|---|---|---|
| T1 | | | | | | | | | |
| T2 | | | | | | | | | |
| T3 | | | | | | | | | |
| T4 | | | | | | | | | |
| T5 | | | | | | | | | |

Tasa de éxito = (Éxitos + 0,5 × Parciales) ÷ Intentos. SUS por participante y media: ____ (meta ≥ 68).
**Citas relevantes:**
- 

---
## D. Accesibilidad (WCAG 2.2 AA)
| Criterio | Cómo se verifica | Cumple (sí/no/parcial) | Pantalla | Evidencia |
|---|---|---|---|---|
| Contraste de texto ≥ 4,5:1 (1.4.3) | Contrast checker / Lighthouse | | | |
| Tamaño de objetivos ≥ 24×24 px (2.5.8) | Medir en Figma | | | |
| Navegación por teclado y foco visible (2.1.1, 2.4.7) | Tab, Esc | | | |
| Identificación de errores clara (3.3.1) | Provocar un error | | | |
| Texto alternativo / íconos con etiqueta (1.1.1) | Revisión visual | | | |
| Reporte automático (axe / Lighthouse) | Guardar captura | | | |

---
## E. Matriz de hallazgos consolidada (la llena Zzzheyla)
| ID | Fallo | Evidencia | Principio (heurística / WCAG) | Métodos que lo detectaron | Severidad (1–4) | Confianza | Recomendación |
|---|---|---|---|---|---|---|---|
| H1 | | | | | | | |

Confianza: 3 o más métodos = Alta (1,0) · 2 = Confirmado (0,8) · 1 = A verificar (0,5).

## F. Backlog (lo llena killer13233)
| ID | Historia de usuario | Criterio de aceptación medible | Esfuerzo (S=1, M=2, L=3) | Prioridad = (Sev × Conf) ÷ Esfuerzo | MoSCoW |
|---|---|---|---|---|---|
| B1 | | | | | |
