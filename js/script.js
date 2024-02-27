document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // TODO: Validación de campos
        var name = form.querySelector('input[name="name"]').value.trim();
        var email = form.querySelector('input[name="email"]').value.trim();
        var phone = form.querySelector('input[name="phone"]').value.trim();
        var message = form.querySelector('textarea[name="message"]').value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Por favor, rellena todos los campos.");
            return; 
        }

        // TODO: Validación de dirección de correo electrónico
        if (!validateEmail(email)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return; 
        }

        // TODO: Mensaje de confirmación
        alert("¡Formulario enviado correctamente!");
        form.reset(); 
    });

    // TODO: Función para validar dirección de correo electrónico
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
