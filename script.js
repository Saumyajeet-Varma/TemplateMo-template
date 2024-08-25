// Navbar
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // if (this.scrollY > 500) {
        //     $('.scroll-up-btn').addClass("show");
        // } else {
        //     $('.scroll-up-btn').removeClass("show");
        // }
    });

    // $('.scroll-up-btn').click(function () {
    //     $('html').animate({ scrollTop: 0 });
    // });

    // $('.menu-btn').click(function () {
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // });
});

// Carousel
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}