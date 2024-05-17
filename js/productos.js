$(document).ready(function() {


      // Validar formulario con JQuery
    $("#productos").validate({
      rules: {

        id: {
            required: true,
                digits: true,
                minlength: 1,
                maxlength: 5,
            
          },

        
        nombres: {
            required: true,
            pattern: /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/, // Acepta letras, espacios y letras con acentos y ñ
        },
        descripcion: {
            required: true,
            pattern: /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/, // Acepta letras, espacios y letras con acentos y ñ
        },        
        precio: {
          required: true,
          digits: true,
            minlength: 1,
            maxlength: 9,
          
        },
        descuento_subscriptor: {
            required: true,
            digits: true,
            minlength: 1,
            maxlength: 3,
        },
        descuento_oferta: {
            required: true,
            digits: true,
            minlength: 1,
            maxlength: 3,
        },
        
      }, // --> Fin de reglas
      messages: {

        id: {
            required: "El ID es un campo requerido",
            digits: "Sólo digitos",

          },

        nombres: {
          required: "El nombre es un campo requerido",
          soloLetras: "El nombre sólo puede contener letras y espacios en blanco",
        },
        descripcion: {
            required: "La descripción es un campo requerido",
            soloLetras: "La descripción sólo puede contener letras y espacios en blanco",
        },
        precio: {
          required: "El precio es un campo requerido",
          digits: "Sólo digitos",
          
        },
        descuento_subscriptor:{ 
            required: "El descuento subscriptor es un campo requerido", 
            digits: "Sólo digitos",
            maxlength:"El descuento máximo % 100.",
        },
        descuento_oferta: {
            required: "El descuento por oferta es un campo requerido",
            digits: "Sólo digitos",
            maxlength:"El descuento máximo % 100.",
        },
        


      }, // --> Fin de mensajes
      errorClass: "error-text", // Clase CSS para los mensajes de error
    });

    
  });
  
