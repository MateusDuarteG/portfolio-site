// Scroll suave para navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Animação ao aparecer na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.card, .section-title, .sobre-texto, .info, .form-contato')
    .forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });


// Efeito leve no header ao rolar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(10,15,28,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "rgba(10,15,28,0.9)";
        header.style.boxShadow = "none";
    }
});