//- En la página de "Acerca de" hacer un botón de "Leer más". 
//Deberá mostrarse el currículum de manera abreviada y al hacer
// clic en el botón de leer más, deberá revelarse el CV completo
// (rellenar con Lorem Ipsum si es necesario)


document.getElementById('leerMasBtn').addEventListener('click', () => {
    const cvCompleto = document.getElementById('cvCompleto');
    const leerMasBtn = document.getElementById('leerMasBtn');
    
    if (cvCompleto.style.display === 'none') {
        cvCompleto.style.display = 'block';
        leerMasBtn.innerText = 'cerrar';
    } else {
        cvCompleto.style.display = 'none';
        leerMasBtn.innerText = 'Leer más';
    }
});