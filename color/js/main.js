const data = {
  card2: null,
  card3: [],
  card4: null
}



// //navigation

let page = 1
displayElements(page)

function displayElements(n) {
  let show = n
  document
    .querySelectorAll('[data-card-number]')
    .forEach(element => {
      if ((element.getAttribute("data-card-number") != n)) {
        element.classList.add('hidden')
      } else element.classList.remove('hidden')
    });
}

document.querySelectorAll('[data-btn-next]')
  .forEach(element => {
    element.addEventListener('click', function () {
      displayElements(++page)
    })
  });
document.querySelectorAll('[data-btn-back]')
  .forEach(element => {
    element.addEventListener('click', function () {
      displayElements(--page)
    })
  });
document.querySelector('[data-btn-finish]')
  .addEventListener('click', () => {
    if ((data.card2 == null) || (data.card4 == null) || (data.card3.length === 0)) {
      alert('Ответьте на все вопросы!')
    } else {
      displayElements(++page)
    }
  })

//2nd card logic
document.querySelector('[data-card2-question]')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const labelElement = event.target.closest('label')
    const inputElement = labelElement.querySelector('input')
    data.card2 = inputElement.value
    console.log(data.card2)
    progressChecker()
    this
      .querySelectorAll('label')
      .forEach(element => {
        element.classList.remove('radio-block--active')
      });
    labelElement.classList.add('radio-block--active')
    labelElement.querySelector('input').checked = true
  })


//3rd card logic
function toggleItem(array, item) {
  if (array.includes(item)) {
    const index = array.indexOf(item)
    array.splice(index, 1)
  } else {
    array.push(item)
  }
}

document.querySelector('[data-card3-question]')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const labelElement = event.target.closest('label')
    const inputElement = labelElement.querySelector('input')
    toggleItem(data.card3, inputElement.value)
    console.log(data.card3)
    progressChecker()

    this.querySelectorAll('label')
      .forEach(labelElement => {
        const inputElement = labelElement.querySelector('input')
        labelElement.classList.remove('checkbox-block--active')
        inputElement.checked = false
        if (data.card3.includes(inputElement.value)) {
          labelElement.classList.add('checkbox-block--active')
          inputElement.checked = true
        }
      })
  })


//4th card logic
document.querySelector('[data-card4-question]')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const labelElement = event.target.closest('label')
    const inputElement = labelElement.querySelector('input')
    data.card4 = inputElement.value
    console.log(data.card4)
    progressChecker()
    this
      .querySelectorAll('label')
      .forEach(element => {
        element.classList.remove('radio-block--active')
      });
    labelElement.classList.add('radio-block--active')
    labelElement.querySelector('input').checked = true
  })



//5th card logic 

document.querySelector('[data-btn-submit]')
  .addEventListener('click', function (event) {
    const email = document.querySelector('[data-submit-email]')
    const check = document.querySelector('[data-submit-checkbox]')
    const checkbox = check.querySelector('input')
    if (!checkbox.checked) {
      console.log(checkbox)
      check.querySelector('.checkbox__text').classList.add('important')
      alert('Вы должны согласиться  С политикой конфеденциальности')
    } else if (!email.value.includes('@','.') || email.value.length < 5) {
      alert(' Ошибка ввода E-mail ')

    } else {
      displayElements(++page)
    }
  })




function progressChecker() {
  document.querySelectorAll('.progress')
    .forEach(element => {
      let percent = element.querySelector('strong')
      let progBar=element.querySelector('.progress__line-bar')
      if (data.card2 != null) {
        percent.textContent = '100%'
        if ((data.card3.length != 0) && (data.card4 != null)) {
          percent.textContent = '100%'
          progBar.style.width='100%'
        } else if ((data.card3.length === 0) ^ (data.card4 == null)) {
          percent.textContent = '66.6%'
          progBar.style.width='66.6%'
        } else {
          percent.textContent = '33.3%'
          progBar.style.width='33.3%'
        }
      }
      else if (data.card3.length != 0) {
        percent.textContent = '100%'
        if ((data.card2 != null) && (data.card4 != null)) {
          percent.textContent = '100%'
          progBar.style.width='100%'
        } else if ((data.card2 == null) ^ (data.card4 == null)) {
          percent.textContent = '66.6%'
          progBar.style.width='66.6%'
        } else {
          percent.textContent = '33.3%'
          progBar.style.width='33.3%'
        }
      }
      else if (data.card4 != null) {
        percent.textContent = '100%'
        if ((data.card3.length != 0) && (data.card4 != null)) {
          percent.textContent = '100%'
          progBar.style.width='100%'
        }
        else if ((data.card3.length === 0) ^ (data.card2 == null)) {
          percent.textContent = '66.6%'
          progBar.style.width='66.6%'
        } else {
          percent.textContent = '33.3%'
          progBar.style.width='33.3%'
        }
      }
    })

}