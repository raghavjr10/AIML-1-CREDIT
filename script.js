// ============================================
// DOM ELEMENTS
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const starsContainer = document.querySelector('.stars');
const typingElement = document.querySelector('.typing-animation');
const contactForm = document.getElementById('contactForm');

// ============================================
// HAMBURGER MENU
// ============================================
function toggleMenu() {
    navMenu.classList.toggle('active');

    hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// TYPING ANIMATION
// ============================================
function typeEffect() {
    const text = "AI & ML Enthusiast";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type, 100);
        }
    }

    // Reset and start typing
    typingElement.textContent = '';
    type();
}

// Start typing animation when page loads
window.addEventListener('load', typeEffect);

// ============================================
// STAR GENERATION (Hero Background Animation)
// ============================================
function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = '100%';
        star.style.delay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);

        // Remove star after animation
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
}

// Generate stars continuously
setInterval(createStars, 500);

// ============================================
// SCROLL ANIMATIONS
// ============================================
const scrollElements = document.querySelectorAll('[class*="fade"], [class*="slide"], .section-title, .project-card, .skill-item, .hobby-card, .detail-item, .experience-list, .timeline-item, .contact-form');

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add observer to all scroll elements
document.querySelectorAll('.about-content, .about-image, .experience-text, .experience-stats, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLLING FOR NAVBAR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ACTIVE NAVBAR INDICATOR
// ============================================
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Add active style to current link
    if (current) {
        const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
        if (activeLink) {
            activeLink.style.color = 'var(--primary-color)';
            activeLink.style.textDecoration = 'none';
        }
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // In a real application, you would send data to a server here
            console.log('Form Data:', {
                name,
                email,
                subject,
                message
            });

            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '8px',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        fontWeight: '600',
        maxWidth: '400px'
    });

    if (type === 'success') {
        Object.assign(notification.style, {
            backgroundColor: 'rgba(0, 212, 255, 0.9)',
            color: '#000',
            border: '1px solid #00d4ff',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
        });
    } else {
        Object.assign(notification.style, {
            backgroundColor: 'rgba(255, 0, 110, 0.9)',
            color: '#fff',
            border: '1px solid #ff006e',
            boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)'
        });
    }

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// LAZY LOAD IMAGES
// ============================================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ============================================
// SKILL PROGRESS BAR ANIMATION ON SCROLL
// ============================================
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserverOptions = {
    threshold: 0.5
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.animation = `progressLoad 1.5s ease-out forwards`;
            entry.target.style.setProperty('--width', width);
            skillObserver.unobserve(entry.target);
        }
    });
}, skillObserverOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ============================================
// PARALLAX EFFECT ON SCROLL (Subtle)
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual, .animated-circle');

    parallaxElements.forEach(element => {
        if (element && element.offsetParent !== null) {
            element.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// ============================================
// THEME TOGGLE (Optional Future Feature)
// ============================================
function initTheme() {
    // Check for saved theme preference or default to dark
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', theme);
}

// Initialize theme on page load
window.addEventListener('DOMContentLoaded', initTheme);

// ============================================
// PROJECT CARD INTERACTIONS
// ============================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        projectCards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '0.5';
                c.style.filter = 'blur(2px)';
            }
        });
    });

    card.addEventListener('mouseleave', function() {
        projectCards.forEach(c => {
            c.style.opacity = '1';
            c.style.filter = 'blur(0)';
        });
    });
});

// ============================================
// STAT BOXES COUNTER ANIMATION
// ============================================
const statBoxes = document.querySelectorAll('.stat-number');

function animateStatCounters() {
    statBoxes.forEach(box => {
        const target = box.textContent;
        const numberMatch = target.match(/\d+/);

        if (numberMatch) {
            const finalNumber = parseInt(numberMatch[0]);
            let currentNumber = 0;
            const increment = Math.ceil(finalNumber / 50);

            const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    box.textContent = target;
                    clearInterval(counter);
                } else {
                    box.textContent = currentNumber + (target.includes('+') ? '+' : target.includes('/') ? '/ 10' : '%');
                }
            }, 30);
        }
    });
}

// Animate counters when stats section is in view
const statsSection = document.querySelector('.experience-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateStatCounters();
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// ============================================
// BACK TO TOP BUTTON (Optional)
// ============================================
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = `
        position: fixed;
        bottom: -50px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: var(--dark-bg);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        z-index: 999;
        transition: all 0.3s ease;
        font-weight: bold;
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.bottom = '30px';
        } else {
            backToTop.style.bottom = '-50px';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createBackToTopButton();

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// PRELOAD CRITICAL ASSETS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Preload fonts or critical images if needed
    console.log('Portfolio loaded successfully');
});

// ============================================
// PERFORMANCE OPTIMIZATION - Request Animation Frame
// ============================================
let scrollTimeout;
const debounceScroll = (func, wait) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(func, wait);
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get element position relative to viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Mobile-specific enhancements
if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    document.querySelectorAll('[class*="animation"]').forEach(el => {
        el.style.animationDuration = '0.5s';
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// INTERSECTION OBSERVER FOR LAZY LOADING SECTIONS
// ============================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.pointerEvents = 'auto';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// DOWNLOAD RESUME BUTTON (If added to HTML)
// ============================================
function downloadResume() {
    // This would link to your resume file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Raghav_Vijayaraj_Resume.pdf';
    // link.click(); // Uncomment when resume file is added
}

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Tab navigation for form validation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', (e) => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log(
    '%cWelcome to Raghav Vijayaraj\'s Portfolio!',
    'font-size: 20px; color: #00d4ff; font-weight: bold;'
);
console.log(
    '%cPowered by Modern Web Technologies | AI & ML Enthusiast',
    'font-size: 14px; color: #a855ff;'
);
