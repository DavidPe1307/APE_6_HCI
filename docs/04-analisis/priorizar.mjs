// Prioriza el backlog de TutoUTA a partir de backlog.csv y escribe backlog.md
// Uso (desde la raíz del repo): node docs/04-analisis/priorizar.mjs
// Prioridad = (Severidad × Confianza) ÷ Esfuerzo · Confianza por triangulación · MoSCoW por regla fija.
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const txt = fs.readFileSync(path.join(dir, 'backlog.csv'), 'utf8').replace(/^﻿/, '').trim().split(/\r?\n/);
const head = txt[0].split(';');
const rows = txt.slice(1).filter(Boolean).map(l => Object.fromEntries(l.split(';').map((v, i) => [head[i], v.trim()])));

const ESF = { S: 1, M: 2, L: 3 };
const conf = n => (n >= 3 ? 1.0 : n === 2 ? 0.8 : 0.5);
const confTxt = c => (c === 1 ? 'Alta (1,0)' : c === 0.8 ? 'Confirmado (0,8)' : 'A verificar (0,5)');
const f = v => String(Math.round(v * 100) / 100).replace('.', ',');

for (const r of rows) {
  r.nMet = r.metodos.split(',').filter(Boolean).length;
  r.conf = conf(r.nMet);
  r.esf = ESF[r.esfuerzo];
  r.impacto = Number(r.severidad) * r.conf;
  r.prio = r.impacto / r.esf;
  // Regla MoSCoW (fija, se aplica igual a todos)
  r.moscow = r.prio >= 1.5 ? 'Must' : r.prio >= 0.75 ? 'Should' : r.prio >= 0.4 ? 'Could' : "Won't";
  if (r.wcag_aa === 'si' && (r.moscow === 'Could' || r.moscow === "Won't")) { r.moscow = 'Should'; r.regla = 'sube a Should: incumple WCAG 2.2 AA'; }
  r.cuadrante = r.impacto >= 1.0 ? (r.esf === 1 ? 'Victoria rápida' : 'Proyecto mayor') : (r.esf === 1 ? 'Relleno' : 'Evitar / posponer');
}
rows.sort((a, b) => b.prio - a.prio || Number(b.severidad) - Number(a.severidad));

let md = '# Backlog B1–Bn priorizado (MoSCoW) · TutoUTA v1 → v2\n\n';
md += `Generado con \`priorizar.mjs\` (${new Date().toLocaleString('es-EC')}) desde \`backlog.csv\`. Fuente de los hallazgos: \`matriz-hallazgos.md\` (H1–H8) y \`docs/03-evaluacion/accesibilidad/01-auditoria-wcag.md\` (H9 = A1 + A2).\n\n`;
md += '**Fórmula:** Prioridad = (Severidad × Confianza) ÷ Esfuerzo · **Esfuerzo:** S = 1, M = 2, L = 3 (estimación del equipo) · **Confianza:** 3+ métodos = 1,0 · 2 = 0,8 · 1 = 0,5\n\n';
md += '**Regla MoSCoW:** Must ≥ 1,5 · Should 0,75–1,49 · Could 0,4–0,74 · Won\'t < 0,4. Excepción: todo incumplimiento de WCAG 2.2 AA es como mínimo Should.\n\n';
md += '## Backlog ordenado por prioridad\n| # | ID | Hallazgo | Historia de usuario | Criterio de aceptación (medible) | Sev. | Métodos | Confianza | Esfuerzo | Prioridad | MoSCoW |\n|---|---|---|---|---|---|---|---|---|---|---|\n';
rows.forEach((r, i) => { md += `| ${i + 1} | ${r.id} | ${r.hallazgo} | ${r.historia} | ${r.criterio_aceptacion} | ${r.severidad} | ${r.metodos} | ${confTxt(r.conf)} | ${r.esfuerzo} (${r.esf}) | **${f(r.prio)}** | **${r.moscow}**${r.regla ? ` (${r.regla})` : ''} |\n`; });

md += '\n## Matriz Impacto vs. Esfuerzo\nImpacto = Severidad × Confianza (alto si ≥ 1,0).\n\n| | Esfuerzo bajo (S) | Esfuerzo medio/alto (M, L) |\n|---|---|---|\n';
const cell = (alto, bajoEsf) => rows.filter(r => (r.impacto >= 1.0) === alto && (r.esf === 1) === bajoEsf).map(r => `${r.id} (${r.hallazgo})`).join(', ') || '—';
md += `| **Impacto alto** | Victoria rápida: ${cell(true, true)} | Proyecto mayor: ${cell(true, false)} |\n`;
md += `| **Impacto bajo** | Relleno: ${cell(false, true)} | Evitar / posponer: ${cell(false, false)} |\n`;

md += '\n## Resumen MoSCoW y responsables en la v2\n| MoSCoW | Ítems | Responsable v2 |\n|---|---|---|\n';
const resp = { Must: 'Zzzheyla (v2 Must)', Should: 'killer13233 (#17)', Could: 'Si queda tiempo', "Won't": 'Fuera de la v2 (se documenta)' };
for (const m of ['Must', 'Should', 'Could', "Won't"]) md += `| ${m} | ${rows.filter(r => r.moscow === m).map(r => `${r.id} (${r.hallazgo})`).join(', ') || '—'} | ${resp[m]} |\n`;

md += '\n> **Limitación:** la confianza sigue la matriz final (M1, M2, M3 y M4). M3 (P01–P05) no confirmó H1–H3: las 5 tareas se completaron 5 de 5 sin ayuda, así que su confianza se mantiene en 0,8. Las metas de tiempo y el SUS no se registraron.\n';
fs.writeFileSync(path.join(dir, 'backlog.md'), md);
console.log(md);
