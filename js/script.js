
// Modo claro/oscuro
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Animación de letras en Hero
// document.querySelectorAll('.animated-text').forEach(text => {
//     const letters = text.textContent.split('');
//     text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
//     text.querySelectorAll('span').forEach((span, i) => {
//         span.style.animationDelay = `${i * 0.05}s`;
//     });
// });


// FAQ acordeón
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
// Formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado! Te contactaré pronto.');
    this.reset();
});
