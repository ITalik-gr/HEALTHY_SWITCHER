

  $('.about-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          arrows: false,
          dots: false
        }
      },
    ]
  });

  $('.chefs-slider').slick({
    infinite: true  ,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          autoplay: true,
          arrows: false,
          dots: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 510,
        settings: {
          autoplay: true,
          arrows: false,
          dots: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

