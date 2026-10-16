// 1. Menú oscuro al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Menú Hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if(navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

// 3. LAZY LOADING PARA VIDEOS (Compatible con celulares)
document.addEventListener("DOMContentLoaded", function() {
    const lazyVideos = document.querySelectorAll('.lazy-video');

    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const source = video.querySelector('source');
                    
                    // Intercambia data-src por src para engañar al celular
                    if (source && source.hasAttribute('data-src')) {
                        source.src = source.getAttribute('data-src');
                        video.load(); // El autoplay nativo hace el resto
                        source.removeAttribute('data-src');
                    }
                    observer.unobserve(video);
                }
            });
        });

        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    } else {
        // Respaldo para navegadores muy antiguos
        lazyVideos.forEach(video => {
            const source = video.querySelector('source');
            if (source && source.hasAttribute('data-src')) {
                source.src = source.getAttribute('data-src');
                video.load();
            }
        });
    }
});

// 4. Redirecciones a Redes Sociales
document.addEventListener('DOMContentLoaded', function() {
    const btnWpp = document.getElementById('btn-wpp');
    if(btnWpp) {
        btnWpp.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/528180514689', '_blank');
        });
    }

    const btnFb = document.getElementById('btn-fb');
    if(btnFb) {
        btnFb.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.facebook.com/p/Sonia-Guerrero-Event-Planner-61588386422864/', '_blank');
        });
    }

    const btnTiktok = document.getElementById('btn-tiktok');
    if(btnTiktok) {
        btnTiktok.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.tiktok.com/@soniaguerreroplanner?_r=1&_t=ZS-9AW0sJPsUq5', '_blank');
        });
    }
});
