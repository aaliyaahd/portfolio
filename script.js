// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// =====================
// EXPLORE BUTTON
// =====================

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// =====================
// SCROLL ANIMATION
// =====================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    'section, .card, .timeline-item, .achievement-card, .certificate-card, .project-card'
).forEach((el) => {
    observer.observe(el);
});

// =====================
// ACTIVE NAVBAR
// =====================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// =====================
// NAVBAR EFFECT
// =====================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.15)";

    } else {

        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";

    }

});


// =====================
// COUNTER ANIMATION
// =====================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }

    };

    updateCounter();

});

// =====================
// HAMBURGER MENU
// =====================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}