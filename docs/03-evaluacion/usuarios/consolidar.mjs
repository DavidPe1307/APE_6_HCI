// Consolida las pruebas con usuarios P01–P05 (Think-Aloud + SEQ + SUS) de TutoUTA v1.
// Uso (desde la raíz del repo): node docs/03-evaluacion/usuarios/consolidar.mjs
// Lee datos-sesiones.csv, sus.csv y citas.csv (separador ; o ,) y escribe 02-resultados-usuarios.md
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const read = f => {
  const txt = fs.readFileSync(path.join(dir, f), 'utf8').replace(/^﻿/, '').trim();
  const lines = txt.split(/\r?\n/).filter(l => l.trim());
  const sep = lines[0].includes(';') ? ';' : ',';
  const head = lines[0].split(sep).map(h => h.trim());
  return lines.slice(1).map(l => { const c = l.split(sep); return Object.fromEntries(head.map((h, i) => [h, (c[i] ?? '').trim()])); });
};
const num = v => (v === '' || v == null ? null : Number(String(v).replace(',', '.')));
const median = a => { const s = [...a].sort((x, y) => x - y), m = Math.floor(s.length / 2); return s.length ? (s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2) : null; };
const mean = a => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);
const f1 = v => (v == null ? '—' : String(Math.round(v * 10) / 10).replace('.', ','));
const pct = v => (v == null ? '—' : `${Math.round(v * 100)} %`);
const ok = b => (b == null ? '—' : b ? '✅ Cumple' : '❌ No cumple');

const METAS = { T1: 90, T2: 30, T3: 60, T4: 45, T5: 60 };
const datos = read('datos-sesiones.csv').filter(r => r.resultado);
const sus = read('sus.csv').filter(r => r.i1);
const citas = fs.existsSync(path.join(dir, 'citas.csv')) ? read('citas.csv').filter(r => r.cita_textual) : [];
if (!datos.length) { console.error('datos-sesiones.csv no tiene resultados todavía.'); process.exit(1); }

const porTarea = {};
for (const t of Object.keys(METAS)) {
  const rs = datos.filter(r => r.tarea === t); const n = rs.length;
  const c = k => rs.filter(r => r.resultado.toUpperCase().replace('É', 'E') === k).length;
  const E = c('E'), P = c('P'), F = c('F'), A = c('A');
  const tiempos = rs.map(r => num(r.tiempo_s)).filter(v => v != null);
  const errores = rs.map(r => (num(r.deslices) ?? 0) + (num(r.equivocaciones) ?? 0));
  const seq = rs.map(r => num(r.seq)).filter(v => v != null);
  const ayudas = rs.reduce((s, r) => s + (num(r.ayudas) ?? 0), 0);
  const tasa = n ? (E + 0.5 * P) / n : null;
  porTarea[t] = { n, E, P, F, A, tasa, med: median(tiempos), min: tiempos.length ? Math.min(...tiempos) : null, max: tiempos.length ? Math.max(...tiempos) : null,
    ayudas, desl: rs.reduce((s, r) => s + (num(r.deslices) ?? 0), 0), equiv: rs.reduce((s, r) => s + (num(r.equivocaciones) ?? 0), 0),
    errMed: median(errores), seq: mean(seq), seqMed: median(seq) };
}
const susRows = sus.map(r => {
  const v = Array.from({ length: 10 }, (_, i) => num(r['i' + (i + 1)]));
  const score = v.reduce((s, x, i) => s + (i % 2 === 0 ? x - 1 : 5 - x), 0) * 2.5;
  return { p: r.participante, v, score };
});
const susMean = mean(susRows.map(r => r.score));

