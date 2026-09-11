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
