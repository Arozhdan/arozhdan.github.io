$(function () {
  $('.gallery-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 700,
  fade: true,
  cssEase: 'linear',
  autoplay: true
});
$('.slick-prev').addClass('gallery-prev gallery-arrow').text('<');
$('.slick-next').addClass('gallery-next gallery-arrow').text('>');
$('.slick-dots').addClass('gallery-dots')
$('.slick-dots> li').text('●').addClass('gallery-dot')
});
