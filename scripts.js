document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function enlargeImage(img) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '10000';

    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90%';

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

function showMap() {
    const mapUrl = `https://www.google.com/maps?q=41.1539840698242,29.6000671386719&z=15&output=embed`;
    window.open(mapUrl, '_blank');
}

function redirectTo(url) {
    window.location.href = url;
}

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Otomatik geçiş için
setInterval(() => changeSlide(1), 5000);