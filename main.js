$(document).ready(function () {
  $(".testimonial-slider").slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots testimonial-dots",
  });
});
$(document).ready(function () {
  $(".news-slider").slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1700,
    autoplay: true,
    arrows: false,
    dots: true,
    centerMode: true,
    dotsClass: "slick-dots news-dots",
  });
});
