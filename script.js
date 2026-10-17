
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    counter.textContent =
        String(index + 1).padStart(2, "0") +
        " / " +
        String(slides.length).padStart(2, "0");

    progressBar.style.width =
        ((index + 1) / slides.length * 100) + "%";

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
}

nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" &&
        currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }

    if (event.key === "ArrowLeft" &&
        currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

showSlide(currentSlide);
