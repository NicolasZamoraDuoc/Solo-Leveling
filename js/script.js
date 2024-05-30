/*----Repetir productos-----*/
if (document.getElementById('mini_producto')) {
    var tarjeta = document.getElementById('mini_producto').outerHTML;
    var tarjetas = '';
    for (i = 0; i < 20; i++) {
    tarjetas = tarjetas + tarjeta;
    }
    document.getElementById('mini_producto').outerHTML = tarjetas;
}

/*----barra de navegacion de ANONIMO-----*/
if (document.getElementById('menu_anonimo')) {
    fetch('m_anonimo.html').then(response => {
    return response.text();
    }).then(htmlContent => {
    document.getElementById('menu_anonimo').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};
/*----barra de navegacion de CLIENTE-----*/
if (document.getElementById('menu_cliente')) {
    fetch('m_cliente.html').then(response => {
    return response.text();
    }).then(htmlContent => {
    document.getElementById('menu_cliente').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};
/*----barra de navegacion de ADMINISTRADOR-----*/
if (document.getElementById('menu_admin')) {
    fetch('m_admin.html').then(response => {
    return response.text();
    }).then(htmlContent => {
    document.getElementById('menu_admin').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};

/*----poner la foto que el usuario elija-----*/
document.getElementById('upload-image').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('user-image-preview').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(file);
    }
  });

/*----Hacer que el usuario pueda colocar la foto que desee en su perfil -----*/
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())

  /*----para limpiar los formularios -----*/
  document.getElementById('id_btnLimpiar').addEventListener('click', function() {
    document.getElementById('miFormulario').reset();
});

