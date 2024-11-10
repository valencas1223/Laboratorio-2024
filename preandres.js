const preguntas = [
    { pregunta: "¿La tierra es plana?", respuesta: false },
    { pregunta: "¿El sol es una estrella?", respuesta: true },
    { pregunta: "¿Los humanos tienen 4 piernas?", respuesta: false },
];
let preguntaActual = 0;

function mostrarPregunta() {
    const p = preguntas[preguntaActual];
    document.getElementById('pregunta').textContent = p.pregunta;
}

function respuesta(userAnswer) {
    const mensaje = document.getElementById('mensaje-pregunta');
    if (userAnswer === preguntas[preguntaActual].respuesta) {
        mensaje.textContent = "¡Correcto!";
    } else {
        mensaje.textContent = "Incorrecto, intenta otra vez.";
    }
    preguntaActual = (preguntaActual + 1) % preguntas.length;
    mostrarPregunta();
}

mostrarPregunta();
