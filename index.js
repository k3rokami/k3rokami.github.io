const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const GH_USER = 'k3rokami';
const GH = 'https://github.com/' + GH_USER;
const DISCORD = 'k3rokami';

/* ---- EDIT HERE ---- */
// ABOUT — edit these. paragraphs = array of strings; facts = label/value pairs.
const about = {
  paragraphs: [
    'Placeholder — write 2–3 sentences in your own voice: who you are and how you got into building things.',
    'Placeholder — what you care about: the kind of work you want to do, what you find fun, what you are learning right now.',
    'Placeholder — a line of personality: a hobby, what you do away from the keyboard, anything that makes you you.'
  ],
  facts: [
    { k: 'Location', v: 'Remote' },
    { k: 'Focus', v: 'Web front-ends & VR' },
    { k: 'Languages', v: '中文 / English / 日本語' },
    { k: 'Currently', v: 'Open to work' },
    { k: 'Off-screen', v: 'Placeholder hobby' }
  ]
};
const stats = [
  { n: 4, suffix: '+', k: 'years coding' },
  { n: 10, suffix: '+', k: 'projects built' },
  { n: 3, suffix: '', k: 'languages spoken' },
  { n: 99, suffix: '+', k: 'cups of coffee' }
];
// tech stack comes from the shared stack-data.js (also used by resume.html)
const DEVICON = (window.STACK_DATA && window.STACK_DATA.DEVICON) || (n => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`);
const stackGroups = (window.STACK_DATA && window.STACK_DATA.groups) || [];
// flat list kept for the terminal `stack` command
const stack = (window.STACK_DATA && window.STACK_DATA.flat) || [];

/* ==========================================================================
   PROJECTS — add / remove freely by editing the myProjects array below.
   Each project (all fields optional except title):
     title    : card heading
     desc     : one or two lines
     stack    : array of tech tags, e.g. ['Unity','C#']
     lang     : used by the filter tabs, e.g. 'JavaScript' (defaults to 'Other')
     repo     : source URL (top-right GitHub icon) — leave '' for none
     live     : live/demo URL (top-right ↗ icon, and whole-card click target)
     featured : true = card spans two columns (use on one project)
     stars    : number shown with a ★ (0 hides it)
   PROJECT_MODE:
     'manual' : show only the myProjects list below  (full control — default)
     'github' : show only repos pulled from GitHub
     'both'   : myProjects first, then GitHub repos after
   ========================================================================== */
// project data comes from the shared projects-data.js (also used by projects.html)
const PROJECT_MODE = (window.PROJECTS_DATA && window.PROJECTS_DATA.PROJECT_MODE) || 'manual';
const TEASER_COUNT = (window.PROJECTS_DATA && window.PROJECTS_DATA.TEASER_COUNT) || 6;
const myProjects = (window.PROJECTS_DATA && window.PROJECTS_DATA.projects) || [];
const timeline = [
  { when: '2024 — now', title: 'Independent Developer', desc: 'Web front-ends and VRChat content; personal tools and open-source experiments.' },
  { when: '2022 — 2024', title: 'VRChat Creator', desc: 'Avatars and worlds in Unity; learned C#, optimization, and the VRChat SDK pipeline.' },
  { when: '2020 — 2022', title: 'Learning to Code', desc: 'HTML/CSS/JS, small sites and scripts, then Git and real projects.' }
];
const EMAIL = 'leongjunhong2002@gmail.com';          // <-- set your real email
const LINKEDIN = 'https://www.linkedin.com/in/leongjunhong';  // <-- set your LinkedIn URL
// inline SVGs use currentColor so they tint with the theme (unlike <img>)
const liIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`;
const mailIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>`;
const socials = [
  { name: 'GitHub', text: '@' + GH_USER, url: GH },   // no svg = render uses the ghIcon fallback
  { name: 'LinkedIn', text: 'Connect', svg: liIcon, url: LINKEDIN },
  { name: 'Email', text: '', svg: mailIcon, copy: EMAIL }   // button: click to copy
];
/* ---- END EDIT ---- */

const ghIcon = `<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

/* ===== THEME ===== */
/* ===== OS-AWARE PALETTE HINT ===== */
const uaStr = (navigator.platform || '') + ' ' + (navigator.userAgent || '');
const isMac = /Mac|iPhone|iPod|iPad/i.test(uaStr);
const isWin = /Win/i.test(uaStr);
const isLinux = /Linux|X11/i.test(uaStr) && !/Android/i.test(uaStr);
// label: Mac uses ⌘; Win/Linux use Ctrl. Glyph is decorative per OS.
const osGlyph = isMac ? '⌘' : isWin ? '⊞' : isLinux ? '🐧' : '';
const palKbdText = isMac ? '⌘K' : 'Ctrl K';
(function osHint(){
  const sym = document.querySelector('#paletteBtn .pal-sym');
  const palKbd = document.getElementById('palKbd');
  const leadKbd = document.getElementById('leadKbd');
  if (sym) sym.textContent = isMac ? '' : osGlyph;   // Mac glyph already in the kbd label; Win/Linux show their mascot glyph
  if (palKbd) palKbd.textContent = palKbdText;
  if (leadKbd) leadKbd.textContent = (isMac ? '⌘' : 'Ctrl') + ' K';
})();

const themeBtn = document.getElementById('themeBtn');
function applyTheme(t) { document.documentElement.setAttribute('data-theme', t); themeBtn.textContent = t === 'dark' ? '🌙' : '☀️'; localStorage.setItem('kk-theme', t); }
applyTheme(localStorage.getItem('kk-theme') || 'dark');
themeBtn.onclick = () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');

/* ===== ROLE TYPEWRITER ===== */
const phrases = ['const dev = "Kurokami";', 'ship web UI.', 'build VR worlds.', '中文 / English / 日本語'];
const roleEl = document.getElementById('role');
if (reduceMotion) roleEl.textContent = phrases[0];
else { let pi=0,ci=0,del=false; (function t(){ const w=phrases[pi]; roleEl.textContent=w.slice(0,ci);
  if(!del&&ci<w.length){ci++;setTimeout(t,70);} else if(!del){del=true;setTimeout(t,1500);} else if(ci>0){ci--;setTimeout(t,35);} else {del=false;pi=(pi+1)%phrases.length;setTimeout(t,250);} })(); }

/* ===== STATS COUNT-UP ===== */
const statsEl = document.getElementById('stats');
stats.forEach(s => { const d=document.createElement('div'); d.className='stat'; d.innerHTML=`<div class="n" data-n="${s.n}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="k">${s.k}</div>`; statsEl.appendChild(d); });
const statIO = new IntersectionObserver(es => es.forEach(e => { if(!e.isIntersecting) return; const el=e.target, target=+el.dataset.n, sfx=el.dataset.suffix; if(reduceMotion){ el.textContent=target+sfx; statIO.unobserve(el); return; } let v=0; const step=Math.max(1,Math.round(target/40)); const iv=setInterval(()=>{ v+=step; if(v>=target){v=target;clearInterval(iv);} el.textContent=v+sfx; },25); statIO.unobserve(el); }), { threshold: .5 });
document.querySelectorAll('.stat .n').forEach(el => statIO.observe(el));

/* ===== STACK ===== */
const stackEl = document.getElementById('stackList');
stackGroups.forEach(g => {
  const wrap = document.createElement('div'); wrap.className = 'stack-group';
  const h = document.createElement('h3'); h.className = 'stack-group-title'; h.textContent = g.group;
  const row = document.createElement('div'); row.className = 'stack-row-icons';
  g.items.forEach(it => {
    const c = document.createElement('span'); c.className = 'chip chip-icon';
    const icon = it.icon
      ? `<img class="chip-img" src="${DEVICON(it.icon)}" alt="" loading="lazy" onerror="this.remove()">`
      : `<b>#</b>`;
    c.innerHTML = `${icon} ${esc(it.name)}`;
    row.appendChild(c);
  });
  wrap.appendChild(h); wrap.appendChild(row); stackEl.appendChild(wrap);
});

/* ===== ABOUT ===== */
const aboutText = document.getElementById('aboutText');
const aboutFacts = document.getElementById('aboutFacts');
if (aboutText) aboutText.innerHTML = about.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
if (aboutFacts) aboutFacts.innerHTML = about.facts.map(f => `<li><span class="fk">${esc(f.k)}</span><span class="fv">${esc(f.v)}</span></li>`).join('');

/* ===== PROJECTS (live GitHub + fallback) ===== */
const grid = document.getElementById('projectGrid');
const filtersEl = document.getElementById('filters');
let allProjects = [];

function cardHTML(p, i) {
  const repoLink = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" title="Source">${ghIcon}</a>` : '';
  const liveLink = p.live ? `<a href="${p.live}" ${p.live.startsWith('http')?'target="_blank" rel="noopener"':''} title="Live">↗</a>` : '';
  const starHTML = p.stars ? `<span class="meta"><span class="star">★</span>${p.stars}</span>` : '';
  const row = p.stack.map(s => `<span>${esc(s)}</span>`).join('');
  return `<div class="langbar"></div>
    <div class="ptop"><span class="folder">▸</span><span class="meta">${starHTML}<span class="ext">${repoLink}${liveLink}</span></span></div>
    <div class="body"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="stack-row">${row}</div></div>`;
}

function renderProjects(list) {
  grid.innerHTML = '';
  list.forEach((p, i) => {
    const c=document.createElement('article'); c.className='card reveal'+(p.featured?' featured':''); c.dataset.lang=p.lang||'Other'; c.style.transitionDelay=(i*60)+'ms'; c.innerHTML=cardHTML(p,i);
    const target = p.live || p.repo;
    if (target) {
      c.classList.add('clickable');
      c.addEventListener('click', e => {
        if (e.target.closest('a')) return; // let top-right icon links handle their own click
        if (target.startsWith('http')) open(target,'_blank'); else location.href=target;
      });
    }
    // keep top-right links from also triggering the card click
    c.querySelectorAll('.ext a').forEach(a => a.addEventListener('click', e => e.stopPropagation()));
    grid.appendChild(c);
  });
  wireReveal(); wireTilt(); buildFilters(list);
}

function buildFilters(list) {
  const langs = ['All', ...Array.from(new Set(list.map(p => p.lang||'Other')))];
  const counts = {}; list.forEach(p => counts[p.lang||'Other']=(counts[p.lang||'Other']||0)+1);
  filtersEl.innerHTML = langs.map((l,i) => `<button class="filter${i===0?' active':''}" data-f="${l}">${l}<span class="c">${l==='All'?list.length:counts[l]}</span></button>`).join('');
  filtersEl.querySelectorAll('.filter').forEach(b => b.onclick = () => {
    filtersEl.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    const f=b.dataset.f;
    grid.querySelectorAll('.card').forEach(c => c.classList.toggle('hide', f!=='All' && c.dataset.lang!==f));
  });
}

async function fetchGitHub() {
  const r = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`);
  if (!r.ok) throw new Error('gh ' + r.status);
  return (await r.json())
    .filter(x => !x.fork && !x.archived)
    .sort((a,b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at)-new Date(a.pushed_at))
    .slice(0, 8)
    .map(x => ({
      title: x.name, desc: x.description || 'No description provided.',
      stack: [x.language, ...(x.topics||[]).slice(0,3)].filter(Boolean),
      lang: x.language || 'Other', repo: x.html_url, live: x.homepage || '', stars: x.stargazers_count,
      featured: false, pushed: x.pushed_at
    }));
}

async function loadProjects() {
  // manual: just your list — total control, no network needed
  if (PROJECT_MODE === 'manual') { allProjects = myProjects.slice(); renderProjects(allProjects.slice(0, TEASER_COUNT)); showViewAll(allProjects.length); return; }

  // github / both: try the API, fall back to your list if it fails
  let repos = [];
  try { repos = await fetchGitHub(); } catch (e) { repos = []; }

  if (PROJECT_MODE === 'both') {
    allProjects = [...myProjects, ...repos];
  } else { // 'github'
    allProjects = repos.length ? repos : myProjects.slice();
    if (PROJECT_MODE === 'github' && repos.length && !allProjects.some(p => p.featured)) allProjects[0].featured = true;
  }
  renderProjects(allProjects.slice(0, TEASER_COUNT));
  showViewAll(allProjects.length);
}

// "View all projects →" button under the teaser grid, shown when there are more
function showViewAll(total) {
  const sec = document.getElementById('projects'); if (!sec) return;
  let link = document.getElementById('viewAllProjects');
  if (!link) {
    link = document.createElement('a'); link.id = 'viewAllProjects'; link.className = 'btn ghost view-all';
    link.href = './projects.html';
    sec.appendChild(link);
  }
  link.textContent = total > TEASER_COUNT ? `View all ${total} projects →` : 'View all projects →';
}
loadProjects();

/* ===== TIMELINE ===== */
const tl = document.getElementById('timeline');
timeline.forEach(t => { const d=document.createElement('div'); d.className='tl-item'; d.innerHTML=`<div class="when">${esc(t.when)}</div><h4>${esc(t.title)}</h4><p>${esc(t.desc)}</p>`; tl.appendChild(d); });

/* ===== SOCIALS (click to copy) ===== */
const socialWrap = document.getElementById('socials');
socials.forEach(s => {
  const a = document.createElement(s.url ? 'a' : 'button'); a.className='social';
  if (s.url) { a.href=s.url; a.target='_blank'; a.rel='noopener'; }
  const icon = s.svg ? s.svg : s.icon ? `<img src="${s.icon}" alt="${esc(s.name)}">` : ghIcon;
  a.innerHTML = `${icon}<span>${esc(s.name)}</span><span style="opacity:.5" class="val">${esc(s.text)}</span>`;
  if (s.copy) a.onclick = () => { navigator.clipboard?.writeText(s.copy); const v=a.querySelector('.val'); const old=v.textContent; v.textContent='copied ✓'; v.classList.add('copied'); setTimeout(()=>{v.textContent=old;v.classList.remove('copied');},1200); };
  socialWrap.appendChild(a);
});

/* ===== INTERACTIVE TERMINAL ===== */
const screen = document.getElementById('termScreen');
const tin = document.getElementById('termInput');
const history = [];
let hIdx = 0;
function print(html) { const d=document.createElement('div'); d.className='line'; d.innerHTML=html; screen.appendChild(d); screen.scrollTop=screen.scrollHeight; }
const commands = {
  help: () => print(`<span class="t-com">commands:</span> help, whoami, about, projects, stack, social, resume, open &lt;github|links&gt;, theme, clear`),
  resume: () => { print('opening resume…'); location.href='./resume.html'; },
  whoami: () => print('kurokami — web &amp; VR developer'),
  about: () => print('I build web front-ends, VRChat worlds &amp; avatars, and small tools. 中文 / EN / 日本語.'),
  stack: () => print('<span class="t-key">stack</span>: ' + stack.map(esc).join(', ')),
  projects: () => { if(!allProjects.length){print('loading…');return;} allProjects.forEach(p => print(`<span class="t-prompt">▸</span> <span class="t-key">${esc(p.title)}</span> <span class="t-com">[${esc(p.lang)}]</span>${p.stars?` <span class="t-num">★${p.stars}</span>`:''}`)); },
  social: () => socials.forEach(s => print(`<span class="t-key">${esc(s.name)}</span>: ${esc(s.text)}`)),
  theme: () => { themeBtn.click(); print('theme → ' + document.documentElement.getAttribute('data-theme')); },
  clear: () => { screen.innerHTML=''; boot(false); },
  open: (arg) => {
    if (arg==='github') { print('opening GitHub…'); open(GH,'_blank'); }
    else if (arg==='links') { print('opening ~/links…'); location.href='./index.html'; }
    else print(`<span class="t-err">usage: open &lt;github|links&gt;</span>`);
  }
};
function run(raw) {
  const cmd = raw.trim(); if (!cmd) return;
  print(`<span class="t-prompt">$</span> ${esc(cmd)}`);
  history.push(cmd); hIdx = history.length;
  const [name, ...rest] = cmd.split(/\s+/);
  if (commands[name]) commands[name](rest.join(' ').toLowerCase());
  else print(`<span class="t-err">command not found: ${esc(name)}</span> <span class="t-com">— try 'help'</span>`);
}
function boot(withHello=true) {
  print(`<span class="t-com"># kurokami@dev — interactive. type 'help'.</span>`);
  if (withHello) { print(`<span class="t-prompt">$</span> whoami`); commands.whoami(); }
}
boot();
tin.addEventListener('keydown', e => {
  if (e.key==='Enter') { run(tin.value); tin.value=''; }
  else if (e.key==='ArrowUp') { if(hIdx>0){hIdx--;tin.value=history[hIdx]||'';e.preventDefault();} }
  else if (e.key==='ArrowDown') { if(hIdx<history.length){hIdx++;tin.value=history[hIdx]||'';} }
});
document.querySelector('.terminal').addEventListener('click', () => tin.focus());

/* ===== COMMAND PALETTE ===== */
const palette = document.getElementById('palette');
const palInput = document.getElementById('palInput');
const palList = document.getElementById('palList');
const palActions = [
  { ic:'→', label:'Go to Projects', run:()=>jump('#projects') },
  { ic:'→', label:'Go to About', run:()=>jump('#about') },
  { ic:'→', label:'Go to Tech stack', run:()=>jump('#stack') },
  { ic:'→', label:'Go to Experience', run:()=>jump('#experience') },
  { ic:'→', label:'Go to Contact', run:()=>jump('#contact') },
  { ic:'¶', label:'Open Resume', hint:'↗', run:()=>location.href='./resume.html' },
  { ic:'↑', label:'Back to top', run:()=>jump('#top') },
  { ic:'◐', label:'Toggle theme', run:()=>themeBtn.click() },
  { ic:ghIcon, label:'Open GitHub', hint:'↗', run:()=>open(GH,'_blank') },
  { ic:'~', label:'Open link page', run:()=>location.href='./index.html' },
  { ic:'⧉', label:'Copy Discord handle', run:()=>navigator.clipboard?.writeText(DISCORD) }
];
let palSel = 0;
function jump(sel){ document.querySelector(sel)?.scrollIntoView({behavior:'smooth'}); }
function openPalette(){ palette.classList.add('open'); palInput.value=''; renderPal(''); palInput.focus(); }
function closePalette(){ palette.classList.remove('open'); }
function renderPal(q){
  const items = palActions.filter(a => a.label.toLowerCase().includes(q.toLowerCase()));
  palSel = 0;
  palList.innerHTML = items.map((a,i) => `<div class="pal-item${i===0?' sel':''}" data-i="${palActions.indexOf(a)}"><span class="ic">${a.ic}</span>${esc(a.label)}${a.hint?`<span class="hint">${a.hint}</span>`:''}</div>`).join('') || `<div class="pal-item"><span class="ic">∅</span>no matches</div>`;
  palList.querySelectorAll('.pal-item[data-i]').forEach(el => el.onclick = () => { palActions[+el.dataset.i].run(); closePalette(); });
}
palInput.addEventListener('input', () => renderPal(palInput.value));
palInput.addEventListener('keydown', e => {
  const items = [...palList.querySelectorAll('.pal-item[data-i]')]; if(!items.length) return;
  if (e.key==='ArrowDown'){ e.preventDefault(); palSel=(palSel+1)%items.length; }
  else if (e.key==='ArrowUp'){ e.preventDefault(); palSel=(palSel-1+items.length)%items.length; }
  else if (e.key==='Enter'){ e.preventDefault(); palActions[+items[palSel].dataset.i].run(); closePalette(); return; }
  items.forEach((el,i)=>el.classList.toggle('sel',i===palSel));
  items[palSel].scrollIntoView({block:'nearest'});
});
document.getElementById('paletteBtn').onclick = openPalette;
palette.addEventListener('click', e => { if(e.target===palette) closePalette(); });
addEventListener('keydown', e => {
  if ((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k') { e.preventDefault(); palette.classList.contains('open')?closePalette():openPalette(); }
  else if (e.key==='/' && document.activeElement.tagName!=='INPUT') { e.preventDefault(); openPalette(); }
  else if (e.key==='Escape') closePalette();
});

/* ===== RIPPLE / REVEAL / TILT / PROGRESS / TOTOP ===== */
function wireReveal(){ const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);} }),{threshold:.1}); document.querySelectorAll('.reveal:not(.show)').forEach(el=>io.observe(el)); }
function wireTilt(){ if(reduceMotion) return; document.querySelectorAll('.card').forEach(card=>{ card.onmousemove=e=>{ const r=card.getBoundingClientRect(); const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5; card.style.transform=`perspective(900px) rotateY(${px*5}deg) rotateX(${-py*5}deg) translateY(-4px)`; }; card.onmouseleave=()=>card.style.transform=''; }); }
wireReveal();
document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', e => { if(reduceMotion) return; const r=document.createElement('span'); r.className='ripple'; const rc=btn.getBoundingClientRect(), sz=Math.max(rc.width,rc.height); r.style.width=r.style.height=sz+'px'; r.style.left=(e.clientX-rc.left-sz/2)+'px'; r.style.top=(e.clientY-rc.top-sz/2)+'px'; btn.appendChild(r); setTimeout(()=>r.remove(),600); }));
const toTop=document.getElementById('toTop');
addEventListener('scroll', () => { const h=document.documentElement; toTop.classList.toggle('show', h.scrollTop>500); }, { passive:true });
toTop.onclick = () => scrollTo({ top:0, behavior:'smooth' });

