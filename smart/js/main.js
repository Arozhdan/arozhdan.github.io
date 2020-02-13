$(function () {
  document.querySelector('[data-nav-btn]')
    .addEventListener('click', () => {
      document.querySelector('[data-nav-list]')
        .classList.toggle('hidden')
    })
  document.addEventListener('scroll', () => {
    document.querySelector('[data-nav-list]')
      .classList.add('hidden')
  })
});