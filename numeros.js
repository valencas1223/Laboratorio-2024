let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
    const numero = parseInt(document.getElementById('numero-input').value);
    const mensaje = document.getElementById('mensaje-adivinanza');
    
    if (isNaN(numero) || numero < 1 || numero > 100) {
        mensaje.textContent = "Por favor, ingresa un número entre 1 y 100.";
        return;
    }

    intentos++; 

    if (numero < numeroSecreto) {
        mensaje.textContent = "Demasiado bajo, intenta nuevamente.";
    } else if (numero > numeroSecreto) {
        mensaje.textContent = "Demasiado alto, intenta nuevamente.";
    } else {
        mensaje.textContent = `¡Correcto! Adivinaste el número en ${intentos} intentos.`;
    
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        intentos = 0;
    }
}

