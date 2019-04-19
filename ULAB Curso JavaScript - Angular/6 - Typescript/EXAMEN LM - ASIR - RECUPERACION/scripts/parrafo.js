function addParrafo() {
    var divRespuesta = document.getElementById("respuesta");
    var numeroParrafos = divRespuesta.children.length;
    var p = document.createElement("p");
    var texto = document.createTextNode("Este es el párrafo " + (numeroParrafos - 1));
    p.appendChild(texto);
    p.addEventListener("click", eliminar);
    var boton = document.getElementById("boton");
    divRespuesta.insertBefore(p, boton);
}
function eliminar() {
    var elemento = this;
    var divRespuesta = document.getElementById("respuesta");
    divRespuesta.removeChild(elemento);
    var numeroParrafos = divRespuesta.children.length;
    if (numeroParrafos == 2) {
        var h1 = divRespuesta.getElementsByTagName("h1")[0];
        divRespuesta.removeChild(h1);
        var boton = document.getElementById("boton");
        divRespuesta.removeChild(boton);
        document.forms['miFormulario'].titulo.disabled = false;
        document.forms['miFormulario'].numero.disabled = false;
        document.forms['miFormulario'].titulo.value = "";
        document.forms['miFormulario'].numero.value = "";
    }
}
function lanzar() {
    document.forms['miFormulario'].btn_lanzar.style.display = "none";
    var divRespuesta = document.getElementById("respuesta");
    var numero = document.forms['miFormulario'].numero.value;
    var titulo = document.forms['miFormulario'].titulo.value;
    var p;
    var texto;
    var h1 = document.createElement("h1");
    texto = document.createTextNode(titulo);
    h1.appendChild(texto);
    divRespuesta.appendChild(h1);
    for (var i = 1; i <= numero; i++) {
        p = document.createElement("p");
        texto = document.createTextNode("Este es el párrafo " + i);
        p.appendChild(texto);
        divRespuesta.appendChild(p);
        p.addEventListener("click", eliminar);
    }
    var btnMas = document.createElement("input");
    btnMas.setAttribute("value", "Añadir");
    btnMas.setAttribute("type", "button");
    btnMas.setAttribute("id", "boton");
    btnMas.addEventListener('click', addParrafo);
    divRespuesta.appendChild(btnMas);
}
function validar() {
    var numero = document.forms['miFormulario'].numero.value;
    var titulo = document.forms['miFormulario'].titulo.value;
    if (numero == "" || numero == null || /^\s+$/.test(numero))
        return false;
    if (!(/^([1-9]|10)$/.test(numero))) {
        alert("El campo número debe ser un número de 1 a 10");
        document.forms['miFormulario'].numero.style.backgroundColor = "red";
        document.forms['miFormulario'].numero.focus();
        return false;
    }
    if (!/^[A-Z]{5,20}$/.test(titulo)) {
        alert("El título solo puede tener letras mayúsculas y un mínimo de 5 y un máximo de 20 caracteres");
        document.forms['miFormulario'].titulo.style.backgroundColor = "red";
        document.forms['miFormulario'].titulo.focus();
        return false;
    }
    document.forms['miFormulario'].numero.style.backgroundColor = "white";
    document.forms['miFormulario'].titulo.style.backgroundColor = "white";
    document.forms['miFormulario'].titulo.disabled = true;
    document.forms['miFormulario'].numero.disabled = true;
    document.forms['miFormulario'].btn_lanzar.style.display = "block";
    document.forms['miFormulario'].btn_lanzar.onclick = lanzar;
}
window.onload = function () {
    document.forms['miFormulario'].titulo.onblur = validar;
    document.forms['miFormulario'].numero.onblur = validar;
};
