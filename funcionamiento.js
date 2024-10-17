
document.addEventListener('DOMContentLoaded', function () {


    const form = document.getElementById('contactForm');
    const btnCargar = document.getElementById('btnCargar');

    // Manejar el evento de enviar del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        cargarDatos();
    });
    btnCargar.addEventListener('click', function () {
        cargarDatos();
    });

    function cargarDatos() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const edad = document.getElementById('edad').value;
        const direccion = document.getElementById('direccion').value;
        const provincia = document.getElementById('provincia').value;
        const codigoPostal = document.getElementById('codigopostal').value;
        const metodoContacto = document.querySelector('input[name="metodoContacto"]:checked').value;
        
    
        const suscripciones = [];
        document.querySelectorAll('input[name="suscripcion"]:checked').forEach((checkbox) => {
            suscripciones.push(checkbox.value);
        });


        document.getElementById('resultadoNombre').textContent = nombre;
        document.getElementById('resultadoApellido').textContent = apellido;
        document.getElementById('resultadoEmail').textContent = email;
        document.getElementById('resultadoTelefono').textContent = telefono;
        document.getElementById('resultadoEdad').textContent = edad;
        document.getElementById('resultadoDireccion').textContent = direccion;
        document.getElementById('resultadoProvincia').textContent = provincia;
        document.getElementById('resultadoCodigoPostal').textContent = codigoPostal;
        document.getElementById('resultadoMetodoContacto').textContent = metodoContacto;
        document.getElementById('resultadoSuscripcion').textContent = suscripciones.join(', ');
    }
});
