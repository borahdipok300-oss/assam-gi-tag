const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});
// Gallery Image Preview
const galleryImages = document.querySelectorAll(".gallery img");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        imageModal.classList.add("active");
        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});

closeModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
});

imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
        imageModal.classList.remove("active");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        imageModal.classList.remove("active");
    }
});
