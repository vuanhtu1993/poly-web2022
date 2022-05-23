const menuIcon = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')

menuIcon.addEventListener('click', function(e) {
    console.log(menu)
    menu.classList.toggle("hidden")
})