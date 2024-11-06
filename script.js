// Añadir interactividad:Todo lo cargado en el formulario 
//debe reflejarse en la tabla inferior al terminar de rellenar
// cada campo (sin necesidad de botones)
const form = document.getElementById("contactForm");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");
const edadInput = document.getElementById("edad");
const direccionInput = document.getElementById("direccion");
const provinciaInput = document.getElementById("provincia");
const codigoPostalInput = document.getElementById("codigopostal");
const metodoContactoInputs = document.querySelectorAll("input[name='metodoContacto']");
const suscripcionInputs = document.querySelectorAll("input[name='suscripcion']");


function actualizarTabla() {
    document.getElementById("resultadoNombre").textContent = nombreInput.value;
    document.getElementById("resultadoApellido").textContent = apellidoInput.value;
    document.getElementById("resultadoEmail").textContent = emailInput.value;
    document.getElementById("resultadoTelefono").textContent = telefonoInput.value;
    document.getElementById("resultadoEdad").textContent = edadInput.value;
    document.getElementById("resultadoDireccion").textContent = direccionInput.value;
    document.getElementById("resultadoProvincia").textContent = provinciaInput.value;
    document.getElementById("resultadoCodigoPostal").textContent = codigoPostalInput.value;
    
    let metodoContactoSeleccionado = "";
    metodoContactoInputs.forEach(input => {
        if (input.checked) {
            metodoContactoSeleccionado = input.value;
        }
    });
    document.getElementById("resultadoMetodoContacto").textContent = metodoContactoSeleccionado;
    let suscripcionesSeleccionadas = [];
    suscripcionInputs.forEach(input => {
        if (input.checked) {
            suscripcionesSeleccionadas.push(input.value);
        }
    });
    document.getElementById("resultadoSuscripcion").textContent = suscripcionesSeleccionadas.join(", ");
}

[nombreInput, apellidoInput, emailInput, telefonoInput, edadInput, direccionInput, provinciaInput, codigoPostalInput].forEach(input => {
    input.addEventListener("input", actualizarTabla);
});

metodoContactoInputs.forEach(input => {
    input.addEventListener("change", actualizarTabla);
});
suscripcionInputs.forEach(input => {
    input.addEventListener("change", actualizarTabla);
});
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    actualizarTabla(); 
});

