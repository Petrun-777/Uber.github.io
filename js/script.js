window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-1'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-1-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('menu-1-active');
        })
    })
})

console.log("test git")