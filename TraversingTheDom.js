//traversing the dom recorrer el DOM como un mapa

const navegacion = document.querySelector('nav');

console.log(navegacion);

//aparecen los diferentes elementos en forma de array.
//Trae los elementos como espacios en blanco , es decir los elementos en blanco son considerados elementos.
console.log(navegacion.childNodes);

//esto trae todos los elementos HTML de la clase navegacion.
console.log(navegacion.children);

//los elementos retornados por children tambien son en forma de arreglo.

//Esto lista el primer elemento
console.log(navegacion.children[0]);

//node name es la etiqueta
//node TYPE devuelve un numero dependiendo de su valor.

//esto devuelve una A
console.log(navegacion.children[1].nodeName);

//esto devuelve un 1 segun el valor del elemento puede ser un numero diferente dependiendo de el elemento en si.
console.log(navegacion.children[1].nodeType);


const card = document.querySelector('.card');

//igual devuelve un arreglo
//esto lista los hijos de ese elemento
console.log(card.children[1].children);



//si quisiera acceder al titulo.
//Esto ya me trae el texto

console.log(card.children[1].children[1].textContent);

//si quisiera acceder al texto para modificarlo puedo hacerlo de la siguiente manera.

card.children[1].children[1].textContent="Holix";

//como cambiar una imagen utilizando traversing the dom.

//en esta posicion se encuentran la imagen.
console.log(card.children[0]);

//si quisiera cambiar la imagen.

card.children[0].src = '';

//es decir se selecciona el elemento padre y children para acceder a los elementos hijos

//traversing del hijo al padre.

//esto lista el elemento padre
//pero esto toma los espacios en blanco
console.log(card.parentNode);

//listar elementos del padre sin espacios en blanco.

console.log(card.parentElement);

//tambien se puede seguir subiendo de etiqueta.

console.log(card.parentElement.parentElement);
//lo anterior imprime un section

//los elementos iguales se consideran como hermanos.

//esto selecciona el segundo elemento;
console.log(card.nextSibling);

//se puede seguir seleccionando de esa manera.

console.log(card.nextSibling.nextSibling);


//tambien se puede ir al ultimo card.
//accedo a el ultimo div
const ultimacard = document.querySelector('.card:nth-child(4)');

console.log(ultimacard);

//si quiero recorrer el anterior.

console.log(ultimacard.previousElementSibling);

//tambien si quiero acceder a un elemento.

console.log(navegacion.firstElementChild);
//si quiero el ultimo.

console.log(navegacion.lastElementChild);