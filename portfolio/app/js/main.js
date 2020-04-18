$(function () {
  let skillsBtn = $('#skill-more-btn')
  skillsBtn.on('click', function () {
    if (!$(this).hasClass('btn-close')) {
      $('.skills-paragraph').show(300)
      $(this).css('transform', 'rotateZ(90deg)').addClass('btn-close')
    } else {
      $('.skills-paragraph').hide(300)
      $(this).css('transform', 'rotateZ(0deg)').removeClass('btn-close')
    }
  })

  $('#work-more').on('click', function () {
    if (!$(this).hasClass('btn-close')) {
      $('.portfolio-additional').show(300)
      $(this).css('transform', 'rotateZ(90deg)').addClass('btn-close')
    } else {
      $('.portfolio-additional').hide(300)
      $(this).css('transform', 'rotateZ(0deg)').removeClass('btn-close')
    }
  })

  $(window).on('scroll', menuHandler)
});

function menuHandler() {
  let scrollPos = window.pageYOffset;
  if (scrollPos < $('.about').offset().top - 200) {
    removeBold()
    $('.nav-btn__home').addClass('nav-btn__active')
  }
  if (scrollPos > $('.about').offset().top) {
    removeBold()
    $('.nav-btn__about').addClass('nav-btn__active')
  }
  if (scrollPos > $('.skills').offset().top) {
    removeBold()
    $('.nav-btn__skills').addClass('nav-btn__active')
  }
  if (scrollPos > $('.portfolio').offset().top) {
    removeBold()
    $('.nav-btn__portfolio').addClass('nav-btn__active')
  }
  if (scrollPos >= $('.contacts').offset().top - 350) {
    removeBold()
    $('.nav-btn__contacts').addClass('nav-btn__active')
  }

}

function removeBold() {
  $('.nav-btn').each(function (index) {
    $(this).removeClass('nav-btn__active')
  });

}

$(".nav-btn__home").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: 0
    // $(".header").offset().top
  }, 800);
});

$(".nav-btn__about").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".about").offset().top + 10

  }, 800);
});

$(".nav-btn__skills").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".skills").offset().top + 10

  }, 800);
});

$(".nav-btn__portfolio").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".portfolio").offset().top + 10

  }, 800);
});

$(".nav-btn__contacts").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".contacts").offset().top + 10

  }, 800);
});
$('.mobile-nav-burger').on('click', function () {
  if (!$(this).hasClass('mobile-btn-close')) {
    $('.mobile-menu-list-wrapper').show(300)
    $(this).addClass('mobile-btn-close')
  } else {
    $('.mobile-menu-list-wrapper').hide(300)
    $(this).removeClass('mobile-btn-close')

  }
})

