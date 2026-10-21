document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Navegación (Cambio de color al hacer scroll)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Menú Móvil
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Cerrar el menú móvil al hacer clic en cualquier enlace
        document.querySelectorAll('#nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Botones de Redes Sociales
    const btnWpp = document.getElementById('btn-wpp');
    const btnIg = document.getElementById('btn-ig');
    const btnFb = document.getElementById('btn-fb');
    const btnTiktok = document.getElementById('btn-tiktok');

    if (btnWpp) {
        btnWpp.addEventListener('click', function() {
            // Conectado al número de teléfono de Sonia
            window.open('https://wa.me/528180514689', '_blank'); 
        });
    }
    
    if (btnIg) {
        btnIg.addEventListener('click', function() {
            // Conectado al Instagram oficial
            window.open('https://www.instagram.com/guerreroplanner', '_blank');
        });
    }
    
    if (btnFb) {
        btnFb.addEventListener('click', function() {
            // Conectado a la página de Facebook
            window.open('https://www.facebook.com/people/Sonia-Guerrero-Event-Planner/61588386422864/', '_blank');
        });
    }
    
    if (btnTiktok) {
        btnTiktok.addEventListener('click', function() {
            // Aquí puedes cambiar el enlace por el usuario real de TikTok si tiene
            window.open('https://www.tiktok.com/', '_blank');
        });
    }

    // 4. Modal de Política de Privacidad (Con candado para celulares)
    const modal = document.getElementById("privacy-modal");
    const btnPrivacy = document.getElementById("open-privacy");
    const spanClose = document.querySelector(".close-modal");

    if(btnPrivacy && modal && spanClose) {
        // FORZAR QUE ESTÉ OCULTO AL CARGAR LA PÁGINA (Bloqueo para celulares)
        modal.style.display = "none";

        // Abrir modal al tocar el enlace
        btnPrivacy.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = "block";
        });
        
        // Cerrar con la X
        spanClose.addEventListener('click', function() {
            modal.style.display = "none";
        });
        
        // Cerrar al tocar fuera de la caja blanca
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // 5. Carga diferida de videos (Lazy loading) para hacer la página más rápida
    const lazyVideos = document.querySelectorAll('video.lazy-video');
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    for (let source in video.children) {
                        const videoSource = video.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }
                    video.load();
                    videoObserver.unobserve(video);
                }
            });
        });
        lazyVideos.forEach(video => {
            videoObserver.observe(video);
        });
    }
});
