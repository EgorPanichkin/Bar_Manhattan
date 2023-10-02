const elements = document.querySelectorAll('.inner__item')

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mouseenter', () => {
    let more = elements[i].firstChild.nextElementSibling
    more.classList.add('active')
})
  elements[i].addEventListener('mouseleave', () => {
    let more = elements[i].firstChild.nextElementSibling
    more.classList.remove('active')})
}

const buttons = document.querySelectorAll('.button')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    let image = buttons[i].parentNode.nextElementSibling.src
    openPhoto(image)
    maskActive(image)
    maskRemove(image)
  })
}

function openPhoto(photo) {
  let inner = document.querySelector('.inner')
  let bigPhoto = document.createElement('img')
  bigPhoto.setAttribute('class', 'big-image')
  bigPhoto.setAttribute('src', photo)
  console.log(bigPhoto)
  inner.append(bigPhoto)
}

function maskActive() {
  let mask = document.querySelector('.mask')
  mask.style.display = 'block'
  mask.style.cursor = 'pointer'
}

function maskRemove() {
  let mask = document.querySelector('.mask')
  mask.addEventListener('click', () => {
    mask.style.display = 'none'
    let bigPhoto = document.querySelector('.big-image')
    bigPhoto.parentElement.removeChild(bigPhoto)
  })

}
