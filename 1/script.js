const btn = document.querySelector('.btn');
const btn_icons = document.querySelectorAll('.btn_icon');

btn.addEventListener('click', () => {
    btn_icons.forEach((icon) => {
        icon.classList.toggle('btn_icon-magic')
    })     
})