/* ============================================
   SPUNRIS3 - MAIN JAVASCRIPT
   Handles all interactions and animations
============================================ */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // PRELOADER
    // ============================================
// ===================================
// IMAGE LAZY LOADING
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
});

// ===================================
// PRELOAD HERO IMAGE
// ===================================

window.addEventListener('load', function() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
    }
});



    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    });
    
    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Party Hub dropdown — click to open, click elsewhere to close
    document.querySelectorAll('.nav-dropdown > a').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle('open');
        });
    });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown.open').forEach(function(d) { d.classList.remove('open'); });
        }
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', function() {
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
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // HERO CANVAS ANIMATION
    // ============================================
    const canvas = document.getElementById('heroCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = '#ff6600';
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animateParticles);
    }
    
    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(255, 102, 0, ${1 - distance / 100})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    initParticles();
    animateParticles();
    
    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const animateCounter = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    };
    
    // Trigger counter when in viewport
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
    
    // ============================================
    // EVENTS LOADING
    // ============================================
    function loadEvents() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const upcomingEvents = eventsData.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate >= today;
        }).sort((a, b) => new Date(a.date) - new Date(b.date));
        
        const pastEvents = eventsData.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate < today;
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Load featured event
        const featuredEvent = upcomingEvents.find(event => event.featured);
        if (featuredEvent) {
            displayFeaturedEvent(featuredEvent);
        }
        
        // Load upcoming events
        const regularEvents = upcomingEvents.filter(event => !event.featured);
        displayEvents(regularEvents, 'eventsGrid');
        
        // Load past events
        if (pastEvents.length > 0) {
            displayEvents(pastEvents, 'pastEventsGrid');
        } else {
            document.querySelector('.past-events-section').style.display = 'none';
        }
    }
    
    function displayFeaturedEvent(event) {
        const featuredContainer = document.getElementById('featuredEvent');
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        featuredContainer.innerHTML = `
            <div class="featured-event-content">
                <div class="featured-event-image">
                    ${event.image ? `<img src="${event.image}" alt="${event.title}">` : '🎧'}
                </div>
                <div class="featured-event-details">
                    <h3>${event.title}</h3>
                    <div class="event-meta">
                        <div class="meta-item">
                        <span class="meta-icon">📍</span>
                            <span>${event.venue}, ${event.location}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-icon">💰</span>
                            <span>${event.price}</span>
                        </div>
                    </div>
                    <p style="color: var(--text-secondary); margin-bottom: 1rem;">${event.description}</p>
                    <div class="event-lineup">
                        ${event.lineup.map(artist => `<span class="lineup-tag">🎵 ${artist}</span>`).join('')}
                    </div>
                    <a href="${event.ticketLink || '#contact'}" class="btn btn-primary" style="margin-top: 1rem;">
                        <span>GET TICKETS</span>
                        <div class="btn-glow"></div>
                    </a>
                </div>
            </div>
        `;
    }
    
    function displayEvents(events, containerId) {
        const container = document.getElementById(containerId);
        
        if (events.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">No events at this time. Check back soon!</p>';
            return;
        }
        
        container.innerHTML = events.map(event => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
            
            return `
                <div class="event-card">
                    <div class="event-image">
                        ${event.image ? `<img src="${event.image}" alt="${event.title}" style="width:100%;height:100%;object-fit:cover;">` : '🎧'}
                        <span class="event-status ${event.status === 'Sold Out' ? 'sold-out' : ''}">${event.status}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-date">${formattedDate.toUpperCase()}</div>
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-venue">📍 ${event.venue}</div>
                        <div class="event-lineup">
                            ${event.lineup.slice(0, 3).map(artist => `<span class="lineup-tag">${artist}</span>`).join('')}
                            ${event.lineup.length > 3 ? `<span class="lineup-tag">+${event.lineup.length - 3} more</span>` : ''}
                        </div>
                        <div class="event-footer">
                            <span class="event-price">${event.price}</span>
                            ${event.status !== 'Sold Out' && event.ticketLink ? 
                                `<a href="${event.ticketLink}" class="btn btn-ghost" style="padding: 0.5rem 1rem; font-size: 0.9rem;">TICKETS</a>` :
                                '<span style="color: var(--text-muted);">Event Passed</span>'
                            }
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Load events on page load
    loadEvents();
    
    // ============================================
    // PAST EVENTS TOGGLE
    // ============================================
    const togglePastEventsBtn = document.getElementById('togglePastEvents');
    const pastEventsGrid = document.getElementById('pastEventsGrid');
    
    if (togglePastEventsBtn) {
        togglePastEventsBtn.addEventListener('click', function() {
            pastEventsGrid.classList.toggle('hidden');
            
            const btnText = togglePastEventsBtn.querySelector('span');
            if (pastEventsGrid.classList.contains('hidden')) {
                btnText.textContent = 'VIEW PAST EVENTS';
            } else {
                btnText.textContent = 'HIDE PAST EVENTS';
            }
        });
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
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
    
    // ============================================
    // FORM SUBMISSION (Netlify Forms)
    // ============================================
    const contactForm = document.querySelector('form[name="contact"]');
    const newsletterForm = document.querySelector('form[name="newsletter"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Netlify handles the submission automatically
            // You can add custom success message here if needed
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>SENDING...</span>';
            submitBtn.disabled = true;
            
            // Re-enable after 3 seconds (Netlify redirect will happen)
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>SUBSCRIBING...</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>✓ SUBSCRIBED!</span>';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    newsletterForm.reset();
                }, 2000);
            }, 1500);
        });
    }
    
    // ============================================
    // GALLERY LIGHTBOX (Simple version)
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can implement a lightbox here or link to full images
            console.log('Gallery item clicked - add lightbox functionality here');
        });
    });
    
    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.event-card, .feature-card, .testimonial-card, .gallery-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // ============================================
    // CONSOLE EASTER EGG
    // ============================================
    console.log('%c🎧 SPUNRIS3 🎧', 'color: #ff6600; font-size: 40px; font-weight: bold; text-shadow: 2px 2px 4px rgba(255,102,0,0.5);');
    console.log('%cWelcome to the source code, fellow raver! 🎉', 'color: #ff6600; font-size: 16px;');
    console.log('%cBuilt with ❤️ for Charlotte\'s EDM scene', 'color: #999; font-size: 12px;');
    
});

// ============================================
// GLOBAL FUNCTIONS
// ============================================

// Function to update events (for easy maintenance)
function updateEventsData(newEventsData) {
    eventsData = newEventsData;
    loadEvents();
}

// Function to add single event
function addEvent(eventObj) {
    eventsData.push(eventObj);
    loadEvents();
}