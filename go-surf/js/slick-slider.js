$(function() {
  $(".slider_dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header_slider",
    asNavFor: ".header_map"
  });

  $(".header_map").slick({
    fade: true,
    arrows: false,
    asNavFor: ".header_slider",
    asNavFor: ".slider_dots"
  });

  $(".header_slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="img/arrow-left.svg" ></img>',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="img/arrow-right.svg" ></img>',
    asNavFor: ".slider_dots",
    asNavFor: ".header_map",
    autoplay: true,
    autoplaySpeed: 10500
  });

  $(".surf_map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".surf_slider"
  });

  $(".surf_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="img/arrow-left.svg" ></img>',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="img/arrow-right.svg" ></img>',
    asNavFor: ".surf_map"
  });

  $(".travel_slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="img/arrow-left.svg" ></img>',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="img/arrow-right.svg" ></img>',
    asNavFor: ".sleep_slider"
  });

  $(".sleep_slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="img/arrow-left.svg" ></img>',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="img/arrow-right.svg" ></img>',
    asNavFor: ".travel_slider"
  });

  $(".shop_slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="img/arrow-left.svg" ></img>',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="img/arrow-right.svg" ></img>'
  });
});
