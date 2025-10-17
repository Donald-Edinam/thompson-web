// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = 80; // Account for fixed header
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (section && navLink) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-blue-700', 'md:text-blue-700', 'md:dark:text-blue-500');
                    link.removeAttribute('aria-current');
                });
                
                // Add active class to current link
                navLink.classList.add('text-blue-700', 'md:text-blue-700', 'md:dark:text-blue-500');
                navLink.setAttribute('aria-current', 'page');
            }
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Animate skill progress bars
            if (entry.target.classList.contains('skills-section')) {
                animateSkillBars();
            }
            
            // Animate achievement numbers
            if (entry.target.classList.contains('achievements')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate skill progress bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200);
    });
}

// Animate achievement numbers
function animateNumbers() {
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    
    achievementNumbers.forEach(numberElement => {
        const finalNumber = numberElement.textContent.replace(/[^\d]/g, '');
        const suffix = numberElement.textContent.replace(/[\d]/g, '');
        let currentNumber = 0;
        const increment = finalNumber / 50; // Animation duration control
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                numberElement.textContent = finalNumber + suffix;
                clearInterval(timer);
            } else {
                numberElement.textContent = Math.floor(currentNumber) + suffix;
            }
        }, 30);
    });
}

// Button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        
        if (buttonText.includes('Explore')) {
            // Scroll to projects section
            document.getElementById('projects').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        } else if (buttonText.includes('Web3')) {
            // Scroll to contact section
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = this.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you within 24 hours.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Parallax effect on scroll & Header background change
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const navbar = document.querySelector('nav');
    const scrollPosition = window.pageYOffset;
    
    // Parallax effect
    if (heroSection) {
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
    
    // Header background change on scroll
    if (scrollPosition > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('[data-collapse-toggle]');
const mobileMenu = document.getElementById('navbar-cta');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    });
}

// Fade in animation for hero content
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
}

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Smooth scroll behavior */
    html {
        scroll-behavior: smooth;
    }
`;
document.head.appendChild(style);