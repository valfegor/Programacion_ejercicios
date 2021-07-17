//eliminar elementos del DOM 
//se puede eliminar el elemento por si mismo o se puede realizar desde el padre.

//selecciono el primer enlace
const primerEnlance = document.querySelector('a');

//ejemplo puedo tener un carrito de compras y puedo utilizar el metodo REMOVE.

//esto elimina el elemento por si mismo.
primerEnlance.remove();

//tambien se puede eliminar desde el padre.

const navegacion = document.querySelector('.navegacion');

//el segundo paso es verificar que elemento es el que se quiere eliminar.

//Con .children voy a obtener los diferentes elementos que son hijos de la clase seleccionada y la referencia para poder eliminar , es decir devuelve un array en este caso quiero eliminar la posicion numero 2.
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);



