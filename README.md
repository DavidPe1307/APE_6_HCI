# APE 6 · Evaluación y validación de prototipos (IHC)

Universidad Técnica de Ambato · FISEI · Carrera de Software · 5.º nivel · Interacción Humano-Computador · Ciclo julio – diciembre 2026

## Equipo
| Integrante | Usuario de GitHub | Aporte principal |
|---|---|---|
| David Pérez | [DavidPe1307](https://github.com/DavidPe1307) | Planificación y ética (Fase 1), piloto P00, trazabilidad, conclusiones, documento final y presentación |
| Sheyla Pacha | [Zzzheyla](https://github.com/Zzzheyla) | Evaluación heurística, recorrido cognitivo, matriz de hallazgos y verificación de los ítems Must de la v2 |
| Martín Palacios | [killer13233](https://github.com/killer13233) | Pruebas con usuarios P01–P05, auditoría de accesibilidad, backlog MoSCoW, implementación de la v2 y verificación automática |

## Prototipo evaluado
- **TutoUTA v1** (Figma, app de agendamiento de tutorías, rol estudiante): https://www.figma.com/design/1Wd5agozhbOMJVnpDw9UhR/Sin-t%C3%ADtulo?node-id=0-1&t=Zcv4YvgJn3BSH1ns-1
- **TutoUTA v2** (HTML navegable): [`prototipo/v2/index.html`](prototipo/v2/index.html). Se abre con doble clic, sin internet. Detalle de cambios en [`prototipo/v2/README.md`](prototipo/v2/README.md).

## Resultados en una mirada
| Método | Resultado |
|---|---|
| Pruebas con usuarios (v1, n = 5) | T1 a T5: 5 de 5 (100 %), 0 ayudas, SEQ de 5,6 a 6,6 (T5 la más baja) |
| Heurística, recorrido cognitivo y WCAG | 9 hallazgos (H1–H9): 4 Confirmados (0,8) y 5 A verificar (0,5); severidad máxima 2 |
| Backlog | 9 ítems: 2 Must, 4 Should, 1 Could, 2 Won't |
| v2 | 7 de 9 ítems implementados; axe-core 0 incumplimientos en 19 pantallas, Lighthouse accesibilidad 100/100, recorrido T1–T5 solo con teclado 19 de 19 pasos |

**Límites declarados:** no se registraron tiempos, errores, SUS ni citas en las sesiones, y la v2 no se probó con usuarios. Los resultados se reportan tal cual, sin estimaciones.

## Estructura del repositorio
| Carpeta | Contenido |
|---|---|
| `docs/00-contexto-equipo.md` | Contexto y reparto del trabajo |
| `docs/01-planificacion/` | Fase 1: alcance, objetivos O1–O4, tareas T1–T5, métricas, consentimiento y roles |
| `docs/02-piloto/` | Fase 2: checklist técnico y bitácora del piloto P00 |
| `docs/03-evaluacion/` | Fase 3: heurística, recorrido cognitivo, usuarios y accesibilidad |
| `docs/04-analisis/` | Fase 4: matriz de hallazgos, backlog y trazabilidad |
| `prototipo/` | v2 navegable |
| `evidencias/` | Capturas, reportes de Lighthouse y verificaciones |
| `presentacion/` | Conclusiones, documento final, guion de la presentación y contexto para documentar |

## Documentos clave
[Alcance](docs/01-planificacion/01-alcance.md) · [Resultados con usuarios](docs/03-evaluacion/usuarios/02-resultados-usuarios.md) · [Matriz de hallazgos](docs/04-analisis/matriz-hallazgos.md) · [Backlog](docs/04-analisis/backlog.md) · [Trazabilidad](docs/04-analisis/trazabilidad.md) · [Conclusiones](presentacion/01-conclusiones.md) · [Documento final](presentacion/02-documento-final.md)

## Flujo de trabajo
Rama `feature/<usuario>-<tema>` → Pull Request → revisión → merge a `main`. Cada commit cierra su issue con `Closes #N`.
