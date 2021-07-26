//este script es realizado realizar el inicio del login.

//este script es la parte de inicio o pagina.

const formulario = document.getElementById("form");
const usuario = document.getElementById("username");
const contrasto = document.getElementById("contraseña");

console.log(contrasto)

//obtengo los datos al dar clic al boton de subimit.
formulario.addEventListener("submit",function(event) {

    event.preventDefault();


    //genero el array donde se van a guardar los datos
    let nuevoarray = [{
        nombre:usuario.value,
        contraseña:contrasto.value,
    }]

    console.log(nuevoarray);

    //localstorage solo recibe strings se debe convertir el arreglo de objetos a strings.

    localStorage.setItem('usuario',JSON.stringify(nuevoarray));
    
    //

    /*
    if(nuevoarray[0].value!=localStorage.getItem('usuario')){
        alert("no puyede ingresar");
    }
*/
    

    let prueba = localStorage.getItem('usuario');
    console.log(prueba[0].nombre)

    if(prueba[0].value!=prueba[0].value){
        alert("no puede ingresar"); 
        console.log(prueba[0].value);
    }
    if (prueba[0].value==prueba[0].value) {
        alert("si puede");
    }


});