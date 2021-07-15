//como agregar un color.

const encabezado = document.querySelector('h1');


//permite ver los estilos
console.log(encabezado.style);

//las propiedades de CSS tambien se pueden cambiar por medio de JS no lleva (-) y la segunda palabra va en mayuscula background-color = backgroundColor. 
encabezado.style.backgroundColor = 'red';

//cambiar el estilo de la letra.

encabezado.style.fontFamily = 'Arial';

//si quiero transformas a mayusculas el texto.

encabezado.style.textTransform = 'uppercase';


//como agregar o quitar clases.
const card = document.querySelector('.card');

//Se puede buscar ClassList = devuelve todas las clases como si fuera un arreglo
//classname devuelve como si fuera un string
console.log(card);

//para agregar una clase con classlist.
//es decir esto añade una clase nueva a el elemento
card.classList.add('nueva-clase');

//tambien se pueden añadir mas de 1 clase.

card.classList.add('nueva-clase','segunda-clase');

//como remover una clase.

card.classList.remove('nueva-clase');

