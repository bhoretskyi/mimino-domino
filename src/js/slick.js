 $('.about-restaurant_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  variableWidth: true,
  arrows: true,
});

$('.lux-time').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1.5,
      slidesToScroll: 1,
    }
  }]
});
$('.left').on("click", function () {
  $('.lux-time').slick('slickPrev');
})
$('.right').on("click", function () {
  $('.lux-time').slick('slickNext');
});

$('.about-hotel-slick').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
});

$(document).ready(function () {
  $('.show').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    variableWidth: true,
    centerMode: true,
  });
});

$(document).ready(function () {
  $('.slideshow').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    variableWidth: true,
    centerMode: true,
  });
});


$(document).ready(function () {
  $('.slidephoto').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    variableWidth: true,
    centerMode: true,
  });
});