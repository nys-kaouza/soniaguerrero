// 1. Efecto para que el menú cambie de fondo al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // Cuando bajamos más de 50 pixeles, el menú se vuelve oscuro
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Redirecciones a Redes Sociales y Contacto (Sonia Guerrero)
document.addEventListener('DOMContentLoaded', function() {
    
    // Botón de WhatsApp
    const btnWpp = document.getElementById('btn-wpp');
    if(btnWpp) {
        btnWpp.addEventListener('click', function(e) {
            e.preventDefault();
            // Abre WhatsApp web o la app con el número de Sonia
            window.open('https://wa.me/528180514689', '_blank');
        });
    }

    // Botón de Facebook (Actualizado con el enlace correcto)
    const btnFb = document.getElementById('btn-fb');
    if(btnFb) {
        btnFb.addEventListener('click', function(e) {
            e.preventDefault();
            // Abre su página de Facebook exacta
            window.open('https://www.facebook.com/p/Sonia-Guerrero-Event-Planner-61588386422864/', '_blank');
        });
    }

    // Botón de TikTok (Actualizado con el enlace correcto)
    const btnTiktok = document.getElementById('btn-tiktok');
    if(btnTiktok) {
        btnTiktok.addEventListener('click', function(e) {
            e.preventDefault();
            // Abre su perfil de TikTok exacto
            window.open('https://www.tiktok.com/@soniaguerreroplanner?_r=1&_t=ZS-9AW0sJPsUq5', '_blank');
        });
    }
});