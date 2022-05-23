// DOM 
const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')

// Event
let isOpen = true
menuIcon.addEventListener('click', function() {
    menu.classList.toggle('hidden')
})