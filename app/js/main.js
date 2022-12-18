$(function() {
    $('.slider').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: 3000,
    });

    $('.header-btn').on('click', () => {
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click', () => {
        $('.menu').removeClass('active');
    });
});