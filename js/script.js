// ==========================
// ANIMACIÓN FADE AL HACER SCROLL
// ==========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            // Deja de observar la sección una vez que apareció
            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

/* ==========================
MÚSICA
========================== */

const audio = document.getElementById("music");
const button = document.getElementById("music-btn");
const icon = document.getElementById("music-icon");

let isPlaying = false;

// Intentar reproducir automáticamente
window.addEventListener("load", async () => {

    try {

        await audio.play();

        isPlaying = true;
        icon.src = "./assets/icons/music-on.svg";

    } catch {

        isPlaying = false;
        icon.src = "./assets/icons/music-off.svg";

    }

});

// Alternar reproducción
button.addEventListener("click", async () => {

    if (isPlaying) {

        audio.pause();

        isPlaying = false;
        icon.src = "./assets/icons/music-off.svg";

    } else {

        try {

            await audio.play();

            isPlaying = true;
            icon.src = "./assets/icons/music-on.svg";

        } catch (error) {

            console.error(error);

        }

    }

});


// ==========================
// COUNTDOWN
// ==========================

const eventDate = new Date("August 22, 2026 20:30:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".timer").innerHTML = "¡El gran día llegó!";
    }

}, 1000);