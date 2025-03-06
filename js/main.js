const mobileMenuToggle = document.querySelector(".mobile-burger");

mobileMenuToggle?.addEventListener("click", function openMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("lock");
});

$(document).ready(function () {
    $('.specialties__slider').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        dots: true,
    });
});