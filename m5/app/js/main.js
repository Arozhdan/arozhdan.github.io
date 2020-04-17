$(function () {
  $('#header-btn').on('click', function () {
    dispay('.article-1')
  })
  $('.article-2-btn').on('click', function () {
    dispay('.article-2')
  })
  $('.nav-burger').on('click', toggleMenu)
});

function dispay(targetItem) {

  $(targetItem).animate({
    'top': '0%'
  }, 900)
  $('body').css('overflow-x', 'hidden')
  setTimeout(
    function () {
      navBtn.html(`<img src="img/icn-navigation1.svg" alt="menu">`)
    }, 1000);

  var navBtn = $('.nav-burger')
  navBtn.addClass('article-close')
  navBtn.on('click', function () {
    if ($(targetItem).css('top') != '150694') {
      navBtn.removeClass('article-close')

      $(targetItem).animate({
        'top': '150694px'
      }, 1500)
      $('body').css('overflow-x', 'visible')
      setTimeout(
        function () {
          navBtn.html(`<img src="img/icn-navigation.svg" alt="menu">`)
        }, 300);
    }
  })
}
$('.view-more-btn').on('click', function (event) {
  $('.article-popup').animate({
    'top': '0'
  }, 300)
  event.stopPropagation()
  $(document).on('click', function (event) {
    if (event.target.classList.value != 'article-popup' && event.target.classList.value != 'article-popup' && 'article-popup-content' && event.target.classList.value != 'article-popup-heading') {
      $('.article-popup').animate({
        'top': '150694px'
      }, 300)
    }
  })
})

function toggleMenu() {
  if ($('.menu').css('left') != '0px' && !$('.nav-burger').hasClass('article-close')) {
    $('.menu').animate({
      'left': '0'
    }, 1000)
    $('.nav').animate({
      'right': '82%'
    }, 1000)
    setTimeout(
      function () {
        $('.nav-fixed-top').css('display', 'none')
        $('body').css('overflow-x', 'hidden')
        $('.nav-burger').html(`<img src="img/icn-navigation1.svg" alt="menu">`)
      }, 1000);

  } else {
    $('.menu').animate({
      'left': '15694px'
    }, 1000)
    $('.nav').animate({
      'right': '5%'
    }, 1000)
    setTimeout(
      function () {
        $('.nav-fixed-top').css('display', 'block')
        $('body').css('overflow-x', 'visible')
        $('.nav-burger').html(`<img src="img/icn-navigation.svg" alt="menu">`)
      }, 300);
  }
}