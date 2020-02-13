$(function () {
  $('[data-apply]').on('click', function () {
    $('body').addClass('noscroll')
    $('.position-popup').css('display', 'block')
  })
  $('[data-position-send]').on('click', function () {
    $('body').removeClass('noscroll')
    $('.position-popup').addClass('.hidden')
  })

  $(document).mouseup(function (e) {
    let container = $(".position-popup");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut()
      $('body').removeClass('noscroll')

    }
  });
});