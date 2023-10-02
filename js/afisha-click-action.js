const posters = document.querySelectorAll('.post')

for (let i = 0; i < posters.length; i++) {
  posters[i].addEventListener('click',() => {
    const infos = document.querySelectorAll('.info')
    for (let i = 0; i < infos.length; i++) {
      infos[i].classList.remove('active')
    }
    infos[i].classList.add('active')
})
}

