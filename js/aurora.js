function initAurora(canvas) {
  const ctx = canvas.getContext('2d');
  let w, h;
  let time = 0;
  let rafId = null;
  let running = false;

  const blobs = [
    { x: 0.3, y: 0.4, vx: 0.0003, vy: 0.0002, color: [99, 102, 241], radius: 0.35 },
    { x: 0.7, y: 0.3, vx: -0.0002, vy: 0.0004, color: [236, 72, 153], radius: 0.3 },
    { x: 0.5, y: 0.7, vx: 0.0004, vy: -0.0003, color: [6, 182, 212], radius: 0.25 },
    { x: 0.2, y: 0.6, vx: -0.0003, vy: -0.0002, color: [52, 211, 153], radius: 0.2 }
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    time++;

    blobs.forEach(b => {
      b.x += b.vx * Math.sin(time * 0.001 + b.vy * 10);
      b.y += b.vy * Math.cos(time * 0.001 + b.vx * 10);
      if (b.x < 0) b.x = 1;
      if (b.x > 1) b.x = 0;
      if (b.y < 0) b.y = 1;
      if (b.y > 1) b.y = 0;

      const cx = b.x * w;
      const cy = b.y * h;
      const r = Math.min(w, h) * b.radius;

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, `rgba(${b.color[0]}, ${b.color[1]}, ${b.color[2]}, 0.35)`);
      gradient.addColorStop(0.5, `rgba(${b.color[0]}, ${b.color[1]}, ${b.color[2]}, 0.15)`);
      gradient.addColorStop(1, `rgba(${b.color[0]}, ${b.color[1]}, ${b.color[2]}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    });

    rafId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
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