/* ===== CURSOR SPOTLIGHT ===== */
if (!reduceMotion) addEventListener('pointermove', e => { document.documentElement.style.setProperty('--spot-x', e.clientX+'px'); document.documentElement.style.setProperty('--spot-y', e.clientY+'px'); }, { passive:true });

/* ===== PETALS ===== */
(function petals(){ if(reduceMotion) return; const cv=document.getElementById('petals'),ctx=cv.getContext('2d'); let w,h,parts;
  function resize(){ w=cv.width=innerWidth; h=cv.height=innerHeight; parts=Array.from({length:Math.min(24,Math.floor(w/55))},spawn); }
  function spawn(){ return {x:Math.random()*w,y:Math.random()*h,r:3+Math.random()*4,sp:.3+Math.random()*.8,sway:Math.random()*6.28,swaySp:.01+Math.random()*.025,rot:Math.random()*3,rotSp:(Math.random()-.5)*.03,op:.14+Math.random()*.28}; }
  function petal(c,r){ c.beginPath();c.moveTo(0,0);c.bezierCurveTo(r*.5,-r*.5,r,-r*.2,r,r*.4);c.bezierCurveTo(r,r,r*.3,r*1.2,0,r*.9);c.bezierCurveTo(-r*.3,r*1.2,-r,r,-r,r*.4);c.bezierCurveTo(-r,-r*.2,-r*.5,-r*.5,0,0);c.closePath(); }
  let raf = 0;
  function frame(){ ctx.clearRect(0,0,w,h); parts.forEach(p=>{ p.y+=p.sp;p.sway+=p.swaySp;p.x+=Math.sin(p.sway)*.5;p.rot+=p.rotSp; if(p.y>h+20)Object.assign(p,spawn(),{y:-20,x:Math.random()*w}); ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.globalAlpha=p.op;ctx.fillStyle='#F48FB1';petal(ctx,p.r);ctx.fill();ctx.restore(); }); raf=requestAnimationFrame(frame); }
  function startFrames(){ if(!raf) raf=requestAnimationFrame(frame); }
  function stopFrames(){ if(raf){ cancelAnimationFrame(raf); raf=0; } }
  document.addEventListener('visibilitychange', () => document.hidden ? stopFrames() : startFrames());
  addEventListener('resize',resize); resize(); startFrames();
})();

