//voy a crear la funcionalidad para poder agregar un amigo.

//se debe tomar en consideracion una pequeña aplicacion para llevar una agenda.

//Aqui se va a almacenar toda la coleccion de amigos
let listaAmigos = [];


//se reciben todos los datos para empezar a construir nuestro objeto amigo

function añadirAmigo(pid,pname,pcountry,pbirthday,pemail){

    //se genera el objeto
    let nuevoAmigo = {

        id:pid,
        nombre:pname,
        ciudad:pcountry,
        cumpleaños:pbirthday,
        email:pemail

    };

    //este nuevo objeto lo vamos a agregar a la lista de objetos.

    listaAmigos.push(nuevoAmigo);
    }