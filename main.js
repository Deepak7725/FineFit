$(document).ready(function () {
    window.addEventListener('load', function () {
        AOS.init({
            duration: 800,
            once: true,
        });
        scrollToTop();
    });
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    $(window).trigger('scroll');

    $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st > 20) {
            $('.navbar').addClass('bg-black').removeClass('bg-transparent');
        } else {
            $('.navbar').removeClass('bg-black').addClass('bg-transparent');
        }
    });

    $('.accordion-button').on('click', function () {
        $('.accordion-button').removeClass('bg-danger text-white');
        $(this).addClass('bg-danger text-white');
    });

});