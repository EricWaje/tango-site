const menu = document.getElementById('menu');
const hamb = document.getElementById('hamb');
/* const hamb = document.querySelector('.hamb'); */
//FORM
const btn = document.getElementById('submit');
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const comentarios = document.getElementById('textArea');

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

(function () {
    emailjs.init('user_hCqWm2f1dBjU8MxczFLo6');
})();

const sendEmail = (e) => {
    e.preventDefault();
    validarCampos();
};

const enviarForm = (nombre, email, comentarios) => {
    emailjs.send('service_lgkw6fh', 'template_8ul9lqf', {
        nombre: nombre,
        email: email,
        comentarios: comentarios,
    });
};

const validarCampos = () => {
    if (nombre.value === '' || email.value === '' || comentarios.value === '') {
        completarCampos();
    } else {
        enviarForm(nombre.value, email.value, comentarios.value);
        exito();
        form.reset();
    }
};

const completarCampos = () => {
    swal({
        text: 'Todos los campos son requeridos',
        icon: 'warning',
        button: 'Cerrar',
    });
};

const exito = () => {
    swal({
        text: 'Formulario enviado con éxito!',
        icon: 'success',
        button: 'Cerrar',
    });
};

const start = () => {
    btn.addEventListener('click', sendEmail);
    hamb.addEventListener('click', mostrarMenu);
};

window.onload = start;
