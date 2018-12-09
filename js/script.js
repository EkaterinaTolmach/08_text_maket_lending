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
});