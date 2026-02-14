// ===== Ano no footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Cursor =====
const cursor = document.querySelector('.cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Hover em links e botões
  const hoverTargets = document.querySelectorAll('a, button');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ===== Menu mobile =====
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== Reveal no scroll =====
const reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  const windowHeight = window.innerHeight;
  const trigger = 80;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

// Ativa os elementos do hero assim que carregar
setTimeout(checkReveal, 100);

// ===== Estrelas (canvas) =====
const canvas = document.getElementById('stars');
if (canvas && canvas.getContext) {
  const ctx = canvas.getContext('2d');
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  }

  let stars = [];
  function initStars() {
    stars = [];
    const count = Math.min(200, Math.floor((canvas.width * canvas.height) / 8000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.6 + 0.2,
        vx: 0,
        vy: 0,
      });
    }
  }

  let mouse = { x: 0, y: 0 };
  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      const dx = mouse.x - star.x;
      const dy = mouse.y - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        star.vx -= (dx / dist) * 0.02;
        star.vy -= (dy / dist) * 0.02;
      }
      star.vx *= 0.98;
      star.vy *= 0.98;
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0 || star.x > canvas.width) star.vx *= -0.5;
      if (star.y < 0 || star.y > canvas.height) star.vy *= -0.5;
      star.x = Math.max(0, Math.min(canvas.width, star.x));
      star.y = Math.max(0, Math.min(canvas.height, star.y));

      star.alpha += (Math.random() - 0.5) * 0.03;
      star.alpha = Math.max(0.1, Math.min(0.9, star.alpha));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize);
  animate();
}
