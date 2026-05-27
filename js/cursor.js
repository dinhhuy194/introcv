function initCursor() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch) return { destroy() {} };

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return { destroy() {} };

  const outer = document.createElement('div');
  const inner = document.createElement('div');
  Object.assign(outer.style, {
    position: 'fixed', pointerEvents: 'none', zIndex: '99999',
    width: '32px', height: '32px', borderRadius: '50%',
    border: '1.5px solid hsla(250, 90%, 65%, 0.5)',
    background: 'transparent',
    transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
    transform: 'translate(-50%, -50%)',
    left: '0', top: '0'
  });
  Object.assign(inner.style, {
    position: 'fixed', pointerEvents: 'none', zIndex: '100000',
    width: '4px', height: '4px', borderRadius: '50%',
    background: 'hsl(250, 90%, 65%)',
    transform: 'translate(-50%, -50%)',
    left: '0', top: '0'
  });
  document.body.appendChild(outer);
  document.body.appendChild(inner);

  let mx = 0, my = 0;
  let ox = 0, oy = 0;
  let rafId = null;

  function lerp(start, end, factor) { return start + (end - start) * factor; }

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    inner.style.left = mx + 'px';
    inner.style.top = my + 'px';
  });

  function animate() {
    ox = lerp(ox, mx, 0.15);
    oy = lerp(oy, my, 0.15);
    outer.style.left = ox + 'px';
    outer.style.top = oy + 'px';
    rafId = requestAnimationFrame(animate);
  }
  animate();

  const interactives = 'a, button, .glass-card, .skill-card, .contact-link, .btn, .project-card';
  document.addEventListener('mouseover', e => {
    const t = e.target.closest(interactives);
    if (t) {
      outer.style.width = '56px';
      outer.style.height = '56px';
      outer.style.borderColor = 'hsla(250, 90%, 65%, 0.8)';
      outer.style.background = 'hsla(250, 90%, 65%, 0.08)';
    }
  });
  document.addEventListener('mouseout', e => {
    const t = e.target.closest(interactives);
    if (t) {
      outer.style.width = '32px';
      outer.style.height = '32px';
      outer.style.borderColor = 'hsla(250, 90%, 65%, 0.5)';
      outer.style.background = 'transparent';
    }
  });

  document.body.style.cursor = 'none';
  const style = document.createElement('style');
  style.textContent = `a, button, .glass-card, .skill-card, .contact-link, .btn, .project-card { cursor: none !important; }`;
  document.head.appendChild(style);

  return {
    destroy() {
      if (rafId) cancelAnimationFrame(rafId);
      outer.remove();
      inner.remove();
      style.remove();
      document.body.style.cursor = '';
    }
  };
}
