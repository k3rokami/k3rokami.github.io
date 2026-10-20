const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const GH_USER = 'k3rokami';
const GH = 'https://github.com/' + GH_USER;
const DISCORD = 'k3rokami';

/* ---- EDIT HERE ---- */
const stats = [
  { n: 5, suffix: '+', k: 'years coding' },
  { n: 20, suffix: '+', k: 'projects built' },
  { n: 3, suffix: '', k: 'languages spoken' },
  { n: 99, suffix: '+', k: 'cups of coffee' }
];
const stack = ['JavaScript','HTML5','CSS / SCSS','C#','Unity','VRChat SDK','Git','PHP','Node.js','REST APIs','Responsive UI','Figma'];

// fallback projects (used if GitHub API fails or for non-repo work)
const fallbackProjects = [
  { title: 'Personal Link Page', desc: 'Config-driven link-in-bio built with vanilla JS: randomized animated backgrounds, trilingual bio, zero dependencies. On GitHub Pages.', stack: ['JavaScript','HTML','SCSS'], lang: 'JavaScript', featured: true, repo: GH + '/k3rokami.github.io', live: './index.html', stars: 0 },
  { title: 'VRChat Avatars', desc: 'Custom avatars via the VRChat SDK — expression menus, toggles, PhysBones, perf-optimized rigs.', stack: ['Unity','C#','VRChat SDK'], lang: 'C#', repo: '', live: 'https://vrchat.com/home/user/usr_37ef9e8e-c51a-4fdd-b008-dd8bae1c0394', stars: 0 },
  { title: 'VRChat Worlds', desc: 'Interactive VR spaces with Udon logic, optimized lighting and props.', stack: ['Unity','Udon','C#'], lang: 'C#', repo: '', live: '', stars: 0 }
];
const timeline = [
  { when: '2024 — now', title: 'Independent Developer', desc: 'Web front-ends and VRChat content; personal tools and open-source experiments.' },
  { when: '2022 — 2024', title: 'VRChat Creator', desc: 'Avatars and worlds in Unity; learned C#, optimization, and the VRChat SDK pipeline.' },
  { when: '2020 — 2022', title: 'Learning to Code', desc: 'HTML/CSS/JS, small sites and scripts, then Git and real projects.' }
];
const socials = [
  { name: 'GitHub', text: '@' + GH_USER, icon: '', url: GH },
  { name: 'Discord', text: DISCORD, icon: './Icons/Discord.svg', copy: DISCORD },
  { name: 'Twitter', text: '@k3rokami', icon: './Icons/Twitter.png', url: 'https://twitter.com/k3rokami' },
  { name: 'Steam', text: 'Kurokami', icon: './Icons/Steam.png', url: 'https://steamcommunity.com/id/k3rokami/' }
];
/* ---- END EDIT ---- */

const ghIcon = `<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

/* ===== THEME ===== */
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
stack.forEach(s => { const c=document.createElement('span'); c.className='chip'; c.innerHTML=`<b>#</b> ${esc(s)}`; stackEl.appendChild(c); });

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
  list.forEach((p, i) => { const c=document.createElement('article'); c.className='card reveal'+(p.featured?' featured':''); c.dataset.lang=p.lang||'Other'; c.style.transitionDelay=(i*60)+'ms'; c.innerHTML=cardHTML(p,i); grid.appendChild(c); });
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

