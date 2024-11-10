function jugar(eleccion) {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    const mensaje = document.getElementById("mensaje-ppt");

    if (eleccion === eleccionComputadora) {
        mensaje.textContent = `Empate: ambos eligieron ${eleccion}.`;
    } else if (
        (eleccion === "piedra" && eleccionComputadora === "tijera") ||
        (eleccion === "papel" && eleccionComputadora === "piedra") ||
        (eleccion === "tijera" && eleccionComputadora === "papel")
    ) {
        mensaje.textContent = `¡Ganaste! ${eleccion} vence a ${eleccionComputadora}.`;
    } else {
        mensaje.textContent = `Perdiste. ${eleccionComputadora} vence a ${eleccion}.`;
    }
}


