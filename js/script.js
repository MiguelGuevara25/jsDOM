//!querySelector
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
console.log(heading);

//!querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');

enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

//!Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//*Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//*Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//*Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//*Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//!Eventos
// console.log(1);

// window.addEventListener('load', () => console.log(2))

// window.onload = () => console.log(3);

// document.addEventListener('DOMContentLoaded', () => console.log(4))

// console.log(5);

// window.onscroll = () => console.log('scrolling...');

//!Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {

//     evento.preventDefault();

//     //?Validando formulario
//     console.log('enviando formulario');
// })



//!Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

//!El evento de Submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //?Validar Formulario
    const {
        nombre,
        email,
        mensaje
    } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'pinga');
        return;
    }

    mostrarAlerta('Todo se añadió correctamente');

})

function leerTexto(e) {

    datos[e.target.id] = e.target.value;

    //console.log(datos)
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error !== null) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //*Desaparezca después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000)
}