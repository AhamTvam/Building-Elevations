document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
            
            // Hamburger animation
            const bars = menuToggle.querySelectorAll('.bar');
            if (mainNav.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu on nav item click
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // Lightbox Modal for Elevation Gallery
    const galleryCards = document.querySelectorAll('.gallery-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryCards.length && lightbox && lightboxImg && lightboxTitle) {
        galleryCards.forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.getAttribute('data-src');
                const titleText = card.querySelector('.card-title').textContent;

                lightboxImg.src = imgSrc;
                lightboxTitle.textContent = titleText;
                
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Disable page scroll when lightbox open
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        
        // Close on clicking outside the content area
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // Scroll Header Styling Adjustments
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.backgroundColor = 'rgba(10, 21, 67, 0.98)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(10, 21, 67, 0.95)';
        }
    });
});