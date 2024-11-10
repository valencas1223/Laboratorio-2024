const cartas = ["🐶", "🐱", "🐶", "🐱"];
let seleccion = [];
let cartasElementos = document.getElementById('cartas');
let mensajeMemoria = document.getElementById('mensaje-memoria');

// Embaraja las cartas y crea los elementos
cartas.sort(() => 0.5 - Math.random());
cartas.forEach((carta, index) => {
    let cartaEl = document.createElement("button");
    cartaEl.textContent = "?";
    cartaEl.onclick = () => seleccionarCarta(index);
    cartasElementos.appendChild(cartaEl);
});

function seleccionarCarta(indice) {
    if (seleccion.length < 2) {
        seleccion.push(indice);
        cartasElementos.children[indice].textContent = cartas[indice];
        if (seleccion.length === 2) {
            verificarCartas();
        }
    }
}

function verificarCartas() {
    if (cartas[seleccion[0]] === cartas[seleccion[1]]) {
        mensajeMemoria.textContent = "¡Pareja encontrada!";
        seleccion = [];
    } else {
        setTimeout(() => {
            seleccion.forEach(index => cartasElementos.children[index].textContent = "?");
            seleccion = [];
            mensajeMemoria.textContent = "No es una pareja. Intenta de nuevo.";
        }, 1000);
    }
}
