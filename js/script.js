$(document).ready(function() {


    if($('.print-slider')) {
        $('.print-slider').slick({
            infinite: true,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            appendArrows: $('.outside-print__slider-controls'),
            prevArrow: '<a href="#" class="outside-print__slider-prev"></a>',
            nextArrow: '<a href="#" class="outside-print__slider-next"></a>'
        });
    }
    if($('.testimonials-slider')) {
        $('.testimonials-slider').slick({
            infinite: true,
            centerMode: true,
            // centerPadding: '25px',
            slidesToShow: 1,
            arrows: true,
            cssEase: 'linear',
            variableWidth: true,
            appendArrows: $('.testimonials__slider-controls'),
            prevArrow: '<a href="#" class="testimonials__slider-prev"></a>',
            nextArrow: '<a href="#" class="testimonials__slider-next"></a>'
        });
    }
});