function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  let w, h;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let rafId = null;
  let running = false;

  const COUNT = 100;
  const CONNECT_DIST = 120;
  const REPEL_RADIUS = 150;
  const REPEL_FORCE = 0.8;

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.5 + 0.3;
    }
    update() {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS && dist > 0) {
        let force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_FORCE;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.99;
      this.vy *= 0.99;
      if (this.x < 0) this.x = w;
      if (this.x > w) this.x = 0;
      if (this.y < 0) this.y = h;
      if (this.y > h) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(250, 90%, 65%, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticleArray() {
    particles = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `hsla(250, 90%, 65%, ${(1 - dist / CONNECT_DIST) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initParticleArray();
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    rafId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  running = true;
  draw();

  return {
    destroy() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      canvas.width = 0;
      canvas.height = 0;
    }
  };
}
