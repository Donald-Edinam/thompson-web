  // Button interaction
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('click', function() {
            console.log('Explore Work button clicked');
            // Add your navigation logic here
        });

        // Parallax effect on scroll & Header background change
        window.addEventListener('scroll', function() {
            const heroSection = document.querySelector('.hero-section');
            const navbar = document.querySelector('nav');
            const scrollPosition = window.pageYOffset;
            
            // Parallax effect
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
            
            // Header background change on scroll
            if (scrollPosition > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Fade in animation
        const heroContent = document.querySelector('.hero-content');
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);