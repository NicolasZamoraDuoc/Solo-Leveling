$(document).ready(function() {
    // Agregar método de validación para correo
    $.validator.addMethod("emailCompleto", function(value, element) {
        // Expresión regular para validar correo electrónico
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value);
    }, 'El formato del correo no es válido');

    // Función para validar el correo chileno
    function esCorreoChileno(email) {
        var dominiosChilenos = ['gmail.cl', 'hotmail.cl', 'yahoo.cl', 'gmail.com']; // Ejemplo, puedes añadir más dominios chilenos
        var emailParts = email.split('@');
        if (emailParts.length === 2) {
            var dominio = emailParts[1].toLowerCase();
            return dominiosChilenos.includes(dominio);
        }
        return false;
    }

    // Función para mostrar mensajes de error
    function mostrarError(campo, mensaje) {
        $(campo).siblings('.error-message').remove(); // Eliminar mensajes de error previos
        $(campo).after('<span class="error-message text-danger">' + mensaje + '</span>');
    }

    // Validar mientras se escribe en el campo de cuenta
    $('#cuenta').on('input', function() {
        var cuenta = $(this).val().trim();
        if (cuenta === "") {
            mostrarError(this, 'Debe ingresar un correo');
        } else if (!esCorreoChileno(cuenta)) {
            mostrarError(this, 'Debe ser un correo chileno válido');
        } else {
            $(this).siblings('.error-message').remove();
        }
    });

    // Validar mientras se escribe en el campo de contraseña
    $('#password').on('input', function() {
        var password = $(this).val().trim();
        if (password === "") {
            mostrarError(this, 'Debe ingresar una contraseña');
        } else if (password.length < 5) {
            mostrarError(this, 'La contraseña debe tener al menos 5 caracteres');
        } else if (password.length > 15) {
            mostrarError(this, 'La contraseña no puede tener más de 15 caracteres');
        } else {
            $(this).siblings('.error-message').remove();
        }
    });

    // Validar al hacer clic en el botón "Ingresar"
    $('.boton_ingresar').click(function() {
        var cuenta = $('#cuenta').val().trim();
        var password = $('#password').val().trim();
        var valid = true;

        $('.error-message').remove();

        if (cuenta === "" || !esCorreoChileno(cuenta)) {
            mostrarError('#cuenta', 'Debe ingresar un correo válido');
            valid = false;
        }

        if (password === "" || password.length < 5 || password.length > 15) {
            if (password === "") {
                mostrarError('#password', 'Debe ingresar una contraseña');
            } else if (password.length < 5) {
                mostrarError('#password', 'La contraseña debe tener al menos 5 caracteres');
            } else {
                mostrarError('#password', 'La contraseña no puede tener más de 15 caracteres');
            }
            valid = false;
        }

        if (valid) {
            alert("Cuenta ingresada correctamente.");
            // Aquí puedes agregar el código para enviar el formulario o realizar otra acción
        }
    });
});
