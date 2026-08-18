document.addEventListener('DOMContentLoaded', () => {
    // Gestion du menu mobile
    const menuToggle = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Soumission du formulaire
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci ! Votre message a été envoyé avec succès. L\'équipe Clear Ecolo Cleaner vous recontactera rapidement.');
        contactForm.reset();
    });
});
