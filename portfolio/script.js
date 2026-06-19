/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const roles = [
    "Aspiring Software Engineer",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollTopBtn =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   HEADER SHADOW EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .project-card, .section-title"
    );

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }

    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   PARTICLE BACKGROUND
========================= */

const canvas =
    document.createElement("canvas");

canvas.id = "particles";

document.body.prepend(canvas);

const ctx =
    canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";

function resizeCanvas() {
    canvas.width =
        window.innerWidth;
    canvas.height =
        window.innerHeight;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

const particles = [];

for (let i = 0; i < 80; i++) {

    particles.push({
        x: Math.random() *
            canvas.width,

        y: Math.random() *
            canvas.height,

        radius:
            Math.random() * 2 + 1,

        speedX:
            (Math.random() - 0.5)
            * 0.5,

        speedY:
            (Math.random() - 0.5)
            * 0.5
    });

}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle) => {

        particle.x +=
            particle.speedX;

        particle.y +=
            particle.speedY;

        if (
            particle.x < 0 ||
            particle.x > canvas.width
        ) {
            particle.speedX *= -1;
        }

        if (
            particle.y < 0 ||
            particle.y > canvas.height
        ) {
            particle.speedY *= -1;
        }

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0,212,255,0.5)";

        ctx.fill();
    });

    requestAnimationFrame(
        animateParticles
    );
}

animateParticles();


/* =========================
   CONTACT FORM SUCCESS
========================= */

const form =
    document.querySelector("form");

if (form) {

    form.addEventListener(
        "submit",
        () => {

            setTimeout(() => {

                alert(
                    "Message sent successfully!"
                );

            }, 500);

        }
    );
}