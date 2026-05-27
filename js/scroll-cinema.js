function initScrollCinema() {
  const mm = gsap.matchMedia();
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) return;

  mm.add('(prefers-reduced-motion: no-preference)', () => {

    gsap.to('.hero .avatar-frame', {
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
      y: -80,
      scale: 0.8,
      opacity: 0.3,
      ease: 'none'
    });

    gsap.to('.hero h1', {
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
      y: -100,
      opacity: 0,
      ease: 'none'
    });

    gsap.to('.hero .tagline', {
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
      y: -60,
      opacity: 0,
      ease: 'none'
    });

    gsap.from('.bento-grid-about .glass-card', {
      scrollTrigger: { trigger: '.bento-grid-about', start: 'top 85%' },
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    });

    const statEls = document.querySelectorAll('.stat-num[data-count]');
    statEls.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      if (isNaN(target)) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => { el.textContent = Math.round(obj.val) + (el.dataset.suffix || ''); }
      });
    });

    const skillCards = gsap.utils.toArray('.skill-card');
    skillCards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 88%' },
        y: 30,
        opacity: 0,
        duration: 0.4,
        delay: i * 0.08,
        ease: 'power2.out'
      });
      const bar = card.querySelector('.progress-bar-fill');
      if (bar) {
        const w = bar.getAttribute('data-width');
        gsap.to(bar, {
          scrollTrigger: { trigger: card, start: 'top 85%' },
          width: w + '%',
          duration: 1.2,
          delay: i * 0.08 + 0.3,
          ease: 'power2.out'
        });
      }
    });

    const timelineItems = gsap.utils.toArray('.timeline-item');
    timelineItems.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 85%' },
        x: i % 2 === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power3.out'
      });
    });

    const testCards = gsap.utils.toArray('.testimonial-card');
    testCards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 88%' },
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.12,
        ease: 'power3.out'
      });
    });

    gsap.from('.contact-form', {
      scrollTrigger: { trigger: '.contact-form', start: 'top 85%' },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    const contactLinks = gsap.utils.toArray('.contact-link');
    contactLinks.forEach((link, i) => {
      gsap.from(link, {
        scrollTrigger: { trigger: '.contact-links', start: 'top 80%' },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1 + 0.5,
        ease: 'back.out(2)'
      });
    });

    gsap.to('.mouse-wheel', {
      y: 12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    return () => {};
  });
}
