const $menu = document.querySelector('.caixa');
const $menu_background = document.querySelector('.menu-background');
const $menuIcon = $menu_background.querySelector('.menu-icon')
const $open_icon = $menuIcon.querySelector('.open-icon');
const $close_icon = $menuIcon.querySelector('.fa-caret-left');
$menu.classList.add('caixa-close')
/* barra navbar */

const $navbar = document.querySelector('.nave')

const $open_nav_bar_icon = document.getElementById("expand_navbar")
$menuIcon.addEventListener('click', () => {
    if($menu.className == 'caixa caixa-close') {
        $menu.classList.add('caixa-open')
        $menu_background.style.left = '300px';
        $menuIcon.classList.toggle('close-icon')
    }
    else {
        $menu.classList.remove('caixa-open')
        $menu_background.style.left = '0px';
        $menuIcon.classList.remove('close-icon')
    }

});
$open_nav_bar_icon.addEventListener('click', () => {
    if($navbar.classList == 'nave open-bar')
    {
        $navbar.classList.add("close-bar")
        $navbar.classList.remove('open-bar')
    } else {
        $navbar.classList.add('open-bar')
    }
})