let md = '# Método 3 · Resultados de las pruebas con usuarios (P01–P05)\n\n';
md += `Generado con \`consolidar.mjs\` (${new Date().toLocaleString("es-EC")}). Datos crudos: \`datos-sesiones.csv\`, \`sus.csv\`, \`citas.csv\`.\n\n`;
md += `Participantes con datos: **${new Set(datos.map(r => r.participante)).size}** · Los datos del piloto P00 no se incluyen.\n\n`;
md += '## Resultados por tarea\n| Tarea | Éxito (É + 0,5·P) | É / P / F / A | Mediana tiempo (s) | Rango (s) | Meta (s) | Ayudas | Deslices / Equivocaciones | SEQ medio |\n|---|---|---|---|---|---|---|---|---|\n';
for (const [t, r] of Object.entries(porTarea)) {
  const exitos = r.E + 0.5 * r.P;
  md += `| ${t} | ${f1(exitos)} de ${r.n} (${pct(r.tasa)}) | ${r.E} / ${r.P} / ${r.F} / ${r.A} | ${f1(r.med)} | ${f1(r.min)}–${f1(r.max)} | ≤ ${METAS[t]} | ${r.ayudas} | ${r.desl} / ${r.equiv} | ${f1(r.seq)} |\n`;
}
md += '\n## Cumplimiento de metas (hipótesis del plan)\n| Tarea | Éxito ≥ 80 % | Tiempo ≤ meta (mediana) | 0 ayudas | ≤ 1 error (mediana) | SEQ ≥ 5,5 |\n|---|---|---|---|---|---|\n';
for (const [t, r] of Object.entries(porTarea)) {
  md += `| ${t} | ${ok(r.tasa == null ? null : r.tasa >= 0.8)} | ${ok(r.med == null ? null : r.med <= METAS[t])} | ${ok(r.ayudas === 0)} | ${ok(r.errMed == null ? null : r.errMed <= 1)} | ${ok(r.seq == null ? null : r.seq >= 5.5)} |\n`;
}
md += '\n## SUS (10 ítems)\n| Participante | Respuestas (1–5) | Puntaje |\n|---|---|---|\n';
susRows.forEach(r => { md += `| ${r.p} | ${r.v.join(' · ')} | ${f1(r.score)} |\n`; });
md += `\n**SUS medio: ${f1(susMean)} / 100** (meta ≥ 68) → ${ok(susMean == null ? null : susMean >= 68)} · Rango: ${f1(Math.min(...susRows.map(r => r.score)))}–${f1(Math.max(...susRows.map(r => r.score)))}\n`;

const T = porTarea;
const pi = (cond) => (cond ? 'Sí' : 'No');
md += '\n## Respuesta a las preguntas de investigación\n| PI | Pregunta | Respuesta con datos |\n|---|---|---|\n';
md += `| PI1 | ¿T1 y T2 con éxito ≥ 80 %, en tiempo meta y sin ayudas? | **${pi(T.T1.tasa >= 0.8 && T.T2.tasa >= 0.8 && T.T1.med <= 90 && T.T2.med <= 30 && T.T1.ayudas + T.T2.ayudas === 0)}** · T1 ${pct(T.T1.tasa)}, mediana ${f1(T.T1.med)} s, ${T.T1.ayudas} ayudas · T2 ${pct(T.T2.tasa)}, mediana ${f1(T.T2.med)} s, ${T.T2.ayudas} ayudas |\n`;
md += `| PI2 | ¿T3 con ≤ 1 error y éxito ≥ 80 %? | **${pi(T.T3.tasa >= 0.8 && T.T3.errMed <= 1)}** · T3 ${pct(T.T3.tasa)}, mediana de errores ${f1(T.T3.errMed)}, SEQ ${f1(T.T3.seq)} |\n`;
md += `| PI3 | ¿T4 y T5 sin ayuda y con éxito ≥ 80 %? | **${pi(T.T4.tasa >= 0.8 && T.T5.tasa >= 0.8 && T.T4.ayudas + T.T5.ayudas === 0)}** · T4 ${pct(T.T4.tasa)} (${T.T4.ayudas} ayudas) · T5 ${pct(T.T5.tasa)} (${T.T5.ayudas} ayudas) |\n`;
const seqOk = Object.values(T).every(r => r.seq >= 5.5);
md += `| PI4 | ¿SEQ ≥ 5,5 por tarea y SUS ≥ 68? (WCAG: ver accesibilidad) | **${pi(seqOk && susMean >= 68)}** · SEQ por tarea: ${Object.entries(T).map(([t, r]) => `${t} ${f1(r.seq)}`).join(', ')} · SUS ${f1(susMean)} |\n`;

md += '\n## Citas textuales (pensar en voz alta)\n| Participante | Tarea | Cita | Gesto / emoción | Problema asociado |\n|---|---|---|---|---|\n';
citas.forEach(c => { md += `| ${c.participante} | ${c.tarea} | «${c.cita_textual}» | ${c.gesto_emocion} | ${c.problema_asociado} |\n`; });
md += '\n## Notas por sesión\n';
datos.filter(r => r.notas).forEach(r => { md += `- **${r.participante} · ${r.tarea}:** ${r.notas}\n`; });
md += '\n> Muestra formativa (n = 5): los resultados indican problemas, no prueban que la app funcione. Se reportan tal cual, aunque no cumplan la meta.\n';
fs.writeFileSync(path.join(dir, '02-resultados-usuarios.md'), md);
console.log(md);
