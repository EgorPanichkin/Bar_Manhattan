const eventsSelector = document.querySelectorAll('.events-selector')
const eventsLogo = document.querySelectorAll('.events-logo')


for (let i = 0; i < eventsSelector.length; i++) {
  eventsSelector[i].addEventListener('click', () => {
    for (const element of eventsSelector) {
      element.classList.remove('active')
    }
    for (const element of eventsLogo) {
      element.classList.remove('active')
    }
    eventsSelector[i].classList.add('active')
    console.log(i);
    eventsLogo[i].classList.add('active')
  })
}

const accordion = document.querySelectorAll('.accordion')


for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.classList.toggle('panel--active')
})}

