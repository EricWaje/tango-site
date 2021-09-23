const menu = document.getElementById('menu');
const hamb = document.getElementById('hamb');

const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    items[i].addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

const mostrarMenu = () => {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        hamb.style.borderRadius = '100%';
        hamb.style.backgroundColor = '#d5d5d51b';
        hamb.style.transition = 'all 0.3s ease-in-out';
    } else {
        menu.classList.remove('active');
        hamb.style.backgroundColor = 'transparent';
        hamb.style.transition = 'all 0.3s ease-in-out';
    }
};

const start = () => {
    hamb.addEventListener('click', mostrarMenu);
};

window.onload = start;
