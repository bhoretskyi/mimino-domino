
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
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      centerMode: true,
      slidesToShow: 1,
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

$('.two-time').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});
$('.left-two').on("click", function () {
  $('.two-time').slick('slickPrev');
})
$('.right-two').on("click", function () {
  $('.two-time').slick('slickNext');
});

$('.three-time').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});
$('.left-three').on("click", function () {
  $('.three-time').slick('slickPrev');
})
$('.right-three').on("click", function () {
  $('.three-time').slick('slickNext');
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

$('.details-hotel-slick').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  cssEase: 'linear',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

$('.details-restaurant-slick').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  cssEase: 'linear',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});


$('.about-kitchen-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  variableWidth: true,
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

$('.about-hotel_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: true,
  variableWidth: true,
  arrows: true,
});

