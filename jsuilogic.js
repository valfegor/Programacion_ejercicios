//por medio de este script enviamos los datos para ser enviados a nuestro arreglo.

//la idea es que cuando demos clic al boton de salvar
//se envien los datos a ese arreglo y los muestre en la tabla

//utilizamos el id del boton.

boton = document.getElementById("btnAmigo").addEventListener("click",añadirAmigo);
let sId = document.querySelector("#ID");
let sNombre = document.getElementById("NOMBRE");
let sCiudad = document.getElementById("CIUDAD");
let sCumpleaños = document.getElementById("CUMPLEAÑOS");
let sEmail = document.getElementById("EMAIL");

//se activa para que cuando de clic se envien los datos.
//se crea la variable que va a tener el valor de ese campo de texto del formulario

//una vez tengamos todos los datos vamos a enviarlos a INFORMACIONAMIGOS

//LLAMAMOS LA FUNCION Y LE PASAMOS LOS PARAMETROS


let listaAmigos = [];



function listadeAmigos(){
    sId = prompt("digite su nombre");
    añadirAmigo(sId, sNombre, sCiudad, sCumpleaños, sEmail);
}

//voy a crear la funcionalidad para poder agregar un amigo.

//se debe tomar en consideracion una pequeña aplicacion para llevar una agenda.

//Aqui se va a almacenar toda la coleccion de amigos

//se reciben todos los datos para empezar a construir nuestro objeto amigo

function añadirAmigo(pid, pname, pcountry, pbirthday, pemail) {
  //se genera el objeto
  let nuevoAmigo = {
    id: pid,
    nombre: pname,
    ciudad: pcountry,
    cumpleaños: pbirthday,
    email: pemail,
  };
  listaAmigos.push(nuevoAmigo);
  console.log(nuevoAmigo);
  //este nuevo objeto lo vamos a agregar a la lista de objetos.
}