async function loadGitHub() {
  try {
    const r = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`);
    if (!r.ok) throw new Error('gh ' + r.status);
    const repos = (await r.json())
      .filter(x => !x.fork && !x.archived)
      .sort((a,b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at)-new Date(a.pushed_at))
      .slice(0, 8)
      .map(x => ({
        title: x.name, desc: x.description || 'No description provided.',
        stack: [x.language, ...(x.topics||[]).slice(0,3)].filter(Boolean),
        lang: x.language || 'Other', repo: x.html_url, live: x.homepage || '', stars: x.stargazers_count,
        featured: false, pushed: x.pushed_at
      }));
    if (!repos.length) throw new Error('no repos');
    if (repos[0]) repos[0].featured = true;
    allProjects = repos;
  } catch (e) {
    allProjects = fallbackProjects;
  }
  renderProjects(allProjects);
}
loadGitHub();

/* ===== TIMELINE ===== */
const tl = document.getElementById('timeline');
timeline.forEach(t => { const d=document.createElement('div'); d.className='tl-item'; d.innerHTML=`<div class="when">${esc(t.when)}</div><h4>${esc(t.title)}</h4><p>${esc(t.desc)}</p>`; tl.appendChild(d); });

/* ===== SOCIALS (click to copy) ===== */
const socialWrap = document.getElementById('socials');
socials.forEach(s => {
  const a = document.createElement(s.url ? 'a' : 'button'); a.className='social';
  if (s.url) { a.href=s.url; a.target='_blank'; a.rel='noopener'; }
  const icon = s.icon ? `<img src="${s.icon}" alt="${esc(s.name)}">` : ghIcon;
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
  help: () => print(`<span class="t-com">commands:</span> help, whoami, about, projects, stack, social, open &lt;github|links&gt;, theme, clear`),
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
  { ic:'→', label:'Go to Tech stack', run:()=>jump('#stack') },
  { ic:'→', label:'Go to Experience', run:()=>jump('#experience') },
  { ic:'→', label:'Go to Contact', run:()=>jump('#contact') },
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
const prog=document.getElementById('progress'), toTop=document.getElementById('toTop');
addEventListener('scroll', () => { const h=document.documentElement; const pct=h.scrollTop/(h.scrollHeight-h.clientHeight)*100; prog.style.width=pct+'%'; toTop.classList.toggle('show', h.scrollTop>500); }, { passive:true });
toTop.onclick = () => scrollTo({ top:0, behavior:'smooth' });

/* ===== CURSOR SPOTLIGHT ===== */
if (!reduceMotion) addEventListener('pointermove', e => { document.documentElement.style.setProperty('--spot-x', e.clientX+'px'); document.documentElement.style.setProperty('--spot-y', e.clientY+'px'); }, { passive:true });

/* ===== PETALS ===== */
(function petals(){ if(reduceMotion) return; const cv=document.getElementById('petals'),ctx=cv.getContext('2d'); let w,h,parts;
  function resize(){ w=cv.width=innerWidth; h=cv.height=innerHeight; parts=Array.from({length:Math.min(24,Math.floor(w/55))},spawn); }
  function spawn(){ return {x:Math.random()*w,y:Math.random()*h,r:3+Math.random()*4,sp:.3+Math.random()*.8,sway:Math.random()*6.28,swaySp:.01+Math.random()*.025,rot:Math.random()*3,rotSp:(Math.random()-.5)*.03,op:.14+Math.random()*.28}; }
  function petal(c,r){ c.beginPath();c.moveTo(0,0);c.bezierCurveTo(r*.5,-r*.5,r,-r*.2,r,r*.4);c.bezierCurveTo(r,r,r*.3,r*1.2,0,r*.9);c.bezierCurveTo(-r*.3,r*1.2,-r,r,-r,r*.4);c.bezierCurveTo(-r,-r*.2,-r*.5,-r*.5,0,0);c.closePath(); }
  function frame(){ ctx.clearRect(0,0,w,h); parts.forEach(p=>{ p.y+=p.sp;p.sway+=p.swaySp;p.x+=Math.sin(p.sway)*.5;p.rot+=p.rotSp; if(p.y>h+20)Object.assign(p,spawn(),{y:-20,x:Math.random()*w}); ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.globalAlpha=p.op;ctx.fillStyle='#F48FB1';petal(ctx,p.r);ctx.fill();ctx.restore(); }); requestAnimationFrame(frame); }
  addEventListener('resize',resize); resize(); frame();
})();
