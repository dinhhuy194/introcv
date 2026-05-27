function initTextReveal() {
  function splitText(el) {
    const text = el.textContent.trim();
    el.textContent = '';
    const chars = [];
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.whiteSpace = char === ' ' ? '' : 'pre';
      el.appendChild(span);
      chars.push(span);
    });
    return chars;
  }

  const heroH1 = document.querySelector('.hero h1');
  if (heroH1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const chars = splitText(heroH1);
    gsap.from(chars, {
      y: 80,
      opacity: 0,
      rotateX: -90,
      stagger: 0.025,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.6
    });
  }

  function initTypewriter(el, text, speed = 50) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = text;
      return;
    }
    el.textContent = '';
    let index = 0;
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = 'color: hsl(250, 90%, 65%); animation: type-cursor 0.8s step-end infinite; margin-left: 2px; font-weight: 300;';
    el.appendChild(cursor);

    function type() {
      if (index < text.length) {
        cursor.before(document.createTextNode(text[index]));
        index++;
        setTimeout(type, speed + Math.random() * 40);
      }
    }
    setTimeout(type, 1200);
  }

  const taglineEl = document.querySelector('.hero .tagline');
  if (taglineEl) {
    const text = taglineEl.textContent;
    initTypewriter(taglineEl, text, 45);
  }
}
