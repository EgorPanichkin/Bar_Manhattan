const booking = document.querySelector(".booking")
const bookingForm = document.querySelector(".booking-box__form")

booking.addEventListener('click', () => {
  event.preventDefault()
  
  if (bookingForm.style.display === 'flex') {
    bookingForm.style.display = 'none'
  } else {
    bookingForm.style.display = 'flex'
  }
})

let phoneInput = document.querySelector("#tel-input")
console.log(phoneInput)

const mask = new IMask (phoneInput, {
  mask: "+{7}(000)000-00-00",
})