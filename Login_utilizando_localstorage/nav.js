

const formulario = document.getElementById("form");
const usuario = document.getElementById("username").value;
const contrasto = document.getElementById("contraseña").value;


formulario.addEventListener('submit',function(e){
    let prueba = localStorage.getItem('usuario');

    e.preventDefault();

    if(prueba==null){
        return alert("registrese primero");
    }
    else{
        return alert("si puede ingresar");
    }

    
    
});