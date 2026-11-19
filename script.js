
// =========================
// LUCIDE ICONS
// =========================

if (window.lucide) {
    lucide.createIcons();
}

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("svg");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = '<i data-lucide="x"></i>';
    } else {
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    }

    if (window.lucide) {
        lucide.createIcons();
    }
});

// Menutup menu setelah diklik
document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }
    });
});

// =========================
// TYPING ANIMATION
// =========================

const typingElement = document.querySelector(".typing");

const words = [
    "Sarjana Hukum",
    "Legal Enthusiast",
    "Fresh Graduate"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, letterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && letterIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    } else if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();


// =========================
// SCROLL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(function(element) {
        observer.observe(element);
    });
} else {
    revealElements.forEach(function(element) {
        element.classList.add("active");
    });
}

// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function() {

    let current = "home";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
