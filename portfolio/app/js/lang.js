//lang
$('.lang-selection').on('click', function () {
  $('.lang-selection').each(function (index) {
    $(this).removeClass('lang-selected')
  });
  if ($(this).text() === 'ENG') {
    $(this).addClass('lang-selected')
    $('.nav-btn__home').text('Home')
    $('.nav-btn__about').text('about')
    $('.nav-btn__skills').text('skills')
    $('.nav-btn__portfolio').text('portfolio')
    $('.nav-btn__contacts').text('contacts')
    $('.header-occupancy').html(`Frontend web-developer <br>20 y.o, Valencia
    `)
    $('.about .section-title').text('About me')
    $('.about-content').html(`Hi everyone! My name is Arozhdan Baibussynov, I'm 20y.o Right now I am taking my exchange program web development classes in Valencia, Spain. I have been doing web for about lat 2-3 years, like the stuff  I do (especially the result in the end)<br><br>
    All the information and practice I get either by myself or sometimes via my professors from Prague (where I live regularly) and from Valencia Polytechnic Uni
    `)
    $('.skills .section-title').text('Skills')
    $('.skills-paragraph').text(`HTML, CSS, JAVASCRIPT, JQUERY, a set of different libraries (such as SLICK SLIDER, AOS, ANIMATE.CSS), BOOTSTRAP 4, CSS
    SCSS, SASS, LESS, BEM, cross-browser compatibility, adaptive design, OCTOBER CMS + elementary WordPress,
    NPM, GULP, GIT, some of NODE JS + EXPERIENCE + EJS + MongoDB.`)
    $('.portfolio .section-title').text('Portfolio')
    $('.contacts .section-title').text('Contacts')
    $('.contacts-text').html(`U got any questions? Or have something to offer? <br><br> Then just text me`)
    $('.contact-btn').text('Text him')

  }
  else{
    location.reload();
  }
})