const $menu = document.querySelector('.yk-caixa');
const $menu_background = document.querySelector('.yk-menu-background');
const $menuIcon = $menu_background.querySelector('.yk-menu-icon')
const $open_icon = $menuIcon.querySelector('.yk-open-icon');
const $close_icon = $menuIcon.querySelector('.yk-fa-caret-left');
$menu.classList.add('yk-caixa-close')
/* barra navbar */

const $navbar = document.querySelector('.yk-nave')

const $open_nav_bar_icon = document.getElementById("yk-expand_navbar")
$menuIcon.addEventListener('click', () => {
    if($menu.className == 'yk-caixa yk-caixa-close') {
        $menu.classList.add('yk-caixa-open')
        $menu_background.style.left = '300px';
        $menuIcon.classList.toggle('yk-close-icon')
    }
    else {
        $menu.classList.remove('yk-caixa-open')
        $menu_background.style.left = '0px';
        $menuIcon.classList.remove('yk-close-icon')
    }

});
// $open_nav_bar_icon.addEventListener('click', () => {
//     if($navbar.classList == 'yk-nave open-bar')
//     {
//         $navbar.classList.add("yk-close-bar")
//         $navbar.classList.remove('yk-open-bar')
//     } else {
//         $navbar.classList.add('yk-open-bar')
//     }
// })