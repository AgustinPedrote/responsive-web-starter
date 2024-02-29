document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // TODO: Validación de campos
        var name = form.querySelector('input[name="name"]').value.trim();
        var email = form.querySelector('input[name="email"]').value.trim();
        var phone = form.querySelector('input[name="phone"]').value.trim();
        var message = form.querySelector('textarea[name="message"]').value.trim();

        // Validación de nombre para que no contenga números y tenga una longitud válida
        if (!validateName(name)) {
            return; 
        }

        // Validación de teléfono para que solo contenga números y tenga exactamente 9 dígitos
        if (!validatePhone(phone)) {
            alert("Por favor, introduce un número de teléfono válido de 9 dígitos.");
            return;
        }

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Por favor, rellena todos los campos.");
            return;
        }

        // Validación de dirección de correo electrónico
        if (!validateEmail(email)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return;
        }

        // Agregar clase para activar animación
        form.classList.add('sending');

        // Obtener el elemento de mensaje de confirmación
        var confirmationMessage = document.querySelector(".confirmation-message");

        // Mostrar mensaje de confirmación
        confirmationMessage.style.display = "block";

        // Ocultar mensaje de confirmación después de 3 segundos
        setTimeout(function () {
            confirmationMessage.style.display = "none";
            form.classList.remove('sending'); // Eliminar la clase 'sending'
            form.reset(); // Resetear el formulario
        }, 2000);
    });

    // Función para validar dirección de correo electrónico
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Función para validar nombre sin números y con longitud válida
    function validateName(name) {
        var re = /^[A-Za-z ]+$/; 
        if (!re.test(name)) {
            alert("Por favor, introduce solo letras y espacios en el nombre.");
            return false;
        }

        if (name.length < 3 || name.length > 50) {
            alert("Por favor, el nombre debe tener entre 3 y 50 caracteres.");
            return false;
        }

        return true;
    }

    // Función para validar teléfono solo con números y exactamente 9 dígitos
    function validatePhone(phone) {
        var re = /^\d{9}$/; 
        return re.test(phone);
    }
});
