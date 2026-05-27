function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  let w, h;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let lastClientX = -1000;
  let lastClientY = -1000;
  let rafId = null;
  let running = false;

  const CONNECT_DIST = 110;
  const REPEL_RADIUS = 160;
  const REPEL_FORCE = 0.55; // lực đẩy nhẹ nhàng tự nhiên

  // Bảng màu Aurora VIP đồng bộ với thiết kế tổng thể
  const AURORA_HUES = [
    260, // Electric Violet
    185, // Neon Cyan
    325, // Magic Magenta
    45   // Sunset Gold
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init) {
      this.x = Math.random() * w;
      // Trải đều các hạt theo toàn bộ chiều cao của trang
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.4 + 0.2; // Độ mờ tinh tế cho background
      this.hue = AURORA_HUES[Math.floor(Math.random() * AURORA_HUES.length)];
    }
    update() {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      // Lực đẩy tương tác từ chuột (sử dụng tọa độ tuyệt đối đã tính toán)
      if (dist < REPEL_RADIUS && dist > 0) {
        let force = (REPEL_RADIUS - dist) / REPEL_RADIUS * REPEL_FORCE;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }

      this.x += this.vx;
      this.y += this.vy;

      this.vx *= 0.98;
      this.vy *= 0.98;

      // Giới hạn biên màn hình toàn trang
      if (this.x < 0) this.x = w;
      if (this.x > w) this.x = 0;
      if (this.y < 0) this.y = h;
      if (this.y > h) this.y = 0;
    }
    draw() {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      // Hạt ở gần chuột sẽ phồng nhẹ và sáng rực hơn để tương tác cực nhạy
      let isNearMouse = dist < REPEL_RADIUS;
      let finalSize = isNearMouse ? this.size * (1 + (REPEL_RADIUS - dist) / REPEL_RADIUS * 0.6) : this.size;
      let finalOpacity = isNearMouse ? Math.min(0.9, this.opacity * (1 + (REPEL_RADIUS - dist) / REPEL_RADIUS * 1.5)) : this.opacity;

      ctx.beginPath();
      ctx.arc(this.x, this.y, finalSize, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 95%, 65%, ${finalOpacity})`;
      ctx.fill();

      // Nếu ở cực gần chuột, vẽ hiệu ứng glow nhẹ cho hạt
      if (isNearMouse && dist < REPEL_RADIUS * 0.5) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, finalSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 95%, 65%, ${finalOpacity * 0.2})`;
        ctx.fill();
      }
    }
  }

  function initParticleArray() {
    // Tính toán số lượng hạt linh hoạt dựa trên chiều cao trang thực tế
    // Mật độ: ~1 hạt cho mỗi 12px chiều cao, tối đa 350 hạt để bảo toàn hiệu năng siêu VIP
    const count = Math.min(350, Math.max(120, Math.floor(h / 12)));

    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  // Tối ưu hóa hiệu năng đỉnh cao: Chỉ vẽ đường nối giữa các hạt nằm trong viewport hiển thị
  function drawConnections(scrollY, viewportHeight, buffer) {
    for (let i = 0; i < particles.length; i++) {
      let p1 = particles[i];
      // Nếu hạt thứ nhất nằm ngoài viewport hiển thị (+ buffer), bỏ qua để tiết kiệm tài nguyên
      if (p1.y < scrollY - buffer || p1.y > scrollY + viewportHeight + buffer) continue;

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        // Nếu hạt thứ hai cũng nằm ngoài viewport hiển thị, bỏ qua
        if (p2.y < scrollY - buffer || p2.y > scrollY + viewportHeight + buffer) continue;

        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          let alpha = (1 - dist / CONNECT_DIST) * 0.12;

          // Liên kết ở gần chuột sẽ phát sáng rực hơn
          let distI = Math.sqrt((p1.x - mouse.x)**2 + (p1.y - mouse.y)**2);
          let distJ = Math.sqrt((p2.x - mouse.x)**2 + (p2.y - mouse.y)**2);
          if (distI < REPEL_RADIUS || distJ < REPEL_RADIUS) {
            alpha *= 1.8;
          }

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // Tạo linear gradient chuyển màu cực VIP giữa 2 hạt khác màu
          if (p1.hue !== p2.hue) {
            let grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `hsla(${p1.hue}, 95%, 65%, ${alpha})`);
            grad.addColorStop(1, `hsla(${p2.hue}, 95%, 65%, ${alpha})`);
            ctx.strokeStyle = grad;
          } else {
            ctx.strokeStyle = `hsla(${p1.hue}, 95%, 65%, ${alpha})`;
          }

          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }
    }
  }

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      window.innerHeight
    );
    initParticleArray();
  }

  // Vẽ tối ưu hóa Viewport Culling
  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const buffer = 120; // Vùng đệm ngoài viewport để mượt mà hơn ở các cạnh

    // Cập nhật tọa độ tất cả hạt, nhưng chỉ vẽ những hạt nằm trong tầm mắt người dùng
    particles.forEach(p => {
      p.update();
      if (p.y >= scrollY - buffer && p.y <= scrollY + viewportHeight + buffer) {
        p.draw();
      }
    });

    // Chỉ vẽ các đường liên kết trong viewport
    drawConnections(scrollY, viewportHeight, buffer);

    rafId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);

  // Đồng bộ tọa độ chuột tuyệt đối (viewport + scroll)
  window.addEventListener('mousemove', e => {
    lastClientX = e.clientX;
    lastClientY = e.clientY;
    mouse.x = e.clientX + window.scrollX;
    mouse.y = e.clientY + window.scrollY;
  });

  // Tự động tính toán lại tọa độ chuột khi cuộn trang
  window.addEventListener('scroll', () => {
    if (lastClientX !== -1000) {
      mouse.x = lastClientX + window.scrollX;
      mouse.y = lastClientY + window.scrollY;
    }
  });

  // Đưa chuột về trạng thái ẩn khi rời khỏi viewport
  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    lastClientX = -1000;
    lastClientY = -1000;
  });

  // Hỗ trợ chạm trên các thiết bị di động (tuyệt đối hóa tọa độ scroll)
  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      lastClientX = e.touches[0].clientX;
      lastClientY = e.touches[0].clientY;
      mouse.x = lastClientX + window.scrollX;
      mouse.y = lastClientY + window.scrollY;
    }
  });

  window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    lastClientX = -1000;
    lastClientY = -1000;
  });

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
