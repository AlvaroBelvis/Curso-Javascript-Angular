var Series = /** @class */ (function () {
    function Series(nombre, capitulos) {
        this.nombre = nombre;
        this.capitulos = capitulos;
    }
    Series.prototype.getNombre = function () {
        return this.nombre;
    };
    Series.prototype.setNombre = function (nombre) {
        return this.nombre = nombre;
    };
    Series.prototype.getCapitulos = function () {
        return this.capitulos;
    };
    Series.prototype.setCapitulos = function (capitulos) {
        this.capitulos = capitulos;
    };
    return Series;
}());
var series = [];
function grabar() {
    var nombre = document.getElementById("nombre").nodeValue;
    var capitulos = parseInt(document.getElementById("capitulos").nodeValue);
    var serie = new Series(nombre, capitulos);
    series.push(serie);
}
function listar() {
    var div = document.getElementById("lista");
    var ul = document.createElement("ul");
    for (var i = 0; i < series.length; i++) {
        var li = document.createElement("li");
        var textli = document.createTextNode(series[i].getNombre());
        li.appendChild(textli);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    // for(let i=0; i<series.length; i++){
    //     let tr = document.createElement("tr");
    //     let td = document.createElement("td");
    //     let textd = document.createTextNode(series[i].getNombre());
    //     td.appendChild(textd);
    //     tr.appendChild(td);
    // }
}
window.onload = function () {
    var boton = document.getElementById("grabar");
    var boton2 = document.getElementById("modo");
    boton.addEventListener("click", grabar);
    boton2.addEventListener("click", listar);
};
