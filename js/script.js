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
/*----barra de navegacion de CLIENTE (falta hacerla)-----*/
if (document.getElementById('menu_cliente')) {
    fetch('m_cliente.html').then(response => {
    return response.text();
    }).then(htmlContent => {
    document.getElementById('menu_acliente').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};
/*----barra de navegacion de ADMINISTRADOR (falta hacerla)-----*/
if (document.getElementById('menu_admin')) {
    fetch('m_admin.html').then(response => {
    return response.text();
    }).then(htmlContent => {
    document.getElementById('menu_admin').innerHTML = htmlContent;
    window.scrollTo(0, 0);
    });
};