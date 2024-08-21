function toggleLogin() {
    var boton = document.getElementById("boton");
    if (boton.textContent === "Iniciar Sesion") {
        boton.textContent = "Cerrar Sesion";
    } else {
        boton.textContent = "Iniciar Sesion";
    }
}

function eliminarBoton() {
    var boton = document.querySelector('.input--button--right');
    boton.parentNode.removeChild(boton);
}

function mostrarAlerta() {
    alert("¡Haz hecho clic en el botón 'me gusta'!");
}