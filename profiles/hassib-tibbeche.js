<<<<<<< HEAD
/* Final interactions:
   - subtle professional particles on hero canvas
   - headline fade+slide, typing effect (loop), subtitle delayed fade
   - reveal on scroll for sections
   - mobile nav toggle
   - project modals (open/close/ESC/focus)
   - project card hover animations (handled in CSS)
   - year insert
*/

document.addEventListener('DOMContentLoaded', () => {

=======
/* Updated JS: toggles 'scrolled' look on the header and keeps existing interactions */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header scrolled class handling ---------- */
  const headerInner = document.querySelector('.header-inner');
  const header = document.querySelector('.site-header');

  function onScrollHeader() {
    // add 'scrolled' once the page is scrolled past the header height
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 88;
    if (window.scrollY > (offset - 40)) {
      headerInner.classList.add('scrolled');
    } else {
      headerInner.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader(); // run once on load

  /* ---------- Existing behavior: particles, typing, reveals, modals, etc. ----------
     If you already have the rest of the JS (particles, typing, reveal observer, modals),
     keep it here. Below I re-attach the other functionality from your previous file.
  */

>>>>>>> develop
  /* ---------- 1) Subtle particle canvas (professional & slow) ---------- */
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w = canvas.width = canvas.clientWidth;
    let h = canvas.height = canvas.clientHeight;
    let particles = [];
    const density = Math.max(10, Math.floor((w * h) / 160000));

    function rand(a,b){ return Math.random()*(b-a)+a; }
    function createParticles(){
      particles = [];
      for(let i=0;i<density;i++){
        particles.push({
          x: rand(0,w), y: rand(0,h),
          r: rand(0.6,2.6), vx: rand(-0.12,0.12), vy: rand(-0.03,0.03),
          alpha: rand(0.04,0.14), hue: rand(190,260)
        });
      }
    }

    function resize(){
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
      createParticles();
    }
    window.addEventListener('resize', resize, {passive:true});
    resize();

    function draw(){
      ctx.clearRect(0,0,w,h);
      for(const p of particles){
        p.x += p.vx; p.y += p.vy;
        if(p.x < -20) p.x = w + 20;
        if(p.x > w + 20) p.x = -20;
        if(p.y < -20) p.y = h + 20;
        if(p.y > h + 20) p.y = -20;
        const grad = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*10);
        grad.addColorStop(0, `hsla(${p.hue},85%,60%,${p.alpha})`);
        grad.addColorStop(1, `hsla(${p.hue},80%,55%,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r*6, 0, Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

<<<<<<< HEAD
  /* ---------- 2) Headline & typing & staggered reveals ---------- */
  // typing loop for the phrase line
=======
  /* ---------- 2) Typing + reveals ---------- */
>>>>>>> develop
  const phrases = [
    "Creative Problem Solver",
    "Web Developer",
    "Engineer"
  ];
  const typedEl = document.getElementById('typed');
<<<<<<< HEAD
  const cursor = document.querySelector('.cursor');
=======
>>>>>>> develop
  let pIndex = 0, cIndex = 0, forward = true;

  function tick(){
    const txt = phrases[pIndex];
    if(forward){
      cIndex++;
      typedEl.textContent = txt.slice(0,cIndex);
      if(cIndex === txt.length){
        forward = false;
        setTimeout(tick, 900);
        return;
      }
    } else {
      cIndex--;
      typedEl.textContent = txt.slice(0,cIndex);
      if(cIndex === 0){
        forward = true;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, forward ? 80 : 40);
  }
<<<<<<< HEAD
  // start typing after a slight delay so headline can animate first
  setTimeout(tick, 600);

  /* ---------- 3) Reveal animations via IntersectionObserver ---------- */
=======
  setTimeout(tick, 600);

>>>>>>> develop
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add('visible');
        obs.unobserve(en.target);
      }
    });
  }, {threshold: 0.14, rootMargin: '0px 0px -80px 0px'});

<<<<<<< HEAD
  // list of selectors to reveal
=======
>>>>>>> develop
  const selectors = [
    '.headline', '.typing-wrap', '.subtitle', '.hero-ctas', '.badges',
    '.profile-glow', '.section-title', '.section-lead', '.meta', '.skill', '.project-card', '.contact-form'
  ];
  selectors.forEach(sel => document.querySelectorAll(sel).forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  }));

<<<<<<< HEAD
  /* ---------- 4) Mobile nav toggle ---------- */
=======
  /* ---------- 3) Mobile nav toggle ---------- */
>>>>>>> develop
  const hamb = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if(hamb && nav){
    hamb.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamb.classList.toggle('open');
      hamb.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); hamb.classList.remove('open');
    }));
  }

<<<<<<< HEAD
  /* ---------- 5) Scrollspy (highlight active nav link) ---------- */
=======
  /* ---------- 4) Scrollspy ---------- */
>>>>>>> develop
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links.map(l => document.querySelector(l.getAttribute('href')));
  function onScroll(){
    const top = window.scrollY + window.innerHeight * 0.38;
    let idx = sections.findIndex(s => s && (s.offsetTop <= top && (s.offsetTop + s.offsetHeight) > top));
    links.forEach(a => a.classList.remove('active'));
    if(idx >= 0) links[idx].classList.add('active');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

<<<<<<< HEAD
  /* ---------- 6) Modals (open/close + keyboard/esc/backdrop) ---------- */
=======
  /* ---------- 5) Modals ---------- */
>>>>>>> develop
  const backdrop = document.getElementById('modal-backdrop');
  const openButtons = Array.from(document.querySelectorAll('.open-modal'));
  const closeButtons = Array.from(document.querySelectorAll('.modal-close'));
  const modals = Array.from(document.querySelectorAll('.modal'));

  function openModal(id){
    const m = document.getElementById(id);
    if(!m) return;
    m.hidden = false;
    setTimeout(()=>{ m.classList.add('show'); backdrop.classList.add('show'); backdrop.removeAttribute('aria-hidden'); m.setAttribute('aria-hidden','false'); }, 12);
    const focusable = m.querySelectorAll('a,button,input,textarea');
    if(focusable[0]) focusable[0].focus();
  }

  function closeModal(m){
    if(!m) return;
    m.classList.remove('show');
    backdrop.classList.remove('show');
    m.setAttribute('aria-hidden','true');
    setTimeout(()=>{ m.hidden = true; backdrop.setAttribute('aria-hidden','true'); }, 220);
  }

  openButtons.forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.modal;
    openModal(id);
  }));
  closeButtons.forEach(b => b.addEventListener('click', () => {
    const m = b.closest('.modal'); closeModal(m);
  }));
  backdrop.addEventListener('click', () => { modals.forEach(m => { if(m.classList.contains('show')) closeModal(m); }); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') modals.forEach(m => { if(m.classList.contains('show')) closeModal(m); }); });

<<<<<<< HEAD
  /* ---------- 7) Insert current year ---------- */
=======
  /* ---------- 6) Insert current year ---------- */
>>>>>>> develop
  const y = document.getElementById('js-year');
  if(y) y.textContent = new Date().getFullYear();

});
