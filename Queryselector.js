//Query selector permite seleccionar
//digamos quiero seleccionar todas las tarjetas.
//Aqui se pasa un selector como si fuera de CSS.
//esto solo retorna 1 es decir el primer elemento
const card = document.querySelector('.card');

//podemos tener selectores especificos como en CSS.
//es decir selecciono el primer elemento y despues el el otro que seria info
const info = document.querySelector('.premium .info');

//seleccionar el segundo card de hospedaje

//Selecciona el segundo elemento 
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');


//querySelector permite tambien seleccionar IDS;
//se utiliza el gato
const forumario = document.querySelector('#formulario');

//seleccionar elementos HTML

const navegacion = document.querySelector('nav');