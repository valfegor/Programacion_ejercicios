//Queryselectorall

//la sintaxis es la misma que los selectores en CSS

//#para ids .class para la clase selectores de html body , nav

//queryselectorall trae todos los elementos con el nombre de clase o id;

const card = document.querySelectorAll('.card');
//esto devuelve en si un arreglo o un NODELIST
console.log(card);

const formulario = document.querySelectorAll('#formulario');
