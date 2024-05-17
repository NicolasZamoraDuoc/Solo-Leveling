$(document).ready(function() {
    $('.boton_ingresar').click(function() {
        let cuenta = $('#cuenta').val().trim();
        let password = $('#password').val().trim();
        let valid = true;

        
        $('.error-message').remove();

        if (cuenta === "") {
            $('#cuenta').after('<span class="error-message text-danger">Se deben ingresar datos</span>');
            valid = false;
        }

        if (password === "") {
            $('#password').after('<span class="error-message text-danger">Se deben ingresar datos</span>');
            valid = false;
        }

        
        if (valid) {
            
            alert("Cuenta ingresada correctamente.");
        }
    });
});