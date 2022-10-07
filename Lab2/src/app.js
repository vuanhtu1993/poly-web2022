var menu = document.querySelector('#mobile-menu')
var btnMobileMenu = document.querySelector('#btn-mobile-menu')
var btnMenu = document.querySelector('#btn-menu')


btnMobileMenu.onclick = function() {
    menu.classList.add('hidden')
}

btnMenu.onclick = function() {
    menu.classList.remove('hidden')
}