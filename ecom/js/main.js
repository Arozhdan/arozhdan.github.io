$(function(){
  $('.feedbacks-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feedbacks-nav'
  });
  $('.feedbacks-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.feedbacks-wrapper',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});
