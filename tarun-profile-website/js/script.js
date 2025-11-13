/* ===================================
   Main JavaScript File
   =================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize all features
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initCounterAnimation();
    initContactForm();
    initSmoothScroll();
    applyConfig();
}

/* ===================================
   Navigation
   =================================== */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

/* ===================================
   Typing Animation
   =================================== */
function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const texts = CONFIG.personal.typingTexts || [
        "Software Developer",
        "Problem Solver",
        "Tech Enthusiast"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* ===================================
   Scroll Animations
   =================================== */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll(
        '.skill-card, .project-card, .timeline-item, .stat-item, .contact-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===================================
   Counter Animation
   =================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateCounters = () => {
        if (animated) return;
        
        const aboutSection = document.querySelector('.about-section');
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop + sectionHeight / 2) {
            animated = true;
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
            });
        }
    };

    window.addEventListener('scroll', animateCounters);
}

/* ===================================
   Contact Form
   =================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show success message (customize this based on your backend)
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
            // Here you would typically send the data to your backend
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
        });
    }
}

/* ===================================
   Smooth Scroll
   =================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   Apply Configuration
   =================================== */
function applyConfig() {
    if (typeof CONFIG === 'undefined') return;

    // Apply personal info
    if (CONFIG.personal) {
        const nameElement = document.querySelector('.name');
        const greetingElement = document.querySelector('.greeting');
        const descriptionElement = document.querySelector('.hero-description');
        
        if (nameElement) nameElement.textContent = CONFIG.personal.name;
        if (greetingElement) greetingElement.textContent = CONFIG.personal.greeting;
        if (descriptionElement) descriptionElement.textContent = CONFIG.personal.description;
    }

    // Apply about section
    if (CONFIG.about) {
        const aboutParagraphs = document.querySelectorAll('.about-paragraph');
        CONFIG.about.paragraphs.forEach((text, index) => {
            if (aboutParagraphs[index]) {
                aboutParagraphs[index].textContent = text;
            }
        });

        const statItems = document.querySelectorAll('.stat-item');
        CONFIG.about.stats.forEach((stat, index) => {
            if (statItems[index]) {
                const numberEl = statItems[index].querySelector('.stat-number');
                const labelEl = statItems[index].querySelector('.stat-label');
                if (numberEl) numberEl.setAttribute('data-target', stat.number);
                if (labelEl) labelEl.textContent = stat.label;
            }
        });
    }

    // Apply skills
    if (CONFIG.skills) {
        const skillsGrid = document.querySelector('.skills-grid');
        if (skillsGrid) {
            skillsGrid.innerHTML = '';
            CONFIG.skills.forEach(skill => {
                const skillCard = createSkillCard(skill);
                skillsGrid.appendChild(skillCard);
            });
        }
    }

    // Apply education
    if (CONFIG.education) {
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            timeline.innerHTML = '';
            CONFIG.education.forEach(edu => {
                const timelineItem = createTimelineItem(edu);
                timeline.appendChild(timelineItem);
            });
        }
    }

    // Apply projects
    if (CONFIG.projects) {
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = '';
            CONFIG.projects.forEach(project => {
                const projectCard = createProjectCard(project);
                projectsGrid.appendChild(projectCard);
            });
        }
    }

    // Apply contact info
    if (CONFIG.contact) {
        const contactSubtitle = document.querySelector('.contact-subtitle');
        const contactDescription = document.querySelector('.contact-description');
        
        if (contactSubtitle) contactSubtitle.textContent = CONFIG.contact.subtitle;
        if (contactDescription) contactDescription.textContent = CONFIG.contact.description;

        const contactDetails = document.querySelector('.contact-details');
        if (contactDetails) {
            contactDetails.innerHTML = '';
            CONFIG.contact.details.forEach(detail => {
                const contactItem = createContactItem(detail);
                contactDetails.appendChild(contactItem);
            });
        }

        const socialLinks = document.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.innerHTML = '';
            CONFIG.contact.social.forEach(social => {
                const socialLink = createSocialLink(social);
                socialLinks.appendChild(socialLink);
            });
        }
    }

    // Apply footer
    if (CONFIG.footer) {
        const footerText = document.querySelector('.footer-text');
        const footerSubtext = document.querySelector('.footer-subtext');
        
        if (footerText) footerText.textContent = CONFIG.footer.text;
        if (footerSubtext) footerSubtext.textContent = CONFIG.footer.subtext;
    }

    // Apply theme colors if specified
    if (CONFIG.theme) {
        applyThemeColors(CONFIG.theme);
    }
}

/* ===================================
   Helper Functions to Create Elements
   =================================== */
function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <h3 class="skill-title">${skill.title}</h3>
        <div class="skill-items">
            ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
        </div>
    `;
    return card;
}

function createTimelineItem(edu) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="timeline-date">${edu.date}</div>
            <h3 class="timeline-title">${edu.title}</h3>
            <p class="timeline-institution">${edu.institution}</p>
            <p class="timeline-description">${edu.description}</p>
        </div>
    `;
    return item;
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image">
            <div class="project-placeholder">${project.icon}</div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoLink}" class="project-link">View Demo</a>
                <a href="${project.sourceLink}" class="project-link">Source Code</a>
            </div>
        </div>
    `;
    return card;
}

function createContactItem(detail) {
    const item = document.createElement('div');
    item.className = 'contact-item';
    item.innerHTML = `
        <div class="contact-icon">${detail.icon}</div>
        <div class="contact-text">
            <h4>${detail.title}</h4>
            <p>${detail.value}</p>
        </div>
    `;
    return item;
}

function createSocialLink(social) {
    const link = document.createElement('a');
    link.href = social.url;
    link.className = 'social-link';
    link.title = social.name;
    link.textContent = social.icon;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
}

function applyThemeColors(theme) {
    const root = document.documentElement;
    Object.keys(theme).forEach(key => {
        const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(cssVar, theme[key]);
    });
}

/* ===================================
   Notification System
   =================================== */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ===================================
   Utility Functions
   =================================== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Log initialization
console.log('%c Portfolio Website Loaded Successfully! ', 'background: #6366f1; color: white; padding: 10px; border-radius: 5px; font-size: 14px;');
console.log('%c Customize your portfolio by editing js/config.js ', 'background: #8b5cf6; color: white; padding: 5px; border-radius: 3px;');
