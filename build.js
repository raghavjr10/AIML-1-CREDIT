const fs = require('fs');

const css = \@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap');

:root {
  --bg-color: #0f172a;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --primary: #3b82f6;
  --primary-glow: rgba(59, 130, 246, 0.5);
  --secondary: #ec4899;
  --glass-bg: rgba(30, 41, 59, 0.6);
  --glass-border: rgba(255, 255, 255, 0.08);
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Poppins', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: var(--font-body);
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.cursor {
  width: 8px; height: 8px;
  background: var(--primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px var(--primary);
}

.cursor-follower {
  width: 40px; height: 40px;
  border: 1px solid rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out, width 0.2s, height 0.2s, background 0.2s;
}

nav {
  position: fixed;
  top: 0; width: 100%;
  padding: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
}
.nav-logo { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: #fff; }
.nav-logo span { color: var(--primary); }
.nav-links { list-style: none; display: flex; gap: 35px; }
.nav-links a { color: var(--text-muted); text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: color 0.3s; }
.nav-links a:hover { color: var(--primary); }

.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
.hamburger span { width: 30px; height: 3px; background: #fff; transition: 0.3s; }

.btn {
  padding: 12px 28px; border-radius: 30px; text-decoration: none; font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  transition: all 0.3s ease; position: relative; overflow: hidden; font-family: var(--font-body);
}
.btn-primary { background: linear-gradient(135deg, var(--primary), #2563eb); color: #fff; border: none; box-shadow: 0 4px 15px var(--primary-glow); }
.btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 25px var(--primary-glow); }
.btn-outline { border: 1px solid var(--text-muted); color: var(--text-muted); background: transparent; }
.btn-outline:hover { border-color: var(--text-main); color: var(--text-main); transform: translateY(-3px); }

section { padding: 120px 8% 60px; }
.section-header { text-align: center; margin-bottom: 60px; }
.section-tag { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--primary); font-weight: 600; display: block; margin-bottom: 10px; }
.section-header h2 { font-family: var(--font-heading); font-size: 3rem; font-weight: 700; color: #fff; }
.highlight { color: var(--primary); transform: translateZ(0); }

.hero { display: flex; align-items: center; justify-content: space-between; min-height: 100vh; position: relative; padding-top: 150px; }
.hero-bg { position: absolute; inset: 0; z-index: -1; overflow: hidden; }
.blob { position: absolute; border-radius: 50%; filter: blur(90px); animation: pulseFloat 8s infinite alternate ease-in-out; }
.blob1 { top: 10%; left: 10%; width: 400px; height: 400px; background: rgba(59, 130, 246, 0.25); }
.blob2 { bottom: 10%; right: 10%; width: 350px; height: 350px; background: rgba(236, 72, 153, 0.2); animation-delay: -4s; }

@keyframes pulseFloat {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.1) translate(30px, -30px); }
}

.hero-content { max-width: 600px; z-index: 1; }
.hero-greeting { font-size: 1.2rem; color: var(--primary); font-weight: 600; margin-bottom: 10px; animation: slideUp 0.8s backwards; }
.hero-name { font-family: var(--font-heading); font-size: 4.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 20px; animation: slideUp 0.8s 0.2s backwards; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-roles { display: flex; gap: 15px; margin-bottom: 25px; animation: slideUp 0.8s 0.4s backwards; }
.role-tag { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 6px 16px; border-radius: 20px; font-size: 0.9rem; font-weight: 500; color: #fff; backdrop-filter: blur(10px); }
.hero-desc { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 40px; animation: slideUp 0.8s 0.6s backwards; }
.hero-btns { display: flex; gap: 20px; margin-bottom: 50px; animation: slideUp 0.8s 0.8s backwards; }
.hero-stats { display: flex; gap: 40px; animation: slideUp 0.8s 1s backwards; align-items: center; }
.stat { display: flex; flex-direction: column; text-align: center; }
.stat-num { font-family: var(--font-heading); font-size: 2.2rem; font-weight: 700; color: #fff; }
.stat-label { font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }

.hero-image-wrap { position: relative; animation: fadeIn 1.2s 0.5s backwards; }
.hero-avatar { width: 380px; height: 380px; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; box-shadow: inset 0 0 50px rgba(0,0,0,0.5), 0 20px 50px rgba(59, 130, 246, 0.3); animation: morphBlob 8s infinite alternate ease-in-out; font-family: var(--font-heading); font-size: 6rem; font-weight: 800; color: rgba(255,255,255,0.8); }
.float-badge { position: absolute; background: var(--glass-bg); backdrop-filter: blur(10px); border: 1px solid var(--glass-border); padding: 12px 20px; border-radius: 12px; font-weight: 600; box-shadow: 0 10px 25px rgba(0,0,0,0.2); animation: floatSync 4s infinite alternate ease-in-out; }
.badge1 { top: 20px; left: -30px; animation-delay: 0s; }
.badge2 { top: 50%; right: -40px; animation-delay: 1s; }
.badge3 { bottom: 30px; left: 10px; animation-delay: 2s; }

@keyframes morphBlob {
  0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
}
@keyframes floatSync { from { transform: translateY(0); } to { transform: translateY(-15px); } }
@keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }

.about-grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 30px; align-items: center; }
.about-card { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 35px 25px; border-radius: 24px; text-align: center; transition: all 0.4s ease; cursor: default; }
.about-card:hover { transform: translateY(-10px); background: rgba(30, 41, 59, 0.8); border-color: rgba(255,255,255,0.15); box-shadow: 0 15px 35px rgba(0,0,0,0.2); }
.about-emoji { font-size: 3.5rem; margin-bottom: 20px; }
.about-card h3 { font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 15px; color: #fff; }
.about-card p { font-size: 0.95rem; color: var(--text-muted); }
.about-main { text-align: center; font-size: 1.15rem; color: var(--text-muted); padding: 0 20px; }
.about-main p { margin-bottom: 25px; }
.about-main strong { color: var(--text-main); font-weight: 600; }

.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.skill-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 30px; position: relative; overflow: hidden; transition: all 0.4s; }
.skill-card:hover { transform: translateY(-8px); border-color: currentColor; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); }
.skill-card:hover::before { content: ''; position: absolute; inset: 0; background: currentColor; opacity: 0.05; z-index: 0; }
.skill-icon { font-size: 2.8rem; margin-bottom: 20px; position: relative; z-index: 1; }
.skill-card h3 { font-family: var(--font-heading); font-size: 1.4rem; color: #fff; margin-bottom: 25px; position: relative; z-index: 1; }
.skill-bar { height: 10px; background: rgba(255,255,255,0.05); border-radius: 5px; overflow: hidden; position: relative; z-index: 1; }
.skill-fill { height: 100%; background: currentColor; width: 0; border-radius: 5px; box-shadow: 0 0 10px currentColor; position: relative; transition: width 1.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
.skill-pct { position: absolute; top: 30px; right: 30px; font-weight: 700; font-size: 1.2rem; color: currentColor; z-index: 1; }

.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }
.project-card { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 40px; border-radius: 24px; position: relative; transition: all 0.4s ease; overflow: hidden; }
.project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); border-color: rgba(255,255,255,0.15); }
.project-glow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at top right, currentColor 0%, transparent 60%); opacity: 0.05; pointer-events: none; transition: opacity 0.4s; }
.project-card:hover .project-glow { opacity: 0.15; }
.project-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; position: relative; z-index: 1; }
.project-num { font-family: var(--font-heading); font-size: 2.5rem; font-weight: 800; color: rgba(255,255,255,0.1); }
.project-links { display: flex; gap: 15px; }
.project-links a { color: var(--text-muted); font-size: 1.5rem; text-decoration: none; transition: all 0.3s; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.2); }
.project-links a:hover { color: #fff; background: currentColor; transform: scale(1.1); box-shadow: 0 5px 15px currentColor; }
.project-card h3 { font-family: var(--font-heading); font-size: 1.8rem; color: #fff; margin-bottom: 15px; position: relative; z-index: 1; }
.project-card p { font-size: 1rem; color: var(--text-muted); margin-bottom: 30px; position: relative; z-index: 1; }
.project-tags { display: flex; flex-wrap: wrap; gap: 10px; position: relative; z-index: 1; }
.project-tags span { background: rgba(0,0,0,0.3); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; color: currentColor; border: 1px solid rgba(255,255,255,0.05); }
.project-badge { position: absolute; top: 0; right: 40px; background: var(--secondary); color: #fff; padding: 6px 16px; border-radius: 0 0 12px 12px; font-size: 0.8rem; font-weight: 700; z-index: 1; box-shadow: 0 5px 15px rgba(236, 72, 153, 0.4); }

.contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 50px; border-radius: 30px; margin-top: 20px; }
.contact-info h3 { font-family: var(--font-heading); font-size: 2rem; color: #fff; margin-bottom: 20px; }
.contact-info p { color: var(--text-muted); margin-bottom: 40px; font-size: 1.1rem; }
.contact-items { display: flex; flex-direction: column; gap: 25px; margin-bottom: 40px; }
.contact-item { display: flex; align-items: flex-start; gap: 20px; }
.c-icon { font-size: 1.8rem; background: rgba(255,255,255,0.05); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 15px; }
.contact-item div strong { display: block; color: #fff; font-size: 1.1rem; margin-bottom: 5px; }
.contact-item div p { margin: 0; font-size: 1rem; }
.social-links { display: flex; gap: 15px; }
.social-btn { padding: 10px 20px; background: rgba(0,0,0,0.2); border-radius: 20px; text-decoration: none; color: #fff; font-weight: 500; font-size: 0.9rem; transition: 0.3s; border: 1px solid rgba(255,255,255,0.05); }
.social-btn:hover { background: var(--primary); transform: translateY(-3px); box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4); }

.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-group label { display: block; margin-bottom: 8px; font-weight: 500; color: var(--text-muted); }
.form-group input, .form-group textarea { width: 100%; padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); color: #fff; font-family: var(--font-body); font-size: 1rem; transition: 0.3s; }
.form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); background: rgba(0,0,0,0.4); }
.btn-full { width: 100%; padding: 16px; font-size: 1.1rem; }

footer { text-align: center; padding: 40px; border-top: 1px solid var(--glass-border); margin-top: 60px; color: var(--text-muted); }
footer span { color: var(--primary); font-weight: 600; }

@media (max-width: 992px) {
  .hero { flex-direction: column; text-align: center; justify-content: center; gap: 60px; }
  .hero-content { margin-top: 50px; }
  .hero-stats { justify-content: center; }
  .hero-btns { justify-content: center; }
  .about-grid { grid-template-columns: 1fr; }
  .about-main { order: -1; }
  .contact-wrap { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
}

.reveal { opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
\;

const js = \
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

if (cursor && follower) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    }, 80);
  });
  
  const interactables = document.querySelectorAll('a, button, input, textarea, .btn, .project-card, .skill-card, .about-card');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
      follower.style.background = 'rgba(59, 130, 246, 0.1)';
      follower.style.borderColor = 'rgba(59, 130, 246, 0.8)';
      cursor.style.transform = 'translate(-50%, -50%) scale(0)';
    });
    el.addEventListener('mouseleave', () => {
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.background = 'transparent';
      follower.style.borderColor = 'rgba(59, 130, 246, 0.5)';
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

const sections = document.querySelectorAll('section:not(#home) .section-header, section:not(#home) .about-card, section:not(#home) .about-main, section:not(#home) .skill-card, section:not(#home) .project-card, section:not(#home) .contact-wrap');

sections.forEach((sec, ix) => {
  sec.classList.add('reveal');
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
setTimeout(reveal, 100);

const colorElms = document.querySelectorAll('[data-color]');
colorElms.forEach(el => {
  const color = el.getAttribute('data-color');
  el.style.color = color;
});
\;

fs.writeFileSync('c:/Users/DELL/AppData/Local/SquirrelTemp/1-Credit Course/styles.css', css);
fs.writeFileSync('c:/Users/DELL/AppData/Local/SquirrelTemp/1-Credit Course/script.js', js);
console.log('Success');

