//como crear un elemento CARD con JS.
//esto es muy comun cuando se consumen datos , es decir se obtienen los datos y se muestran en el HTML de la pagina.

//los cards de esta pagina tienen 3 clases categoria-concierto , titulo , precio.

//lo primero es generar 3 parrafos.

//creamos el primer parrafo
const parrafo1 = document.createElement('P');
//le añado el texto que va a tener
parrafo1.textContent = 'concierto';
//ahora añado la clase que le va a dar el estilo.
parrafo1.classList.add('categoria', 'concierto');




//creamos el segundo parrafo
const parrafo2 = document.createElement('p');
//en este caso seria configurar el titulo.

parrafo2.textContent = "Concierto de rocksito";
//le añadimos la clase
parrafo2.classList.add('titulo');


//creamos el tercer parrafo
//el parrafo 3 tiene el precio

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';

parrafo3.classlist.add('precio');


//ahora estos elementos se encuentran guardados en un div

//crear DIV con la clase info

const info = document.createElement('div');

//se añade la clase.

info.classList.add('info');


//una vez creado el elemento ya se puede agregar un appendchild.
//vamos a agregar los parrafos en este caso el orden es importante.

//esto crea el div con la clase info y ya contiene los diferentes parrafos.
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//ya tenemos todos los parrafos ahora solo falta la imagen.

//creando la imagen.

const imagen = document.createElement('img');
//esta es la ruta de la imagen
imagen.src = "/imagen"

imagen.alt = "Soy una imagen";

//tambien se pueden añadir clases de bootstrap

//como por ejemplo img-fluid que es la que las hace responsive.

//ahora lo ultimo que falta es el div padre que tiene la clase de Card.

//crear el card.

const card = document.createElement('div');

card.classList.add('card');

//ahora vamos a asignar la imagen.

card.appendChild(imagen);

//asignar el div info

card.appendChild(info);

//ahora tenemos que decidir en que parte voy a colocarlo.

//en este caso voy a colocarlo en el section que tiene la clase hacer.

//Selecciono el elemento existente.

//Selecciono la clase hacer que es el div padre y despues selecciono la clase contenedorcards
//este es el div en donde voy a insertar mis elementos creados;
const contenedor = document.querySelector('.hacer .contenedor-cards');

//agregamos nuestra card.

contenedor.appendChild(card);

//si quiero mostrarlo al inciio.

//para que lo muestre al incio;
contenedor.insertBefore(card , contenedor.children[0]);


