$(document).ready(function() {
    // Agregar método de validación para que un campo sólo acepte letras y espacios en blanco
    $.validator.addMethod("soloLetras", function(value, element) {
      return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    }, "Sólo se permiten letras y espacios en blanco.");
  
    // Método para validar que la opción seleccionada no sea la predeterminada
    $.validator.addMethod("selectCheck", function(value, element, arg) {
      return arg !== value;
    }, "Debe seleccionar una opción válida.");
  
    // Método para validar que el archivo seleccionado es una imagen
    $.validator.addMethod("imageCheck", function(value, element) {
      if (element.files.length === 0) {
        return false;
      }
      var fileType = element.files[0].type;
      return fileType.startsWith('image/');
    }, "Debe seleccionar una imagen válida.");
  
    // Validar formulario con jQuery
    $("#bodega").validate({
      rules: {
        categoria: {
          required: true,
        },
        nombre: {
          required: true,
        },
        cantidad: {
          required: true,
          number: true,
          min:1,
        },
      },
      messages: {
        categoria: {
          required: "Debe seleccionar una categoría válida",
        },
        nombre: {
          required: "Debe seleccionar un nombre válido",
        },
        cantidad: {
          required: "La cantidad es un campo requerido",
          number: "Por favor, introduce solo números", 
          min: "La cantidad debe ser mayor que cero",
        },
      },
      errorClass: "error-text", // Clase CSS para los mensajes de error
    });
  });
  
  
  