/*document.getElementById('botonBienvenida').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre) {
        mensaje.textContent = `¡Bienvenido, ${nombre}!`;
    } else {
        mensaje.textContent = 'Debe ingresar su nombre.';
    }
});*/
//opciones de boton de bienvenida
document.getElementById('botonBienvenida').addEventListener('click', function() { //con este comando llamos al boton
    const nombre = document.getElementById('nombre').value; //las opciones que le ponemos l boton de bievenida
    const mensaje = document.getElementById('mensaje');

    if (nombre) {
        mensaje.textContent = `¡Bienvenido, ${nombre}!`; // el texto que nos da cuando le damos al boton de bienvenidos
    } else {
        mensaje.textContent = 'Debe ingresar su nombre.'; // mensaje cuando no agregamos nombre y apretamos el boton de bienvenidos 
    }
});

//nuevo element.listener para el boton limpiar
document.getElementById('Borrar').addEventListener('click',function () { //con este comando llamamos al boton
    document.getElementById('nombre').value=''; //limpia el nombre
    document.getElementById('mensaje').textContent='';// limpia el texto
});

