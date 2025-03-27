// Slide between sections: outside code from https://www.w3schools.com/howto/howto_js_slideshow.asp and implemented/tweaked with Claude AI

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

document.querySelectorAll('.next').forEach((button) => {
    button.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });
});

document.querySelectorAll('.prev').forEach((button) => {
    button.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });
});

document.querySelector('.home').addEventListener('click', () => {
    currentSlide = 0;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Cards and popups, implemented w/ JS Review Activty and Claude AI

function openPopup(id) {
    const popup = document.getElementById(`${id}-popup`);
    popup.style.display = "block";
}

function closePopup(id) {
    const popup = document.getElementById(`${id}-popup`);
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section"); //outside code https://www.w3schools.com/jsref/met_document_queryselectorall.asp

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Sources modal

const modalContainerRef = document.getElementById("modalContainer");
//us going to html file and grabbing modal container element so we can use it

function openModal() {
    document.getElementById("modalContainer").style.display = "flex"; // This shows the modal
}

function closeModal() {
    document.getElementById("modalContainer").style.display = "none"; // This hides the modal
}
