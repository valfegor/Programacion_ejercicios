//generar HTML desde JAVASCRIPT
//EJEMPLO TWITTER TIENE UN TEXT AREA Y CUANDO SE PRESIONA UN BOTON SE COLOCA EN LA LISTA DE TODOS LOS TWEETS

//crear un nuevo enlace.

//se pasa por medio de el parametro la etiqueta a utilizar
const enlace = document.createElement('div');

const enlace2 = document.createElement('A');


//añadiendo el texto
enlace.textContent = "Nuevo enlace";

//añadiendo el href:

enlace.href ='/nuevoenlace';
//auno se agrega en el DOM hasta ahora se esta construyendo el enlace


//tambien se puede añadir un target.

enlace.target = '_blank';

//como mostrar el enlace creado.

//quiero mostrarlo en la navegacion debo seleccionar la navegacion.

const navegacion = document.querySelector('.navegacion');

//tengo un metodo para agregar un hijo nuevo con appendChild.

//appendChild lo agrega al final del elemento padre
navegacion.appendChild(enlace);


//es decir en resumidas cuentas se construye un enlace con el codigo y luego se agrego a la navegacion.


//si quiero colocarlo entre algun otro hijo se utiliza .insertBefore , esto requiere 2 argumentos
//1 el elemento que queremos agregar el segundo es donde deseo mostrarlo.

//como es before se traduce como insertar antes de 

//inserte el enlace antes de la posicion numero 1
navegacion.insertBefore(enlace,navegacion.children[1]);


//lo mismo que se tenga en el html se puede construir