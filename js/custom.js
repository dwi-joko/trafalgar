$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".header").addClass("fixed");
    // $("header").slideDown(1000);
  } else {
    $(".header").removeClass("fixed");
    // $("header").slideUp(1000);
  }
});

$(document).ready(function () {
  $(".testimonial-wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplaySpeed: 2000,
  });
});
