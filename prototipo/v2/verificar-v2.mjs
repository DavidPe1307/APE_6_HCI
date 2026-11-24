// Verificación automática de TutoUTA v2 (issue #17)
// 1) Recorre T1–T5 SOLO con teclado (Tab / Enter / Esc) y comprueba el foco visible en cada paso.
// 2) Ejecuta axe-core (WCAG 2.0/2.1/2.2 A y AA) en cada pantalla del recorrido.
// 3) Ejecuta Lighthouse (accesibilidad) y guarda capturas de cada paso.
// Uso: node verificar-v2.mjs <carpeta prototipo/v2> <carpeta evidencias/v2>
// Requiere en la carpeta del script: npm install playwright @axe-core/playwright
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { spawn } from 'node:child_process';
import { chromium } from 'playwright';
import axeMod from '@axe-core/playwright';
const AxeBuilder = axeMod.AxeBuilder || axeMod.default || axeMod;

const [srcDir, out] = process.argv.slice(2).map(p => path.resolve(p));
fs.mkdirSync(path.join(out, 'pasos'), { recursive: true });

// Servidor local para el prototipo
const server = http.createServer((req, res) => {
  const f = path.join(srcDir, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(srcDir) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': f.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const page = await context.newPage();
await page.goto(url);

let ultimoFoco = null;
const pasos = [], axeTotal = new Map(); let n = 0, fallos = 0;
const clean = s => String(s ?? '').replace(/\s+/g, ' ').replace(/\|/g, '/').trim();
const foco = () => page.evaluate(() => {
  const e = document.activeElement; if (!e || e === document.body) return { txt: '(nada)', visible: false };
  const s = getComputedStyle(e);
  return { txt: (e.getAttribute('aria-label') || e.innerText || e.tagName).slice(0, 50), visible: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2 };
});
async function axe(nombre) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  for (const v of r.violations) { const k = `${v.id}|${v.impact}|${v.help}`; axeTotal.set(k, [...(axeTotal.get(k) || []), nombre]); }
  return r.violations.length;
}
async function paso(tarea, accion, comprobar, esperado) {
  n++;
  const ok = await comprobar();
  const f = ultimoFoco || await foco(); ultimoFoco = null;
  const shot = `${String(n).padStart(2, '0')}-${tarea}.png`;
  await page.screenshot({ path: path.join(out, 'pasos', shot) });
  const h1 = clean(await page.locator('h1').first().textContent().catch(() => ''));
  const v = await axe(`${tarea} · ${h1}`);
  if (!ok) fallos++;
  pasos.push({ n, tarea, accion, esperado, ok, h1, foco: f, axe: v, shot });
  console.log(`${ok ? 'OK ' : 'FALLA'} ${tarea} · ${accion}`);
}
// Avanza con Tab hasta un control cuyo texto contenga `txt` y lo activa con Enter
async function tabYEnter(txt, max = 40) {
  for (let i = 0; i < max; i++) {
    await page.keyboard.press('Tab');
    const t = await page.evaluate(() => (document.activeElement?.innerText || '').replace(/\s+/g, ' ').trim());
    if (t.includes(txt)) { ultimoFoco = await foco(); await page.keyboard.press('Enter'); await page.waitForTimeout(150); return true; }
  }
  throw new Error(`No se llegó con Tab a «${txt}»`);
}
const h1Es = t => async () => (await page.locator('h1').first().textContent()).includes(t);
const hayTexto = t => async () => (await page.locator('main').innerText()).includes(t);

await page.keyboard.press('Tab'); ultimoFoco = await foco(); await page.keyboard.press('Shift+Tab');
await paso('Inicio', 'Estado inicial (primer Tab: «Saltar al contenido»)', hayTexto('Todavía no tienes una tutoría'), 'Inicio sin reserva');
// T1
await tabYEnter('Nueva tutoría'); await paso('T1', 'Tab → «Nueva tutoría» → Enter', h1Es('Nueva tutoría'), 'Pantalla Nueva tutoría');
await tabYEnter('09:00–10:00'); await paso('T1', 'Tab → «09:00–10:00» → Enter', hayTexto('Seleccionado: 09:00–10:00'), 'Horario de mañana seleccionado');
await tabYEnter('Continuar'); await paso('T1', 'Tab → «Continuar» → Enter', h1Es('Confirma tu tutoría'), 'Pantalla de confirmación');
await tabYEnter('Confirmar reserva'); await paso('T1', 'Tab → «Confirmar reserva» → Enter', h1Es('¡Tutoría reservada!'), 'Reserva confirmada con fecha y hora');
// T2
await tabYEnter('Volver al Inicio'); await paso('T2', 'Tab → «Volver al Inicio» → Enter', hayTexto('26 de noviembre 2026 · 09:00–10:00'), 'Inicio muestra fecha y hora');
// T3
await tabYEnter('Cambiar horario'); await paso('T3', 'Tab → «Cambiar horario» (en la tarjeta, B2) → Enter', h1Es('Cambiar horario'), 'Pantalla Cambiar horario');
await tabYEnter('16:00–17:00'); await paso('T3', 'Tab → «16:00–17:00» → Enter', async () => (await page.locator('[aria-checked="true"]').count()) === 1, 'Horario de tarde seleccionado');
await tabYEnter('Guardar nuevo horario'); await paso('T3', 'Tab → «Guardar nuevo horario» → Enter', async () => (await h1Es('¡Horario actualizado!')()) && (await hayTexto('16:00–17:00')()), 'Horario actualizado a la tarde');
// T4 (incluye Esc en el diálogo)
await tabYEnter('Ver mis tutorías'); await paso('T4', 'Tab → «Ver mis tutorías» → Enter', h1Es('Mis tutorías'), 'Mis tutorías');
await tabYEnter('Cancelar tutoría'); await paso('T4', 'Tab → «Cancelar tutoría» → Enter', async () => (await page.locator('[role="dialog"]').count()) === 1, 'Diálogo de cancelación abierto con foco dentro');
await page.keyboard.press('Escape'); await page.waitForTimeout(150); ultimoFoco = await foco();
await paso('T4', 'Esc en el diálogo', async () => (await page.locator('[role="dialog"]').count()) === 0 && (await foco()).txt.includes('Cancelar tutoría'), 'El diálogo se cierra y el foco vuelve a «Cancelar tutoría»');
await page.keyboard.press('Enter'); await page.waitForTimeout(150);
ultimoFoco = await foco(); const focoDialogo = ultimoFoco.txt;
await page.keyboard.press('Enter'); await page.waitForTimeout(150);
await paso('T4', `Enter (el foco ya está en «${clean(focoDialogo)}») → Enter`, async () => (await hayTexto('Tutoría cancelada')()) && (await hayTexto('Deshacer cancelación')()), 'Pasa a Canceladas con Deshacer');
// T5
await tabYEnter('Ajustes'); await paso('T5', 'Tab → pestaña «Ajustes» → Enter', h1Es('Ajustes'), 'Ajustes');
await tabYEnter('Recordatorios →'); await paso('T5', 'Tab → «Recordatorios →» → Enter', h1Es('Recordatorios'), 'Recordatorios');
await tabYEnter('1 h antes'); await paso('T5', 'Tab → «1 h antes» → Enter (B3: sin interruptor previo)', hayTexto('Recordatorio activado · Aviso 1 h antes'), 'Recordatorio activado en un paso');
await tabYEnter('Listo'); await paso('T5', 'Tab → «Listo» → Enter', h1Es('Ajustes'), 'Vuelve a Ajustes con aviso activo');
// B5 Reiniciar demo con confirmación
await tabYEnter('Opciones del evaluador'); await tabYEnter('Reiniciar demo', 5);
await paso('B5', '«Opciones del evaluador» → «Reiniciar demo»', async () => (await page.locator('[role="dialog"]').count()) === 1, 'Pide confirmación antes de reiniciar');
ultimoFoco = await foco(); await page.keyboard.press('Enter'); await page.waitForTimeout(150);
await paso('B5', 'Enter en «Reiniciar» (foco inicial del diálogo)', hayTexto('Todavía no tienes una tutoría'), 'Vuelve al estado inicial');

// Lighthouse con el Chromium de Playwright
const lhBase = path.join(out, 'lighthouse-v2');
// spawn asíncrono: el servidor local sigue respondiendo mientras corre Lighthouse
console.log('Ejecutando Lighthouse (1-2 min)...');
const lh = await new Promise(resolve => {
  const args = ['-y', 'lighthouse', url, '--only-categories=accessibility', '--output=html', '--output=json', `--output-path=${lhBase}`,
    '--chrome-flags="--headless=new --no-sandbox"', '--quiet', '--no-enable-error-reporting'];
  const ch = spawn('npx', args, { env: { ...process.env, CHROME_PATH: chromium.executablePath() }, shell: true });
  let stderr = ''; ch.stderr.on('data', d => { stderr += d; });
  const t = setTimeout(() => ch.kill(), 300000);
  ch.on('close', code => { clearTimeout(t); resolve({ code, stderr }); });
});
let lhScore = null, lhFallas = [];
if (fs.existsSync(lhBase + '.report.json')) {
  const j = JSON.parse(fs.readFileSync(lhBase + '.report.json', 'utf8'));
  lhScore = Math.round(j.categories.accessibility.score * 100);
  lhFallas = j.categories.accessibility.auditRefs.map(a => j.audits[a.id]).filter(a => a.score !== null && a.score < 1).map(a => clean(a.title));
  const p2 = await context.newPage(); await p2.setViewportSize({ width: 1280, height: 900 });
  await p2.goto('file:///' + (lhBase + '.report.html').replace(/\\/g, '/')); await p2.waitForTimeout(2000);
  await p2.screenshot({ path: path.join(out, 'lighthouse-v2.png') });
} else console.log('Lighthouse no se pudo ejecutar:', (lh.stderr || '').slice(0, 300));

await browser.close(); server.close();

const focoOk = pasos.filter(p => p.foco.visible).length;
let md = '# Verificación automática · TutoUTA v2 (issue #17)\n\n';
md += `- Fecha: ${new Date().toLocaleString('es-EC')} · Viewport 390 × 844 · Navegador: Chromium (Playwright)\n`;
md += `- **Recorrido T1–T5 solo con teclado:** ${pasos.length - fallos} de ${pasos.length} pasos correctos\n`;
md += `- **Foco visible (contorno ≥ 2 px) en el elemento enfocado:** ${focoOk} de ${pasos.length} pasos\n`;
md += `- **axe-core (WCAG 2.2 A/AA):** ${axeTotal.size} reglas incumplidas en ${pasos.length} pantallas revisadas\n`;
md += `- **Lighthouse accesibilidad:** ${lhScore == null ? 'no ejecutado' : `**${lhScore} / 100**`}${lhFallas.length ? ` · auditorías no superadas: ${lhFallas.join('; ')}` : ''}\n\n`;
md += '## Recorrido paso a paso (solo teclado)\n| # | Tarea | Acción | Resultado esperado | Pantalla (h1) | Control enfocado con teclado | Foco visible | axe | OK | Captura |\n|---|---|---|---|---|---|---|---|---|---|\n';
pasos.forEach(p => { md += `| ${p.n} | ${p.tarea} | ${p.accion} | ${p.esperado} | ${p.h1} | ${clean(p.foco.txt)} | ${p.foco.visible ? 'sí' : 'no'} | ${p.axe} | ${p.ok ? '✅' : '❌'} | pasos/${p.shot} |\n`; });
md += '\n## Incumplimientos de axe-core\n';
if (!axeTotal.size) md += 'Ninguno: 0 violaciones en todas las pantallas del recorrido.\n';
else { md += '| Regla | Impacto | Descripción | Pantallas |\n|---|---|---|---|\n'; for (const [k, v] of axeTotal) { const [id, imp, help] = k.split('|'); md += `| ${id} | ${imp} | ${clean(help)} | ${[...new Set(v)].join('<br>')} |\n`; } }
md += '\n> Criterio de aceptación de #17: reporte automático sin errores críticos. Los criterios de B9 (teclado, Esc, foco visible) se comprueban en el recorrido.\n';
fs.writeFileSync(path.join(out, 'verificacion-v2.md'), md);
console.log('\n' + md.split('\n## Recorrido')[0]);
