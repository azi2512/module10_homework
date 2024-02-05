const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const myWidth = document.documentElement.clientWidth;
    const myHeight = document.documentElement.clientHeight;
    alert(`Ширина экрана: ${myWidth} пикселей, высота экрана: ${myHeight} пикселей.`)  
})