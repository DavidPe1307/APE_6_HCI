# Matriz de trazabilidad (O → PI → T → métrica → H → B → mejora v2)

Fuentes: `02-resultados-usuarios.md`, `matriz-hallazgos.md`, `backlog.md`, `accesibilidad/01-auditoria-wcag.md`, `prototipo/v2/README.md` y `evidencias/v2/`.

| O | PI | Tareas | Métrica medida en v1 | Hallazgos (H) | Backlog (B) | Mejora visible en v2 | Verificación en v2 |
|---|---|---|---|---|---|---|---|
| O1 Eficacia y eficiencia del flujo principal | PI1 | T1, T2 | Éxito 5 de 5 (100 %) en ambas · 0 ayudas · SEQ 6,6 y 6,6 · tiempos **no registrados** | H8 (Física y Programación sin horarios) · H4 (día fijo) | B8 (Should) · B4 (Won't) | B8: «· Próximamente» en las materias sin horarios. B4: sin cambios | B8 implementado. Con usuarios: no probado |
| O2 Recuperación ante errores | PI2 | T3 | Éxito 5 de 5 (100 %) · 0 ayudas · SEQ 6,2 · errores **no registrados** | H2 (la tarjeta no muestra que se puede cambiar o cancelar) · H4 | B2 (Must) · B4 (Won't) | B2: botones «Cambiar horario» y «Cancelar tutoría» en la tarjeta (Inicio y Mis tutorías); T3 pasa de 4 a 3 toques | Sin usuarios ✅ (`verificacion-must-B2-B3.md`). Con usuarios ⏳ |
| O3 Control y libertad | PI3 | T4, T5 | T4: 5 de 5, SEQ 6,4 · T5: 5 de 5, SEQ 5,6 · 0 ayudas en ambas | H1 (recordatorio no ofrecido en detalle) · H3 (opciones deshabilitadas) · H5 («Reiniciar demo» sin confirmación) · H6 («Cancelar» ambiguo) | B3 (Must) · B1 (Should) · B5 (Should) · B6 (Could) | B3: un toque en «15 min / 1 h / 1 día antes» activa el aviso. B1: «Activar recordatorio» en detalle y en «¡Tutoría reservada!». B5: confirmación y «Opciones del evaluador». B6: etiqueta «Cancelar tutoría» | B3 ✅ sin usuarios. Recorrido T1–T5 por teclado: 19 de 19 pasos. Con usuarios ⏳ |
| O4 Satisfacción y accesibilidad básica | PI4 | T1–T5 + auditoría | SEQ 5,6 a 6,6 · SUS **no registrado** · WCAG v1: contraste peor caso 5,59:1; 0 de 1.129 objetivos bajo 24 px | H9 (teclado y foco no comprobables en v1) · H7 (barra inferior sin íconos) | B9 (Should por WCAG) · B7 (Won't) | B9: navegación con Tab/Enter/Esc, foco de 3 px, `aria-live`. H7: íconos con texto en la barra, incluidos dentro de B9 | axe-core: 0 reglas incumplidas en 19 pantallas · Lighthouse accesibilidad 100/100 · foco visible 19 de 19 |

## Lectura
- Los 4 objetivos tienen cadena completa hasta una mejora visible en la v2, excepto **H4 / B4** (elegir el día), que se dejó como *Won't* y no cambió.
- Se implementaron 7 de los 9 ítems del backlog (B1, B2, B3, B5, B6, B8, B9). B4 queda sin hacer y B7 se cubrió dentro de B9.
- La v2 **no se probó con usuarios**. Los criterios «≥ 4 de 5 sin ayuda» de B2 y B3 siguen pendientes.
