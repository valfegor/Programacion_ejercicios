//vamos a construir un boton
//que cuando se precione aparezca el menu y cuando presione en cerrar se oculta

//cuando se presiona el boton se muestra o se oculta el footer.

//en este caso el boton tiene la clase de boton flotante.

const btnflotante = document.querySelector('.btn-flotante');

//el footer tiene una clase.

//vamos a seleccionar la clase.

const footer = document.querySelector('.footer');

//cuando se da clic en el boton se ejecuta la funcion.

//Es un evento es decir ese boton va a esperar a que suceda algo en pantalla.

//el primer parentesis lleva la accion en este caso quiero el click

//es decir puedo pasar una funcion ya declarada o una funcion anonima.

//pero se declara como un arrowfunction
btnflotante.addEventListener('click',()=>{

})


//o de la manera convensional.

btnflotante.addEventListener('click' , mostrarOcultarFooter);

//lo que mueve el footer de arriba hacia abajo es una clase de CSS.

//.btn-flotante.activo{backgroud-color:var(--primario) , color: var(--claro)}

//ahora otra clase para el footer .footer.activo {bottom:0}

//entonces lo que tenemos que hacer es agregar y quitar la clase dependiendo de lo que realice

//podemos comprobar si esa clase de activo esta

function mostrarOcultarFooter () {
    

    //vamos a colocar un IF.
    //se puede hacer uso de un metodo llamado contain este valida si un elemento tiene o no tiene una clase.

    //si tiene la clase de activo
    //significa que la clase se añadio
    //la primera vez que se haga clic no va a tener la clase de activo por lo tanto esto recae en el Else.
    //se añade las clases al boton flotante
    if(footer.classList.contains('.activo')){
        footer.classList.remove('.activo');
        btnflotante.classList.remove('.activo');

    }
    else{
        footer.classList.add('.activo');
        btnflotante.classList.add('activo');
    }
    

}



function mostrarOcultarFooter () {
    

    //vamos a colocar un IF.
    //se puede hacer uso de un metodo llamado contain este valida si un elemento tiene o no tiene una clase.

    //si tiene la clase de activo
    //significa que la clase se añadio
    //la primera vez que se haga clic no va a tener la clase de activo por lo tanto esto recae en el Else.
    //se añade las clases al boton flotante
    //tambien se puede hacer uso de THIS ya que estamos haciendo referencia al boton , el boton es el que dispara el evento
    if(footer.classList.contains('.activo')){
        footer.classList.remove('.activo');
        this.classList.remove('.activo');

    }
    else{
        footer.classList.add('.activo');
        this.classList.add('activo');
    }
    

}