/* ===== LOADING OVERLAY ===== */
(function loader(){
  const el = document.getElementById('loader');
  if (!el) return;
  const start = Date.now();
  const MIN = reduceMotion ? 0 : 900;
  const logEl = document.getElementById('loaderLog');
  const fill = document.getElementById('loaderFill');

  /* ---- boot log (idea: casting a spell == booting the site) ---- */
  const lines = [
    `<span class="pk">$</span> summon kurokami.dev`,
    `  <span class="ok">✓</span> grimoire linked`,
    `  <span class="ok">✓</span> mana channels open`,
    `  <span class="ok">✓</span> petals enchanted`,
    `<span class="pk">spell cast.</span> entering…`
  ];
  if (reduceMotion) {
    logEl.innerHTML = lines.join('\n');
  } else {
    let li = 0;
    (function typeLine(){
      if (li >= lines.length) return;
      logEl.innerHTML = lines.slice(0, li).join('\n') + (li ? '\n' : '') + lines[li] + '<span class="cur">&nbsp;</span>';
      // keep only last 4 lines visible
      const shown = logEl.innerHTML.split('\n'); if (shown.length > 5) logEl.innerHTML = shown.slice(-5).join('\n');
      li++;
      setTimeout(typeLine, 230);
    })();
  }

  /* ---- real progress bar (count assets actually loaded) ---- */
  const assets = [...document.images, ...document.querySelectorAll('canvas')];
  const total = Math.max(1, document.images.length);
  let loaded = 0;
  function bump(){ loaded++; setFill(loaded / total); }
  function setFill(r){ if (fill) fill.style.transform = 'scaleX(' + Math.min(1, Math.max(0, r)) + ')'; }
  [...document.images].forEach(img => {
    if (img.complete) bump();
    else { img.addEventListener('load', bump); img.addEventListener('error', bump); }
  });
  setFill(0.08); // show a little immediately so it never reads as stuck

  /* ---- mini petals behind the mage ---- */
  (function miniPetals(){
    if (reduceMotion) return;
    const cv = document.getElementById('loaderPetals'); if (!cv) return;
    const ctx = cv.getContext('2d'); let w, h, parts, raf = 0;
    function resize(){ w = cv.width = el.clientWidth; h = cv.height = el.clientHeight; parts = Array.from({length: 14}, spawn); }
    function spawn(){ return { x: Math.random()*w, y: Math.random()*h, r: 2+Math.random()*3, sp: .25+Math.random()*.6, sway: Math.random()*6.28, swaySp: .015+Math.random()*.02, rot: Math.random()*3, rotSp: (Math.random()-.5)*.03, op: .1+Math.random()*.22 }; }
    function petal(c, r){ c.beginPath(); c.moveTo(0,0); c.bezierCurveTo(r*.5,-r*.5,r,-r*.2,r,r*.4); c.bezierCurveTo(r,r,r*.3,r*1.2,0,r*.9); c.bezierCurveTo(-r*.3,r*1.2,-r,r,-r,r*.4); c.bezierCurveTo(-r,-r*.2,-r*.5,-r*.5,0,0); c.closePath(); }
    function frame(){ ctx.clearRect(0,0,w,h); parts.forEach(p => { p.y+=p.sp; p.sway+=p.swaySp; p.x+=Math.sin(p.sway)*.4; p.rot+=p.rotSp; if(p.y>h+14) Object.assign(p, spawn(), {y:-14, x:Math.random()*w}); ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.globalAlpha=p.op; ctx.fillStyle='#F48FB1'; petal(ctx,p.r); ctx.fill(); ctx.restore(); }); raf=requestAnimationFrame(frame); }
    resize(); frame();
    el._stopPetals = () => { if(raf) cancelAnimationFrame(raf); };
  })();

  function hide(){
    const wait = Math.max(0, MIN - (Date.now() - start));
    setTimeout(() => {
      setFill(1);
      el.classList.add('done');
      if (el._stopPetals) el._stopPetals();
      setTimeout(() => el.remove(), 600);
    }, wait);
  }
  if (document.readyState === 'complete') hide();
  else addEventListener('load', hide);
  setTimeout(hide, 6000);  // safety: never trap the user
})();

/* ===== PAUSE AURORA WHEN TAB HIDDEN ===== */
document.addEventListener('visibilitychange', () => document.documentElement.classList.toggle('bg-paused', document.hidden));
