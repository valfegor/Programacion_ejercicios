//obtengo el encabezado
// de la clase padre que es contenido-hero tomo el H1 
const encabezado = document.querySelector('.contenido-hero h1');

//esto permite ver el conenido del encabezado
console.log(encabezado.innerText);//si en el CSS - tiene visibility:hidden; no va a encontrar el texto

//muestra el contenido del texto 
console.log(encabezado.textContent);

//permite ver el texto con todo su contenido es decir si tiene etiquetas SPAM 
//se visualiza
console.log(encabezado.innerHTML);

//tambien se puede encadenar estas propiedades.
//esto muestra el texto en si de la etiqueta
const encabezado1 = document.querySelector('.contenido-hero h1').textContent;


//ejemplo para cambiar el texto mas facil

//esto cambia el valor del titulo por nuevo trabajo
document.querySelector('.contenido-hero h1').textContent = "Nuevo trabajo";

//o tambien por una variable

const nuevotitulo = "Yisder";

document.querySelector('.contenido-hero h1').textContent= nuevotitulo;

//tambien se pueden modificar imagenes.

const imagen = document.querySelector('.card img');
