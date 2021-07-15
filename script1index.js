let elemento;

//document es basicamente todo el html que se tiene en el documento.
//lista todos los elementos que conforman el html del proyecto
document.all
//lista todos los elementos de head las metas etc
document.head;

//se puede seleccionar el body , muestra todo lo que este en la etiqueta body.

document.body;

//tambien se puede seleccionar el dominio actual

document.domain;

//tambien se puede acceder a elementos como formularios.
//Esto devuelve un arreglo pero se conoce como html collections
document.forms;

document.forms[0];

//tambien puedo acceder al id

document.forms[0].id;

//tambien puedo acceder al metodo

document.forms[0].method;

//tambien puedo acceder a las clases.

document.forms[0].classList;

//tambien puedo acceder al action

document.forms[0].action;

//tambien puedo acceder a los links o urls que tiene el proyecto.

document.links;

//tambien puedo acceder a las clases que tienen ejemplo un boton

document.links[4];

//asi mismo puedo acceder a la clase.
//esto lo devuelve en forma de arreglo

document.links[4].classList;

//esto retorna como si fuera un string
document.links[4].className;