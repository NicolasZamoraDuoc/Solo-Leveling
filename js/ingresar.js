$(document).ready(function() {
    function validateField(field, message) {
        if (field.val().trim() === "") {
            if (!field.next('.error-message').length) {
                field.after('<span class="error-message text-danger">' + message + '</span>');
            }
            return false;
        } else {
            field.next('.error-message').remove();
            return true;
        }
    }

    $('#cuenta, #password').on('input', function() {
        validateField($(this), 'Se deben ingresar datos');
    });

    $('.boton_ingresar').click(function() {
        let cuenta = $('#cuenta').val().trim();
        let password = $('#password').val().trim();
        let valid = true;

        $('.error-message').remove();

        valid = validateField($('#cuenta'), 'Se deben ingresar datos') && valid;
        valid = validateField($('#password'), 'Se deben ingresar datos') && valid;

        if (valid) {
            alert("Cuenta ingresada correctamente.");
        }
    });
});
