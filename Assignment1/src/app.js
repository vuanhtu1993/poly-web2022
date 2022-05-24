// DOM
const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')

// Event
let isMenuOpen = false
menuIcon.addEventListener('click', function(e) {
    if(isMenuOpen == false) {
        menu.classList.remove('hidden')
        isMenuOpen = true
    } else {
        menu.classList.add('hidden')
        isMenuOpen = false
    }
})
