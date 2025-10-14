  // Button interaction
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('click', function() {
            console.log('Explore Work button clicked');
            // Add your navigation logic here
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', function() {
            const heroSection = document.querySelector('.hero-section');
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
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