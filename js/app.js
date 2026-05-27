document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = window.Lenis ? new Lenis({ autoRaf: false }) : null;
  if (lenis) {
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update);
  }

  const auroraCanvas = document.getElementById('auroraCanvas');
  let aurora = null;
  if (auroraCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    aurora = initAurora(auroraCanvas);
  }

  const particleCanvas = document.getElementById('particleCanvas');
  let particles = null;
  if (particleCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    particles = initParticles(particleCanvas);
  }

  const cursor = initCursor();

  initTextReveal();

  initScrollCinema();

  document.querySelectorAll('.dots-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const dots = document.querySelectorAll('.dots-nav a');
  if (dots.length && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(d => d.classList.remove('active'));
          const active = document.querySelector(`.dots-nav a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => observer.observe(s));
  }

  window.addEventListener('beforeunload', () => {
    if (aurora) aurora.destroy();
    if (particles) particles.destroy();
    if (cursor) cursor.destroy();
  });
});
