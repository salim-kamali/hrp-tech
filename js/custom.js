
$(document).on('ready', function () {
    $(".client-slider").slick({
        dots: false,
        arrows:true,
        infinite: true,
        autoplay:true, 
        speed:1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});