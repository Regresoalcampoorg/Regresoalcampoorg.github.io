document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const firstName = document.getElementById('firstName').value;
    const secondName = document.getElementById('secondName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validación básica
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Usuario registrado:', { firstName, secondName, email, password });
    let usuario = {
        nombre:firstName,
        apellido:secondName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,

    }
    localStorage.setItem("usuarios", JSON.stringify(usuario))
    alert('Registro exitoso!');
});

// Manejo de clics para botones de registro social
document.getElementById('googleRegister').addEventListener('click', function() {
    alert('Registro con Google no implementado.');

    let usuario = {
        



    }

});

document.getElementById('facebookRegister').addEventListener('click', function() {
    alert('Registro con Facebook no implementado.');
});

// Manejo de clic para "¿Olvidaste tu contraseña?"
document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Funcionalidad de recuperación de contraseña no implementada.');
});

// Manejo de clic para "Iniciar Sesión"
document.getElementById('loginLink').addEventListener('click', function() {
    alert('Funcionalidad de inicio de sesión no implementada.');
});