const menuBtn = document.querySelector('#menu-button')
const menu = document.querySelector('#menu')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('invisible')
})