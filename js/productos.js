$(document).ready(function() {

  $.validator.addMethod("soloLetras", function(value, element) {
  
    return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);

  }, "Sólo se permiten letras y espacios en blanco.");

      // Validar formulario con JQuery
    $("#productos").validate({
      rules: {

        id: {
            required: true,
            number: true,
            minlength: 2,
            maxlength: 5,
          },
        categoria:{
            required:true,
          },
        nombres: {
          required: true,
          soloLetras: true,
        },
        descripcion: {
            required: true,
        },        
        precio: {
            required: true,
            number:true,
            min: 0,
        },
        descuento_subscriptor: {
          required: true,
          number: true, 
          min: 0, 
          max: 100 
      },
        descuento_oferta: {
            required: true,
            number: true,
            min:0,
            max: 100,
        },
        
      }, // --> Fin de reglas
      messages: {

        id: {
          required: "El ID es un campo requerido",
          number:"Solo debe contener numeros",
          minlength: "Ingrese minimo 2 carácteres",
          maxlength: "Ingrese minimo 5 carácteres",
          },
        categoria: {
            required: "Debe seleccionar una categoría válida",
          },
        nombres: {
            required: "El nombre es un campo requerido",
            soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
        },
        descripcion: {
            required: "La descripción es un campo requerido",
        },
        precio: {
            required: "El precio es un campo requerido",
            number:"Solo debe contener numeros",
        },
        descuento_subscriptor: {
          required: "El descuento subscriptor es un campo requerido",
          number: "Por favor, introduce solo números", 
          min: "El descuento mínimo es 0%",
          max: "El descuento máximo es de 100%"
      }
      ,
        descuento_oferta: {
            required: "El descuento por oferta es un campo requerido",
            number: "Por favor, introduce solo números", 
            min: "El descuento mínimo es 0%",
            max: "El descuento máximo es de 100%"
        },
      }, // --> Fin de mensajes
      errorClass: "error-text", // Clase CSS para los mensajes de error
    });

    
  });
  
