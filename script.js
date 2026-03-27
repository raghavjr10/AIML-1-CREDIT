// Reveal on Scroll Animations
const sections = document.querySelectorAll('section:not(#home) .section-header, section:not(#home) .about-card, section:not(#home) .about-main, section:not(#home) .skill-card, section:not(#home) .project-card, section:not(#home) .contact-wrap');

sections.forEach((sec, ix) => {
  sec.classList.add('reveal');
  // Delay calculation
  sec.style.transitionDelay = (ix % 3) * 0.1 + 's';
});

function reveal() {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;
  
  sections.forEach(sec => {
    const elementTop = sec.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      sec.classList.add('active');
    }
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-fill');
  skillBars.forEach(bar => {
    const elementTop = bar.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      const pct = bar.parentElement.parentElement.querySelector('.skill-pct').textContent;
      bar.style.width = pct;
    }
  });
}

window.addEventListener('scroll', reveal);
// Add a small delay for first load to allow styles to settle
setTimeout(reveal, 100);

// Ensure color data attributes apply correctly to project & skill cards
const colorElms = document.querySelectorAll('[data-color]');
colorElms.forEach(el => {
  const color = el.getAttribute('data-color');
  el.style.color = color;
});

