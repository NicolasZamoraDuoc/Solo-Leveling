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
          selectCheck: "1"  // Validar que no sea la opción predeterminada "1"
        },
        nombre: {
          required: true,
          selectCheck: "1"  // Validar que no sea la opción predeterminada "1"
        },
        cantidad: {
          required: true,
          digits: true
        },
        'image-bodega': {
          required: true
        }
      },
      messages: {
        categoria: {
          required: "El campo Categoría es obligatorio",
          selectCheck: "Debe seleccionar una categoría válida"
        },
        nombre: {
          required: "El campo Nombre es obligatorio",
          selectCheck: "Debe seleccionar un nombre válido"
        },
        cantidad: {
          required: "El campo Cantidad es obligatorio",
          digits: "El campo Cantidad debe ser un número entero"
        },
        'image-bodega': {
          required: "Debe seleccionar una imagen"
        }
      },
      errorClass: "error-text", // Clase CSS para los mensajes de error
    });
  });
  
  
  