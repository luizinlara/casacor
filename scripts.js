const $menu = document.getElementById('menu');
const $btn = document.getElementById('btn');
const $btn_close = document.getElementById('btnClose')
const $toggle_class = document.querySelector('.menu-item')
const $menu_background = document.querySelector(`.menu-background`)
let state = false


$btn.addEventListener('click', () => {
    if($menu.style.left = '0px') {
        $menu.style.left = '-450px'
        $menu_background.style.left = '0px'
        $btn.classList.add('girar-icone') /**Gira o icone */
    } else {
        $menu.style.left = '-450px';
        $menu_background.style.left = '300px'
        $btn.classList.remove('girar-icone') /**remove o Giro o icone */
    }
})
