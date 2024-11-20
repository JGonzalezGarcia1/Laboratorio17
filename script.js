// Mostrar mensaje de bienvenida
document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenido a mi portafolio personal!');
});

// Validación de formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('¡Formulario enviado correctamente!');
    }
});
