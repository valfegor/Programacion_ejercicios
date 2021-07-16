//por medio de este script enviamos los datos para ser enviados a nuestro arreglo.

//la idea es que cuando demos clic al boton de salvar
//se envien los datos a ese arreglo y los muestre en la tabla

//utilizamos el id del boton.


boton = document.getElementById("btnAmigo");

//se activa para que cuando de clic se envien los datos.

boton.addEventListener("click",function(){
    //se crea la funcion para añadir nuestro amigo
    añadirAmigo();
})

function añadirAmigo(){
    //se crea la variable que va a tener el valor de ese campo de texto del formulario
    let sId = document.getElementById("txtId").value;
    let sNombre = document.getElementById("txtName").value;
    let sCiudad = document.getElementById("txtCountry").value;
    let sCumpleaños = document.getElement("txtBirthday").value;
    let sEmail = document.getElementById("txtEmail")

}